'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { PROFILE } from '@/lib/data';
import Particles from './Particles';

const TYPE_SPEED = 70;
const ERASE_SPEED = 40;
const HOLD_TIME = 1400;

function Typewriter({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState('');
  const [phase, setPhase] = useState<'typing' | 'holding' | 'erasing'>(
    'typing'
  );

  useEffect(() => {
    const word = words[i % words.length];
    let t: ReturnType<typeof setTimeout>;
    if (phase === 'typing') {
      if (text.length < word.length) {
        t = setTimeout(
          () => setText(word.slice(0, text.length + 1)),
          TYPE_SPEED
        );
      } else {
        t = setTimeout(() => setPhase('erasing'), HOLD_TIME);
      }
    } else if (phase === 'erasing') {
      if (text.length > 0) {
        t = setTimeout(
          () => setText(word.slice(0, text.length - 1)),
          ERASE_SPEED
        );
      } else {
        setI((v) => v + 1);
        setPhase('typing');
        t = setTimeout(() => {}, 0);
      }
    }
    return () => clearTimeout(t);
  }, [text, phase, i, words]);

  return (
    <span className="text-gradient-violet">
      {text}
      <span className="ml-1 inline-block h-[0.9em] w-[2px] -translate-y-[2px] animate-pulse bg-violet-400 align-middle" />
    </span>
  );
}

const headline = ['Building', 'premium', 'web', 'experiences.'];

export default function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-16 pt-24 sm:pt-28"
    >
      {/* background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-radial-violet" />
        <div className="absolute inset-0 bg-grid-violet [background-size:48px_48px] opacity-40 mask-fade-b" />
        <Particles density={50} />
        <motion.div
          aria-hidden
          className="absolute -top-40 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-violet-700/20 blur-[140px]"
          style={{ y }}
        />
        <motion.div
          aria-hidden
          className="absolute bottom-0 right-0 h-[300px] w-[480px] rounded-full bg-fuchsia-700/10 blur-[120px]"
        />
      </div>

      <motion.div
        style={{ opacity }}
        className="relative mx-auto w-full max-w-7xl px-5 md:px-8"
      >
        {/* availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-4 py-1.5 text-xs font-medium text-emerald-200 backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {PROFILE.availability}
        </motion.div>

        {/* headline */}
        <h1 className="font-display text-[40px] font-medium leading-[1.05] tracking-tight text-balance text-bone sm:text-6xl md:text-7xl lg:text-[88px]">
          <span className="block text-bone/80">Hi, I&apos;m</span>
          <motion.span
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
            }}
            className="mt-2 block"
          >
            {headline.map((word, idx) => (
              <motion.span
                key={word + idx}
                variants={{
                  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)',
                    transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] },
                  },
                }}
                className={`mr-3 inline-block ${
                  idx === 1 || idx === 2 ? 'text-gradient' : ''
                }`}
              >
                {word}
              </motion.span>
            ))}
          </motion.span>
        </h1>

        {/* rotating role */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-5 text-xl font-light text-bone/80 sm:mt-6 sm:text-3xl"
        >
          I&apos;m a{' '}
          <Typewriter words={PROFILE.rotatingTitles} />
        </motion.p>

        {/* tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-5 max-w-2xl text-[15px] leading-relaxed text-bone/65 text-pretty sm:mt-6 sm:text-lg"
        >
          {PROFILE.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05 }}
          className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-bone px-6 text-sm font-semibold text-ink-900 transition-transform hover:-translate-y-0.5 sm:h-auto sm:py-3"
          >
            <span className="relative z-10">View Projects</span>
            <ArrowRight
              size={16}
              className="relative z-10 transition-transform group-hover:translate-x-0.5"
            />
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-violet-400 via-bone to-violet-400 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
          </a>
          <a
            href="#contact"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-violet-500/40 bg-violet-600/5 px-6 text-sm font-semibold text-bone shadow-glow-sm backdrop-blur transition-all hover:border-violet-400 hover:bg-violet-600/15 hover:shadow-glow sm:h-auto sm:py-3"
          >
            <Sparkles size={16} className="text-violet-300" />
            Hire Me
          </a>
        </motion.div>

        {/* socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10"
        >
          {[
            {
              href: PROFILE.socials.linkedin,
              label: 'LinkedIn',
              Icon: Linkedin,
            },
            { href: PROFILE.socials.github, label: 'GitHub', Icon: Github },
            { href: `mailto:${PROFILE.email}`, label: 'Email', Icon: Mail },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={
                href.startsWith('http') ? 'noopener noreferrer' : undefined
              }
              aria-label={label}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-bone/70 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-violet-400/60 hover:bg-violet-600/10 hover:text-bone hover:shadow-glow-sm"
            >
              <Icon size={16} />
            </a>
          ))}
          <a
            href={PROFILE.socials.upwork}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Upwork"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-bone/70 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-emerald-400/40 hover:text-bone"
          >
            <span className="font-bold text-emerald-400">Up</span>
            <span>Upwork — soon</span>
          </a>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute inset-x-0 bottom-6 hidden justify-center sm:bottom-8 sm:flex"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/15 p-1">
          <motion.span
            animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="block h-1.5 w-1 rounded-full bg-violet-400"
          />
        </div>
      </motion.div>
    </section>
  );
}
