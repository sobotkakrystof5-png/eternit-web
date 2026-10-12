import type { CzRegionId } from "./czMap";

export type ServiceRegion = {
  id: CzRegionId;
  name: string;
};

export const serviceRegions: ServiceRegion[] = [
  { id: "ustecky", name: "Ústecký kraj" },
  { id: "liberecky", name: "Liberecký kraj" },
  { id: "stredocesky", name: "Středočeský kraj" },
];

/** Sídlo, vyznačené na mapě. */
export const homeBase = { name: "Litoměřice", lon: 14.1318, lat: 50.5335 };
