// Jednorázový převod hranic krajů ČR (GeoJSON) na SVG cesty do src/data/czMap.ts.
// Zdroj dat: https://github.com/siwekm/czech-geojson (kraje.json, data ČÚZK, CC BY 4.0).
// Použití: node scripts/geojson-to-svg.mjs cesta/ke/kraje.json
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const input = process.argv[2];
if (!input) {
  console.error("Chybí cesta ke GeoJSON souboru: node scripts/geojson-to-svg.mjs kraje.json");
  process.exit(1);
}

const WIDTH = 1000;
const TOLERANCE = 0.9; // zjednodušení v jednotkách viewBoxu
const LAT0 = (49.8 * Math.PI) / 180;

const slugs = {
  "Hlavní město Praha": "praha",
  "Středočeský kraj": "stredocesky",
  "Jihočeský kraj": "jihocesky",
  "Plzeňský kraj": "plzensky",
  "Karlovarský kraj": "karlovarsky",
  "Ústecký kraj": "ustecky",
  "Liberecký kraj": "liberecky",
  "Královéhradecký kraj": "kralovehradecky",
  "Pardubický kraj": "pardubicky",
  "Kraj Vysočina": "vysocina",
  "Jihomoravský kraj": "jihomoravsky",
  "Olomoucký kraj": "olomoucky",
  "Zlínský kraj": "zlinsky",
  "Moravskoslezský kraj": "moravskoslezsky",
};

const geo = JSON.parse(readFileSync(input, "utf8"));
const rings = (g) => (g.type === "Polygon" ? [g.coordinates] : g.coordinates);

let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
const project = ([lon, lat]) => [lon * Math.cos(LAT0), -lat];
for (const f of geo.features) for (const poly of rings(f.geometry)) for (const ring of poly) for (const c of ring) {
  const [x, y] = project(c);
  minX = Math.min(minX, x); maxX = Math.max(maxX, x);
  minY = Math.min(minY, y); maxY = Math.max(maxY, y);
}
const scale = WIDTH / (maxX - minX);
const HEIGHT = Math.round((maxY - minY) * scale);
const toView = (c) => {
  const [x, y] = project(c);
  return [(x - minX) * scale, (y - minY) * scale];
};

function simplify(pts, tol) {
  if (pts.length < 3) return pts;
  const keep = new Uint8Array(pts.length);
  keep[0] = keep[pts.length - 1] = 1;
  const stack = [[0, pts.length - 1]];
  while (stack.length) {
    const [a, b] = stack.pop();
    const [ax, ay] = pts[a], [bx, by] = pts[b];
    const dx = bx - ax, dy = by - ay, len = Math.hypot(dx, dy) || 1;
    let max = 0, idx = -1;
    for (let i = a + 1; i < b; i++) {
      const d = Math.abs(dy * pts[i][0] - dx * pts[i][1] + bx * ay - by * ax) / len;
      if (d > max) { max = d; idx = i; }
    }
    if (max > tol && idx > 0) { keep[idx] = 1; stack.push([a, idx], [idx, b]); }
  }
  return pts.filter((_, i) => keep[i]);
}

// Uzavřený prstenec má shodný první a poslední bod, proto se dělí na dvě poloviny.
function simplifyRing(pts, tol) {
  const open = pts.slice(0, -1);
  const mid = Math.floor(open.length / 2);
  const a = simplify(open.slice(0, mid + 1), tol);
  const b = simplify([...open.slice(mid), open[0]], tol);
  return [...a.slice(0, -1), ...b.slice(0, -1)];
}

const r = (n) => Math.round(n * 10) / 10;
const regions = geo.features.map((f) => {
  const name = f.name ?? f.properties?.name;
  const slug = slugs[name];
  if (!slug) throw new Error(`Neznámý kraj: ${name}`);
  let d = "", sx = 0, sy = 0, n = 0;
  for (const poly of rings(f.geometry)) for (const ring of poly) {
    const pts = simplifyRing(ring.map(toView), TOLERANCE);
    d += "M" + pts.map(([x, y]) => `${r(x)} ${r(y)}`).join("L") + "Z";
    for (const [x, y] of pts) { sx += x; sy += y; n++; }
  }
  return { id: slug, name, d, center: [r(sx / n), r(sy / n)] };
});

const out = `// Vygenerováno skriptem scripts/geojson-to-svg.mjs, ručně neupravovat.
// Zdroj: ČÚZK přes github.com/siwekm/czech-geojson (CC BY 4.0).

export type CzRegionId =
${regions.map((x) => `  | "${x.id}"`).join("\n")};

export type CzRegionShape = {
  id: CzRegionId;
  name: string;
  d: string;
  center: [number, number];
};

export const czMapViewBox = "0 0 ${WIDTH} ${HEIGHT}";

/** Převod zeměpisných souřadnic (WGS84) na souřadnice viewBoxu mapy. */
export function czProject(lon: number, lat: number): [number, number] {
  const x = (lon * ${Math.cos(LAT0)} - ${minX}) * ${scale};
  const y = (-lat - ${minY}) * ${scale};
  return [Math.round(x * 10) / 10, Math.round(y * 10) / 10];
}

export const czRegions: CzRegionShape[] = ${JSON.stringify(regions, null, 2)};
`;
const target = path.join(path.dirname(fileURLToPath(import.meta.url)), "../src/data/czMap.ts");
writeFileSync(target, out);
console.log(`Zapsáno ${regions.length} krajů, viewBox ${WIDTH}x${HEIGHT}, ${(out.length / 1024).toFixed(1)} kB`);
