"use client";

import { useState } from "react";

const videos = [
  { id: "LmDS52qariE", title: "Client story" },
  { id: "DI79VC-3ZN4", title: "Client story" },
  { id: "sE35UBvm67U", title: "Client story" },
  { id: "Sxacl7IPafE", title: "Client story" },
  { id: "diZfyfoy47Q", title: "Client story" },
];

export default function VideoGallery() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {videos.map((video) => (
          <button
            key={video.id}
            type="button"
            onClick={() => setActive(video.id)}
            className="relative min-w-[280px] snap-start overflow-hidden rounded-2xl bg-white shadow-md sm:min-w-[340px]"
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

      {active ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="w-full max-w-3xl overflow-hidden rounded-2xl bg-black"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="aspect-video">
              <iframe
                title="Client story"
                src={`https://www.youtube.com/embed/${active}?autoplay=1`}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
            <button
              type="button"
              onClick={() => setActive(null)}
              className="w-full py-3 text-sm text-white/80 hover:text-white"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
