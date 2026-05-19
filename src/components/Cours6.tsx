"use client";

/**
 * Cours6.tsx
 * Harmonia · Niveau 1 · Cours 6 — Construire une harmonisation
 * Convention : affichage anglais, dotKeys PianoPlayer français
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { useTerm } from "@/hooks/useTerm";
import { cours6Content } from "@/data/cours6Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import { SATB } from "@/lib/satb-voicings";
import MaitreCard from "@/components/MaitreCard";

interface Section { id: string; label: string; }

const CHORDS = SATB;

function playChord(ref: React.RefObject<PianoPlayerRef>, keys: string[], duration = 1.8) {
  keys.forEach((key, i) => {
    const [note, octStr] = key.split(":");
    setTimeout(() => ref.current?.playNote(note, parseInt(octStr), { duration }), 0);
  });
}

function playProg(ref: React.RefObject<PianoPlayerRef>, names: string[], gap = 1000) {
  names.forEach((name, i) =>
    setTimeout(() => playChord(ref, CHORDS[name] ?? [], 1.6), i * gap)
  );
}

const SECTIONS_IDS = ["tonal","etrangeres","squelette","accomp","quiz"] as const;

const DEMO_PROGS: Record<string, { chords: string[] }> = {
  fondamental: { chords:["C","F","G7","C"] },
  renverse:    { chords:["C","C/E","F","G7","C"] },
  iivi:        { chords:["Dm7","G7","CMaj7"] },
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const QUIZ_COUNT = 10;

const S = {
  wrap:  { fontFamily: "var(--font-sans, system-ui)", maxWidth: 720, margin: "0 auto", padding: "0 1rem 3rem" } as React.CSSProperties,
  hdr:   { padding: "1.5rem 0 1rem", borderBottom: "0.5px solid #e5e5e5", marginBottom: "1.25rem" } as React.CSSProperties,
  badge: { display: "inline-block", background: "#EAF3DE", color: "#3B6D11", fontSize: 11, fontWeight: 500, padding: "2px 10px", borderRadius: 20, marginBottom: 6 } as React.CSSProperties,
  h1:    { fontSize: 26, fontWeight: 500, color: "#111", margin: 0 } as React.CSSProperties,
  sub:   { fontSize: 14, color: "#666", marginTop: 4, lineHeight: 1.6 } as React.CSSProperties,
  nav:   { display: "flex", gap: 6, flexWrap: "wrap" as const, marginBottom: "1.5rem" },
  pill:  (a: boolean): React.CSSProperties => ({ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${a?"#333":"#ddd"}`, borderRadius: 20, cursor: "pointer", background: a?"#111":"transparent", color: a?"#fff":"#666", transition: "all .15s" }),
  h2:    { fontSize: 17, fontWeight: 500, color: "#111", marginBottom: 8 } as React.CSSProperties,
  p:     { fontSize: 14, color: "#555", lineHeight: 1.75, marginBottom: "1rem" } as React.CSSProperties,
  info:  { borderLeft: "2px solid #185FA5", padding: "8px 14px", background: "#E6F1FB", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#0C447C", lineHeight: 1.6 } as React.CSSProperties,
  warn:  { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
  tip:   { borderLeft: "2px solid #0F6E56", padding: "8px 14px", background: "#E1F5EE", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#085041", lineHeight: 1.6 } as React.CSSProperties,
};

export default function Cours6() {
  const [sec,  setSec]  = useState("tonal");
  const i18n = useCoursI18n("cours6");
  const tc = i18n.tc;
  const n = (key: string) => tc(`narrative.${key}` as any);
  const tr = useTerm();
  const { questions: ALL_QUESTIONS } = useCoursContent(cours6Content);
  const [si,   setSi]   = useState<number|null>(null);
  const [se,   setSe]   = useState<number|null>(null);
  const [sa,   setSa]   = useState<number|null>(null);
  const [sp,   setSp]   = useState<string|null>(null);

  const [qs,   setQs]   = useState(() => shuffle(ALL_QUESTIONS).slice(0, QUIZ_COUNT));
  const [qi,   setQi]   = useState(0);
  const [scr,  setScr]  = useState(0);
  const [ans,  setAns]  = useState(false);
  const [ch,   setCh]   = useState<number|null>(null);
  const [done, setDone] = useState(false);

  const ref = useRef<PianoPlayerRef>(null);

  const answer = (i: number) => { if (ans) return; setCh(i); setAns(true); if (i === qs[qi].a) setScr(s => s+1); };
  const next   = () => { if (qi+1 >= QUIZ_COUNT) setDone(true); else { setQi(i=>i+1); setAns(false); setCh(null); } };
  const reset  = () => { setQs(shuffle(ALL_QUESTIONS).slice(0,QUIZ_COUNT)); setQi(0); setScr(0); setAns(false); setCh(null); setDone(false); };

  const INDICES_TONAL = [
    { icon: "♭#", title: n("indice0Title"), desc: n("indice0Desc") },
    { icon: "↑½", title: n("indice1Title"), desc: n("indice1Desc") },
    { icon: "⏸",  title: n("indice2Title"), desc: n("indice2Desc") },
    { icon: "||", title: n("indice3Title"), desc: n("indice3Desc") },
    { icon: "♯♮", title: n("indice4Title"), desc: n("indice4Desc") },
  ];

  const NOTES_ETRANGERES = [
    { name: n("ne0Name"), abbr:"NP",  color:"#0F6E56", bg:"#E1F5EE", def: n("ne0Def"), exemple: n("ne0Exemple"), regles: n("ne0Regles") },
    { name: n("ne1Name"), abbr:"Br",  color:"#534AB7", bg:"#EEEDFE", def: n("ne1Def"), exemple: n("ne1Exemple"), regles: n("ne1Regles") },
    { name: n("ne2Name"), abbr:"Ret", color:"#BA7517", bg:"#FAEEDA", def: n("ne2Def"), exemple: n("ne2Exemple"), regles: n("ne2Regles") },
    { name: n("ne3Name"), abbr:"Ant", color:"#993C1D", bg:"#FAECE7", def: n("ne3Def"), exemple: n("ne3Exemple"), regles: n("ne3Regles") },
    { name: n("ne4Name"), abbr:"App", color:"#185FA5", bg:"#E6F1FB", def: n("ne4Def"), exemple: n("ne4Exemple"), regles: n("ne4Regles") },
    { name: n("ne5Name"), abbr:"Éch", color:"#3B6D11", bg:"#EAF3DE", def: n("ne5Def"), exemple: n("ne5Exemple"), regles: n("ne5Regles") },
  ];

  const ACCOMP_TYPES = [
    { name: n("ac0Name"), color:"#0F6E56", bg:"#E1F5EE", desc: n("ac0Desc"), usage: n("ac0Usage"), tension: n("ac0Tension") },
    { name: n("ac1Name"), color:"#534AB7", bg:"#EEEDFE", desc: n("ac1Desc"), usage: n("ac1Usage"), tension: n("ac1Tension") },
    { name: n("ac2Name"), color:"#BA7517", bg:"#FAEEDA", desc: n("ac2Desc"), usage: n("ac2Usage"), tension: n("ac2Tension") },
    { name: n("ac3Name"), color:"#993C1D", bg:"#FAECE7", desc: n("ac3Desc"), usage: n("ac3Usage"), tension: n("ac3Tension") },
    { name: n("ac4Name"), color:"#185FA5", bg:"#E6F1FB", desc: n("ac4Desc"), usage: n("ac4Usage"), tension: n("ac4Tension") },
  ];

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
        composer="Claude Debussy"
        period="1862–1918"
        emoji="🎨"
        concept="Harmonisation"
        anecdote={n("maitreAnecdote")}
        lesson={n("maitreLesson")}
        accentColor="#3B6D11"
      />

      <nav style={S.nav}>
        {SECTIONS_IDS.map(id => <button key={id} style={S.pill(sec===id)} onClick={() => setSec(id)}>{i18n.sectionLabel(id)}</button>)}
      </nav>

      {/* ══ CENTRE TONAL ══ */}
      {sec === "tonal" && (
        <div>
          <h2 style={S.h2}>{n("tonaH2")}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: n("tonaIntro") }} />
          <div style={S.info} dangerouslySetInnerHTML={{ __html: n("tonaInfo") }} />
          <p style={{ fontSize:13, color:"#888", marginBottom:12 }}>{n("tonaClickHint")}</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(130px, 1fr))", gap:8, marginBottom:16 }}>
            {INDICES_TONAL.map((ind, i) => (
              <div key={ind.title} onClick={() => setSi(si===i?null:i)} style={{ border:`0.5px solid ${si===i?"#185FA5":"#e5e5e5"}`, borderRadius:10, padding:"12px 10px", textAlign:"center", cursor:"pointer", background:si===i?"#E6F1FB":"#fff", transition:"all .15s" }}>
                <div style={{ fontSize:22, marginBottom:6 }}>{ind.icon}</div>
                <div style={{ fontSize:12, fontWeight:500, color:"#111" }}>{ind.title}</div>
              </div>
            ))}
          </div>
          {si !== null && (
            <div style={{ border:"0.5px solid #185FA5", borderRadius:10, padding:"14px 16px", background:"#E6F1FB", marginBottom:16 }}>
              <div style={{ fontSize:14, fontWeight:500, color:"#185FA5", marginBottom:6 }}>{INDICES_TONAL[si].title}</div>
              <p style={{ fontSize:13, color:"#0C447C", lineHeight:1.65, margin:0 }}>{INDICES_TONAL[si].desc}</p>
            </div>
          )}
          <h3 style={{ fontSize:14, fontWeight:500, margin:"20px 0 8px", color:"#111" }}>{n("tonaStepsH3")}</h3>
          <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:16 }}>
            {[
              { n:"1", t: n("tonaStep1T"), d: n("tonaStep1D") },
              { n:"2", t: n("tonaStep2T"), d: n("tonaStep2D") },
              { n:"3", t: n("tonaStep3T"), d: n("tonaStep3D") },
              { n:"4", t: n("tonaStep4T"), d: n("tonaStep4D") },
              { n:"5", t: n("tonaStep5T"), d: n("tonaStep5D") },
            ].map(step => (
              <div key={step.n} style={{ display:"flex", gap:12, alignItems:"flex-start", border:"0.5px solid #e5e5e5", borderRadius:8, padding:"10px 14px", background:"#fafafa" }}>
                <div style={{ minWidth:26, height:26, borderRadius:"50%", background:"#3B6D11", color:"#fff", display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, fontWeight:600, flexShrink:0 }}>{step.n}</div>
                <div>
                  <div style={{ fontSize:13, fontWeight:500, color:"#111", marginBottom:2 }}>{step.t}</div>
                  <div style={{ fontSize:12, color:"#666" }}>{step.d}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={S.warn} dangerouslySetInnerHTML={{ __html: n("tonaWarn") }} />
        </div>
      )}

      {/* ══ NOTES ÉTRANGÈRES ══ */}
      {sec === "etrangeres" && (
        <div>
          <h2 style={S.h2}>{n("etranH2")}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: n("etranIntro") }} />
          <div style={S.tip} dangerouslySetInnerHTML={{ __html: n("etranTip") }} />
          <p style={{ fontSize:13, color:"#888", marginBottom:12, marginTop:16 }}>{n("etranClickHint")}</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:8, marginBottom:12 }}>
            {NOTES_ETRANGERES.map((ne, i) => (
              <div key={ne.abbr} onClick={() => setSe(se===i?null:i)} style={{ border:`0.5px solid ${se===i?ne.color:"#e5e5e5"}`, borderRadius:8, padding:"10px 12px", cursor:"pointer", background:se===i?ne.bg:"#fff", transition:"all .15s", textAlign:"center" }}>
                <div style={{ fontSize:18, fontWeight:700, color:ne.color, fontFamily:"monospace" }}>{ne.abbr}</div>
                <div style={{ fontSize:12, color:"#555", marginTop:4 }}>{ne.name}</div>
              </div>
            ))}
          </div>
          {se !== null && (
            <div style={{ border:`0.5px solid ${NOTES_ETRANGERES[se].color}`, borderRadius:10, padding:"14px 16px", background:NOTES_ETRANGERES[se].bg, marginBottom:16 }}>
              <div style={{ fontSize:14, fontWeight:500, color:NOTES_ETRANGERES[se].color, marginBottom:8 }}>{NOTES_ETRANGERES[se].name}</div>
              <p style={{ fontSize:13, color:"#333", lineHeight:1.65, marginBottom:8 }}>{NOTES_ETRANGERES[se].def}</p>
              <div style={{ fontSize:12, color:"#666", fontStyle:"italic", marginBottom:6 }}>{n("etranExempleLabel")} {NOTES_ETRANGERES[se].exemple}</div>
              <div style={{ fontSize:12, color:NOTES_ETRANGERES[se].color, fontWeight:500 }}>{n("etranRegleLabel")} {NOTES_ETRANGERES[se].regles}</div>
            </div>
          )}
          <h3 style={{ fontSize:14, fontWeight:500, margin:"20px 0 8px", color:"#111" }}>{n("etranTableH3")}</h3>
          <div style={{ overflowX:"auto" }}>
            <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12 }}>
              <thead>
                <tr style={{ borderBottom:"0.5px solid #e5e5e5" }}>
                  {[n("etranThType"), n("etranThPrep"), n("etranThPos"), n("etranThRes")].map(h => <th key={h} style={{ textAlign:"left", padding:"6px 8px", fontWeight:500, color:"#666" }}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {[
                  { t: n("etranRow0T"), prep: n("etranRow0Prep"), pos: n("etranRow0Pos"), res: n("etranRow0Res") },
                  { t: n("etranRow1T"), prep: n("etranRow1Prep"), pos: n("etranRow1Pos"), res: n("etranRow1Res") },
                  { t: n("etranRow2T"), prep: n("etranRow2Prep"), pos: n("etranRow2Pos"), res: n("etranRow2Res") },
                  { t: n("etranRow3T"), prep: n("etranRow3Prep"), pos: n("etranRow3Pos"), res: n("etranRow3Res") },
                  { t: n("etranRow4T"), prep: n("etranRow4Prep"), pos: n("etranRow4Pos"), res: n("etranRow4Res") },
                  { t: n("etranRow5T"), prep: n("etranRow5Prep"), pos: n("etranRow5Pos"), res: n("etranRow5Res") },
                ].map((row, i) => (
                  <tr key={row.t} style={{ borderBottom:"0.5px solid #f0f0f0", background:i%2===0?"#fff":"#fafafa" }}>
                    <td style={{ padding:"7px 8px", fontWeight:500 }}>{row.t}</td>
                    <td style={{ padding:"7px 8px", color:"#555" }}>{row.prep}</td>
                    <td style={{ padding:"7px 8px", color:"#555" }}>{row.pos}</td>
                    <td style={{ padding:"7px 8px", color:"#555" }}>{row.res}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ══ SQUELETTE ══ */}
      {sec === "squelette" && (
        <div>
          <h2 style={S.h2}>{n("squelH2")}</h2>
          <p style={S.p}>{n("squelIntro")}</p>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:16 }}>
            {[
              { t: n("squelCard0T"), c:"#0F6E56", bg:"#E1F5EE", d: n("squelCard0D") },
              { t: n("squelCard1T"), c:"#534AB7", bg:"#EEEDFE", d: n("squelCard1D") },
              { t: n("squelCard2T"), c:"#BA7517", bg:"#FAEEDA", d: n("squelCard2D") },
              { t: n("squelCard3T"), c:"#185FA5", bg:"#E6F1FB", d: n("squelCard3D") },
            ].map(card => (
              <div key={card.t} style={{ border:`0.5px solid ${card.c}30`, borderRadius:10, padding:"12px 14px", background:card.bg }}>
                <div style={{ fontSize:13, fontWeight:500, color:card.c, marginBottom:6 }}>{card.t}</div>
                <p style={{ fontSize:12, color:"#444", lineHeight:1.6, margin:0 }}>{card.d}</p>
              </div>
            ))}
          </div>
          <div style={S.warn} dangerouslySetInnerHTML={{ __html: n("squelWarn") }} />
          <h3 style={{ fontSize:14, fontWeight:500, margin:"20px 0 8px", color:"#111" }}>{n("squelExamplesH3")}</h3>
          {(["fondamental","renverse","iivi"] as const).map((key) => {
            const prog = DEMO_PROGS[key];
            const label = n(`prog${key.charAt(0).toUpperCase() + key.slice(1)}Label` as any);
            const desc  = n(`prog${key.charAt(0).toUpperCase() + key.slice(1)}Desc` as any);
            return (
              <div key={key} style={{ border:`0.5px solid ${sp===key?"#3B6D11":"#e5e5e5"}`, borderRadius:10, marginBottom:8, overflow:"hidden", background:sp===key?"#EAF3DE":"#fff", transition:"all .15s", cursor:"pointer" }} onClick={() => setSp(sp===key?null:key)}>
                <div style={{ padding:"12px 16px" }}>
                  <div style={{ fontSize:13, fontWeight:500, color:"#111", marginBottom:3 }}>{label}</div>
                  <div style={{ fontSize:12, color:"#666" }}>{desc}</div>
                </div>
                {sp === key && (
                  <div style={{ padding:"0 16px 12px", borderTop:"0.5px solid #3B6D1130" }}>
                    <div style={{ fontFamily:"monospace", fontSize:13, color:"#3B6D11", margin:"8px 0", letterSpacing:1 }}>{prog.chords.join(" → ")}</div>
                    <button onClick={e => { e.stopPropagation(); playProg(ref as React.RefObject<PianoPlayerRef>, prog.chords, 1000); }} style={{ fontSize:12, padding:"5px 14px", border:"0.5px solid #3B6D11", borderRadius:20, cursor:"pointer", background:"transparent", color:"#3B6D11" }}>{n("squelListenBtn")}</button>
                  </div>
                )}
              </div>
            );
          })}
          <div style={S.tip} dangerouslySetInnerHTML={{ __html: n("squelTip") }} />
        </div>
      )}

      {/* ══ ACCOMPAGNEMENT ══ */}
      {sec === "accomp" && (
        <div>
          <h2 style={S.h2}>{n("accompH2")}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: n("accompIntro") }} />
          <p style={{ fontSize:13, color:"#888", marginBottom:12 }}>{n("accompClickHint")}</p>
          {ACCOMP_TYPES.map((ac, i) => (
            <div key={ac.name} onClick={() => setSa(sa===i?null:i)} style={{ border:`0.5px solid ${sa===i?ac.color:"#e5e5e5"}`, borderRadius:10, marginBottom:8, overflow:"hidden", background:sa===i?ac.bg:"#fff", transition:"all .15s", cursor:"pointer" }}>
              <div style={{ display:"flex", alignItems:"center", gap:12, padding:"12px 16px" }}>
                <span style={{ fontSize:14, fontWeight:600, color:ac.color, minWidth:90 }}>{ac.name}</span>
                <span style={{ fontSize:12, color:"#888", flex:1 }}>{ac.desc.slice(0,60)}…</span>
              </div>
              {sa === i && (
                <div style={{ padding:"0 16px 14px", borderTop:`0.5px solid ${ac.color}20` }}>
                  <p style={{ fontSize:13, color:"#444", lineHeight:1.65, margin:"8px 0 6px" }}>{ac.desc}</p>
                  <p style={{ fontSize:12, color:ac.color, fontStyle:"italic", margin:"0 0 4px" }}>{n("accompUsageLabel")} {ac.usage}</p>
                  <p style={{ fontSize:12, color:"#666", margin:0 }}>{n("accompTensionLabel")} {ac.tension}</p>
                </div>
              )}
            </div>
          ))}
          <h3 style={{ fontSize:14, fontWeight:500, margin:"20px 0 8px", color:"#111" }}>{n("accompParamsH3")}</h3>
          <div style={{ overflowX:"auto" }}>
            <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
              <thead>
                <tr style={{ borderBottom:"0.5px solid #e5e5e5" }}>
                  {[n("accompThParam"), n("accompThLow"), n("accompThHigh")].map(h => <th key={h} style={{ textAlign:"left", padding:"6px 10px", fontWeight:500, color:"#666" }}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {[
                  { p: n("accompRow0P"), low: n("accompRow0Low"), high: n("accompRow0High") },
                  { p: n("accompRow1P"), low: n("accompRow1Low"), high: n("accompRow1High") },
                  { p: n("accompRow2P"), low: n("accompRow2Low"), high: n("accompRow2High") },
                  { p: n("accompRow3P"), low: n("accompRow3Low"), high: n("accompRow3High") },
                  { p: n("accompRow4P"), low: n("accompRow4Low"), high: n("accompRow4High") },
                ].map((row, i) => (
                  <tr key={row.p} style={{ borderBottom:"0.5px solid #f0f0f0", background:i%2===0?"#fff":"#fafafa" }}>
                    <td style={{ padding:"7px 10px", fontWeight:500 }}>{row.p}</td>
                    <td style={{ padding:"7px 10px", color:"#0F6E56" }}>{row.low}</td>
                    <td style={{ padding:"7px 10px", color:"#BA7517" }}>{row.high}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={S.info} dangerouslySetInnerHTML={{ __html: n("accompInfo") }} />
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
              <div style={{ fontSize:14, color:"#666", marginBottom:20 }}>{i18n.quizMessage(scr, QUIZ_COUNT)}</div>
              <button onClick={reset} style={{ fontSize:13, padding:"8px 20px", border:"0.5px solid #3B6D11", borderRadius:20, cursor:"pointer", background:"#EAF3DE", color:"#3B6D11" }}>{i18n.newQ}</button>
            </div>
          ) : (
            <div>
              <div style={{ fontSize:12, color:"#999", marginBottom:10 }}>{i18n.t("question")} {qi+1} {i18n.t("of")} {QUIZ_COUNT}<span style={{ marginLeft:12, color:"#ccc" }}>{ALL_QUESTIONS.length} {i18n.t("questionsPool")}</span></div>
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