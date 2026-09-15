'use client';

import { useState, type FormEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROFILE } from '@/lib/data';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

const FIELD =
  'w-full border-b border-rule bg-transparent py-3 text-base text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-accent';

const CHANNELS = [
  { label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { label: 'LinkedIn', value: '/in/sameed-chaudhary', href: PROFILE.socials.linkedin },
  { label: 'GitHub', value: '@Sameed437', href: PROFILE.socials.github },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const set = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  /*
   * No backend and no API key by design — this hands the composed message
   * to the visitor's own mail client, so it genuinely sends rather than
   * pretending to.
   */
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = form.subject.trim() || `Portfolio enquiry from ${form.name}`;
    const body = `${form.message}\n\n—\n${form.name}\n${form.email}`;
    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="bg-paper-alt">
      <div className="shell py-20 md:py-28">
        <SectionHeader
          index="06"
          eyebrow="Contact"
          title="Open to freelance projects and full-time roles."
          description="Tell me what you're building. I usually reply within 24 hours."
        />

        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <ul className="border-t border-rule">
              {CHANNELS.map((c) => (
                <li key={c.label} className="border-b border-rule">
                  <a
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-baseline justify-between gap-4 py-5 transition-colors hover:text-accent"
                  >
                    <span className="label">{c.label}</span>
                    <span className="inline-flex items-center gap-1.5 text-sm text-ink transition-colors group-hover:text-accent">
                      {c.value}
                      <ArrowUpRight
                        size={13}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </a>
                </li>
              ))}
              <li className="border-b border-rule">
                <div className="flex items-baseline justify-between gap-4 py-5">
                  <span className="label">Based in</span>
                  <span className="text-sm text-ink">{PROFILE.location}</span>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal className="md:col-span-7" delay={100}>
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="label">
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={set('name')}
                    placeholder="Jane Doe"
                    className={FIELD}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="label">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={set('email')}
                    placeholder="jane@company.com"
                    className={FIELD}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="label">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={set('subject')}
                  placeholder="Project enquiry"
                  className={FIELD}
                />
              </div>

              <div>
                <label htmlFor="message" className="label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={set('message')}
                  placeholder="A few lines about what you need…"
                  className={`${FIELD} resize-none`}
                />
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-accent"
                >
                  Send message
                </button>
                <p className="text-xs text-ink-faint">
                  Opens in your mail app, addressed to {PROFILE.email}.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
