// Galerie po projektech. Fotky patří do public/fotky/projekty/<slug>/.

export type ProjectPhoto = { src?: string; alt: string };

export type Project = {
  slug: string;
  title: string;
  place: string;
  cover: ProjectPhoto;
  photos: ProjectPhoto[];
  /** CSS object-position pro ořez úvodní fotky v kartě (výchozí střed). */
  coverPosition?: string;
};

// Každá zakázka má ve složce podsložku "HERO - galerie" (úvodní fotka) a podsložku s ostatními fotkami.
// Názvy podsložek jsou nekonzistentní, proto se zadávají ručně. Soubory jsou .webp.
const project = (
  slug: string,
  title: string,
  work: string,
  heroPath: string,
  galleryDir: string | null,
  galleryFiles: string[],
  coverPosition?: string,
): Project => {
  const url = (path: string) => encodeURI(`/fotky/projekty/${slug}/${path}`);
  const srcs = [url(heroPath), ...galleryFiles.map((f) => url(`${galleryDir}/${f}`))];
  const photos = srcs.map((src, i) => ({ src, alt: `${work} ${title}, fotka ${i + 1}` }));
  return { slug, title, place: work, cover: photos[0], photos, coverPosition };
};

const HERO = "HERO - galerie/01.webp";
const nums = (...n: number[]) => n.map((i) => `${String(i).padStart(2, "0")}.webp`);

export const projects: Project[] = [
  project("01-veltezi-louny", "Veltěže, Louny", "Demontáž eternitu", HERO, "galerie", nums(2, 3, 4)),
  project("02-chlumec-usti-nad-labem", "Chlumec, Ústí nad Labem", "Demontáž eternitu", HERO, "galerie", nums(2, 3, 4, 5, 6), "50% 30%"),
  project("03-malesov-hostka", "Malešov, Hoštka", "Demontáž eternitu", HERO, "galerie", nums(2, 3, 4, 5, 6, 7)),
  project("04-blazim-louny", "Blažim, Louny", "Demontáž eternitu", HERO, "galerie", nums(2, 3, 4, 5, 6, 7)),
  project("05-zitenice-litomerice", "Žitenice, Litoměřice", "Demontáž eternitu", HERO, "galerie", nums(2, 3, 4, 5, 6, 7), "50% 35%"),
  project("06-msene-lazne", "Mšené Lázně", "Demontáž eternitu", HERO, "galerie", nums(2)),
  project("07-prosec-pod-jestedem-cesky-dub", "Proseč pod Ještědem, Český Dub", "Likvidace eternitu", HERO, "galerie", nums(2, 3, 4)),
  project("08-litomerice", "Litoměřice", "Likvidace eternitu", "HERO - galerie/09.webp", "galerie", nums(1, 4, 5, 6, 7, 8)),
  project("09-liberec", "Liberec", "Likvidace eternitu", HERO, null, []),
  project("10-jencice", "Jenčice", "Likvidace eternitu", HERO, "galerie", nums(2, 3, 4, 5)),
  project("11-repcice-trebusin", "Řepčice, Třebušín", "Demontáž eternitu", HERO, "galerie", nums(2, 3)),
  project("12-hostka", "Hoštka", "Demontáž eternitu", HERO, "galerie", nums(2, 3, 4)),
  project("13-libochovice", "Libochovice", "Demontáž eternitu", HERO, "galerie", nums(2, 3, 4)),
];
