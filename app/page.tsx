import Image from "next/image";
import type { ReactNode } from "react";
import LeadForm from "./components/LeadForm";
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

function SplitPhoto({
  src,
  alt,
  position = "center 18%",
  className = "",
}: {
  src: string;
  alt: string;
  position?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative h-full min-h-[520px] w-full overflow-hidden bg-sand lg:min-h-[720px] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        style={{ objectPosition: position }}
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
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
      className={`flex h-full min-h-[520px] flex-col justify-center px-6 py-16 sm:px-12 lg:px-16 xl:px-20 ${tones[tone]} ${className}`}
    >
      <div className="mx-auto w-full max-w-xl">{children}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-background">
      <header className="relative z-50 border-b border-black/[0.06] bg-paper">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 py-5 sm:px-8 lg:px-12">
          <a href="#top" className="min-w-0">
            <p className="font-serif text-[1.65rem] leading-none tracking-[-0.03em] text-ink">
              The Musse
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
              className="inline-flex rounded-full bg-terracotta px-5 py-2.5 text-[13px] font-medium text-white transition hover:bg-[#864640]"
            >
              Save your spot
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="grid lg:grid-cols-2">
          <SplitCopy tone="cream">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-sage">
              4-week 1:1 marketing intensive
            </p>
            <h1 className="mt-5 font-serif text-[2.6rem] leading-[1.08] tracking-[-0.03em] text-ink sm:text-6xl">
              Run your own marketing. Get consistent clients.
            </h1>
            <p className="mt-6 text-[1.05rem] font-light leading-8 text-foreground/75">
              Hi, I&apos;m Anna. Four personalised sessions where I teach you
              messaging, content, ads and systems — so you can attract clients
              without an expensive agency. This is the exact system I used to
              build a six-figure business in under a year, 14,000km from home.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[12px] uppercase tracking-[0.18em] text-sage">
              <span>1:1 with Anna</span>
              <span>4 private sessions</span>
              <span>Female founders</span>
            </div>
            <div className="mt-10 rounded-[2rem] border border-black/[0.06] bg-paper p-6 shadow-[0_20px_50px_-32px_rgba(92,70,55,0.45)] sm:p-8">
              <LeadForm id="hero-form" />
            </div>
          </SplitCopy>
          <SplitPhoto
            src="/images/hero.png"
            alt="Anna Espina, business coach and founder of The Musse"
            position="center 12%"
          />
        </section>

        <section id="how-it-works" className="bg-paper py-20 sm:py-28">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-sage">
                The method
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.03em] text-ink sm:text-5xl">
                Four private workshops. Built around your business.
              </h2>
            </div>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {weeks.map((item) => (
                <article key={item.week} className="rounded-[1.75rem] bg-cream p-8 sm:p-9">
                  <p className="font-serif text-4xl text-terracotta/80">{item.week}</p>
                  <h3 className="mt-6 font-serif text-2xl leading-snug text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-light leading-7 text-foreground/70">
                    {item.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="anna" className="grid lg:grid-cols-2">
          <SplitPhoto
            src="/images/anna.png"
            alt="Anna Espina, your 1:1 marketing coach"
            position="center 16%"
          />
          <SplitCopy tone="sand">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-clay">
              Your consultant
            </p>
            <h2 className="mt-4 font-serif text-5xl tracking-[-0.03em] text-ink sm:text-6xl">
              Anna Espina
            </h2>
            <p className="mt-3 text-sm uppercase tracking-[0.18em] text-clay">
              Founder and part-time chief marketing officer
            </p>
            <p className="mt-8 font-light leading-8 text-foreground/80">
              With over 10 years in marketing, strategy and business growth, I
              have worked across agencies and brands in Australia and Europe —
              seeing what actually drives results behind the scenes. I built my
              own business from scratch, in a new country, with no contacts and
              no shortcuts, and scaled it to six figures in under a year. Today
              I help founders, freelancers and service-based businesses
              simplify their marketing, attract better clients, and build
              systems that generate consistent revenue.
            </p>
          </SplitCopy>
        </section>

        <section className="grid lg:grid-cols-2">
          <SplitPhoto
            className="lg:order-2"
            src="/images/vs-programs.png"
            alt="Anna Espina, founder of The Musse"
            position="center 12%"
          />
          <SplitCopy tone="paper" className="lg:order-1">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-sage">
              4-week marketing intensive
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-[1.1] tracking-[-0.03em] text-ink sm:text-5xl">
              This vs other programs
            </h2>
            <p className="mt-6 font-light leading-8 text-foreground/75">
              If you&apos;ve been scrolling the internet, you&apos;ve
              probably seen 27 different “business coaches”, 10-step
              frameworks, “just post more content” advice, and courses that
              leave you more confused than when you started.
            </p>
            <p className="mt-4 font-light leading-8 text-foreground/75">
              This isn&apos;t another course you watch and forget. It&apos;s
              1:1, personalised to your business, and focused on actually
              getting things done. No 100 people on a Zoom call. No guessing
              what applies to you. No information overload.
            </p>
            <div className="mt-10 rounded-[2rem] border border-black/[0.05] bg-cream p-7">
              <LeadForm heading="Get the free resource" id="compare-form" />
            </div>
          </SplitCopy>
        </section>

        <section className="grid lg:grid-cols-2">
          <SplitPhoto
            src="/images/for-you.png"
            alt="Working on your own terms"
            position="center 22%"
          />
          <SplitCopy tone="cream">
            <h2 className="font-serif text-4xl tracking-[-0.03em] text-ink sm:text-5xl">
              This is for you if...
            </h2>
            <ul className="mt-10 space-y-5">
              {fit.map((item) => (
                <li key={item} className="flex gap-4 font-light leading-7 text-foreground/80">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                  {item}
                </li>
              ))}
            </ul>
          </SplitCopy>
        </section>

        <section className="grid lg:grid-cols-2">
          <SplitPhoto
            className="lg:order-2"
            src="/images/outcomes.png"
            alt="Building a marketing system"
            position="center 40%"
          />
          <SplitCopy tone="clay" className="lg:order-1">
            <h2 className="font-serif text-4xl tracking-[-0.03em] text-cream sm:text-5xl">
              By the end of the 4 weeks, you&apos;ll have:
            </h2>
            <ul className="mt-10 space-y-5">
              {outcomes.map((item) => (
                <li key={item} className="flex gap-4 font-light leading-7 text-cream/90">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cream" />
                  {item}
                </li>
              ))}
            </ul>
          </SplitCopy>
        </section>

        <section className="grid lg:grid-cols-2">
          <SplitPhoto
            src="/images/deep-dive.jpg"
            alt="Anna Espina working from a tropical balcony"
            position="center 30%"
          />
          <SplitCopy tone="paper">
            <h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] text-ink sm:text-5xl">
              A deep dive into your business strategy
            </h2>
            <p className="mt-6 font-light leading-8 text-foreground/75">
              This is not a generic coaching call. This is a personalised
              4-session intensive where we work directly on your business, your
              offer, your marketing, and your growth strategy. Each session is
              tailored to your stage, your goals, and exactly what needs to
              change to start attracting consistent clients.
            </p>
          </SplitCopy>
        </section>

        <section id="results" className="bg-background py-20 sm:py-28">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <h2 className="font-serif text-4xl tracking-[-0.03em] text-ink sm:text-5xl">
              What people are saying
            </h2>
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {testimonials.map((item) => (
                <blockquote
                  key={item.name}
                  className="flex flex-col justify-between rounded-[2rem] bg-paper p-8"
                >
                  <p className="font-light leading-7 text-foreground/75">
                    “{item.quote}”
                  </p>
                  <footer className="mt-8">
                    <cite className="not-italic font-medium text-ink">{item.name}</cite>
                    <p className="mt-1 text-sm text-foreground/50">{item.role}</p>
                  </footer>
                </blockquote>
              ))}
            </div>
            <div className="mt-14">
              <VideoGallery />
            </div>
          </div>
        </section>

        <section id="book" className="grid lg:grid-cols-2">
          <SplitPhoto
            className="lg:order-2"
            src="/images/cta-bg.png"
            alt="Anna Espina on a coaching call"
            position="center 20%"
          />
          <SplitCopy tone="sand" className="lg:order-1">
            <h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] text-ink sm:text-5xl">
              Unlock your business potential today
            </h2>
            <p className="mt-6 font-light leading-8 text-foreground/75">
              Don&apos;t miss this exclusive opportunity to gain the
              knowledge and strategy that will take your business to the next
              level — with Anna in the room, not a replay.
            </p>
            <div className="mt-10 rounded-[2rem] bg-paper p-7">
              <LeadForm heading="Start today" id="cta-form" />
            </div>
          </SplitCopy>
        </section>
      </main>

      <footer className="bg-paper py-8 text-center text-sm text-foreground/50">
        © {new Date().getFullYear()} The Musse · Anna Espina
      </footer>
    </div>
  );
}
