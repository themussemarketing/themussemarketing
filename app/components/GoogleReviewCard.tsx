const avatarColors = ["#4285F4", "#EA4335", "#FBBC05", "#34A853", "#8E24AA"];

export function GoogleMark({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l5.7-5.7C34.2 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.5-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3.1 0 5.8 1.1 8 3l5.7-5.7C34.2 6.1 29.4 4 24 4 16.3 4 9.6 8.3 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.3C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.2-3.5 5.7-6.6 7.1l.1.1 6.3 5.3C36.9 41.5 44 36 44 24c0-1.3-.1-2.5-.4-3.5z"
      />
    </svg>
  );
}

export function GoogleStars() {
  return (
    <div className="flex items-center gap-px" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-[#FABB05]">
          <path d="M12 17.3l6.18 3.7-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

export default function GoogleReviewCard({
  quote,
  name,
  role,
  index,
}: {
  quote: string;
  name: string;
  role: string;
  index: number;
}) {
  const initial = name.charAt(0);
  const color = avatarColors[index % avatarColors.length];

  return (
    <blockquote className="flex h-full flex-col rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_1px_2px_rgba(60,64,67,0.12),0_1px_3px_rgba(60,64,67,0.08)]">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-medium text-white"
            style={{ backgroundColor: color }}
          >
            {initial}
          </span>
          <div className="min-w-0">
            <cite className="block truncate text-[15px] not-italic font-medium text-[#202124]">
              {name}
            </cite>
            <p className="truncate text-xs text-[#5f6368]">{role}</p>
          </div>
        </div>
        <GoogleMark />
      </div>

      <div className="mt-3 flex items-center gap-2">
        <GoogleStars />
        <span className="text-xs text-[#5f6368]">5/5</span>
      </div>

      <p className="mt-3 flex-1 text-[15px] leading-6 text-[#3c4043]">{quote}</p>

      <p className="mt-4 text-xs font-medium text-[#5f6368]">Posted on Google</p>
    </blockquote>
  );
}

export function GoogleReviewsCtaCard() {
  return (
    <a
      href="https://share.google/WVJ0RDNCEOG9eWdC2"
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-full flex-col justify-between rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_1px_2px_rgba(60,64,67,0.12),0_1px_3px_rgba(60,64,67,0.08)] transition hover:bg-[#f8f9fa]"
    >
      <div>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-black/10">
              <GoogleMark className="h-6 w-6" />
            </span>
            <div>
              <p className="text-[15px] font-medium text-[#202124]">The Musse Marketing</p>
              <p className="text-xs text-[#5f6368]">Google Business Profile</p>
            </div>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <GoogleStars />
          <span className="text-sm font-medium text-[#202124]">5.0</span>
          <span className="text-xs text-[#5f6368]">(6 reviews)</span>
        </div>
        <p className="mt-3 text-[15px] leading-6 text-[#3c4043]">
          All 6 Google reviews are 5 stars. Read the full set on our Google Business
          Profile.
        </p>
      </div>
      <p className="mt-4 text-sm font-medium text-[#1a73e8]">View on Google</p>
    </a>
  );
}
