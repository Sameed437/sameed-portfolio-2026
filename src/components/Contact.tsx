'use client';

import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { PROFILE } from '@/lib/data';
import SectionHeader from './SectionHeader';
import SectionReveal from './SectionReveal';

type FieldProps = {
  id: string;
  label: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
};

function FloatField({
  id,
  label,
  type = 'text',
  textarea,
  required,
}: FieldProps) {
  const [val, setVal] = useState('');
  const [focus, setFocus] = useState(false);
  const float = focus || val.length > 0;

  const shared =
    'peer block w-full bg-transparent text-bone caret-violet-400 outline-none placeholder-transparent transition-all';

  return (
    <div className="relative">
      <div
        className={`group relative rounded-xl border bg-white/[0.03] backdrop-blur-sm transition-all ${
          focus
            ? 'border-violet-400/70 shadow-glow-sm'
            : 'border-white/10 hover:border-white/20'
        }`}
      >
        {textarea ? (
          <textarea
            id={id}
            name={id}
            placeholder={label}
            required={required}
            rows={5}
            value={val}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e) => setVal(e.target.value)}
            className={`${shared} resize-none px-4 pb-3 pt-6 text-sm`}
          />
        ) : (
          <input
            id={id}
            name={id}
            type={type}
            placeholder={label}
            required={required}
            value={val}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e) => setVal(e.target.value)}
            className={`${shared} h-14 px-4 pb-1 pt-5 text-sm`}
          />
        )}
        <label
          htmlFor={id}
          className={`pointer-events-none absolute left-4 origin-left transition-all duration-200 ${
            float
              ? 'top-2 text-[10px] font-medium uppercase tracking-[0.18em] text-violet-300'
              : 'top-4 text-sm text-bone/55'
          }`}
        >
          {label}
          {required && <span className="ml-0.5 text-violet-300">*</span>}
        </label>
      </div>
    </div>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-20 md:py-36">
      <div className="absolute inset-x-0 top-0 -z-10 h-1/2 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(124,58,237,0.18),transparent)]" />
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something premium."
          description="I'm currently open to freelance projects and full-time roles. Drop a note — I usually reply within 24 hours."
        />

        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          {/* left */}
          <SectionReveal className="md:col-span-5" delay={0.05}>
            <div className="space-y-6">
              <a
                href={`mailto:${PROFILE.email}`}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:border-violet-400/40 hover:bg-violet-600/5 hover:shadow-glow-sm"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-violet-600/15 text-violet-300">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-bone/55">
                    Email
                  </div>
                  <div className="text-sm font-medium text-bone group-hover:text-violet-200">
                    {PROFILE.email}
                  </div>
                </div>
              </a>

              <a
                href={PROFILE.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:border-violet-400/40 hover:bg-violet-600/5 hover:shadow-glow-sm"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-violet-600/15 text-violet-300">
                  <Linkedin size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-bone/55">
                    LinkedIn
                  </div>
                  <div className="text-sm font-medium text-bone group-hover:text-violet-200">
                    /in/sameed-chaudhary
                  </div>
                </div>
              </a>

              <a
                href={PROFILE.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:border-violet-400/40 hover:bg-violet-600/5 hover:shadow-glow-sm"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-violet-600/15 text-violet-300">
                  <Github size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-bone/55">
                    GitHub
                  </div>
                  <div className="text-sm font-medium text-bone group-hover:text-violet-200">
                    @Sameed437
                  </div>
                </div>
              </a>

              <a
                href={PROFILE.socials.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:border-emerald-400/40 hover:bg-emerald-500/5 hover:shadow-glow-sm"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-500/15 text-emerald-300 font-bold">
                  Up
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-bone/55">
                    Upwork
                  </div>
                  <div className="text-sm font-medium text-bone group-hover:text-emerald-200">
                    Profile coming soon
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-bone/65">
                <MapPin size={16} className="text-violet-300" />
                {PROFILE.location}
              </div>
            </div>
          </SectionReveal>

          {/* form */}
          <SectionReveal className="md:col-span-7" delay={0.15}>
            <form
              onSubmit={onSubmit}
              className="glass relative overflow-hidden rounded-3xl p-6 md:p-8"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet-700/20 blur-3xl" />

              <div className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <FloatField id="name" label="Your Name" required />
                  <FloatField id="email" label="Email" type="email" required />
                </div>
                <FloatField id="subject" label="Subject" />
                <FloatField id="message" label="Message" textarea required />
              </div>

              <div className="mt-7 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <p className="text-xs text-bone/55">
                  By submitting, you agree to be contacted regarding your
                  enquiry.
                </p>

                <button
                  type="submit"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-bone px-6 py-3 text-sm font-semibold text-ink-900 transition-all hover:-translate-y-0.5 hover:shadow-glow-lg"
                >
                  <span className="relative z-10 inline-flex items-center gap-2">
                    {sent ? (
                      <>
                        <CheckCircle2 size={16} /> Sent — thank you
                      </>
                    ) : (
                      <>
                        Send message
                        <Send
                          size={14}
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </>
                    )}
                  </span>
                  <span className="bg-shimmer absolute inset-0 -translate-x-full bg-[length:200%_100%] opacity-0 transition-all duration-700 group-hover:translate-x-full group-hover:opacity-100" />
                </button>
              </div>
            </form>

            {sent && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-3 py-1 text-xs text-emerald-200"
              >
                <CheckCircle2 size={12} /> Demo only — wire to your provider for
                production.
              </motion.div>
            )}
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
