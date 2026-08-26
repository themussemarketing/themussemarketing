"use client";

import { useEffect, useState } from "react";

const videos = [
  { id: "LmDS52qariE", title: "Client story" },
  { id: "DI79VC-3ZN4", title: "Client story" },
  { id: "sE35UBvm67U", title: "Client story" },
  { id: "Sxacl7IPafE", title: "Client story" },
  { id: "diZfyfoy47Q", title: "Client story" },
];

export default function VideoGallery() {
  const [active, setActive] = useState<string | null>(null);
  const loop = [...videos, ...videos];

  useEffect(() => {
    if (!active) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <div className="overflow-hidden">
        <div
          className={`flex w-max gap-4 ${active ? "[animation-play-state:paused]" : "animate-marquee"} motion-reduce:animate-none hover:[animation-play-state:paused]`}
        >
          {loop.map((video, index) => (
            <button
              key={`${video.id}-${index}`}
              type="button"
              onClick={() => setActive(video.id)}
              className="relative w-[280px] shrink-0 overflow-hidden rounded-2xl bg-white shadow-md sm:w-[340px]"
              aria-label={`Play ${video.title}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://img.youtube.com/vi/${video.id}/sddefault.jpg`}
                alt=""
                className="aspect-video w-full object-cover"
              />
              <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-terracotta text-white">
                <svg viewBox="0 0 24 24" className="ml-0.5 h-4 w-4 fill-current">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          ))}
        </div>
      </div>

      {active ? (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4 sm:p-8">
          <button
            type="button"
            aria-label="Close video"
            onClick={() => setActive(null)}
            className="absolute right-5 top-5 z-[210] flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink shadow-lg transition hover:bg-cream"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6L6 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-black">
            <div className="aspect-video">
              <iframe
                title="Client story"
                src={`https://www.youtube.com/embed/${active}?autoplay=1`}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
