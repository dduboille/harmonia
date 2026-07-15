# Studio de composition, phase 1 — Plan d'implémentation

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Un « Studio de composition » : importer un MusicXML (composé dans MuseScore), le graver sur portées, le jouer avec surlignage, et afficher l'analyse harmonique par mesure.

**Architecture :** Une page Pro `/[locale]/studio`. On réutilise le parseur MusicXML, le moteur d'analyse (route `/api/analyse-partition`) et `PianoPlayer` (Tone.js). La brique neuve est le rendu de partition, confié à **OpenSheetMusicDisplay (OSMD)**. Deux modules purs testés (planification de la lecture, extraction du MusicXML) ; le reste est composant client + intégration, vérifié au build et à la main.

**Tech Stack :** TypeScript strict, vitest, Next.js 16 App Router, React 19, `opensheetmusicdisplay` (nouvelle dépendance), `fflate` (déjà là), Tone.js via `PianoPlayer`.

**Spec :** `docs/superpowers/specs/2026-07-15-studio-composition-phase1-design.md`

**Contraintes d'environnement :**
- **NE JAMAIS lancer `npx tsc --noEmit`** : cela sature la mémoire de ce poste. Contrôle d'intégration : `NODE_OPTIONS="--max-old-space-size=8192" npm run build`.
- Tests : `npx vitest run`. La suite compte **268 tests** avant ce chantier.
- TypeScript strict, pas de `any`. Commentaires et identifiants en **français**, disant le POURQUOI. Textes UI en français.

**Ce qui existe et qu'on réutilise (à lire avant de commencer) :**
- `src/lib/musicxml-parse.ts` — `parseMusicXML(xml): ParsedScore` ; types `ParsedScore { fifths, mode, signature, notes: ParsedNote[], measures: ParsedMeasure[] }`, `ParsedNote { step, alter, octave, pc, midi, onset, duration, measure, beat, voice, part }`, `ParsedMeasure { numero, start, length }` ; `TPQ = 768` (ticks par noire).
- `src/app/api/analyse-partition/route.ts` — POST multipart `file` → `AnalysisResult` (Pro-gated). Gère `.mxl` (dézippé via `fflate`) et `.xml`/`.musicxml`. **On réutilise cette route telle quelle** pour l'analyse. `AnalysisResult` est exporté par `@/app/api/analyse-partition/route`.
- `src/components/AnalysePartition.tsx` — le client de l'analyseur (fetch de la route, onglets). À LIRE pour les styles et le type `AnalysisResult` en miroir.
- `src/components/PianoPlayer.tsx` — `PianoPlayerRef.playVoicing(specs: string[], { startTime, duration, velocity })`. Le spec d'une note est `"<nom>:<octave PianoPlayer>"` où octave PianoPlayer = octave standard − 1 (ex. Do4 → `"C:3"`).
- `src/app/[locale]/analyse-partition/page.tsx` — le patron d'une page Pro (auth → `getUserPlan` → `ProPaywall` si free → composant client).
- `src/app/[locale]/analyse/page.tsx` — le hub d'outils (où ajouter l'entrée « Studio »).

---

## Structure des fichiers

| Fichier | Responsabilité |
|---|---|
| `src/lib/studio-playback.ts` *(nouveau)* | `planifierLecture(score, tempo)` : `ParsedScore` → événements audio datés (pur). |
| `src/lib/lire-musicxml.ts` *(nouveau)* | Extraire le texte MusicXML d'un fichier `.mxl`/`.xml` côté navigateur (pur pour la partie logique). |
| `src/components/StudioScore.tsx` *(nouveau)* | Composant client OSMD : grave un MusicXML, expose le curseur. |
| `src/components/StudioAnalyse.tsx` *(nouveau)* | Panneau d'analyse par mesure, mesure courante surlignée. |
| `src/components/Studio.tsx` *(nouveau)* | Le client du studio : import → analyse + gravure + lecture. |
| `src/app/[locale]/studio/page.tsx` *(nouveau)* | Page Pro (paywall + `Studio`). |
| `src/app/[locale]/analyse/page.tsx` *(modifié)* | Entrée « Studio de composition » dans le hub. |

---

## Task 1 : La planification de la lecture

**Files:**
- Create: `src/lib/studio-playback.ts`
- Test: `src/lib/studio-playback.test.ts`

- [ ] **Step 1: Écrire les tests qui échouent**

Créer `src/lib/studio-playback.test.ts` :

```ts
import { describe, it, expect } from "vitest";
import { TPQ, type ParsedNote, type ParsedScore } from "./musicxml-parse";
import { planifierLecture, specDepuisMidi } from "./studio-playback";

function note(midi: number, onset: number, duration: number, voice = "1"): ParsedNote {
  return {
    step: "C", alter: 0, octave: 4, pc: ((midi % 12) + 12) % 12, midi,
    onset, duration, measure: 1, beat: 1, voice, part: "P1",
  };
}

function score(notes: ParsedNote[]): ParsedScore {
  return { fifths: 0, mode: "major", signature: "4/4", notes, measures: [
    { numero: 1, start: 0, length: 4 * TPQ },
  ] };
}

describe("specDepuisMidi — convention PianoPlayer (octave = standard − 1)", () => {
  it("Do4 (midi 60) → C:3", () => {
    expect(specDepuisMidi(60)).toBe("C:3");
  });
  it("La4 (midi 69) → A:3", () => {
    expect(specDepuisMidi(69)).toBe("A:3");
  });
});

describe("planifierLecture — onsets et durées en secondes", () => {
  it("à 60 BPM, une noire dure 1 s et commence à son onset réel", () => {
    // Une noire (TPQ ticks) qui attaque au 2e temps (onset = TPQ).
    const ev = planifierLecture(score([note(60, TPQ, TPQ)]), 60);
    expect(ev).toHaveLength(1);
    expect(ev[0].startTime).toBeCloseTo(1, 5);
    expect(ev[0].duration).toBeCloseTo(1, 5);
    expect(ev[0].spec).toBe("C:3");
  });

  it("le tempo change l'échelle de temps (120 BPM : deux fois plus vite)", () => {
    const ev = planifierLecture(score([note(60, TPQ, TPQ)]), 120);
    expect(ev[0].startTime).toBeCloseTo(0.5, 5);
    expect(ev[0].duration).toBeCloseTo(0.5, 5);
  });

  it("les voix simultanées produisent des événements au même instant", () => {
    const ev = planifierLecture(
      score([note(72, 0, 4 * TPQ, "1"), note(48, 0, 4 * TPQ, "2")]),
      60,
    );
    expect(ev).toHaveLength(2);
    expect(ev.every((e) => e.startTime === 0)).toBe(true);
    // La ronde de basse dure bien 4 s.
    expect(ev[1].duration).toBeCloseTo(4, 5);
  });

  it("les événements sont triés par instant de début", () => {
    const ev = planifierLecture(
      score([note(60, 2 * TPQ, TPQ), note(64, 0, TPQ), note(67, TPQ, TPQ)]),
      60,
    );
    expect(ev.map((e) => e.startTime)).toEqual([0, 1, 2]);
  });
});
```

- [ ] **Step 2: Lancer les tests, vérifier qu'ils échouent**

Run: `npx vitest run src/lib/studio-playback.test.ts`
Expected: FAIL — `Failed to resolve import "./studio-playback"`.

- [ ] **Step 3: Écrire le module**

Créer `src/lib/studio-playback.ts` :

```ts
/**
 * lib/studio-playback.ts
 * Harmonia — Planifier la LECTURE d'une partition importée dans le studio.
 *
 * Le parseur donne les notes en ticks (TPQ par noire) ; `PianoPlayer` joue en
 * SECONDES. Ce module fait la conversion : chaque note devient un événement daté,
 * prêt à être programmé. Pur — la programmation audio elle-même vit dans le composant.
 */

import { TPQ, type ParsedScore } from "./musicxml-parse";

/** Un événement audio : une note, quand elle sonne, combien de temps. */
export interface EvenementAudio {
  spec: string;      // "C:3" — convention PianoPlayer
  startTime: number; // secondes
  duration: number;  // secondes
  velocity: number;
  measure: number;   // pour un éventuel surlignage synchronisé
}

const NOMS_DIESE = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

/**
 * Spec PianoPlayer d'une hauteur midi. La justesse tient à la HAUTEUR (fréquence),
 * pas à l'orthographe : on nomme au dièse, l'octave PianoPlayer est l'octave
 * standard moins un (Do4 = midi 60 = « C:3 »).
 */
export function specDepuisMidi(midi: number): string {
  const nom = NOMS_DIESE[((midi % 12) + 12) % 12];
  const octaveStandard = Math.floor(midi / 12) - 1;
  return `${nom}:${octaveStandard - 1}`;
}

export function planifierLecture(score: ParsedScore, tempo: number): EvenementAudio[] {
  // tempo = noires par minute ; une noire vaut TPQ ticks.
  const secondesParTick = 60 / tempo / TPQ;

  return score.notes
    .map((n) => ({
      spec: specDepuisMidi(n.midi),
      startTime: n.onset * secondesParTick,
      duration: n.duration * secondesParTick,
      velocity: 0.75,
      measure: n.measure,
    }))
    .sort((a, b) => a.startTime - b.startTime);
}
```

- [ ] **Step 4: Lancer les tests, vérifier qu'ils passent**

Run: `npx vitest run src/lib/studio-playback.test.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/lib/studio-playback.ts src/lib/studio-playback.test.ts
git commit -m "feat(studio): planification de la lecture (ticks vers secondes)"
```

---

## Task 2 : L'extraction du MusicXML côté navigateur

**Contexte :** OSMD grave à partir du texte MusicXML. Pour un `.mxl` (archive zip), il faut le dézipper et trouver le vrai fichier — la même logique que la route, mais côté client.

**Files:**
- Create: `src/lib/lire-musicxml.ts`
- Test: `src/lib/lire-musicxml.test.ts`

- [ ] **Step 1: Écrire les tests qui échouent**

Créer `src/lib/lire-musicxml.test.ts` :

```ts
import { describe, it, expect } from "vitest";
import { cheminRootfile } from "./lire-musicxml";

describe("cheminRootfile — le MusicXML dans un .mxl", () => {
  it("lit le chemin déclaré par META-INF/container.xml", () => {
    const container = `<?xml version="1.0"?>
      <container><rootfiles>
        <rootfile full-path="score.xml" media-type="application/vnd.recordare.musicxml+xml"/>
      </rootfiles></container>`;
    expect(cheminRootfile(container)).toBe("score.xml");
  });

  it("gère un chemin en sous-dossier", () => {
    const container = `<rootfile full-path="MuseScore/partition.musicxml"/>`;
    expect(cheminRootfile(container)).toBe("MuseScore/partition.musicxml");
  });

  it("rend null si aucun rootfile", () => {
    expect(cheminRootfile("<container></container>")).toBeNull();
  });
});
```

- [ ] **Step 2: Lancer les tests, vérifier qu'ils échouent**

Run: `npx vitest run src/lib/lire-musicxml.test.ts`
Expected: FAIL.

- [ ] **Step 3: Écrire le module**

Créer `src/lib/lire-musicxml.ts` :

```ts
/**
 * lib/lire-musicxml.ts
 * Harmonia — Extraire le texte MusicXML d'un fichier déposé, côté NAVIGATEUR
 * (OSMD grave à partir de ce texte). Même logique que la route serveur, mais ici
 * on ne fait que dézipper et lire — pas d'analyse.
 */

import { unzipSync, strFromU8 } from "fflate";

/** Chemin du MusicXML déclaré dans META-INF/container.xml, ou null. */
export function cheminRootfile(containerXml: string): string | null {
  const m = /full-path="([^"]+)"/.exec(containerXml);
  return m ? m[1] : null;
}

/**
 * Texte MusicXML d'un fichier `.mxl` (archive) ou `.xml`/`.musicxml` (texte).
 * Pour un `.mxl` : on suit le rootfile déclaré, avec repli sur le premier `.xml`
 * hors META-INF.
 */
export async function extraireMusicXML(file: File): Promise<string> {
  const nom = file.name.toLowerCase();
  if (!nom.endsWith(".mxl")) return file.text();

  const buffer = await file.arrayBuffer();
  const archive = unzipSync(new Uint8Array(buffer));

  let chemin: string | null = null;
  const container = archive["META-INF/container.xml"];
  if (container) chemin = cheminRootfile(strFromU8(container));
  if (!chemin || !archive[chemin]) {
    chemin =
      Object.keys(archive).find(
        (k) => !k.startsWith("META-INF") && (k.endsWith(".xml") || k.endsWith(".musicxml")),
      ) ?? null;
  }
  if (!chemin || !archive[chemin]) {
    throw new Error("Archive .mxl invalide : aucun MusicXML trouvé.");
  }
  return strFromU8(archive[chemin]);
}
```

- [ ] **Step 4: Lancer les tests, vérifier qu'ils passent**

Run: `npx vitest run src/lib/lire-musicxml.test.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/lib/lire-musicxml.ts src/lib/lire-musicxml.test.ts
git commit -m "feat(studio): extraction du MusicXML cote navigateur (.mxl / .xml)"
```

---

## Task 3 : Le rendu de la partition (OSMD) — trancher le pari tôt

**Contexte :** c'est ici qu'on valide le choix d'OSMD. Installer, graver un MusicXML, exposer un curseur. Si OSMD s'avère inutilisable (conflit avec le `vexflow` présent, bundle démesuré), le signaler AVANT d'aller plus loin — repli Verovio.

**Files:**
- Create: `src/components/StudioScore.tsx`
- Modify: `package.json` (ajout d'`opensheetmusicdisplay`)

- [ ] **Step 1: Installer OSMD**

Run: `npm install opensheetmusicdisplay`
Puis vérifier qu'il s'installe proprement à côté du `vexflow` existant (OSMD embarque sa propre version). Noter dans le rapport la version installée et tout avertissement de peer-dependency.

- [ ] **Step 2: Écrire le composant**

Créer `src/components/StudioScore.tsx`. Il grave un MusicXML et expose, par `ref`, un curseur pour le surlignage.

```tsx
"use client";

import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";

/**
 * Rend une partition MusicXML avec OpenSheetMusicDisplay. OSMD a besoin du DOM :
 * on l'importe DYNAMIQUEMENT (jamais au rendu serveur), et on ne le charge qu'au
 * montage. Le curseur intégré, exposé par `ref`, sert au surlignage de lecture.
 */
export interface StudioScoreRef {
  curseurDebut(): void;
  curseurSuivant(): void;
  curseurCacher(): void;
}

interface Props {
  musicxml: string;
}

const StudioScore = forwardRef<StudioScoreRef, Props>(function StudioScore({ musicxml }, ref) {
  const conteneur = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- OSMD n'a pas de type stable exporté proprement selon les versions ; on cible la surface qu'on utilise.
  const osmdRef = useRef<any>(null);
  const [erreur, setErreur] = useState<string | null>(null);

  useEffect(() => {
    let annule = false;
    (async () => {
      if (!conteneur.current) return;
      try {
        const { OpenSheetMusicDisplay } = await import("opensheetmusicdisplay");
        if (annule) return;
        const osmd = new OpenSheetMusicDisplay(conteneur.current, {
          autoResize: true,
          drawTitle: true,
        });
        await osmd.load(musicxml);
        if (annule) return;
        osmd.render();
        osmdRef.current = osmd;
      } catch (e) {
        setErreur("Impossible d'afficher cette partition.");
        console.error("OSMD:", e);
      }
    })();
    return () => { annule = true; };
  }, [musicxml]);

  useImperativeHandle(ref, () => ({
    curseurDebut() {
      const c = osmdRef.current?.cursor;
      if (c) { c.reset(); c.show(); }
    },
    curseurSuivant() { osmdRef.current?.cursor?.next(); },
    curseurCacher() { osmdRef.current?.cursor?.hide(); },
  }));

  if (erreur) {
    return <div style={{ color: "#c0392b", fontSize: 13, padding: 16 }}>{erreur}</div>;
  }
  return <div ref={conteneur} style={{ width: "100%", overflowX: "auto" }} />;
});

export default StudioScore;
```

- [ ] **Step 3: Vérifier au build**

Run: `NODE_OPTIONS="--max-old-space-size=8192" npm run build`
Expected: build réussi (le composant est client, `import()` dynamique). **Jamais `npx tsc --noEmit`.**

Si le build échoue à cause d'OSMD (SSR, WASM, types), **c'est le moment de trancher** : documenter le blocage, et proposer le repli Verovio plutôt que forcer. Sinon, continuer.

- [ ] **Step 4: Commit**

```bash
git add src/components/StudioScore.tsx package.json package-lock.json
git commit -m "feat(studio): gravure de la partition via OpenSheetMusicDisplay"
```

---

## Task 4 : Le panneau d'analyse

**Files:**
- Create: `src/components/StudioAnalyse.tsx`

- [ ] **Step 1: Écrire le composant**

Créer `src/components/StudioAnalyse.tsx`. Il reçoit l'`AnalysisResult` (même type que l'analyseur) et l'affiche **par mesure**, la mesure `mesureActive` surlignée. Réutiliser les conventions de style de `AnalysePartition.tsx` (badges de fonction, catégories chromatiques, plan tonal). Mettre le type `AnalysisResult` en miroir (ou l'importer depuis `@/app/api/analyse-partition/route`).

Structure indicative :

```tsx
"use client";

import React from "react";
import type { AnalysisResult } from "@/app/api/analyse-partition/route";

/**
 * L'analyse harmonique en regard de la partition : une ligne par mesure (accords,
 * degrés, fonctions), la mesure en cours de lecture surlignée. Le plan tonal est
 * rappelé en tête. C'est le pendant pédagogique de la gravure.
 */
export default function StudioAnalyse({
  analyse,
  mesureActive,
}: {
  analyse: AnalysisResult;
  mesureActive: number | null;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {/* Plan tonal (régions) en tête, s'il y a modulation */}
      {analyse.planTonal.regions.length > 1 && (
        <div style={{ /* bandeaux colorés des régions, cf. AnalysePartition onglet Plan tonal */ }}>
          {/* … */}
        </div>
      )}

      {/* Une ligne par mesure */}
      {analyse.mesures.map((m) => (
        <div
          key={m.numero}
          style={{
            background: m.numero === mesureActive ? "#F0EBF8" : "#fff",
            border: "0.5px solid #e8e3db", borderRadius: 8, padding: "8px 12px",
            transition: "background .15s",
          }}
        >
          <span style={{ fontSize: 11, color: "#888", marginRight: 8 }}>m. {m.numero}</span>
          {m.accords.map((a, i) => (
            <span key={i} style={{ marginRight: 10, fontSize: 13 }}>
              <strong>{a.rootFr}{a.quality}</strong>{" "}
              <span style={{ color: "#5C3D6E" }}>{a.degree}</span>{" "}
              <span style={{ color: "#999", fontSize: 11 }}>{a.fonction}</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
```

**Note à l'implémenteur :** reprends le rendu riche des fonctions/catégories/plan tonal de `AnalysePartition.tsx` (badges `FONC_STYLE`, `CAT_STYLE`, régions du plan tonal) pour la cohérence visuelle. Ne réinvente pas les couleurs.

- [ ] **Step 2: Vérifier au build**

Run: `NODE_OPTIONS="--max-old-space-size=8192" npm run build`
Expected: succès.

- [ ] **Step 3: Commit**

```bash
git add src/components/StudioAnalyse.tsx
git commit -m "feat(studio): panneau d'analyse par mesure"
```

---

## Task 5 : Le studio — import, gravure, lecture, analyse

**Files:**
- Create: `src/components/Studio.tsx`
- Create: `src/app/[locale]/studio/page.tsx`
- Modify: `src/app/[locale]/analyse/page.tsx`

- [ ] **Step 1: Le composant client `Studio.tsx`**

Assemble tout :
1. **Zone de dépôt** (comme `AnalysePartition`) acceptant `.mxl`/`.xml`/`.musicxml`, max 5 Mo.
2. Au dépôt : en parallèle, `extraireMusicXML(file)` (pour OSMD) **et** POST du fichier à `/api/analyse-partition` (pour l'analyse). Gérer erreurs / chargement / 403 (non-Pro, ne devrait pas arriver puisque la page gate déjà).
3. Rendre `<StudioScore musicxml={xml} ref={scoreRef} />` + les contrôles de lecture + `<StudioAnalyse analyse={analyse} mesureActive={mesureActive} />`.
4. **Lecture** : au clic « Lire », `planifierLecture(scoreParsé, tempo)` — mais on n'a que l'XML côté client ; parse-le avec `parseMusicXML(xml)` (le lib est pur, utilisable côté client) pour obtenir le `ParsedScore`, puis programme chaque événement via `pianoRef.current.playVoicing([e.spec], { startTime, duration, velocity })`. En parallèle, avancer le surlignage de `mesureActive` selon les temps de début de mesure (calculés depuis `score.measures`), et piloter le curseur OSMD (`scoreRef.current.curseurDebut()` puis `curseurSuivant()` aux frontières) — **surlignage à la mesure, pas à la note** (cf. spec : rester simple). Bouton pause/stop qui coupe le son (`Tone.Transport`/le player) et cache le curseur.
5. `PianoPlayer` monté caché (comme dans `CompositionGuidee`).

Le surlignage de mesure est piloté par des `setTimeout` alignés sur les débuts de mesure en secondes ; garder les identifiants pour tout annuler à l'arrêt.

- [ ] **Step 2: La page Pro `studio/page.tsx`**

Calquer sur `analyse-partition/page.tsx` :

```tsx
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getUserPlan } from "@/lib/progression";
import { ProPaywall } from "@/components/Paywall";
import Studio from "@/components/Studio";

interface Props { params: Promise<{ locale: string }>; }

export default async function StudioPage({ params }: Props) {
  const { locale } = await params;
  const { userId } = await auth();
  if (!userId) redirect(`/${locale}/sign-in?redirect_url=/${locale}/studio`);

  const plan = await getUserPlan(userId);
  if (plan === "free") {
    return (
      <ProPaywall
        locale={locale}
        title="Studio de composition"
        description="Importez votre composition (MusicXML), visualisez-la sur portées, écoutez-la et obtenez son analyse harmonique complète. Réservé aux abonnés Pro."
      />
    );
  }
  return <Studio />;
}
```

Vérifier que la route `/[locale]/studio` est bien couverte par le middleware `proxy.ts` (elle l'est : toute page non listée en public exige un compte — c'est le comportement voulu ici).

- [ ] **Step 3: L'entrée dans le hub**

Dans `src/app/[locale]/analyse/page.tsx`, ajouter au tableau `TOOLS` :

```ts
{
  href: "studio",
  icon: "✎",
  title: "Studio de composition",
  desc: "Importez votre composition MusicXML — partition gravée, lecture audio et analyse harmonique.",
  pro: true,
},
```

- [ ] **Step 4: Vérifier**

Run: `npx vitest run` → tout vert (les 268 + les nouveaux des Tasks 1-2).
Run: `NODE_OPTIONS="--max-old-space-size=8192" npm run build` → succès. **Jamais `npx tsc --noEmit`.**

- [ ] **Step 5: Commit**

```bash
git add src/components/Studio.tsx "src/app/[locale]/studio/page.tsx" "src/app/[locale]/analyse/page.tsx"
git commit -m "feat(studio): page studio de composition — import, gravure, lecture, analyse"
```

---

## Task 6 : Vérification d'ensemble

- [ ] **Step 1:** `npx vitest run` — tout vert.
- [ ] **Step 2:** `NODE_OPTIONS="--max-old-space-size=8192" npm run build` — succès.
- [ ] **Step 3: Contrôle manuel** (`npm run dev`, `/studio`, connecté en Pro) :
  - importer un `.musicxml`/`.mxl` **exporté de MuseScore** (un choral, puis une pièce à deux portées) ;
  - la partition est **gravée fidèlement** (deux portées, voix, rythmes) ;
  - la **lecture** joue le morceau, la mesure courante est **surlignée** ;
  - l'**analyse** s'affiche par mesure et suit la lecture ;
  - un fichier à **anacrouse** : vérifier que l'analyse et la gravure restent alignées (point de vigilance de la spec).

  **C'est ce contrôle, et non les tests, qui dit si la phase 1 a atteint son but.** Rapporter ce qu'on voit — surtout tout décalage entre gravure OSMD et analyse.

---

## Auto-relecture

**Couverture de la spec :**
- Page Studio dédiée, Pro-gated → Task 5. ✅
- Rendu OSMD (deux portées, voix, rythmes) → Task 3 (avec point de décision « trancher tôt »). ✅
- Import `.mxl`/`.xml` côté client + analyse par la route → Tasks 2 et 5. ✅
- Lecture datée + surlignage mesure → Tasks 1 et 5. ✅
- Analyse par mesure synchronisée → Tasks 4 et 5. ✅
- Import seulement, pas d'édition/export → hors périmètre, respecté. ✅
- Non-régression de l'analyseur → aucune modification de la route ni du parseur. ✅

**Cohérence des types :** `ParsedScore`/`ParsedNote` (parseur) → `planifierLecture` (Task 1) ; `EvenementAudio` → `PianoPlayer.playVoicing` (Task 5) ; `AnalysisResult` (route) → `StudioAnalyse` (Task 4) et `Studio` (Task 5) ; `StudioScoreRef` (Task 3) piloté par `Studio` (Task 5).

**Les deux points de vigilance, redits :** (1) OSMD est un pari — la Task 3 le tranche au build avant qu'on bâtisse dessus ; repli Verovio documenté. (2) La synchronisation curseur/audio reste **à la mesure**, jamais promise à la note près — c'est le compromis validé.
