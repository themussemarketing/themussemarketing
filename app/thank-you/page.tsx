import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "You’re in | The Musse",
  description:
    "Your details are with Anna. Book your 30-minute call to lock in your first 1:1 session.",
  robots: { index: false, follow: false },
};

const CALENDLY_SRC =
  "https://calendly.com/annaespina7/30-minute-meeting-the-musse-marketing-clone?embed_type=Inline&hide_gdpr_banner=1&background_color=ffffff&text_color=3a312b&primary_color=9c524d";

export default function ThankYouPage() {
  return (
    <div className="flex min-h-full flex-col bg-background">
      <header className="relative z-50 border-b border-black/[0.06] bg-paper">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 py-5 sm:px-8 lg:px-12">
          <a href="/" className="min-w-0">
            <p className="font-serif text-[1.65rem] leading-none tracking-[-0.03em] text-ink">
              The Musse
            </p>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.28em] text-sage">
              with Anna Espina
            </p>
          </a>
          <a
            href="/"
            className="inline-flex rounded-full border border-black/10 px-5 py-2.5 text-[13px] font-medium text-ink/80 transition hover:border-black/20 hover:text-ink"
          >
            Back to home
          </a>
        </div>
      </header>

      <main className="flex-1 bg-paper px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-[11px] font-medium uppercase tracking-[0.28em] text-sage">
            Book your call
          </p>
          <h1 className="mt-3 text-center font-serif text-4xl tracking-[-0.03em] text-ink sm:text-5xl">
            Choose a time with Anna
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-center font-light leading-7 text-foreground/70">
            30 minutes. No pressure — just a clear look at your marketing and
            whether the intensive is the right next step.
          </p>

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-black/[0.06] bg-white">
            <iframe
              title="Book a 30-minute meeting with Anna Espina"
              src={CALENDLY_SRC}
              scrolling="no"
              className="h-[900px] w-full border-0 bg-white"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
