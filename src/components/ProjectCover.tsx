import Image from 'next/image';
import { Globe, Lock, Maximize2 } from 'lucide-react';
import type { ProjectArt } from '@/lib/data';

/*
 * Project covers drawn with realistic browser chrome and high-resolution snapshots.
 *
 * Each project displays a realistic browser mockup with traffic light controls,
 * real domain name pill, and high-fidelity snapshot preview with smooth zoom on hover.
 */

const CHROME = '#14171F';
const PANEL = '#10131A';
const BLOCK = '#232833';
const BLOCK_SOFT = '#1B1F27';
const TEXT = '#2E343F';
const ACCENT = '#E8A33D';

function Line({ x, y, w, h = 5, fill = TEXT }: { x: number; y: number; w: number; h?: number; fill?: string }) {
  return <rect x={x} y={y} width={w} height={h} rx={2.5} fill={fill} />;
}

function Box(props: React.SVGProps<SVGRectElement>) {
  return <rect rx={4} fill={BLOCK_SOFT} stroke="#262C37" strokeWidth={1} {...props} />;
}

/* --- Fallback SVG Artworks if image not used --- */
function Dashboard() {
  const phases = [0, 1, 2, 3, 4, 5, 6];
  return (
    <g>
      <rect x={0} y={28} width={104} height={272} fill={PANEL} />
      <Line x={16} y={48} w={44} h={6} fill={ACCENT} />
      {[70, 88, 106, 124].map((y) => (
        <Line key={y} x={16} y={y} w={60} h={5} />
      ))}
      <Line x={16} y={150} w={40} h={5} fill={BLOCK} />
      <Line x={124} y={48} w={140} h={8} fill="#39414F" />
      <rect x={396} y={44} width={62} height={16} rx={8} fill={ACCENT} opacity={0.18} />
      <circle cx={406} cy={52} r={3} fill={ACCENT} />
      <Line x={414} y={49} w={32} h={5} fill={ACCENT} />
      {phases.map((i) => {
        const y = 78 + i * 28;
        const done = i < 4;
        return (
          <g key={i}>
            <Box x={124} y={y} width={334} height={20} />
            <circle cx={138} cy={y + 10} r={5} fill={done ? ACCENT : BLOCK} />
            <Line x={152} y={y + 7} w={done ? 96 : 72} h={5} fill={done ? '#39414F' : TEXT} />
            <rect x={300} y={y + 7} width={100} height={6} rx={3} fill={BLOCK} />
            <rect
              x={300}
              y={y + 7}
              width={done ? 100 : i === 4 ? 46 : 0}
              height={6}
              rx={3}
              fill={ACCENT}
              opacity={done ? 0.75 : 1}
            />
          </g>
        );
      })}
    </g>
  );
}

function Healthcare() {
  return (
    <g>
      <Line x={20} y={44} w={54} h={7} fill={ACCENT} />
      {[300, 336, 372].map((x) => (
        <Line key={x} x={x} y={45} w={26} h={5} />
      ))}
      <rect x={410} y={40} width={50} height={16} rx={8} fill={ACCENT} />
      <Line x={20} y={76} w={230} h={11} fill="#39414F" />
      <Line x={20} y={96} w={186} h={11} fill="#39414F" />
      <Line x={20} y={120} w={210} h={5} />
      <Line x={20} y={132} w={168} h={5} />
      <rect x={20} y={150} width={78} height={20} rx={4} fill={ACCENT} />
      <Box x={108} y={150} width={78} height={20} />
      <Box x={286} y={72} width={174} height={100} />
      <circle cx={322} cy={104} r={13} fill={BLOCK} />
      <Line x={344} y={98} w={92} h={5} />
      <Line x={344} y={110} w={64} h={5} />
      {[20, 172, 324].map((x) => (
        <g key={x}>
          <Box x={x} y={192} width={136} height={84} />
          <rect x={x + 14} y={206} width={18} height={18} rx={4} fill={ACCENT} opacity={0.5} />
          <Line x={x + 14} y={234} w={86} h={6} fill="#39414F" />
          <Line x={x + 14} y={248} w={104} h={4} />
          <Line x={x + 14} y={258} w={72} h={4} />
        </g>
      ))}
    </g>
  );
}

function Commerce() {
  const cols = [20, 132, 244, 356];
  return (
    <g>
      <Line x={20} y={44} w={48} h={7} fill={ACCENT} />
      {[286, 322, 358].map((x) => (
        <Line key={x} x={x} y={45} w={26} h={5} />
      ))}
      <circle cx={438} cy={48} r={9} fill={BLOCK} />
      <circle cx={445} cy={41} r={5} fill={ACCENT} />
      <Line x={20} y={74} w={70} h={6} fill="#39414F" />
      {[96, 110, 124].map((y) => (
        <Line key={y} x={20} y={y} w={54} h={4} />
      ))}
      {cols.map((x, i) =>
        [70, 186].map((y, j) => (
          <g key={`${x}-${y}`}>
            {i === 0 && j === 0 ? null : (
              <>
                <Box x={x} y={y} width={100} height={104} />
                <rect
                  x={x + 10}
                  y={y + 10}
                  width={80}
                  height={54}
                  rx={3}
                  fill={i === 1 && j === 0 ? ACCENT : BLOCK}
                  opacity={i === 1 && j === 0 ? 0.85 : 1}
                />
                <Line x={x + 10} y={y + 72} w={62} h={5} fill="#39414F" />
                <Line x={x + 10} y={y + 84} w={34} h={5} fill={ACCENT} />
              </>
            )}
          </g>
        ))
      )}
    </g>
  );
}

function Vision() {
  return (
    <g>
      <rect x={20} y={44} width={280} height={232} rx={5} fill={PANEL} stroke="#262C37" />
      <circle cx={158} cy={130} r={34} fill={BLOCK} />
      <path d="M104 244 q54 -66 108 0 z" fill={BLOCK} />
      <rect x={112} y={84} width={92} height={92} rx={3} fill="none" stroke={ACCENT} strokeWidth={2} />
      <path d="M112 84 h16 M112 84 v16 M204 84 h-16 M204 84 v16 M112 176 h16 M112 176 v-16 M204 176 h-16 M204 176 v-16" stroke={ACCENT} strokeWidth={3} fill="none" />
      <rect x={112} y={64} width={64} height={14} rx={3} fill={ACCENT} />
      <Line x={118} y={68} w={40} h={5} fill="#0E1014" />
      <Line x={318} y={48} w={82} h={7} fill="#39414F" />
      {[72, 108, 144, 180, 216].map((y, i) => (
        <g key={y}>
          <Box x={318} y={y} width={142} height={28} />
          <circle cx={334} cy={y + 14} r={7} fill={i === 0 ? ACCENT : BLOCK} />
          <Line x={348} y={y + 7} w={62} h={5} fill="#39414F" />
          <Line x={348} y={y + 18} w={40} h={4} />
        </g>
      ))}
      <rect x={318} y={254} width={142} height={22} rx={4} fill={ACCENT} opacity={0.2} />
      <Line x={332} y={262} w={72} h={5} fill={ACCENT} />
    </g>
  );
}

function Corporate() {
  return (
    <g>
      <Line x={20} y={44} w={60} h={7} fill={ACCENT} />
      {[290, 326, 362, 398].map((x) => (
        <Line key={x} x={x} y={45} w={26} h={5} />
      ))}
      <Line x={20} y={80} w={244} h={12} fill="#39414F" />
      <Line x={20} y={102} w={192} h={12} fill="#39414F" />
      <Line x={20} y={128} w={226} h={5} />
      <Line x={20} y={140} w={180} h={5} />
      <rect x={20} y={158} width={86} height={22} rx={4} fill={ACCENT} />
      <Box x={296} y={74} width={164} height={112} />
      <Line x={312} y={96} w={112} h={6} fill="#39414F" />
      <Line x={312} y={112} w={132} h={4} />
      <rect x={312} y={154} width={64} height={16} rx={3} fill={BLOCK} />
      <rect x={20} y={206} width={440} height={70} rx={5} fill={PANEL} stroke="#262C37" />
      {[52, 162, 272, 382].map((x, i) => (
        <g key={x}>
          <Line x={x} y={226} w={44} h={12} fill={i === 1 ? ACCENT : '#39414F'} />
          <Line x={x} y={248} w={62} h={5} />
        </g>
      ))}
    </g>
  );
}

function Ledger() {
  return (
    <g>
      <Line x={20} y={44} w={58} h={7} fill={ACCENT} />
      {[320, 356, 392].map((x) => (
        <Line key={x} x={x} y={45} w={26} h={5} />
      ))}
      <Box x={20} y={72} width={272} height={204} />
      <Line x={36} y={88} w={92} h={6} fill="#39414F" />
      <path d="M20 108 H292" stroke="#262C37" strokeWidth={1} />
      {[120, 148, 176, 204, 232].map((y, i) => (
        <g key={y}>
          <Line x={36} y={y} w={104} h={5} />
          <Line x={162} y={y} w={52} h={5} />
          <Line x={236} y={y} w={40} h={5} fill={i === 1 ? ACCENT : BLOCK} />
          <path d={`M20 ${y + 16} H292`} stroke="#1E232B" strokeWidth={1} />
        </g>
      ))}
      <Box x={308} y={72} width={152} height={204} />
      <Line x={324} y={90} w={82} h={6} fill="#39414F" />
      {[112, 148, 184].map((y) => (
        <g key={y}>
          <Line x={324} y={y} w={40} h={4} />
          <rect x={324} y={y + 10} width={120} height={16} rx={3} fill={BLOCK_SOFT} stroke="#262C37" />
        </g>
      ))}
      <rect x={324} y={228} width={120} height={22} rx={4} fill={ACCENT} />
    </g>
  );
}

function Portfolio() {
  return (
    <g>
      <Line x={20} y={44} w={52} h={7} fill={ACCENT} />
      {[330, 366, 402].map((x) => (
        <Line key={x} x={x} y={45} w={26} h={5} />
      ))}
      <Line x={20} y={82} w={288} h={14} fill="#39414F" />
      <Line x={20} y={106} w={214} h={14} fill="#39414F" />
      <Line x={20} y={134} w={246} h={5} />
      {[20, 172, 324].map((x, i) => (
        <g key={x}>
          <Box x={x} y={168} width={136} height={108} />
          <rect
            x={x + 12}
            y={180}
            width={112}
            height={52}
            rx={3}
            fill={i === 0 ? ACCENT : BLOCK}
            opacity={i === 0 ? 0.85 : 1}
          />
          <Line x={x + 12} y={242} w={78} h={6} fill="#39414F" />
          <Line x={x + 12} y={256} w={100} h={4} />
        </g>
      ))}
    </g>
  );
}

function Records() {
  const rows = [0, 1, 2, 3, 4];
  return (
    <g>
      <rect x={0} y={28} width={92} height={272} fill={PANEL} />
      <Line x={14} y={46} w={40} h={6} fill={ACCENT} />
      {[68, 86, 104, 122, 140].map((y, i) => (
        <g key={y}>
          {i === 1 && <rect x={8} y={y - 5} width={76} height={16} rx={3} fill={ACCENT} opacity={0.14} />}
          <Line x={14} y={y} w={52} h={5} fill={i === 1 ? ACCENT : TEXT} />
        </g>
      ))}
      <Box x={106} y={44} width={166} height={52} />
      <Line x={120} y={56} w={54} h={4} />
      <Line x={120} y={70} w={70} h={12} fill={ACCENT} />
      <Box x={284} y={44} width={174} height={52} />
      <Line x={298} y={56} w={62} h={4} />
      <Line x={298} y={70} w={58} h={12} fill="#39414F" />
      <rect x={106} y={110} width={232} height={20} rx={4} fill={BLOCK_SOFT} stroke="#262C37" />
      <circle cx={120} cy={120} r={4} fill="none" stroke={TEXT} strokeWidth={1.5} />
      <Line x={132} y={118} w={70} h={4} />
      <rect x={350} y={110} width={108} height={20} rx={4} fill={ACCENT} />
      <Line x={106} y={148} w={58} h={4} fill="#39414F" />
      <Line x={228} y={148} w={40} h={4} fill="#39414F" />
      <path d="M106 160 H458" stroke="#262C37" strokeWidth={1} />
      {rows.map((i) => {
        const y = 172 + i * 26;
        const paid = i !== 1 && i !== 3;
        return (
          <g key={i}>
            <circle cx={114} cy={y + 5} r={6} fill={BLOCK} />
            <Line x={126} y={y + 2} w={72} h={5} />
            <Line x={228} y={y + 2} w={44} h={5} />
            <Line x={318} y={y + 2} w={36} h={5} fill={paid ? TEXT : ACCENT} />
            <rect
              x={410}
              y={y - 3}
              width={48}
              height={16}
              rx={8}
              fill={ACCENT}
              opacity={paid ? 0.18 : 0.85}
            />
            <Line x={420} y={y + 2} w={28} h={4} fill={paid ? ACCENT : '#0E1014'} />
            <path d={`M106 ${y + 18} H458`} stroke="#1E232B" strokeWidth={1} />
          </g>
        );
      })}
    </g>
  );
}

function School() {
  return (
    <g>
      <rect x={20} y={40} width={16} height={16} rx={4} fill={ACCENT} />
      <Line x={42} y={45} w={54} h={7} fill="#39414F" />
      {[286, 322, 358].map((x) => (
        <Line key={x} x={x} y={45} w={26} h={5} />
      ))}
      <rect x={400} y={40} width={60} height={16} rx={8} fill={ACCENT} />
      <Box x={20} y={74} width={190} height={132} />
      <path d="M60 160 L115 118 L170 160 Z" fill={BLOCK} />
      <rect x={78} y={158} width={74} height={34} rx={2} fill={BLOCK} />
      <circle cx={115} cy={132} r={5} fill={ACCENT} />
      <Line x={230} y={86} w={196} h={12} fill="#39414F" />
      <Line x={230} y={108} w={148} h={12} fill="#39414F" />
      <Line x={230} y={134} w={120} h={5} fill={ACCENT} />
      <rect x={230} y={180} width={84} height={22} rx={4} fill={ACCENT} />
      <Box x={324} y={180} width={84} height={22} />
      {[20, 172, 324].map((x) => (
        <g key={x}>
          <Box x={x} y={222} width={136} height={54} />
          <rect x={x + 12} y={234} width={16} height={16} rx={4} fill={ACCENT} opacity={0.5} />
          <Line x={x + 36} y={238} w={62} h={6} fill="#39414F" />
        </g>
      ))}
    </g>
  );
}

const ART: Record<ProjectArt, () => JSX.Element> = {
  dashboard: Dashboard,
  healthcare: Healthcare,
  commerce: Commerce,
  vision: Vision,
  corporate: Corporate,
  ledger: Ledger,
  portfolio: Portfolio,
  records: Records,
  school: School,
};

export default function ProjectCover({
  art,
  title,
  snapshot,
  domain,
  className = '',
  onZoom,
}: {
  art: ProjectArt;
  title: string;
  snapshot?: string;
  domain?: string;
  className?: string;
  onZoom?: () => void;
}) {
  const Art = ART[art] ?? Corporate;
  const displayDomain = domain || `${title.toLowerCase().replace(/[^a-z0-9]/g, '')}.io`;

  return (
    <div className={`relative flex flex-col overflow-hidden bg-[#0A0D14] ${className}`}>
      {/* Modern Browser Chrome Window Bar */}
      <div className="flex h-7 shrink-0 items-center justify-between border-b border-[#1E2430] bg-[#121620] px-3.5 z-10">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]/90" />
        </div>

        {/* Address Pill */}
        <div className="flex items-center gap-1.5 rounded-full border border-[#232A38] bg-[#0A0D14]/80 px-2.5 py-0.5 font-mono text-[10px] text-fg-faint">
          <Lock size={9} className="text-accent" />
          <span className="truncate max-w-[140px] sm:max-w-[200px] text-fg-muted">{displayDomain}</span>
        </div>

        <div className="flex items-center gap-2">
          {onZoom && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onZoom();
              }}
              className="text-fg-faint hover:text-accent transition-colors p-0.5"
              title="Inspect snapshot"
            >
              <Maximize2 size={11} />
            </button>
          )}
        </div>
      </div>

      {/* Snapshot Preview Body */}
      <div className="relative flex-1 w-full overflow-hidden bg-[#08090C]">
        {snapshot ? (
          <div className="relative h-full w-full">
            {/* Visual Snapshot Image */}
            <Image
              src={snapshot}
              alt={`${title} snapshot preview`}
              fill
              unoptimized
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            {/* Subtle Gradient Veil */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-base/90 via-base/30 to-transparent"
            />
            {/* Click to Preview Snapshot Overlay */}
            {onZoom && (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onZoom();
                }}
                className="absolute inset-0 flex items-center justify-center bg-base/60 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 cursor-pointer"
              >
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-base/90 px-3.5 py-1.5 font-mono text-xs font-medium text-accent shadow-glow">
                  <Maximize2 size={13} />
                  View Snapshot
                </span>
              </button>
            )}
          </div>
        ) : (
          <svg
            viewBox="0 0 480 300"
            className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            role="img"
            aria-label={`${title} — interface preview`}
            preserveAspectRatio="xMidYMid slice"
          >
            <rect width="480" height="300" fill="#0E1014" />
            <Art />
          </svg>
        )}
      </div>
    </div>
  );
}
