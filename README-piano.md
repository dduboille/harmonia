# Harmonia — PianoPlayer & usePiano

## Installation

```bash
npm install tone @tonejs/piano
```

> `@tonejs/piano` charge automatiquement les samples **Salamander Grand Piano**
> depuis son CDN (les samples sont hébergés par Tone.js).
> Si tu veux héberger les samples toi-même (meilleure perf, offline), copie le
> dossier `node_modules/@tonejs/piano/audio` dans `public/audio/piano` et
> passe `baseUrl="/audio/piano"` au constructeur `Piano`.

---

## Fichiers

```
harmonia/
├── components/
│   └── PianoPlayer.tsx   ← Composant visuel SVG + audio
└── hooks/
    └── usePiano.ts       ← Hook autonome (sans visuel)
```

---

## PianoPlayer — Composant complet

```tsx
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import { useRef } from "react";

// Afficher un accord de Do majeur
<PianoPlayer
  highlightNotes={["Do", "Mi", "Sol"]}
  rootNote="Do"
  octaves={2}
  startOctave={3}
/>

// Afficher la gamme de Sol majeur avec points rouges
<PianoPlayer
  dotNotes={["Sol", "La", "Si", "Do", "Ré", "Mi", "Fa#"]}
  octaves={2}
  startOctave={3}
/>

// Utiliser la ref pour jouer des séquences
const pianoRef = useRef<PianoPlayerRef>(null);

<PianoPlayer ref={pianoRef} />

// Jouer une note
pianoRef.current?.playNote("Do", 3, { duration: 2 });

// Jouer un accord arpégé
pianoRef.current?.playChord(["Do", "Mi", "Sol"], 3, { arp: true });

// Jouer une progression II–V–I avec sustain
pianoRef.current?.playSequence([
  { notes: ["Ré", "Fa", "La", "Do"] },
  { notes: ["Sol", "Si", "Ré", "Fa"] },
  { notes: ["Do", "Mi", "Sol", "Si"] },
], { interval: 1.5, arp: true });
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `highlightNotes` | `NoteName[]` | `[]` | Notes surlignées en bleu |
| `rootNote` | `NoteName` | — | Note racine (surlignée en vert) |
| `dotNotes` | `NoteName[]` | `[]` | Notes avec point rouge (gammes) |
| `octaves` | `number` | `2` | Nombre d'octaves affichées |
| `startOctave` | `number` | `3` | Octave de départ (Do3 = C4 MIDI) |
| `showLabels` | `boolean` | `true` | Afficher noms des notes |
| `showOctaveMarkers` | `boolean` | `true` | Afficher Do3, Do4 sur les Do |
| `onNoteClick` | `(note, octave) => void` | — | Callback au clic |
| `className` | `string` | `""` | Classe CSS additionnelle |

---

## usePiano — Hook seul (sans visuel)

```tsx
import { usePiano } from "@/hooks/usePiano";

function MonComposant() {
  const { playNote, playChord, playSequence, isReady, isLoading } = usePiano();

  return (
    <button onClick={() => playChord(["Do", "Mi", "Sol"], 3, { arp: true })}>
      {isLoading ? "Chargement…" : "Jouer Do majeur"}
    </button>
  );
}
```

### API

```ts
playNote(note: string, octave?: number, opts?: PlayNoteOptions): Promise<void>
playChord(notes: string[], octave?: number, opts?: PlayChordOptions): Promise<void>
playSequence(chords: ChordDef[], opts?: PlaySequenceOptions): Promise<void>
```

### Options

```ts
interface PlayNoteOptions {
  duration?: number;   // secondes (défaut: 1.8)
  velocity?: number;   // 0–1 (défaut: 0.7)
  startTime?: number;  // offset en secondes (défaut: 0)
}

interface PlayChordOptions extends PlayNoteOptions {
  arp?: boolean;       // arpéger (défaut: false)
  arpDelay?: number;   // délai entre notes arpégées (défaut: 0.07s)
}

interface PlaySequenceOptions extends PlayChordOptions {
  interval?: number;   // secondes entre accords (défaut: 1.5)
}

interface ChordDef {
  notes: string[];
  octave?: number;     // défaut: 3
}
```

---

## Notes sur les noms de notes

Le composant utilise la notation **française** :

| Français | Anglais (MIDI) |
|----------|----------------|
| Do | C |
| Ré | D |
| Mi | E |
| Fa | F |
| Sol | G |
| La | A |
| Si | B |
| Do# | C# |
| Ré# / Mib | D# / Eb |
| Fa# | F# |
| Sol# / Lab | G# / Ab |
| La# / Sib | A# / Bb |

**Convention d'octave :** Do3 en français = C4 en MIDI (middle C = 261.63 Hz).

---

## Héberger les samples en local (optionnel, recommandé en prod)

```bash
# Copier les samples Salamander dans public/
cp -r node_modules/@tonejs/piano/audio public/audio/piano
```

```tsx
// Dans PianoPlayer.tsx, modifier le constructeur :
const piano = new Piano({
  velocities: 5,
  release: true,
  pedal: true,
  baseUrl: "/audio/piano/",  // ← servir depuis ton propre domaine
});
```

Cela évite la dépendance au CDN externe et accélère le chargement initial.
