"use client";
/**
 * src/components/Cours21.tsx
 * Harmonia — Cours 21 : Analyse des compositeurs modernes et contemporains
 */
import React, { useRef, useState, useMemo } from "react";
import PianoPlayer, { PianoPlayerRef } from "./PianoPlayer";
import MaitreCard from "./MaitreCard";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { useTerm } from "@/hooks/useTerm";
import { cours21Content } from "@/data/cours21Content";

const PRIMARY    = "#1A6B8A";
const PRIMARY_BG = "#EAF3F8";
const QUIZ_COUNT = 10;
const startOctave = 2;

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}
function playProg(ref: React.RefObject<PianoPlayerRef | null>, chords: string[][], gap = 700, dur = 1.0) {
  let t = 0;
  chords.forEach(ch => { setTimeout(() => ref.current?.playChord(ch, dur), t); t += gap; });
}

// ─── Compositeurs ────────────────────────────────────────────────────────────

const COMPOSERS = [
  {
    id: "debussy", name: "Debussy", fullName: "Claude Debussy",
    period: "1862–1918", era: "Impressionnisme", emoji: "🎨",
    color: "#1A6B8A", bg: "#EAF3F8",
    techniques: ["Accords par couleur (sans fonction)", "Gamme par tons", "Pentatonique et quintes parallèles"],
    harmonie: "Coloristique pure — les accords ne résolvent pas, ils créent des atmosphères comme des touches de peinture impressionniste",
    oeuvre: "Préludes pour piano · La Mer · Pelléas et Mélisande",
    oeuvreWhy: "Les Préludes (2 livres, 24 pièces) sont la bible de l'impressionnisme — chaque pièce est une aquarelle sonore libérée de la tonalité fonctionnelle.",
    // 9e parallèles sans résolution : 48,52,55,59,62 / 53,57,60,64,67 / 52,56,59,63
    demo: [["Do:3","Mi:3","Sol:3","Si:3","Ré:4"],["Fa:3","La:3","Do:4","Mi:4","Sol:4"],["Mi:3","Sol#:3","Si:3","Ré#:4"]],
    demoLabel: "Accords de 9e parallèles (sans résolution)",
  },
  {
    id: "ravel", name: "Ravel", fullName: "Maurice Ravel",
    period: "1875–1937", era: "Néoclassicisme / Impressionnisme tardif", emoji: "🔧",
    color: "#2D6A4F", bg: "#E5F3EE",
    techniques: ["Orchestration ciselée et précise", "Harmonie modale", "Ostinatos rythmiques"],
    harmonie: "Précise et artisanale — Ravel assemble ses accords avec une rigueur d'horloger, là où Debussy peint par intuition",
    oeuvre: "Boléro · La Valse · Concerto pour piano en Sol",
    oeuvreWhy: "Le Boléro (1928) est un seul thème répété 18 fois en crescendo continu — l'ostinato érigé en chef-d'œuvre orchestral.",
    // Mode ré dorien : 50,53,57,60 / 55,59,62,65 / 57,60,64,67 / 50,53,57,60
    demo: [["Ré:3","Fa:3","La:3","Do:4"],["Sol:3","Si:3","Ré:4","Fa:4"],["La:3","Do:4","Mi:4","Sol:4"],["Ré:3","Fa:3","La:3","Do:4"]],
    demoLabel: "Mode ré dorien (cadence modale de Ravel)",
  },
  {
    id: "stravinsky", name: "Stravinsky", fullName: "Igor Stravinsky",
    period: "1882–1971", era: "Modernisme / Néoclassicisme", emoji: "⚡",
    color: "#8B1A00", bg: "#FDF2EE",
    techniques: ["Polymétrie (changements de mesure constants)", "Bitonalité", "Violence rythmique et accents déplacés"],
    harmonie: "Dissonante et percussive — l'harmonie est au service de la brutalité rythmique, pas de l'expression mélodique",
    oeuvre: "Le Sacre du Printemps · L'Oiseau de Feu · Petrouchka",
    oeuvreWhy: "Le Sacre (1913) a provoqué une émeute à sa première — bitonalité, polymétrie et violence rythmique jamais vus jusqu'alors.",
    // Bitonalité Ré maj + Mib maj : 38,42,45,51,55,58 / 39,43,46,50,54,57
    demo: [["Ré:2","Fa#:2","La:2","Mib:3","Sol:3","Sib:3"],["Mib:2","Sol:2","Sib:2","Ré:3","Fa#:3","La:3"]],
    demoLabel: "Bitonalité : Ré majeur + Mib majeur (style Sacre)",
  },
  {
    id: "messiaen", name: "Messiaen", fullName: "Olivier Messiaen",
    period: "1908–1992", era: "Modernisme spirituel", emoji: "🕊️",
    color: "#6B2D7B", bg: "#F5EAF8",
    techniques: ["Modes à transpositions limitées", "Rythmes non-rétrogradables", "Synesthésie couleur-harmonie"],
    harmonie: "Modale et mystique — ses modes créent des couleurs harmoniques uniques évitant la résolution tonale conventionnelle",
    oeuvre: "Quatuor pour la fin du Temps · Catalogue d'Oiseaux · Turangalîla-Symphonie",
    oeuvreWhy: "Le Quatuor pour la fin du Temps (1941) a été composé en camp de prisonniers de guerre — spiritualité face à l'adversité absolue.",
    // Mode 2 (octatonique) : 48,51,54,57 / 48,52,56,59 / 48,51,54,57
    demo: [["Do:3","Ré#:3","Fa#:3","La:3"],["Do:3","Mi:3","Sol#:3","Si:3"],["Do:3","Ré#:3","Fa#:3","La:3"]],
    demoLabel: "Mode 2 de Messiaen (gamme octatonique)",
  },
  {
    id: "satie", name: "Satie", fullName: "Erik Satie",
    period: "1866–1925", era: "Avant-garde / Humour / Dépouillement", emoji: "🪶",
    color: "#5A4A3A", bg: "#F5F2EE",
    techniques: ["Accords parallèles non fonctionnels", "Simplicité dépouillée et répétitive", "Musique d'ameublement"],
    harmonie: "Naïvement sophistiquée — des accords de 7e majeure en mouvement parallèle, comme si les règles classiques n'avaient jamais existé",
    oeuvre: "Gymnopédies · Gnossiennes · Parade",
    oeuvreWhy: "Les 3 Gymnopédies (1888) anticipent de 30 ans le minimalisme et l'impressionnisme — une légèreté d'une révolution tranquille.",
    // 7e maj parallèles : 50,54,57,61 / 52,56,59,63 / 50,54,57,61
    demo: [["Ré:3","Fa#:3","La:3","Do#:4"],["Mi:3","Sol#:3","Si:3","Ré#:4"],["Ré:3","Fa#:3","La:3","Do#:4"]],
    demoLabel: "Accords de 7e majeure parallèles (Gymnopédies)",
  },
  {
    id: "beatles", name: "Beatles", fullName: "The Beatles",
    period: "1960–1970", era: "Pop / Rock classique", emoji: "🎸",
    color: "#CC2200", bg: "#FEEEEA",
    techniques: ["Emprunt modal (I→♭VII→IV mixolydien)", "Mélange majeur/mineur", "Innovations studio (bande inversée, 8 pistes)"],
    harmonie: "Instinctive et révolutionnaire — les Beatles ont popularisé l'harmonie modale pour des centaines de millions d'auditeurs",
    oeuvre: "Hey Jude · Let It Be · Yesterday · A Day in the Life",
    oeuvreWhy: "A Day in the Life (Sgt. Pepper, 1967) mélange pop et crescendo orchestral — une avancée formelle jamais égalée dans la pop.",
    // I–♭VII–IV–I en Do : 48,52,55,60 / 46,50,53,58 / 41,45,48,53 / 48,52,55,60
    demo: [["Do:3","Mi:3","Sol:3","Do:4"],["Sib:2","Ré:3","Fa:3","Sib:3"],["Fa:2","La:2","Do:3","Fa:3"],["Do:3","Mi:3","Sol:3","Do:4"]],
    demoLabel: "I–♭VII–IV–I (emprunt modal mixolydien Beatles)",
  },
  {
    id: "radiohead", name: "Radiohead", fullName: "Radiohead",
    period: "1985–présent", era: "Rock alternatif / Électronique", emoji: "📡",
    color: "#333366", bg: "#EEEEF8",
    techniques: ["Harmonie ambiguë (accords sans centre tonal clair)", "Polytonalité douce", "Fusion classique + électronique"],
    harmonie: "Flottante et anxieuse — des accords qui refusent d'appartenir clairement à une tonalité, créant une tension permanente",
    oeuvre: "OK Computer · Kid A · Pyramid Song · In Rainbows",
    oeuvreWhy: "Kid A (2000) fusionne rock, électronique et Messiaen/Ligeti — Thom Yorke a étudié les avant-gardes classiques du XXe siècle.",
    // Polytonalité douce : 48,52,55,58 / 45,48,52,55 / 50,53,57,60 / 55,59,62,65
    demo: [["Do:3","Mi:3","Sol:3","Sib:3"],["La:2","Do:3","Mi:3","Sol:3"],["Ré:3","Fa:3","La:3","Do:4"],["Sol:3","Si:3","Ré:4","Fa:4"]],
    demoLabel: "Harmonie ambiguë (polytonalité douce Radiohead)",
  },
  {
    id: "morricone", name: "Morricone", fullName: "Ennio Morricone",
    period: "1928–2020", era: "Cinématographique / Post-romantique", emoji: "🎬",
    color: "#7A5000", bg: "#FEF6E0",
    techniques: ["Leitmotifs narratifs", "Harmonie narrative (couleur = émotion du récit)", "Couleurs ethniques (sifflet, chœur, guimbarde)"],
    harmonie: "Cinématographique — chaque accord est choisi pour son pouvoir narratif, chaque timbre pour son impact émotionnel immédiat",
    oeuvre: "Le Bon la Brute le Truand · Il était une fois en Amérique · La Mission",
    oeuvreWhy: "Le thème du Bon, la Brute et le Truand (1966) avec sifflement et chœurs crée une identité sonore immédiatement reconnaissable.",
    // i–♭VII–♭VI–V (Aeolien) : 45,48,52,57 / 43,47,50,55 / 41,45,48,53 / 40,44,47,52
    demo: [["La:2","Do:3","Mi:3","La:3"],["Sol:2","Si:2","Ré:3","Sol:3"],["Fa:2","La:2","Do:3","Fa:3"],["Mi:2","Sol#:2","Si:2","Mi:3"]],
    demoLabel: "i–♭VII–♭VI–V (couleur narrative cinématographique)",
  },
];

// ─── Exercices d'analyse comparative ─────────────────────────────────────────

const ANALYSES = [
  {
    id: "a1",
    title: "Tonal vs Impressionniste : Bach ou Debussy ?",
    desc: "Bach résout sa dominante vers la tonique — la direction harmonique est inévitable. Debussy enchaîne des accords de 9e par mouvement parallèle sans jamais résoudre.",
    // Bach I–V–I : 48,52,55,60 / 55,59,62,67 / 48,52,55,60
    demo: [["Do:3","Mi:3","Sol:3","Do:4"],["Sol:3","Si:3","Ré:4","Sol:4"],["Do:3","Mi:3","Sol:3","Do:4"]],
    // Debussy 9e parallèles : 48,52,55,59,62 / 53,57,60,64,67 / 52,56,59,63
    demo2: [["Do:3","Mi:3","Sol:3","Si:3","Ré:4"],["Fa:3","La:3","Do:4","Mi:4","Sol:4"],["Mi:3","Sol#:3","Si:3","Ré#:4"]],
    question: "Laquelle de ces progressions illustre l'impressionnisme de Debussy ?",
    options: ["Version A — I–V–I (résolution tonale)", "Version B — 9e parallèles sans résolution", "Les deux sont identiques", "Ni l'une ni l'autre"],
    correct: 1,
    explanation: "Debussy enchaîne des accords de 9e en mouvement parallèle (Version B) sans chercher à résoudre — les accords flottent comme des couleurs sur une toile.",
  },
  {
    id: "a2",
    title: "Emprunt modal : Beatles vs progression classique",
    desc: "La progression I–IV–V–I résolve parfaitement dans la tonalité. Le I–♭VII–IV des Beatles emprunte le ♭VII au mode mixolydien — une couleur plus modale que tonale.",
    // Classique I–IV–V–I : 48,52,55 / 53,57,60 / 55,59,62 / 48,52,55,60
    demo: [["Do:3","Mi:3","Sol:3"],["Fa:3","La:3","Do:4"],["Sol:3","Si:3","Ré:4"],["Do:3","Mi:3","Sol:3","Do:4"]],
    // Beatles I–♭VII–IV–I : 48,52,55,60 / 46,50,53,58 / 41,45,48,53 / 48,52,55,60
    demo2: [["Do:3","Mi:3","Sol:3","Do:4"],["Sib:2","Ré:3","Fa:3","Sib:3"],["Fa:2","La:2","Do:3","Fa:3"],["Do:3","Mi:3","Sol:3","Do:4"]],
    question: "Laquelle utilise l'emprunt modal mixolydien des Beatles (I–♭VII–IV) ?",
    options: ["Version A — classique (I–IV–V–I)", "Version B — modal Beatles (I–♭VII–IV–I)", "Les deux sont modales", "Aucune des deux"],
    correct: 1,
    explanation: "Version B : le Sib (♭VII de Do) est emprunté au mode mixolydien — typique de Hey Jude, Let It Be, et d'innombrables chansons pop.",
  },
  {
    id: "a3",
    title: "Bitonalité Stravinsky vs tonalité simple",
    desc: "La bitonalité superpose deux tonalités. Stravinsky utilise Ré majeur + Mib majeur simultanément — une dissonance calculée au service de la violence rythmique.",
    // Ré majeur simple : 50,54,57 / 57,61,64 / 50,54,57
    demo: [["Ré:3","Fa#:3","La:3"],["La:3","Do#:4","Mi:4"],["Ré:3","Fa#:3","La:3"]],
    // Bitonalité : 38,42,45,51,55,58 / 39,43,46,50,54,57
    demo2: [["Ré:2","Fa#:2","La:2","Mib:3","Sol:3","Sib:3"],["Mib:2","Sol:2","Sib:2","Ré:3","Fa#:3","La:3"]],
    question: "Quelle version illustre la bitonalité de Stravinsky ?",
    options: ["Version A — Ré majeur seul", "Version B — Ré majeur + Mib majeur superposés", "Les deux sont bitonales", "Aucune des deux"],
    correct: 1,
    explanation: "Version B : Ré majeur (Ré Fa# La) et Mib majeur (Mib Sol Sib) sonnent simultanément — la technique centrale du Sacre du Printemps.",
  },
];

// ─── Questions quiz (92 questions) ──────────────────────────────────────────

const ALL_QUESTIONS = [
  // ── Debussy
  { id:"q1",  q:"Claude Debussy est né en :",                                   opts:["1850","1862","1875","1890"],                 ans:1, exp:"Debussy est né à Saint-Germain-en-Laye en 1862 et mort à Paris en 1918." },
  { id:"q2",  q:"L'impressionnisme musical consiste principalement à :",         opts:["Résoudre toutes les dominantes","Créer des atmosphères sonores par couleur","Écrire des fugues","Imiter Bach"], ans:1, exp:"Comme la peinture impressionniste, Debussy crée des atmosphères et des couleurs plutôt que des formes strictes." },
  { id:"q3",  q:"La gamme par tons de Debussy contient :",                       opts:["5 notes","6 notes","7 notes","8 notes"],     ans:1, exp:"6 notes espacées d'un ton entier — Do Ré Mi Fa# Sol# La# — sans demi-tons, créant une flottaison." },
  { id:"q4",  q:"Les accords 'par couleur' de Debussy signifient :",             opts:["Accords fonctionnels stricts","Accords choisis pour leur sonorité, sans fonction tonale","Mode dorien","Fugue baroque"], ans:1, exp:"Debussy choisit ses accords pour leur effet sonore immédiat, pas pour leur rôle fonctionnel tonal." },
  { id:"q5",  q:"La 'Mer' de Debussy est :",                                     opts:["Un opéra","Trois esquisses symphoniques pour orchestre","Une sonate","Un ballet"],                    ans:1, exp:"La Mer (1905) : 3 mouvements orchestraux — De l'aube à midi, Jeux de vagues, Dialogue du vent et de la mer." },
  { id:"q6",  q:"Les quintes parallèles sont interdites en harmonie classique mais Debussy :",  opts:["Les évite soigneusement","Les utilise systématiquement pour créer sa couleur","Les remplace par des tierces","Les évite comme Mozart"],                             ans:1, exp:"Debussy brise délibérément l'interdiction des quintes parallèles pour créer son effet de suspension." },
  { id:"q7",  q:"La gamme pentatonique a :",                                     opts:["5 notes","6 notes","7 notes","8 notes"],     ans:0, exp:"5 notes — typique des musiques asiatiques, elle influence l'impressionnisme de Debussy (pas de demi-tons)." },
  { id:"q8",  q:"Debussy appartient à :",                                        opts:["Le Baroque","L'Impressionnisme","Le Romantisme tardif","Le Néoclassicisme"],                       ans:1, exp:"Debussy (1862–1918) est le père de l'impressionnisme musical — un langage radicalement nouveau." },
  { id:"q9",  q:"Le Prélude à l'après-midi d'un Faune commence par :",          opts:["Un accord fortissimo","Un solo de flûte ambigu sans tonalité claire","Une fugue","Un thème de cors"], ans:1, exp:"Ce solo de flûte chromatique et flottant (1894) marque le début de la musique moderne." },
  { id:"q10", q:"Chez Debussy, la résolution dominante → tonique est :",        opts:["Systématique et obligatoire","Évitée ou délibérément ignorée","Renforcée","La base de tout"],      ans:1, exp:"Debussy libère l'harmonie de la 'tyrannie' de la résolution — ses dominantes flottent sans résoudre." },
  // ── Ravel
  { id:"q11", q:"Maurice Ravel est né en :",                                     opts:["1862","1875","1882","1900"],                 ans:1, exp:"Ravel est né à Ciboure (Pays basque) en 1875 et mort à Paris en 1937." },
  { id:"q12", q:"Le Boléro est basé sur :",                                      opts:["20 thèmes différents","Un seul thème répété 18 fois","3 mouvements","Une fugue"],                 ans:1, exp:"Un unique thème en crescendo continu — l'orchestration change à chaque répétition, pas le thème ni le rythme." },
  { id:"q13", q:"L'orchestration de Ravel est dite :",                           opts:["Impressionniste et floue","D'une précision ciselée d'horloger","Romantique et dense","Minimaliste"], ans:1, exp:"Ravel contrôle chaque note de chaque instrument — son orchestration est d'une précision absolue." },
  { id:"q14", q:"Le Boléro de Ravel est remarquable car le thème :",             opts:["Change constamment","Ne change jamais — seule l'orchestration évolue","S'accélère progressivement","Devient une fugue"], ans:1, exp:"Le même thème répété 18 fois à tempo et tonalité identiques — seule la couleur orchestrale change." },
  { id:"q15", q:"La Valse de Ravel est :",                                       opts:["Un poème chorégraphique pour orchestre","Une symphonie","Un concerto","Une fugue"],               ans:0, exp:"La Valse (1920) est un poème chorégraphique — une valse qui dégénère et s'emballe jusqu'à la destruction." },
  { id:"q16", q:"Le Concerto pour piano en Sol de Ravel est influencé par :",    opts:["Le baroque allemand","Le jazz américain","La musique russe","L'opéra italien"],                   ans:1, exp:"Ravel admire Gershwin — son Concerto en Sol (1932) incorpore le jazz, la syncope et le blues." },
  { id:"q17", q:"L'ostinato chez Ravel est :",                                   opts:["Une forme de fugue","Un court motif rythmique-mélodique répété obstinément","Une modulation","Un accord complexe"], ans:1, exp:"L'ostinato (ital. 'obstiné') est un motif répété — le Boléro en est l'exemple le plus poussé de l'histoire." },
  { id:"q18", q:"Ravel est de nationalité :",                                    opts:["Allemande","Française (basque)","Autrichienne","Russe"],                                          ans:1, exp:"Ravel est français, né dans le Pays basque — il a refusé la Légion d'honneur en 1920." },
  { id:"q19", q:"Daphnis et Chloé de Ravel est :",                              opts:["Un opéra","Un ballet pour les Ballets russes","Une symphonie","Un lied"],                         ans:1, exp:"Ballet en 3 parties (1912) créé pour les Ballets russes de Diaghilev — l'un des plus grands ballets orchestraux." },
  { id:"q20", q:"L'harmonie modale de Ravel utilise :",                          opts:["Uniquement Do majeur","Des modes grecs et médiévaux (dorien, phrygien…)","L'atonalité","Le contrepoint strict"], ans:1, exp:"Ravel s'appuie sur les modes pour créer des couleurs harmoniques différentes de la tonalité classique." },
  // ── Stravinsky
  { id:"q21", q:"Igor Stravinsky est né en :",                                   opts:["1862","1875","1882","1908"],                 ans:2, exp:"Stravinsky est né à Oranienbaum (Russie) en 1882 et mort à New York en 1971." },
  { id:"q22", q:"La polymétrie de Stravinsky consiste à :",                      opts:["Jouer en mesure fixe","Changer de mesure constamment (2/4, 3/4, 5/8…)","Jouer sans rythme","Utiliser la valse seule"], ans:1, exp:"Le Sacre du Printemps change de mesure à chaque mesure — 3/4, 2/4, 5/8, 3/8 s'enchaînent brutalement." },
  { id:"q23", q:"La première du Sacre du Printemps (1913) a provoqué :",        opts:["Des applaudissements enthousiastes","Une émeute dans la salle","Un succès immédiat","Des prix"],  ans:1, exp:"Le public siffla, cria, se battit — la bitonalité et la violence rythmique étaient trop nouvelles." },
  { id:"q24", q:"La bitonalité de Stravinsky superpose :",                       opts:["2 mélodies","2 tonalités différentes simultanément","2 instruments","2 tempos"],                  ans:1, exp:"Ré majeur + Mib majeur en même temps — deux centres tonaux incompatibles créant une dissonance calculée." },
  { id:"q25", q:"Le néoclassicisme de Stravinsky (années 1920-50) signifie :",  opts:["Revenir aux formes classiques avec un langage moderne","Imiter Bach exactement","Écrire en atonalité","Du pur jazz"], ans:0, exp:"Stravinsky reprend fugues, suites, concerto grosso — mais avec son langage harmonique personnel du XXe siècle." },
  { id:"q26", q:"L'Oiseau de Feu de Stravinsky est :",                           opts:["Un opéra","Un ballet (1910)","Une symphonie","Un concerto"],                                       ans:1, exp:"Ballet (1910) créé pour les Ballets russes — la première grande réussite de Stravinsky, d'abord dans un style post-romantique." },
  { id:"q27", q:"La 'violence rythmique' du Sacre désigne :",                    opts:["Un tempo très lent","Des rythmes asymétriques et des accents brutaux sur des temps inattendus","Un rythme de valse","Un tempo régulier"], ans:1, exp:"Les accents tombent sur des temps imprévisibles — les cordes frappent des accords d'une brutalité inouïe." },
  { id:"q28", q:"Petrouchka (1911) de Stravinsky est célèbre pour :",            opts:["Sa fugue","L'accord Petrouchka (Do# maj + Do maj superposés)","Un seul accord","Le mode éolien"], ans:1, exp:"L'accord Petrouchka (Do# majeur + Do majeur) préfigure le Sacre — la bitonalité comme signature sonore." },
  { id:"q29", q:"Stravinsky a traversé plusieurs styles dans sa vie :",           opts:["Il n'a eu qu'un seul style","Russe, néoclassique, puis sériel","Baroque puis romantique","Impressionniste seul"], ans:1, exp:"3 grandes périodes : Russe (Sacre), Néoclassique (Pulcinella), Sérielle tardive (Threni)." },
  { id:"q30", q:"Stravinsky représente :",                                        opts:["Le Baroque","Le Modernisme du XXe siècle","Le Romantisme","L'Impressionnisme seul"],               ans:1, exp:"Stravinsky (1882–1971) est l'un des compositeurs les plus influents du XXe siècle — 3 révolutions esthétiques." },
  // ── Messiaen
  { id:"q31", q:"Olivier Messiaen est né en :",                                  opts:["1875","1900","1908","1920"],                 ans:2, exp:"Messiaen est né à Avignon en 1908 et mort à Paris en 1992." },
  { id:"q32", q:"Un mode à transpositions limitées peut être transposé :",       opts:["Infiniment (12 transpositions)","Seulement 2 à 6 fois avant de retrouver les mêmes notes","12 fois exactement","Jamais"], ans:1, exp:"Le Mode 2 n'a que 3 transpositions, le Mode 3 que 4 — leur rareté crée une couleur unique." },
  { id:"q33", q:"Le Mode 2 de Messiaen est aussi appelé :",                      opts:["Pentatonique","Gamme octatonique ou diminuée (tons et demi-tons alternés)","Gamme par tons","Mode dorien"], ans:1, exp:"Mode 2 = Do Do# Ré# Mi Fa# Sol La Sib — tons et demi-tons alternés, 8 notes par octave." },
  { id:"q34", q:"Le Quatuor pour la fin du Temps a été composé :",               opts:["À l'Opéra de Paris","En camp de prisonniers (Görlitz, 1941)","À New York","Au conservatoire"],    ans:1, exp:"Messiaen compose et crée l'œuvre au Stalag VIII-A en Silésie, avec les instruments disponibles au camp." },
  { id:"q35", q:"Messiaen s'inspirait principalement de :",                      opts:["L'humour et la dérision","Les chants d'oiseaux et la spiritualité catholique","Le jazz américain","L'opéra italien"], ans:1, exp:"Messiaen transcrit des centaines de chants d'oiseaux et exprime sa foi catholique dans toute son œuvre." },
  { id:"q36", q:"Les rythmes 'non-rétrogradables' sont :",                       opts:["Des rythmes rapides","Des rythmes palindromes (identiques lus de gauche à droite ou de droite à gauche)","Des rythmes grecs","Des rythmes libres"], ans:1, exp:"Ex. : ♩♪♩ — le même dans les deux sens. Messiaen les utilise pour symboliser l'éternité." },
  { id:"q37", q:"Messiaen était professionnellement :",                           opts:["Organiste titulaire à la Trinité (Paris)","Pianiste de jazz","Chef d'orchestre","Chanteur lyrique"], ans:0, exp:"Messiaen a été organiste à l'église de la Trinité à Paris de 1931 jusqu'à sa mort en 1992." },
  { id:"q38", q:"La synesthésie de Messiaen signifie qu'il :",                   opts:["Était daltonien","Associait des couleurs précises à chaque accord","Peignait ses partitions","Aimait le cinéma"], ans:1, exp:"Messiaen 'voyait' les couleurs en entendant les sons — il annotait ses accords avec des couleurs." },
  { id:"q39", q:"La Turangalîla-Symphonie de Messiaen est :",                    opts:["Une pièce pour piano seul","Une grande symphonie pour orchestre et ondes Martenot","Une fugue","Un lied"], ans:1, exp:"10 mouvements (1948) pour grand orchestre avec ondes Martenot — un hymne à l'amour et à la joie." },
  { id:"q40", q:"Le Catalogue d'Oiseaux de Messiaen :",                          opts:["Décrit des chants d'oiseaux transcrits pour piano solo","Est une symphonie","Est un ballet","Est une fugue"], ans:0, exp:"13 pièces pour piano seul (1956–58) — chaque pièce transcrit les chants d'oiseaux d'une région de France." },
  // ── Satie
  { id:"q41", q:"Erik Satie est né en :",                                         opts:["1850","1866","1875","1882"],                 ans:1, exp:"Satie est né à Honfleur (Normandie) en 1866 et mort à Paris en 1925." },
  { id:"q42", q:"Les Gymnopédies sont :",                                          opts:["Des fugues complexes","Des pièces de piano légères à l'atmosphère mélancolique","Des symphonies","Des opéras"], ans:1, exp:"3 Gymnopédies (1888) — pièces de piano simples, lentes, avec des accords de 7e majeure parallèles." },
  { id:"q43", q:"La 'musique d'ameublement' de Satie est :",                       opts:["De la musique décorative d'arrière-plan, pas à écouter activement","Une fugue","Un ballet","Une sonate complexe"], ans:0, exp:"1920 : Satie joue pendant un vernissage pour meubler le silence. Il crie au public de parler et de ne pas écouter." },
  { id:"q44", q:"Les accords parallèles de Satie violent :",                        opts:["La règle de la résolution dominante","La règle du non-parallélisme de l'harmonie classique","La fugue","La forme sonate"], ans:1, exp:"L'harmonie classique interdit le mouvement parallèle de plusieurs voix — Satie l'ignore délibérément." },
  { id:"q45", q:"Satie était contemporain de :",                                    opts:["Bach","Debussy et Ravel","Mozart","Beethoven"],                                                  ans:1, exp:"Satie (1866–1925) est l'exact contemporain de Debussy (1862–1918) — une amitié artistique décisive." },
  { id:"q46", q:"La 'simplicité dépouillée' de Satie signifie :",                  opts:["Peu de notes, beaucoup d'espace et de silence","Atonalité totale","Orchestre immense","Contrepoint dense"], ans:0, exp:"Satie épure tout — ses pièces ont peu de notes, peu d'ornements, beaucoup d'espace entre les sons." },
  { id:"q47", q:"Parade (1917) de Satie incorpore :",                               opts:["Des fugues classiques","Des bruits de machine à écrire et de revolver dans l'orchestre","Un solo de violon","Un chœur de Bach"], ans:1, exp:"Ballet dadaïste avec Cocteau, Picasso et Diaghilev — les bruitages font scandale mais ouvrent la voie au XXe siècle." },
  { id:"q48", q:"Satie a influencé :",                                               opts:["Bach et Haendel","Les minimalistes, Debussy et John Cage","Mozart et Haydn","Scarlatti"],         ans:1, exp:"John Cage cite Satie comme l'un de ses grands maîtres — la musique d'ameublement préfigure l'ambient music." },
  { id:"q49", q:"Les Gnossiennes de Satie sont notées :",                           opts:["En 4/4 strict","Sans barres de mesure (notation rythmique libre)","En 3/4 de valse","En fugue"], ans:1, exp:"Les Gnossiennes (1890) n'ont pas de barres de mesure ni d'indication de tempo — un geste radical pour l'époque." },
  { id:"q50", q:"Satie est souvent décrit comme :",                                  opts:["Un compositeur conventionnel","Un humoriste de génie et un précurseur radical","Un virtuose du piano","Un chef d'orchestre"], ans:1, exp:"Ses titres humoristiques ('Trois morceaux en forme de poire') cachent une véritable révolution musicale." },
  // ── Beatles
  { id:"q51", q:"The Beatles vient de :",                                            opts:["Londres","Liverpool","Manchester","Birmingham"],                                                 ans:1, exp:"Liverpool — John Lennon, Paul McCartney, George Harrison et Ringo Starr." },
  { id:"q52", q:"La progression I–♭VII–IV emprunte au mode :",                     opts:["Dorien","Mixolydien","Phrygien","Lydien"],                                                       ans:1, exp:"Le ♭VII est la 7e abaissée du mode mixolydien — typique de Hey Jude (Sib dans la tonalité de Do)." },
  { id:"q53", q:"La chanson 'Yesterday' de Paul McCartney est en :",               opts:["Do majeur","Fa majeur","Sol majeur","La mineur"],                                               ans:1, exp:"Fa majeur — McCartney a trouvé la mélodie en rêve, il l'a d'abord appelée 'Scrambled Eggs'." },
  { id:"q54", q:"Le dernier album studio des Beatles est :",                        opts:["Sgt. Pepper (1967)","Let It Be (1970)","Abbey Road (1969)","Revolver (1966)"],                  ans:1, exp:"Let It Be (1970) est leur dernier album — Abbey Road avait été enregistré juste avant mais sorti après." },
  { id:"q55", q:"La bande inversée (backward recording) est utilisée dans :",       opts:["Tomorrow Never Knows (Revolver, 1966)","Yesterday","Hey Jude","Let It Be"],                    ans:0, exp:"Tomorrow Never Knows (1966) utilise des bandes inversées — c'est l'une des premières pièces de musique concrète pop." },
  { id:"q56", q:"A Day in the Life (1967) est remarquable car :",                  opts:["C'est une chanson simple","Elle mélange deux chansons avec un crescendo orchestral de 40 musiciens","Elle est en mode dorien","C'est une fugue"], ans:1, exp:"Lennon et McCartney collent deux chansons incomplètes et ajoutent un orchestre de 40 musiciens en crescendo." },
  { id:"q57", q:"La majorité des chansons des Beatles sont composées par :",       opts:["Paul seul","John et Paul (Lennon-McCartney)","George seul","Ringo seul"],                       ans:1, exp:"Le duo Lennon-McCartney est l'un des plus grands partenariats de composition de l'histoire de la musique." },
  { id:"q58", q:"Let It Be utilise principalement :",                               opts:["La gamme de blues complète","Des accords simples I–V–vi–IV au piano","La gamme par tons","Une fugue"], ans:1, exp:"La progression I–V–vi–IV (Do Sol La mineur Fa) est l'une des plus utilisées dans toute la pop." },
  { id:"q59", q:"Les Beatles ont arrêté de tourner en concert en :",               opts:["1963","1966","1970","1974"],                                                                     ans:1, exp:"Après le concert de Candlestick Park (août 1966) — le bruit des fans les rendait inaudibles sur scène." },
  { id:"q60", q:"L'emprunt modal des Beatles a influencé :",                       opts:["Le Baroque","Toute la musique pop-rock moderne jusqu'à aujourd'hui","Le jazz bop","La musique médiévale"], ans:1, exp:"I–♭VII–IV se retrouve partout depuis les Beatles — du rock au metal en passant par la pop électronique." },
  // ── Radiohead
  { id:"q61", q:"Radiohead vient de :",                                             opts:["Manchester","Abingdon (Oxford)","Liverpool","Londres"],                                          ans:1, exp:"Abingdon, près d'Oxford — Thom Yorke, Jonny Greenwood, Colin Greenwood, Ed O'Brien et Phil Selway." },
  { id:"q62", q:"Pyramid Song (2001) est connue pour :",                           opts:["Sa mesure 4/4 régulière","Ses silences asymétriques créant une mesure perçue irrégulière","Sa fugue","Sa gamme par tons"], ans:1, exp:"La pulsation semble irrégulière — en réalité c'est une suite de noires et de croches créant une flottaison rythmique." },
  { id:"q63", q:"Kid A (2000) incorpore des influences de :",                      opts:["Chopin et Liszt","Messiaen, Ligeti et la musique électronique","Bach et Haendel","Mozart"],      ans:1, exp:"Thom Yorke a étudié Messiaen et Ligeti pour concevoir les harmonies flottantes de Kid A." },
  { id:"q64", q:"L'harmonie 'ambiguë' de Radiohead signifie :",                   opts:["Des accords très simples","Des accords sans centre tonal clairement défini","Des fugues","De l'atonalité stricte"], ans:1, exp:"Les accords de Radiohead appartiennent souvent à plusieurs tonalités possibles — une ambiguité calculée." },
  { id:"q65", q:"Thom Yorke a étudié les œuvres de :",                            opts:["Bach et Haendel","Messiaen et Ligeti","Mozart uniquement","Brahms"],                             ans:1, exp:"Yorke cite Messiaen (modes) et Ligeti (micropolyphonie) comme influences directes sur l'écriture de Kid A." },
  { id:"q66", q:"OK Computer (1997) est souvent cité comme :",                    opts:["Une symphonie baroque","L'un des meilleurs albums rock de tous les temps","Un ballet","Un opéra classique"], ans:1, exp:"Régulièrement classé n°1 ou n°2 dans les listes des meilleurs albums de l'histoire — un monument du rock." },
  { id:"q67", q:"La 'polytonalité douce' de Radiohead signifie :",               opts:["Deux tonalités complètement opposées","Une légère ambiguité entre deux tonalités proches","Un mode grec unique","Atonalité stricte"], ans:1, exp:"Pas la brutalité de Stravinsky — une douceur où l'accord hésite entre deux centres tonaux." },
  { id:"q68", q:"In Rainbows (2007) a été distribué en premier en :",             opts:["CD en magasin uniquement","Prix libre sur internet (pay what you want)","Vinyle uniquement","Streaming uniquement"], ans:1, exp:"Radiohead a publié l'album en téléchargement à prix libre — une révolution dans le modèle musical de l'époque." },
  { id:"q69", q:"Jonny Greenwood (guitariste de Radiohead) incorpore dans son jeu :", opts:["Uniquement des accords pop simples","Des clusters, préparations et techniques de la musique contemporaine classique","La fugue baroque","Le contrepoint strict"], ans:1, exp:"Greenwood compose également de la musique contemporaine (Popcorn Superhet Receiver) et des bandes originales." },
  { id:"q70", q:"La fusion rock + classique + électronique de Radiohead préfigure :", opts:["Le Baroque","La musique post-rock et le genre néoclassique contemporain","Le jazz bop","L'opéra baroque"], ans:1, exp:"Radiohead ouvre la voie à tout un genre — Sigur Rós, Bon Iver, Arca — qui fusionne classique et électronique." },
  // ── Morricone
  { id:"q71", q:"Ennio Morricone est né en :",                                    opts:["1920","1928","1935","1940"],                 ans:1, exp:"Morricone est né à Rome en 1928 et mort en 2020 à 91 ans — l'une des carrières les plus longues." },
  { id:"q72", q:"Un 'leitmotif' cinématographique est :",                         opts:["Un accord unique","Un thème musical récurrent lié à un personnage ou une émotion","Une fugue","Un ostinato libre"], ans:1, exp:"Comme Wagner l'avait fait pour l'opéra, Morricone associe des thèmes précis à des personnages ou situations." },
  { id:"q73", q:"Le thème du Bon, la Brute et le Truand utilise :",               opts:["Un piano seul","Sifflement, voix imitant des animaux et cuivres","Une fugue","Un orchestre classique conventionnel"], ans:1, exp:"Le sifflement et les voix onomatopéiques (coyote) créent une identité sonore immédiatement reconnaissable." },
  { id:"q74", q:"Morricone est connu principalement pour :",                       opts:["Des opéras","Des musiques de film (western-spaghetti, drame, thriller)","Des symphonies classiques","Des ballets"], ans:1, exp:"Environ 500 musiques de film — dont les westerns de Sergio Leone, les thrillers d'Argento, les films de Tornatore." },
  { id:"q75", q:"L'harmonie 'narrative' de Morricone signifie :",                opts:["Une harmonie purement abstraite","Chaque accord évoque une émotion narrative précise","Contrepoint strict","Mode octatonique"], ans:1, exp:"Morricone choisit ses accords pour leur pouvoir narratif — l'harmonie raconte l'histoire autant que les images." },
  { id:"q76", q:"Il était une fois en Amérique (1984) de Morricone utilise :",   opts:["Des rythmes latinos","Des thèmes lyriques mélancoliques à la flûte de pan","Une fugue baroque","Du rock"], ans:1, exp:"La flûte de pan et le hautbois créent un sentiment de nostalgie — la mélancolie de l'immigrant américain." },
  { id:"q77", q:"Morricone a collaboré principalement avec le réalisateur :",     opts:["Spielberg","Sergio Leone","Hitchcock","Disney"],                                                   ans:1, exp:"Morricone et Leone se sont connus à l'école primaire — une collaboration de toute une vie (western-spaghetti)." },
  { id:"q78", q:"Les 'couleurs ethniques' de Morricone incluent :",               opts:["Seuls instruments classiques conventionnels","La voix comme instrument, le sifflet, la guimbarde","L'électronique pure","Le contrepoint baroque"], ans:1, exp:"Morricone intègre des instruments 'étranges' dans l'orchestre — sifflet, guimbarde, voix en onomatopée." },
  { id:"q79", q:"Morricone a composé de la musique pour environ :",               opts:["10 films","50 films","500 films et séries","2 films"],                                            ans:2, exp:"Environ 500 œuvres pour le cinéma et la télévision — une productivité hallucinante sur 60 ans." },
  { id:"q80", q:"La progression i–♭VII–♭VI–V est typique du :",                  opts:["Baroque","Style cinématographique de Morricone et du western","Jazz bebop","Impressionnisme"],  ans:1, exp:"Cette cadence andalouse ou 'flamenco' crée un sentiment de fatalité et d'espace — parfaite pour le western." },
  // ── Questions comparatives
  { id:"q81", q:"Quelle différence principale entre Debussy et Ravel ?",          opts:["Debussy: plus coloriste intuitif; Ravel: plus précis et artisanal","Ils sont identiques","Ravel est plus romantique","Debussy est néoclassique"], ans:0, exp:"Debussy peint par instinct impressionniste; Ravel construit avec la précision d'un horloger." },
  { id:"q82", q:"La modernité musicale du XXe siècle commence principalement avec :", opts:["Bach","Debussy et Stravinsky","Mozart","Vivaldi"],                                          ans:1, exp:"Debussy brise la tonalité par la couleur (1894–1918), Stravinsky par le rythme (1913) — deux révolutions complémentaires." },
  { id:"q83", q:"Quel artiste a le plus populariséI l'harmonie modale auprès du grand public ?", opts:["Bach","Les Beatles","Mozart","Haendel"],                                       ans:1, exp:"Les Beatles ont diffusé I–♭VII–IV à des centaines de millions d'auditeurs — l'emprunt modal est devenu universel." },
  { id:"q84", q:"La bitonalité est associée principalement à :",                  opts:["Debussy","Stravinsky","Satie","Morricone"],                                                      ans:1, exp:"Stravinsky (Petrouchka, Sacre) est le maître de la bitonalité — deux tonalités superposées." },
  { id:"q85", q:"La gamme par tons (6 notes sans demi-tons) est la signature de :", opts:["Ravel","Debussy","Stravinsky","Messiaen"],                                                  ans:1, exp:"Debussy utilise systématiquement la gamme par tons pour créer sa flottaison harmonique caractéristique." },
  { id:"q86", q:"Quel artiste incorpore des influences de Messiaen dans le rock ?", opts:["Satie","Radiohead","Beatles","Morricone"],                                                  ans:1, exp:"Thom Yorke (Radiohead) cite Messiaen comme influence directe — les harmonies flottantes de Kid A en sont la preuve." },
  { id:"q87", q:"La 'musique d'ameublement' de Satie préfigure :",               opts:["La musique de film","Le minimalisme et la musique d'ambiance (ambient music)","Le jazz bop","L'opéra du XXe siècle"], ans:1, exp:"Brian Eno cite Satie comme l'inventeur de l'ambient music — 60 ans avant Music for Airports (1978)." },
  { id:"q88", q:"Quel compositeur a le plus révolutionné le rythme musical ?",   opts:["Debussy","Ravel","Stravinsky","Satie"],                                                         ans:2, exp:"Stravinsky a placé le rythme au premier plan — avant lui, c'était la mélodie ou l'harmonie qui primait." },
  { id:"q89", q:"Les accords de 9e parallèles sans résolution sont la signature de :", opts:["Bach","Debussy","Mozart","Stravinsky"],                                                  ans:1, exp:"Debussy enchaîne les 9e majeures par mouvement parallèle — interdit en harmonie classique, révolutionnaire ici." },
  { id:"q90", q:"Le leitmotif narratif unit à la fois :",                         opts:["Bach et Haendel","Berlioz (idée fixe), Wagner et Morricone","Mozart et Haydn","Stravinsky et Satie"], ans:1, exp:"Berlioz l'invente (idée fixe), Wagner le systématise, Morricone l'adapte au cinéma — une continuité de 150 ans." },
  { id:"q91", q:"Quel compositeur représente le mieux la frontière classique/pop ?", opts:["Messiaen","Les Beatles","Stravinsky","Satie"],                                             ans:1, exp:"Les Beatles ont franchi la frontière — harmonie classique (modalité, chromatisme) dans un contexte pop." },
  { id:"q92", q:"Le Quatuor pour la fin du Temps de Messiaen est écrit pour :",  opts:["Piano seul","Violon, clarinette, violoncelle et piano","Quatuor à cordes","Grand orchestre"],   ans:1, exp:"Ces 4 instruments étaient disponibles au camp — Messiaen compose pour les musiciens prisonniers avec lui." },
];

// ─── Sous-composant : carte compositeur ──────────────────────────────────────

function ComposerCard({ c, pianoRef }: { c: typeof COMPOSERS[0]; pianoRef: React.RefObject<PianoPlayerRef | null> }) {
  const [open, setOpen] = useState(false);
  const tr = useTerm();
  return (
    <div style={{ border: `1.5px solid ${open ? c.color : "#e0dbd3"}`, borderRadius: 12, background: open ? c.bg : "#fff", transition: "all .2s", marginBottom: 12 }}>
      <button onClick={() => setOpen(!open)} style={{ width: "100%", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 14, textAlign: "left" }}>
        <span style={{ fontSize: 26 }}>{c.emoji}</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 15, fontWeight: 600, color: "#1a1a1a" }}>{c.name}</div>
          <div style={{ fontSize: 12, color: "#888", fontFamily: "system-ui" }}>{c.era} · {c.period}</div>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <span style={{ fontSize: 11, background: c.bg, border: `1px solid ${c.color}`, color: c.color, padding: "2px 8px", borderRadius: 8, fontFamily: "system-ui" }}>
            {c.techniques[0]}
          </span>
        </div>
        <span style={{ fontSize: 18, color: c.color, transform: open ? "rotate(45deg)" : "none", transition: "transform .2s", marginLeft: 8 }}>+</span>
      </button>

      {open && (
        <div style={{ padding: "0 20px 20px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
            {c.techniques.map(t => (
              <span key={t} style={{ fontSize: 12, background: "#fff", border: `1px solid ${c.color}`, color: c.color, padding: "3px 10px", borderRadius: 10, fontFamily: "system-ui" }}>{t}</span>
            ))}
          </div>

          <div style={{ fontSize: 13, color: "#555", fontFamily: "system-ui", lineHeight: 1.6, marginBottom: 16, padding: "10px 14px", background: "rgba(255,255,255,0.7)", borderRadius: 8, borderLeft: `3px solid ${c.color}` }}>
            <strong style={{ color: c.color }}>{tr("Couleur harmonique :")}</strong> {c.harmonie}
          </div>

          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: "#888", fontFamily: "system-ui", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>
              Progression emblématique — {c.demoLabel}
            </div>
            <button
              onClick={() => playProg(pianoRef, c.demo, 650, 1.0)}
              style={{ padding: "8px 18px", borderRadius: 20, border: `1.5px solid ${c.color}`, background: "#fff", color: c.color, fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "system-ui" }}
            >
              ▶ Écouter
            </button>
          </div>

          <div style={{ background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 8, padding: "12px 14px" }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: c.color, fontFamily: "system-ui", marginBottom: 4 }}>Œuvre de référence</div>
            <div style={{ fontSize: 14, fontWeight: 500, color: "#1a1a1a", marginBottom: 4 }}>{c.oeuvre}</div>
            <div style={{ fontSize: 13, color: "#666", lineHeight: 1.6, fontFamily: "system-ui" }}>{c.oeuvreWhy}</div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Sous-composant : exercice d'analyse ─────────────────────────────────────

function AnalysisCard({ a, pianoRef }: { a: typeof ANALYSES[0]; pianoRef: React.RefObject<PianoPlayerRef | null> }) {
  const [selected, setSelected] = useState<number | null>(null);
  const answered = selected !== null;
  return (
    <div style={{ border: "1px solid #e0dbd3", borderRadius: 12, background: "#fff", padding: "24px", marginBottom: 16 }}>
      <div style={{ fontSize: 16, fontWeight: 500, color: "#1a1a1a", marginBottom: 8 }}>{a.title}</div>
      <div style={{ fontSize: 13, color: "#666", lineHeight: 1.6, fontFamily: "system-ui", marginBottom: 16 }}>{a.desc}</div>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 20 }}>
        <button onClick={() => playProg(pianoRef, a.demo, 650, 1.0)} style={{ padding: "7px 16px", borderRadius: 16, border: "1.5px solid #1a1a1a", background: "#fff", color: "#1a1a1a", fontSize: 12, fontWeight: 500, cursor: "pointer", fontFamily: "system-ui" }}>▶ Version A</button>
        {(a as any).demo2 && (
          <button onClick={() => playProg(pianoRef, (a as any).demo2, 650, 1.0)} style={{ padding: "7px 16px", borderRadius: 16, border: "1.5px solid #555", background: "#fff", color: "#555", fontSize: 12, fontWeight: 500, cursor: "pointer", fontFamily: "system-ui" }}>▶ Version B</button>
        )}
      </div>

      <div style={{ fontSize: 14, fontWeight: 500, color: "#1a1a1a", marginBottom: 12, fontFamily: "system-ui" }}>{a.question}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {a.options.map((opt, i) => {
          const isCorrect = i === a.correct;
          const isSelected = selected === i;
          let bg = "#faf8f4", border = "#e0dbd3", color = "#333";
          if (answered) {
            if (isCorrect)       { bg = "#E5F3EF"; border = "#0F6E56"; color = "#0F6E56"; }
            else if (isSelected) { bg = "#FFF5F5"; border = "#FC8181"; color = "#C53030"; }
          }
          return (
            <button key={i} onClick={() => !answered && setSelected(i)} disabled={answered} style={{ padding: "10px 14px", border: `1.5px solid ${border}`, borderRadius: 8, background: bg, color, fontSize: 13, textAlign: "left", cursor: answered ? "default" : "pointer", fontFamily: "system-ui", lineHeight: 1.4 }}>
              {answered && isCorrect && "✓ "}{answered && isSelected && !isCorrect && "✗ "}{opt}
            </button>
          );
        })}
      </div>
      {answered && (
        <div style={{ marginTop: 14, padding: "10px 14px", background: "#E5F3EF", borderRadius: 8, fontSize: 13, color: "#0F6E56", fontFamily: "system-ui", lineHeight: 1.6 }}>
          {a.explanation}
        </div>
      )}
    </div>
  );
}

// ─── Composant principal ─────────────────────────────────────────────────────

export default function Cours21() {
  const { badge, title, subtitle } = useCoursI18n("cours21");
  const tr = useTerm();
  const { questions: ALL_QUESTIONS } = useCoursContent(cours21Content);
  const pianoRef = useRef<PianoPlayerRef | null>(null);
  const [section, setSection] = useState<"compositeurs"|"analyse"|"quiz">("compositeurs");

  const SECTIONS = [
    { id: "compositeurs" as const, label: "Compositeurs" },
    { id: "analyse"      as const, label: "Analyse comparative" },
    { id: "quiz"         as const, label: "Quiz" },
  ];

  const questions = useMemo(() => shuffle(ALL_QUESTIONS).slice(0, QUIZ_COUNT), []);
  const [qIdx, setQIdx]             = useState(0);
  const [answers, setAnswers]       = useState<(number|null)[]>(Array(QUIZ_COUNT).fill(null));
  const [showResult, setShowResult] = useState(false);

  const currentQ = questions[qIdx];
  const answered = answers[qIdx] !== null;
  const score    = answers.filter((a, i) => a === questions[i].ans).length;

  function handleAnswer(i: number) {
    if (answered) return;
    setAnswers(prev => { const n = [...prev]; n[qIdx] = i; return n; });
  }

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: "#faf8f4", minHeight: "100vh", color: "#1a1a1a" }}>
      <PianoPlayer ref={pianoRef} startOctave={startOctave} />

      {/* Hero */}
      <div style={{ background: PRIMARY_BG, borderBottom: `1px solid ${PRIMARY}22`, padding: "3rem 1.5rem 2rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: PRIMARY, textTransform: "uppercase", fontFamily: "system-ui", marginBottom: 10 }}>{badge}</div>
          <h1 style={{ fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 400, margin: "0 0 12px", letterSpacing: "-0.01em" }}>{title}</h1>
          <p style={{ fontSize: 15, color: "#666", margin: "0 0 28px", lineHeight: 1.7, fontFamily: "system-ui" }}>{subtitle}</p>

          <MaitreCard
            composer="Claude Debussy"
            period="1862–1918"
            emoji="🎨"
            concept="Accords comme couleurs — libérer l'harmonie de la résolution dominante-tonique"
            anecdote="Debussy a été renvoyé plusieurs fois du Conservatoire de Paris pour avoir joué des accords 'incorrects'. Son professeur notait : 'Il fait ce qui lui plaît.' C'était exactement son but."
            lesson="Debussy traite les accords comme des couleurs sur une toile — un accord de 9e n'a pas à résoudre, il peut flotter et créer une atmosphère, comme une tache de peinture impressionniste."
            accentColor={PRIMARY}
          />
        </div>
      </div>

      {/* Navigation sections */}
      <div style={{ borderBottom: "1px solid #e8e3db", background: "#fff", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", gap: 0 }}>
          {SECTIONS.map(s => (
            <button key={s.id} onClick={() => setSection(s.id)} style={{ padding: "14px 20px", background: "none", border: "none", borderBottom: section === s.id ? `2px solid ${PRIMARY}` : "2px solid transparent", color: section === s.id ? PRIMARY : "#888", fontSize: 14, fontWeight: section === s.id ? 600 : 400, cursor: "pointer", fontFamily: "system-ui", transition: "color .15s" }}>
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1.5rem" }}>

        {/* ── Section Compositeurs ── */}
        {section === "compositeurs" && (
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: PRIMARY, textTransform: "uppercase", fontFamily: "system-ui", marginBottom: 20 }}>
              8 COMPOSITEURS — De l'Impressionnisme au Rock contemporain
            </div>
            <div style={{ fontSize: 13, color: "#666", fontFamily: "system-ui", marginBottom: 24, lineHeight: 1.7, padding: "12px 16px", background: PRIMARY_BG, borderRadius: 8, borderLeft: `3px solid ${PRIMARY}` }}>
              De Debussy qui brise la tonalité par la couleur, à Radiohead qui fusionne Messiaen et l'électronique — le XXe siècle multiplie les langages harmoniques. Clique sur chaque carte pour explorer les techniques, écouter la progression et comprendre l'œuvre de référence.
            </div>
            {COMPOSERS.map(c => <ComposerCard key={c.id} c={c} pianoRef={pianoRef} />)}
          </div>
        )}

        {/* ── Section Analyse ── */}
        {section === "analyse" && (
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: PRIMARY, textTransform: "uppercase", fontFamily: "system-ui", marginBottom: 20 }}>
              TONAL · MODAL · BITONAL — Trois façons de penser l'harmonie
            </div>
            <div style={{ fontSize: 13, color: "#666", fontFamily: "system-ui", marginBottom: 24, lineHeight: 1.7, padding: "12px 16px", background: PRIMARY_BG, borderRadius: 8, borderLeft: `3px solid ${PRIMARY}` }}>
              Compare les progressions, écoute les deux versions et identifie le style. L'oreille reconnaît avant le cerveau — fais confiance à ta première impression.
            </div>
            {ANALYSES.map(a => <AnalysisCard key={a.id} a={a} pianoRef={pianoRef} />)}
          </div>
        )}

        {/* ── Section Quiz ── */}
        {section === "quiz" && (
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: PRIMARY, textTransform: "uppercase", fontFamily: "system-ui", marginBottom: 20 }}>
              QUIZ — {QUIZ_COUNT} QUESTIONS SUR {ALL_QUESTIONS.length} DISPONIBLES
            </div>

            {!showResult ? (
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12, fontFamily: "system-ui" }}>
                  <span style={{ fontSize: 12, color: "#888" }}>Question {qIdx + 1} / {QUIZ_COUNT}</span>
                  <span style={{ fontSize: 12, color: PRIMARY }}>{answers.filter(a => a !== null).length} répondues</span>
                </div>
                <div style={{ height: 4, background: "#e8e3db", borderRadius: 2, marginBottom: 24 }}>
                  <div style={{ height: "100%", width: `${((qIdx + 1) / QUIZ_COUNT) * 100}%`, background: PRIMARY, borderRadius: 2, transition: "width .3s" }} />
                </div>

                <div style={{ background: "#fff", border: "1px solid #e8e3db", borderRadius: 12, padding: "24px" }}>
                  <div style={{ fontSize: 16, fontWeight: 500, color: "#1a1a1a", marginBottom: 20, lineHeight: 1.5 }}>
                    {currentQ.q}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
                    {currentQ.opts.map((opt, i) => {
                      const isCorrect  = i === currentQ.ans;
                      const isSelected = answers[qIdx] === i;
                      let bg = "#faf8f4", border = "#e0dbd3", color = "#333";
                      if (answered) {
                        if (isCorrect)       { bg = "#E5F3EF"; border = "#0F6E56"; color = "#0F6E56"; }
                        else if (isSelected) { bg = "#FFF5F5"; border = "#FC8181"; color = "#C53030"; }
                      }
                      return (
                        <button key={i} onClick={() => handleAnswer(i)} disabled={answered} style={{ padding: "12px 16px", border: `1.5px solid ${border}`, borderRadius: 8, background: bg, color, fontSize: 14, textAlign: "left", cursor: answered ? "default" : "pointer", fontFamily: "system-ui", lineHeight: 1.4 }}>
                          {answered && isCorrect && "✓ "}{answered && isSelected && !isCorrect && "✗ "}{opt}
                        </button>
                      );
                    })}
                  </div>

                  {answered && (
                    <div style={{ padding: "12px 16px", background: "#E5F3EF", borderRadius: 8, fontSize: 13, color: "#0F6E56", lineHeight: 1.7, marginBottom: 16, fontFamily: "system-ui" }}>
                      {currentQ.exp}
                    </div>
                  )}

                  <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                    <button onClick={() => setQIdx(i => Math.max(0, i - 1))} disabled={qIdx === 0} style={{ padding: "10px 20px", borderRadius: 6, border: "1px solid #e0dbd3", background: "#fff", color: "#888", fontSize: 13, cursor: qIdx === 0 ? "not-allowed" : "pointer", fontFamily: "system-ui", opacity: qIdx === 0 ? 0.4 : 1 }}>← Précédente</button>
                    {qIdx < QUIZ_COUNT - 1 ? (
                      <button onClick={() => setQIdx(i => i + 1)} disabled={!answered} style={{ padding: "10px 24px", borderRadius: 6, border: "none", background: answered ? PRIMARY : "#e0dbd3", color: "#fff", fontSize: 13, cursor: answered ? "pointer" : "not-allowed", fontFamily: "system-ui" }}>{tr("Suivante →")}</button>
                    ) : (
                      <button onClick={() => setShowResult(true)} disabled={answers.filter(a => a !== null).length < QUIZ_COUNT} style={{ padding: "10px 24px", borderRadius: 6, border: "none", background: PRIMARY, color: "#fff", fontSize: 13, cursor: "pointer", fontFamily: "system-ui" }}>{tr("Voir le résultat")}</button>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ background: "#fff", border: "1px solid #e8e3db", borderRadius: 12, padding: "32px", textAlign: "center" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>{score >= 8 ? "🎨" : score >= 5 ? "🎸" : "📡"}</div>
                <div style={{ fontSize: 32, fontWeight: 400, color: PRIMARY, marginBottom: 8 }}>{score} / {QUIZ_COUNT}</div>
                <div style={{ fontSize: 15, color: "#666", fontFamily: "system-ui", marginBottom: 28 }}>
                  {score === QUIZ_COUNT ? "Parfait ! Les langages du XXe siècle n'ont plus de secrets." : score >= 7 ? "Très bien ! Quelques compositeurs à revoir." : "Continue à explorer — l'harmonie moderne se découvre à l'écoute."}
                </div>
                <button onClick={() => { setAnswers(Array(QUIZ_COUNT).fill(null)); setQIdx(0); setShowResult(false); }} style={{ padding: "12px 28px", borderRadius: 6, border: "none", background: PRIMARY, color: "#fff", fontSize: 14, cursor: "pointer", fontFamily: "system-ui" }}>
                  Recommencer
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
