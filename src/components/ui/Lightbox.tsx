"use client";

import { useCallback, useEffect, useRef } from "react";
import type { ProjectPhoto } from "@/data/projects";
import { Photo } from "./Photo";

type Props = {
  title: string;
  photos: ProjectPhoto[];
  index: number | null;
  onIndexChange: (index: number) => void;
  onClose: () => void;
};

/**
 * Lightbox nad nativním <dialog>: Esc zavírá, fokus zůstává uvnitř,
 * po zavření se vrací na prvek, který ho otevřel. Šipky listují.
 */
export function Lightbox({ title, photos, index, onIndexChange, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const open = index !== null;

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const step = useCallback(
    (dir: 1 | -1) => {
      if (index === null) return;
      onIndexChange((index + dir + photos.length) % photos.length);
    },
    [index, photos.length, onIndexChange],
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  };

  const photo = index !== null ? photos[index] : null;

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onKeyDown={onKeyDown}
      onClick={(e) => e.target === ref.current && onClose()}
      aria-label={`Galerie: ${title}`}
      className="m-auto h-full max-h-none w-full max-w-none bg-ink/95 p-0 backdrop:bg-ink/60"
    >
      {photo && index !== null && (
        <div className="flex h-full flex-col px-4 py-4 text-paper sm:px-8">
          <div className="flex items-center justify-between gap-4">
            <p className="text-[14px] font-semibold">
              {title}
              <span className="ml-3 font-normal text-paper/60" aria-live="polite">
                {index + 1} / {photos.length}
              </span>
            </p>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-11 items-center gap-2 border border-paper/30 px-4 text-[14px] font-semibold hover:border-paper"
              autoFocus
            >
              Zavřít <span aria-hidden="true">✕</span>
            </button>
          </div>

          <div className="relative my-4 flex min-h-0 flex-1 items-center justify-center">
            <div className="relative h-full max-h-[80svh] w-full max-w-6xl">
              <Photo src={photo.src} alt={photo.alt} label={photo.alt} sizes="100vw" tone="dark" fill className="object-contain" />
            </div>
          </div>

          <div className="flex justify-center gap-3">
            <button
              type="button"
              onClick={() => step(-1)}
              className="h-11 border border-paper/30 px-5 text-[14px] font-semibold hover:border-paper"
            >
              <span aria-hidden="true">←</span> Předchozí
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              className="h-11 border border-paper/30 px-5 text-[14px] font-semibold hover:border-paper"
            >
              Další <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      )}
    </dialog>
  );
}
