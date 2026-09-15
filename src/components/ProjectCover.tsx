import type { ProjectArt } from '@/lib/data';

/*
 * Generated vector covers.
 *
 * Every project gets a bespoke geometric composition rather than a stock
 * photo or a screenshot — flat SVG, a few hundred bytes each, drawn from the
 * same three-colour editorial palette so the work index reads as one system.
 * All static: no randomness, no runtime cost, scales to any DPI.
 */

const INK = '#14130F';
const ACCENT = '#B2451F';
const FIELD = '#F4F2EC';

const LINE = { stroke: INK, strokeWidth: 1.25, fill: 'none', opacity: 0.3 };
const LINE_SOFT = { stroke: INK, strokeWidth: 1, fill: 'none', opacity: 0.16 };
const ACCENT_LINE = { stroke: ACCENT, strokeWidth: 1.5, fill: 'none' };

/** A 7-node content pipeline, one stage highlighted. */
function Pipeline() {
  const nodes = [40, 90, 140, 190, 240, 290, 340];
  return (
    <g>
      <path d="M40 125 H340" {...LINE} />
      {nodes.map((x, i) => (
        <g key={x}>
          {i === 3 ? (
            <>
              <circle cx={x} cy={125} r={13} fill={ACCENT} />
              <circle cx={x} cy={125} r={21} {...ACCENT_LINE} opacity={0.4} />
            </>
          ) : (
            <circle cx={x} cy={125} r={7} fill={INK} opacity={0.32} />
          )}
        </g>
      ))}
      <path d="M40 125 C 110 55, 270 55, 340 125" {...LINE_SOFT} />
      <path d="M40 125 C 110 195, 270 195, 340 125" {...LINE_SOFT} />
      <rect x={28} y={66} width={44} height={14} {...LINE} />
      <rect x={308} y={170} width={44} height={14} {...ACCENT_LINE} />
    </g>
  );
}

/** Product grid with a cart rail — headless commerce. */
function Storefront() {
  const cols = [46, 128, 210, 292];
  return (
    <g>
      {cols.map((x, i) =>
        [58, 140].map((y, j) => (
          <rect
            key={`${x}-${y}`}
            x={x}
            y={y}
            width={62}
            height={52}
            {...(i === 1 && j === 0 ? { fill: ACCENT, opacity: 0.9 } : LINE)}
          />
        ))
      )}
      <path d="M46 214 H354" {...LINE} />
      <circle cx={318} cy={214} r={6} fill={ACCENT} />
      <path d="M46 40 H170" {...ACCENT_LINE} />
    </g>
  );
}

/** Two regions joined by a travel arc, with a care mark. */
function Care() {
  return (
    <g>
      <circle cx={92} cy={158} r={30} {...LINE} />
      <circle cx={308} cy={96} r={30} {...LINE} />
      <path d="M92 158 C 150 60, 250 60, 308 96" {...ACCENT_LINE} strokeDasharray="5 6" />
      <circle cx={92} cy={158} r={6} fill={INK} opacity={0.35} />
      <circle cx={308} cy={96} r={6} fill={ACCENT} />
      <path d="M186 132 v34 M169 149 h34" {...ACCENT_LINE} strokeWidth={4} />
      <path d="M40 206 H360" {...LINE_SOFT} />
      <path d="M40 46 H360" {...LINE_SOFT} />
    </g>
  );
}

/** Face-detection brackets over a sampling grid. */
function Scan() {
  const dots = [];
  for (let x = 108; x <= 292; x += 23) {
    for (let y = 68; y <= 182; y += 23) {
      dots.push(<circle key={`${x}-${y}`} cx={x} cy={y} r={1.6} fill={INK} opacity={0.22} />);
    }
  }
  return (
    <g>
      {dots}
      <path d="M96 92 V60 h32" {...LINE} strokeWidth={1.75} />
      <path d="M272 60 h32 V92" {...LINE} strokeWidth={1.75} />
      <path d="M304 158 v32 h-32" {...LINE} strokeWidth={1.75} />
      <path d="M128 190 H96 v-32" {...LINE} strokeWidth={1.75} />
      <path d="M96 125 H304" {...ACCENT_LINE} strokeWidth={2} />
      <circle cx={200} cy={125} r={5} fill={ACCENT} />
    </g>
  );
}

/** Ruled ledger lines with weighted entries. */
function Ledger() {
  const rows = [70, 98, 126, 154, 182];
  const widths = [250, 180, 292, 140, 210];
  return (
    <g>
      {rows.map((y, i) => (
        <g key={y}>
          <path d={`M46 ${y} H354`} {...LINE_SOFT} />
          <rect
            x={46}
            y={y - 7}
            width={widths[i]}
            height={9}
            {...(i === 2 ? { fill: ACCENT, opacity: 0.88 } : { fill: INK, opacity: 0.2 })}
          />
        </g>
      ))}
      <path d="M46 42 H160" {...ACCENT_LINE} />
    </g>
  );
}

/** Vertical bars — a growth column chart. */
function Columns() {
  const bars = [
    { x: 62, h: 56 },
    { x: 108, h: 84 },
    { x: 154, h: 70 },
    { x: 200, h: 118 },
    { x: 246, h: 96 },
    { x: 292, h: 140 },
  ];
  return (
    <g>
      <path d="M46 196 H354" {...LINE} />
      {bars.map((b, i) => (
        <rect
          key={b.x}
          x={b.x}
          y={196 - b.h}
          width={32}
          height={b.h}
          {...(i === bars.length - 1
            ? { fill: ACCENT, opacity: 0.9 }
            : { fill: INK, opacity: 0.18 })}
        />
      ))}
      <path d="M62 84 L 324 44" {...ACCENT_LINE} strokeDasharray="4 5" />
    </g>
  );
}

/** Modular grid with one cell filled. */
function Grid() {
  const cells = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      const x = 64 + i * 72;
      const y = 54 + j * 50;
      cells.push(
        <rect
          key={`${i}-${j}`}
          x={x}
          y={y}
          width={60}
          height={38}
          {...(i === 2 && j === 1 ? { fill: ACCENT, opacity: 0.9 } : LINE)}
        />
      );
    }
  }
  return (
    <g>
      {cells}
      <path d="M64 216 H352" {...LINE_SOFT} />
    </g>
  );
}

/** Page wireframe — header, sidebar, content blocks. */
function Layout() {
  return (
    <g>
      <rect x={52} y={44} width={296} height={162} {...LINE} />
      <path d="M52 76 H348" {...LINE} />
      <rect x={64} y={54} width={46} height={12} fill={ACCENT} opacity={0.9} />
      <rect x={64} y={90} width={92} height={104} {...LINE_SOFT} fill={INK} fillOpacity={0.06} />
      <path d="M170 100 H336 M170 122 H336 M170 144 H300 M170 166 H336 M170 188 H264" {...LINE} />
    </g>
  );
}

/** Connected community cluster. */
function Community() {
  const ring = [
    [200, 62],
    [296, 110],
    [278, 196],
    [122, 196],
    [104, 110],
  ];
  return (
    <g>
      {ring.map(([x, y], i) => (
        <path key={`l-${i}`} d={`M200 132 L${x} ${y}`} {...LINE_SOFT} />
      ))}
      <path
        d={`M${ring.map(([x, y]) => `${x} ${y}`).join(' L')} Z`}
        {...LINE}
      />
      {ring.map(([x, y]) => (
        <circle key={`c-${x}-${y}`} cx={x} cy={y} r={11} fill={INK} opacity={0.22} />
      ))}
      <circle cx={200} cy={132} r={17} fill={ACCENT} />
    </g>
  );
}

const ART: Record<ProjectArt, () => JSX.Element> = {
  pipeline: Pipeline,
  storefront: Storefront,
  care: Care,
  scan: Scan,
  ledger: Ledger,
  columns: Columns,
  grid: Grid,
  layout: Layout,
  community: Community,
};

export default function ProjectCover({
  art,
  title,
  className = '',
}: {
  art: ProjectArt;
  title: string;
  className?: string;
}) {
  const Art = ART[art] ?? Grid;

  return (
    <svg
      viewBox="0 0 400 250"
      className={className}
      role="img"
      aria-label={`${title} — cover illustration`}
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="400" height="250" fill={FIELD} />
      <Art />
    </svg>
  );
}
