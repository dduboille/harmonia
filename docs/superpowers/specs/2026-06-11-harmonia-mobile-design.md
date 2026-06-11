# Harmonia Mobile — Design Spec
**Date :** 2026-06-11  
**Statut :** Validé pour implémentation

---

## 1. Produit & identité

### Nom
**Harmonia** — même marque que l'app web getharmonia.app. Différenciation par le contexte (App Store vs web).

### Sous-titre App Store
> *Générateur SATB & harmonie musicale*

### Positionnement
Outil professionnel de génération d'harmonie à 4 voix (Soprano, Alto, Ténor, Basse) avec apprentissage intégré de la théorie musicale. Positionné entre l'outil technique (musiciens praticiens) et l'app éducative (étudiants). Prix premium justifié par la profondeur du contenu.

### Audience cible
- Étudiants en harmonie (conservatoires, cursus musicaux, autodidactes)
- Musiciens praticiens (arrangeurs, compositeurs, pianistes)
- Grand public musicien curieux de comprendre l'harmonie

### Plateformes
- iOS 16+ et Android 10+ simultanément
- Développé avec Expo (un seul codebase)

### Langues V1
- Français (langue principale)
- Anglais

---

## 2. Architecture & stack technique

### Framework
**Expo SDK 52** + **Expo Router v4** (file-based routing, identique à Next.js App Router)

### Langage
TypeScript (identique à Harmonia web)

### Structure des fichiers
```
harmonia-mobile/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx          # Accueil (hub)
│   │   ├── satb.tsx           # Générateur SATB
│   │   ├── cours.tsx          # Liste des cours
│   │   └── profil.tsx         # Profil + abonnement
│   ├── cours/[id].tsx         # Cours détaillé
│   └── onboarding.tsx         # Paywall premier lancement
├── src/
│   ├── lib/
│   │   ├── satb-generator.ts  # Copié depuis Harmonia web
│   │   ├── satb-voicings.ts   # Copié depuis Harmonia web
│   │   └── audio.ts           # Wrapper expo-av
│   ├── data/
│   │   ├── progressions-templates.ts  # Copié depuis Harmonia web
│   │   └── cours-content.ts           # Contenu des 12 leçons V1
│   ├── store/
│   │   └── useSatbStore.ts    # Zustand state
│   ├── hooks/
│   │   └── useRevenueCat.ts   # Wrapper abonnement
│   └── components/
│       ├── SatbDisplay.tsx    # Visualisation 4 voix
│       ├── ProGate.tsx        # Paywall contextuel
│       └── PaywallModal.tsx   # Modal paywall onboarding
```

### Dépendances principales

| Librairie | Version | Rôle |
|-----------|---------|------|
| expo | ~52.0.0 | Framework |
| expo-router | ~4.0.0 | Navigation file-based |
| nativewind | ^4.0.0 | Styles Tailwind |
| react-native-purchases | ^8.0.0 | RevenueCat (abonnements) |
| expo-av | ~15.0.0 | Lecture audio |
| zustand | ^5.0.0 | State management |
| @expo/vector-icons | ^14.0.0 | Icônes |

### Réutilisation depuis Harmonia web
Les fichiers suivants sont copiés tels quels (logique TypeScript pure, 0 dépendance web) :
- `src/lib/satb-generator.ts`
- `src/lib/satb-voicings.ts`
- `src/data/progressions-templates.ts`

**Non réutilisable :** le système audio Tone.js/@tonejs/piano ne tourne pas en React Native. Remplacé par expo-av + soundfont piano en fichiers .mp3 bundlés.

---

## 3. Identité visuelle

### Thème
**Dark Premium** — fond très sombre (#0f0f23), accents violet/pourpre (#7c3aed, #a855f7), texte clair (#e2d9f3). Évoque les apps musicales professionnelles. Justifie le positionnement premium.

### Palette
```
background:     #0f0f23  (fond principal)
surface:        #12091f  (cartes, modals)
border:         #3d1f6e  (bordures)
primary:        #7c3aed  (violet principal)
primary-light:  #a855f7  (violet secondaire)
text:           #e2d9f3  (texte principal)
text-muted:     #9d7fea  (texte secondaire)
text-disabled:  #64748b  (texte désactivé)
```

---

## 4. Navigation

### Structure
4 onglets en barre du bas + écran onboarding (affiché 1 seule fois) :

```
Tab Bar :
  🏠 Accueil   🎵 SATB   📖 Cours   👤 Profil
```

### Écrans détaillés

#### Onboarding / Paywall (1er lancement uniquement)
- 3 slides : "Génère des harmonies SATB" / "Comprends les règles" / "Écoute le résultat"
- Paywall : offre annuelle 19,99€/an mise en avant, offre mensuelle 2,99€/mois en secondaire
- Essai gratuit 7 jours (carte requise — standard App Store)
- Bouton "Commencer gratuitement" → accès immédiat

#### ① Accueil (hub)
- Accès rapide au générateur (carte cliquable)
- Cours du jour (1 leçon mise en avant, rotative)
- Dernière progression générée (si existe)
- Bandeau "Débloquer 19 progressions →" si non abonné Pro

#### ② Générateur SATB
- Sélecteur de progression harmonique (liste avec icône 🔒 sur les contenus Pro)
- Sélecteur de tonalité (liste avec icône 🔒 sur les tonalités Pro)
- Affichage des 4 voix S/A/T/B avec nom de note + octave
- Bouton ▶ Écouter (arpeggiation 70ms entre voix)
- Bouton 🔄 Régénérer
- Tap sur contenu verrouillé → ProGate (paywall contextuel)

#### ③ Cours
- Liste de 12 leçons V1 groupées par thème
- Badge FREE / PRO sur chaque leçon
- Écran détail : texte court + exemple SATB interactif cliquable + quiz 1 question

#### ④ Profil
- Statut abonnement (Gratuit / Pro actif + date renouvellement)
- Bouton "Passer à Pro" si gratuit
- Bouton "Gérer l'abonnement" (ouvre interface RevenueCat)
- Paramètres : langue (FR/EN), notation des notes (française/anglaise)
- Version de l'app

---

## 5. Modèle freemium & monétisation

### Tier Gratuit (permanent)
| Contenu | Limite |
|---------|--------|
| Progressions | 3 : II–V–I, I–IV–V, I–VI–IV–V |
| Tonalités | 3 : Do majeur, Sol majeur, Ré majeur |
| Audio | ✅ Inclus |
| Cours | 4 leçons d'introduction |

### Tier Pro
| Contenu | Quantité |
|---------|----------|
| Progressions | 22 (toutes) |
| Tonalités | 24 majeures + mineures |
| Cours | 12 leçons complètes |
| Régénération | Illimitée |

### Pricing
- **Mensuel :** 2,99€/mois
- **Annuel :** 19,99€/an (≈ 1,67€/mois, économie 44%)
- **Essai gratuit :** 7 jours (annuel uniquement)

### Mécanique de conversion
1. **Paywall onboarding** : affiché au 1er lancement après les 3 slides, offre annuelle mise en avant
2. **Paywall contextuel (ProGate)** : affiché au tap sur tout contenu verrouillé, même design
3. **Rappel doux** : bandeau sur l'écran Accueil si non abonné

### Implémentation RevenueCat
- Product IDs : `harmonia_pro_monthly` / `harmonia_pro_yearly`
- Entitlement : `pro`
- Vérification au lancement (avec cache hors-ligne)
- Webhooks RevenueCat → optionnel en V1

---

## 6. Audio

### Approche
Soundfont piano pré-rendu en fichiers `.mp3` individuels par note, bundlés dans l'app.

### Couverture
Notes de Do2 à Sol5 (gamme complète des 4 voix SATB + marge)

### Lecture
- `expo-av` avec `Audio.Sound`
- Arpeggiation : 70ms de délai entre chaque voix (identique au web)
- Ordre de lecture : Basse → Ténor → Alto → Soprano
- Fonctionne **hors ligne** (fichiers bundlés, ~10 Mo)

### Fallback
Si le fichier audio d'une note est manquant : silence (pas de crash)

---

## 7. Données & état

### State global (Zustand)
```typescript
interface SatbStore {
  selectedProgression: string;      // ex: "II-V-I"
  selectedTonalite: string;         // ex: "C"
  lastGenerated: SATBMeasure[];     // dernière génération
  isProUser: boolean;               // depuis RevenueCat
}
```

### Persistance
- `AsyncStorage` pour : dernière progression/tonalité sélectionnée, flag onboarding vu
- Pas de backend propre en V1
- RevenueCat gère la persistance de l'abonnement côté serveur

### Hors ligne
- Générateur SATB : 100% hors ligne (logique locale)
- Audio : 100% hors ligne (fichiers bundlés)
- Cours : 100% hors ligne (JSON bundlé)
- RevenueCat : cache local du statut Pro, vérification réseau au lancement

---

## 8. Contenu des cours V1

12 leçons réparties en 3 thèmes :

**Thème 1 — Règles de base (4 leçons, 2 gratuites)**
1. 🆓 Introduction au SATB — les 4 voix et leurs tessitures
2. 🆓 Les règles fondamentales — octaves et quintes parallèles
3. 🔒 Pro — Les doublures : quelle note doubler ?
4. 🔒 Pro — Mouvement des voix : contraire, oblique, direct

**Thème 2 — Cadences (4 leçons, 1 gratuite)**
5. 🆓 La cadence parfaite — V → I
6. 🔒 Pro — La cadence plagale — IV → I
7. 🔒 Pro — La cadence rompue — V → VI
8. 🔒 Pro — Les renversements d'accords en SATB

**Thème 3 — Progressions avancées (4 leçons, Pro)**
9. 🔒 Pro — II–V–I : la progression jazz fondamentale
10. 🔒 Pro — Le cycle des quintes
11. 🔒 Pro — Emprunt modal en SATB
12. 🔒 Pro — Chromatisme et accords de passage

---

## 9. Hors scope V1

Les éléments suivants sont **explicitement exclus** de la V1 :

- Compte utilisateur / authentification
- Synchronisation cloud / historique
- Export PDF ou MIDI
- Dictée harmonique
- Quiz multi-questions
- Notifications push
- Mode sombre/clair (app toujours en dark)
- Partage social
- Tableau de bord de progression

---

## 10. Critères de succès V1

- [ ] Génération SATB fonctionnelle pour les 22 progressions et 24 tonalités
- [ ] Audio des 4 voix jouable hors ligne
- [ ] Paywall onboarding + paywall contextuel opérationnels
- [ ] Abonnement Pro achetable et vérifiable (RevenueCat sandbox)
- [ ] 12 leçons de cours accessibles
- [ ] Build iOS + Android compilé via EAS
- [ ] Soumission App Store + Play Store
