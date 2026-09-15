'use client';

import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { PROFILE } from '@/lib/data';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

const FIELD =
  'w-full rounded-md border border-line bg-base px-3.5 py-3 text-sm text-fg outline-none transition-colors placeholder:text-fg-faint focus:border-accent/60';

const CHANNELS = [
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
   * No backend and no API key by design — this hands the composed message to
   * the visitor's own mail client, so it genuinely sends rather than
   * pretending to.
   */
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = form.subject.trim() || 'Project enquiry from ' + form.name;
    const body = form.message + '\n\n—\n' + form.name + '\n' + form.email;
    window.location.href =
      'mailto:' +
      PROFILE.email +
      '?subject=' +
      encodeURIComponent(subject) +
      '&body=' +
      encodeURIComponent(body);
  };

  return (
    <section id="contact" className="relative isolate overflow-hidden">
      <div aria-hidden className="hero-glow absolute inset-0 -z-10 opacity-60" />

      <div className="shell py-20 md:py-28">
        <SectionHeader
          index="06"
          eyebrow="Contact"
          title="Let's build the system that ships your marketing."
          description="Open to freelance projects and full-time roles. Tell me what you're building — I usually reply within 24 hours."
        />

        <div className="grid gap-6 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <div className="flex h-full flex-col gap-4">
              <a
                href={'mailto:' + PROFILE.email}
                className="card card-hover group rounded-xl p-6"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-base text-accent">
                  <Mail size={17} />
                </span>
                <p className="label mt-5">Email</p>
                <p className="mt-1.5 break-all text-sm font-medium text-fg transition-colors group-hover:text-accent">
                  {PROFILE.email}
                </p>
              </a>

              {CHANNELS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card card-hover group flex items-center justify-between rounded-xl px-6 py-5"
                >
                  <div>
                    <p className="label">{c.label}</p>
                    <p className="mt-1 text-sm text-fg transition-colors group-hover:text-accent">
                      {c.value}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-fg-faint transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                  />
                </a>
              ))}

              <div className="card flex items-center gap-3 rounded-xl px-6 py-5 text-sm text-fg-muted">
                <MapPin size={16} className="shrink-0 text-accent" />
                {PROFILE.location}
              </div>
            </div>
          </Reveal>

          <Reveal className="md:col-span-7" delay={100}>
            <form onSubmit={onSubmit} className="card rounded-xl p-6 md:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
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
                    className={FIELD + ' mt-2'}
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
                    className={FIELD + ' mt-2'}
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="subject" className="label">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={set('subject')}
                  placeholder="AI content automation for our blog"
                  className={FIELD + ' mt-2'}
                />
              </div>

              <div className="mt-5">
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
                  className={FIELD + ' mt-2 resize-none'}
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-base transition-all hover:bg-accent-dim hover:shadow-glow"
                >
                  Send message
                </button>
                <p className="text-xs text-fg-faint">
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
