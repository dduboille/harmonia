"use client";

/**
 * Cours5.tsx
 * Harmonia · Niveau 1 · Cours 5 — Emprunts et suites harmoniques classiques
 *
 * TODO: i18n — basculer vers next-intl (passe dédiée)
 *
 * Sections :
 * 1. La gamme mineure — naturelle vs harmonique
 * 2. Emprunts à l'homonyme — C maj ↔ C min
 * 3. Suites classiques — cycle descendant, chaconne, napolitain
 * 4. Entraînement — quiz
 *
 * Convention Harmonia :
 * - Affichage : noms anglais (C D E F G A B)
 * - Audio (dotKeys PianoPlayer) : noms français (Do Ré Mi Fa Sol La Si)
 */

import React, { useRef, useState, useCallback } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import { SATB } from "@/lib/satb-voicings";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Section { id: string; label: string; }

// ─── Helpers audio ────────────────────────────────────────────────────────────

// PianoPlayer attend des noms français
const CHORDS = SATB;

function playChord(ref: React.RefObject<PianoPlayerRef>, keys: string[], duration = 1.8) {
  keys.forEach((key, i) => {
    const [note, octStr] = key.split(":");
    setTimeout(() => ref.current?.playNote(note, parseInt(octStr), { duration }), 0);
  });
}

function playProgression(ref: React.RefObject<PianoPlayerRef>, chordNames: string[], gap = 950) {
  chordNames.forEach((name, i) => {
    const keys = CHORDS[name] ?? [];
    setTimeout(() => playChord(ref, keys, 1.5), i * gap);
  });
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const SECTIONS_IDS = ["mineur","emprunts","classiques","quiz"] as const;

// Accords de C mineur avec leur fonction
const CM_ACCORDS = [
  { deg:"I",   chord:"Cm",    type:"mineur",   fn:"Tonique",      fnColor:"#0F6E56", fnBg:"#E1F5EE", desc:"Tonique principale. Stabilité mineure.", keys:["Do:3","Mib:3","Sol:3"] },
  { deg:"II",  chord:"Ddim",  type:"diminué",  fn:"Sous-dom.",    fnColor:"#534AB7", fnBg:"#EEEDFE", desc:"Triade diminuée. Prépare la dominante.", keys:["Ré:3","Fa:3","Lab:3"] },
  { deg:"III", chord:"Eb",    type:"majeur",   fn:"Tonique",      fnColor:"#0F6E56", fnBg:"#E1F5EE", desc:"Relatif majeur. Couleur lumineuse.", keys:["Mib:3","Sol:3","Sib:3"] },
  { deg:"IV",  chord:"Fm",    type:"mineur",   fn:"Sous-dom.",    fnColor:"#534AB7", fnBg:"#EEEDFE", desc:"Sous-dominante mineure. Prépare G7.", keys:["Fa:3","Lab:3","Do:4"] },
  { deg:"V",   chord:"G7",    type:"dominante",fn:"Dominante",    fnColor:"#BA7517", fnBg:"#FAEEDA", desc:"Dominante avec triton. Appelle la résolution.", keys:["Sol:3","Si:3","Ré:4","Fa:4"] },
  { deg:"VI",  chord:"Ab",    type:"majeur",   fn:"Tonique",      fnColor:"#0F6E56", fnBg:"#E1F5EE", desc:"Sus-dominante. Couleur douce, souvent en cadence rompue.", keys:["Lab:3","Do:4","Mib:4"] },
  { deg:"VII", chord:"Bdim",  type:"diminué",  fn:"Dominante",    fnColor:"#BA7517", fnBg:"#FAEEDA", desc:"Sensible diminuée. Forte tension vers Cm.", keys:["Si:3","Ré:4","Fa:4"] },
];

// Emprunts : accords issus de C mineur utilisables en C majeur
const EMPRUNTS = [
  {
    chord: "Cm",
    from: "C minor",
    fn: "Tonique",
    replaces: "C",
    desc: "La tonique mineure en contexte majeur. Très expressif — la tierce bémol crée un glissement de couleur immédiat.",
    usage: "Cadence finale en I mineur, effet de surprise mélancolique.",
    keys: ["Do:3","Mib:3","Sol:3"],
    color: "#534AB7", bg: "#EEEDFE",
  },
  {
    chord: "Fm",
    from: "C minor",
    fn: "Sous-dominante",
    replaces: "F",
    desc: "La sous-dominante mineure. Un emprunt parmi les plus fréquents — couleur sombre, romantique.",
    usage: "IV mineur → I (cadence plagale mineure). Très présent dans la musique classique et le rock.",
    keys: ["Fa:3","Lab:3","Do:4"],
    color: "#993C1D", bg: "#FAECE7",
  },
  {
    chord: "Ab",
    from: "C minor",
    fn: "Tonique",
    replaces: "Am",
    desc: "Le VIe degré majeur de C mineur. Remplace Am en apportant une couleur plus lumineuse et inattendue.",
    usage: "Substitut de Am dans les progressions. Très utilisé en pop et rock.",
    keys: ["Lab:3","Do:4","Mib:4"],
    color: "#3B6D11", bg: "#EAF3DE",
  },
  {
    chord: "Eb",
    from: "C minor",
    fn: "Tonique",
    replaces: "Em",
    desc: "Le IIIe degré de C mineur. Remplace Em avec une couleur plus massive, ample.",
    usage: "Courant dans le rock (I–bIII–IV–I) et le blues.",
    keys: ["Mib:3","Sol:3","Sib:3"],
    color: "#185FA5", bg: "#E6F1FB",
  },
];

// Suites classiques
const SUITES = [
  {
    id: "cycle",
    name: "Cycle des quintes descendantes",
    subtitle: "La suite la plus naturelle de l'harmonie tonale",
    desc: "Chaque accord descend d'une quinte (ou monte d'une quarte) par rapport au précédent. En mineur, le cycle complet parcourt tous les degrés avec une fluidité naturelle. C'est la colonne vertébrale d'Autumn Leaves, de nombreux standards de jazz, et de la musique baroque.",
    detail: "En C mineur : Cm → Fm7 → Bdim7 → EbMaj7 → AbMaj7 → Dm7b5 → G7 → Cm. Chaque accord appelle le suivant par une attraction de quinte — le mouvement le plus naturel de l'harmonie tonale.",
    progression: ["Cm2","Fm7","Bdim7","EbMaj7","AbMaj7","Dm7b5","G7","Cm"],
    color: "#0F6E56", bg: "#E1F5EE",
  },
  {
    id: "chaconne",
    name: "Basse de chaconne",
    subtitle: "Archétype baroque de la variation",
    desc: "Une basse descend par degrés conjoints ou par tierces depuis la tonique jusqu'à la dominante, sur laquelle on s'arrête avant de repartir. Ce modèle sert de fondation à des séries de variations. On le retrouve chez Purcell, Bach, Handel — et dans d'innombrables morceaux modernes.",
    detail: "Modèle en C mineur : Cm → Gm/Bb → Fm/Ab → G7. La basse descend Do → Si♭ → La♭ → Sol, créant une ligne mélodique au registre grave. Note : le Gm utilise ici la gamme mineure naturelle.",
    progression: ["Cm","Gm/Bb","Cm/Eb","G7"],
    color: "#534AB7", bg: "#EEEDFE",
  },
  {
    id: "napolitain",
    name: "Accord napolitain",
    subtitle: "Le ♭II6 — couleur dramatique et pathétique",
    desc: "Le degré II abaissé (♭II), présenté en accord majeur et généralement en premier renversement. En C mineur, il s'agit de Db/F (Réb majeur avec Fa à la basse). Sa fonction est sous-dominante — il prépare la dominante avec une tension dramatique unique.",
    detail: "Le demi-ton entre le ♭II et la tonique (Réb → Do) est chargé d'une expressivité particulière — symbole du pathos romantique. On le retrouve chez Beethoven, Chopin, et dans la musique de film. Schéma classique : ♭II6 → V7 → I.",
    progression: ["Db","G7","Cm"],
    color: "#BA7517", bg: "#FAEEDA",
  },
];

// ─── Quiz ─────────────────────────────────────────────────────────────────────

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const ALL_QUESTIONS = [
  // Gamme mineure
  { q:"Pourquoi la gamme mineure naturelle pose-t-elle un problème harmonique ?", opts:["Elle a trop de notes","Son triton ne pousse pas vers la tonique","Elle n'a pas de VIIe degré","Elle contient trop d'altérations"], a:1, fb:"En mineur naturel, le triton se trouve entre le IIe et le VIe degré — il ne résout pas vers le Ier et IIIe degrés comme en majeur. Pas de sensible fonctionnelle." },
  { q:"Comment la gamme mineure harmonique résout-elle ce problème ?", opts:["En supprimant le triton","En élevant le VIIe degré d'un demi-ton","En abaissant le IVe degré","En ajoutant une 8e note"], a:1, fb:"Élever le VIIe degré crée une sensible forte (B naturel au lieu de Bb en C mineur) et rétablit un triton fonctionnel entre le IVe et VIIe degrés — comme en majeur." },
  { q:"Qu'est-ce que la gamme mineure harmonique apporte que la naturelle n'a pas ?", opts:["Une octave supplémentaire","Une sensible et un triton fonctionnel","Trois nouvelles notes","Un accord de dominante mineur"], a:1, fb:"La mineure harmonique recrée la sensible (VII → I, demi-ton ascendant) et le triton fonctionnel (IV + VII). Sans ça, l'accord de dominante serait mineur (Gm au lieu de G7)." },
  { q:"En C mineur harmonique, quel accord forme la dominante ?", opts:["Gm","G","G7","Dm"], a:2, fb:"Avec le VIIe degré élevé (B naturel), l'accord construit sur Sol est G–B–D–F = G7. La septième mineure (F) est issue de la gamme, le B naturel vient de la mineure harmonique." },
  { q:"Sur quels degrés utilise-t-on la mineure naturelle plutôt que l'harmonique ?", opts:["IVe et Ve","Ier et IIIe","IIe et VIIe","Ve et VIe"], a:1, fb:"Les Ier (tonique) et IIIe (relatif majeur) degrés utilisent la mineure naturelle pour rester stables. La mineure harmonique sur ces degrés créerait des intervalles trop instables (7e majeure, 5te augmentée)." },
  { q:"En C mineur, quelle est la différence entre Gm (naturel) et G7 (harmonique) ?", opts:["La fondamentale","La tierce","La septième et la tierce — B♭ vs B naturel","La quinte"], a:2, fb:"En mineure naturelle : G–Bb–D = Gm. En mineure harmonique : G–B–D–F = G7. La tierce passe de Bb à B naturel, ce qui crée la sensible et permet la résolution sur Cm." },
  { q:"La formule de la gamme mineure harmonique est :", opts:["T–T–½–T–T–T–½","T–½–T–T–½–T–T","T–½–T–T–½–1½–½","½–T–T–T–½–T–T"], a:2, fb:"T–½–T–T–½–1½–½ : le 1½ ton (ton et demi) entre le VIe et VIIe degrés est caractéristique de la mineure harmonique — un grand saut mélodique qui lui donne sa couleur orientale." },

  // Emprunts
  { q:"Qu'est-ce qu'un emprunt harmonique ?", opts:["Un accord joué deux fois","Un accord issu d'une tonalité différente, utilisé temporairement","Un renversement inhabituel","Une modulation permanente"], a:1, fb:"Un emprunt consiste à utiliser momentanément un accord d'une autre tonalité — sans quitter la tonalité principale. La fonction reste identifiable grâce au triton fonctionnel." },
  { q:"Pourquoi C majeur et C mineur partagent-ils le même triton fonctionnel ?", opts:["Par hasard","Car ils ont la même tonique et le triton F–B est commun aux deux gammes","Car ils ont les mêmes notes","Car la sensible est identique"], a:1, fb:"F et B (Fa et Si) sont présents dans les deux tonalités — ce triton détermine les fonctions harmoniques. C'est pourquoi les accords des deux tonalités peuvent être échangés sans briser la logique fonctionnelle." },
  { q:"Quel accord de C mineur peut remplacer F (IVe degré) en C majeur ?", opts:["Cm","Fm","Ab","Eb"], a:1, fb:"Fm est la sous-dominante de C mineur. Comme F, elle a la fonction sous-dominante (contient Fa mais pas Si). Fm peut donc remplacer F en C majeur — emprunt très expressif." },
  { q:"La progression C–Fm–C est un exemple de :", opts:["Modulation en C mineur","Emprunt du IVe degré mineur","Cadence rompue","Cycle des quintes"], a:1, fb:"C (tonique) → Fm (sous-dominante empruntée à C mineur) → C (tonique). Le Fm est un emprunt — on reste en C majeur mais on colore la phrase avec une teinte mineure." },
  { q:"Quelle est la fonction de Ab (Lab majeur) en C majeur ?", opts:["Dominante","Sous-dominante","Tonique (emprunté à C mineur)","Modulante"], a:2, fb:"Ab est le VIe degré de C mineur. Il a la fonction tonique (ne contient ni Fa ni Si). En C majeur, il remplace Am comme substitut tonique — emprunt expressif et lumineux." },
  { q:"L'accord Eb (Mib majeur) emprunté en C majeur a la fonction :", opts:["Dominante","Sous-dominante","Tonique","Aucune — il est hors tonalité"], a:2, fb:"Eb est le IIIe degré de C mineur — fonction tonique. En C majeur, il remplace Em. Très utilisé dans le rock (I–bIII–IV–I) pour sa couleur ample et massive." },
  { q:"Pour déterminer la fonction d'un accord emprunté, on utilise :", opts:["Sa fondamentale","Le triton fonctionnel de la tonalité principale","Sa position dans la gamme mineure","Son nombre de notes"], a:1, fb:"Le triton fonctionnel (F–B en C majeur/mineur) est le repère universel. S'il contient F+B → dominante. F seul → sous-dominante. Ni l'un ni l'autre → tonique." },
  { q:"La progression C–Fm–C–G7–C utilise Fm comme :", opts:["Dominante","Substitut de Em","Sous-dominante empruntée","Accord de passage"], a:2, fb:"Fm a la fonction sous-dominante (contient Fa). Il prépare G7 (dominante) puis C (tonique) = SD–D–T. L'emprunt colore la phrase sans briser la logique fonctionnelle." },

  // Suites classiques
  { q:"Quel principe relie les accords dans le cycle des quintes descendantes ?", opts:["Chaque accord monte d'une tierce","Chaque accord descend d'une quinte (ou monte d'une quarte)","Chaque accord est renversé","Chaque accord est à l'état fondamental"], a:1, fb:"Le cycle des quintes descendantes : chaque fondamentale est une quinte sous la précédente. Ce mouvement crée une attraction naturelle — la dynamique la plus forte de l'harmonie tonale." },
  { q:"Quel célèbre standard de jazz est basé sur le cycle des quintes en mineur ?", opts:["All The Things You Are","Autumn Leaves","Misty","Round Midnight"], a:1, fb:"Autumn Leaves utilise le cycle des quintes descendantes en G mineur (et Bb majeur) — Cm7–F7–BbMaj7–EbMaj7–Am7b5–D7–Gm. C'est l'exemple pédagogique classique." },
  { q:"La basse de chaconne descend typiquement :", opts:["Par quintes","Par degrés conjoints ou par tierces depuis I vers V","Par secondes augmentées","Par octaves"], a:1, fb:"La basse de chaconne crée une ligne descendante conjoncte ou par tierces — Do → Si♭ → La♭ → Sol en C mineur. Cette basse est un ostinato sur lequel se développent des variations." },
  { q:"Dans la basse de chaconne, on utilise exceptionnellement la gamme mineure :", opts:["Harmonique sur tous les degrés","Naturelle sur le Ve degré (Gm au lieu de G7)","Majeure sur le IIIe degré","Dorique sur le VIe degré"], a:1, fb:"Dans la basse de chaconne, on utilise la mineure naturelle sur le Ve degré pour fluidifier la ligne descendante. L'exception Gm est spécifique à ce contexte." },
  { q:"L'accord napolitain est le degré :", opts:["♭III en premier renversement","♭II en accord majeur, souvent en premier renversement","IV abaissé","VIIe augmenté"], a:1, fb:"Le napolitain = ♭II majeur. En C mineur : Db majeur. Il est généralement présenté en 1er renversement (♭II6) avec la tierce à la basse." },
  { q:"La fonction harmonique de l'accord napolitain est :", opts:["Dominante","Tonique","Sous-dominante","Neutre"], a:2, fb:"Le napolitain a la fonction sous-dominante. En C mineur, Db contient Fa (IVe degré) mais pas Si. Il prépare la dominante : ♭II6 → V7 → I." },
  { q:"En C mineur, l'accord napolitain est :", opts:["Ab majeur","Db majeur / F","Bb majeur","Eb majeur"], a:1, fb:"Le ♭II de C est Db (Réb majeur). En premier renversement : Db/F. C'est l'accord napolitain de C mineur." },
  { q:"Quelle couleur expressive caractérise l'accord napolitain ?", opts:["Joyeuse et légère","Dramatique et pathétique","Mystérieuse et modale","Neutre et stable"], a:1, fb:"Le demi-ton entre le ♭II et la tonique (Réb → Do) est chargé d'expressivité dramatique. On retrouve le napolitain chez Beethoven, Chopin, et dans la musique de film pour évoquer la gravité ou le destin." },
  { q:"Le schéma classique d'utilisation du napolitain est :", opts:["♭II → I → V","♭II6 → V7 → I","I → ♭II → I","V → ♭II → V"], a:1, fb:"♭II6 → V7 → I : le napolitain prépare la dominante comme une sous-dominante renforcée, puis la dominante résout sur la tonique. Schéma très fréquent chez les romantiques." },
  { q:"Dans le cycle des quintes en C mineur, quel accord suit Fm7 ?", opts:["Cm","Bdim7","G7","EbMaj7"], a:1, fb:"Cm → Fm7 → Bdim7 → EbMaj7... Le Bdim7 est une quinte en dessous de Fm (Fa → Si). C'est le VIIe degré de C mineur harmonique." },

  // Analyse et application
  { q:"La progression Am–F–C–G en A mineur emprunte F depuis :", opts:["A majeur","C majeur","La mineure harmonique","F majeur"], a:0, fb:"En A mineur, le VIe degré naturel est Fa. F est le VIe degré de A mineur naturel — pas un emprunt ici. F appartient diatoniquement à la gamme de A mineur naturelle." },
  { q:"La progression C–Bb–F–C en C majeur emprunte Bb depuis :", opts:["G majeur","C mineur","F majeur","Bb majeur"], a:2, fb:"Bb (Sib majeur) n'appartient pas à C majeur. C'est le VIIe degré de F majeur, ou le VIIe degré de C mineur naturel. En C majeur, c'est un emprunt — souvent utilisé dans le rock (I–bVII–IV–I)." },
  { q:"Quelle progression illustre le mieux l'emprunt IV mineur en majeur ?", opts:["C–F–G7–C","C–Fm–G7–C","C–Dm–G7–C","C–Am–G7–C"], a:1, fb:"C–Fm–G7–C : le Fm est emprunté à C mineur. C'est l'emprunt du IVe degré mineur en contexte majeur — couleur sombre sur la sous-dominante, très romantique." },
  { q:"En G majeur, l'accord napolitain serait :", opts:["Ab majeur","Ab majeur / C","Eb majeur","F majeur"], a:1, fb:"Le ♭II de G est Ab (Lab). En premier renversement avec C (Do) à la basse : Ab/C. C'est le napolitain de G majeur." },
  { q:"Pourquoi le cycle des quintes est-il si naturel à l'oreille ?", opts:["Car il évite toutes les dissonances","Car le mouvement de quinte est la consonance la plus pure après l'octave","Car il reste dans la même gamme","Car il utilise toujours des accords majeurs"], a:1, fb:"La quinte juste (rapport 3/2) est la consonance la plus fondamentale après l'octave. Une descente de quinte crée une attraction acoustique naturelle — c'est pourquoi ce mouvement sonne si inévitable." },
  { q:"Un emprunt est différent d'une modulation car :", opts:["L'emprunt utilise des accords renversés","L'emprunt est momentané — on ne quitte pas la tonalité principale","L'emprunt est toujours suivi d'une cadence parfaite","L'emprunt utilise toujours le napolitain"], a:1, fb:"Un emprunt est une couleur passagère — un accord étranger intégré sans déplacer le centre tonal. La modulation installe durablement une nouvelle tonalité avec sa propre cadence." },
  { q:"La progression C–Ab–Bb–C en C majeur utilise :", opts:["Deux cadences parfaites","Deux emprunts à C mineur (Ab et Bb)","Une modulation en Ab majeur","Une basse de chaconne"], a:1, fb:"Ab (Lab) et Bb (Sib) sont empruntés à C mineur naturel. Cette progression (I–bVI–bVII–I) est typique du rock — deux emprunts qui créent une couleur modale et massive." },

  // ── Gamme mineure — approfondissement ──
  { q:"Pourquoi la gamme mineure naturelle est-elle issue du VIe degré de la gamme majeure ?", opts:["Par convention historique arbitraire","Car en partant du VIe degré on obtient la même séquence T/½ décalée","Car c'est la gamme avec le moins d'altérations","Car le VIe degré est toujours mineur"], a:1, fb:"La gamme majeure commence sur le Ier degré. Si on reprend la même séquence de tons/demi-tons à partir du VIe, on obtient la gamme mineure relative — mêmes notes, point de départ différent." },
  { q:"En A mineur naturel, quelles notes sont identiques à C majeur ?", opts:["6 notes sur 7","7 notes sur 7 — exactement les mêmes","5 notes sur 7","Aucune note en commun"], a:1, fb:"Am naturel et C majeur partagent exactement les 7 mêmes notes — A B C D E F G. Am est le relatif mineur de C majeur." },
  { q:"En C mineur harmonique, quelle note est altérée par rapport à la naturelle ?", opts:["Le IVe degré (Fa)","Le VIe degré (Lab)","Le VIIe degré (Si♭ → Si naturel)","Le IIe degré (Ré)"], a:2, fb:"La mineure harmonique élève le VIIe degré d'un demi-ton : Si♭ (Bb) devient Si naturel (B). Cela crée la sensible et le triton fonctionnel." },
  { q:"L'intervalle caractéristique de la gamme mineure harmonique est :", opts:["La tierce augmentée entre I et III","Le triton entre IV et VII","Le ton et demi entre VI et VII","La seconde diminuée entre V et VI"], a:2, fb:"Entre le VIe (Lab) et le VIIe élevé (Si naturel) en C mineur harmonique, il y a 1 ton et demi (3 demi-tons). Cet intervalle est la signature sonore de la mineure harmonique — couleur parfois qualifiée d'orientale." },
  { q:"Quel est le Ve degré en C mineur naturel ?", opts:["Gm","G7","G majeur","Gdim"], a:0, fb:"En C mineur naturel, le VIIe degré est Bb (non altéré). L'accord sur Sol est G–Bb–D = Gm. Sans la sensible, il n'y a pas de tension vers Cm." },
  { q:"Pourquoi utilise-t-on la mineure naturelle sur le Ier degré plutôt que l'harmonique ?", opts:["Par tradition","Car la mineure harmonique créerait Cm avec une 7e majeure (ImMaj7) — accord instable","Car la mineure naturelle est plus belle","Car le Ier degré n'a pas besoin de triton"], a:1, fb:"Sur le Ier degré avec mineure harmonique : C–Eb–G–B = CmMaj7. La 7e majeure sur la tonique est très instable. On préfère la mineure naturelle pour garder Cm ou Cm7 comme tonique stable." },
  { q:"En D mineur harmonique, quelle note est élevée ?", opts:["Sol (G)","Do (C)","Do# (C#)","Fa# (F#)"], a:2, fb:"D mineur naturel : D E F G A Bb C. La mineure harmonique élève le VIIe degré C → C#. D mineur harmonique : D E F G A Bb C#." },
  { q:"En E mineur harmonique, la sensible est :", opts:["Ré (D)","Ré# (D#)","Fa (F)","Sol (G)"], a:1, fb:"E mineur naturel a D comme VIIe degré. La mineure harmonique l'élève : D → D#. La sensible de E mineur harmonique est D#." },

  // ── Emprunts — approfondissement ──
  { q:"En G majeur, quel accord est emprunté dans la progression G–Eb–Bb–G ?", opts:["Aucun","Eb et Bb, empruntés à G mineur","Seulement Bb","Seulement Eb"], a:1, fb:"En G majeur, Eb (Mib) et Bb (Sib) n'appartiennent pas à la gamme. Ils sont empruntés à G mineur. La progression G–bVI–bVII–G est typique du rock." },
  { q:"En D majeur, Bb est un emprunt de :", opts:["D mineur","G majeur","A majeur","F majeur"], a:0, fb:"En D mineur, le VIe degré est Bb (Sib). Ce n'est pas une note de D majeur — c'est un emprunt à D mineur en contexte de D majeur." },
  { q:"Quel emprunt est le plus fréquent dans la musique classique et romantique ?", opts:["Le bVII","Le bVI","Le IV mineur (bIV)","Le bII"], a:2, fb:"L'emprunt du IVe degré mineur (IV mineur) est parmi les plus fréquents — F → Fm en C majeur. Il apporte une couleur sombre et expressive sur la sous-dominante, très prisée du romantisme." },
  { q:"Dans la progression A–F–C–G, F est :", opts:["Un emprunt à A mineur","Diatonique à A majeur","Un accord de dominante secondaire","Un accord napolitain"], a:1, fb:"A majeur : A B C# D E F# G#. F naturel n'appartient pas à A majeur. En revanche, F est le VIe degré de A mineur — c'est un emprunt." },
  { q:"L'emprunt I mineur (ex : Cm en C majeur) a la même fonction que :", opts:["Am","F","G7","Em"], a:0, fb:"Cm et Am ont tous deux la fonction tonique (aucun ne contient F ni B, le triton de C). Cm peut donc remplacer Am comme tonique alternative, avec une couleur plus sombre." },
  { q:"En C majeur, quelle est la fonction de Bb majeur ?", opts:["Dominante","Sous-dominante","Tonique","Il n'a pas de fonction claire"], a:1, fb:"Bb (Sib majeur) contient Fa (F) mais pas Si (B). Fa seul sans Si = fonction sous-dominante. Bb peut donc remplacer F ou Dm dans une progression SD–D–T." },
  { q:"La progression C–Cm–C est un exemple de :", opts:["Modulation","Pendule","Minorisation momentanée (I → Im)","Cadence plagale"], a:2, fb:"C → Cm → C : on minorise momentanément la tonique — même fondamentale, mais la tierce passe de E à Eb. Technique très expressive, utilisée dans les codas et les moments dramatiques." },
  { q:"En E majeur, l'emprunt le plus fréquent en rock est :", opts:["Cm","Bm","D (bVII emprunté à E mineur)","Ab"], a:2, fb:"D majeur (Ré) est le bVII de E majeur — emprunté à E mineur. La progression E–D–A–E est classique du rock (ex. : nombreux morceaux de Led Zeppelin, Rolling Stones)." },
  { q:"La progression I–bVII–IV–I en C majeur est :", opts:["C–Bb–F–C","C–Bb–G–C","C–Ab–F–C","C–Bb–Dm–C"], a:0, fb:"C (I) – Bb (bVII, emprunté à C mineur) – F (IV) – C (I). Bb est l'emprunt du VIIe degré mineur. C–Bb–F–C est une progression iconique du rock." },
  { q:"Quel accord emprunté à C mineur remplace Em (IIIe degré) en C majeur ?", opts:["Cm","Eb","Ab","Fm"], a:1, fb:"Eb (Mib majeur) est le IIIe degré de C mineur. Il remplace Em avec une couleur plus large et massive. La progression C–Eb–F–G est courante en rock et pop." },
  { q:"Pourquoi peut-on échanger des accords entre tonalités homonymes ?", opts:["Car ils ont les mêmes notes","Car ils partagent le triton fonctionnel et donc les mêmes fonctions","Car ils sont dans la même armure","Car la mélodie reste identique"], a:1, fb:"C majeur et C mineur partagent F et B (le triton fonctionnel). Les fonctions sont déterminées par rapport à ce triton — les accords des deux tonalités peuvent donc être échangés librement." },

  // ── Cycle des quintes — approfondissement ──
  { q:"Le cycle des quintes complet en C majeur est :", opts:["C–F–Bdim–Em–Am–Dm–G7–C","C–G–Dm–Am–Em–Bdim–F–C","C–Dm–Em–F–G–Am–Bdim–C","C–Am–F–Dm–Bdim–G7–Em–C"], a:0, fb:"C → F → Bdim → Em → Am → Dm → G7 → C. Chaque accord est une quinte en dessous du précédent dans la gamme de C majeur." },
  { q:"En A mineur, le cycle des quintes commence par :", opts:["Am–Dm–G7–CMaj7–FMaj7–Bm7b5–E7–Am","Am–E7–Dm–G7–CMaj7–Am","Am–Dm–G7–Am","Am–G7–Dm–Am"], a:0, fb:"Am → Dm → G7 → CMaj7 → FMaj7 → Bm7b5 → E7 → Am. Même principe qu'en mineur — chaque accord descend d'une quinte diatonique." },
  { q:"Pourquoi le cycle des quintes descendantes est-il harmoniquement si efficace ?", opts:["Car il évite les dissonances","Car chaque fondamentale attire la suivante par le mouvement de quinte — la plus forte attraction de basse","Car il reste dans une seule gamme","Car il utilise toujours des accords majeurs"], a:1, fb:"Le mouvement de quinte descendante (ou quarte ascendante) à la basse crée l'attraction la plus naturelle de l'harmonie tonale — c'est la même logique qui fait que V résout vers I." },
  { q:"Dans Autumn Leaves, le cycle de quintes passe alternativement de :", opts:["C majeur à G majeur","C mineur à Eb majeur","G mineur à Bb majeur — relatif mineur et majeur","A mineur à C majeur"], a:2, fb:"Autumn Leaves est en G mineur / Bb majeur (relatifs). Le cycle passe : Cm7–F7–BbMaj7–EbMaj7 (en Bb majeur) puis Am7b5–D7–Gm (en G mineur)." },
  { q:"Quel accord complète la séquence Cm–Fm7–Bdim7–… dans le cycle en C mineur ?", opts:["G7","AbMaj7","EbMaj7","Dm7b5"], a:2, fb:"Cm → Fm7 → Bdim7 → EbMaj7 → AbMaj7 → Dm7b5 → G7 → Cm. Après Bdim7, on descend d'une quinte : Si → Mi♭ = EbMaj7." },
  { q:"Le cycle des quintes en mode majeur omet souvent les IIIe et VIIe degrés car :", opts:["Ils sont trop graves","Ils sont moins utilisés et leur fonction est ambiguë","Ils ne sont pas dans la gamme","Ils créent des octaves parallèles"], a:1, fb:"Em (IIIe) et Bdim (VIIe) sont harmoniquement plus complexes et moins fréquents dans les progressions courantes. En pratique, le cycle majeur raccourci est souvent I–IV–V–I." },

  // ── Chaconne — approfondissement ──
  { q:"La basse de chaconne est principalement utilisée comme :", opts:["Une progression de 8 accords","Un ostinato servant de base aux variations","Une suite de cadences parfaites","Un cycle des quintes en mineur"], a:1, fb:"La basse de chaconne est un ostinato — une figure de basse répétée indéfiniment sur laquelle le compositeur construit des variations mélodiques, rythmiques et harmoniques." },
  { q:"Quel grand compositeur baroque a écrit l'une des chaconnes les plus célèbres pour violon seul ?", opts:["Vivaldi","Handel","Purcell","Bach"], a:3, fb:"La Chaconne de la Partita n°2 en Ré mineur de J.S. Bach est l'une des œuvres les plus monumentales pour violon seul — une série de variations sur une basse de chaconne." },
  { q:"La basse de chaconne crée une tension progressive car :", opts:["Elle monte vers l'aigu","Elle descend vers la dominante, créant une attente de résolution","Elle reste sur la tonique","Elle utilise des accords diminués"], a:1, fb:"La basse descend par degrés (Do → Si♭ → La♭ → Sol en C mineur) puis arrive sur Sol (dominante), qui appelle la résolution vers Cm. C'est une tension construite par le mouvement mélodique de la basse." },
  { q:"Quel accord de la basse de chaconne utilise exceptionnellement la mineure naturelle ?", opts:["Le Ier degré","Le IVe degré","Le Ve degré (Gm au lieu de G7)","Le VIe degré"], a:2, fb:"Dans la basse de chaconne, le Ve degré utilise la mineure naturelle (Gm) pour fluidifier la ligne de basse descendante. Le G7 harmonique serait plus tendu mais moins naturel dans ce contexte mélodique." },
  { q:"La progression Cm–Gm/Bb–Fm/Ab–G7 est une basse de chaconne. La basse joue :", opts:["Do–Sol–Fa–Sol","Do–Si♭–La♭–Sol","Do–Mi♭–Sol–Si","Do–Ré–Mi–Fa"], a:1, fb:"La basse joue : Do (C) sur Cm → Si♭ (Bb) sur Gm/Bb → La♭ (Ab) sur Fm/Ab → Sol (G) sur G7. Ligne descendante conjoncte caractéristique." },
  { q:"Quel élément musical moderne est directement issu de la tradition de la chaconne ?", opts:["Le chorus au jazz","La basse ostinato dans le blues et le funk","La modulation en pivot","L'accord napolitain en pop"], a:1, fb:"La basse ostinato du blues (12-bar blues) et du funk sont des descendants directs de la chaconne baroque — une basse répétée sur laquelle se développent les variations mélodiques et rythmiques." },

  // ── Napolitain — approfondissement ──
  { q:"En G mineur, l'accord napolitain est :", opts:["Eb/G","Ab/C","Ab majeur","Db majeur"], a:1, fb:"Le ♭II de G est Ab (Lab majeur). En premier renversement avec C à la basse : Ab/C. C'est l'accord napolitain de G mineur." },
  { q:"En D mineur, l'accord napolitain est :", opts:["Eb majeur","Eb/G","Bb majeur","Gb majeur"], a:1, fb:"Le ♭II de D est Eb (Mib majeur). En premier renversement avec G à la basse : Eb/G. L'accord napolitain de D mineur est Eb/G." },
  { q:"Le napolitain est généralement présenté en premier renversement parce que :", opts:["C'est plus facile à jouer","La tierce à la basse crée un mouvement conjoint plus fluide vers la dominante","Il sonne plus fort","Par convention historique sans raison acoustique"], a:1, fb:"En premier renversement (♭II6), la basse est la tierce du ♭II. Ce voix descend d'un demi-ton vers la sensible de la dominante — mouvement conjoint très expressif et naturel." },
  { q:"Le demi-ton entre le ♭II et la tonique crée une tension car :", opts:["C'est un intervalle rare","La proximité engendre une forte attraction — comme la sensible vers la tonique","Le ♭II est toujours instable","Les deux notes sont distantes de 7 demi-tons"], a:1, fb:"Réb → Do (Db → C) est un mouvement de demi-ton descendant chargé d'expressivité. Comme la sensible (B → C), cette proximité crée une attraction intense — c'est l'essence du pathos romantique." },
  { q:"Beethoven utilise le napolitain dans :", opts:["La Sonate au Clair de Lune (op.27)","La 9e Symphonie","Les deux"], a:0, fb:"La Sonate au Clair de Lune (op.27 n°2) utilise l'accord napolitain de façon caractéristique. Beethoven y recourt fréquemment pour accentuer le caractère dramatique." },
  { q:"Le napolitain peut aussi apparaître en mode majeur. En C majeur, il serait :", opts:["Ab majeur","Db majeur / F","Gb majeur","Bb majeur"], a:1, fb:"Même en C majeur, le napolitain est Db/F. Son utilisation est plus rare en majeur car il crée un contraste plus brutal, mais il reste possible avec un effet très dramatique." },
  { q:"Après le napolitain, quel accord arrive presque toujours ?", opts:["La tonique (I)","La sous-dominante (IV)","La dominante (V ou V7)","Le VIe degré"], a:2, fb:"Le napolitain prépare la dominante : ♭II6 → V7. Puis la dominante résout sur I. L'accord napolitain est une forme de prédominante — il ne résout jamais directement sur I sans passer par V." },
  { q:"Quelle note du napolitain descend d'un demi-ton vers la sensible de la dominante ?", opts:["La fondamentale du ♭II","La tierce du ♭II (qui est à la basse en ♭II6)","La quinte du ♭II","Aucune — le napolitain monte"], a:1, fb:"En C mineur, ♭II6 = Db/F. La basse F (Fa) descend d'un demi-ton vers E (Mi) — la tierce de G7. Ce mouvement de voix est l'une des résolutions les plus expressives de l'harmonie tonale." },

  // ── Analyse comparative ──
  { q:"Quelle est la différence fondamentale entre un emprunt et une modulation ?", opts:["L'emprunt est plus court","L'emprunt est momentané et ne déplace pas le centre tonal ; la modulation installe durablement une nouvelle tonalité","L'emprunt utilise le napolitain","La modulation utilise le cycle des quintes"], a:1, fb:"Un emprunt = une couleur passagère. Une modulation = un voyage : on quitte réellement la tonalité de départ et on installe un nouveau centre tonal avec sa propre cadence." },
  { q:"Lequel de ces outils est le plus dramatique harmoniquement ?", opts:["L'emprunt du IVe mineur","La basse de chaconne","L'accord napolitain","Le cycle des quintes"], a:2, fb:"L'accord napolitain (♭II6) est le plus dramatique — son demi-ton caractéristique, sa couleur étrangère à la tonalité et sa résolution via la dominante créent une tension pathétique incomparable." },
  { q:"Lequel de ces outils crée le plus d'unité et de continuité dans une phrase ?", opts:["L'accord napolitain","Le cycle des quintes descendantes","L'emprunt du bVII","La minorisation de la tonique"], a:1, fb:"Le cycle des quintes crée une chaîne d'attractions naturelles — chaque accord appelle le suivant de façon organique. Il donne à la phrase une direction claire et une continuité sans rupture." },
  { q:"La progression C–Fm–G7–C utilise Fm comme :", opts:["Dominante","Tonique empruntée","Sous-dominante empruntée à C mineur","Accord napolitain"], a:2, fb:"Fm a la fonction sous-dominante (contient Fa mais pas Si). C'est le IVe degré de C mineur — un emprunt classique. C–Fm–G7–C = T–SD empruntée–D–T." },
  { q:"La progression Db/F–G7–Cm est :", opts:["Un cycle des quintes en C mineur","Un napolitain ♭II6–V7–I en C mineur","Un emprunt de Db majeur à C majeur","Une basse de chaconne"], a:1, fb:"Db/F = accord napolitain de C mineur (♭II en 1er renversement). G7 = dominante. Cm = tonique. C'est le schéma classique ♭II6 → V7 → I." },
  { q:"Parmi ces progressions, laquelle est une basse de chaconne ?", opts:["Cm–Fm7–Bdim7–G7","Cm–Gm/Bb–Fm/Ab–G7","C–Ab–Eb–Bb","Cm–Db–G7–Cm"], a:1, fb:"Cm–Gm/Bb–Fm/Ab–G7 : la basse joue Do–Si♭–La♭–Sol, une descente conjoncte caractéristique de la chaconne. Les accords en renversement suivent la ligne de basse mélodique." },
  { q:"Lequel de ces trois éléments appartient exclusivement à la tradition baroque ?", opts:["L'accord napolitain","L'emprunt à l'homonyme","La basse de chaconne comme structure ostinato de variations","Le cycle des quintes"], a:2, fb:"La basse de chaconne comme structure formelle (thème de basse + variations) est un genre spécifiquement baroque. Le napolitain et les emprunts existent dans toutes les périodes ; le cycle des quintes est universel." },
  { q:"En jazz, le cycle des quintes est appliqué aux accords de septième. En C, cela donne :", opts:["CMaj7–FMaj7–Bdim7–Em7–Am7–Dm7–G7–CMaj7","C7–F7–Bb7–Eb7–Ab7–Db7–Gb7–B7","CMaj7–Am7–Dm7–G7–CMaj7","Dm7–G7–CMaj7"], a:0, fb:"CMaj7–FMaj7–Bdim7–Em7–Am7–Dm7–G7–CMaj7 : le cycle des quintes diatoniques complet en C majeur avec les tétrades. C'est la base harmonique de nombreux standards de jazz." },
  { q:"L'accord Bb/D dans une progression en C majeur est :", opts:["Bb en état fondamental","Bb en 1er renversement, emprunté à C mineur","Le napolitain de C","Bdim renversé"], a:1, fb:"Bb/D = Sib majeur avec Ré à la basse (1er renversement). Bb est emprunté à C mineur (VIIe degré naturel). La basse D crée un mouvement conjoint fluide dans la ligne de basse." },
  { q:"Quel est le lien entre le napolitain et la tonalité de Fa mineur en C ?", opts:["Aucun lien","Db est le VIe degré de Fa mineur — le napolitain est un emprunt indirect à F mineur","Db est la tonique de F mineur","Db est le IIe degré de F majeur"], a:1, fb:"En F mineur, Db (Réb) est le VIe degré. Utilisé en C mineur, Db peut être analysé comme un emprunt à la tonalité de F mineur — ce qui explique sa couleur particulièrement étrangère." },
  { q:"La progression Am–F–C–G est la base de nombreuses chansons pop. F et C ont ici les fonctions :", opts:["T–D","SD–T","D–SD","SD–SD"], a:1, fb:"F = sous-dominante (IVe degré de C). C = tonique (Ier degré de C). Après Am (tonique) : Am(T)–F(SD)–C(T)–G(D). La séquence complète est T–SD–T–D." },
  { q:"En A mineur harmonique, le Ve degré est :", opts:["Em","E7","Edim","E majeur"], a:1, fb:"En A mineur harmonique, le VIIe degré est G# (Sol#). L'accord construit sur Mi est E–G#–B–D = E7. La mineure harmonique crée la dominante avec sa 7e mineure." },
  { q:"Qu'est-ce que la minorisation d'un accord ?", opts:["Le jouer plus grave","Abaisser sa tierce majeure d'un demi-ton pour le rendre mineur","Le renverser","Le transposer à la quinte"], a:1, fb:"La minorisation consiste à abaisser la tierce d'un accord majeur d'un demi-ton : E → Eb transforme C en Cm. Technique de transition très expressive utilisée notamment dans les codas romantiques." },
  { q:"La progression C–C/B–Am–Am/G–F–G–C utilise :", opts:["Un cycle des quintes","Une ligne de basse descendante conjoncte (Do–Si–La–Sol–Fa–Sol–Do)","Une série d'emprunts","Une basse de chaconne baroque"], a:1, fb:"La basse joue C–B–A–G–F–G–C — une descente mélodique puis une montée vers la résolution. Ce type de basse linéaire est caractéristique de nombreuses ballades pop et rock." },

  { q:"En C mineur, quelles notes forment le triton fonctionnel ?", opts:["Do–Sol","Fa–Si (F–B)","Ré–Lab","Mi♭–Si♭"], a:1, fb:"Le triton fonctionnel de C mineur est F–B (Fa–Si), exactement comme en C majeur. C'est ce triton commun qui permet les emprunts entre les deux tonalités." },
  { q:"Pourquoi G7 est-il le même en C majeur et C mineur ?", opts:["Par coïncidence","Car G7 contient F et B — le triton commun aux deux gammes","Car G est le Ve degré des deux","Car G7 n'appartient à aucune des deux"], a:1, fb:"G7 = G–B–D–F. Il contient le triton F–B, commun à C majeur et C mineur harmonique. C'est pourquoi la dominante G7 fonctionne dans les deux tonalités — et permet les emprunts." },
  { q:"En A majeur, quel accord serait un emprunt de A mineur naturel ?", opts:["D majeur","F# mineur","F majeur","G majeur"], a:2, fb:"A mineur naturel contient F naturel (Fa). En A majeur, F est élevé en F# — F naturel est donc un emprunt à A mineur. F majeur en A majeur = bVI emprunté." },
  { q:"La couleur du bVII emprunté (ex : Bb en C) est souvent décrite comme :", opts:["Dramatique et pathétique","Modale, ample et rock","Douce et sacrée","Mystérieuse et suspendue"], a:1, fb:"Le bVII (comme Bb en C majeur) crée une couleur modale — souvent qualifiée de 'rock' ou de 'folk'. Il adoucit la tension sans créer le chromatisme intense du napolitain." },
  { q:"Quelle suite harmonique est à la base du 12-bar blues ?", opts:["Le cycle des quintes en mineur","La basse de chaconne","L'alternance I–IV–V avec répétition","Le napolitain ♭II6–V–I"], a:2, fb:"Le blues sur 12 mesures repose sur I–IV–V : 4 mesures sur I, 2 sur IV, 2 sur I, 2 sur V, 2 sur I. C'est l'extension fonctionnelle la plus simple autour de T–SD–D–T." },
  { q:"La progression Am–G–F–E7 en A mineur illustre :", opts:["Un cycle des quintes","Une descente par degrés conjoints vers la dominante","Un emprunt à C majeur","Une suite de cadences rompues"], a:1, fb:"Am(I)–G(VII)–F(VI)–E7(V) : la progression descend par degrés conjoints vers la dominante E7. E7 contient G# (sensible de A mineur harmonique) — le triton fonctionnel de A mineur." },
  { q:"Quel compositeur romantique est célèbre pour ses utilisations de l'accord napolitain ?", opts:["Bach","Mozart","Chopin","Haydn"], a:2, fb:"Chopin utilise abondamment l'accord napolitain dans ses nocturnes et ballades — notamment pour accentuer les moments de tension dramatique et de mélancolie profonde." },
  { q:"En C mineur, quelle progression résume le mieux la logique SD–D–T avec emprunts ?", opts:["C–F–G7–C","Cm–Fm–G7–Cm","Cm–Db/F–G7–Cm","Cm–G7–Fm–Cm"], a:2, fb:"Cm(T) → Db/F(napolitain, SD) → G7(D) → Cm(T). Le napolitain agit comme une sous-dominante renforcée avant la dominante — enchaînement SD–D–T en version dramatique." },
  { q:"La basse de chaconne diffère du cycle des quintes car :", opts:["Elle utilise des accords majeurs","Elle crée une ligne mélodique descendante à la basse, pas un mouvement de quinte à chaque accord","Elle est plus rapide","Elle reste toujours sur le même accord"], a:1, fb:"Le cycle des quintes est défini par un mouvement de quinte entre les fondamentales. La basse de chaconne crée une ligne mélodique conjoncte ou par tierces — l'identité vient de la basse ostinato, pas du mouvement harmonique." },
];


const QUIZ_COUNT = 8;

// ─── Styles ───────────────────────────────────────────────────────────────────

const S = {
  wrap:     { fontFamily: "var(--font-sans, system-ui)", maxWidth: 720, margin: "0 auto", padding: "0 1rem 3rem" } as React.CSSProperties,
  header:   { padding: "1.5rem 0 1rem", borderBottom: "0.5px solid #e5e5e5", marginBottom: "1.25rem" } as React.CSSProperties,
  badge:    { display: "inline-block", background: "#E6F1FB", color: "#185FA5", fontSize: 11, fontWeight: 500, padding: "2px 10px", borderRadius: 20, marginBottom: 6 } as React.CSSProperties,
  h1:       { fontSize: 26, fontWeight: 500, color: "#111", margin: 0 } as React.CSSProperties,
  subtitle: { fontSize: 14, color: "#666", marginTop: 4, lineHeight: 1.6 } as React.CSSProperties,
  nav:      { display: "flex", gap: 6, flexWrap: "wrap" as const, marginBottom: "1.5rem" },
  pill:     (active: boolean): React.CSSProperties => ({
    fontSize: 12, padding: "5px 14px",
    border: `0.5px solid ${active ? "#333" : "#ddd"}`,
    borderRadius: 20, cursor: "pointer",
    background: active ? "#111" : "transparent",
    color: active ? "#fff" : "#666",
    transition: "all .15s",
  }),
  stitle:   { fontSize: 17, fontWeight: 500, color: "#111", marginBottom: 8 } as React.CSSProperties,
  sbody:    { fontSize: 14, color: "#555", lineHeight: 1.75, marginBottom: "1rem" } as React.CSSProperties,
  infoBox:  { borderLeft: "2px solid #185FA5", padding: "8px 14px", background: "#E6F1FB", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#0C447C", lineHeight: 1.6 } as React.CSSProperties,
  warnBox:  { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
};

// ─── Composant ────────────────────────────────────────────────────────────────

export default function Cours5() {
  const [activeSection, setActiveSection] = useState("mineur");
  const i18n = useCoursI18n("cours5");
  const [selDeg,    setSelDeg]    = useState<number | null>(null);
  const [selEmprunt, setSelEmprunt] = useState<number | null>(null);
  const [selSuite,  setSelSuite]  = useState<string | null>(null);

  const [quizQuestions, setQuizQuestions] = useState(() => shuffleArray(ALL_QUESTIONS).slice(0, QUIZ_COUNT));
  const [quizIdx,      setQuizIdx]      = useState(0);
  const [quizScore,    setQuizScore]    = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizDone,     setQuizDone]     = useState(false);
  const [selectedOpt,  setSelectedOpt]  = useState<number | null>(null);

  const pianoRef = useRef<PianoPlayerRef>(null);

  const answerQuiz = (i: number) => {
    if (quizAnswered) return;
    setSelectedOpt(i); setQuizAnswered(true);
    if (i === quizQuestions[quizIdx].a) setQuizScore(s => s + 1);
  };
  const nextQuiz = () => {
    if (quizIdx + 1 >= QUIZ_COUNT) { setQuizDone(true); }
    else { setQuizIdx(i => i + 1); setQuizAnswered(false); setSelectedOpt(null); }
  };
  const resetQuiz = () => {
    setQuizQuestions(shuffleArray(ALL_QUESTIONS).slice(0, QUIZ_COUNT));
    setQuizIdx(0); setQuizScore(0); setQuizAnswered(false); setSelectedOpt(null); setQuizDone(false);
  };

  return (
    <div style={S.wrap}>
      <div style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0, overflow: "hidden" }}>
        <PianoPlayer ref={pianoRef} octaves={3} startOctave={2} showLabels={false} />
      </div>

      <div style={S.header}>
        <span style={S.badge}>{i18n.badge}</span>
        <h1 style={S.h1}>{i18n.title}</h1>
        <p style={S.subtitle}>{i18n.subtitle}</p>
      </div>

      <MaitreCard
        composer="Frédéric Chopin"
        period="1810–1849"
        emoji="🌩️"
        concept="Emprunts & Suites classiques"
        anecdote="Chopin avait une capacité extraordinaire à 'emprunter' des accords mineurs en mode majeur pour changer instantanément la couleur émotionnelle d'une phrase. Ses contemporains décrivaient cet effet comme un nuage qui passe devant le soleil — en un seul accord, l'atmosphère basculait du lumineux à l'orageux, sans jamais quitter la tonalité."
       lesson="On ne change pas de tonalité, on change temporairement d'éclairage."
        accentColor="#534AB7"
      />

      <nav style={S.nav}>
        {SECTIONS_IDS.map(id => (
          <button key={id} style={S.pill(activeSection === id)} onClick={() => setActiveSection(id)}>
            {i18n.sectionLabel(id)}
          </button>
        ))}
      </nav>

      {/* ══ MINEUR ══ */}
      {activeSection === "mineur" && (
        <div>
          <h2 style={S.stitle}>La gamme mineure et ses deux formes</h2>
          <p style={S.sbody}>
            La gamme mineure naturelle est issue de la gamme majeure — on la construit en partant de son VIe degré.
            Mais elle pose un problème : son triton n'est pas fonctionnel. Il ne pousse pas vers la tonique,
            ce qui prive l'accord de dominante de sa tension caractéristique.
          </p>

          <div style={S.warnBox}>
            En C mineur naturel, le Ve degré donne <strong>Gm</strong> (Sol–Si♭–Ré) — un accord mineur sans tension.
            Sans la sensible B naturel, pas de résolution forte vers Cm.
          </div>

          <p style={S.sbody}>
            La solution : la <strong>gamme mineure harmonique</strong>, qui élève le VIIe degré d'un demi-ton.
            En C mineur, Si♭ devient Si naturel. L'accord de dominante devient <strong>G7</strong> — avec le triton
            Si–Fa qui résout vers Do–Mi. La sensible est rétablie.
          </p>

          <div style={S.infoBox}>
            <strong>Règle pratique :</strong> on utilise la mineure harmonique pour construire les accords de
            tous les degrés <em>sauf</em> le Ier et le IIIe, où l'on préfère la mineure naturelle pour
            préserver leur stabilité.
          </div>

          {/* Tableau comparatif */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 8px", color: "#111" }}>
            Comparaison en C mineur
          </h3>
          <div style={{ overflowX: "auto", marginBottom: 20 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  {["Gamme","Structure","Notes (C mineur)","Problème"].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "6px 10px", fontWeight: 500, color: "#666" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { gamme:"Naturelle",    struct:"T–½–T–T–½–T–T",   notes:"C D Eb F G Ab Bb", pb:"Pas de sensible, Gm au lieu de G7" },
                  { gamme:"Harmonique",   struct:"T–½–T–T–½–1½–½",  notes:"C D Eb F G Ab B",  pb:"Intervalle augmenté Ab–B (1½ ton)" },
                ].map((row, i) => (
                  <tr key={row.gamme} style={{ borderBottom: "0.5px solid #f0f0f0", background: i%2===0?"#fff":"#fafafa" }}>
                    <td style={{ padding: "7px 10px", fontWeight: 500 }}>{row.gamme}</td>
                    <td style={{ padding: "7px 10px", fontFamily: "monospace", fontSize: 12, color: "#185FA5" }}>{row.struct}</td>
                    <td style={{ padding: "7px 10px", color: "#555" }}>{row.notes}</td>
                    <td style={{ padding: "7px 10px", color: "#888", fontSize: 12 }}>{row.pb}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Accords de C mineur */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 8px", color: "#111" }}>
            Les 7 accords de C mineur
          </h3>
          <p style={{ fontSize: 13, color: "#888", marginBottom: 12 }}>
            Cliquez sur un degré pour l'entendre.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 5, marginBottom: 12 }}>
            {CM_ACCORDS.map((d, i) => (
              <div key={d.deg}
                onClick={() => { setSelDeg(i); playChord(pianoRef as React.RefObject<PianoPlayerRef>, d.keys, 2); }}
                style={{ border: `0.5px solid ${selDeg===i ? d.fnColor : "#e5e5e5"}`, borderRadius: 8, padding: "8px 4px", textAlign: "center", cursor: "pointer", background: selDeg===i ? d.fnBg : "#fff", transition: "all .15s" }}>
                <div style={{ fontSize: 10, color: "#999", fontWeight: 500 }}>{d.deg}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#111", margin: "2px 0" }}>{d.chord}</div>
                <div style={{ fontSize: 10, color: "#888" }}>{d.type}</div>
                <div style={{ fontSize: 9, marginTop: 3, padding: "1px 4px", borderRadius: 8, display: "inline-block", background: d.fnBg, color: d.fnColor, fontWeight: 500 }}>{d.fn}</div>
              </div>
            ))}
          </div>

          {selDeg !== null && (
            <div style={{ border: `0.5px solid ${CM_ACCORDS[selDeg].fnColor}`, borderRadius: 10, padding: "12px 16px", background: CM_ACCORDS[selDeg].fnBg, marginBottom: 12 }}>
              <div style={{ fontSize: 15, fontWeight: 500, color: CM_ACCORDS[selDeg].fnColor, marginBottom: 4 }}>
                {CM_ACCORDS[selDeg].deg} — {CM_ACCORDS[selDeg].chord}
              </div>
              <p style={{ fontSize: 13, color: "#444", lineHeight: 1.6, margin: 0 }}>{CM_ACCORDS[selDeg].desc}</p>
            </div>
          )}
        </div>
      )}

      {/* ══ EMPRUNTS ══ */}
      {activeSection === "emprunts" && (
        <div>
          <h2 style={S.stitle}>Emprunts à l'homonyme</h2>
          <p style={S.sbody}>
            C majeur et C mineur sont <strong>homonymes</strong> — même tonique, mode différent.
            Ils partagent exactement le même triton fonctionnel (F–B), ce qui signifie que leurs accords
            remplissent les mêmes fonctions. On peut donc emprunter un accord de C mineur en C majeur
            (et inversement) sans briser la logique harmonique.
          </p>

          <div style={S.infoBox}>
            <strong>Règle de l'emprunt :</strong> un accord emprunté doit avoir la <em>même fonction</em>
            que l'accord qu'il remplace. On vérifie cela avec le triton fonctionnel de la tonalité principale.
          </div>

          <p style={{ fontSize: 13, color: "#888", marginBottom: 16 }}>
            Cliquez sur un emprunt pour l'entendre et voir ses applications.
          </p>

          {EMPRUNTS.map((e, i) => (
            <div
              key={e.chord}
              onClick={() => {
                setSelEmprunt(selEmprunt === i ? null : i);
                playChord(pianoRef as React.RefObject<PianoPlayerRef>, e.keys, 2);
              }}
              style={{
                border: `0.5px solid ${selEmprunt === i ? e.color : "#e5e5e5"}`,
                borderRadius: 10, marginBottom: 8, overflow: "hidden",
                cursor: "pointer", background: selEmprunt === i ? e.bg : "#fff", transition: "all .15s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px" }}>
                <span style={{ fontSize: 16, fontWeight: 700, color: e.color, minWidth: 52, fontFamily: "monospace" }}>
                  {e.chord}
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "#111" }}>
                    Emprunté à <em>{e.from}</em>
                  </div>
                  <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>
                    Fonction : {e.fn} — remplace {e.replaces}
                  </div>
                </div>
                <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 10, background: e.bg, color: e.color, border: `0.5px solid ${e.color}` }}>
                  {e.fn}
                </span>
              </div>

              {selEmprunt === i && (
                <div style={{ padding: "0 16px 14px", borderTop: `0.5px solid ${e.color}20` }}>
                  <p style={{ fontSize: 13, color: "#444", lineHeight: 1.65, margin: "10px 0 6px" }}>{e.desc}</p>
                  <p style={{ fontSize: 12, color: e.color, margin: "0 0 10px", fontStyle: "italic" }}>
                    Usage : {e.usage}
                  </p>
                  <button
                    onClick={(ev) => { ev.stopPropagation(); playChord(pianoRef as React.RefObject<PianoPlayerRef>, e.keys, 2); }}
                    style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${e.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: e.color }}
                  >
                    ▶ Écouter {e.chord}
                  </button>
                </div>
              )}
            </div>
          ))}

          {/* Tableau des fonctions en C maj / C min */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "24px 0 8px", color: "#111" }}>
            Fonctions en C majeur et C mineur
          </h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  {["Fonction","C majeur","C mineur"].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "6px 10px", fontWeight: 500, color: "#666" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { fn:"Tonique",        maj:"C – Am",   min:"Cm – Eb – Ab" },
                  { fn:"Sous-dominante", maj:"Dm – F",   min:"Ddim – Fm" },
                  { fn:"Dominante",      maj:"G7 – Bdim",min:"G7 – Bdim" },
                ].map((row, i) => (
                  <tr key={row.fn} style={{ borderBottom: "0.5px solid #f0f0f0", background: i%2===0?"#fff":"#fafafa" }}>
                    <td style={{ padding: "7px 10px", fontWeight: 500 }}>{row.fn}</td>
                    <td style={{ padding: "7px 10px", color: "#185FA5", fontFamily: "monospace" }}>{row.maj}</td>
                    <td style={{ padding: "7px 10px", color: "#993C1D", fontFamily: "monospace" }}>{row.min}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.warnBox}>
            C majeur et C mineur partagent la <strong>même dominante</strong> : G7 et Bdim.
            C'est le triton F–B commun qui les unifie — on peut passer de l'un à l'autre
            sans changer de dominante.
          </div>
        </div>
      )}

      {/* ══ SUITES CLASSIQUES ══ */}
      {activeSection === "classiques" && (
        <div>
          <h2 style={S.stitle}>Trois suites harmoniques incontournables</h2>
          <p style={S.sbody}>
            Certaines progressions ont traversé les siècles parce qu'elles combinent logique harmonique
            et beauté mélodique de la basse. Ces trois modèles sont la base de centaines de morceaux —
            du baroque au jazz en passant par le rock et la pop.
          </p>

          {SUITES.map((suite) => (
            <div
              key={suite.id}
              style={{
                border: `0.5px solid ${selSuite === suite.id ? suite.color : "#e5e5e5"}`,
                borderRadius: 10, marginBottom: 12, overflow: "hidden",
                background: selSuite === suite.id ? suite.bg : "#fff", transition: "all .15s",
              }}
            >
              <div
                style={{ padding: "14px 16px", cursor: "pointer" }}
                onClick={() => setSelSuite(selSuite === suite.id ? null : suite.id)}
              >
                <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 4 }}>
                  <span style={{ fontSize: 15, fontWeight: 500, color: selSuite === suite.id ? suite.color : "#111" }}>
                    {suite.name}
                  </span>
                </div>
                <div style={{ fontSize: 12, color: "#888", fontStyle: "italic", marginBottom: 6 }}>{suite.subtitle}</div>
                <p style={{ fontSize: 13, color: "#555", lineHeight: 1.65, margin: 0 }}>{suite.desc}</p>
              </div>

              {selSuite === suite.id && (
                <div style={{ padding: "0 16px 14px", borderTop: `0.5px solid ${suite.color}30` }}>
                  <p style={{ fontSize: 13, color: "#444", lineHeight: 1.65, margin: "10px 0 10px" }}>{suite.detail}</p>
                  <div style={{
                    fontFamily: "monospace", fontSize: 13, color: suite.color,
                    background: "rgba(255,255,255,0.7)", padding: "8px 12px",
                    borderRadius: 6, marginBottom: 12, letterSpacing: 1,
                  }}>
                    {suite.progression.join(" → ")}
                  </div>
                  <button
                    onClick={() => playProgression(pianoRef as React.RefObject<PianoPlayerRef>, suite.progression, 1000)}
                    style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${suite.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: suite.color }}
                  >
                    ▶ Écouter la progression
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* ══ QUIZ ══ */}
      {activeSection === "quiz" && (
        <div>
          <h2 style={S.stitle}>Entraînement</h2>

          {quizDone ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>{quizScore>=7?"🎹":quizScore>=5?"👍":"💪"}</div>
              <div style={{ fontSize: 20, fontWeight: 500, color: "#111", marginBottom: 4 }}>{i18n.t("score")} : {quizScore} / {QUIZ_COUNT}</div>
              <div style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
                {i18n.quizMessage(quizScore, QUIZ_COUNT)}
              </div>
              <button onClick={resetQuiz}
                style={{ fontSize: 13, padding: "8px 20px", border: "0.5px solid #185FA5", borderRadius: 20, cursor: "pointer", background: "#E6F1FB", color: "#185FA5" }}>
                {i18n.newQ}
              </button>
            </div>
          ) : (
            <div>
              <div style={{ fontSize: 12, color: "#999", marginBottom: 10 }}>
                {i18n.t("question")} {quizIdx + 1} {i18n.t("of")} {QUIZ_COUNT}
                <span style={{ marginLeft: 12, color: "#bbb" }}>{ALL_QUESTIONS.length} {i18n.t("questionsPool")}</span>
              </div>
              <div style={{ fontSize: 15, fontWeight: 500, color: "#111", lineHeight: 1.6, marginBottom: 16 }}>
                {quizQuestions[quizIdx].q}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {quizQuestions[quizIdx].opts.map((opt, i) => {
                  const isCorrect  = i === quizQuestions[quizIdx].a;
                  const isSelected = selectedOpt === i;
                  let bg="#fff", border="#e5e5e5", color="#333";
                  if (quizAnswered) {
                    if (isCorrect)       { bg="#E1F5EE"; border="#0F6E56"; color="#085041"; }
                    else if (isSelected) { bg="#FCEBEB"; border="#A32D2D"; color="#501313"; }
                  }
                  return (
                    <button key={i} onClick={() => answerQuiz(i)} disabled={quizAnswered}
                      style={{ fontSize: 13, padding: "10px 14px", border: `0.5px solid ${border}`, borderRadius: 8, cursor: quizAnswered?"default":"pointer", background: bg, color, textAlign: "left", transition: "all .12s" }}>
                      {opt}
                    </button>
                  );
                })}
              </div>
              {quizAnswered && (
                <div style={{ marginTop: 12, padding: "10px 14px", borderRadius: 8, background: selectedOpt===quizQuestions[quizIdx].a?"#E1F5EE":"#FCEBEB", fontSize: 13, color: selectedOpt===quizQuestions[quizIdx].a?"#085041":"#501313", lineHeight: 1.6 }}>
                  {quizQuestions[quizIdx].fb}
                </div>
              )}
              {quizAnswered && (
                <button onClick={nextQuiz}
                  style={{ marginTop: 12, fontSize: 13, padding: "7px 18px", border: "0.5px solid #333", borderRadius: 20, cursor: "pointer", background: "transparent", color: "#333" }}>
                  {quizIdx + 1 < QUIZ_COUNT ? i18n.nextQ : i18n.seeScore}
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
