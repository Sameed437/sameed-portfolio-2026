'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, X, RotateCcw, Sparkles } from 'lucide-react';

type SubtitleSegment = {
  start: number;
  end: number;
  text: string;
};

const SUBTITLES: SubtitleSegment[] = [
  { start: 0.0, end: 2.3, text: "Hi, I'm Sameed! Welcome to the AI Studio." },
  { start: 2.3, end: 6.8, text: 'Explore live production workflows built with Claude and n8n,' },
  { start: 6.8, end: 10.0, text: "and calculate your team's operational ROI." },
];

export default function VideoBriefing() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(10);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Keyboard shortcut (Escape to close)
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
      if (e.key === ' ' && videoRef.current) {
        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isPlaying]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleRestart = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration || 10);
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  const currentSubtitle = SUBTITLES.find(
    (s) => currentTime >= s.start && currentTime <= s.end
  )?.text;

  const openModal = () => {
    setIsOpen(true);
    setIsPlaying(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {
          // Autoplay policy fallback: mute and play
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play();
          }
        });
      }
    }, 100);
  };

  const closeModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsPlaying(false);
    setIsOpen(false);
  };

  return (
    <>
      {/* Trigger Banner / Card */}
      <div className="mb-10 rounded-2xl border border-accent/25 bg-gradient-to-r from-surface via-[#0A1220] to-surface p-4 sm:p-5 shadow-lift">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={openModal}
              className="group relative h-16 w-16 sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-xl border border-accent/40 bg-base shadow-glow focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Play 10-second video walkthrough"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/studio-intro-poster.webp"
                alt="Sameed AI Avatar Video"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-base/40 backdrop-blur-[1px] flex items-center justify-center transition-colors group-hover:bg-base/20">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-base shadow-glow transition-transform group-hover:scale-110">
                  <Play size={14} className="ml-0.5 fill-base" />
                </span>
              </div>
              <span className="absolute bottom-1 right-1 rounded bg-base/80 px-1 py-0.5 text-[9px] font-semibold text-accent">
                0:10
              </span>
            </button>

            <div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-accent-wash px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent border border-accent/30">
                  <Sparkles size={11} /> 10s AI Avatar Briefing
                </span>
                <span className="hidden md:inline text-xs text-fg-faint">
                  Audio + Live Captions
                </span>
              </div>
              <h3 className="mt-1 text-sm sm:text-base font-semibold text-fg">
                Watch Sameed&apos;s 10-Second Studio Walkthrough
              </h3>
              <p className="mt-0.5 text-xs text-fg-muted max-w-xl">
                Quick video introduction to the interactive architecture nodes and operational ROI engine.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={openModal}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-xs font-semibold text-base transition-all hover:bg-accent-dim shadow-glow shrink-0"
          >
            <Play size={13} className="fill-base" />
            Watch 10s Video
          </button>
        </div>
      </div>

      {/* Video Modal Player */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Video Walkthrough"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-accent/40 bg-surface shadow-lift"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-line bg-base/60 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-medium uppercase tracking-label text-fg">
                  Sameed Chaudhary · AI Briefing
                </span>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="grid h-8 w-8 place-items-center rounded-lg text-fg-muted transition-colors hover:bg-white/10 hover:text-fg"
                aria-label="Close video"
              >
                <X size={16} />
              </button>
            </div>

            {/* Video Container (Aspect 9:16 optimized) */}
            <div className="relative aspect-[9/16] max-h-[70vh] w-full bg-black">
              <video
                ref={videoRef}
                src="/studio-intro.mp4"
                poster="/studio-intro-poster.webp"
                playsInline
                preload="none"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={handleVideoEnded}
                onClick={togglePlay}
                className="h-full w-full object-contain cursor-pointer"
              />

              {/* Play / Pause Large Center Indicator */}
              {!isPlaying && (
                <button
                  type="button"
                  onClick={togglePlay}
                  className="absolute inset-0 m-auto grid h-16 w-16 place-items-center rounded-full bg-accent/90 text-base shadow-glow transition-transform hover:scale-110"
                  aria-label="Play video"
                >
                  <Play size={24} className="ml-1 fill-base" />
                </button>
              )}

              {/* Subtitles Overlay */}
              {currentSubtitle && (
                <div className="absolute inset-x-4 bottom-14 pointer-events-none">
                  <div className="mx-auto max-w-[90%] rounded-lg bg-base/85 backdrop-blur-md border border-white/10 px-3 py-1.5 text-center text-xs font-medium text-fg shadow-lift">
                    {currentSubtitle}
                  </div>
                </div>
              )}

              {/* Bottom Video Controls Bar */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 pt-6">
                {/* Progress bar */}
                <div className="relative mb-2 h-1 w-full overflow-hidden rounded-full bg-white/20">
                  <div
                    className="h-full bg-accent transition-all duration-100"
                    style={{
                      width: `${(currentTime / (duration || 10)) * 100}%`,
                    }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-fg">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={togglePlay}
                      className="rounded p-1 text-fg hover:text-accent transition-colors"
                      aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? <Pause size={16} /> : <Play size={16} className="fill-current" />}
                    </button>
                    <button
                      type="button"
                      onClick={handleRestart}
                      className="rounded p-1 text-fg-muted hover:text-accent transition-colors"
                      aria-label="Restart video"
                    >
                      <RotateCcw size={14} />
                    </button>
                    <button
                      type="button"
                      onClick={toggleMute}
                      className="rounded p-1 text-fg-muted hover:text-accent transition-colors"
                      aria-label={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                    </button>
                  </div>

                  <span className="text-[11px] text-fg-faint">
                    0:0{Math.floor(currentTime)} / 0:{Math.floor(duration)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
