"use client";

import { useEffect, useRef } from "react";
import type { Project } from "@/data/projects";
import { Photo } from "./Photo";

type Props = {
  project: Project | null;
  onOpenPhoto: (index: number) => void;
  onClose: () => void;
};

/**
 * Přehled všech fotek jedné zakázky nad nativním <dialog> (Esc zavírá, fokus zůstává uvnitř).
 * Klik na fotku otevře Lightbox s listováním.
 */
export function ProjectDashboard({ project, onOpenPhoto, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const open = project !== null;

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      aria-label={project ? `Fotky zakázky: ${project.title}` : "Fotky zakázky"}
      className="m-auto h-full max-h-none w-full max-w-none overflow-y-auto bg-paper p-0 text-ink backdrop:bg-ink/60"
    >
      {project && (
        <div className="mx-auto max-w-[90rem] px-4 py-6 sm:px-6 lg:px-10">
          <div className="flex items-start justify-between gap-4 border-b border-line pb-5">
            <div>
              <h3 className="font-wide text-[clamp(1.4rem,3vw,2rem)] font-extrabold">{project.title}</h3>
              <p className="mt-1 text-[14px] text-ink-soft">{project.place}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-11 shrink-0 items-center gap-2 border border-line px-4 text-[14px] font-semibold hover:border-ink"
              autoFocus
            >
              Zavřít <span aria-hidden="true">✕</span>
            </button>
          </div>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {project.photos.map((photo, i) => (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => onOpenPhoto(i)}
                  aria-label={`Zvětšit fotku ${i + 1} z ${project.photos.length}`}
                  className="group block w-full overflow-hidden text-left"
                >
                  <div className="transition-transform duration-500 ease-out group-hover:scale-[1.03]">
                    <Photo
                      src={photo.src}
                      alt={photo.alt}
                      label={photo.alt}
                      ratio="4 / 3"
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </dialog>
  );
}
