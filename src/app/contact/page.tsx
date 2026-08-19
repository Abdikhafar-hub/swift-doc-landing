"use client";

import { useState } from "react";
import { z } from "zod";
import { Mail, MapPin, Phone, Clock, CheckCircle2 } from "lucide-react";
import { COMPANY, SERVICES } from "@/data/site";
import { WhatsAppButton } from "@/components/site/ui";
import { Reveal } from "@/components/site/motion";
import consultImg from "@/assets/consultation.jpg";

export default ContactPage;

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().min(7, "Enter a reachable phone number").max(30),
  service: z.string().trim().min(1, "Select a service area").max(120),
  message: z.string().trim().min(10, "Tell us a little more").max(1200),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

function ContactPage() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const result = schema.safeParse(data);
    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        next[issue.path[0] as keyof Errors] = issue.message;
      }
      setErrors(next);
      setSent(false);
      return;
    }
    setErrors({});
    setSent(true);
    e.currentTarget.reset();
  };

  const field =
    "min-h-12 w-full border border-hairline bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none";
  const labelCls = "text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground";

  return (
    <>
      <section className="relative overflow-hidden border-b border-hairline bg-ink text-ink-foreground">
        <img
          src={consultImg.src}
          alt=""
          aria-hidden="true"
          width={1408}
          height={1008}
          className="absolute inset-0 size-full object-cover opacity-20"
        />
        <div className="shell relative grid gap-8 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:py-24">
          <Reveal variant="fade-up">
            <p className="rule-label text-ink-foreground/50">Contact</p>
            <h1 className="display-xl mt-6 max-w-2xl text-ink-foreground">
              Fifteen minutes now saves three weeks later.
            </h1>
          </Reveal>
          <Reveal variant="fade-up" delay={80}>
            <p className="text-[0.98rem] leading-relaxed text-ink-foreground/70">
              Describe the document you need. We respond with the requirement list, the statutory
              fee, our professional fee and a realistic completion date.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="shell grid gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-24">
        <Reveal variant="fade-left">
          <p className="rule-label">Send a request</p>
          <form noValidate onSubmit={onSubmit} className="mt-8 grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <label className={labelCls} htmlFor="name">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  className={field}
                  placeholder="Jane Wanjiku"
                  maxLength={100}
                />
                {errors.name ? (
                  <p role="alert" className="text-xs font-semibold text-destructive">
                    {errors.name}
                  </p>
                ) : null}
              </div>
              <div className="grid gap-2">
                <label className={labelCls} htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  className={field}
                  placeholder="+254 7xx xxx xxx"
                  maxLength={30}
                />
                {errors.phone ? (
                  <p role="alert" className="text-xs font-semibold text-destructive">
                    {errors.phone}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="grid gap-2">
              <label className={labelCls} htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={field}
                placeholder="you@company.co.ke"
                maxLength={255}
              />
              {errors.email ? (
                <p role="alert" className="text-xs font-semibold text-destructive">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div className="grid gap-2">
              <label className={labelCls} htmlFor="service">
                Service area
              </label>
              <select id="service" name="service" defaultValue="" className={field}>
                <option value="" disabled>
                  Select a practice area
                </option>
                {SERVICES.map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Other">Something else</option>
              </select>
              {errors.service ? (
                <p role="alert" className="text-xs font-semibold text-destructive">
                  {errors.service}
                </p>
              ) : null}
            </div>

            <div className="grid gap-2">
              <label className={labelCls} htmlFor="message">
                What do you need?
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                maxLength={1200}
                className="w-full border border-hairline bg-background p-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none"
                placeholder="Describe the document, the deadline, and anything already attempted."
              />
              {errors.message ? (
                <p role="alert" className="text-xs font-semibold text-destructive">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <button
              type="submit"
              className="min-h-12 w-full bg-gold px-6 text-sm font-bold text-ink shadow-xs transition-all duration-300 hover:bg-gold-dark hover:text-ink hover:shadow-md sm:w-fit cursor-pointer"
            >
              Send request
            </button>

            <div aria-live="polite">
              {sent ? (
                <p className="flex items-center gap-2 border border-emerald-brand/40 bg-emerald-brand/5 p-4 text-sm font-semibold text-emerald-brand">
                  <CheckCircle2 className="size-4 shrink-0" aria-hidden="true" />
                  Thank you — your request has been captured. A consultant will respond within one
                  working day.
                </p>
              ) : null}
            </div>
          </form>
        </Reveal>

        <Reveal variant="fade-right" delay={120} className="space-y-6">
          <div className="border border-hairline bg-sand p-7">
            <p className="rule-label">Reach us directly</p>
            <ul className="mt-6 space-y-5 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <span className="block font-medium">{COMPANY.address}</span>
                  <span className="block text-xs text-muted-foreground">{COMPANY.postalBox}</span>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                <a
                  className="font-semibold hover:text-gold transition-colors"
                  href={COMPANY.phoneHref}
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                <div className="space-y-0.5">
                  <a
                    className="block break-all font-semibold hover:text-gold transition-colors"
                    href={`mailto:${COMPANY.email}`}
                  >
                    {COMPANY.email}
                  </a>
                  <a
                    className="block break-all text-xs text-muted-foreground hover:text-gold transition-colors"
                    href={`mailto:${COMPANY.secondaryEmail}`}
                  >
                    {COMPANY.secondaryEmail}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                <span>
                  {COMPANY.hours.map((h) => (
                    <span key={h.day} className="block">
                      <span className="font-semibold">{h.day}:</span> {h.time}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
            <WhatsAppButton className="mt-7 w-full justify-center" />
          </div>

          <div className="border border-hairline">
            <div
              className="hairline-grid grid aspect-4/3 place-items-center bg-sand text-center"
              role="img"
              aria-label={`Map location: ${COMPANY.address}`}
            >
              <div className="px-6">
                <MapPin className="mx-auto size-6 text-gold" aria-hidden="true" />
                <p className="mt-3 font-display text-base font-bold">Unga House, Muthithi Road</p>
                <p className="mt-1 text-xs text-muted-foreground">Westlands · Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
