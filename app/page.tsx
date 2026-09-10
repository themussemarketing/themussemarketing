import Image from "next/image";
import type { ReactNode } from "react";
import GoogleReviewCard, { GoogleReviewsCtaCard } from "./components/GoogleReviewCard";
import LeadForm from "./components/LeadForm";
import ParallaxLayer from "./components/ParallaxLayer";
import Reveal from "./components/Reveal";
import VideoGallery from "./components/VideoGallery";

const weeks = [
  {
    week: "01",
    title: "Messaging & Offer",
    copy: "We clarify your positioning, offer and what actually makes people buy.",
  },
  {
    week: "02",
    title: "Organic, Paid Content & AI",
    copy: "We define what to say, what to post, and how to attract the right audience.",
  },
  {
    week: "03",
    title: "Ads, simplified",
    copy: "We break down Meta ads so you can start generating leads without wasting money.",
  },
  {
    week: "04",
    title: "Conversion system",
    copy: "We set up your funnel, landing and CTAs so you can turn leads into clients.",
  },
];

const fit = [
  "You’re a service-based or personal brand business ready to grow with strategy, not guesswork",
  "You’re in industries like marketing, coaching, creative services, or other purpose-driven businesses",
  "You’re already making revenue but want to scale in a more structured and aligned way",
  "You want to refine your offer, messaging, and marketing so it actually converts",
  "You’re ready to build a simple system to attract and close clients consistently",
];

const outcomes = [
  "A clear offer and messaging that converts",
  "A content system you actually understand",
  "A simple way to generate leads (organic + ads)",
  "A structure to consistently get clients",
];

const testimonials = [
  {
    quote:
      "The Musse is a brilliant marketing agency. Anna has supported me with my social media strategy, content production and scheduling across both Instagram and LinkedIn with great success. Highly recommend.",
    name: "Emma Fulu",
    role: "Founder of Equality Institute of Melbourne",
  },
  {
    quote:
      "The Musse School is great! The people there are really nice and know what they’re doing. They helped me a lot with my online stuff. Highly recommend!",
    name: "Maca Lopez",
    role: "Sydney, Australia",
  },
  {
    quote:
      "I could not be happier with The Musse Collective, the best service and support ever. Thanks so much.",
    name: "Bella Dee",
    role: "Founder of a Gym",
  },
  {
    quote:
      "Anna has helped me scale my salon based on the Gold Coast. I could not be happier with her help and support in growing my business.",
    name: "Nicole Bonzani",
    role: "Founder, Brondie Salon",
  },
  {
    quote:
      "Working with the Musse was a delight. They really understood my brand and made my vision a reality. I'm really happy with the end result and I hope to work with them again!",
    name: "Susan Blasco Stanger",
    role: "Solopreneur Lawyer",
  },
];

const zigzagRow = "grid lg:h-[700px] lg:grid-cols-2";

function SplitPhoto({
  src,
  alt,
  position = "center 18%",
  className = "",
  priority = false,
  maxQuality = false,
  zoom = 1,
}: {
  src: string;
  alt: string;
  position?: string;
  className?: string;
  priority?: boolean;
  maxQuality?: boolean;
  zoom?: number;
}) {
  return (
    <div
      className={`relative min-h-[420px] w-full overflow-hidden bg-sand lg:h-full lg:min-h-0 ${className}`}
    >
      <ParallaxLayer zoom={zoom} strength={priority ? 14 : 32}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          quality={100}
          unoptimized={maxQuality}
          className="object-cover"
          style={{ objectPosition: position }}
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </ParallaxLayer>
    </div>
  );
}

function SplitCopy({
  children,
  tone = "cream",
  className = "",
}: {
  children: ReactNode;
  tone?: "cream" | "sand" | "paper" | "clay";
  className?: string;
}) {
  const tones = {
    cream: "bg-cream",
    sand: "bg-sand",
    paper: "bg-paper",
    clay: "bg-clay",
  };

  return (
    <div
      className={`flex h-full min-h-[420px] flex-col justify-center px-6 py-12 sm:px-12 lg:min-h-0 lg:px-16 lg:py-10 xl:px-20 ${tones[tone]} ${className}`}
    >
      <div className="mx-auto w-full max-w-xl">{children}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-background">
      <header className="relative z-50 border-b border-black/[0.06] bg-paper">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 py-3 sm:px-8 lg:px-12">
          <a href="#top" className="min-w-0">
            <p className="font-serif text-[1.45rem] leading-none tracking-[-0.03em] text-ink sm:text-[1.65rem]">
              The Musse Marketing School
            </p>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.28em] text-sage">
              with Anna Espina
            </p>
          </a>

          <nav className="hidden items-center gap-9 text-[13px] font-medium text-ink/70 lg:flex">
            <a href="#how-it-works" className="transition hover:text-ink">
              How it works
            </a>
            <a href="#anna" className="transition hover:text-ink">
              Your coach
            </a>
            <a href="#results" className="transition hover:text-ink">
              Results
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#how-it-works"
              className="hidden rounded-full border border-black/10 px-4 py-2 text-[13px] font-medium text-ink/80 transition hover:border-black/20 hover:text-ink sm:inline-flex"
            >
              The intensive
            </a>
            <a
              href="#book"
              className="inline-flex max-w-[11.5rem] items-center justify-center rounded-full bg-terracotta px-3 py-2 text-center text-[10px] font-medium leading-tight tracking-[0.08em] text-white transition hover:bg-[#864640] sm:max-w-none sm:px-5 sm:text-[11px]"
            >
              APPLY FOR A FREE STRATEGY CALL
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="grid lg:h-[calc(100svh-4.5rem)] lg:grid-cols-2 lg:overflow-hidden">
          <SplitCopy tone="cream" className="!min-h-0 py-10 lg:h-full lg:overflow-hidden lg:py-6 lg:px-10 xl:px-12">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-sage">
              4-week 1:1 marketing intensive
            </p>
            <h1 className="mt-3 font-serif text-[2.15rem] leading-[1.08] tracking-[-0.03em] text-ink lg:text-[2.45rem] xl:text-[2.85rem]">
              Stop guessing with your marketing. Build a system that brings you
              clients.
            </h1>
            <p className="mt-3 text-[0.95rem] font-light leading-6 text-foreground/75 lg:text-base lg:leading-7">
              Hi, I&apos;m Anna. In four weeks and four private sessions,
              I&apos;ll teach you the messaging, content, ads and systems you
              need to attract clients, without paying thousands every month to
              an agency.
            </p>
            <p className="mt-3 text-[0.95rem] font-light leading-6 text-foreground/75 lg:text-base lg:leading-7">
              It&apos;s the same approach I used to build a six-figure business
              in under a year, 14,000 km from home.
            </p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-sage">
              <span>1:1 with Anna</span>
              <span>4 private sessions</span>
              <span>Female founders</span>
            </div>
            <div className="mt-5 rounded-[1.5rem] border border-black/[0.06] bg-paper p-4 shadow-[0_20px_50px_-32px_rgba(92,70,55,0.45)] sm:p-5">
              <LeadForm id="hero-form" compact />
            </div>
          </SplitCopy>
          <SplitPhoto
            src="/images/anna-hero.jpg"
            alt="Anna Espina, business coach and founder of The Musse Marketing"
            position="center 30%"
            priority
            maxQuality
            zoom={1.3}
            className="lg:!min-h-0"
          />
        </section>

        <section id="how-it-works" className="bg-paper py-20 sm:py-28">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <Reveal>
              <div className="max-w-3xl">
                <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-sage">
                  The method
                </p>
                <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.03em] text-ink sm:text-5xl">
                  Four private workshops. Built around your business.
                </h2>
              </div>
            </Reveal>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {weeks.map((item, index) => (
                <Reveal key={item.week} delay={index * 90}>
                  <article className="rounded-[1.75rem] bg-cream p-8 sm:p-9">
                    <p className="font-serif text-4xl text-terracotta/80">{item.week}</p>
                    <h3 className="mt-6 font-serif text-2xl leading-snug text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-3 font-light leading-7 text-foreground/70">
                      {item.copy}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="anna" className={zigzagRow}>
          <Reveal from="left" className="h-full min-h-[420px] lg:min-h-0">
            <SplitPhoto
              src="/images/anna-consultant.jpg"
              alt="Anna Espina, your 1:1 marketing coach"
              position="center 32%"
              maxQuality
            />
          </Reveal>
          <Reveal from="right" delay={120} className="h-full min-h-[420px] lg:min-h-0">
            <SplitCopy tone="sand">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-clay">
                Your consultant
              </p>
              <h2 className="mt-3 font-serif text-4xl tracking-[-0.03em] text-ink lg:text-[2.75rem]">
                Anna Espina
              </h2>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-clay">
                Founder and part-time chief marketing officer
              </p>
              <p className="mt-6 font-light leading-7 text-foreground/80">
                With over 10 years in marketing, strategy and business growth, I
                have worked across agencies and brands in Australia and Europe,
                seeing what actually drives results behind the scenes. I built my
                own business from scratch, in a new country, with no contacts and
                no shortcuts, and scaled it to six figures in under a year. Today
                I help founders, freelancers and service-based businesses
                simplify their marketing, attract better clients, and build
                systems that generate consistent revenue.
              </p>
            </SplitCopy>
          </Reveal>
        </section>

        <section className={zigzagRow}>
          <Reveal from="right" className="h-full min-h-[420px] lg:order-2 lg:min-h-0">
            <SplitPhoto
              src="/images/for-you.png"
              alt="Anna Espina, founder of The Musse Marketing"
              position="center 22%"
            />
          </Reveal>
          <Reveal from="left" delay={120} className="h-full min-h-[420px] lg:order-1 lg:min-h-0">
            <SplitCopy tone="paper">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-sage">
                4-week marketing intensive
              </p>
              <h2 className="mt-3 font-serif text-4xl leading-[1.1] tracking-[-0.03em] text-ink lg:text-[2.75rem]">
                This vs other programs
              </h2>
              <p className="mt-5 font-light leading-7 text-foreground/75">
                If you&apos;ve been scrolling the internet, you&apos;ve
                probably seen 27 different “business coaches”, 10-step
                frameworks, “just post more content” advice, and courses that
                leave you more confused than when you started.
              </p>
              <p className="mt-3 font-light leading-7 text-foreground/75">
                This isn&apos;t another course you watch and forget. It&apos;s
                1:1, personalised to your business, and focused on actually
                getting things done. No 100 people on a Zoom call. No guessing
                what applies to you. No information overload.
              </p>
              <div className="mt-6 rounded-[1.5rem] border border-black/[0.05] bg-cream p-5">
                <LeadForm id="compare-form" compact />
              </div>
            </SplitCopy>
          </Reveal>
        </section>

        <section className={zigzagRow}>
          <Reveal from="left" className="h-full min-h-[420px] lg:min-h-0">
            <SplitPhoto
              src="/images/anna-call.jpg"
              alt="Working on your own terms"
              position="center 62%"
              maxQuality
            />
          </Reveal>
          <Reveal from="right" delay={120} className="h-full min-h-[420px] lg:min-h-0">
            <SplitCopy tone="cream">
              <h2 className="font-serif text-4xl tracking-[-0.03em] text-ink lg:text-[2.75rem]">
                This is for you if...
              </h2>
              <ul className="mt-7 space-y-3.5">
                {fit.map((item) => (
                  <li key={item} className="flex gap-4 font-light leading-7 text-foreground/80">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                    {item}
                  </li>
                ))}
              </ul>
            </SplitCopy>
          </Reveal>
        </section>

        <section className={zigzagRow}>
          <Reveal from="right" className="h-full min-h-[420px] lg:order-2 lg:min-h-0">
            <SplitPhoto
              src="/images/outcomes.png"
              alt="Building a marketing system"
              position="center 40%"
            />
          </Reveal>
          <Reveal from="left" delay={120} className="h-full min-h-[420px] lg:order-1 lg:min-h-0">
            <SplitCopy tone="clay">
              <h2 className="font-serif text-4xl tracking-[-0.03em] text-cream lg:text-[2.75rem]">
                By the end of the 4 weeks, you&apos;ll have:
              </h2>
              <ul className="mt-7 space-y-3.5">
                {outcomes.map((item) => (
                  <li key={item} className="flex gap-4 font-light leading-7 text-cream/90">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cream" />
                    {item}
                  </li>
                ))}
              </ul>
            </SplitCopy>
          </Reveal>
        </section>

        <section className={zigzagRow}>
          <Reveal from="left" className="h-full min-h-[420px] lg:min-h-0">
            <SplitPhoto
              src="/images/deep-dive.jpg"
              alt="Anna Espina working from a tropical balcony"
              position="center 30%"
            />
          </Reveal>
          <Reveal from="right" delay={120} className="h-full min-h-[420px] lg:min-h-0">
            <SplitCopy tone="paper">
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] text-ink lg:text-[2.75rem]">
                A deep dive into your business strategy
              </h2>
              <p className="mt-6 font-light leading-7 text-foreground/75">
                This is not a generic coaching call. This is a personalised
                4-session intensive where we work directly on your business, your
                offer, your marketing, and your growth strategy. Each session is
                tailored to your stage, your goals, and exactly what needs to
                change to start attracting consistent clients.
              </p>
            </SplitCopy>
          </Reveal>
        </section>

        <section id="results" className="bg-background py-20 sm:py-28">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <Reveal>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-sage">
                    Google Business reviews
                  </p>
                  <h2 className="mt-3 font-serif text-4xl tracking-[-0.03em] text-ink sm:text-5xl">
                    What people are saying
                  </h2>
                </div>
                <a
                  href="https://share.google/WVJ0RDNCEOG9eWdC2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 self-start rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-[#202124] transition hover:bg-cream"
                >
                  <span className="flex items-center gap-1 text-[#FABB05]" aria-hidden="true">
                    ★★★★★
                  </span>
                  <span className="font-medium">6 Google reviews · 5.0</span>
                </a>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {testimonials.map((item, index) => (
                <Reveal key={item.name} delay={index * 80}>
                  <GoogleReviewCard
                    quote={item.quote}
                    name={item.name}
                    role={item.role}
                    index={index}
                  />
                </Reveal>
              ))}
              <Reveal delay={testimonials.length * 80}>
                <GoogleReviewsCtaCard />
              </Reveal>
            </div>
            <Reveal delay={160}>
              <div className="mt-14">
                <VideoGallery />
              </div>
            </Reveal>
          </div>
        </section>

        <section id="book" className={zigzagRow}>
          <Reveal from="right" className="h-full min-h-[420px] lg:order-2 lg:min-h-0">
            <SplitPhoto
              src="/images/anna-hero.jpg"
              alt="Anna Espina on a coaching call"
              position="center 22%"
              maxQuality
            />
          </Reveal>
          <Reveal from="left" delay={120} className="h-full min-h-[420px] lg:order-1 lg:min-h-0">
            <SplitCopy tone="sand">
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] text-ink lg:text-[2.75rem]">
                Unlock your business potential today
              </h2>
              <p className="mt-5 font-light leading-7 text-foreground/75">
                Don&apos;t miss this exclusive opportunity to gain the
                knowledge and strategy that will take your business to the next
                level, with Anna in the room, not a replay.
              </p>
              <div className="mt-6 rounded-[1.5rem] bg-paper p-5">
                <LeadForm id="cta-form" compact />
              </div>
            </SplitCopy>
          </Reveal>
        </section>
      </main>

      <footer className="bg-paper py-8 text-center text-sm text-foreground/50">
        © {new Date().getFullYear()} The Musse Marketing School · Anna Espina
      </footer>
    </div>
  );
}
