"use client";

import { useState } from "react";
import { projects, type Project } from "@/data/projects";
import { Photo } from "@/components/ui/Photo";
import { Lightbox } from "@/components/ui/Lightbox";
import { ProjectDashboard } from "@/components/ui/ProjectDashboard";
import { SectionHeading } from "@/components/ui/SectionHeading";

function photoCount(n: number) {
  if (n === 1) return "1 fotka";
  if (n >= 2 && n <= 4) return `${n} fotky`;
  return `${n} fotek`;
}

export function Gallery() {
  const [project, setProject] = useState<Project | null>(null);
  const [index, setIndex] = useState<number | null>(null);

  const openProject = (p: Project) => {
    setProject(p);
    setIndex(null);
  };

  return (
    <section id="galerie" aria-labelledby="galerie-title" className="mx-auto max-w-[90rem] px-4 pt-28 sm:px-6 lg:px-10">
      <SectionHeading
        id="galerie-title"
        eyebrow="Galerie"
        title="Hotové zakázky, střecha po střeše."
        intro="Každá zakázka má vlastní sadu fotek. Klikněte na projekt, zobrazí se všechny jeho fotky. Fotku si pak můžete zvětšit a listovat šipkami."
      />
      <ul className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <li key={p.slug}>
            <button type="button" onClick={() => openProject(p)} className="group block w-full text-left">
              <div className="overflow-hidden">
                <div className="transition-transform duration-500 ease-out group-hover:scale-[1.03]">
                  <Photo
                    src={p.cover.src}
                    alt={p.cover.alt}
                    label={`${p.title}, úvodní`}
                    ratio="4 / 3"
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
              </div>
              <span className="mt-4 flex items-baseline justify-between gap-4 border-b border-line pb-3">
                <span className="font-wide text-[19px] font-extrabold group-hover:text-green">{p.title}</span>
                <span className="shrink-0 text-[13px] font-semibold text-ink-soft">{photoCount(p.photos.length)}</span>
              </span>
              <span className="mt-2 block text-[14px] text-ink-soft">{p.place}</span>
            </button>
          </li>
        ))}
      </ul>

      <ProjectDashboard project={project} onOpenPhoto={setIndex} onClose={() => setProject(null)} />
      <Lightbox
        title={project?.title ?? ""}
        photos={project?.photos ?? []}
        index={index}
        onIndexChange={setIndex}
        onClose={() => setIndex(null)}
      />
    </section>
  );
}
