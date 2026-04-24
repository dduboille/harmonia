"use client";
import React, { useRef, useState, useCallback } from "react";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";

const S = {
  wrap: { fontFamily:"var(--font-sans,system-ui)", maxWidth:720, margin:"0 auto", padding:"0 1rem 3rem" } as React.CSSProperties,
  header: { padding:"1.5rem 0 1rem", borderBottom:"0.5px solid #e5e5e5", marginBottom:"1.25rem" } as React.CSSProperties,
  badge: { display:"inline-block", background:"#E6F1FB", color:"#185FA5", fontSize:11, fontWeight:500, padding:"2px 10px", borderRadius:20, marginBottom:6 } as React.CSSProperties,
  h1: { fontSize:26, fontWeight:500, color:"#111", margin:0 } as React.CSSProperties,
  subtitle: { fontSize:14, color:"#666", marginTop:4, lineHeight:1.6 } as React.CSSProperties,
  nav: { display:"flex", gap:6, flexWrap:"wrap" as const, marginBottom:"1.5rem" },
  pill:(active:boolean):React.CSSProperties=>({ fontSize:12, padding:"5px 14px", border:`0.5px solid ${active?"#333":"#ddd"}`, borderRadius:20, cursor:"pointer", background:active?"#111":"transparent", color:active?"#fff":"#666", transition:"all .15s" }),
  stitle: { fontSize:17, fontWeight:500, color:"#111", marginBottom:8 } as React.CSSProperties,
  sbody: { fontSize:14, color:"#555", lineHeight:1.75, marginBottom:"1rem" } as React.CSSProperties,
  infoBox: { borderLeft:"2px solid #185FA5", padding:"8px 14px", background:"#E6F1FB", borderRadius:"0 6px 6px 0", margin:"12px 0", fontSize:13, color:"#0C447C", lineHeight:1.6 } as React.CSSProperties,
  warnBox: { borderLeft:"2px solid #BA7517", padding:"8px 14px", background:"#FAEEDA", borderRadius:"0 6px 6px 0", margin:"12px 0", fontSize:13, color:"#633806", lineHeight:1.6 } as React.CSSProperties,
  card: { border:"0.5px solid #e5e5e5", borderRadius:10, padding:"14px 18px", background:"#fff", marginBottom:12 } as React.CSSProperties,
};

const FN = {
  T: {color:"#0F6E56",bg:"#E1F5EE",label:"Tonique (T)"},
  SD:{color:"#534AB7",bg:"#EEEDFE",label:"Sous-dominante (SD)"},
  D: {color:"#BA7517",bg:"#FAEEDA",label:"Dominante (D)"},
  X: {color:"#888",  bg:"#f5f5f5",label:"Ambigu"},
};

// ─── Staff notation SVG ───────────────────────────────────────────────────────
// ─── Staff notation SVG ───────────────────────────────────────────────────────
// step = position diatonique, Do4=4
// Portée Sol : lignes aux steps pairs 6,8,10,12,14 (Mi4 Sol4 Si4 Ré5 Fa5)
// Portée Fa  : lignes aux steps pairs -6,-4,-2,0,2 (Sol2 Si2 Ré3 Fa3 La3)
// Do4 (step 4) = ligne supplémentaire entre les deux portées

const NOTE_STEP: Record<string, number> = {
  "Fa2":-8,"Sol2":-6,"La2":-5,"Si2":-4,
  "Do3":-3,"Ré3":-2,"Mi3":-1,"Fa3":0,"Sol3":1,"La3":2,"Si3":3,
  "Do4":4, "Ré4":5, "Mi4":6, "Fa4":7, "Sol4":8, "La4":9, "Si4":10,
  "Do5":11,"Ré5":12,"Mi5":13,"Fa5":14,"Sol5":15,
};

interface StaffChord {
  label: string;
  soprano: string; alto: string; tenor: string; bass: string;
  color?: string;
  tritonNotes?: string[];
  resolveNotes?: string[];
}

interface GrandStaffProps {
  chords: StaffChord[];
  arrows?: Array<{ fromChord:number; toChord:number; fromNote:string; toNote:string; color:string }>;
}

function GrandStaff({ chords, arrows=[] }: GrandStaffProps) {
  const LG = 9;
  const CHORD_W = 100;
  const LEFT = 50;
  const W = LEFT + chords.length * CHORD_W + 24;
  // Plus d'espace entre portées : Do4 au milieu, ~4 demi-espaces libres de chaque côté
  const MIDDLE_Y = 135;
  const stepY = (step: number) => MIDDLE_Y - (step - 4) * (LG / 2);
  const TREBLE_STEPS = [6,8,10,12,14];
  const BASS_STEPS   = [-6,-4,-2,0,2];
  const H = stepY(-8) + 18;

  const whole = (x: number, y: number, col: string) => (
    <g>
      <ellipse cx={x} cy={y} rx={5.5} ry={3.8} fill={col} transform={`rotate(-10,${x},${y})`} />
      <ellipse cx={x} cy={y} rx={2.2} ry={1.5} fill="#fffef8" transform={`rotate(-10,${x},${y})`} />
    </g>
  );

  const ledger = (x: number, y: number) => (
    <line x1={x-9} y1={y} x2={x+9} y2={y} stroke="#555" strokeWidth={1} />
  );

  const getLedgers = (step: number, x: number, forTreble: boolean): React.ReactNode[] => {
    const ls: React.ReactNode[] = [];
    if (forTreble) {
      if (step <= 4) for (let s=4; s>=step; s-=2) ls.push(ledger(x, stepY(s)));
      if (step >= 16) for (let s=16; s<=step; s+=2) ls.push(ledger(x, stepY(s)));
    } else {
      if (step >= 4) for (let s=4; s<=step; s+=2) ls.push(ledger(x, stepY(s)));
      if (step <= -8) for (let s=-8; s>=step; s-=2) ls.push(ledger(x, stepY(s)));
    }
    return ls;
  };

  const noteCol = (name: string, chord: StaffChord) => {
    if (chord.tritonNotes?.includes(name)) return "#E24B4A";
    if (chord.resolveNotes?.includes(name)) return "#0F6E56";
    return "#222";
  };

  const cx = (ci: number) => LEFT + ci * CHORD_W + 40;

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`}
      style={{ display:"block", borderRadius:8, background:"#fffef8", border:"0.5px solid #ddd" }}>

      {TREBLE_STEPS.map(s => <line key={`ts${s}`} x1={6} y1={stepY(s)} x2={W-6} y2={stepY(s)} stroke="#888" strokeWidth={0.8} />)}
      {BASS_STEPS.map(s   => <line key={`bs${s}`} x1={6} y1={stepY(s)} x2={W-6} y2={stepY(s)} stroke="#888" strokeWidth={0.8} />)}

      <line x1={6} y1={stepY(14)} x2={6} y2={stepY(-6)} stroke="#888" strokeWidth={1} />
      <line x1={W-8} y1={stepY(14)} x2={W-8} y2={stepY(-6)} stroke="#555" strokeWidth={1.5} />
      <line x1={W-4} y1={stepY(14)} x2={W-4} y2={stepY(-6)} stroke="#555" strokeWidth={4} />

      {/* Clé de Sol : la spirale s'enroule sur Sol4 (step 8 = 2e ligne en partant du bas) */}
      <text x={8} y={stepY(10)+26} fontSize={50} fill="#444" fontFamily="Times New Roman, serif" style={{userSelect:"none"}}>𝄞</text>
      {/* Clé de Fa : points encadrent Fa3 (step 0 = 4e ligne du bas de portée Fa) */}
      <text x={8} y={stepY(0)+4} fontSize={26} fill="#444" fontFamily="Times New Roman, serif" style={{userSelect:"none"}}>𝄢</text>

      {chords.map((_,ci) => ci>0 && (
        <line key={`bar${ci}`} x1={cx(ci)-CHORD_W/2} y1={stepY(14)} x2={cx(ci)-CHORD_W/2} y2={stepY(-6)} stroke="#888" strokeWidth={0.8} />
      ))}

      {chords.map((ch, ci) => {
        const x = cx(ci);
        const sX=x-7, aX=x+7, tX=x-7, bX=x+7;
        const sStep=NOTE_STEP[ch.soprano]??10, aStep=NOTE_STEP[ch.alto]??8;
        const tStep=NOTE_STEP[ch.tenor]??1,   bStep=NOTE_STEP[ch.bass]??-2;
        return (
          <g key={ci}>
            <text x={x} y={stepY(14)-8} textAnchor="middle" fontSize={11} fontWeight={700} fill={ch.color??"#333"}>{ch.label}</text>
            {getLedgers(sStep,sX,true)}{whole(sX,stepY(sStep),noteCol(ch.soprano,ch))}
            {getLedgers(aStep,aX,true)}{whole(aX,stepY(aStep),noteCol(ch.alto,ch))}
            {getLedgers(tStep,tX,false)}{whole(tX,stepY(tStep),noteCol(ch.tenor,ch))}
            {getLedgers(bStep,bX,false)}{whole(bX,stepY(bStep),noteCol(ch.bass,ch))}
            {ci===0 && (<>
              <text x={sX-12} y={stepY(sStep)} textAnchor="middle" fontSize={7} fill="#bbb" dominantBaseline="middle">S</text>
              <text x={aX+12} y={stepY(aStep)} textAnchor="middle" fontSize={7} fill="#bbb" dominantBaseline="middle">A</text>
              <text x={tX-12} y={stepY(tStep)} textAnchor="middle" fontSize={7} fill="#bbb" dominantBaseline="middle">T</text>
              <text x={bX+12} y={stepY(bStep)} textAnchor="middle" fontSize={7} fill="#bbb" dominantBaseline="middle">B</text>
            </>)}
          </g>
        );
      })}

      {arrows.map((arr,i) => {
        const fromX = cx(arr.fromChord); const toX = cx(arr.toChord);
        const fStep = NOTE_STEP[arr.fromNote]??4; const tStep = NOTE_STEP[arr.toNote]??4;
        const y1=stepY(fStep), y2=stepY(tStep);
        const going_up = y2 < y1;
        const mx=(fromX+toX)/2;
        const id=`arrowhead${i}`;
        return (
          <g key={i}>
            <defs>
              <marker id={id} markerWidth={6} markerHeight={6} refX={5} refY={3} orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill={arr.color} />
              </marker>
            </defs>
            <path d={`M ${fromX+8} ${y1} Q ${mx} ${(y1+y2)/2+(going_up?-14:14)} ${toX-8} ${y2}`}
              fill="none" stroke={arr.color} strokeWidth={1.5} strokeDasharray="3,2"
              markerEnd={`url(#${id})`} />
          </g>
        );
      })}
    </svg>
  );
}

// ─── Données ──────────────────────────────────────────────────────────────────

const DO_ACCORDS = [
  { deg:"I",   name:"C",    notes:["Do","Mi","Sol"],    fn:"T"  as const, hasFa:false, hasSi:false },
  { deg:"II",  name:"Dm",   notes:["Ré","Fa","La"],     fn:"SD" as const, hasFa:true,  hasSi:false },
  { deg:"III", name:"Em",   notes:["Mi","Sol","Si"],    fn:"X"  as const, hasFa:false, hasSi:true  },
  { deg:"IV",  name:"F",    notes:["Fa","La","Do"],     fn:"SD" as const, hasFa:true,  hasSi:false },
  { deg:"V",   name:"G",    notes:["Sol","Si","Ré"],    fn:"D"  as const, hasFa:false, hasSi:true  },
  { deg:"VI",  name:"Am",   notes:["La","Do","Mi"],     fn:"T"  as const, hasFa:false, hasSi:false },
  { deg:"VII", name:"Bdim", notes:["Si","Ré","Fa"],     fn:"D"  as const, hasFa:true,  hasSi:true  },
];

const DO_TETRADES = [
  { deg:"I",   name:"CMaj7", notes:["Do","Mi","Sol","Si"],  fn:"T"  as const },
  { deg:"II",  name:"Dm7",   notes:["Ré","Fa","La","Do"],   fn:"SD" as const },
  { deg:"III", name:"Em7",   notes:["Mi","Sol","Si","Ré"],  fn:"X"  as const },
  { deg:"IV",  name:"FMaj7", notes:["Fa","La","Do","Mi"],   fn:"SD" as const },
  { deg:"V",   name:"G7",    notes:["Sol","Si","Ré","Fa"],  fn:"D"  as const },
  { deg:"VI",  name:"Am7",   notes:["La","Do","Mi","Sol"],  fn:"T"  as const },
  { deg:"VII", name:"Bm7♭5", notes:["Si","Ré","Fa","La"],  fn:"D"  as const },
];

function notesToDotKeys(notes: string[]): string[] {
  const SHARP = ["Do","Do#","Ré","Ré#","Mi","Fa","Fa#","Sol","Sol#","La","La#","Si"];
  const FLAT  = ["Do","Réb","Ré","Mib","Mi","Fa","Solb","Sol","Lab","La","Sib","Si"];
  let prev = -1;
  return notes.map(n => {
    let idx = SHARP.indexOf(n); if (idx < 0) idx = FLAT.indexOf(n);
    while (idx <= prev) idx += 12;
    prev = idx;
    return `${n}:${3 + Math.floor(idx / 12)}`;
  });
}

// Progressions avec conduite de voix réelle (4 voix : S, A, T, B)
// dotKeys = notes dans l'octave choisie pour un bon voice leading
const PROGRESSIONS = [
  {
    id:"iivi", label:"II–V–I", desc:"La progression fondamentale du jazz. SD→D→T. Notez les notes communes Ré et Fa (Dm7→G7) et la résolution du triton Si↑Do, Fa↓Mi (G7→CMaj7).",
    chords:["Dm7","G7","CMaj7"], fns:["SD","D","T"],
    // Voice leading: S=soprano A=alto T=tenor B=basse
    // Dm7: S=Do4 A=La3 T=Fa3 B=Ré3 → G7: S=Si3 A=Sol3 T=Fa3(→Mi3) B=Sol3... corrigé :
    // Dm7: S=Do4 A=Fa3 T=La3 B=Ré3 → G7: S=Si3 A=Fa3(reste) T=Sol3 B=Sol2 → C: S=Do4 A=Mi3 T=Sol3 B=Do3
    dotKeys:[
      ["Do:4","Fa:3","La:3","Ré:3"],  // Dm7
      ["Si:3","Fa:3","Sol:3","Sol:2"], // G7 — Fa reste, Si résout vers Do, Sol reste
      ["Do:4","Mi:3","Sol:3","Do:3"], // CMaj7
    ],
    staff:[
      { label:"Dm7", soprano:"Do5", alto:"Fa4", tenor:"La3", bass:"Ré3", color:"#534AB7" },
      { label:"G7",  soprano:"Si4", alto:"Fa4", tenor:"Sol3",bass:"Sol2",color:"#BA7517" },
      { label:"CMaj7",soprano:"Do5",alto:"Mi4",tenor:"Sol3",bass:"Do3", color:"#0F6E56" },
    ] as StaffChord[],
  },
  {
    id:"ivvi", label:"IV–V–I", desc:"Cadence parfaite classique. SD→D→T. La basse fait une quinte descendante (Sol→Do). Le soprano et l'alto bougent par mouvements conjoints.",
    chords:["F","G","C"], fns:["SD","D","T"],
    dotKeys:[
      ["La:3","Fa:3","Do:4","Fa:2"],  // F
      ["Si:3","Sol:3","Ré:4","Sol:2"],// G
      ["Do:4","Sol:3","Mi:4","Do:3"], // C
    ],
    staff:[
      { label:"F",   soprano:"La4", alto:"Fa4", tenor:"Do4", bass:"Fa2",  color:"#534AB7" },
      { label:"G",   soprano:"Si4", alto:"Sol4",tenor:"Ré4", bass:"Sol2", color:"#BA7517" },
      { label:"C",   soprano:"Do5", alto:"Sol4",tenor:"Mi4", bass:"Do3",  color:"#0F6E56" },
    ] as StaffChord[],
  },
  {
    id:"pop1", label:"I–VI–IV–V", desc:"La progression pop par excellence. T→T→SD→D. Le soprano descend par degrés (Do–La–La–Si), la basse fait les fondamentales.",
    chords:["C","Am","F","G"], fns:["T","T","SD","D"],
    dotKeys:[
      ["Do:4","Sol:3","Mi:3","Do:3"],  // C
      ["Do:4","La:3","Mi:3","La:2"],   // Am — Do reste (note commune C/Am)
      ["Do:4","La:3","Fa:3","Fa:2"],   // F  — Do reste, La reste
      ["Si:3","Sol:3","Ré:3","Sol:2"], // G  — mouvement conjoint
    ],
    staff:[
      { label:"C",  soprano:"Do5", alto:"Sol4",tenor:"Mi3", bass:"Do3",  color:"#0F6E56" },
      { label:"Am", soprano:"Do5", alto:"La4",  tenor:"Mi3", bass:"La2",  color:"#0F6E56" },
      { label:"F",  soprano:"Do5", alto:"La4",  tenor:"Fa3", bass:"Fa2",  color:"#534AB7" },
      { label:"G",  soprano:"Si4", alto:"Sol4", tenor:"Ré3", bass:"Sol2", color:"#BA7517" },
    ] as StaffChord[],
  },
  {
    id:"pop2", label:"I–V–VI–IV", desc:"Variante très répandue. Le soprano tient Do sur C puis G (note commune), puis descend à La pour Am et remonte à Do pour F.",
    chords:["C","G","Am","F"], fns:["T","D","T","SD"],
    dotKeys:[
      ["Do:4","Sol:3","Mi:3","Do:3"],  // C
      ["Si:3","Sol:3","Ré:3","Sol:2"], // G
      ["Do:4","La:3","Mi:3","La:2"],   // Am
      ["Do:4","La:3","Fa:3","Fa:2"],   // F
    ],
    staff:[
      { label:"C",  soprano:"Do5", alto:"Sol4",tenor:"Mi3", bass:"Do3",  color:"#0F6E56" },
      { label:"G",  soprano:"Si4", alto:"Sol4",tenor:"Ré3", bass:"Sol2", color:"#BA7517" },
      { label:"Am", soprano:"Do5", alto:"La4",  tenor:"Mi3", bass:"La2",  color:"#0F6E56" },
      { label:"F",  soprano:"Do5", alto:"La4",  tenor:"Fa3", bass:"Fa2",  color:"#534AB7" },
    ] as StaffChord[],
  },
];

// G7→C : S et A sur portée Sol, T et B sur portée Fa
// G7 = Sol Si Ré Fa : S=Si4(triton) A=Fa4(triton) T=Ré4 B=Sol2
// C  = Do Mi Sol    : S=Do5(résolution de Si) A=Mi4(résolution de Fa) T=Sol4 B=Do3
const G7_TO_C_STAFF: StaffChord[] = [
  {
    label:"G7", color:"#BA7517",
    soprano:"Si4", alto:"Fa4",    // portée Sol — les deux notes du triton
    tenor:"Ré4",  bass:"Sol2",    // portée Fa
    tritonNotes:["Si4","Fa4"],
  },
  {
    label:"C",  color:"#0F6E56",
    soprano:"Do5", alto:"Mi4",    // portée Sol — résolutions du triton
    tenor:"Sol3",  bass:"Do3",    // portée Fa
    resolveNotes:["Do5","Mi4"],
  },
];

// Flèches de résolution G7→C
const G7_TO_C_ARROWS = [
  { fromChord:0, toChord:1, fromNote:"Si4", toNote:"Do5", color:"#E24B4A" },  // Si↑Do
  { fromChord:0, toChord:1, fromNote:"Fa4", toNote:"Mi4", color:"#E24B4A" },  // Fa↓Mi
];

// Dm7→G7→CMaj7 : S et A portée Sol, T et B portée Fa
// Dm7   : S=Do5 A=La4  T=Fa4 B=Ré3
// G7    : S=Si4(triton) A=Fa4(triton,reste) T=Sol3 B=Sol2
// CMaj7 : S=Do5(résolution) A=Mi4(résolution) T=Sol3(reste) B=Do3
const IIVI_STAFF: StaffChord[] = [
  { label:"Dm7",   soprano:"Do5", alto:"La4", tenor:"Fa4", bass:"Ré3",  color:"#534AB7" },
  { label:"G7",    soprano:"Si4", alto:"Fa4", tenor:"Sol3",bass:"Sol2", color:"#BA7517",
    tritonNotes:["Si4","Fa4"] },
  { label:"CMaj7", soprano:"Do5", alto:"Mi4", tenor:"Sol3",bass:"Do3",  color:"#0F6E56",
    resolveNotes:["Do5","Mi4"] },
];

const IIVI_ARROWS = [
  { fromChord:1, toChord:2, fromNote:"Si4", toNote:"Do5", color:"#E24B4A" },
  { fromChord:1, toChord:2, fromNote:"Fa4", toNote:"Mi4", color:"#E24B4A" },
];

const MOVEMENTS = [
  { label:"Conjoint (→)", color:"#0F6E56", bg:"#E1F5EE", icon:"→", desc:"Déplacement par seconde — le plus naturel et chantable. À privilégier dans toutes les voix.", ex:"Do→Ré→Mi" },
  { label:"Disjoint (⤴)", color:"#185FA5", bg:"#E6F1FB", icon:"⤴", desc:"Saut d'une tierce ou plus. À manier avec précaution — plutôt réservé à la basse.", ex:"Do→Sol (quinte)" },
  { label:"Contraire (↕)", color:"#BA7517", bg:"#FAEEDA", icon:"↕", desc:"Deux voix dans des directions opposées. Le plus équilibré — évite les parallèles.", ex:"Soprano↑, Basse↓" },
  { label:"Oblique (→|)", color:"#534AB7", bg:"#EEEDFE", icon:"→|", desc:"Une voix tenue, l'autre bouge. Fréquent lors des résolutions (sensible montante).", ex:"Alto tenu, Ténor monte" },
];

const VOICE_RULES = [
  { label:"Favoriser les mouvements conjoints", color:"#0F6E56", desc:"Plus une écriture progresse par secondes, plus elle est fluide. Les grands sauts sont réservés à la basse.", bon:"Do→Ré→Mi→Fa (conjoint)", bad:"Do→Sol→Mi→La (disjoint)" },
  { label:"Éviter les quintes et octaves parallèles", color:"#A32D2D", desc:"Trop stables, ces intervalles annihilent la polyphonie — deux voix sonnent comme une seule.", bon:"Soprano↑ pendant que Basse↓ (contraire)", bad:"Do–Sol puis Ré–La (quintes parallèles ✗)" },
  { label:"Résoudre le triton (V→I)", color:"#BA7517", desc:"La sensible (Si) monte vers Do. La 7e de dominante (Fa) descend vers Mi. Quasi-obligatoire.", bon:"Si→Do (½ ton ↑) · Fa→Mi (½ ton ↓)", bad:"Si→Sol (saut) · Fa→Sol (monte ✗)" },
  { label:"Gérer les doublures", color:"#534AB7", desc:"3 sons sur 4 voix = une note doublée. En général : fondamentale. Exception : VIIe degré → doubler la tierce.", bon:"C : Do–Mi–Sol–Do (fondamentale doublée)", bad:"Bdim : Si–Ré–Fa–Si (sensible doublée ✗)" },
  { label:"Maintenir des distances naturelles", color:"#185FA5", desc:"Soprano–Alto et Alto–Ténor : jamais plus d'une octave. Ténor–Basse : plus de liberté.", bon:"S–A : sixte · A–T : quarte · T–B : octave", bad:"S–A : dixième (trop écartées ✗)" },
];

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const QUIZ_POOL = [
  // Triton
  { q:"Entre quels degrés se forme le triton de Do majeur ?", opts:["I et V","IV et VII","II et VI","III et VII"], a:1, fb:"Le triton Fa–Si se forme entre le IVe degré (Fa) et le VIIe degré (Si, sensible)." },
  { q:"Combien de tons contient le triton ?", opts:["2","2,5","3","3,5"], a:2, fb:"Triton = 3 tons = 6 demi-tons. C'est l'intervalle au milieu exact de l'octave." },
  { q:"En Do majeur, les deux notes du triton sont :", opts:["Do et Sol","Ré et La","Fa et Si","Mi et Sib"], a:2, fb:"Le triton de Do majeur = Fa (IVe) et Si (VIIe)." },
  { q:"Pourquoi le triton est-il si instable ?", opts:["Car il est trop aigu","Car son rapport de fréquences est irrationnel","Car il contient deux bémols","Car il est trop grave"], a:1, fb:"Le rapport du triton (√2) est irrationnel — absent de la série harmonique naturelle, d'où son instabilité." },
  { q:"Dans V→I, comment se résout la sensible (Si) ?", opts:["Elle descend vers La","Elle monte vers Do","Elle reste","Elle descend vers Sol"], a:1, fb:"La sensible (Si) monte par demi-ton vers la tonique (Do). Résolution ascendante obligatoire." },
  { q:"Dans V→I, comment se résout la 7e de dominante (Fa dans G7) ?", opts:["Elle monte vers Sol","Elle descend vers Mi","Elle reste","Elle monte vers La"], a:1, fb:"Le Fa descend par demi-ton vers Mi (3e de C). Résolution descendante obligatoire." },
  { q:"Quel est l'autre nom du triton ?", opts:["Sixte mineure","Quinte diminuée ou quarte augmentée","Quarte juste","Quinte juste"], a:1, fb:"Triton = quarte augmentée (Fa→Si montant) ou quinte diminuée (Si→Fa descendant) — 6 demi-tons." },
  { q:"Quel surnom historique avait le triton ?", opts:["Angelus in musica","Diabolus in musica","Harmonicus perfectus","Rex intervallarum"], a:1, fb:"'Diabolus in musica' (le diable dans la musique) — au Moyen Âge, cet intervalle était évité car jugé instable et dangereux." },
  { q:"Le triton est exactement :", opts:["La moitié d'une quinte","La moitié d'une octave","Un tiers d'une octave","Un quart d'une octave"], a:1, fb:"6 demi-tons = exactement la moitié des 12 demi-tons d'une octave." },
  { q:"Dans G7→C, quelles voix bougent par demi-ton ?", opts:["Sol et Ré","Si et Fa","Do et Mi","La et Ré"], a:1, fb:"Si monte d'un demi-ton vers Do, et Fa descend d'un demi-ton vers Mi — ce sont les deux notes du triton qui se résolvent." },
  // Fonctions
  { q:"Quelle fonction harmonique apporte la stabilité ?", opts:["Dominante","Sous-dominante","Tonique","Médiante"], a:2, fb:"La tonique (T) apporte le repos — elle ne contient aucune note du triton." },
  { q:"Quelle fonction contient le triton complet ?", opts:["Tonique","Sous-dominante","Dominante","Médiante"], a:2, fb:"La dominante (D) contient Fa ET Si — tension maximale." },
  { q:"Quelle fonction prépare la tension ?", opts:["Tonique","Sous-dominante","Dominante","Sensible"], a:1, fb:"La sous-dominante (SD) contient Fa mais pas Si — prépare sans atteindre la tension maximale." },
  { q:"L'enchaînement fondamental de l'harmonie tonale est :", opts:["T→D→SD","D→T→SD","SD→D→T","T→SD→T"], a:2, fb:"SD→D→T : préparation → tension → résolution. La colonne vertébrale de la musique tonale." },
  { q:"En Do majeur, quels degrés ont une fonction tonique ?", opts:["I et IV","I et VI","V et VII","II et IV"], a:1, fb:"I (C) et VI (Am) : aucune des deux notes du triton → stabilité." },
  { q:"En Do majeur, quels degrés ont une fonction sous-dominante ?", opts:["I et VI","II et IV","V et VII","III et V"], a:1, fb:"II (Dm) et IV (F) : contiennent Fa mais pas Si." },
  { q:"En Do majeur, quels degrés ont une fonction dominante ?", opts:["I et VI","II et IV","V et VII","III et IV"], a:2, fb:"V (G) et VII (Bdim) : contiennent les deux notes du triton (Si et Fa)." },
  { q:"Pourquoi le IIIe degré (Em) est-il 'bâtard' ?", opts:["Car il est diminué","Car il contient Si mais pas Fa","Car il est augmenté","Car il change de tonalité"], a:1, fb:"Em contient Si (sensible) mais pas Fa — sa fonction est ambiguë, peu utilisé dans les progressions classiques." },
  { q:"Quelle est la caractéristique d'un accord de fonction tonique ?", opts:["Contient Fa et Si","Contient Fa pas Si","Ne contient ni Fa ni Si","Contient Si pas Fa"], a:2, fb:"Tonique = ni Fa, ni Si → aucune instabilité." },
  { q:"Quelle est la caractéristique d'un accord de fonction dominante ?", opts:["Ni Fa ni Si","Fa seul","Fa et Si","Si seul"], a:2, fb:"Dominante = Fa ET Si (triton complet) → tension maximale." },
  { q:"Quelle est la caractéristique de la sous-dominante ?", opts:["Ni Fa ni Si","Fa seul (pas Si)","Fa et Si","Si seul"], a:1, fb:"Sous-dominante = Fa seul (IVe degré), sans Si (VIIe) — tension modérée." },
  { q:"Un accord sans Fa ni Si a toujours une fonction :", opts:["Dominante","Sous-dominante","Tonique","Ambiguë"], a:2, fb:"Sans aucune note du triton = aucune instabilité = fonction tonique." },
  { q:"En Sol majeur, le triton se forme entre :", opts:["Sol et Ré","Do et Fa#","Do et Fa","Sol et Do#"], a:1, fb:"Sol majeur : Sol La Si Do Ré Mi Fa# — le triton est entre Do (IVe) et Fa# (VIIe)." },
  { q:"En Fa majeur, le triton se forme entre :", opts:["Fa et Do","Sib et Mi","La et Ré","Fa et Si"], a:1, fb:"Fa majeur : Fa Sol La Sib Do Ré Mi — le triton est entre Sib (IVe) et Mi (VIIe)." },
  { q:"Pourquoi G7 est-il le seul accord X7 de Do majeur ?", opts:["Par convention","Car il est le Ve degré, seul à contenir le triton Fa–Si naturellement","Car Sol est une grande note","Car les autres degrés sont mineurs"], a:1, fb:"G7 (Sol–Si–Ré–Fa) est le Ve degré — seul accord de la gamme de Do à contenir les deux notes du triton (Si et Fa)." },
  // Substitutions
  { q:"Quel accord est la substitution naturelle de C (Do majeur) ?", opts:["Dm","F","Am","G"], a:2, fb:"Am (VI) substitue C (I) — même fonction tonique, partagent Do et Mi (2 notes sur 3)." },
  { q:"Quel accord est la substitution naturelle de F (Fa majeur) ?", opts:["G","Am","Em","Dm"], a:3, fb:"Dm (II) et F (IV) ont la même fonction sous-dominante — partagent Fa et La." },
  { q:"Pourquoi Bdim peut-il remplacer G7 ?", opts:["Même fondamentale","Même type d'accord","Contient le triton Si et Fa","Même quinte"], a:2, fb:"Bdim = Si–Ré–Fa : contient les deux notes du triton, comme G7. Même fonction dominante." },
  { q:"La cadence rompue V→VI exploite :", opts:["La similarité D et T","La substitution Am pour C","La résolution du triton","Le cycle des quintes"], a:1, fb:"V→VI : au lieu de résoudre sur I, on va vers VI (Am) — substitut de C avec la même fonction tonique. Effet de surprise." },
  { q:"Quelle progression correspond à SD→D→T ?", opts:["C–G–Am","Dm–G–C","F–Am–G","Am–F–G"], a:1, fb:"Dm (SD) → G (D) → C (T) = II–V–I." },
  { q:"Qu'est-ce qu'une substitution diatonique ?", opts:["Remplacer par un accord d'une autre gamme","Remplacer par un accord de même gamme et même fonction","Changer la tonalité","Ajouter une 7e"], a:1, fb:"Substitution diatonique = même gamme, même fonction tonale, accord différent pour varier la couleur." },
  { q:"En Do majeur, la substitution de Dm (II) est :", opts:["G","C","F","Am"], a:2, fb:"F (IV) a la même fonction sous-dominante que Dm (II) — même gamme." },
  { q:"Quelle progression utilise deux SD consécutives ?", opts:["C–G–Am–F","F–Dm–G–C","C–Am–G–F","G–C–F–G"], a:1, fb:"F–Dm–G–C : IV (SD) puis II (SD), puis V (D), puis I (T). Extension de la fonction sous-dominante." },
  // Cadences
  { q:"Qu'est-ce que la cadence parfaite ?", opts:["IV→I","V→I à l'état fondamental","V→VI","II→V"], a:1, fb:"Cadence parfaite = V→I avec les deux accords à l'état fondamental. La plus stable et conclusive." },
  { q:"Qu'est-ce que la cadence rompue ?", opts:["V→I renversé","V→VI","IV→I","Se termine sur V"], a:1, fb:"Cadence rompue = V→VI. Au lieu de résoudre sur I, on va vers VI — effet de surprise." },
  { q:"Qu'est-ce que la demi-cadence ?", opts:["IV→I","V→I","Se termine sur V","V→VI"], a:2, fb:"Demi-cadence = se termine sur V. Comme une question restée sans réponse." },
  { q:"Qu'est-ce que la cadence plagale ?", opts:["V→I","IV→I","V→VI","II→V→I"], a:1, fb:"Cadence plagale = IV→I. Couleur douce et solennelle — l'Amen de la musique sacrée." },
  { q:"Quelle cadence crée un effet de surprise ?", opts:["Parfaite","Imparfaite","Rompue","Plagale"], a:2, fb:"La cadence rompue (V→VI) déjoue l'attente de la résolution sur I — effet de surprise." },
  { q:"Quelle cadence se termine sur la dominante ?", opts:["Parfaite","Plagale","Rompue","Demi-cadence"], a:3, fb:"La demi-cadence se termine sur V (la dominante) — suspendue, interrogative." },
  { q:"Quelle cadence est souvent associée à 'Amen' dans la musique sacrée ?", opts:["Parfaite","Imparfaite","Plagale","Rompue"], a:2, fb:"La cadence plagale (IV→I) a une couleur douce et solennelle — souvent l'Amen final dans la musique chorale." },
  // Progressions
  { q:"Le cycle des quintes en Do majeur est :", opts:["I–IV–VII–III–VI–II–V–I","I–II–III–IV–V–VI–VII–I","I–V–II–VI–III–VII–IV–I","I–VI–IV–V–I"], a:0, fb:"I–IV–VII–III–VI–II–V–I. Chaque accord est une quinte en dessous du précédent (ou une quarte au-dessus)." },
  { q:"Que signifie 'extension de fonction' ?", opts:["Ajouter une 7e","Enchaîner plusieurs accords de même fonction","Transposer","Inverser un accord"], a:1, fb:"Extension = enchaîner plusieurs accords de même fonction. Ex : IV–II (deux SD) avant V–I." },
  { q:"Dans I–VI–IV–V, les fonctions sont :", opts:["T–T–SD–D","T–D–SD–T","SD–T–D–T","T–SD–T–D"], a:0, fb:"C(T)–Am(T)–F(SD)–G(D). Am substitue I (même fonction T)." },
  { q:"Quelle est la progression II–V–I en Sol majeur ?", opts:["Dm–G7–C","Am–D7–G","Em–A7–D","Bm–E7–A"], a:1, fb:"Sol majeur : II=Am, V=D7, I=G → Am–D7–G." },
  { q:"En quoi consiste le 'pendule' harmonique ?", opts:["Répéter le même accord","Alterner entre deux fonctions","Descendre par quintes","Accélérer le rythme harmonique"], a:1, fb:"Le pendule alterne entre deux fonctions (ex. T–SD–T–SD), créant un effet d'oscillation avant la cadence." },
  // Conduite de voix
  { q:"Quel mouvement est le plus naturel et chantable ?", opts:["Disjoint","Chromatique","Conjoint","Par quintes"], a:2, fb:"Le mouvement conjoint (par secondes) est le plus naturel — exigé en priorité dans l'écriture vocale." },
  { q:"Quel mouvement désigne une voix tenue pendant que l'autre bouge ?", opts:["Direct","Contraire","Disjoint","Oblique"], a:3, fb:"Mouvement oblique : une voix reste, l'autre se déplace. Fréquent lors des résolutions." },
  { q:"Pourquoi évite-t-on les quintes parallèles ?", opts:["Trop dissonantes","Annihilent l'indépendance des voix","Trop aiguës","Brisent le rythme"], a:1, fb:"Les quintes parallèles font sonner deux voix comme une seule — la polyphonie disparaît." },
  { q:"Quelle note double-t-on généralement dans un accord à l'état fondamental ?", opts:["La tierce","La quinte","La fondamentale","La septième"], a:2, fb:"On double la fondamentale. La quinte est acceptable. La tierce est évitée." },
  { q:"Au VIIe degré, quelle note ne faut-il jamais doubler ?", opts:["La quinte","La fondamentale (Si=sensible)","La tierce","Le Fa"], a:1, fb:"Si (sensible) ne doit jamais être doublée — elle doit monter vers Do." },
  { q:"Quelle est la distance maximale entre soprano et alto ?", opts:["Tierce","Sixte","Octave","Dixième"], a:2, fb:"Entre soprano–alto et alto–ténor : jamais plus d'une octave." },
  { q:"Les voix peuvent-elles se croiser ?", opts:["Oui, souvent","Oui, parfois","Non, jamais","Seulement à la cadence"], a:2, fb:"Les voix ne doivent pas se croiser — soprano toujours au-dessus de l'alto, etc." },
  { q:"Quelles sont les 4 voix traditionnelles ?", opts:["Piano, violon, flûte, hautbois","Soprano, alto, ténor, basse","Violon I, II, alto, violoncelle","Flûte, clarinette, cor, basson"], a:1, fb:"Soprano, Alto, Ténor, Basse — issu de l'écriture chorale européenne." },
  { q:"Quel est le tessitura du soprano ?", opts:["G3–C5","C4–G5","C3–G4","E2–C4"], a:1, fb:"Soprano : Do4–Sol5. Voix féminine aiguë, elle porte généralement la mélodie principale." },
  { q:"Comment doit se résoudre la sensible dans V→I ?", opts:["Elle descend vers La","Elle monte vers Do","Elle reste","Elle saute vers Sol"], a:1, fb:"La sensible (Si) monte obligatoirement vers la tonique (Do) par demi-ton." },
  { q:"Comment doit se résoudre la 7e de dominante dans V7→I ?", opts:["Elle monte vers Sol","Elle reste","Elle descend vers Mi par degré conjoint","Elle saute vers Do"], a:2, fb:"La 7e de dominante (Fa dans G7) descend obligatoirement par degré conjoint vers Mi (3e de C)." },
  { q:"Quel est le mouvement le plus équilibré entre deux voix ?", opts:["Direct","Parallèle","Contraire","Oblique"], a:2, fb:"Le mouvement contraire (une voix monte, l'autre descend) est le plus équilibré et dynamique." },
  { q:"Dans le II–V–I, quelles notes restent de Dm7 vers G7 ?", opts:["Do et La","Ré et Fa","La et Do","Sol et Si"], a:1, fb:"Ré et Fa (fondamentale et tierce de Dm7) deviennent quinte et septième de G7 — deux voix restent immobiles." },
  { q:"Pourquoi favoriser les notes communes entre deux accords ?", opts:["Pour simplifier l'écriture","Pour créer des quintes parallèles","Pour réduire les mouvements et rendre la conduite de voix plus fluide","Pour éviter la basse"], a:2, fb:"Les notes communes permettent de conserver des voix immobiles — l'écriture gagne en fluidité et en naturel." },
  { q:"La règle d'or de la conduite de voix entre basse et soprano est :", opts:["Toujours monter ensemble","Mouvement contraire de préférence","Rester à l'unisson","Éviter les secondes"], a:1, fb:"Le mouvement contraire basse/soprano évite les parallèles et assure l'indépendance des voix." },
  // Émotions / théorie générale
  { q:"La musique crée des émotions en jouant sur :", opts:["Le volume uniquement","Le cycle tension/résolution","La mélodie uniquement","Les paroles"], a:1, fb:"Le cycle tension (dominante) / résolution (tonique) est le mécanisme émotionnel fondamental de la musique tonale." },
  { q:"Qu'apporte une résolution vers la tonique ?", opts:["De la tension","De la surprise","Du repos et de la stabilité","De l'instabilité"], a:2, fb:"La tonique apporte le repos — c'est la réponse à la tension de la dominante." },
  { q:"Que se passe-t-il si on enchaîne uniquement des dominantes ?", opts:["La musique est trop stable","Trop de tension sans résolution — inconfort","La musique est parfaite","La musique n'a pas de couleur"], a:1, fb:"La musique fonctionne par contraste stabilité/tension. Trop de tension sans repos devient inconfortable." },
  { q:"Pourquoi l'harmonie tonale repose-t-elle sur le triton ?", opts:["Par convention","Son instabilité crée l'attraction vers I et III","Il est facile à chanter","Il contient 3 notes"], a:1, fb:"Le triton est le moteur : son instabilité acoustique crée une forte attraction vers les degrés I et III." },
  { q:"Quelle voix porte généralement la mélodie principale ?", opts:["Basse","Ténor","Alto","Soprano"], a:3, fb:"Le soprano est la voix la plus aiguë — il porte naturellement la mélodie principale." },
  { q:"Quelle est la différence entre cadence parfaite et imparfaite ?", opts:["L'imparfaite va vers VI","L'imparfaite a au moins un accord renversé","L'imparfaite commence par IV","L'imparfaite se termine sur V"], a:1, fb:"Parfaite : V→I, les deux à l'état fondamental. Imparfaite : au moins un accord est renversé." },
  { q:"Qu'est-ce que le rythme harmonique ?", opts:["Le rythme de la mélodie","La fréquence de changement des accords","Le rythme de la basse","La vitesse du morceau"], a:1, fb:"Le rythme harmonique = la fréquence à laquelle les accords changent. Il est indépendant du rythme mélodique." },
  { q:"Accélérer le rythme harmonique crée :", opts:["Plus de stabilité","Plus de tension et de mouvement","Moins de tension","Aucun effet notable"], a:1, fb:"Plus les accords changent vite, plus la tension et le sentiment de mouvement augmentent." },
  { q:"En Do majeur, Am peut remplacer C car :", opts:["Ils ont la même fondamentale","Ils partagent Do et Mi (même fonction T)","Ils sont tous deux majeurs","Ils contiennent le triton"], a:1, fb:"Am (VI) et C (I) ont la même fonction tonique — Am est le substitut naturel de C." },
  { q:"La progression I–IV–V–I respecte :", opts:["D–SD–T–D","T–SD–D–T","SD–T–D–T","T–D–SD–T"], a:1, fb:"C(T)–F(SD)–G(D)–C(T). C'est l'application directe de l'enchaînement fondamental SD→D→T." },
  { q:"Dans Dm7→G7, quelles notes bougent de Dm7 à G7 ?", opts:["Ré et La","Fa et Do","Do et La","Sol et Si"], a:0, fb:"Ré→Sol (fondamentale vers fondamentale) et La→Si (quinte vers tierce). Fa et Do restent." },
  { q:"Pourquoi utilise-t-on des renversements dans une progression ?", opts:["Pour changer la couleur de l'accord","Pour une ligne de basse plus fluide par degrés conjoints","Pour éviter les accords majeurs","Pour doubler la sensible"], a:1, fb:"Les renversements permettent à la basse de progresser par degrés conjoints plutôt que par sauts — plus fluide." },
  { q:"Dans une bonne conduite de voix à 4 parties, combien de voix bougent idéalement en même temps ?", opts:["Les 4 toujours","Le moins possible — privilégier les notes communes","Toujours 2","Toujours 3"], a:1, fb:"Une bonne conduite de voix repose sur la nécessité, pas la multiplication des mouvements. Conserver les notes communes." },
  { q:"Qu'est-ce qu'une note commune entre deux accords ?", opts:["Une note jouée deux fois","Une note présente dans les deux accords","La fondamentale d'un accord","La sensible"], a:1, fb:"Une note commune est une note qui appartient aux deux accords successifs. Elle peut rester dans la même voix." },
  { q:"Quel mouvement crée le plus de vitalité dans l'écriture polyphonique ?", opts:["Le mouvement direct","Le mouvement contraire","Le mouvement oblique","Le mouvement parallèle"], a:1, fb:"Le mouvement contraire (une voix monte, l'autre descend) crée la plus grande vitalité et indépendance des voix." },
];

const QUIZ_COUNT = 10;

export default function Cours3() {
  const [activeSection, setActiveSection] = useState("triton");
  const pianoRef = useRef<PianoPlayerRef>(null);

  const playNoteGroup = useCallback((pairs: Array<[string,number]>) => {
    pairs.forEach(([n,o], i) => setTimeout(() => pianoRef.current?.playNote(n, o, { duration:2 }), i*80));
  }, []);

  const playTriton = useCallback(() => {
    pianoRef.current?.playNote("Fa",3,{duration:2.5});
    pianoRef.current?.playNote("Si",3,{duration:2.5});
  }, []);

  const playResolution = useCallback(() => {
    const g7:Array<[string,number]> = [["Sol",3],["Si",3],["Ré",4],["Fa",4]];
    const c:Array<[string,number]>  = [["Do",3],["Mi",3],["Sol",3],["Do",4]];
    g7.forEach(([n,o],i) => setTimeout(() => pianoRef.current?.playNote(n,o,{duration:2}), i*80));
    setTimeout(() => c.forEach(([n,o],i) => setTimeout(() => pianoRef.current?.playNote(n,o,{duration:2.5}), i*80)), 600);
  }, []);

  const [selDeg, setSelDeg] = useState<number|null>(null);
  const [showTet, setShowTet] = useState(false);

  const playNotes = useCallback((notes: string[]) => {
    const SHARP = ["Do","Do#","Ré","Ré#","Mi","Fa","Fa#","Sol","Sol#","La","La#","Si"];
    let prev=-1;
    notes.forEach((n,i) => {
      let idx = SHARP.indexOf(n);
      while (idx<=prev) idx+=12;
      prev=idx;
      const oct = 3+Math.floor(idx/12);
      setTimeout(() => pianoRef.current?.playNote(n,oct,{duration:2}), i*90);
    });
  }, []);

  const [selProg, setSelProg] = useState(0);
  const [progStep, setProgStep] = useState<number|null>(null);

  const playKeys = useCallback((keys: string[]) => {
    keys.forEach((key,i) => {
      const [note,octStr] = key.split(":");
      setTimeout(() => pianoRef.current?.playNote(note,parseInt(octStr),{duration:2}), i*90);
    });
  }, []);

  const playFullProg = useCallback((p: typeof PROGRESSIONS[0]) => {
    p.dotKeys.forEach((chord,ci) => {
      setTimeout(() => {
        setProgStep(ci);
        chord.forEach((key,ni) => {
          const [note,octStr]=key.split(":");
          setTimeout(() => pianoRef.current?.playNote(note,parseInt(octStr),{duration:1.8}), ni*80);
        });
      }, ci*950);
    });
    setTimeout(() => setProgStep(null), p.dotKeys.length*950+500);
  }, []);

  const [quizQs, setQuizQs] = useState(() => shuffleArray(QUIZ_POOL).slice(0,QUIZ_COUNT));
  const [quizIdx, setQuizIdx] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState<number|null>(null);
  const [done, setDone] = useState(false);

  const answerQuiz = (i:number) => { if(answered)return; setSelected(i); setAnswered(true); if(i===quizQs[quizIdx].a) setQuizScore(s=>s+1); };
  const nextQuiz = () => { if(quizIdx+1>=QUIZ_COUNT){setDone(true);return;} setQuizIdx(i=>i+1); setAnswered(false); setSelected(null); };
  const resetQuiz = () => { setQuizQs(shuffleArray(QUIZ_POOL).slice(0,QUIZ_COUNT)); setQuizIdx(0); setQuizScore(0); setAnswered(false); setSelected(null); setDone(false); };

  const SECTIONS = [
    {id:"triton",label:"Le triton"},
    {id:"fonctions",label:"Les fonctions"},
    {id:"progressions",label:"Progressions"},
    {id:"voix",label:"Conduite de voix"},
    {id:"quiz",label:"Entraînement"},
  ];

  const prog = PROGRESSIONS[selProg];
  const accords = showTet ? DO_TETRADES : DO_ACCORDS;

  return (
    <div style={S.wrap}>
      <div style={{position:"absolute",opacity:0,pointerEvents:"none",height:0,overflow:"hidden"}}>
        <PianoPlayer ref={pianoRef} octaves={2} startOctave={3} showLabels={false} />
      </div>

      <div style={S.header}>
        <span style={S.badge}>Niveau 1 · Cours 3</span>
        <h1 style={S.h1}>Fonctions tonales et conduite de voix</h1>
        <p style={S.subtitle}>Le triton comme moteur de tension — trois fonctions, un cycle, des règles d'écriture.</p>
      </div>

      <nav style={S.nav}>
        {SECTIONS.map(s => <button key={s.id} style={S.pill(activeSection===s.id)} onClick={() => setActiveSection(s.id)}>{s.label}</button>)}
      </nav>

      {/* ══ TRITON ══ */}
      {activeSection==="triton" && (
        <div>
          <h2 style={S.stitle}>Le triton (tonalité de Do majeur)</h2>
          <p style={S.sbody}>
            Depuis 400 ans, un seul intervalle gouverne la tension de toute la musique occidentale : le <strong>triton</strong>.
            Il se forme naturellement entre les degrés IV (Fa) et VII (Si) de la gamme de <strong>Do majeur</strong>.
            Son instabilité acoustique est si forte qu'il <em>réclame</em> une résolution.
          </p>

          <div style={S.infoBox}>
            <strong>Triton = 3 tons = 6 demi-tons.</strong> C'est l'unique intervalle au milieu exact de l'octave.
            Son rapport de fréquences (√2 ≈ 1,414) est irrationnel. Au Moyen Âge, on l'appelait <em>diabolus in musica</em>.
          </div>

          {/* Visualisation clavier */}
          <div style={{border:"0.5px solid #e5e5e5",borderRadius:10,padding:"16px 18px",background:"#fff",marginBottom:16}}>
            <div style={{fontSize:13,color:"#888",marginBottom:10}}>Le triton de Do majeur : Fa (IVe) — Si (VIIe)</div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:20,marginBottom:16}}>
              <div style={{textAlign:"center"}}>
                <div style={{fontSize:22,fontWeight:700,color:"#534AB7",padding:"10px 20px",border:"0.5px solid #534AB7",borderRadius:8,background:"#EEEDFE"}}>Fa</div>
                <div style={{fontSize:11,color:"#888",marginTop:4}}>IVe degré<br/>Sous-dominante</div>
              </div>
              <div style={{textAlign:"center"}}>
                <div style={{fontSize:11,color:"#993C1D",fontWeight:500}}>3 tons</div>
                <div style={{fontSize:24,color:"#993C1D"}}>↔</div>
                <div style={{fontSize:11,color:"#993C1D",fontWeight:500}}>6 demi-tons</div>
              </div>
              <div style={{textAlign:"center"}}>
                <div style={{fontSize:22,fontWeight:700,color:"#534AB7",padding:"10px 20px",border:"0.5px solid #534AB7",borderRadius:8,background:"#EEEDFE"}}>Si</div>
                <div style={{fontSize:11,color:"#888",marginTop:4}}>VIIe degré<br/>Sensible</div>
              </div>
            </div>
            <PianoPlayer dotKeys={["Fa:3","Si:3"]} octaves={2} startOctave={3} showLabels showOctaveMarkers />
            <button onClick={playTriton} style={{marginTop:12,fontSize:12,padding:"6px 16px",border:"0.5px solid #993C1D",borderRadius:20,cursor:"pointer",background:"#FAECE7",color:"#993C1D"}}>
              ▶ Écouter le triton
            </button>
          </div>

          {/* Résolution G7→C avec portées */}
          <h3 style={{fontSize:15,fontWeight:500,color:"#111",margin:"20px 0 8px"}}>La résolution obligatoire : G7 → C</h3>
          <p style={S.sbody}>
            Le triton dans G7 se résout vers C avec deux mouvements par demi-ton en sens contraires :
            Fa <strong>descend</strong> vers Mi (3e de C), Si <strong>monte</strong> vers Do (tonique).
          </p>

          {/* Portées SVG */}
          <div style={{marginBottom:14}}>
            <div style={{fontSize:12,color:"#888",marginBottom:8}}>Notation sur les portées Sol et Fa :</div>
            <img src="/staff_g7_c.jpg" alt="G7 → C/G sur portées" style={{ maxWidth:"100%", borderRadius:8, border:"0.5px solid #e5e5e5" }} />
            <div style={{display:"flex",gap:16,marginTop:6,fontSize:11,color:"#666"}}>
              <span><span style={{color:"#BA7517",fontWeight:600}}>G7</span> : Sol(B)–Fa(A)–Ré(T)–Sol(B)</span>
              <span>→</span>
              <span><span style={{color:"#0F6E56",fontWeight:600}}>C</span> : Do(S)–Mi(A)–Mi(T)–Do(B)</span>
              <span style={{color:"#993C1D"}}>Si↑Do · Fa↓Mi</span>
            </div>
          </div>

          {/* Grille G7/C */}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:14}}>
            <div style={{border:"0.5px solid #BA7517",borderRadius:10,padding:"14px",background:"#FAEEDA"}}>
              <div style={{fontSize:13,fontWeight:500,color:"#BA7517",marginBottom:8}}>G7 — Tension</div>
              {[["Sol","B — fondamentale"],["Si","S — sensible ↑"],["Ré","T — quinte"],["Fa","A — 7e ↓"]].map(([n,r])=>(
                <div key={r} style={{display:"flex",justifyContent:"space-between",fontSize:13,color:["Si","Fa"].includes(n)?"#993C1D":"#333"}}>
                  <span style={{fontWeight:["Si","Fa"].includes(n)?700:400}}>{n}</span>
                  <span style={{fontSize:11,color:"#888"}}>{r}</span>
                </div>
              ))}
            </div>
            <div style={{border:"0.5px solid #0F6E56",borderRadius:10,padding:"14px",background:"#E1F5EE"}}>
              <div style={{fontSize:13,fontWeight:500,color:"#0F6E56",marginBottom:8}}>C — Résolution</div>
              {[["Do","B — tonique"],["Mi","A — ← Fa↓"],["Mi","T — quinte"],["Do","S — ← Si↑"]].map(([n,r],i)=>(
                <div key={i} style={{display:"flex",justifyContent:"space-between",fontSize:13,color:r.includes("←")?"#0F6E56":"#333"}}>
                  <span style={{fontWeight:r.includes("←")?700:400}}>{n}</span>
                  <span style={{fontSize:11,color:"#888"}}>{r}</span>
                </div>
              ))}
            </div>
          </div>

          <button onClick={playResolution} style={{fontSize:13,padding:"7px 20px",border:"0.5px solid #0F6E56",borderRadius:20,cursor:"pointer",background:"#E1F5EE",color:"#0F6E56"}}>
            ▶ Écouter G7 → C
          </button>
          <div style={{...S.warnBox,marginTop:16}}>
            <strong>Règle :</strong> La sensible (Si) monte <em>toujours</em> vers la tonique. La 7e (Fa) descend <em>toujours</em> par degré conjoint. Ces mouvements sont quasi-obligatoires en écriture classique à 4 voix.
          </div>
        </div>
      )}

      {/* ══ FONCTIONS ══ */}
      {activeSection==="fonctions" && (
        <div>
          <h2 style={S.stitle}>Les trois fonctions harmoniques</h2>
          <p style={S.sbody}>La présence ou l'absence des notes du triton (Fa et Si en Do majeur) détermine la <strong>fonction</strong> de chaque accord.</p>

          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:20}}>
            {(["T","SD","D"] as const).map(f=>{
              const fn=FN[f];
              return (
                <div key={f} style={{border:`0.5px solid ${fn.color}`,borderRadius:10,padding:"14px",background:fn.bg}}>
                  <div style={{fontSize:15,fontWeight:700,color:fn.color,marginBottom:6}}>{fn.label}</div>
                  <div style={{fontSize:12,color:"#555",lineHeight:1.6}}>
                    {f==="T" && <>Repos, stabilité.<br/><strong>Ni Fa, ni Si.</strong><br/>Degrés : I, VI</>}
                    {f==="SD" && <>Prépare la tension.<br/><strong>Fa seul (pas Si).</strong><br/>Degrés : II, IV</>}
                    {f==="D" && <>Tension maximale.<br/><strong>Fa ET Si.</strong><br/>Degrés : V, VII</>}
                  </div>
                </div>
              );
            })}
          </div>

          <div style={S.infoBox}>
            <strong>L'enchaînement fondamental : SD → D → T</strong><br/>
            C'est la colonne vertébrale de toute la musique tonale depuis 400 ans. Toute la musique tonale n'est qu'une variation de ce cycle.
          </div>

          <div style={{display:"flex",gap:8,marginBottom:10}}>
            {["Triades","Tétrades (7e)"].map((label,i)=>(
              <button key={label} onClick={()=>{setShowTet(i===1);setSelDeg(null);}}
                style={{fontSize:12,padding:"4px 12px",border:`0.5px solid ${(i===1)===showTet?"#333":"#ddd"}`,borderRadius:6,cursor:"pointer",background:(i===1)===showTet?"#111":"transparent",color:(i===1)===showTet?"#fff":"#666"}}>
                {label}
              </button>
            ))}
          </div>

          <p style={{fontSize:13,color:"#888",margin:"0 0 10px"}}>Cliquez sur un accord :</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:5,marginBottom:12}}>
            {accords.map((d,i)=>{
              const fn=FN[d.fn];
              return (
                <div key={d.deg} onClick={()=>{setSelDeg(i);playNotes(d.notes);}}
                  style={{border:`0.5px solid ${selDeg===i?fn.color:"#e5e5e5"}`,borderRadius:8,padding:"8px 4px",textAlign:"center",cursor:"pointer",background:selDeg===i?fn.bg:"#fff",transition:"all .15s"}}>
                  <div style={{fontSize:10,color:"#999"}}>{d.deg}</div>
                  <div style={{fontSize:12,fontWeight:600,color:"#111",margin:"2px 0"}}>{d.name}</div>
                  <div style={{fontSize:9,padding:"1px 3px",borderRadius:6,display:"inline-block",background:fn.bg,color:fn.color,fontWeight:500}}>{d.fn==="X"?"?":d.fn}</div>
                </div>
              );
            })}
          </div>

          {selDeg!==null && (()=>{
            const d=accords[selDeg]; const fn=FN[d.fn];
            const hasFa=d.notes.includes("Fa"), hasSi=d.notes.includes("Si");
            return (
              <>
                <div style={{border:`0.5px solid ${fn.color}`,borderRadius:10,padding:"14px 18px",background:fn.bg,marginBottom:14}}>
                  <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:10}}>
                    <span style={{fontSize:20,fontWeight:700,color:fn.color}}>{d.name}</span>
                    <span style={{fontSize:13,color:"#666"}}>{d.notes.join(" – ")}</span>
                    <span style={{fontSize:11,padding:"2px 8px",borderRadius:10,background:"rgba(255,255,255,0.6)",color:fn.color,fontWeight:500}}>{fn.label}</span>
                  </div>
                  <div style={{display:"flex",gap:12,fontSize:12}}>
                    <span style={{color:hasFa?"#993C1D":"#bbb"}}>{hasFa?"✓":"✗"} Contient Fa</span>
                    <span style={{color:hasSi?"#993C1D":"#bbb"}}>{hasSi?"✓":"✗"} Contient Si</span>
                  </div>
                  {d.fn==="X" && <p style={{fontSize:13,color:"#666",lineHeight:1.6,margin:"8px 0 0"}}>Em contient Si (sensible) mais pas Fa. Fonction ambiguë — peu utilisé dans les progressions classiques.</p>}
                </div>
                <PianoPlayer dotKeys={notesToDotKeys(d.notes)} octaves={2} startOctave={3} showLabels showOctaveMarkers />
              </>
            );
          })()}

          <h3 style={{fontSize:14,fontWeight:500,margin:"20px 0 8px"}}>Récapitulatif en Do majeur</h3>
          <div style={{overflowX:"auto"}}>
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:13}}>
              <thead><tr style={{borderBottom:"0.5px solid #e5e5e5"}}>{["Fonction","Caractéristique","Degrés","Accords"].map(h=><th key={h} style={{textAlign:"left",padding:"6px 10px",fontWeight:500,color:"#666"}}>{h}</th>)}</tr></thead>
              <tbody>
                {[{f:"T",char:"Ni Fa, ni Si",degs:"I, VI",ch:"C, Am",c:FN.T},{f:"SD",char:"Fa seul (pas Si)",degs:"II, IV",ch:"Dm, F",c:FN.SD},{f:"D",char:"Fa ET Si",degs:"V, VII",ch:"G, Bdim",c:FN.D}].map((row,i)=>(
                  <tr key={row.f} style={{borderBottom:"0.5px solid #f0f0f0",background:i%2===0?"#fff":"#fafafa"}}>
                    <td style={{padding:"7px 10px",fontWeight:700,color:row.c.color}}>{row.f}</td>
                    <td style={{padding:"7px 10px",fontSize:12,color:"#555"}}>{row.char}</td>
                    <td style={{padding:"7px 10px"}}>{row.degs}</td>
                    <td style={{padding:"7px 10px",fontWeight:500}}>{row.ch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ══ PROGRESSIONS ══ */}
      {activeSection==="progressions" && (
        <div>
          <h2 style={S.stitle}>Substitutions et progressions</h2>
          <p style={S.sbody}>Un accord peut être <strong>remplacé par un accord de même fonction</strong> issu de la même gamme. Les progressions ci-dessous respectent la <strong>conduite de voix</strong> — les accords sont disposés pour minimiser les mouvements et conserver les notes communes.</p>

          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:20}}>
            {[{fn:"T" as const,a1:"C (I)",a2:"Am (VI)",note:"Partagent Do et Mi. V→VI = cadence rompue."},
              {fn:"SD" as const,a1:"F (IV)",a2:"Dm (II)",note:"Partagent Fa et La. Interchangeables avant la dominante."},
              {fn:"D" as const,a1:"G (V)",a2:"Bdim (VII)",note:"Partagent Si et Fa (le triton). Même tension."},
            ].map(({fn,a1,a2,note})=>{
              const f=FN[fn];
              return (
                <div key={fn} style={{border:`0.5px solid ${f.color}`,borderRadius:10,padding:"12px",background:f.bg}}>
                  <div style={{fontSize:12,fontWeight:600,color:f.color,marginBottom:8}}>Fonction {fn}</div>
                  <div style={{display:"flex",gap:6,marginBottom:8}}>
                    <span style={{fontSize:13,fontWeight:700,padding:"4px 10px",borderRadius:6,background:"rgba(255,255,255,0.7)",color:"#111"}}>{a1}</span>
                    <span style={{fontSize:13,color:f.color,alignSelf:"center"}}>↔</span>
                    <span style={{fontSize:13,fontWeight:700,padding:"4px 10px",borderRadius:6,background:"rgba(255,255,255,0.7)",color:"#111"}}>{a2}</span>
                  </div>
                  <p style={{fontSize:11,color:"#555",lineHeight:1.5,margin:0}}>{note}</p>
                </div>
              );
            })}
          </div>

          <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:14}}>
            {PROGRESSIONS.map((p,i)=>(
              <button key={p.id} onClick={()=>{setSelProg(i);setProgStep(null);}}
                style={{fontSize:12,padding:"5px 12px",border:`0.5px solid ${i===selProg?"#333":"#ddd"}`,borderRadius:6,cursor:"pointer",background:i===selProg?"#111":"transparent",color:i===selProg?"#fff":"#666"}}>
                {p.label}
              </button>
            ))}
          </div>

          <div style={S.card}>
            <p style={{fontSize:13,color:"#555",lineHeight:1.6,marginBottom:12}}>{prog.desc}</p>
            <div style={{display:"flex",gap:8,marginBottom:14,flexWrap:"wrap"}}>
              {prog.chords.map((chord,i)=>{
                const fn=FN[prog.fns[i] as keyof typeof FN]??FN.T;
                const isActive=progStep===i;
                return (
                  <div key={i} onClick={()=>{setProgStep(i);playKeys(prog.dotKeys[i]);}}
                    style={{border:`0.5px solid ${isActive?fn.color:"#ddd"}`,borderRadius:8,padding:"10px 16px",textAlign:"center",cursor:"pointer",background:isActive?fn.bg:"#fff",transition:"all .15s",minWidth:60}}>
                    <div style={{fontSize:16,fontWeight:600,color:"#111"}}>{chord}</div>
                    <div style={{fontSize:10,color:fn.color,fontWeight:500,marginTop:2}}>{prog.fns[i]}</div>
                  </div>
                );
              })}
            </div>
            {progStep!==null && <PianoPlayer dotKeys={prog.dotKeys[progStep]} octaves={2} startOctave={3} showLabels showOctaveMarkers />}

            {/* Portées avec conduite de voix */}
            <div style={{ marginTop:14 }}>
              <div style={{ fontSize:12, color:"#888", marginBottom:6 }}>Cadence parfaite II–V–I (Dm · G7 · C) :</div>
              <img src="/staff_ii_v_i.jpg" alt="Cadence II V I sur portées" style={{ maxWidth:"100%", borderRadius:8, border:"0.5px solid #e5e5e5" }} />
              <div style={{ fontSize:11, color:"#666", marginTop:4 }}>S=Soprano · A=Alto · T=Ténor · B=Basse — notes rouges = triton (Fa–Si)</div>
            </div>

            <button onClick={()=>playFullProg(prog)} style={{marginTop:12,fontSize:13,padding:"7px 20px",border:"0.5px solid #0F6E56",borderRadius:20,cursor:"pointer",background:"#E1F5EE",color:"#0F6E56"}}>
              ▶ Jouer la progression complète
            </button>
          </div>
        </div>
      )}

      {/* ══ CONDUITE DE VOIX ══ */}
      {activeSection==="voix" && (
        <div>
          <h2 style={S.stitle}>La conduite de voix</h2>
          <p style={S.sbody}>
            La <strong>conduite de voix</strong> est l'art de relier les notes d'un accord à l'autre de façon logique, chantable et indépendante.
            Elle transforme une succession d'accords en véritable polyphonie.
          </p>

          <div style={S.infoBox}>
            <strong>Le modèle à 4 voix :</strong><br/>
            <strong>Soprano</strong> (Do4–Sol5) · <strong>Alto</strong> (Sol3–Do5) · <strong>Ténor</strong> (Do3–Sol4) · <strong>Basse</strong> (Mi2–Do4)
          </div>

          <h3 style={{fontSize:15,fontWeight:500,margin:"20px 0 10px"}}>Types de mouvements</h3>
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:10,marginBottom:20}}>
            {MOVEMENTS.map(m=>(
              <div key={m.label} style={{border:`0.5px solid ${m.color}`,borderRadius:10,padding:"14px",background:m.bg}}>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
                  <span style={{fontSize:20,color:m.color}}>{m.icon}</span>
                  <span style={{fontSize:13,fontWeight:600,color:m.color}}>{m.label}</span>
                </div>
                <p style={{fontSize:12,color:"#444",lineHeight:1.6,marginBottom:6}}>{m.desc}</p>
                <div style={{fontSize:11,color:"#888",fontStyle:"italic"}}>Ex : {m.ex}</div>
              </div>
            ))}
          </div>

          <h3 style={{fontSize:15,fontWeight:500,margin:"0 0 10px"}}>Les grandes règles</h3>
          <div style={{display:"flex",flexDirection:"column",gap:10}}>
            {VOICE_RULES.map(rule=>(
              <div key={rule.label} style={{border:`0.5px solid ${rule.color}20`,borderRadius:10,padding:"14px 18px",background:"#fff",borderLeft:`3px solid ${rule.color}`}}>
                <div style={{fontSize:13,fontWeight:600,color:rule.color,marginBottom:6}}>{rule.label}</div>
                <p style={{fontSize:13,color:"#444",lineHeight:1.6,marginBottom:8}}>{rule.desc}</p>
                <div style={{display:"flex",gap:16,fontSize:12,flexWrap:"wrap"}}>
                  <div><span style={{color:"#0F6E56",fontWeight:500}}>✓ </span><span style={{color:"#555"}}>{rule.bon}</span></div>
                  <div><span style={{color:"#A32D2D",fontWeight:500}}>✗ </span><span style={{color:"#555"}}>{rule.bad}</span></div>
                </div>
              </div>
            ))}
          </div>

          {/* Exemple concret sur portées */}
          <h3 style={{fontSize:15,fontWeight:500,margin:"24px 0 10px"}}>Exemple concret : Dm7 → G7 → CMaj7 à 4 voix</h3>
          <p style={S.sbody}>Voici la notation sur deux portées. Observez les mouvements minimaux entre les accords : notes communes conservées, triton résolu par demi-tons conjoints.</p>

          <div style={{border:"0.5px solid #e5e5e5",borderRadius:10,padding:"16px 18px",background:"#fafafa",marginBottom:16}}>
            <img src="/staff_ii_v_i.jpg" alt="Dm7 → G7 → CMaj7 sur portées" style={{ maxWidth:"100%", borderRadius:8, border:"0.5px solid #e5e5e5" }} />
            <div style={{fontSize:11,color:"#666",marginTop:4,marginBottom:12}}>S=Soprano · A=Alto · T=Ténor · B=Basse — notes rouges = triton (Fa–Si)</div>

            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:14}}>
              {[
                {chord:"Dm7",fn:"SD",voix:[["Do4","S"],["Fa4","A"],["La3","T"],["Ré3","B"]],color:"#534AB7",bg:"#EEEDFE"},
                {chord:"G7", fn:"D", voix:[["Si3","S ↑→Do"],["Fa4","A reste"],["Sol3","T"],["Sol2","B"]],color:"#BA7517",bg:"#FAEEDA"},
                {chord:"CMaj7",fn:"T",voix:[["Do4","S"],["Mi4","A ←Fa↓"],["Sol3","T reste"],["Do3","B"]],color:"#0F6E56",bg:"#E1F5EE"},
              ].map(({chord,fn,voix,color,bg})=>(
                <div key={chord} style={{border:`0.5px solid ${color}`,borderRadius:8,padding:"10px 12px",background:bg}}>
                  <div style={{fontSize:14,fontWeight:700,color,marginBottom:6}}>{chord} <span style={{fontSize:11,fontWeight:400}}>({fn})</span></div>
                  {voix.map(([n,r])=>(
                    <div key={r} style={{display:"flex",justifyContent:"space-between",fontSize:12,color:r.includes("↑")||r.includes("↓")?"#993C1D":"#444"}}>
                      <span style={{fontWeight:r.includes("↑")||r.includes("↓")?700:400}}>{n}</span>
                      <span style={{fontSize:10,color:"#888"}}>{r}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div style={S.infoBox}>
              <strong>Ce qu'on observe :</strong> Fa (alto) reste de Dm7 à G7 puis descend vers Mi — résolution de la 7e.
              Si (soprano) monte de G7 vers Do — résolution de la sensible.
              Sol (ténor) reste de G7 à CMaj7 — note commune.
              <strong> Trois voix bougent le minimum nécessaire.</strong>
            </div>

            <button onClick={()=>{
              const dm7:Array<[string,number]>=[["Ré",3],["Fa",3],["La",3],["Do",4]];
              const g7:Array<[string,number]>= [["Si",3],["Fa",3],["Sol",3],["Sol",2]];
              const c:Array<[string,number]>= [["Do",4],["Mi",4],["Sol",3],["Do",3]];
              dm7.forEach(([n,o],i)=>setTimeout(()=>pianoRef.current?.playNote(n,o,{duration:1.8}),i*80));
              setTimeout(()=>g7.forEach(([n,o],i)=>setTimeout(()=>pianoRef.current?.playNote(n,o,{duration:1.8}),i*80)),800);
              setTimeout(()=>c.forEach(([n,o],i)=>setTimeout(()=>pianoRef.current?.playNote(n,o,{duration:2.5}),i*80)),1600);
            }} style={{marginTop:10,fontSize:13,padding:"7px 20px",border:"0.5px solid #0F6E56",borderRadius:20,cursor:"pointer",background:"#E1F5EE",color:"#0F6E56"}}>
              ▶ Écouter Dm7 → G7 → CMaj7
            </button>
          </div>
        </div>
      )}

      {/* ══ QUIZ ══ */}
      {activeSection==="quiz" && (
        <div>
          <h2 style={S.stitle}>Entraînement</h2>
          {done ? (
            <div style={{textAlign:"center",padding:"2rem 0"}}>
              <div style={{fontSize:32,marginBottom:8}}>{quizScore>=8?"🎹":quizScore>=6?"👍":"💪"}</div>
              <div style={{fontSize:20,fontWeight:500,color:"#111",marginBottom:4}}>Score : {quizScore} / {QUIZ_COUNT}</div>
              <div style={{fontSize:14,color:"#666",marginBottom:20}}>{quizScore===QUIZ_COUNT?"Parfait !":quizScore>=7?"Très bien !":"Continue à pratiquer."}</div>
              <button onClick={resetQuiz} style={{fontSize:13,padding:"8px 20px",border:"0.5px solid #185FA5",borderRadius:20,cursor:"pointer",background:"#E6F1FB",color:"#185FA5"}}>
                Nouvelles questions →
              </button>
            </div>
          ) : (
            <div>
              <div style={{fontSize:12,color:"#999",marginBottom:8}}>
                Question {quizIdx+1} / {QUIZ_COUNT} &nbsp;·&nbsp; <span style={{color:"#bbb"}}>{QUIZ_POOL.length} questions dans le pool</span>
              </div>
              <div style={{fontSize:15,fontWeight:500,color:"#111",lineHeight:1.6,marginBottom:16}}>{quizQs[quizIdx].q}</div>
              <div style={{display:"flex",flexDirection:"column",gap:8}}>
                {quizQs[quizIdx].opts.map((opt,i)=>{
                  const isCorrect=i===quizQs[quizIdx].a, isSelected=selected===i;
                  let bg="#fff",border="#e5e5e5",color="#333";
                  if(answered){ if(isCorrect){bg="#E1F5EE";border="#0F6E56";color="#085041";}else if(isSelected){bg="#FCEBEB";border="#A32D2D";color="#501313";} }
                  return <button key={i} onClick={()=>answerQuiz(i)} disabled={answered} style={{fontSize:13,padding:"10px 14px",border:`0.5px solid ${border}`,borderRadius:8,cursor:answered?"default":"pointer",background:bg,color,textAlign:"left",transition:"all .12s"}}>{opt}</button>;
                })}
              </div>
              {answered && <div style={{marginTop:12,padding:"10px 14px",borderRadius:8,background:selected===quizQs[quizIdx].a?"#E1F5EE":"#FCEBEB",fontSize:13,color:selected===quizQs[quizIdx].a?"#085041":"#501313",lineHeight:1.6}}>{quizQs[quizIdx].fb}</div>}
              {answered && <button onClick={nextQuiz} style={{marginTop:12,fontSize:13,padding:"7px 18px",border:"0.5px solid #333",borderRadius:20,cursor:"pointer",background:"transparent",color:"#333"}}>{quizIdx+1<QUIZ_COUNT?"Question suivante →":"Voir le score →"}</button>}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
