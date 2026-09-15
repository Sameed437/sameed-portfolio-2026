'use client';

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from 'react';
import { ArrowUp, MessageSquare, X } from 'lucide-react';
import { ask, GREETING_MESSAGE, SUGGESTIONS, type Answer } from '@/lib/assistant';

type Message = {
  id: number;
  role: 'user' | 'assistant';
  text: string;
  links?: Answer['links'];
};

let nextId = 1;

const OPENING: Message = { id: 0, role: 'assistant', text: GREETING_MESSAGE };

export default function Assistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([OPENING]);
  const [input, setInput] = useState('');
  const [thinking, setThinking] = useState(false);

  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Keep the transcript pinned to the newest message.
  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, thinking]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const send = useCallback((raw: string) => {
    const query = raw.trim();
    if (!query) return;

    setMessages((m) => [...m, { id: nextId++, role: 'user', text: query }]);
    setInput('');
    setThinking(true);

    // Lookup is instant; a short beat just keeps the exchange readable.
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      const answer = ask(query);
      setMessages((m) => [
        ...m,
        { id: nextId++, role: 'assistant', text: answer.text, links: answer.links },
      ]);
      setThinking(false);
    }, 260);
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    send(input);
  };

  const showSuggestions = messages.length === 1 && !thinking;

  return (
    <>
      {/* Launcher */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="assistant-panel"
        className={`fixed bottom-5 right-5 z-50 inline-flex items-center gap-2.5 border border-ink bg-ink px-4 py-3 text-sm font-medium text-paper shadow-lg transition-all hover:bg-accent hover:border-accent md:bottom-8 md:right-8 ${
          open ? 'pointer-events-none opacity-0' : 'opacity-100'
        }`}
      >
        <MessageSquare size={16} />
        <span className="hidden sm:inline">Ask about Sameed</span>
        <span className="sm:hidden">Ask</span>
      </button>

      {/* Panel */}
      {open && (
        <div
          id="assistant-panel"
          role="dialog"
          aria-label="Ask about Sameed"
          className="fixed bottom-0 right-0 z-50 flex h-[min(34rem,100dvh-1rem)] w-full flex-col border border-rule bg-paper-card shadow-2xl sm:bottom-5 sm:right-5 sm:w-[24rem] md:bottom-8 md:right-8"
        >
          <header className="flex items-start justify-between gap-3 border-b border-rule px-5 py-4">
            <div>
              <h2 className="text-sm font-medium text-ink">Ask about Sameed</h2>
              <p className="mt-0.5 text-xs text-ink-faint">
                Answers come from his portfolio data
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close assistant"
              className="-mr-2 -mt-1 grid h-9 w-9 shrink-0 place-items-center text-ink-faint transition-colors hover:text-accent"
            >
              <X size={18} />
            </button>
          </header>

          <div
            ref={logRef}
            className="flex-1 space-y-4 overflow-y-auto px-5 py-5"
            aria-live="polite"
          >
            {messages.map((m) => (
              <div
                key={m.id}
                className={m.role === 'user' ? 'flex justify-end' : ''}
              >
                <div
                  className={
                    m.role === 'user'
                      ? 'max-w-[85%] bg-ink px-3.5 py-2.5 text-sm text-paper'
                      : 'max-w-[92%] bg-paper-alt px-3.5 py-3 text-sm leading-relaxed text-ink-muted'
                  }
                >
                  {m.text.split('\n\n').map((para, i) => (
                    <p key={i} className={i > 0 ? 'mt-2.5' : undefined}>
                      {para}
                    </p>
                  ))}

                  {m.links && m.links.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 border-t border-rule pt-2.5">
                      {m.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target={l.href.startsWith('http') ? '_blank' : undefined}
                          rel={
                            l.href.startsWith('http')
                              ? 'noopener noreferrer'
                              : undefined
                          }
                          className="font-mono text-xs text-accent underline underline-offset-2"
                        >
                          {l.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {thinking && (
              <p className="label" aria-label="Thinking">
                ···
              </p>
            )}

            {showSuggestions && (
              <ul className="space-y-2 pt-1">
                {SUGGESTIONS.map((s) => (
                  <li key={s}>
                    <button
                      type="button"
                      onClick={() => send(s)}
                      className="w-full border border-rule px-3 py-2 text-left text-xs text-ink-muted transition-colors hover:border-accent hover:text-accent"
                    >
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <form
            onSubmit={onSubmit}
            className="flex items-center gap-2 border-t border-rule px-3 py-3"
          >
            <label htmlFor="assistant-input" className="sr-only">
              Ask a question about Sameed
            </label>
            <input
              id="assistant-input"
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question…"
              autoComplete="off"
              className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm text-ink outline-none placeholder:text-ink-faint"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send question"
              className="grid h-9 w-9 shrink-0 place-items-center bg-ink text-paper transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ArrowUp size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
