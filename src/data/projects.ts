// Galerie po projektech. Fotky patří do public/fotky/projekty/<slug>/ (slug = název složky).
// Fotky jsou ve formátu .webp. Po přidání dalších fotek zvyš počet (poslední argument) u dané zakázky.

export type ProjectPhoto = { src?: string; alt: string };

export type Project = {
  slug: string;
  title: string;
  place: string;
  cover: ProjectPhoto;
  photos: ProjectPhoto[];
};

// Soubory jsou očíslované 01.webp, 02.webp, ... a 01 je vždy úvodní fotka zakázky.
const projectPhotos = (slug: string, count: number, title: string): ProjectPhoto[] =>
  Array.from({ length: count }, (_, i) => ({
    src: `/fotky/projekty/${slug}/${String(i + 1).padStart(2, "0")}.webp`,
    alt: `${title}, fotka ${i + 1}`,
  }));

const project = (slug: string, title: string, work: string, count: number): Project => {
  const photos = projectPhotos(slug, count, `${work} ${title}`);
  return { slug, title, place: work, cover: photos[0], photos };
};

export const projects: Project[] = [
  project("01-veltezi-louny", "Veltěže, Louny", "Demontáž eternitu", 4),
  project("02-chlumec-usti-nad-labem", "Chlumec, Ústí nad Labem", "Demontáž eternitu", 6),
  project("03-malesov-hostka", "Malešov, Hoštka", "Demontáž eternitu", 6),
  project("04-blazim-louny", "Blažím, Louny", "Demontáž eternitu", 7),
  project("05-zitenice-litomerice", "Žitenice, Litoměřice", "Demontáž eternitu", 7),
  project("06-msene-lazne", "Mšené Lázně", "Demontáž eternitu", 2),
  project("07-prosec-pod-jestedem-cesky-dub", "Proseč pod Ještědem, Český Dub", "Likvidace eternitu", 4),
  project("08-litomerice", "Litoměřice", "Likvidace eternitu", 7),
  project("09-liberec", "Liberec", "Likvidace eternitu", 1),
  project("10-jencice", "Jenčice", "Likvidace eternitu", 5),
  project("11-repcice-trebusin", "Řepčice, Třebušín", "Demontáž eternitu", 5),
  project("12-hostka", "Hoštka", "Demontáž eternitu", 3),
  project("13-libochovice", "Libochovice", "Demontáž eternitu", 4),
];
