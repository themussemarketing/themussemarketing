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
    title: "Brand Positioning & Strategy",
    copy: "Make your brand the obvious choice. We'll get clear on who you're selling to, what makes your brand different and how to communicate your value in a way that attracts the right customers.",
  },
  {
    week: "02",
    title: "Content Strategy & AI",
    copy: "Create content that does more than look good. Learn how to create content that builds trust, attracts your ideal audience and supports sales, while using AI to simplify your marketing and save time.",
  },
  {
    week: "03",
    title: "Paid Ads & Customer Acquisition",
    copy: "Get your brand in front of the right people. Learn how to approach Meta Ads strategically, whether you're looking to generate eCommerce sales, attract qualified leads or reach new customers.",
  },
  {
    week: "04",
    title: "Conversion & Growth",
    copy: "Turn attention into revenue. We'll look at your website, customer journey, sales funnel and marketing performance to identify opportunities to improve conversions and create a plan for sustainable growth.",
  },
];

const fit = [
  "You've built a brand you believe in, but you're not seeing the growth you want.",
  "You're working towards your first 6 figures or ready to scale beyond them.",
  "You're spending time creating content without seeing consistent results.",
  "You want to invest in paid advertising but don't know where to start.",
  "You're already running ads but aren't getting the return you expected.",
  "You want to use AI to make your marketing smarter and more efficient.",
  "You're ready to stop guessing and start making more strategic marketing decisions.",
];

const outcomes = [
  "A stronger brand position. Know who you're targeting, what makes your brand different and how to communicate your value.",
  "A content strategy with purpose. Understand what to create, where to show up and how your content contributes to growth.",
  "A customer acquisition plan. Learn how to attract new customers through organic marketing and paid advertising.",
  "A clearer path to conversion. Identify opportunities to improve your website, landing pages and customer journey.",
  "The confidence to make better marketing decisions. Know where to focus your time, energy and budget.",
];

const testimonials = [
  {
    quote:
      "Anna has helped me scale my salon based on the Gold Coast. I could not be happier with her help and support in growing my business.",
    name: "Nicole Bonzani",
    role: "Founder, Brondie Salon",
  },
  {
    quote:
      "I could not be happier with The Musse Collective, the best service and support ever. Thanks so much.",
    name: "Bella Dee",
    role: "Founder of a Gym",
  },
  {
    quote:
      "The Musse is a brilliant marketing agency. Anna has supported me with my social media strategy, content production and scheduling across both Instagram and LinkedIn with great success. Highly recommend.",
    name: "Emma Fulu",
    role: "Founder of Equality Institute of Melbourne",
  },
  {
    quote:
      "Working with the Musse was a delight. They really understood my brand and made my vision a reality. I'm really happy with the end result and I hope to work with them again!",
    name: "Susan Blasco Stanger",
    role: "Solopreneur Lawyer",
  },
  {
    quote:
      "The Musse School is great! The people there are really nice and know what they’re doing. They helped me a lot with my online stuff. Highly recommend!",
    name: "Maca Lopez",
    role: "Sydney, Australia",
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
              The Musse School
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
              The method
            </a>
            <a
              href="#book"
              className="inline-flex max-w-[11.5rem] items-center justify-center rounded-full bg-terracotta px-3 py-2 text-center text-[10px] font-medium leading-tight tracking-[0.08em] text-white transition hover:bg-[#864640] sm:max-w-none sm:px-5 sm:text-[11px]"
            >
              BOOK YOUR FREE DISCOVERY CALL
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="grid lg:h-[calc(100svh-4.5rem)] lg:grid-cols-2 lg:overflow-hidden">
          <SplitCopy tone="cream" className="!min-h-0 py-10 lg:h-full lg:overflow-hidden lg:py-6 lg:px-10 xl:px-12">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-sage">
              1:1 marketing mentorship for female founders
            </p>
            <h1 className="mt-3 font-serif text-[2.15rem] leading-[1.08] tracking-[-0.03em] text-ink lg:text-[2.45rem] xl:text-[2.85rem]">
              Build a brand you love. And a business that makes money.
            </h1>
            <p className="mt-3 text-[0.95rem] font-light leading-6 text-foreground/75 lg:text-base lg:leading-7">
              If you&apos;re a female founder in beauty, luxury or lifestyle,
              this is for you. I built my marketing business from zero to 6
              figures. No connections. No investors. Now I help ambitious female
              founders do the same.
            </p>
            <p className="mt-3 text-[0.95rem] font-light leading-6 text-foreground/75 lg:text-base lg:leading-7">
              Whether you&apos;re growing an eCommerce brand or a premium
              service-based business, I&apos;ll help you attract the right
              customers, generate more sales and build a marketing strategy that
              actually drives revenue. Four weeks. Four private sessions. A
              strategy built around your business.
            </p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-sage">
              <span>4 weeks</span>
              <span>4 private sessions</span>
              <span>Female founders</span>
            </div>
            <div className="mt-5 rounded-[1.5rem] border border-black/[0.06] bg-paper p-4 shadow-[0_20px_50px_-32px_rgba(92,70,55,0.45)] sm:p-5">
              <LeadForm id="hero-form" compact />
            </div>
          </SplitCopy>
          <SplitPhoto
            src="/images/anna-hero.jpg"
            alt="Anna Espina, founder of The Musse School"
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
                  Good marketing isn&apos;t about doing more. It&apos;s about
                  doing what works.
                </h2>
                <p className="mt-5 font-light leading-7 text-foreground/70">
                  You don&apos;t need to be everywhere, follow every trend or
                  spend thousands on ads without knowing what you&apos;re doing.
                  You need a clear strategy that connects your brand, your
                  customers and your business goals.
                </p>
                <p className="mt-3 font-light leading-7 text-foreground/70">
                  Over four weeks, we&apos;ll work together on the four pillars
                  of marketing that help businesses grow. This isn&apos;t another
                  pre-recorded course or generic business coaching program —
                  it&apos;s personalised 1:1 mentorship with someone who works
                  hands-on with brands every day.
                </p>
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
                About me
              </p>
              <h2 className="mt-3 font-serif text-4xl tracking-[-0.03em] text-ink lg:text-[2.75rem]">
                I built a 6-figure marketing business from scratch. Now I&apos;m
                helping other women grow theirs.
              </h2>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-clay">
                Hi, I&apos;m Anna. Marketing &amp; Growth Strategist
              </p>
              <p className="mt-6 font-light leading-7 text-foreground/80">
                I&apos;m a Fractional CMO and founder of The Musse Agency, with
                over 10 years helping brands across Australia and Europe grow
                through strategy, advertising and customer acquisition. When I
                started my own marketing business, I didn&apos;t have an
                established network, investors or a big team. Just my
                experience, my laptop and the determination to make it work. I
                built that business to six figures, working with brands I
                genuinely love. Now, through The Musse School, I help female
                founders build smarter marketing strategies, attract better
                customers and grow businesses that are both profitable and
                aligned with their vision.
              </p>
              <p className="mt-4 font-light leading-7 text-foreground/80">
                Because your marketing should do more than make your brand look
                successful. It should help your business become successful.
              </p>
            </SplitCopy>
          </Reveal>
        </section>

        <section className={zigzagRow}>
          <Reveal from="right" className="h-full min-h-[420px] lg:order-2 lg:min-h-0">
            <SplitPhoto
              src="/images/for-you.png"
              alt="Anna Espina, founder of The Musse School"
              position="center 22%"
            />
          </Reveal>
          <Reveal from="left" delay={120} className="h-full min-h-[420px] lg:order-1 lg:min-h-0">
            <SplitCopy tone="paper">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-sage">
                Who it&apos;s for
              </p>
              <h2 className="mt-3 font-serif text-4xl leading-[1.1] tracking-[-0.03em] text-ink lg:text-[2.75rem]">
                For ambitious women building brands with purpose.
              </h2>
              <p className="mt-5 font-light leading-7 text-foreground/75">
                The Musse School is designed for female founders in beauty,
                luxury and lifestyle who want to grow through smarter marketing.
                Beauty: skincare, cosmetics, haircare, salons. Luxury:
                architecture, interiors, property, hospitality and premium
                services. Lifestyle: homewares, self-care, eCommerce and
                experience-led brands.
              </p>
              <p className="mt-3 font-light leading-7 text-foreground/75">
                Whether you&apos;re selling products online or offering premium
                services, the goal is the same: attract the right customers and
                turn your marketing into measurable business growth.
              </p>
              <div className="mt-6 rounded-[1.5rem] border border-black/[0.05] bg-cream p-5">
                <LeadForm
                  id="compare-form"
                  compact
                  heading="LET'S TALK ABOUT YOUR BUSINESS"
                  buttonLabel="LET'S TALK ABOUT YOUR BUSINESS"
                />
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
                You&apos;re in the right place if...
              </h2>
              <ul className="mt-7 space-y-3.5">
                {fit.map((item) => (
                  <li key={item} className="flex gap-4 font-light leading-7 text-foreground/80">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-light leading-7 text-foreground/80">
                You don&apos;t need to become a marketing expert. You need to
                understand the marketing that grows your business.
              </p>
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
                Four weeks. A clearer strategy. More confidence to grow.
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
                Think of me as your marketing strategist, for four weeks.
              </h2>
              <p className="mt-6 font-light leading-7 text-foreground/75">
                Less guessing. More growing. Not another course to complete, and
                not another collection of videos you&apos;ll never watch. Real
                conversations. Real strategy. Real action. We&apos;ll work
                directly on your business, reviewing what&apos;s working,
                identifying what&apos;s holding you back and building a
                marketing plan tailored to your goals.
              </p>
              <p className="mt-3 font-light leading-7 text-foreground/75">
                Whether you&apos;re launching a new product, growing your
                eCommerce sales or looking to attract more high-value clients,
                we&apos;ll focus on the areas that matter most. Your brand. Your
                goals. Your strategy.
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
                    Real feedback from founders I&apos;ve worked with
                  </p>
                  <h2 className="mt-3 font-serif text-4xl tracking-[-0.03em] text-ink sm:text-5xl">
                    Don&apos;t just take my word for it.
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
                Ready to make your marketing make money?
              </h2>
              <p className="mt-5 font-light leading-7 text-foreground/75">
                You&apos;ve already put the work into building your brand. Now
                it&apos;s time to build the strategy that helps it grow. If
                you&apos;re a female founder in beauty, luxury or lifestyle and
                you&apos;re ready to take your business to the next level,
                I&apos;d love to hear from you. Let&apos;s talk about your
                business, your goals and how we can get you closer to them.
              </p>
              <div className="mt-6 rounded-[1.5rem] bg-paper p-5">
                <LeadForm id="cta-form" compact />
              </div>
            </SplitCopy>
          </Reveal>
        </section>
      </main>

      <footer className="bg-paper py-8 text-center text-sm text-foreground/50">
        © {new Date().getFullYear()} The Musse School · Anna Espina
      </footer>
    </div>
  );
}
