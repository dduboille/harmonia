'use client';
import { useEffect, useRef, useState } from 'react';
import { logHarmonyCheck } from './harmonyCheck';

const GOLD = '#C9A84C';
const INK = '#0E0B08';

const W = 580;
const H = 310;
const MARGIN_L = 90;
const LINE = 12;
const T_TOP = 50;
const B_TOP = 185;

// Positions Y exactes — portée Sol (clé de Sol)
// Ligne 5 haut = F5, ligne 4 = D5, ligne 3 = B4, ligne 2 = G4, ligne 1 bas = E4
const TY: Record<string, number> = {
  'F5': T_TOP,
  'E5': T_TOP + 6,
  'D5': T_TOP + LINE,
  'C5': T_TOP + LINE + 6,
  'B4': T_TOP + 2 * LINE,
  'A4': T_TOP + 2 * LINE + 6,
  'G4': T_TOP + 3 * LINE,
  'F4': T_TOP + 3 * LINE + 6,
  'E4': T_TOP + 4 * LINE,
  'D4': T_TOP + 4 * LINE + 6,
  'C4': T_TOP + 5 * LINE,      // ligne de ledger sous portée
  'B3': T_TOP + 5 * LINE + 6,
};

// Positions Y exactes — portée Fa (clé de Fa)
// Ligne 5 haut = A3, ligne 4 = F3, ligne 3 = D3, ligne 2 = B2, ligne 1 bas = G2
const BY: Record<string, number> = {
  'A3': B_TOP,
  'G3': B_TOP + 6,
  'F3': B_TOP + LINE,
  'E3': B_TOP + LINE + 6,
  'D3': B_TOP + 2 * LINE,
  'C3': B_TOP + 2 * LINE + 6,
  'B2': B_TOP + 3 * LINE,
  'A2': B_TOP + 3 * LINE + 6,
  'G2': B_TOP + 4 * LINE,
  'F2': B_TOP + 4 * LINE + 6,  // ligne de ledger sous portée
};

// Progression I-IV-V7-I en Do majeur — validée sans erreur harmonique
const CHORDS = [
  {
    label: 'I',
    soprano: 'E4', alto: 'C4',
    tenor: 'G3',  bass: 'C3',
    midi: ['C3', 'G3', 'C4', 'E4'],
  },
  {
    label: 'IV',
    soprano: 'F4', alto: 'C4',
    tenor: 'A3',  bass: 'F2',
    midi: ['F2', 'A3', 'C4', 'F4'],
  },
  {
    label: 'V⁷',
    soprano: 'D4', alto: 'B3',
    tenor: 'F3',  bass: 'G2',
    midi: ['G2', 'F3', 'B3', 'D4'],
  },
  {
    label: 'I',
    soprano: 'E4', alto: 'C4',
    tenor: 'E3',  bass: 'C3',
    midi: ['C3', 'E3', 'C4', 'E4'],
  },
];

const STAFF_W = W - MARGIN_L - 20;
const MEAS_W = STAFF_W / 4;
const CHORD_X = [0, 1, 2, 3].map(i => MARGIN_L + i * MEAS_W + MEAS_W * 0.55);
const SC = 'rgba(250,248,244,0.5)';

function StaffLines({ top }: { top: number }) {
  return <>
    {[0, 1, 2, 3, 4].map(i => (
      <line key={i}
        x1={MARGIN_L} y1={top + i * LINE}
        x2={W - 20}   y2={top + i * LINE}
        stroke={SC} strokeWidth={0.9}
      />
    ))}
  </>;
}

function Notehead({ cx, cy, active, shift = 0 }: {
  cx: number; cy: number; active: boolean; shift?: number;
}) {
  return (
    <ellipse
      cx={cx + shift} cy={cy}
      rx={7} ry={5}
      fill={active ? GOLD : 'transparent'}
      stroke={active ? GOLD : 'rgba(250,248,244,0.35)'}
      strokeWidth={2}
      style={{ transition: 'all 0.4s ease' }}
    />
  );
}

function LedgerLine({ cx, cy, show, shift = 0 }: {
  cx: number; cy: number; show: boolean; shift?: number;
}) {
  if (!show) return null;
  return (
    <line
      x1={cx + shift - 11} y1={cy}
      x2={cx + shift + 11} y2={cy}
      stroke="rgba(250,248,244,0.55)" strokeWidth={0.9}
    />
  );
}

function TimeSignature({ top }: { top: number }) {
  const x = MARGIN_L + 46;
  return <>
    <text x={x} y={top + LINE * 1.5 + 2} fontSize={14} fontFamily="serif" fill={SC} textAnchor="middle">4</text>
    <text x={x} y={top + LINE * 3.5 + 2} fontSize={14} fontFamily="serif" fill={SC} textAnchor="middle">4</text>
  </>;
}

export default function StaffNotation({
  animateLabel,
  pauseLabel,
}: {
  animateLabel: string;
  pauseLabel?: string;
}) {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [audioReady, setAudioReady] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const samplerRef = useRef<any>(null);

  useEffect(() => {
    // Validation harmonique au démarrage
    logHarmonyCheck(CHORDS, 'I-IV-V7-I en Do');

    let mounted = true;
    const init = async () => {
      const Tone = await import('tone');
      const s = new Tone.Sampler({
        urls: {
          A0: 'A0.mp3', C1: 'C1.mp3', 'D#1': 'Ds1.mp3', 'F#1': 'Fs1.mp3',
          A1: 'A1.mp3', C2: 'C2.mp3', 'D#2': 'Ds2.mp3', 'F#2': 'Fs2.mp3',
          A2: 'A2.mp3', C3: 'C3.mp3', 'D#3': 'Ds3.mp3', 'F#3': 'Fs3.mp3',
          A3: 'A3.mp3', C4: 'C4.mp3', 'D#4': 'Ds4.mp3', 'F#4': 'Fs4.mp3',
          A4: 'A4.mp3', C5: 'C5.mp3', 'D#5': 'Ds5.mp3', 'F#5': 'Fs5.mp3',
          A5: 'A5.mp3', C6: 'C6.mp3',
        },
        baseUrl: 'https://tonejs.github.io/audio/salamander/',
        onload: () => { if (mounted) setAudioReady(true); }
      }).toDestination();
      samplerRef.current = s;
    };
    init();
    return () => { mounted = false; };
  }, []);

  const playChord = async (idx: number) => {
    if (!samplerRef.current || !audioReady) return;
    const Tone = await import('tone');
    await Tone.start();
    samplerRef.current.triggerAttackRelease(CHORDS[idx].midi, '2n');
  };

  useEffect(() => {
    if (playing) {
      playChord(current);
      intervalRef.current = setInterval(() => {
        setCurrent(prev => {
          const next = prev + 1;
          if (next >= CHORDS.length) { setPlaying(false); return 0; }
          playChord(next);
          return next;
        });
      }, 1800);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [playing, audioReady]);

  const togglePlay = () => {
    if (playing) { setPlaying(false); }
    else { setCurrent(0); setPlaying(true); }
  };

  return (
    <div style={{ width: '100%' }}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%' }}>

        {/* ══ PORTÉE SOL ══ */}
        <StaffLines top={T_TOP} />
        <line x1={MARGIN_L} y1={T_TOP} x2={MARGIN_L} y2={T_TOP + 4 * LINE} stroke={SC} strokeWidth={1.5} />

        {/* Clé de Sol — spirale ancrée sur la 2ème ligne (G4) */}
        <text
          x={MARGIN_L + 2}
          y={T_TOP + 3 * LINE + 9}
          fontSize={56}
          fontFamily="Times New Roman, serif"
          fill={GOLD}
          opacity={0.9}
        >𝄞</text>

        <TimeSignature top={T_TOP} />

        {/* ══ PORTÉE FA ══ */}
        <StaffLines top={B_TOP} />
        <line x1={MARGIN_L} y1={B_TOP} x2={MARGIN_L} y2={B_TOP + 4 * LINE} stroke={SC} strokeWidth={1.5} />

        {/* Clé de Fa — points encadrant la 4ème ligne (F3) = B_TOP + LINE */}
        <text
          x={MARGIN_L + 2}
          y={B_TOP + LINE + 16}
          fontSize={36}
          fontFamily="Times New Roman, serif"
          fill={GOLD}
          opacity={0.9}
        >𝄢</text>

        <TimeSignature top={B_TOP} />

        {/* Barre de liaison grand-portée */}
        <line x1={MARGIN_L - 2} y1={T_TOP} x2={MARGIN_L - 2} y2={B_TOP + 4 * LINE} stroke={SC} strokeWidth={2.5} />

        {/* ══ BARRES DE MESURE ══ */}
        {[1, 2, 3].map(i => {
          const bx = MARGIN_L + i * MEAS_W;
          return (
            <g key={i}>
              <line x1={bx} y1={T_TOP} x2={bx} y2={T_TOP + 4 * LINE} stroke={SC} strokeWidth={0.9} />
              <line x1={bx} y1={B_TOP} x2={bx} y2={B_TOP + 4 * LINE} stroke={SC} strokeWidth={0.9} />
            </g>
          );
        })}

        {/* Double barre finale */}
        <line x1={W - 22} y1={T_TOP} x2={W - 22} y2={T_TOP + 4 * LINE} stroke={SC} strokeWidth={0.9} />
        <line x1={W - 18} y1={T_TOP} x2={W - 18} y2={T_TOP + 4 * LINE} stroke={SC} strokeWidth={2.5} />
        <line x1={W - 22} y1={B_TOP} x2={W - 22} y2={B_TOP + 4 * LINE} stroke={SC} strokeWidth={0.9} />
        <line x1={W - 18} y1={B_TOP} x2={W - 18} y2={B_TOP + 4 * LINE} stroke={SC} strokeWidth={2.5} />

        {/* ══ ACCORDS ══ */}
        {CHORDS.map((chord, i) => {
          const x = CHORD_X[i];
          const active = current === i;
          const sy = TY[chord.soprano];
          const ay = TY[chord.alto];
          const ty = BY[chord.tenor];
          const by = BY[chord.bass];
          const aShift = Math.abs(ay - sy) < 7 ? 14 : 0;
          const bShift = Math.abs(by - ty) < 7 ? 14 : 0;
          const needsLedgerAlto = chord.alto === 'C4' || chord.alto === 'B3';
          const needsLedgerBass = chord.bass === 'F2';

          return (
            <g key={i}>
              {/* Surbrillance mesure active */}
              {active && (
                <rect
                  x={MARGIN_L + i * MEAS_W + 1}
                  y={T_TOP - 4}
                  width={MEAS_W - 2}
                  height={B_TOP + 4 * LINE - T_TOP + 8}
                  fill="rgba(201,168,76,0.06)" rx={3}
                />
              )}

              {/* Lignes de ledger */}
              <LedgerLine cx={x} cy={TY['C4']} show={needsLedgerAlto} shift={aShift} />
              <LedgerLine cx={x} cy={BY['F2']} show={needsLedgerBass} shift={bShift} />

              {/* Soprano */}
              <Notehead cx={x} cy={sy} active={active} />
              {/* Alto */}
              <Notehead cx={x} cy={ay} active={active} shift={aShift} />
              {/* Ténor */}
              <Notehead cx={x} cy={ty} active={active} />
              {/* Basse */}
              <Notehead cx={x} cy={by} active={active} shift={bShift} />

              {/* Chiffre romain */}
              <text
                x={MARGIN_L + i * MEAS_W + MEAS_W * 0.5}
                y={H - 10}
                textAnchor="middle" fontSize={11}
                fontFamily="'Playfair Display', serif"
                fill={active ? GOLD : 'rgba(250,248,244,0.22)'}
                style={{ transition: 'fill 0.3s' }}
              >{chord.label}</text>
            </g>
          );
        })}

        {/* Labels voix */}
        <text x={MARGIN_L} y={T_TOP - 10} fontSize={7.5} fill="rgba(250,248,244,0.22)" fontFamily="'DM Sans',sans-serif" letterSpacing={1.5}>SOPRANO / ALTO</text>
        <text x={MARGIN_L} y={B_TOP - 10} fontSize={7.5} fill="rgba(250,248,244,0.22)" fontFamily="'DM Sans',sans-serif" letterSpacing={1.5}>TENOR / BASS</text>

      </svg>

      {/* ══ CONTRÔLES ══ */}
      <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button
          onClick={togglePlay}
          style={{
            background: playing ? 'transparent' : GOLD,
            color: playing ? GOLD : INK,
            border: `1px solid ${GOLD}`,
            padding: '0.75rem 1.75rem',
            borderRadius: '2px', cursor: 'pointer',
            fontFamily: "'DM Sans',sans-serif",
            fontSize: '0.78rem', fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase' as const,
            transition: 'all 0.25s',
            opacity: audioReady ? 1 : 0.5,
          }}
        >
          {playing ? (pauseLabel || 'Pause') : audioReady ? animateLabel : '...'}
        </button>

        <div style={{ display: 'flex', gap: '6px' }}>
          {CHORDS.map((_, i) => (
            <div key={i}
              onClick={() => { setPlaying(false); setCurrent(i); playChord(i); }}
              style={{
                width: 7, height: 7, borderRadius: '50%',
                background: current === i ? GOLD : 'rgba(201,168,76,0.2)',
                cursor: 'pointer', transition: 'background 0.3s',
              }}
            />
          ))}
        </div>

        {!audioReady && (
          <span style={{ fontSize: '0.7rem', color: 'rgba(250,248,244,0.3)', letterSpacing: '0.08em' }}>
            Chargement du piano...
          </span>
        )}
      </div>
    </div>
  );
}