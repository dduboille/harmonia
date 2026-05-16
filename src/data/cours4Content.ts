// Auto-generated: quiz content for Cours4 — translations can be added per-locale.
// Structural data arrays (DEGREES, MODES, etc.) remain in the component for now.

export interface Question { q: string; opts: string[]; a: number; fb: string; }
export interface Cours4Locale { questions: Question[]; }

const questionsFr: Question[] = [
  // Cadences — identification
  { q: "Quelle cadence se termine sur le Ve degré ?", opts: ["Parfaite", "Plagale", "Demi-cadence", "Rompue"], a: 2, fb: "La demi-cadence se termine sur la dominante (V). Elle laisse la phrase en suspens, comme une question." },
  { q: "Quelle cadence enchaîne IV → I ?", opts: ["Parfaite", "Plagale", "Rompue", "Imparfaite"], a: 1, fb: "La cadence plagale = IV → I. Douce et solennelle, c'est l'«Amen» de l'harmonie." },
  { q: "Quelle cadence surprend l'oreille en résolvant sur VI ?", opts: ["Plagale", "Imparfaite", "Rompue", "Parfaite"], a: 2, fb: "La cadence rompue : V → VI au lieu de V → I. L'oreille attendait la tonique — elle arrive sur la sus-dominante." },
  { q: "La cadence parfaite nécessite que les accords V et I soient :", opts: ["Renversés", "À l'état fondamental", "Arpeggés", "En mode mineur"], a: 1, fb: "Condition de la cadence parfaite : les deux accords doivent être à l'état fondamental. Sinon c'est une cadence imparfaite." },
  { q: "Quelle est la différence entre cadence parfaite et imparfaite ?", opts: ["Le tempo", "L'un est en majeur, l'autre en mineur", "Au moins un accord est renversé dans l'imparfaite", "La parfaite utilise IV → I"], a: 2, fb: "La cadence imparfaite utilise aussi V → I, mais au moins un des deux accords est renversé — ce qui adoucit la conclusion." },
  { q: "En C majeur, quelle cadence parfaite utilise G7 → C ?", opts: ["Plagale", "Demi-cadence", "Cadence parfaite", "Cadence rompue"], a: 2, fb: "G7 → C : le Ve degré (G7) résout sur le Ier (C), les deux à l'état fondamental → cadence parfaite." },
  { q: "La cadence plagale est souvent associée à :", opts: ["La tension maximale", "La musique sacrée et le blues", "Les transitions modulantes", "Les introductions"], a: 1, fb: "La cadence plagale (IV → I) a une couleur douce et solennelle, très présente dans la musique religieuse et le blues." },
  { q: "Quelle cadence prolonge le discours musical par effet de surprise ?", opts: ["Parfaite", "Plagale", "Demi-cadence", "Rompue"], a: 3, fb: "La cadence rompue déjoue les attentes : au lieu de résoudre sur I, la dominante résout sur VI, prolongeant la phrase." },
  // Progressions
  { q: "Quelle technique consiste à enchaîner deux accords de même fonction ?", opts: ["Le pendule", "L'extension de fonction", "Le cycle des quintes", "La modulation"], a: 1, fb: "L'extension de fonction prolonge une fonction (souvent SD) en enchaînant plusieurs accords de même rôle avant la résolution." },
  { q: "Quelle est la formule du cycle des quintes en C majeur ?", opts: ["C–G–Am–Em–F–Dm–Bdim–C", "C–F–Bdim–Em–Am–Dm–G7–C", "C–Dm–Em–F–G–Am–Bdim–C", "C–Am–F–G–C"], a: 1, fb: "C → F → Bdim → Em → Am → Dm → G7 → C. Chaque accord descend d'une quinte dans la gamme." },
  { q: "Le pendule alterne typiquement entre :", opts: ["T et D", "T et SD", "SD et D", "D et D"], a: 1, fb: "Le pendule oscille le plus souvent entre la Tonique (I) et la Sous-dominante (IV), créant un effet de balancement." },
  { q: "La structure SD → D → T est :", opts: ["Une modulation", "La colonne vertébrale de l'harmonie tonale", "Un type de cadence", "Une technique de renversement"], a: 1, fb: "SD → D → T est le cycle fondamental de l'harmonie tonale. Toutes les techniques de progression s'organisent autour de lui." },
  { q: "Dans le cycle des quintes diatonique, quel mouvement relie chaque accord ?", opts: ["Montée d'une tierce", "Descente d'une quarte", "Descente d'une quinte (= montée d'une quarte)", "Montée d'une seconde"], a: 2, fb: "Descendre d'une quinte équivaut à monter d'une quarte. Ce mouvement crée une attraction naturelle entre les fondamentales." },
  { q: "Quel degré de la gamme majeure donne la seule triade diminuée ?", opts: ["IVe", "Ve", "VIe", "VIIe"], a: 3, fb: "Le VIIe degré (B en C majeur) donne Bdim. C'est la seule triade diminuée de la gamme majeure." },
  { q: "Quelle progression illustre un pendule T–SD ?", opts: ["C–G7–C", "C–F–C–F", "Dm–G7–C", "F–C–G7–C"], a: 1, fb: "C–F–C–F oscille entre le Ier (C, tonique) et le IVe (F, sous-dominante) — c'est le pendule T–SD." },
  { q: "L'extension de fonction sur la sous-dominante donne par exemple :", opts: ["C–G7–C", "Dm–F–G7–C", "F–C–F–C", "G7–Am–G7–C"], a: 1, fb: "Dm–F–G7–C : deux accords de sous-dominante (Dm et F) précèdent la dominante (G7) puis la tonique (C)." },
  // Fonctions rappel
  { q: "Quelle fonction contient les deux notes du triton (IV + VII) ?", opts: ["Tonique", "Sous-dominante", "Dominante", "Médiante"], a: 2, fb: "La fonction dominante contient le triton complet (IVe + VIIe degrés). En C majeur : F + B dans G7." },
  { q: "En C majeur, quels accords ont la fonction tonique ?", opts: ["C et G", "C et Am", "F et Dm", "G7 et Bdim"], a: 1, fb: "C (Ier) et Am (VIe) sont les accords de fonction tonique en C majeur. Ils ne contiennent aucune note du triton F–B." },
  { q: "Quel accord prépare la dominante dans SD → D → T ?", opts: ["La tonique", "La sous-dominante", "La médiante", "La sensible"], a: 1, fb: "La sous-dominante (IV ou II en C majeur) prépare la tension avant la dominante." },
  { q: "En C majeur, quelle substitution peut remplacer F dans une progression ?", opts: ["G7", "Em", "Dm", "Am"], a: 2, fb: "Dm est la substitution diatonique de F — tous deux ont la fonction sous-dominante. On peut les échanger librement." },
  // Analyse
  { q: "La progression Dm → G7 → C est :", opts: ["Un pendule", "Un cycle des quintes partiel", "Un II–V–I", "Une cadence rompue"], a: 2, fb: "Dm → G7 → C = II–V–I : la progression cadentielle fondamentale de la musique tonale (et du jazz)." },
  { q: "Dans la progression C → F → C → F → G7 → C, on identifie :", opts: ["Un cycle des quintes", "Une extension de dominante", "Un pendule suivi d'une cadence parfaite", "Deux cadences rompues"], a: 2, fb: "C–F–C–F = pendule T–SD. Puis G7 → C = cadence parfaite. C'est le schéma type du pendule avec résolution finale." },
  { q: "Quelle est la fonction harmonique de Am en C majeur ?", opts: ["Dominante", "Sous-dominante", "Tonique", "Modulante"], a: 2, fb: "Am (VIe degré) a la fonction tonique. Il ne contient ni F ni B — aucune note du triton fonctionnel." },
  { q: "En C majeur, G7 résolvant sur Am plutôt que sur C est une :", opts: ["Cadence parfaite", "Cadence imparfaite", "Cadence plagale", "Cadence rompue"], a: 3, fb: "G7 → Am : la dominante résout sur le VIe degré au lieu du Ier. C'est la cadence rompue — l'effet de surprise." },
  { q: "Quel enchaînement NE respecte PAS SD → D → T ?", opts: ["Dm–G7–C", "F–G7–C", "C–F–G7", "C–G7–F"], a: 3, fb: "C–G7–F : on passe de la tonique (C) à la dominante (G7) puis à la sous-dominante (F). T → D → SD est un mouvement régressif — inhabituel." },

  // ── Cadences dans d'autres tonalités ──
  { q: "En G majeur, quelle progression forme une cadence parfaite ?", opts: ["C→G", "D7→G", "G→D7", "Em→G"], a: 1, fb: "D7 → G : la dominante (Ve degré = D7) résout sur la tonique (Ier = G) à l'état fondamental → cadence parfaite." },
  { q: "En F majeur, quelle progression forme une cadence parfaite ?", opts: ["Bb→F", "C7→F", "F→C7", "Dm→F"], a: 1, fb: "C7 → F : le Ve degré de F majeur est C. C7 → F à l'état fondamental = cadence parfaite." },
  { q: "En D majeur, la cadence plagale est :", opts: ["A7→D", "G→D", "D→A7", "Bm→D"], a: 1, fb: "G → D : le IVe degré de D majeur est G. G → D = cadence plagale (IV → I)." },
  { q: "En G majeur, la cadence rompue typique est :", opts: ["D7→G", "D7→Em", "C→G", "G→D7"], a: 1, fb: "D7 → Em : la dominante de G majeur résout sur le VIe degré (Em) au lieu du Ier → cadence rompue." },
  { q: "En A majeur, quelle progression est une demi-cadence ?", opts: ["E7→A", "D→E7", "A→D", "F#m→A"], a: 1, fb: "D → E7 : on arrive sur le Ve degré (E7) sans le résoudre → demi-cadence, phrase en suspens." },
  { q: "En C mineur, la cadence parfaite utilise :", opts: ["Fm→Cm", "G7→Cm", "Cm→G7", "Ab→Cm"], a: 1, fb: "G7 → Cm : la dominante (G7, même en mineur harmonique) résout sur la tonique mineure = cadence parfaite." },

  // ── Situations musicales ──
  { q: "Une phrase musicale se termine et l'on ressent une suspension, une attente. C'est :", opts: ["Cadence parfaite", "Cadence rompue", "Demi-cadence", "Cadence plagale"], a: 2, fb: "La demi-cadence laisse la phrase ouverte sur la dominante — sensation d'attente, de question sans réponse." },
  { q: "Un hymne se termine par IV → I. Quel nom porte cette cadence ?", opts: ["Parfaite", "Imparfaite", "Rompue", "Plagale"], a: 3, fb: "IV → I est la cadence plagale, souvent appelée 'Amen' en raison de son usage fréquent dans la musique sacrée." },
  { q: "L'auditeur s'attend à une résolution sur I, mais l'accord VI arrive à la place. C'est :", opts: ["Une demi-cadence", "Une cadence parfaite", "Une cadence rompue", "Une extension de fonction"], a: 2, fb: "V → VI au lieu de V → I = cadence rompue. L'effet de surprise prolonge la phrase là où l'oreille attendait la fin." },
  { q: "Une phrase se termine sur V, puis une nouvelle phrase commence. C'est :", opts: ["Cadence parfaite", "Demi-cadence", "Cadence rompue", "Cadence plagale"], a: 1, fb: "Terminer sur la dominante (V) sans résoudre = demi-cadence. Elle crée une coupure naturelle entre deux phrases." },
  { q: "Une progression tourne en boucle C–F–C–F avant de résoudre. Quelle technique est utilisée ?", opts: ["Extension de dominante", "Pendule T–SD", "Cycle des quintes", "Cadence rompue"], a: 1, fb: "Alterner entre Tonique (C) et Sous-dominante (F) = pendule T–SD. La résolution viendra plus tard." },
  { q: "La progression Dm–F–G7–C utilise deux accords SD. C'est une :", opts: ["Demi-cadence", "Extension de fonction SD", "Cadence rompue", "Cadence plagale"], a: 1, fb: "Dm et F ont tous deux la fonction sous-dominante. Les enchaîner avant G7–C = extension de la fonction SD." },

  // ── Analyse de progressions ──
  { q: "Quelle est la fonction de F dans la progression F–G7–C ?", opts: ["Tonique", "Dominante", "Sous-dominante", "Médiante"], a: 2, fb: "F (IVe degré de C) a la fonction sous-dominante. F–G7–C = SD–D–T, la progression fondamentale." },
  { q: "Dans Am–Dm–G7–C, quel accord a la fonction tonique ?", opts: ["Am uniquement", "C uniquement", "Am et C", "Dm et G7"], a: 2, fb: "Am (VIe degré) et C (Ier degré) ont tous deux la fonction tonique — ils ne contiennent pas les notes du triton F–B." },
  { q: "Dans la progression C–Am–F–G, quel est l'enchaînement fonctionnel ?", opts: ["T–T–SD–D", "T–D–SD–T", "SD–T–D–SD", "D–T–SD–D"], a: 0, fb: "C=T, Am=T, F=SD, G=D → T–T–SD–D. Cette progression (I–VI–IV–V) est une des plus utilisées en pop." },
  { q: "La progression G7–Am en C majeur est une :", opts: ["Cadence parfaite", "Cadence imparfaite", "Demi-cadence", "Cadence rompue"], a: 3, fb: "G7 → Am : la dominante résout sur le VIe degré (Am) au lieu du Ier (C) → cadence rompue." },
  { q: "Quelle progression termine sur la dominante et crée une attente ?", opts: ["C–F–G7–C", "C–F–G7", "F–C–G7–C", "C–G7–Am–C"], a: 1, fb: "C–F–G7 se termine sur G7 sans résoudre → demi-cadence. L'auditeur attend la suite." },
  { q: "Dans C–F–Bdim–Em–Am–Dm–G7–C, quel mouvement relie chaque accord ?", opts: ["Montée d'une tierce", "Descente d'une quinte diatonique", "Montée d'une seconde", "Descente d'une octave"], a: 1, fb: "C'est le cycle des quintes diatoniques en C majeur. Chaque accord descend d'une quinte (ou monte d'une quarte) dans la gamme." },
  { q: "La progression I–IV–I–IV–V–I est un exemple de :", opts: ["Cycle des quintes", "Extension de dominante", "Pendule T–SD avec cadence finale", "Série de cadences rompues"], a: 2, fb: "I–IV–I–IV = pendule entre tonique et sous-dominante. Puis V–I = cadence parfaite qui conclut. Structure très courante en folk et blues." },

  // ── Substitutions et variantes ──
  { q: "Peut-on remplacer Am par C dans une progression sans changer la fonction ?", opts: ["Non, ils n'ont pas la même fonction", "Oui, tous deux ont la fonction tonique", "Seulement en mineur", "Seulement avant la dominante"], a: 1, fb: "Am (VIe) et C (Ier) ont tous deux la fonction tonique en C majeur. La substitution I ↔ VI est une substitution diatonique classique." },
  { q: "Peut-on remplacer Dm par F dans la progression Dm–G7–C ?", opts: ["Non, Dm est dominante", "Oui, F a la même fonction sous-dominante", "Seulement en rythme lent", "Non, cela brise la logique tonale"], a: 1, fb: "F et Dm ont tous deux la fonction sous-dominante. F–G7–C est aussi valide que Dm–G7–C — même logique SD–D–T." },
  { q: "Dans une cadence rompue V → VI, par quel accord VI peut-on encore substituer ?", opts: ["Le IIe degré", "Le IIIe degré", "Le IVe degré", "Le VIIe degré"], a: 1, fb: "Em (IIIe) est aussi un accord de fonction tonique. V → III est une autre forme de cadence rompue possible." },
  { q: "Bdim peut remplacer G7 car :", opts: ["Il a la même fondamentale", "Il a la même fonction dominante", "Il est plus stable", "Il contient la sous-dominante uniquement"], a: 1, fb: "Bdim et G7 ont tous deux la fonction dominante en C majeur. Bdim contient B (sensible) et F (sous-dominante) — le triton complet." },

  // ── Structure musicale ──
  { q: "Une phrase musicale qui se termine en cadence parfaite et une autre qui suit est appelée :", opts: ["Un motif", "Une période", "Un développement", "Une modulation"], a: 1, fb: "Une période est généralement formée de deux phrases : la première en demi-cadence (question), la seconde en cadence parfaite (réponse)." },
  { q: "Pourquoi la cadence parfaite est-elle la plus conclusive ?", opts: ["Car elle utilise le IVe degré", "Car V et I sont à l'état fondamental et le triton se résout pleinement", "Car elle est la plus grave", "Car elle utilise toujours G7"], a: 1, fb: "V à l'état fondamental → I à l'état fondamental : la résolution du triton est complète, la basse fait un mouvement de quinte descendante — effet conclusif maximal." },
  { q: "Pourquoi la cadence imparfaite est-elle moins conclusive que la parfaite ?", opts: ["Elle utilise un accord différent", "Le renversement adoucit la résolution, surtout à la basse", "Elle est toujours en mineur", "Elle ne résout pas le triton"], a: 1, fb: "Le renversement change la note à la basse. Un accord renversé sonne moins stable — la résolution est perçue, mais atténuée." },
  { q: "Quel est le rôle d'une demi-cadence dans une structure musicale en deux phrases ?", opts: ["Elle conclut la première phrase", "Elle ouvre la première phrase et crée une attente", "Elle module vers une nouvelle tonalité", "Elle répète la tonique"], a: 1, fb: "La demi-cadence termine souvent la première phrase (antécédent) en laissant une question ouverte — la seconde phrase (conséquent) apporte la réponse avec une cadence parfaite." },
  { q: "Dans quelle situation utilise-t-on typiquement le cycle des quintes complet ?", opts: ["Pour créer une rupture brutale", "Pour parcourir tous les degrés de la gamme de façon naturelle", "Pour moduler en mineur", "Pour éviter la cadence parfaite"], a: 1, fb: "Le cycle des quintes diatonique parcourt les 7 degrés de la gamme, créant un mouvement continu et naturel vers la tonique finale." },
  { q: "Le II–V–I est considéré comme la progression cadentielle fondamentale car :", opts: ["Il évite la tonique", "Il combine SD–D–T de façon optimale avec le mouvement de quinte à la basse", "Il est le plus court", "Il utilise toujours des accords renversés"], a: 1, fb: "Dm–G7–C : la basse descend par quintes (D→G→C), chaque accord prépare le suivant, et la résolution du triton est complète. Efficacité maximale." },

  // ── Pièges et nuances ──
  { q: "V → I avec I en renversement C/E est :", opts: ["Cadence parfaite", "Cadence imparfaite", "Cadence plagale", "Demi-cadence"], a: 1, fb: "Si l'accord d'arrivée (I) est renversé, c'est une cadence imparfaite — même si la dominante est à l'état fondamental." },
  { q: "IV → I est plagale. Mais F/A → C est :", opts: ["Toujours plagale", "Une cadence parfaite", "Toujours imparfaite car F est renversé", "Ni plagale ni imparfaite"], a: 2, fb: "Si F est en renversement (F/A), la cadence plagale devient imparfaite — un accord renversé empêche la conclusion franche." },
  { q: "Une progression en boucle sans cadence parfaite crée :", opts: ["Une modulation", "Un sentiment de stabilité absolue", "Une tension continue ou un effect statique", "Une demi-cadence permanente"], a: 2, fb: "Sans cadence parfaite, la musique reste en suspension ou en mouvement continu. Le blues et le rock exploitent souvent ce principe pour créer de l'énergie ou de l'ambiguïté." },
  { q: "La progression C–G7–C est une cadence parfaite. Et C–G–C ?", opts: ["Aussi parfaite", "Imparfaite car G sans septième", "Plagale", "Rompue"], a: 0, fb: "C–G–C est aussi une cadence parfaite : G (triade) → C, les deux à l'état fondamental. La septième n'est pas obligatoire — c'est l'état fondamental qui compte." },
];

// English translations — add when available; until then falls back to fr
const questionsEn: Question[] = questionsFr;

export const cours4Content: Record<string, Cours4Locale> = {
  fr: { questions: questionsFr },
  en: { questions: questionsEn },
  es: { questions: questionsFr },
  de: { questions: questionsFr },
  it: { questions: questionsFr },
  pt: { questions: questionsFr },
};
