# Harmonia Mobile — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construire l'app mobile Harmonia (iOS + Android) avec générateur SATB, cours intégrés et monétisation RevenueCat freemium.

**Architecture:** Projet Expo SDK 52 indépendant dans `C:\Users\Dany Duboille\Desktop\harmonia-mobile\`. La logique SATB (satb-generator.ts, satb-voicings.ts, progressions-templates.ts) est portée telle quelle depuis le projet web Harmonia. L'audio utilise expo-av avec des fichiers .mp3 de piano bundlés. RevenueCat gère les abonnements iOS + Android.

**Tech Stack:** Expo SDK 52, Expo Router v4, TypeScript, NativeWind v4, RevenueCat (react-native-purchases), expo-av, Zustand, EAS Build

**Spec:** `docs/superpowers/specs/2026-06-11-harmonia-mobile-design.md`

---

## Fichiers créés / modifiés

```
harmonia-mobile/                          ← Nouveau projet (sibling à harmonia/)
├── app/
│   ├── _layout.tsx                       # Root layout — RevenueCat init + fonts
│   ├── onboarding.tsx                    # 3 slides + paywall (1er lancement)
│   └── (tabs)/
│       ├── _layout.tsx                   # Tab bar dark theme
│       ├── index.tsx                     # Accueil hub
│       ├── satb.tsx                      # Générateur SATB
│       ├── cours.tsx                     # Liste des cours
│       └── profil.tsx                    # Profil + abonnement
├── src/
│   ├── lib/
│   │   ├── satb-generator.ts             # Porté de harmonia/src/lib/
│   │   ├── satb-voicings.ts              # Porté de harmonia/src/lib/
│   │   └── audio.ts                      # Wrapper expo-av
│   ├── data/
│   │   ├── progressions-templates.ts     # Porté de harmonia/src/data/
│   │   └── cours-content.ts              # 12 leçons V1 (FR + EN)
│   ├── store/
│   │   └── useSatbStore.ts               # Zustand store global
│   ├── hooks/
│   │   ├── useRevenueCat.ts              # Hook abonnement Pro
│   │   └── useAudio.ts                   # Hook lecture audio SATB
│   └── components/
│       ├── SatbDisplay.tsx               # Visualisation 4 voix S/A/T/B
│       ├── ProGate.tsx                   # Wrapper contextuel paywall
│       ├── PaywallModal.tsx              # Modal paywall (onboarding + contextuel)
│       ├── ProgressionPicker.tsx         # Sélecteur progression avec verrous
│       ├── TonalitePicker.tsx            # Sélecteur tonalité avec verrous
│       └── CoursCard.tsx                 # Carte leçon (liste cours)
├── assets/
│   └── audio/                            # Fichiers .mp3 piano (E2–G5, ~44 notes)
├── __tests__/
│   ├── satb-generator.test.ts            # Tests unitaires moteur SATB
│   ├── audio.test.ts                     # Tests wrapper audio
│   └── useSatbStore.test.ts              # Tests store Zustand
├── app.json                              # Config Expo + EAS
├── babel.config.js                       # NativeWind plugin
├── tailwind.config.js                    # Couleurs dark theme
├── tsconfig.json                         # Paths alias @/
└── package.json
```

---

## Task 1 : Initialisation du projet Expo

**Files:**
- Create: `harmonia-mobile/` (projet entier)
- Create: `harmonia-mobile/package.json`
- Create: `harmonia-mobile/app.json`
- Create: `harmonia-mobile/tsconfig.json`
- Create: `harmonia-mobile/babel.config.js`
- Create: `harmonia-mobile/tailwind.config.js`

- [ ] **Étape 1 : Créer le projet Expo**

Dans `C:\Users\Dany Duboille\Desktop\` (PAS dans harmonia/) :

```bash
cd "C:\Users\Dany Duboille\Desktop"
npx create-expo-app@latest harmonia-mobile --template blank-typescript
cd harmonia-mobile
```

Résultat attendu : dossier `harmonia-mobile/` créé avec `app.json`, `package.json`, `App.tsx`.

- [ ] **Étape 2 : Installer Expo Router**

```bash
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

- [ ] **Étape 3 : Installer les dépendances principales**

```bash
npx expo install expo-av expo-font expo-splash-screen @expo/vector-icons
npm install nativewind@^4.0.1 tailwindcss zustand react-native-purchases@^8.0.0
npm install --save-dev @testing-library/react-native @types/react jest-expo
```

- [ ] **Étape 4 : Configurer app.json**

Remplacer le contenu de `app.json` :

```json
{
  "expo": {
    "name": "Harmonia",
    "slug": "harmonia-mobile",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "scheme": "harmonia",
    "userInterfaceStyle": "dark",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#0f0f23"
    },
    "ios": {
      "supportsTablet": false,
      "bundleIdentifier": "app.getharmonia.mobile",
      "buildNumber": "1"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#0f0f23"
      },
      "package": "app.getharmonia.mobile",
      "versionCode": 1
    },
    "plugins": [
      "expo-router",
      "expo-av",
      [
        "react-native-purchases",
        {
          "androidPublicApiKey": "REVENUECAT_ANDROID_KEY"
        }
      ]
    ],
    "experiments": {
      "typedRoutes": true
    }
  }
}
```

- [ ] **Étape 5 : Configurer babel.config.js**

```js
// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }]
    ],
    plugins: ['nativewind/babel'],
  };
};
```

- [ ] **Étape 6 : Configurer tailwind.config.js**

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0f0f23',
        surface:    '#12091f',
        border:     '#3d1f6e',
        primary:    '#7c3aed',
        'primary-light': '#a855f7',
        text:       '#e2d9f3',
        'text-muted': '#9d7fea',
        'text-disabled': '#64748b',
      },
    },
  },
  plugins: [],
};
```

- [ ] **Étape 7 : Configurer tsconfig.json**

```json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

- [ ] **Étape 8 : Supprimer App.tsx et créer app/_layout.tsx**

Supprimer `App.tsx`. Créer `app/_layout.tsx` :

```tsx
// app/_layout.tsx
import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import Purchases from 'react-native-purchases';

const REVENUECAT_IOS_KEY = 'REVENUECAT_IOS_KEY_HERE';

export default function RootLayout() {
  useEffect(() => {
    Purchases.configure({ apiKey: REVENUECAT_IOS_KEY });
  }, []);

  return (
    <>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#0f0f23' } }}>
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="cours/[id]" options={{ presentation: 'card' }} />
      </Stack>
    </>
  );
}
```

- [ ] **Étape 9 : Vérifier que l'app démarre**

```bash
npx expo start
```

Appuyer sur `i` (iOS simulator) ou `a` (Android emulator). Résultat attendu : écran blanc sans crash.

- [ ] **Étape 10 : Commit**

```bash
git init
git add .
git commit -m "feat: initialisation projet Expo — Harmonia Mobile"
```

---

## Task 2 : Navigation — Tab bar & écrans stubs

**Files:**
- Create: `app/(tabs)/_layout.tsx`
- Create: `app/(tabs)/index.tsx`
- Create: `app/(tabs)/satb.tsx`
- Create: `app/(tabs)/cours.tsx`
- Create: `app/(tabs)/profil.tsx`
- Create: `app/onboarding.tsx`

- [ ] **Étape 1 : Créer le layout des tabs**

```tsx
// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#0f0f23',
          borderTopColor: '#3d1f6e',
          borderTopWidth: 1,
        },
        tabBarActiveTintColor: '#7c3aed',
        tabBarInactiveTintColor: '#64748b',
        tabBarLabelStyle: { fontSize: 11, fontWeight: '600' },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Accueil',
          tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="satb"
        options={{
          title: 'SATB',
          tabBarIcon: ({ color, size }) => <Ionicons name="musical-notes" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="cours"
        options={{
          title: 'Cours',
          tabBarIcon: ({ color, size }) => <Ionicons name="book" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
```

- [ ] **Étape 2 : Créer les 4 écrans stubs**

```tsx
// app/(tabs)/index.tsx
import { View, Text } from 'react-native';
export default function HomeScreen() {
  return <View className="flex-1 bg-background items-center justify-center"><Text className="text-text text-xl">Accueil</Text></View>;
}
```

```tsx
// app/(tabs)/satb.tsx
import { View, Text } from 'react-native';
export default function SatbScreen() {
  return <View className="flex-1 bg-background items-center justify-center"><Text className="text-text text-xl">Générateur SATB</Text></View>;
}
```

```tsx
// app/(tabs)/cours.tsx
import { View, Text } from 'react-native';
export default function CoursScreen() {
  return <View className="flex-1 bg-background items-center justify-center"><Text className="text-text text-xl">Cours</Text></View>;
}
```

```tsx
// app/(tabs)/profil.tsx
import { View, Text } from 'react-native';
export default function ProfilScreen() {
  return <View className="flex-1 bg-background items-center justify-center"><Text className="text-text text-xl">Profil</Text></View>;
}
```

```tsx
// app/onboarding.tsx
import { View, Text } from 'react-native';
export default function OnboardingScreen() {
  return <View className="flex-1 bg-background items-center justify-center"><Text className="text-text text-xl">Onboarding</Text></View>;
}
```

- [ ] **Étape 3 : Vérifier la navigation**

```bash
npx expo start
```

Résultat attendu : tab bar visible en bas avec 4 onglets, navigation fonctionnelle entre eux.

- [ ] **Étape 4 : Commit**

```bash
git add .
git commit -m "feat: navigation tab bar — 4 écrans stubs"
```

---

## Task 3 : Port du moteur SATB depuis Harmonia web

**Files:**
- Create: `src/lib/satb-generator.ts`
- Create: `src/lib/satb-voicings.ts`
- Create: `src/data/progressions-templates.ts`
- Create: `__tests__/satb-generator.test.ts`

- [ ] **Étape 1 : Créer les dossiers src**

```bash
mkdir -p src/lib src/data src/store src/hooks src/components __tests__
```

- [ ] **Étape 2 : Copier les fichiers depuis Harmonia web**

Copier ces 3 fichiers depuis `C:\Users\Dany Duboille\Desktop\harmonia\src\` :
- `lib/satb-generator.ts` → `src/lib/satb-generator.ts`
- `lib/satb-voicings.ts` → `src/lib/satb-voicings.ts`
- `data/progressions-templates.ts` → `src/data/progressions-templates.ts`

```bash
cp "../harmonia/src/lib/satb-generator.ts" src/lib/satb-generator.ts
cp "../harmonia/src/lib/satb-voicings.ts" src/lib/satb-voicings.ts
cp "../harmonia/src/data/progressions-templates.ts" src/data/progressions-templates.ts
```

- [ ] **Étape 3 : Corriger l'import dans satb-generator.ts**

Ouvrir `src/lib/satb-generator.ts`. Trouver la ligne :
```ts
import type { ProgressionTemplate } from "@/data/progressions-templates";
```
La remplacer par :
```ts
import type { ProgressionTemplate } from "../data/progressions-templates";
```

- [ ] **Étape 4 : Écrire les tests unitaires**

```ts
// __tests__/satb-generator.test.ts
import { generateExercise } from '../src/lib/satb-generator';
import { PROGRESSION_TEMPLATES } from '../src/data/progressions-templates';

describe('generateExercise', () => {
  const iiVI = PROGRESSION_TEMPLATES.find(t => t.id === 'ii-v-i')!;

  it('génère 3 mesures pour II-V-I', () => {
    const result = generateExercise(iiVI, 'C', '1');
    expect(result.mesures).toHaveLength(3);
  });

  it('chaque mesure contient soprano, alto, ténor, basse', () => {
    const result = generateExercise(iiVI, 'C', '1');
    result.mesures.forEach(mesure => {
      expect(mesure.soprano).toHaveProperty('name');
      expect(mesure.soprano).toHaveProperty('octave');
      expect(mesure.alto).toHaveProperty('name');
      expect(mesure.tenor).toHaveProperty('name');
      expect(mesure.bass).toHaveProperty('name');
    });
  });

  it('soprano a un octave ≥ alto', () => {
    const result = generateExercise(iiVI, 'C', '1');
    result.mesures.forEach(m => {
      const sopOct = m.soprano.octave;
      const altOct = m.alto.octave;
      expect(sopOct).toBeGreaterThanOrEqual(altOct);
    });
  });

  it('génère pour toutes les tonalités supportées', () => {
    const tonalites = ['C', 'G', 'D', 'F', 'Am', 'Dm'];
    tonalites.forEach(ton => {
      expect(() => generateExercise(iiVI, ton, '1')).not.toThrow();
    });
  });
});
```

- [ ] **Étape 5 : Lancer les tests**

```bash
npx jest __tests__/satb-generator.test.ts --no-coverage
```

Résultat attendu : 4 tests PASS.

- [ ] **Étape 6 : Commit**

```bash
git add .
git commit -m "feat: port moteur SATB + tests unitaires (4 passing)"
```

---

## Task 4 : Zustand store

**Files:**
- Create: `src/store/useSatbStore.ts`
- Create: `__tests__/useSatbStore.test.ts`

- [ ] **Étape 1 : Écrire le test**

```ts
// __tests__/useSatbStore.test.ts
import { act } from '@testing-library/react-native';
import { useSatbStore } from '../src/store/useSatbStore';

describe('useSatbStore', () => {
  beforeEach(() => {
    useSatbStore.setState({
      selectedProgressionId: 'ii-v-i',
      selectedTonalite: 'C',
      doigte: '1',
      lastMesures: null,
      isProUser: false,
    });
  });

  it('met à jour la progression sélectionnée', () => {
    act(() => useSatbStore.getState().setProgressionId('i-iv-v'));
    expect(useSatbStore.getState().selectedProgressionId).toBe('i-iv-v');
  });

  it('met à jour la tonalité', () => {
    act(() => useSatbStore.getState().setTonalite('G'));
    expect(useSatbStore.getState().selectedTonalite).toBe('G');
  });

  it('remet lastMesures à null après changement de progression', () => {
    act(() => {
      useSatbStore.getState().setLastMesures([]);
      useSatbStore.getState().setProgressionId('i-iv-v');
    });
    expect(useSatbStore.getState().lastMesures).toBeNull();
  });
});
```

- [ ] **Étape 2 : Lancer le test (doit échouer)**

```bash
npx jest __tests__/useSatbStore.test.ts --no-coverage
```

Résultat attendu : FAIL — `useSatbStore` non défini.

- [ ] **Étape 3 : Implémenter le store**

```ts
// src/store/useSatbStore.ts
import { create } from 'zustand';
import type { SATBMeasure, Doigte } from '../lib/satb-generator';

interface SatbState {
  selectedProgressionId: string;
  selectedTonalite: string;
  doigte: Doigte;
  lastMesures: SATBMeasure[] | null;
  isProUser: boolean;
  setProgressionId: (id: string) => void;
  setTonalite: (ton: string) => void;
  setDoigte: (d: Doigte) => void;
  setLastMesures: (mesures: SATBMeasure[]) => void;
  setIsProUser: (val: boolean) => void;
}

export const useSatbStore = create<SatbState>((set) => ({
  selectedProgressionId: 'ii-v-i',
  selectedTonalite: 'C',
  doigte: '1',
  lastMesures: null,
  isProUser: false,
  setProgressionId: (id) => set({ selectedProgressionId: id, lastMesures: null }),
  setTonalite: (ton) => set({ selectedTonalite: ton, lastMesures: null }),
  setDoigte: (d) => set({ doigte: d, lastMesures: null }),
  setLastMesures: (mesures) => set({ lastMesures: mesures }),
  setIsProUser: (val) => set({ isProUser: val }),
}));
```

- [ ] **Étape 4 : Lancer les tests**

```bash
npx jest __tests__/useSatbStore.test.ts --no-coverage
```

Résultat attendu : 3 tests PASS.

- [ ] **Étape 5 : Commit**

```bash
git add .
git commit -m "feat: Zustand store SATB — selectedProgression, tonalite, doigte"
```

---

## Task 5 : Système audio (expo-av + soundfont)

**Files:**
- Create: `assets/audio/` (44 fichiers .mp3)
- Create: `src/lib/audio.ts`
- Create: `src/hooks/useAudio.ts`
- Create: `__tests__/audio.test.ts`

- [ ] **Étape 1 : Télécharger les fichiers audio piano**

Créer et exécuter ce script Node.js pour télécharger les notes de piano (E2–G5) depuis midi-js-soundfonts :

```bash
mkdir -p assets/audio
node -e "
const https = require('https');
const fs = require('fs');
const path = require('path');

const BASE = 'https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/acoustic_grand_piano-mp3/';
// Notes SATB range: E2 (MIDI 40) to G5 (MIDI 79)
const NOTES = ['E2','F2','Fs2','G2','Gs2','A2','As2','B2',
  'C3','Cs3','D3','Ds3','E3','F3','Fs3','G3','Gs3','A3','As3','B3',
  'C4','Cs4','D4','Ds4','E4','F4','Fs4','G4','Gs4','A4','As4','B4',
  'C5','Cs5','D5','Ds5','E5','F5','Fs5','G5'];

function download(note) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(path.join('assets/audio', note + '.mp3'));
    https.get(BASE + note + '.mp3', res => {
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', reject);
  });
}

(async () => {
  for (const note of NOTES) {
    process.stdout.write('Downloading ' + note + '... ');
    try { await download(note); console.log('OK'); }
    catch(e) { console.log('SKIP'); }
  }
})();
"
```

Résultat attendu : ~40 fichiers .mp3 dans `assets/audio/`.

- [ ] **Étape 2 : Créer le mapping note → fichier audio**

```ts
// src/lib/audio.ts
import { Audio } from 'expo-av';

// Mapping note française → nom de fichier (convention midi-js-soundfonts)
const FR_TO_FILE: Record<string, string> = {
  'Do':  'C', 'Do#': 'Cs', 'Réb': 'Cs',
  'Ré':  'D', 'Ré#': 'Ds', 'Mib': 'Ds',
  'Mi':  'E',
  'Fa':  'F', 'Fa#': 'Fs', 'Solb':'Fs',
  'Sol': 'G', 'Sol#':'Gs', 'Lab': 'Gs',
  'La':  'A', 'La#': 'As', 'Sib': 'As',
  'Si':  'B',
};

// Map des sons chargés en mémoire (cache)
const soundCache: Record<string, Audio.Sound> = {};

// Fichiers audio statiques — Expo doit les importer statiquement
// On utilise un index généré au build
const AUDIO_FILES: Record<string, number> = {
  'C2':  require('../../assets/audio/C2.mp3'),
  'Cs2': require('../../assets/audio/Cs2.mp3'),
  'D2':  require('../../assets/audio/D2.mp3'),
  'Ds2': require('../../assets/audio/Ds2.mp3'),
  'E2':  require('../../assets/audio/E2.mp3'),
  'F2':  require('../../assets/audio/F2.mp3'),
  'Fs2': require('../../assets/audio/Fs2.mp3'),
  'G2':  require('../../assets/audio/G2.mp3'),
  'Gs2': require('../../assets/audio/Gs2.mp3'),
  'A2':  require('../../assets/audio/A2.mp3'),
  'As2': require('../../assets/audio/As2.mp3'),
  'B2':  require('../../assets/audio/B2.mp3'),
  'C3':  require('../../assets/audio/C3.mp3'),
  'Cs3': require('../../assets/audio/Cs3.mp3'),
  'D3':  require('../../assets/audio/D3.mp3'),
  'Ds3': require('../../assets/audio/Ds3.mp3'),
  'E3':  require('../../assets/audio/E3.mp3'),
  'F3':  require('../../assets/audio/F3.mp3'),
  'Fs3': require('../../assets/audio/Fs3.mp3'),
  'G3':  require('../../assets/audio/G3.mp3'),
  'Gs3': require('../../assets/audio/Gs3.mp3'),
  'A3':  require('../../assets/audio/A3.mp3'),
  'As3': require('../../assets/audio/As3.mp3'),
  'B3':  require('../../assets/audio/B3.mp3'),
  'C4':  require('../../assets/audio/C4.mp3'),
  'Cs4': require('../../assets/audio/Cs4.mp3'),
  'D4':  require('../../assets/audio/D4.mp3'),
  'Ds4': require('../../assets/audio/Ds4.mp3'),
  'E4':  require('../../assets/audio/E4.mp3'),
  'F4':  require('../../assets/audio/F4.mp3'),
  'Fs4': require('../../assets/audio/Fs4.mp3'),
  'G4':  require('../../assets/audio/G4.mp3'),
  'Gs4': require('../../assets/audio/Gs4.mp3'),
  'A4':  require('../../assets/audio/A4.mp3'),
  'As4': require('../../assets/audio/As4.mp3'),
  'B4':  require('../../assets/audio/B4.mp3'),
  'C5':  require('../../assets/audio/C5.mp3'),
  'Cs5': require('../../assets/audio/Cs5.mp3'),
  'D5':  require('../../assets/audio/D5.mp3'),
  'Ds5': require('../../assets/audio/Ds5.mp3'),
  'E5':  require('../../assets/audio/E5.mp3'),
  'F5':  require('../../assets/audio/F5.mp3'),
  'Fs5': require('../../assets/audio/Fs5.mp3'),
  'G5':  require('../../assets/audio/G5.mp3'),
};

export function noteToFileKey(frenchName: string, octave: number): string | null {
  const base = FR_TO_FILE[frenchName];
  if (!base) return null;
  return `${base}${octave}`;
}

export async function preloadNote(frenchName: string, octave: number): Promise<void> {
  const key = noteToFileKey(frenchName, octave);
  if (!key || soundCache[key] || !AUDIO_FILES[key]) return;
  const { sound } = await Audio.Sound.createAsync(AUDIO_FILES[key], { shouldPlay: false });
  soundCache[key] = sound;
}

export async function playNote(frenchName: string, octave: number): Promise<void> {
  const key = noteToFileKey(frenchName, octave);
  if (!key || !AUDIO_FILES[key]) return;
  try {
    if (!soundCache[key]) await preloadNote(frenchName, octave);
    const sound = soundCache[key];
    await sound.setPositionAsync(0);
    await sound.playAsync();
  } catch {
    // Silence — ne pas crasher si fichier manquant
  }
}

export async function configureAudio(): Promise<void> {
  await Audio.setAudioModeAsync({
    allowsRecordingIOS: false,
    playsInSilentModeIOS: true,
    staysActiveInBackground: false,
  });
}
```

- [ ] **Étape 3 : Créer le hook useAudio**

```ts
// src/hooks/useAudio.ts
import { useCallback } from 'react';
import type { SATBMeasure } from '../lib/satb-generator';
import { playNote } from '../lib/audio';

const ARPEGGIO_DELAY_MS = 70;

export function useAudio() {
  const playMesure = useCallback(async (mesure: SATBMeasure) => {
    const voices = [mesure.bass, mesure.tenor, mesure.alto, mesure.soprano];
    for (let i = 0; i < voices.length; i++) {
      const voice = voices[i];
      if (i > 0) await new Promise(r => setTimeout(r, ARPEGGIO_DELAY_MS));
      playNote(voice.name, voice.octave);
    }
  }, []);

  const playSequence = useCallback(async (mesures: SATBMeasure[]) => {
    for (const mesure of mesures) {
      await playMesure(mesure);
      await new Promise(r => setTimeout(r, 900));
    }
  }, [playMesure]);

  return { playMesure, playSequence };
}
```

- [ ] **Étape 4 : Écrire les tests**

```ts
// __tests__/audio.test.ts
import { noteToFileKey } from '../src/lib/audio';

describe('noteToFileKey', () => {
  it('convertit Do:3 en C3', () => {
    expect(noteToFileKey('Do', 3)).toBe('C3');
  });
  it('convertit Fa#:4 en Fs4', () => {
    expect(noteToFileKey('Fa#', 4)).toBe('Fs4');
  });
  it('convertit Sib:3 en As3', () => {
    expect(noteToFileKey('Sib', 3)).toBe('As3');
  });
  it('retourne null pour une note inconnue', () => {
    expect(noteToFileKey('X', 3)).toBeNull();
  });
});
```

- [ ] **Étape 5 : Lancer les tests**

```bash
npx jest __tests__/audio.test.ts --no-coverage
```

Résultat attendu : 4 tests PASS.

- [ ] **Étape 6 : Commit**

```bash
git add .
git commit -m "feat: système audio expo-av + soundfont piano E2-G5"
```

---

## Task 6 : Hook RevenueCat

**Files:**
- Create: `src/hooks/useRevenueCat.ts`

- [ ] **Étape 1 : Créer le hook**

```ts
// src/hooks/useRevenueCat.ts
import { useEffect } from 'react';
import Purchases, { LOG_LEVEL, type PurchasesPackage } from 'react-native-purchases';
import { useSatbStore } from '../store/useSatbStore';

export const PRO_ENTITLEMENT = 'pro';
export const PRODUCT_MONTHLY = 'harmonia_pro_monthly';
export const PRODUCT_YEARLY  = 'harmonia_pro_yearly';

export function useRevenueCat() {
  const setIsProUser = useSatbStore(s => s.setIsProUser);
  const isProUser = useSatbStore(s => s.isProUser);

  useEffect(() => {
    Purchases.setLogLevel(LOG_LEVEL.ERROR);
    checkProStatus();
  }, []);

  async function checkProStatus() {
    try {
      const info = await Purchases.getCustomerInfo();
      const active = info.entitlements.active[PRO_ENTITLEMENT];
      setIsProUser(!!active);
    } catch {
      // Hors ligne : conserver le state actuel
    }
  }

  async function getOfferings(): Promise<PurchasesPackage[]> {
    try {
      const offerings = await Purchases.getOfferings();
      return offerings.current?.availablePackages ?? [];
    } catch {
      return [];
    }
  }

  async function purchasePackage(pkg: PurchasesPackage): Promise<boolean> {
    try {
      const { customerInfo } = await Purchases.purchasePackage(pkg);
      const active = customerInfo.entitlements.active[PRO_ENTITLEMENT];
      setIsProUser(!!active);
      return !!active;
    } catch {
      return false;
    }
  }

  async function restorePurchases(): Promise<boolean> {
    try {
      const info = await Purchases.restorePurchases();
      const active = info.entitlements.active[PRO_ENTITLEMENT];
      setIsProUser(!!active);
      return !!active;
    } catch {
      return false;
    }
  }

  return { isProUser, checkProStatus, getOfferings, purchasePackage, restorePurchases };
}
```

- [ ] **Étape 2 : Ajouter la clé RevenueCat iOS dans app/_layout.tsx**

Remplacer `'REVENUECAT_IOS_KEY_HERE'` par la vraie clé depuis le dashboard RevenueCat (https://app.revenuecat.com → Project → API Keys → Apple App Store).

> ⚠️ Ne pas committer la clé en clair — utiliser une variable d'environnement via `expo-constants` en production.

- [ ] **Étape 3 : Commit**

```bash
git add src/hooks/useRevenueCat.ts
git commit -m "feat: hook RevenueCat — checkProStatus, purchasePackage, restorePurchases"
```

---

## Task 7 : Contenu des cours (data)

**Files:**
- Create: `src/data/cours-content.ts`

- [ ] **Étape 1 : Créer le fichier de contenu**

```ts
// src/data/cours-content.ts
import type { ProgressionTemplate } from './progressions-templates';
import { PROGRESSION_TEMPLATES } from './progressions-templates';

export interface CoursLecon {
  id: string;
  titre: { fr: string; en: string };
  theme: string;
  isFree: boolean;
  corps: { fr: string; en: string };
  exempleProgressionId: string | null;  // id dans PROGRESSION_TEMPLATES, ou null
  quiz: {
    question: { fr: string; en: string };
    options: { fr: string[]; en: string[] };
    correctIndex: number;
  };
}

export const COURS_CONTENT: CoursLecon[] = [
  // ── Thème 1 : Règles de base ──────────────────────────────────────────────
  {
    id: 'intro-satb',
    titre: { fr: 'Introduction au SATB', en: 'Introduction to SATB' },
    theme: 'Règles de base',
    isFree: true,
    corps: {
      fr: 'Le SATB désigne les 4 voix du chœur classique : Soprano (voix aiguë féminine), Alto (voix grave féminine), Ténor (voix aiguë masculine) et Basse (voix grave masculine). Chaque voix évolue dans une tessiture propre qui détermine les notes qu\'elle peut chanter sans effort.\n\nLa soprano couvre Do4–Sol5, l\'alto Sol3–Do5, le ténor Do3–Sol4 et la basse Mi2–Do4.',
      en: 'SATB refers to the 4 voices of classical choral writing: Soprano (high female), Alto (low female), Tenor (high male) and Bass (low male). Each voice has its own range that determines which notes it can sing comfortably.\n\nSoprano covers C4–G5, Alto G3–C5, Tenor C3–G4 and Bass E2–C4.',
    },
    exempleProgressionId: 'ii-v-i',
    quiz: {
      question: { fr: 'Quelle est la tessiture de la voix de soprano ?', en: 'What is the soprano range?' },
      options: {
        fr: ['Do3–Sol4', 'Do4–Sol5', 'Sol3–Do5', 'Mi2–Do4'],
        en: ['C3–G4', 'C4–G5', 'G3–C5', 'E2–C4'],
      },
      correctIndex: 1,
    },
  },
  {
    id: 'regles-fondamentales',
    titre: { fr: 'Les règles fondamentales', en: 'Fundamental Rules' },
    theme: 'Règles de base',
    isFree: true,
    corps: {
      fr: 'Deux règles sont absolues en écriture SATB :\n\n1. **Pas de quintes parallèles** — deux voix ne peuvent pas se déplacer du même intervalle de quinte dans le même sens. Cela crée un effet creux et vide.\n\n2. **Pas d\'octaves parallèles** — deux voix ne peuvent pas se déplacer à l\'octave dans le même sens. Cela fusionne les voix et appauvrit la texture.',
      en: 'Two rules are absolute in SATB writing:\n\n1. **No parallel fifths** — two voices cannot move by the same fifth interval in the same direction. This creates a hollow, empty effect.\n\n2. **No parallel octaves** — two voices cannot move in octaves in the same direction. This merges the voices and impoverishes the texture.',
    },
    exempleProgressionId: 'i-iv-v',
    quiz: {
      question: { fr: 'Pourquoi évite-t-on les quintes parallèles ?', en: 'Why do we avoid parallel fifths?' },
      options: {
        fr: ['Elles sont trop graves', 'Elles créent un effet creux et appauvrissent la texture', 'Elles sont difficiles à chanter', 'Elles sont interdites par les conservatoires'],
        en: ['They are too low', 'They create a hollow effect and impoverish the texture', 'They are hard to sing', 'They are banned by conservatories'],
      },
      correctIndex: 1,
    },
  },
  {
    id: 'doublures',
    titre: { fr: 'Les doublures', en: 'Doublings' },
    theme: 'Règles de base',
    isFree: false,
    corps: {
      fr: 'Dans une triade à 3 sons placée à 4 voix, une note est nécessairement doublée. La règle générale : **doubler la fondamentale**. C\'est la note la plus stable harmoniquement.\n\nException : au 1er renversement, on peut doubler la basse (qui est alors la tierce). Au 2ème renversement (accord de quarte et sixte), il faut doubler la basse (qui est la quinte).',
      en: 'In a 3-note triad voiced for 4 parts, one note must be doubled. The general rule: **double the root**. It is the most harmonically stable note.\n\nException: in first inversion, doubling the bass (which is the third) is acceptable. In second inversion (6/4 chord), the bass (which is the fifth) must be doubled.',
    },
    exempleProgressionId: 'ii-v-i',
    quiz: {
      question: { fr: 'Quelle note double-t-on généralement dans un accord à l\'état fondamental ?', en: 'Which note do we typically double in a root position chord?' },
      options: {
        fr: ['La tierce', 'La quinte', 'La fondamentale', 'La septième'],
        en: ['The third', 'The fifth', 'The root', 'The seventh'],
      },
      correctIndex: 2,
    },
  },
  {
    id: 'mouvements-voix',
    titre: { fr: 'Mouvement des voix', en: 'Voice Movement' },
    theme: 'Règles de base',
    isFree: false,
    corps: {
      fr: 'Les voix peuvent se déplacer de 4 façons :\n\n- **Contraire** : une voix monte, l\'autre descend (le plus élégant)\n- **Oblique** : une voix se déplace, l\'autre reste sur la même note\n- **Direct** : les deux voix montent ou descendent (autorisé si pas de quintes/octaves)\n- **Parallèle** : les deux voix montent ou descendent du même intervalle (à surveiller)\n\nPrivilégier le mouvement contraire et les pas conjoints (demi-ton ou ton).',
      en: 'Voices can move in 4 ways:\n\n- **Contrary**: one voice rises, the other falls (most elegant)\n- **Oblique**: one voice moves, the other stays on the same note\n- **Direct**: both voices rise or fall (allowed if no fifths/octaves result)\n- **Parallel**: both voices rise or fall by the same interval (watch carefully)\n\nFavor contrary motion and stepwise movement (half step or whole step).',
    },
    exempleProgressionId: 'i-iv-i',
    quiz: {
      question: { fr: 'Quel type de mouvement vocal est généralement le plus élégant ?', en: 'Which type of voice movement is generally most elegant?' },
      options: {
        fr: ['Le mouvement parallèle', 'Le mouvement direct', 'Le mouvement contraire', 'Le mouvement oblique'],
        en: ['Parallel motion', 'Direct motion', 'Contrary motion', 'Oblique motion'],
      },
      correctIndex: 2,
    },
  },
  // ── Thème 2 : Cadences ────────────────────────────────────────────────────
  {
    id: 'cadence-parfaite',
    titre: { fr: 'La cadence parfaite', en: 'The Perfect Cadence' },
    theme: 'Cadences',
    isFree: true,
    corps: {
      fr: 'La cadence parfaite (ou cadence authentique) est le mouvement V → I, de la dominante vers la tonique. C\'est la résolution la plus forte de la musique tonale.\n\nEn Do majeur : Sol (V) → Do (I). La sensible (Si) monte d\'un demi-ton vers Do. La septième (Fa si présente) descend vers Mi. Ces résolutions obligatoires créent un sentiment puissant d\'arrivée.',
      en: 'The perfect cadence (or authentic cadence) is the movement V → I, from dominant to tonic. It is the strongest resolution in tonal music.\n\nIn C major: G (V) → C (I). The leading tone (B) rises by a half step to C. The seventh (F if present) falls to E. These obligatory resolutions create a powerful sense of arrival.',
    },
    exempleProgressionId: 'ii-v-i',
    quiz: {
      question: { fr: 'Dans la cadence parfaite en Do majeur, où va la sensible (Si) ?', en: 'In a perfect cadence in C major, where does the leading tone (B) resolve?' },
      options: {
        fr: ['Elle descend vers La', 'Elle reste sur Si', 'Elle monte vers Do', 'Elle descend vers Sol'],
        en: ['It falls to A', 'It stays on B', 'It rises to C', 'It falls to G'],
      },
      correctIndex: 2,
    },
  },
  {
    id: 'cadence-plagale',
    titre: { fr: 'La cadence plagale', en: 'The Plagal Cadence' },
    theme: 'Cadences',
    isFree: false,
    corps: {
      fr: 'La cadence plagale est le mouvement IV → I, de la sous-dominante vers la tonique. Elle a une sonorité plus douce, plus "amen" que la cadence parfaite.\n\nEn Do majeur : Fa (IV) → Do (I). Elle est très courante dans la musique religieuse et la musique pop. Elle n\'a pas de sensible qui monte — d\'où son caractère moins directif.',
      en: 'The plagal cadence is the movement IV → I, from subdominant to tonic. It has a softer, more "amen" quality than the perfect cadence.\n\nIn C major: F (IV) → C (I). Very common in religious music and pop. It has no leading tone rising — hence its less directive character.',
    },
    exempleProgressionId: 'i-iv-i',
    quiz: {
      question: { fr: 'Quel mouvement harmonique caractérise la cadence plagale ?', en: 'Which harmonic movement characterises the plagal cadence?' },
      options: {
        fr: ['V → I', 'IV → I', 'II → V', 'VI → I'],
        en: ['V → I', 'IV → I', 'II → V', 'VI → I'],
      },
      correctIndex: 1,
    },
  },
  {
    id: 'cadence-rompue',
    titre: { fr: 'La cadence rompue', en: 'The Deceptive Cadence' },
    theme: 'Cadences',
    isFree: false,
    corps: {
      fr: 'La cadence rompue part comme une cadence parfaite (V7) mais au lieu de résoudre sur I, elle résout sur VI. La surprise est l\'effet recherché.\n\nEn Do majeur : G7 → La mineur (VI). La sensible monte bien vers Do, mais la basse va vers La au lieu de Do. Très utilisée pour éviter une conclusion et prolonger la phrase musicale.',
      en: 'The deceptive cadence begins like a perfect cadence (V7) but instead of resolving to I, it resolves to VI. Surprise is the intended effect.\n\nIn C major: G7 → A minor (VI). The leading tone still rises to C, but the bass goes to A instead of C. Very useful for avoiding a conclusion and extending the musical phrase.',
    },
    exempleProgressionId: 'vi-iv-ii-v',
    quiz: {
      question: { fr: 'Dans la cadence rompue, V7 résout vers quel accord ?', en: 'In the deceptive cadence, V7 resolves to which chord?' },
      options: {
        fr: ['I', 'IV', 'VI', 'II'],
        en: ['I', 'IV', 'VI', 'II'],
      },
      correctIndex: 2,
    },
  },
  {
    id: 'renversements',
    titre: { fr: 'Les renversements en SATB', en: 'Inversions in SATB' },
    theme: 'Cadences',
    isFree: false,
    corps: {
      fr: 'Un accord est renversé quand une note autre que la fondamentale est à la basse. Les renversements permettent d\'obtenir des lignes de basse mélodiques.\n\n- **1er renversement** : tierce à la basse → accord de 6ème (chiffrage : 6)\n- **2ème renversement** : quinte à la basse → accord de quarte et sixte (chiffrage : 6/4)\n- **3ème renversement** (tétrades) : septième à la basse → accord de seconde (chiffrage : 4/2)',
      en: 'A chord is inverted when a note other than the root is in the bass. Inversions allow for melodic bass lines.\n\n- **First inversion**: third in bass → 6th chord\n- **Second inversion**: fifth in bass → 6/4 chord\n- **Third inversion** (7th chords): seventh in bass → 4/2 chord',
    },
    exempleProgressionId: 'i-iv-v',
    quiz: {
      question: { fr: 'Dans un accord de 1er renversement, quelle note est à la basse ?', en: 'In a first inversion chord, which note is in the bass?' },
      options: {
        fr: ['La fondamentale', 'La tierce', 'La quinte', 'La septième'],
        en: ['The root', 'The third', 'The fifth', 'The seventh'],
      },
      correctIndex: 1,
    },
  },
  // ── Thème 3 : Progressions avancées ──────────────────────────────────────
  {
    id: 'ii-v-i-jazz',
    titre: { fr: 'II–V–I : la progression jazz', en: 'II–V–I: The Jazz Progression' },
    theme: 'Progressions avancées',
    isFree: false,
    corps: {
      fr: 'La progression II–V–I est l\'épine dorsale du jazz. En Do majeur : Ré mineur 7 → Sol 7 → Do majeur 7.\n\nLe IIm7 prépare la dominante en ajoutant du mouvement harmonique. Le V7 crée la tension maximale avec sa sensible et sa septième. Le IMaj7 résout tout avec richesse grâce à la septième majeure.',
      en: 'The II–V–I progression is the backbone of jazz. In C major: D minor 7 → G7 → C major 7.\n\nIIm7 prepares the dominant by adding harmonic movement. V7 creates maximum tension with its leading tone and seventh. IMaj7 resolves everything richly thanks to the major seventh.',
    },
    exempleProgressionId: 'ii-v-i',
    quiz: {
      question: { fr: 'En Do majeur, quel est le II de la progression II–V–I ?', en: 'In C major, what is the II chord in a II–V–I?' },
      options: {
        fr: ['Fa majeur', 'Ré mineur 7', 'Sol 7', 'La mineur'],
        en: ['F major', 'D minor 7', 'G7', 'A minor'],
      },
      correctIndex: 1,
    },
  },
  {
    id: 'cycle-quintes',
    titre: { fr: 'Le cycle des quintes', en: 'The Circle of Fifths' },
    theme: 'Progressions avancées',
    isFree: false,
    corps: {
      fr: 'Le cycle des quintes est le mouvement harmonique par quintes descendantes (ou quartes montantes). C\'est le mouvement le plus naturel de la musique tonale.\n\nExemple en Do majeur : Do → Fa → Sib → Mib → Lab → ... Chaque accord résout naturellement vers le suivant en descendant d\'une quinte. Le II–V–I est une cellule de 2 quintes.',
      en: 'The circle of fifths is harmonic movement by descending fifths (or ascending fourths). It is the most natural movement in tonal music.\n\nExample in C major: C → F → Bb → Eb → Ab → ... Each chord resolves naturally to the next by descending a fifth. The II–V–I is a 2-fifth cell.',
    },
    exempleProgressionId: 'cycle-ii-v-i',
    quiz: {
      question: { fr: 'Dans le cycle des quintes, Sol résout naturellement vers quel accord ?', en: 'In the circle of fifths, G resolves naturally to which chord?' },
      options: {
        fr: ['Ré', 'Do', 'La', 'Fa'],
        en: ['D', 'C', 'A', 'F'],
      },
      correctIndex: 1,
    },
  },
  {
    id: 'emprunt-modal',
    titre: { fr: 'Emprunt modal en SATB', en: 'Modal Borrowing in SATB' },
    theme: 'Progressions avancées',
    isFree: false,
    corps: {
      fr: 'L\'emprunt modal consiste à emprunter des accords à la tonalité parallèle (même fondamentale, mode différent). En Do majeur, on peut emprunter à Do mineur.\n\nL\'accord le plus emprunté est le IVm (Fa mineur en Do majeur). Il donne un effet expressif et mélancolique. Il suffit d\'abaisser la tierce et la sixte de la gamme (Mi → Mib, La → Lab).',
      en: 'Modal borrowing consists of borrowing chords from the parallel key (same root, different mode). In C major, one can borrow from C minor.\n\nThe most common borrowed chord is IVm (F minor in C major). It gives an expressive, melancholic effect. Simply lower the third and sixth of the scale (E → Eb, A → Ab).',
    },
    exempleProgressionId: 'emprunt-modal',
    quiz: {
      question: { fr: 'En Do majeur, quel accord typique emprunte-t-on au mode mineur ?', en: 'In C major, which chord is typically borrowed from the minor mode?' },
      options: {
        fr: ['Ré majeur', 'Fa mineur (IVm)', 'Sol mineur', 'Si bémol majeur'],
        en: ['D major', 'F minor (IVm)', 'G minor', 'B flat major'],
      },
      correctIndex: 1,
    },
  },
  {
    id: 'chromatisme',
    titre: { fr: 'Chromatisme et accords de passage', en: 'Chromaticism and Passing Chords' },
    theme: 'Progressions avancées',
    isFree: false,
    corps: {
      fr: 'Les accords chromatiques s\'insèrent entre deux accords diatoniques pour créer des lignes de basse descendantes lisses.\n\nExemple classique : Do majeur → Do7 → Fa majeur. Do7 est un accord emprunté — sa septième (Sib) attire la fondamentale de Fa. Ce chromatisme dans la basse (Do → Do → Fa) crée une ligne mélodique expressive.',
      en: 'Chromatic chords are inserted between two diatonic chords to create smooth descending bass lines.\n\nClassic example: C major → C7 → F major. C7 is a borrowed chord — its seventh (Bb) is attracted to F\'s root. This bass chromaticism (C → C → F) creates an expressive melodic line.',
    },
    exempleProgressionId: 'chromatique',
    quiz: {
      question: { fr: 'Quel est le rôle principal des accords de passage chromatiques ?', en: 'What is the main role of chromatic passing chords?' },
      options: {
        fr: ['Créer de la dissonance maximale', 'Relier deux accords par une ligne de basse lisse', 'Remplacer la tonique', 'Éviter la dominante'],
        en: ['Create maximum dissonance', 'Connect two chords with a smooth bass line', 'Replace the tonic', 'Avoid the dominant'],
      },
      correctIndex: 1,
    },
  },
];

// Progressions disponibles pour les exemples de cours (filtrage des ids existants)
export function getExempleProgression(id: string | null): ProgressionTemplate | null {
  if (!id) return null;
  return PROGRESSION_TEMPLATES.find(t => t.id === id) ?? null;
}

// Listes des leçons gratuites / Pro
export const FREE_COURS_IDS = COURS_CONTENT.filter(c => c.isFree).map(c => c.id);
export const PRO_COURS_IDS  = COURS_CONTENT.filter(c => !c.isFree).map(c => c.id);
```

- [ ] **Étape 2 : Commit**

```bash
git add src/data/cours-content.ts
git commit -m "feat: contenu 12 leçons cours (FR+EN, thèmes, quiz)"
```

---

## Task 8 : Composants SATB UI

**Files:**
- Create: `src/components/SatbDisplay.tsx`
- Create: `src/components/ProgressionPicker.tsx`
- Create: `src/components/TonalitePicker.tsx`

- [ ] **Étape 1 : Créer SatbDisplay**

```tsx
// src/components/SatbDisplay.tsx
import { View, Text } from 'react-native';
import type { SATBMeasure } from '../lib/satb-generator';

interface Props {
  mesures: SATBMeasure[];
}

const VOICE_LABELS = ['S', 'A', 'T', 'B'] as const;
const VOICE_KEYS: (keyof SATBMeasure)[] = ['soprano', 'alto', 'tenor', 'bass'];
const VOICE_COLORS = ['#a855f7', '#7c3aed', '#6d28d9', '#5b21b6'];

export function SatbDisplay({ mesures }: Props) {
  if (mesures.length === 0) return null;

  return (
    <View className="bg-surface border border-border rounded-2xl p-4">
      {/* En-têtes voix */}
      <View className="flex-row mb-2">
        <View className="w-8" />
        {mesures.map((_, i) => (
          <View key={i} className="flex-1 items-center">
            <Text className="text-text-disabled text-xs">M{i + 1}</Text>
          </View>
        ))}
      </View>
      {/* Grille SATB */}
      {VOICE_KEYS.map((key, vi) => (
        <View key={key} className="flex-row items-center mb-2">
          <View className="w-8 items-center">
            <Text style={{ color: VOICE_COLORS[vi] }} className="text-xs font-bold">
              {VOICE_LABELS[vi]}
            </Text>
          </View>
          {mesures.map((mesure, mi) => {
            const note = mesure[key];
            return (
              <View key={mi} className="flex-1 items-center bg-background rounded-lg mx-0.5 py-1.5">
                <Text className="text-text text-xs font-semibold">{note.name}</Text>
                <Text className="text-text-disabled text-xs">{note.octave}</Text>
              </View>
            );
          })}
        </View>
      ))}
    </View>
  );
}
```

- [ ] **Étape 2 : Créer ProgressionPicker**

```tsx
// src/components/ProgressionPicker.tsx
import { View, Text, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PROGRESSION_TEMPLATES } from '../data/progressions-templates';

// IDs disponibles en version gratuite
const FREE_PROGRESSION_IDS = ['ii-v-i', 'i-iv-v', 'i-vi-iv-v'];

interface Props {
  selectedId: string;
  isProUser: boolean;
  onSelect: (id: string) => void;
  onLockedPress: () => void;
}

export function ProgressionPicker({ selectedId, isProUser, onSelect, onLockedPress }: Props) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-4">
      <View className="flex-row gap-2 px-1 py-1">
        {PROGRESSION_TEMPLATES.map((prog) => {
          const isLocked = !isProUser && !FREE_PROGRESSION_IDS.includes(prog.id);
          const isSelected = prog.id === selectedId;
          return (
            <Pressable
              key={prog.id}
              onPress={() => isLocked ? onLockedPress() : onSelect(prog.id)}
              className={`px-3 py-2 rounded-xl border flex-row items-center gap-1 ${
                isSelected
                  ? 'bg-primary border-primary'
                  : 'bg-surface border-border'
              }`}
            >
              <Text className={`text-xs font-semibold ${isSelected ? 'text-white' : 'text-text'}`}>
                {prog.nom}
              </Text>
              {isLocked && <Ionicons name="lock-closed" size={10} color="#64748b" />}
            </Pressable>
          );
        })}
      </View>
    </ScrollView>
  );
}
```

- [ ] **Étape 3 : Créer TonalitePicker**

```tsx
// src/components/TonalitePicker.tsx
import { View, Text, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FREE_TONALITES = ['C', 'G', 'D'];
const ALL_TONALITES = [
  { key: 'C', label: 'Do' }, { key: 'G', label: 'Sol' }, { key: 'D', label: 'Ré' },
  { key: 'A', label: 'La' }, { key: 'E', label: 'Mi' }, { key: 'B', label: 'Si' },
  { key: 'F#', label: 'Fa#' }, { key: 'F', label: 'Fa' }, { key: 'Bb', label: 'Sib' },
  { key: 'Eb', label: 'Mib' }, { key: 'Ab', label: 'Lab' }, { key: 'Db', label: 'Réb' },
  { key: 'Am', label: 'La m' }, { key: 'Em', label: 'Mi m' }, { key: 'Bm', label: 'Si m' },
  { key: 'Dm', label: 'Ré m' }, { key: 'Gm', label: 'Sol m' }, { key: 'Cm', label: 'Do m' },
  { key: 'Fm', label: 'Fa m' }, { key: 'Bbm', label: 'Sib m' },
];

interface Props {
  selected: string;
  isProUser: boolean;
  onSelect: (key: string) => void;
  onLockedPress: () => void;
}

export function TonalitePicker({ selected, isProUser, onSelect, onLockedPress }: Props) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-4">
      <View className="flex-row gap-2 px-1 py-1">
        {ALL_TONALITES.map((ton) => {
          const isLocked = !isProUser && !FREE_TONALITES.includes(ton.key);
          const isSelected = ton.key === selected;
          return (
            <Pressable
              key={ton.key}
              onPress={() => isLocked ? onLockedPress() : onSelect(ton.key)}
              className={`px-3 py-2 rounded-xl border flex-row items-center gap-1 ${
                isSelected ? 'bg-primary border-primary' : 'bg-surface border-border'
              }`}
            >
              <Text className={`text-xs font-semibold ${isSelected ? 'text-white' : 'text-text'}`}>
                {ton.label}
              </Text>
              {isLocked && <Ionicons name="lock-closed" size={10} color="#64748b" />}
            </Pressable>
          );
        })}
      </View>
    </ScrollView>
  );
}
```

- [ ] **Étape 4 : Commit**

```bash
git add src/components/SatbDisplay.tsx src/components/ProgressionPicker.tsx src/components/TonalitePicker.tsx
git commit -m "feat: composants SatbDisplay, ProgressionPicker, TonalitePicker"
```

---

## Task 9 : Composants Paywall

**Files:**
- Create: `src/components/ProGate.tsx`
- Create: `src/components/PaywallModal.tsx`

- [ ] **Étape 1 : Créer PaywallModal**

```tsx
// src/components/PaywallModal.tsx
import { Modal, View, Text, Pressable, ScrollView, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useRevenueCat } from '../hooks/useRevenueCat';
import type { PurchasesPackage } from 'react-native-purchases';

interface Props {
  visible: boolean;
  onClose: () => void;
}

const FEATURES = [
  '22 progressions harmoniques',
  '24 tonalités majeures & mineures',
  'Tous les cours avec exemples audio',
  'Accès illimité hors ligne',
];

export function PaywallModal({ visible, onClose }: Props) {
  const { getOfferings, purchasePackage, restorePurchases } = useRevenueCat();
  const [packages, setPackages] = useState<PurchasesPackage[]>([]);
  const [selectedPkg, setSelectedPkg] = useState<PurchasesPackage | null>(null);
  const [loading, setLoading] = useState(false);

  // Charger les offres quand le modal s'ouvre
  const onShow = async () => {
    const pkgs = await getOfferings();
    setPackages(pkgs);
    // Pré-sélectionner l'annuel
    const yearly = pkgs.find(p => p.product.identifier.includes('yearly'));
    setSelectedPkg(yearly ?? pkgs[0] ?? null);
  };

  const handlePurchase = async () => {
    if (!selectedPkg) return;
    setLoading(true);
    const success = await purchasePackage(selectedPkg);
    setLoading(false);
    if (success) onClose();
  };

  const handleRestore = async () => {
    setLoading(true);
    await restorePurchases();
    setLoading(false);
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="pageSheet" onShow={onShow}>
      <View className="flex-1 bg-surface">
        <ScrollView contentContainerStyle={{ padding: 24 }}>
          {/* Header */}
          <Pressable onPress={onClose} className="self-end mb-4">
            <Ionicons name="close" size={24} color="#64748b" />
          </Pressable>
          <Text className="text-4xl text-center mb-2">🎼</Text>
          <Text className="text-text text-2xl font-bold text-center mb-1">Passe au niveau supérieur</Text>
          <Text className="text-text-muted text-center mb-6">7 jours gratuits, sans engagement</Text>

          {/* Features */}
          <View className="mb-6">
            {FEATURES.map((f) => (
              <View key={f} className="flex-row items-center gap-3 mb-3">
                <Ionicons name="checkmark-circle" size={20} color="#7c3aed" />
                <Text className="text-text text-sm">{f}</Text>
              </View>
            ))}
          </View>

          {/* Plans */}
          <View className="gap-3 mb-6">
            {packages.map((pkg) => {
              const isYearly = pkg.product.identifier.includes('yearly');
              const isSelected = selectedPkg?.product.identifier === pkg.product.identifier;
              return (
                <Pressable
                  key={pkg.product.identifier}
                  onPress={() => setSelectedPkg(pkg)}
                  className={`border-2 rounded-2xl p-4 ${isSelected ? 'border-primary bg-primary/10' : 'border-border bg-background'}`}
                >
                  {isYearly && (
                    <View className="bg-primary rounded-full px-2 py-0.5 self-start mb-1">
                      <Text className="text-white text-xs font-bold">Meilleure valeur</Text>
                    </View>
                  )}
                  <Text className="text-text font-bold">{pkg.product.localizedTitle}</Text>
                  <Text className="text-text-muted text-sm">{pkg.product.localizedDescription}</Text>
                  <Text className="text-primary font-bold text-lg mt-1">{pkg.product.localizedPriceString}</Text>
                </Pressable>
              );
            })}
          </View>

          {/* CTA */}
          <Pressable
            onPress={handlePurchase}
            disabled={loading || !selectedPkg}
            className="bg-primary rounded-2xl p-4 items-center mb-3"
          >
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text className="text-white font-bold text-base">Commencer l'essai gratuit</Text>
            )}
          </Pressable>
          <Pressable onPress={handleRestore} className="items-center mb-2">
            <Text className="text-text-muted text-sm">Restaurer un achat</Text>
          </Pressable>
          <Text className="text-text-disabled text-xs text-center">
            Puis {selectedPkg?.product.localizedPriceString ?? '...'} · Annuler à tout moment
          </Text>
        </ScrollView>
      </View>
    </Modal>
  );
}
```

- [ ] **Étape 2 : Créer ProGate**

```tsx
// src/components/ProGate.tsx
import { useState } from 'react';
import { PaywallModal } from './PaywallModal';

// Re-export pour permettre : import { PaywallModal, usePaywall } from '@/components/ProGate'
export { PaywallModal } from './PaywallModal';

interface Props {
  isLocked: boolean;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function ProGate({ isLocked, children, fallback }: Props) {
  const [showPaywall, setShowPaywall] = useState(false);

  if (!isLocked) return <>{children}</>;

  return (
    <>
      <PaywallModal visible={showPaywall} onClose={() => setShowPaywall(false)} />
      {fallback ?? null}
    </>
  );
}

// Export du hook utilitaire pour ouvrir le paywall n'importe où
export function usePaywall() {
  const [visible, setVisible] = useState(false);
  return {
    paywallVisible: visible,
    openPaywall: () => setVisible(true),
    closePaywall: () => setVisible(false),
  };
}
```

- [ ] **Étape 3 : Commit**

```bash
git add src/components/ProGate.tsx src/components/PaywallModal.tsx
git commit -m "feat: PaywallModal + ProGate avec RevenueCat"
```

---

## Task 10 : Écran SATB (générateur complet)

**Files:**
- Modify: `app/(tabs)/satb.tsx`

- [ ] **Étape 1 : Implémenter l'écran SATB complet**

```tsx
// app/(tabs)/satb.tsx
import { View, Text, Pressable, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useEffect } from 'react';
import { useSatbStore } from '@/store/useSatbStore';
import { useRevenueCat } from '@/hooks/useRevenueCat';
import { useAudio } from '@/hooks/useAudio';
import { generateExercise } from '@/lib/satb-generator';
import { PROGRESSION_TEMPLATES } from '@/data/progressions-templates';
import { configureAudio } from '@/lib/audio';
import { SatbDisplay } from '@/components/SatbDisplay';
import { ProgressionPicker } from '@/components/ProgressionPicker';
import { TonalitePicker } from '@/components/TonalitePicker';
import { PaywallModal, usePaywall } from '@/components/ProGate';

export default function SatbScreen() {
  const {
    selectedProgressionId, selectedTonalite, doigte,
    lastMesures, setProgressionId, setTonalite, setLastMesures,
  } = useSatbStore();
  const { isProUser } = useRevenueCat();
  const { playSequence } = useAudio();
  const { paywallVisible, openPaywall, closePaywall } = usePaywall();

  useEffect(() => { configureAudio(); }, []);

  function generate() {
    const template = PROGRESSION_TEMPLATES.find(t => t.id === selectedProgressionId);
    if (!template) return;
    const result = generateExercise(template, selectedTonalite, doigte);
    setLastMesures(result.mesures);
  }

  async function handlePlay() {
    if (!lastMesures || lastMesures.length === 0) return;
    await playSequence(lastMesures);
  }

  return (
    <View className="flex-1 bg-background">
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 40 }}>
        {/* Titre */}
        <Text className="text-text text-2xl font-bold mb-1">Générateur SATB</Text>
        <Text className="text-text-muted text-sm mb-6">Crée une progression harmonique à 4 voix</Text>

        {/* Progression */}
        <Text className="text-text-muted text-xs font-semibold uppercase mb-2">Progression</Text>
        <ProgressionPicker
          selectedId={selectedProgressionId}
          isProUser={isProUser}
          onSelect={setProgressionId}
          onLockedPress={openPaywall}
        />

        {/* Tonalité */}
        <Text className="text-text-muted text-xs font-semibold uppercase mb-2">Tonalité</Text>
        <TonalitePicker
          selected={selectedTonalite}
          isProUser={isProUser}
          onSelect={setTonalite}
          onLockedPress={openPaywall}
        />

        {/* Actions */}
        <View className="flex-row gap-3 mb-6">
          <Pressable
            onPress={generate}
            className="flex-1 bg-primary rounded-2xl p-4 items-center"
          >
            <Text className="text-white font-bold text-base">Générer</Text>
          </Pressable>
          {lastMesures && lastMesures.length > 0 && (
            <Pressable
              onPress={handlePlay}
              className="bg-surface border border-border rounded-2xl p-4 items-center"
            >
              <Ionicons name="play" size={22} color="#7c3aed" />
            </Pressable>
          )}
        </View>

        {/* Résultat */}
        {lastMesures && lastMesures.length > 0 && (
          <SatbDisplay mesures={lastMesures} />
        )}

        {/* État initial */}
        {!lastMesures && (
          <View className="bg-surface border border-border rounded-2xl p-8 items-center">
            <Text className="text-4xl mb-3">𝄞</Text>
            <Text className="text-text-muted text-center text-sm">
              Sélectionne une progression et une tonalité,{'\n'}puis appuie sur Générer.
            </Text>
          </View>
        )}
      </ScrollView>

      <PaywallModal visible={paywallVisible} onClose={closePaywall} />
    </View>
  );
}
```

- [ ] **Étape 2 : Tester manuellement**

```bash
npx expo start
```

Vérifier :
- Onglet SATB visible et responsive
- Sélection d'une progression → picker mis à jour
- Bouton Générer → affiche les 4 voix dans SatbDisplay
- Tap progression verrouillée → PaywallModal s'ouvre
- Bouton ▶ → audio joué (si soundfont téléchargé)

- [ ] **Étape 3 : Commit**

```bash
git add app/\(tabs\)/satb.tsx
git commit -m "feat: écran SATB complet — génération + audio + paywall contextuel"
```

---

## Task 11 : Composant CoursCard & écran liste des cours

**Files:**
- Create: `src/components/CoursCard.tsx`
- Modify: `app/(tabs)/cours.tsx`

- [ ] **Étape 1 : Créer CoursCard**

```tsx
// src/components/CoursCard.tsx
import { Pressable, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { CoursLecon } from '../data/cours-content';

interface Props {
  lecon: CoursLecon;
  isProUser: boolean;
  onPress: () => void;
  onLockedPress: () => void;
}

export function CoursCard({ lecon, isProUser, onPress, onLockedPress }: Props) {
  const isLocked = !lecon.isFree && !isProUser;
  return (
    <Pressable
      onPress={isLocked ? onLockedPress : onPress}
      className="bg-surface border border-border rounded-2xl p-4 mb-3 flex-row items-center gap-4"
    >
      <View className={`w-10 h-10 rounded-xl items-center justify-center ${isLocked ? 'bg-background' : 'bg-primary/20'}`}>
        <Ionicons
          name={isLocked ? 'lock-closed' : 'book-outline'}
          size={20}
          color={isLocked ? '#64748b' : '#7c3aed'}
        />
      </View>
      <View className="flex-1">
        <Text className={`font-semibold text-sm ${isLocked ? 'text-text-disabled' : 'text-text'}`}>
          {lecon.titre.fr}
        </Text>
        <Text className="text-text-disabled text-xs mt-0.5">{lecon.theme}</Text>
      </View>
      {lecon.isFree ? (
        <View className="bg-green-900/30 rounded-full px-2 py-0.5">
          <Text className="text-green-400 text-xs font-bold">GRATUIT</Text>
        </View>
      ) : (
        <View className="bg-primary/20 rounded-full px-2 py-0.5">
          <Text className="text-primary text-xs font-bold">PRO</Text>
        </View>
      )}
    </Pressable>
  );
}
```

- [ ] **Étape 2 : Implémenter l'écran liste des cours**

```tsx
// app/(tabs)/cours.tsx
import { View, Text, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { COURS_CONTENT } from '@/data/cours-content';
import { useRevenueCat } from '@/hooks/useRevenueCat';
import { CoursCard } from '@/components/CoursCard';
import { PaywallModal } from '@/components/ProGate';

const THEMES = ['Règles de base', 'Cadences', 'Progressions avancées'];

export default function CoursScreen() {
  const router = useRouter();
  const { isProUser } = useRevenueCat();
  const [paywallVisible, setPaywallVisible] = useState(false);

  return (
    <View className="flex-1 bg-background">
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 40 }}>
        <Text className="text-text text-2xl font-bold mb-1">Cours</Text>
        <Text className="text-text-muted text-sm mb-6">Apprends les règles de l'harmonie SATB</Text>

        {THEMES.map((theme) => {
          const lecons = COURS_CONTENT.filter(l => l.theme === theme);
          return (
            <View key={theme} className="mb-6">
              <Text className="text-text-muted text-xs font-semibold uppercase mb-3">{theme}</Text>
              {lecons.map((lecon) => (
                <CoursCard
                  key={lecon.id}
                  lecon={lecon}
                  isProUser={isProUser}
                  onPress={() => router.push(`/cours/${lecon.id}`)}
                  onLockedPress={() => setPaywallVisible(true)}
                />
              ))}
            </View>
          );
        })}
      </ScrollView>

      <PaywallModal visible={paywallVisible} onClose={() => setPaywallVisible(false)} />
    </View>
  );
}
```

- [ ] **Étape 3 : Commit**

```bash
git add src/components/CoursCard.tsx app/\(tabs\)/cours.tsx
git commit -m "feat: CoursCard + écran liste des cours par thème"
```

---

## Task 12 : Écran détail d'un cours

**Files:**
- Create: `app/cours/[id].tsx`

- [ ] **Étape 1 : Créer l'écran détail**

```tsx
// app/cours/[id].tsx
import { View, Text, ScrollView, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { COURS_CONTENT } from '@/data/cours-content';

export default function CoursDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const lecon = COURS_CONTENT.find(l => l.id === id);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);

  if (!lecon) return (
    <View className="flex-1 bg-background items-center justify-center">
      <Text className="text-text">Leçon introuvable</Text>
    </View>
  );

  const quizCorrect = quizAnswer === lecon.quiz.correctIndex;

  return (
    <View className="flex-1 bg-background">
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 40 }}>
        {/* Header */}
        <Pressable onPress={() => router.back()} className="flex-row items-center gap-2 mb-6">
          <Ionicons name="arrow-back" size={20} color="#7c3aed" />
          <Text className="text-primary">Cours</Text>
        </Pressable>

        <View className="bg-primary/10 border border-primary/20 rounded-xl px-3 py-1 self-start mb-3">
          <Text className="text-primary text-xs font-semibold">{lecon.theme}</Text>
        </View>
        <Text className="text-text text-2xl font-bold mb-4">{lecon.titre.fr}</Text>

        {/* Corps */}
        <View className="bg-surface border border-border rounded-2xl p-4 mb-6">
          <Text className="text-text text-sm leading-6">{lecon.corps.fr}</Text>
        </View>

        {/* Quiz */}
        <Text className="text-text text-lg font-bold mb-3">Quiz</Text>
        <View className="bg-surface border border-border rounded-2xl p-4">
          <Text className="text-text font-medium mb-4">{lecon.quiz.question.fr}</Text>
          <View className="gap-2">
            {lecon.quiz.options.fr.map((option, i) => {
              let style = 'border-border bg-background';
              if (quizAnswer !== null) {
                if (i === lecon.quiz.correctIndex) style = 'border-green-500 bg-green-900/20';
                else if (i === quizAnswer) style = 'border-red-500 bg-red-900/20';
              }
              return (
                <Pressable
                  key={i}
                  onPress={() => setQuizAnswer(i)}
                  disabled={quizAnswer !== null}
                  className={`border rounded-xl p-3 ${style}`}
                >
                  <Text className="text-text text-sm">{option}</Text>
                </Pressable>
              );
            })}
          </View>
          {quizAnswer !== null && (
            <View className={`mt-4 rounded-xl p-3 ${quizCorrect ? 'bg-green-900/30' : 'bg-red-900/30'}`}>
              <Text className={`text-sm font-semibold ${quizCorrect ? 'text-green-400' : 'text-red-400'}`}>
                {quizCorrect ? '✓ Correct !' : '✗ Pas tout à fait.'}
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
```

- [ ] **Étape 2 : Commit**

```bash
git add app/cours/
git commit -m "feat: écran détail cours avec quiz interactif"
```

---

## Task 13 : Écran Onboarding

**Files:**
- Modify: `app/onboarding.tsx`
- Modify: `app/_layout.tsx` (logique de premier lancement)

- [ ] **Étape 1 : Implémenter l'écran onboarding**

```tsx
// app/onboarding.tsx
import { View, Text, Pressable, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PaywallModal } from '@/components/ProGate';

const { width } = Dimensions.get('window');

const SLIDES = [
  { emoji: '🎵', titre: 'Génère des harmonies SATB', desc: 'Crée des progressions harmoniques à 4 voix en quelques secondes.' },
  { emoji: '📖', titre: 'Comprends les règles', desc: 'Des cours intégrés expliquent les règles classiques de l\'harmonie tonale.' },
  { emoji: '🎧', titre: 'Écoute le résultat', desc: 'Chaque progression est jouée avec un piano HD pour valider ton oreille.' },
];

export default function OnboardingScreen() {
  const router = useRouter();
  const [slide, setSlide] = useState(0);
  const [paywallVisible, setPaywallVisible] = useState(false);

  async function finish() {
    await AsyncStorage.setItem('onboarding_done', '1');
    router.replace('/(tabs)');
  }

  const isLast = slide === SLIDES.length - 1;

  return (
    <View className="flex-1 bg-background">
      {/* Slides */}
      <View className="flex-1 items-center justify-center px-8">
        <Text className="text-7xl mb-6">{SLIDES[slide].emoji}</Text>
        <Text className="text-text text-2xl font-bold text-center mb-3">{SLIDES[slide].titre}</Text>
        <Text className="text-text-muted text-base text-center leading-6">{SLIDES[slide].desc}</Text>
      </View>

      {/* Dots */}
      <View className="flex-row justify-center gap-2 mb-8">
        {SLIDES.map((_, i) => (
          <View key={i} className={`h-1.5 rounded-full ${i === slide ? 'w-6 bg-primary' : 'w-1.5 bg-border'}`} />
        ))}
      </View>

      {/* Actions */}
      <View className="px-6 pb-12 gap-3">
        {isLast ? (
          <>
            <Pressable onPress={() => setPaywallVisible(true)} className="bg-primary rounded-2xl p-4 items-center">
              <Text className="text-white font-bold text-base">Essai Pro gratuit 7 jours</Text>
            </Pressable>
            <Pressable onPress={finish} className="items-center p-3">
              <Text className="text-text-muted text-sm">Commencer gratuitement</Text>
            </Pressable>
          </>
        ) : (
          <Pressable onPress={() => setSlide(s => s + 1)} className="bg-primary rounded-2xl p-4 items-center">
            <Text className="text-white font-bold text-base">Suivant</Text>
          </Pressable>
        )}
      </View>

      <PaywallModal
        visible={paywallVisible}
        onClose={() => { setPaywallVisible(false); finish(); }}
      />
    </View>
  );
}
```

- [ ] **Étape 2 : Installer AsyncStorage**

```bash
npx expo install @react-native-async-storage/async-storage
```

- [ ] **Étape 3 : Ajouter la logique de premier lancement dans _layout.tsx**

Modifier `app/_layout.tsx` pour vérifier si l'onboarding a déjà été vu :

```tsx
// app/_layout.tsx
import { useEffect, useState } from 'react';
import { Stack, useRouter, useSegments } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import Purchases from 'react-native-purchases';
import AsyncStorage from '@react-native-async-storage/async-storage';

const REVENUECAT_IOS_KEY = 'REVENUECAT_IOS_KEY_HERE';

export default function RootLayout() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    Purchases.configure({ apiKey: REVENUECAT_IOS_KEY });
    AsyncStorage.getItem('onboarding_done').then(val => {
      setReady(true);
      if (!val) router.replace('/onboarding');
    });
  }, []);

  if (!ready) return null;

  return (
    <>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#0f0f23' } }}>
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="cours/[id]" options={{ presentation: 'card' }} />
      </Stack>
    </>
  );
}
```

- [ ] **Étape 4 : Commit**

```bash
git add .
git commit -m "feat: écran onboarding 3 slides + paywall premier lancement"
```

---

## Task 14 : Écran Accueil (hub)

**Files:**
- Modify: `app/(tabs)/index.tsx`

- [ ] **Étape 1 : Implémenter l'écran Accueil**

```tsx
// app/(tabs)/index.tsx
import { View, Text, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useSatbStore } from '@/store/useSatbStore';
import { useRevenueCat } from '@/hooks/useRevenueCat';
import { COURS_CONTENT } from '@/data/cours-content';
import { PaywallModal } from '@/components/ProGate';

// Cours du jour : rotation par jour de la semaine
function getCoursOfDay() {
  const dayIndex = new Date().getDay();
  const freeCours = COURS_CONTENT.filter(c => c.isFree);
  return freeCours[dayIndex % freeCours.length];
}

export default function HomeScreen() {
  const router = useRouter();
  const { isProUser } = useRevenueCat();
  const lastMesures = useSatbStore(s => s.lastMesures);
  const selectedProgressionId = useSatbStore(s => s.selectedProgressionId);
  const [paywallVisible, setPaywallVisible] = useState(false);
  const coursOfDay = getCoursOfDay();

  return (
    <View className="flex-1 bg-background">
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 40 }}>
        {/* Header */}
        <Text className="text-text text-3xl font-bold mb-1">Harmonia</Text>
        <Text className="text-text-muted text-sm mb-6">Harmonie SATB & théorie musicale</Text>

        {/* Banner Pro si gratuit */}
        {!isProUser && (
          <Pressable
            onPress={() => setPaywallVisible(true)}
            className="bg-primary/10 border border-primary/30 rounded-2xl p-4 flex-row items-center gap-3 mb-4"
          >
            <Ionicons name="star" size={20} color="#7c3aed" />
            <View className="flex-1">
              <Text className="text-primary font-semibold text-sm">Débloquer 19 progressions →</Text>
              <Text className="text-text-muted text-xs">Essai gratuit 7 jours</Text>
            </View>
          </Pressable>
        )}

        {/* Accès rapide SATB */}
        <Pressable
          onPress={() => router.push('/(tabs)/satb')}
          className="bg-surface border border-border rounded-2xl p-5 mb-4"
          style={{ borderLeftWidth: 3, borderLeftColor: '#7c3aed' }}
        >
          <View className="flex-row items-center gap-3">
            <Ionicons name="musical-notes" size={24} color="#7c3aed" />
            <View className="flex-1">
              <Text className="text-text font-bold">Générateur SATB</Text>
              <Text className="text-text-muted text-xs mt-0.5">
                {lastMesures ? `Dernière : ${selectedProgressionId.toUpperCase()}` : 'Créer une progression'}
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color="#64748b" />
          </View>
        </Pressable>

        {/* Cours du jour */}
        <Text className="text-text-muted text-xs font-semibold uppercase mb-3">Cours du jour</Text>
        <Pressable
          onPress={() => router.push(`/cours/${coursOfDay.id}`)}
          className="bg-surface border border-border rounded-2xl p-5 mb-4"
          style={{ borderLeftWidth: 3, borderLeftColor: '#0ea5e9' }}
        >
          <View className="flex-row items-center gap-3">
            <Ionicons name="book-outline" size={24} color="#0ea5e9" />
            <View className="flex-1">
              <Text className="text-text font-bold">{coursOfDay.titre.fr}</Text>
              <Text className="text-text-muted text-xs mt-0.5">{coursOfDay.theme}</Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color="#64748b" />
          </View>
        </Pressable>

        {/* Stats rapides */}
        <View className="flex-row gap-3">
          <View className="flex-1 bg-surface border border-border rounded-2xl p-4 items-center">
            <Text className="text-primary text-2xl font-bold">
              {isProUser ? '22' : '3'}
            </Text>
            <Text className="text-text-muted text-xs text-center">Progressions{'\n'}disponibles</Text>
          </View>
          <View className="flex-1 bg-surface border border-border rounded-2xl p-4 items-center">
            <Text className="text-primary text-2xl font-bold">
              {isProUser ? '12' : '4'}
            </Text>
            <Text className="text-text-muted text-xs text-center">Cours{'\n'}disponibles</Text>
          </View>
        </View>
      </ScrollView>

      <PaywallModal visible={paywallVisible} onClose={() => setPaywallVisible(false)} />
    </View>
  );
}
```

- [ ] **Étape 2 : Commit**

```bash
git add app/\(tabs\)/index.tsx
git commit -m "feat: écran Accueil hub — accès rapide SATB, cours du jour, stats"
```

---

## Task 15 : Écran Profil

**Files:**
- Modify: `app/(tabs)/profil.tsx`

- [ ] **Étape 1 : Implémenter l'écran Profil**

```tsx
// app/(tabs)/profil.tsx
import { View, Text, Pressable, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useRevenueCat } from '@/hooks/useRevenueCat';
import { PaywallModal } from '@/components/ProGate';
import Constants from 'expo-constants';

export default function ProfilScreen() {
  const { isProUser, restorePurchases } = useRevenueCat();
  const [paywallVisible, setPaywallVisible] = useState(false);
  const [restoring, setRestoring] = useState(false);

  async function handleRestore() {
    setRestoring(true);
    const success = await restorePurchases();
    setRestoring(false);
    Alert.alert(
      success ? 'Achat restauré !' : 'Aucun achat trouvé',
      success ? 'Ton abonnement Pro est actif.' : 'Aucun abonnement actif trouvé sur ce compte.'
    );
  }

  return (
    <View className="flex-1 bg-background">
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 40 }}>
        <Text className="text-text text-2xl font-bold mb-6">Profil</Text>

        {/* Statut abonnement */}
        <View className="bg-surface border border-border rounded-2xl p-5 mb-4">
          <View className="flex-row items-center gap-3 mb-3">
            <View className={`w-10 h-10 rounded-full items-center justify-center ${isProUser ? 'bg-primary/20' : 'bg-background'}`}>
              <Ionicons name={isProUser ? 'star' : 'person-outline'} size={20} color={isProUser ? '#7c3aed' : '#64748b'} />
            </View>
            <View>
              <Text className="text-text font-bold">{isProUser ? 'Harmonia Pro' : 'Version gratuite'}</Text>
              <Text className="text-text-muted text-xs">
                {isProUser ? 'Accès à tout le contenu' : '3 progressions · 3 tonalités'}
              </Text>
            </View>
          </View>
          {!isProUser && (
            <Pressable onPress={() => setPaywallVisible(true)} className="bg-primary rounded-xl p-3 items-center">
              <Text className="text-white font-bold text-sm">Passer à Pro — Essai gratuit 7j</Text>
            </Pressable>
          )}
        </View>

        {/* Paramètres */}
        <Text className="text-text-muted text-xs font-semibold uppercase mb-3">Paramètres</Text>
        <View className="bg-surface border border-border rounded-2xl overflow-hidden mb-4">
          <Pressable className="flex-row items-center gap-3 p-4 border-b border-border">
            <Ionicons name="language-outline" size={20} color="#9d7fea" />
            <Text className="text-text flex-1">Langue</Text>
            <Text className="text-text-muted text-sm">Français</Text>
          </Pressable>
          <Pressable className="flex-row items-center gap-3 p-4">
            <Ionicons name="musical-note-outline" size={20} color="#9d7fea" />
            <Text className="text-text flex-1">Notation des notes</Text>
            <Text className="text-text-muted text-sm">Française (Do Ré Mi)</Text>
          </Pressable>
        </View>

        {/* Actions */}
        <Pressable
          onPress={handleRestore}
          disabled={restoring}
          className="bg-surface border border-border rounded-2xl p-4 flex-row items-center gap-3 mb-3"
        >
          <Ionicons name="refresh-outline" size={20} color="#9d7fea" />
          <Text className="text-text text-sm">{restoring ? 'Restauration...' : 'Restaurer un achat'}</Text>
        </Pressable>

        {/* Version */}
        <Text className="text-text-disabled text-xs text-center mt-4">
          Harmonia v{Constants.expoConfig?.version ?? '1.0.0'}
        </Text>
      </ScrollView>

      <PaywallModal visible={paywallVisible} onClose={() => setPaywallVisible(false)} />
    </View>
  );
}
```

- [ ] **Étape 2 : Commit**

```bash
git add app/\(tabs\)/profil.tsx
git commit -m "feat: écran Profil — statut Pro, paramètres, restaurer achat"
```

---

## Task 16 : Configuration EAS Build & soumission stores

**Files:**
- Create: `eas.json`
- Modify: `app.json` (bundle IDs, icônes)

- [ ] **Étape 1 : Installer EAS CLI**

```bash
npm install -g eas-cli
eas login
```

Utiliser le compte Expo/EAS de danyduboillepro@gmail.com.

- [ ] **Étape 2 : Créer eas.json**

```json
{
  "cli": { "version": ">= 7.0.0" },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal",
      "ios": { "simulator": true }
    },
    "preview": {
      "distribution": "internal",
      "ios": { "buildConfiguration": "Release" },
      "android": { "buildType": "apk" }
    },
    "production": {
      "ios": { "buildConfiguration": "Release" },
      "android": { "buildType": "app-bundle" }
    }
  },
  "submit": {
    "production": {
      "ios": {
        "appleId": "danyduboillepro@gmail.com",
        "ascAppId": "APPLE_APP_ID_HERE",
        "appleTeamId": "APPLE_TEAM_ID_HERE"
      },
      "android": {
        "serviceAccountKeyPath": "./google-service-account.json",
        "track": "production"
      }
    }
  }
}
```

- [ ] **Étape 3 : Configurer le projet EAS**

```bash
eas build:configure
```

Résultat : génère les `android.package` et `ios.bundleIdentifier` dans `app.json`.

- [ ] **Étape 4 : Builder pour preview (test interne)**

```bash
# iOS simulator (test local)
eas build --profile development --platform ios

# APK Android pour test
eas build --profile preview --platform android
```

Durée estimée : 10–15 minutes. EAS envoie un lien de téléchargement par email.

- [ ] **Étape 5 : Builder production**

Avant la soumission aux stores :
1. Ajouter les vraies clés RevenueCat dans `app/_layout.tsx`
2. Préparer les icônes (1024×1024 PNG) dans `assets/`
3. Préparer les screenshots stores (6,5" iPhone + 12,9" iPad + Android)

```bash
eas build --profile production --platform all
```

- [ ] **Étape 6 : Soumettre aux stores**

```bash
# App Store
eas submit --platform ios --latest

# Play Store
eas submit --platform android --latest
```

- [ ] **Étape 7 : Commit final**

```bash
git add eas.json
git commit -m "feat: configuration EAS Build — profiles dev/preview/production"
```

---

## Récapitulatif des commandes de test

```bash
# Tests unitaires (à lancer à chaque task)
npx jest --no-coverage

# Démarrer l'app en développement
npx expo start

# Build de test iOS
eas build --profile development --platform ios

# Build de test Android (APK)
eas build --profile preview --platform android
```

## Clés à configurer avant production

| Variable | Où | Valeur |
|----------|----|--------|
| `REVENUECAT_IOS_KEY` | `app/_layout.tsx` | Dashboard RevenueCat → Apple App Store |
| `REVENUECAT_ANDROID_KEY` | `app.json` plugin | Dashboard RevenueCat → Google Play |
| `ascAppId` | `eas.json` | App Store Connect → App ID |
| `appleTeamId` | `eas.json` | Apple Developer → Team ID |
| `google-service-account.json` | racine projet | Google Play Console → Service Account |
