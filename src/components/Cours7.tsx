"use client";

/**
 * Cours7.tsx
 * Harmonia · Niveau 1 · Cours 7 — La tonicisation
 * Convention : affichage anglais, dotKeys PianoPlayer français
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { useTerm } from "@/hooks/useTerm";
import { cours7Content } from "@/data/cours7Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import { SATB } from "@/lib/satb-voicings";
import MaitreCard from "@/components/MaitreCard";
import InversionQuiz from "@/components/InversionQuiz";
import { INVERSION_EXERCISES } from "@/exercises/cours-inversion-exercises";

interface Section { id: string; label: string; }

// ─── Audio ────────────────────────────────────────────────────────────────────

const CHORDS = SATB;

function playChord(ref: React.RefObject<PianoPlayerRef>, keys: string[], duration = 1.8) {
  keys.forEach((key, i) => {
    const [note, octStr] = key.split(":");
    setTimeout(() => ref.current?.playNote(note, parseInt(octStr), { duration }), 0);
  });
}

function playProg(ref: React.RefObject<PianoPlayerRef>, names: string[], gap = 1000) {
  names.forEach((name, i) =>
    setTimeout(() => playChord(ref, CHORDS[name] ?? [], 1.5), i * gap)
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const SECTIONS_IDS = ["principe","secondaires","voisins","chaines","quiz"] as const;

// Dominantes secondaires en C majeur
const DOM_SEC = [
  { deg:"II", cible:"Dm", dom:"A7",  calc:"5 degrés au-dessus de D = A → A7", note:"Do# est la sensible de D. La septième (Sol) descend vers Fa#.", prog:["A7","Dm"],  progKeys:["A7","Dm/F"] },
  { deg:"III",cible:"Em", dom:"B7",  calc:"5 degrés au-dessus de E = B → B7", note:"Ré# est la sensible de E. Tierce de B7 (Ré#) monte vers Mi.", prog:["B7","Em"],  progKeys:["B7","Em/B"] },
  { deg:"IV", cible:"F",  dom:"C7",  calc:"5 degrés au-dessus de F = C → C7", note:"Mi♭ (septième) descend vers Ré. La à Sib n'est pas ici — C7 tonicise F.", prog:["C7","F"],   progKeys:["C7","F/A"] },
  { deg:"V",  cible:"G7", dom:"D7",  calc:"5 degrés au-dessus de G = D → D7", note:"Fa# est la sensible de G. Très courant : crée une double dominante.", prog:["D7","G7","C"], progKeys:["D7/C","G7/B","C"] },
  { deg:"VI", cible:"Am", dom:"E7",  calc:"5 degrés au-dessus de A = E → E7", note:"Sol# est la sensible de A. Très expressif — colore la progression.", prog:["E7","Am"],  progKeys:["E7","Am/C"] },
];

// Tons voisins de C majeur
const TONS_VOISINS = [
  { ton:"D minor",  rel:"II de C", dom_sec:"A7",  sd_sec:"Em7b5 – Gm7", note:"Dm est le IIe de C. Toniciser Dm → A7." },
  { ton:"E minor",  rel:"III de C",dom_sec:"B7",  sd_sec:"F#m7b5 – Am7",note:"Em est le IIIe de C. Toniciser Em → B7." },
  { ton:"F major",  rel:"IV de C", dom_sec:"C7",  sd_sec:"Gm7 – BbMaj7", note:"F est le IVe de C. Toniciser F → C7." },
  { ton:"G major",  rel:"V de C",  dom_sec:"D7",  sd_sec:"Am7 – CMaj7",  note:"G est le Ve de C. V/V = D7 → G → C." },
  { ton:"A minor",  rel:"VI de C", dom_sec:"E7",  sd_sec:"Bm7b5 – Dm7",  note:"Am est le VIe de C. E7 → Am très expressif." },
];

// ─── Quiz ─────────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const QUIZ_COUNT = 10;

// ─── Styles ───────────────────────────────────────────────────────────────────

const S = {
  wrap:  { fontFamily:"var(--font-sans,system-ui)", maxWidth:720, margin:"0 auto", padding:"0 1rem 3rem" } as React.CSSProperties,
  hdr:   { padding:"1.5rem 0 1rem", borderBottom:"0.5px solid #e5e5e5", marginBottom:"1.25rem" } as React.CSSProperties,
  badge: { display:"inline-block", background:"#FAEEDA", color:"#BA7517", fontSize:11, fontWeight:500, padding:"2px 10px", borderRadius:20, marginBottom:6 } as React.CSSProperties,
  h1:    { fontSize:26, fontWeight:500, color:"#111", margin:0 } as React.CSSProperties,
  sub:   { fontSize:14, color:"#666", marginTop:4, lineHeight:1.6 } as React.CSSProperties,
  nav:   { display:"flex", gap:6, flexWrap:"wrap" as const, marginBottom:"1.5rem" },
  pill:  (a:boolean):React.CSSProperties => ({ fontSize:12, padding:"5px 14px", border:`0.5px solid ${a?"#333":"#ddd"}`, borderRadius:20, cursor:"pointer", background:a?"#111":"transparent", color:a?"#fff":"#666", transition:"all .15s" }),
  h2:    { fontSize:17, fontWeight:500, color:"#111", marginBottom:8 } as React.CSSProperties,
  p:     { fontSize:14, color:"#555", lineHeight:1.75, marginBottom:"1rem" } as React.CSSProperties,
  info:  { borderLeft:"2px solid #185FA5", padding:"8px 14px", background:"#E6F1FB", borderRadius:"0 6px 6px 0", margin:"12px 0", fontSize:13, color:"#0C447C", lineHeight:1.6 } as React.CSSProperties,
  warn:  { borderLeft:"2px solid #BA7517", padding:"8px 14px", background:"#FAEEDA", borderRadius:"0 6px 6px 0", margin:"12px 0", fontSize:13, color:"#633806", lineHeight:1.6 } as React.CSSProperties,
  tip:   { borderLeft:"2px solid #0F6E56", padding:"8px 14px", background:"#E1F5EE", borderRadius:"0 6px 6px 0", margin:"12px 0", fontSize:13, color:"#085041", lineHeight:1.6 } as React.CSSProperties,
};

// ─── Composant ────────────────────────────────────────────────────────────────

export default function Cours7() {
  const [sec,   setSec]   = useState("principe");
  const i18n = useCoursI18n("cours7");
  const tc = i18n.tc;
  const n = (key: string) => tc(`narrative.${key}` as any);
  const tr = useTerm();
  const { questions: ALL_QUESTIONS } = useCoursContent(cours7Content);
  const [selDs, setSelDs] = useState<number|null>(null);
  const [selTv, setSelTv] = useState<number|null>(null);

  const [qs,   setQs]   = useState(() => shuffle(ALL_QUESTIONS).slice(0, QUIZ_COUNT));
  const [qi,   setQi]   = useState(0);
  const [scr,  setScr]  = useState(0);
  const [ans,  setAns]  = useState(false);
  const [ch,   setCh]   = useState<number|null>(null);
  const [done, setDone] = useState(false);

  const ref = useRef<PianoPlayerRef>(null);

  const answer = (i:number) => { if (ans) return; setCh(i); setAns(true); if (i===qs[qi].a) setScr(s=>s+1); };
  const next   = () => { if (qi+1>=QUIZ_COUNT) setDone(true); else { setQi(i=>i+1); setAns(false); setCh(null); } };
  const reset  = () => { setQs(shuffle(ALL_QUESTIONS).slice(0,QUIZ_COUNT)); setQi(0); setScr(0); setAns(false); setCh(null); setDone(false); };

  return (
    <div style={S.wrap}>
      <div style={{ position:"absolute", opacity:0, pointerEvents:"none", height:0, overflow:"hidden" }}>
        <PianoPlayer ref={ref} octaves={3} startOctave={2} showLabels={false} />
      </div>

      <div style={S.hdr}>
        <span style={S.badge}>{i18n.badge}</span>
        <h1 style={S.h1}>{i18n.title}</h1>
        <p style={S.sub}>{i18n.subtitle}</p>
      </div>

      <MaitreCard
        composer="Ludwig van Beethoven"
        period={n("maitreCardPeriod")}
        emoji="⚡"
        concept={n("maitreCardConcept")}
        anecdote={n("maitreCardAnecdote")}
        lesson={n("maitreCardLesson")}
        accentColor="#BA7517"
      />

      <nav style={S.nav}>
        {SECTIONS_IDS.map(id => <button key={id} style={S.pill(sec===id)} onClick={() => setSec(id)}>{i18n.sectionLabel(id)}</button>)}
      </nav>

      {/* ══ PRINCIPE ══ */}
      {sec === "principe" && (
        <div>
          <h2 style={S.h2}>{n("principeH2")}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: n("principeP1") }} />

          <div style={S.info} dangerouslySetInnerHTML={{ __html: n("principeInfoDef") }} />

          <p style={S.p}>{n("principeP2")}</p>

          <div style={{ display:"flex", flexDirection:"column", gap:10, marginBottom:20 }}>
            {[
              { icon:"✅", tKey:"canBeTonicizedLabel", dKey:"canBeTonicizedDesc", c:"#0F6E56", bg:"#E1F5EE" },
              { icon:"❌", tKey:"cannotBeTonicizedLabel", dKey:"cannotBeTonicizedDesc", c:"#993C1D", bg:"#FAECE7" },
            ].map(row => (
              <div key={row.tKey} style={{ border:`0.5px solid ${row.c}30`, borderRadius:10, padding:"12px 16px", background:row.bg, display:"flex", gap:12, alignItems:"flex-start" }}>
                <span style={{ fontSize:20 }}>{row.icon}</span>
                <div>
                  <div style={{ fontSize:13, fontWeight:500, color:row.c, marginBottom:4 }}>{n(row.tKey)}</div>
                  <p style={{ fontSize:13, color:"#444", lineHeight:1.6, margin:0 }}>{n(row.dKey)}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize:14, fontWeight:500, margin:"20px 0 8px", color:"#111" }}>{n("principeExH3")}</h3>
          <p style={S.p}>{n("principeExP")}</p>

          <div style={{ background:"#fafafa", border:"0.5px solid #e5e5e5", borderRadius:10, padding:"14px 16px", marginBottom:16 }}>
            <div style={{ fontSize:12, color:"#999", marginBottom:8 }}>{n("principeProgLabel")}</div>
            <div style={{ fontFamily:"monospace", fontSize:14, color:"#BA7517", marginBottom:10, letterSpacing:1 }}>
              C → D7 → G7 → C
            </div>
            <button onClick={() => playProg(ref as React.RefObject<PianoPlayerRef>, ["C","D7","G7","C"], 1000)}
              style={{ fontSize:12, padding:"5px 14px", border:"0.5px solid #BA7517", borderRadius:20, cursor:"pointer", background:"transparent", color:"#BA7517" }}>
              {n("principeListenBtn")}
            </button>
            <div style={{ fontSize:12, color:"#888", marginTop:10, lineHeight:1.6 }}
              dangerouslySetInnerHTML={{ __html: n("principeProgNote") }} />
          </div>

          <div style={S.warn} dangerouslySetInnerHTML={{ __html: n("principeWarn") }} />

          <h3 style={{ fontSize:14, fontWeight:500, margin:"20px 0 8px", color:"#111" }}>{n("principeSimplH3")}</h3>
          <p style={S.p}>{n("principeSimplP")}</p>
        </div>
      )}

      {/* ══ DOMINANTES SECONDAIRES ══ */}
      {sec === "secondaires" && (
        <div>
          <h2 style={S.h2}>{n("secondairesH2")}</h2>
          <p style={S.p}>{n("secondairesP1")}</p>

          <div style={S.tip} dangerouslySetInnerHTML={{ __html: n("secondairesTip") }} />

          <p style={{ fontSize:13, color:"#888", marginBottom:12, marginTop:16 }}>
            {n("secondairesClickHint")}
          </p>

          {DOM_SEC.map((d, i) => (
            <div key={d.deg}
              onClick={() => setSelDs(selDs===i?null:i)}
              style={{ border:`0.5px solid ${selDs===i?"#BA7517":"#e5e5e5"}`, borderRadius:10, marginBottom:8, overflow:"hidden", background:selDs===i?"#FAEEDA":"#fff", transition:"all .15s", cursor:"pointer" }}>
              <div style={{ display:"flex", alignItems:"center", gap:12, padding:"12px 16px" }}>
                <span style={{ fontSize:11, color:"#999", fontWeight:500, minWidth:30 }}>{n("secondairesDegreeLabel")} {d.deg}</span>
                <span style={{ fontSize:15, fontWeight:600, color:"#111", minWidth:36 }}>{d.cible}</span>
                <span style={{ fontSize:13, color:"#BA7517", fontFamily:"monospace", fontWeight:500 }}>V/{d.deg} = {d.dom}</span>
                <span style={{ fontSize:12, color:"#888", flex:1 }}>{d.calc}</span>
              </div>
              {selDs === i && (
                <div style={{ padding:"0 16px 14px", borderTop:"0.5px solid #BA751720" }}>
                  <p style={{ fontSize:13, color:"#633806", lineHeight:1.65, margin:"8px 0 10px" }}>{d.note}</p>
                  <div style={{ fontFamily:"monospace", fontSize:13, color:"#BA7517", marginBottom:10, letterSpacing:1 }}>
                    {d.prog.join(" → ")}
                  </div>
                  <button
                    onClick={e => { e.stopPropagation(); playProg(ref as React.RefObject<PianoPlayerRef>, d.progKeys, 1000); }}
                    style={{ fontSize:12, padding:"5px 14px", border:"0.5px solid #BA7517", borderRadius:20, cursor:"pointer", background:"transparent", color:"#BA7517" }}>
                    {n("secondairesListenBtnPrefix")} {d.dom} → {d.cible}
                  </button>
                </div>
              )}
            </div>
          ))}

          {/* Tableau récap */}
          <h3 style={{ fontSize:14, fontWeight:500, margin:"20px 0 8px", color:"#111" }}>{n("secondairesTableH3")}</h3>
          <div style={{ overflowX:"auto" }}>
            <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
              <thead>
                <tr style={{ borderBottom:"0.5px solid #e5e5e5" }}>
                  {[n("secondairesThDeg"), n("secondairesThAccord"), n("secondairesThDom"), n("secondairesThSens")].map(h => (
                    <th key={h} style={{ textAlign:"left", padding:"6px 10px", fontWeight:500, color:"#666" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { deg:"II", cible:"Dm", dom:"A7",  sens:"C# → D" },
                  { deg:"III",cible:"Em", dom:"B7",  sens:"D# → E" },
                  { deg:"IV", cible:"F",  dom:"C7",  sens:"E (Bb dans C7 pour la 7e)" },
                  { deg:"V",  cible:"G7", dom:"D7",  sens:"F# → G" },
                  { deg:"VI", cible:"Am", dom:"E7",  sens:"G# → A" },
                ].map((row, i) => (
                  <tr key={row.deg} style={{ borderBottom:"0.5px solid #f0f0f0", background:i%2===0?"#fff":"#fafafa" }}>
                    <td style={{ padding:"7px 10px", fontWeight:500, color:"#BA7517" }}>{row.deg}</td>
                    <td style={{ padding:"7px 10px", fontFamily:"monospace" }}>{row.cible}</td>
                    <td style={{ padding:"7px 10px", fontFamily:"monospace", fontWeight:500 }}>{row.dom}</td>
                    <td style={{ padding:"7px 10px", color:"#666", fontSize:12 }}>{row.sens}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ══ TONS VOISINS ══ */}
      {sec === "voisins" && (
        <div>
          <h2 style={S.h2}>{n("voisinsH2")}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: n("voisinsP1") }} />

          <div style={S.info} dangerouslySetInnerHTML={{ __html: n("voisinsInfo") }} />

          <p style={{ fontSize:13, color:"#888", marginBottom:12, marginTop:16 }}>
            {n("voisinsClickHint")}
          </p>

          {TONS_VOISINS.map((tv, i) => (
            <div key={tv.ton}
              onClick={() => setSelTv(selTv===i?null:i)}
              style={{ border:`0.5px solid ${selTv===i?"#534AB7":"#e5e5e5"}`, borderRadius:10, marginBottom:8, overflow:"hidden", background:selTv===i?"#EEEDFE":"#fff", transition:"all .15s", cursor:"pointer" }}>
              <div style={{ display:"flex", alignItems:"center", gap:12, padding:"12px 16px" }}>
                <span style={{ fontSize:13, fontWeight:600, color:selTv===i?"#534AB7":"#111", minWidth:80 }}>{tv.ton}</span>
                <span style={{ fontSize:11, color:"#999" }}>{tv.rel}</span>
                <span style={{ fontSize:13, fontFamily:"monospace", color:"#534AB7", marginLeft:"auto" }}>V/ = {tv.dom_sec}</span>
              </div>
              {selTv === i && (
                <div style={{ padding:"0 16px 14px", borderTop:"0.5px solid #534AB720" }}>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginTop:8 }}>
                    <div style={{ background:"#fff", borderRadius:8, padding:"10px 12px", border:"0.5px solid #534AB730" }}>
                      <div style={{ fontSize:11, color:"#999", marginBottom:4 }}>{n("voisinsDomLabel")}</div>
                      <div style={{ fontSize:14, fontFamily:"monospace", fontWeight:600, color:"#534AB7" }}>{tv.dom_sec}</div>
                    </div>
                    <div style={{ background:"#fff", borderRadius:8, padding:"10px 12px", border:"0.5px solid #534AB730" }}>
                      <div style={{ fontSize:11, color:"#999", marginBottom:4 }}>{n("voisinsSDLabel")}</div>
                      <div style={{ fontSize:13, fontFamily:"monospace", color:"#534AB7" }}>{tv.sd_sec}</div>
                    </div>
                  </div>
                  <p style={{ fontSize:12, color:"#534AB7", margin:"10px 0 0", fontStyle:"italic" }}>{tv.note}</p>
                </div>
              )}
            </div>
          ))}

          <div style={S.warn} dangerouslySetInnerHTML={{ __html: n("voisinsWarn") }} />
        </div>
      )}

      {/* ══ CHAÎNES ══ */}
      {sec === "chaines" && (
        <div>
          <h2 style={S.h2}>{n("chainesH2")}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: n("chainesP1") }} />

          <div style={S.info} dangerouslySetInnerHTML={{ __html: n("chainesInfo") }} />

          {/* Progressions de démonstration */}
          {[
            { labelKey:"chainesEx1Label", prog:["D7","G7","C"],        descKey:"chainesEx1Desc" },
            { labelKey:"chainesEx2Label", prog:["A7","D7","G7","C"],   descKey:"chainesEx2Desc" },
            { labelKey:"chainesEx3Label", prog:["A7","Dm","G7","C"],   descKey:"chainesEx3Desc" },
          ].map(ex => (
            <div key={ex.labelKey} style={{ border:"0.5px solid #e5e5e5", borderRadius:10, padding:"14px 16px", marginBottom:10, background:"#fafafa" }}>
              <div style={{ fontSize:13, fontWeight:500, color:"#111", marginBottom:6 }}>{n(ex.labelKey)}</div>
              <div style={{ fontFamily:"monospace", fontSize:13, color:"#BA7517", marginBottom:8, letterSpacing:1 }}>{ex.prog.join(" → ")}</div>
              <p style={{ fontSize:12, color:"#666", margin:"0 0 10px", lineHeight:1.6 }}>{n(ex.descKey)}</p>
              <button
                onClick={() => playProg(ref as React.RefObject<PianoPlayerRef>, ex.prog, 950)}
                style={{ fontSize:12, padding:"5px 14px", border:"0.5px solid #BA7517", borderRadius:20, cursor:"pointer", background:"transparent", color:"#BA7517" }}>
                {n("chainesListenBtn")}
              </button>
            </div>
          ))}

          <h3 style={{ fontSize:14, fontWeight:500, margin:"20px 0 8px", color:"#111" }}>{n("chainesBluesH3")}</h3>
          <p style={S.p}>{n("chainesBluesP")}</p>

          <div style={S.tip} dangerouslySetInnerHTML={{ __html: n("chainesTip") }} />
        </div>
      )}

      {/* Exercices de renversements */}
      {sec !== "quiz" && (
        <div style={{ marginTop: 32 }}>
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "0 0 8px", color: "#111" }}>{n("inversionH3")}</h3>
          <p style={{ fontSize: 13, color: "#888", lineHeight: 1.7, marginBottom: 16, fontFamily: "system-ui, sans-serif" }}>
            {n("inversionP")}
          </p>
          {INVERSION_EXERCISES.filter(e => e.cours === 7).map(ex => (
            <div key={ex.id} style={{ border: "0.5px solid #e5e5e5", borderRadius: 12, padding: "20px", marginBottom: 16, background: "#fff" }}>
              <InversionQuiz exercise={ex} />
            </div>
          ))}
        </div>
      )}

      {/* ══ QUIZ ══ */}
      {sec === "quiz" && (
        <div>
          <h2 style={S.h2}>{i18n.training}</h2>
          {done ? (
            <div style={{ textAlign:"center", padding:"2rem 0" }}>
              <div style={{ fontSize:32, marginBottom:8 }}>{scr>=9?"🎼":scr>=7?"🎹":"💪"}</div>
              <div style={{ fontSize:20, fontWeight:500, color:"#111", marginBottom:4 }}>{i18n.t("score")} : {scr} / {QUIZ_COUNT}</div>
              <div style={{ fontSize:14, color:"#666", marginBottom:20 }}>
                {i18n.quizMessage(scr, QUIZ_COUNT)}
              </div>
              <button onClick={reset} style={{ fontSize:13, padding:"8px 20px", border:"0.5px solid #BA7517", borderRadius:20, cursor:"pointer", background:"#FAEEDA", color:"#BA7517" }}>
                {i18n.newQ}
              </button>
            </div>
          ) : (
            <div>
              <div style={{ fontSize:12, color:"#999", marginBottom:10 }}>
                {i18n.t("question")} {qi+1} {i18n.t("of")} {QUIZ_COUNT}
                <span style={{ marginLeft:12, color:"#ccc" }}>{ALL_QUESTIONS.length} {i18n.t("questionsPool")}</span>
              </div>
              <div style={{ fontSize:15, fontWeight:500, color:"#111", lineHeight:1.6, marginBottom:16 }}>{qs[qi].q}</div>
              <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
                {qs[qi].opts.map((opt, i) => {
                  const correct=i===qs[qi].a, selected=ch===i;
                  let bg="#fff", border="#e5e5e5", color="#333";
                  if (ans) { if (correct) { bg="#E1F5EE"; border="#0F6E56"; color="#085041"; } else if (selected) { bg="#FCEBEB"; border="#A32D2D"; color="#501313"; } }
                  return <button key={i} onClick={() => answer(i)} disabled={ans} style={{ fontSize:13, padding:"10px 14px", border:`0.5px solid ${border}`, borderRadius:8, cursor:ans?"default":"pointer", background:bg, color, textAlign:"left", transition:"all .12s" }}>{opt}</button>;
                })}
              </div>
              {ans && <div style={{ marginTop:12, padding:"10px 14px", borderRadius:8, background:ch===qs[qi].a?"#E1F5EE":"#FCEBEB", fontSize:13, color:ch===qs[qi].a?"#085041":"#501313", lineHeight:1.6 }}>{qs[qi].fb}</div>}
              {ans && <button onClick={next} style={{ marginTop:12, fontSize:13, padding:"7px 18px", border:"0.5px solid #333", borderRadius:20, cursor:"pointer", background:"transparent", color:"#333" }}>{qi+1<QUIZ_COUNT?i18n.nextQ:i18n.seeScore}</button>}
            </div>
          )}
        </div>
      )}
    </div>
  );
}