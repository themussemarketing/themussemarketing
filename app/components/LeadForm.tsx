"use client";

type LeadFormProps = {
  heading?: string;
  buttonLabel?: string;
  variant?: "light" | "dark";
  id?: string;
};

const JOTFORM_ID = "262322428121042";

const fieldClass = (isDark: boolean) =>
  `h-12 w-full rounded-full border px-5 text-sm outline-none transition placeholder:opacity-50 focus:ring-2 focus:ring-terracotta/35 ${
    isDark
      ? "border-white/20 bg-white/10 text-white placeholder:text-white"
      : "border-black/10 bg-cream text-foreground placeholder:text-foreground/40"
  }`;

export default function LeadForm({
  heading = "Save your spot",
  buttonLabel = "Book a call with me",
  variant = "light",
  id,
}: LeadFormProps) {
  const isDark = variant === "dark";
  const frameName = `${id ?? "lead"}-jotform`;

  return (
    <>
      <iframe name={frameName} title="Form submission" className="hidden" />
      <form
        id={id}
        className="flex flex-col gap-4"
        action={`https://submit.jotform.com/submit/${JOTFORM_ID}`}
        method="post"
        acceptCharset="utf-8"
        autoComplete="on"
        target={frameName}
        onSubmit={() => {
          window.setTimeout(() => {
            window.location.assign("/thank-you");
          }, 800);
        }}
      >
        <input type="hidden" name="formID" value={JOTFORM_ID} />
        <input type="hidden" name="simple_spc" value={`${JOTFORM_ID}-${JOTFORM_ID}`} />
        <input type="hidden" name="eventObserver" value="1" />

        <div className="hidden" aria-hidden="true">
          <label htmlFor={`${id ?? "lead"}-honeypot`}>Leave blank</label>
          <input
            id={`${id ?? "lead"}-honeypot`}
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </div>

        {heading ? (
          <p className={`font-serif text-2xl leading-snug ${isDark ? "text-white" : "text-foreground"}`}>
            {heading}
          </p>
        ) : null}

        <label className="flex flex-col gap-1.5 text-xs font-medium uppercase tracking-[0.16em]">
          <span className={isDark ? "text-white/70" : "text-foreground/55"}>Name</span>
          <input
            required
            type="text"
            id={id ? `${id}-name` : undefined}
            name="q8_name"
            autoComplete="name"
            placeholder="Anna Espina"
            className={fieldClass(isDark)}
          />
        </label>

        <label className="flex flex-col gap-1.5 text-xs font-medium uppercase tracking-[0.16em]">
          <span className={isDark ? "text-white/70" : "text-foreground/55"}>Email address</span>
          <input
            required
            type="email"
            id={id ? `${id}-email` : undefined}
            name="q2_q2_email0"
            autoComplete="email"
            placeholder="example@example.com"
            className={fieldClass(isDark)}
          />
        </label>

        <label className="flex flex-col gap-1.5 text-xs font-medium uppercase tracking-[0.16em]">
          <span className={isDark ? "text-white/70" : "text-foreground/55"}>Phone number</span>
          <input
            required
            type="tel"
            id={id ? `${id}-phone` : undefined}
            name="q3_q3_phone1[full]"
            autoComplete="tel"
            inputMode="tel"
            placeholder="0400 000 000"
            className={fieldClass(isDark)}
          />
        </label>

        <label className="flex flex-col gap-1.5 text-xs font-medium uppercase tracking-[0.16em]">
          <span className={isDark ? "text-white/70" : "text-foreground/55"}>Website URL</span>
          <input
            required
            type="text"
            id={id ? `${id}-url` : undefined}
            name="q4_q4_textbox2"
            autoComplete="url"
            placeholder="https://yourwebsite.com"
            className={fieldClass(isDark)}
          />
        </label>

        <button
          type="submit"
          className="mt-1 h-12 rounded-full bg-terracotta px-6 text-sm font-medium tracking-[0.04em] text-white transition hover:bg-[#864640]"
        >
          {buttonLabel}
        </button>
      </form>
    </>
  );
}
