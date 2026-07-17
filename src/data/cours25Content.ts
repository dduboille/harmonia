export interface Question { q: string; opts: string[]; a: number; fb: string; }
export interface Cours25Locale { questions: Question[] }

const questionsFr: Question[] = [
    // ── Notes de passage chromatiques vs diatoniques ────────────────────────────
    {
      q: "Quelle est la différence entre une note de passage chromatique et une note de passage diatonique ?",
      opts: [
        "La note diatonique est plus longue que la chromatique",
        "La note chromatique crée un demi-ton supplémentaire entre deux notes de la gamme, la diatonique utilise un ton de la gamme",
        "La note diatonique est toujours à la basse, la chromatique à la mélodie",
        "Il n'y a pas de différence sonore",
      ],
      a: 1,
      fb: "Une note de passage diatonique appartient à la gamme (ex. Ré entre Do et Mi en Do majeur). Une note de passage chromatique introduit un demi-ton étranger à la gamme (ex. Do# entre Do et Ré) — elle colore le passage d'une tension supplémentaire.",
    },
    {
      q: "Dans la progression Do–Ré en Do majeur, quelle note de passage chromatique peut s'insérer ?",
      opts: ["Si", "Do#", "Mi", "Fa"],
      a: 1,
      fb: "Do# (ou Réb) est la note chromatique à demi-ton entre Do et Ré. Elle n'appartient pas à la gamme de Do majeur mais crée une transition par demi-ton ascendant, intensifiant l'attraction vers Ré.",
    },
    {
      q: "Quel adjectif décrit une note de passage qui appartient à la gamme du ton utilisé ?",
      opts: ["Chromatique", "Enharmonique", "Diatonique", "Modale"],
      a: 2,
      fb: "Diatonique signifie 'appartenant à la gamme'. Une note de passage diatonique (ex. Mi entre Ré et Fa en Do majeur) utilise exclusivement les notes de la gamme — pas d'altération supplémentaire.",
    },
    {
      q: "Une note de passage chromatique ascendante (ex. Do#) doit normalement se résoudre :",
      opts: ["Vers Do (descente)", "Vers Ré (montée)", "Vers Mi (saut)", "Elle n'a pas besoin de résolution"],
      a: 1,
      fb: "Règle universelle du chromatisme : ♯ monte. Do# est une note sensibilisée vers Ré — résoudre vers Do serait contraire à sa logique d'altération et crée une faute de conduite de voix.",
    },
    {
      q: "Dans Mi–Mib–Ré, la note Mib est :",
      opts: [
        "Une note de passage diatonique ascendante",
        "Une note de passage chromatique descendante",
        "Une broderie diatonique",
        "Un accord de dominante",
      ],
      a: 1,
      fb: "Mib est une altération descendante de Mi (♭ = bémol, descend). Elle crée un demi-ton entre Mi et Ré, fonctionnant comme note de passage chromatique descendante — assombrissement avant la résolution sur Ré.",
    },
    // ── Broderies chromatiques ──────────────────────────────────────────────────
    {
      q: "Qu'est-ce qu'une broderie chromatique ?",
      opts: [
        "Un accord altéré de 4 sons",
        "Une note auxiliaire à distance de demi-ton de la note principale",
        "Une descente de basse sur une quinte",
        "Un accord de dominante secondaire",
      ],
      a: 1,
      fb: "La broderie chromatique est une note auxiliaire à exactement un demi-ton de la note principale — supérieure (ex. Sol#–Sol) ou inférieure (ex. Fa#–Sol). Plus serrée que la broderie diatonique, elle intensifie l'expression.",
    },
    {
      q: "Dans Sol–Fa#–Sol, la note Fa# est :",
      opts: [
        "Une note de passage diatonique",
        "Une broderie chromatique inférieure",
        "Une broderie chromatique supérieure",
        "Une note de sensible",
      ],
      a: 1,
      fb: "Fa# est à un demi-ton en dessous de Sol. Elle orbite autour de Sol comme broderie inférieure chromatique — l'altération ♯ signale que Fa# monte vers Sol. Effet : ornement expressif serré.",
    },
    {
      q: "Dans La–Sib–La, le Sib est :",
      opts: [
        "Une broderie diatonique inférieure",
        "Une note de passage chromatique ascendante",
        "Une broderie chromatique supérieure",
        "Une appoggiature diatonique",
      ],
      a: 2,
      fb: "Sib est à un demi-ton au-dessus de La. Il s'agit d'une broderie chromatique supérieure — le bémol descend, donc Sib est logiquement attiré vers La. La broderie chromatique supérieure crée une dissonance plus serrée que la diatonique (Si–La = ton entier).",
    },
    {
      q: "Quelle est la principale différence entre une broderie diatonique et une broderie chromatique ?",
      opts: [
        "La broderie diatonique est plus rapide",
        "La broderie diatonique utilise un ton entier ou un demi-ton de la gamme, la chromatique introduit toujours un demi-ton étranger",
        "La broderie chromatique est plus grave",
        "Il n'y a pas de différence audible",
      ],
      a: 1,
      fb: "En Do majeur, Si est la broderie diatonique supérieure de La (grand demi-ton de la gamme). Do# comme broderie supérieure de Do serait chromatique — demi-ton étranger à la gamme. La broderie chromatique est plus intense car le demi-ton crée une attraction plus forte.",
    },
    // ── Chromatisme ascendant vs descendant ────────────────────────────────────
    {
      q: "Le chromatisme ascendant (sensibilisation) produit un effet de :",
      opts: [
        "Assombrissement et deuil",
        "Tension croissante et attraction vers la note cible",
        "Stabilité tonale",
        "Relâchement harmonique",
      ],
      a: 1,
      fb: "Chaque note chromatique ascendante (♯) crée une sensibilisation vers la note du dessus — une attraction magnétique par demi-ton montant. L'accumulation de ces tensions crée une énergie cinétique harmonique.",
    },
    {
      q: "Le chromatisme descendant (assombrissement) est typiquement associé à :",
      opts: [
        "La joie et la célébration",
        "L'expression du deuil, de la plainte, de la tristesse",
        "La modulation rapide vers le majeur",
        "La construction d'un accord de dominante",
      ],
      a: 1,
      fb: "Les altérations descendantes (♭) assombrissent la couleur harmonique. La basse de lamento baroque — descente chromatique — est l'exemple paradigmatique : elle évoque le deuil et la plainte dans des dizaines d'œuvres du XVIIe siècle.",
    },
    {
      q: "Dans une ligne chromatique ascendante Do–Do#–Ré–Ré#–Mi, chaque ♯ :",
      opts: [
        "Stabilise la tonalité",
        "Sensibilise la note vers la suivante par attraction de demi-ton",
        "Crée une modulation",
        "Résout vers la note en dessous",
      ],
      a: 1,
      fb: "Chaque dièse 'tire' vers la note diatonique supérieure. Do# est attiré vers Ré, Ré# vers Mi — la ligne crée une montée inexorable par demi-tons, chaque note renforçant l'élan ascendant.",
    },
    {
      q: "Quel compositeur baroque a exploité le chromatisme descendant dans ses airs funèbres ?",
      opts: ["Vivaldi", "Purcell (When I am laid in earth)", "Bach (Inventions)", "Handel (Messiah, Hallelujah)"],
      a: 1,
      fb: "Le lamento de Didon (Purcell, Didon et Énée, 1689) repose sur une basse de lamento — Do–Si–Sib–La–Lab–Sol répétée en ostinato — sur laquelle s'élève la plainte de la reine mourante. C'est l'un des plus beaux exemples de chromatisme descendant expressif.",
    },
    // ── Basse de lamento ───────────────────────────────────────────────────────
    {
      q: "La basse de lamento est :",
      opts: [
        "Une montée chromatique de quinte",
        "Une descente chromatique de quarte, de la tonique à la dominante",
        "Un accord de dominante sur pédale de basse",
        "Une résolution plagale",
      ],
      a: 1,
      fb: "La basse de lamento descend chromatiquement d'une quarte juste : tonique → dominante. En Do mineur : Do–Si–Sib–La–Lab–Sol. Cette ligne de basse, souvent répétée en ostinato, est le symbole du deuil et de la plainte au baroque.",
    },
    {
      q: "En Do mineur, la basse de lamento complète est :",
      opts: [
        "Do–Si–La–Sol",
        "Do–Si–Sib–La–Lab–Sol",
        "Do–Ré–Mi–Fa–Sol",
        "Do–Sib–Lab–Sol",
      ],
      a: 1,
      fb: "La descente chromatique complète de quarte couvre 6 notes : Do–Si–Sib–La–Lab–Sol. C'est bien une descente par demi-tons (chromatique) de la tonique (Do) à la dominante (Sol) — 6 degrés pour 4 demi-tons + 2 demi-tons intermédiaires.",
    },
    {
      q: "La basse de lamento est souvent utilisée comme :",
      opts: [
        "Thème de fugue",
        "Ostinato de basse répété",
        "Mélodie soprano",
        "Progression de jazz",
      ],
      a: 1,
      fb: "La basse de lamento est répétée en boucle (ostinato) sous une mélodie libre. Purcell, Monteverdi, Bach l'utilisent ainsi — la répétition de la descente crée un sentiment d'inéluctabilité et de deuil profond.",
    },
    {
      q: "Quel intervalle sépare la première et la dernière note de la basse de lamento ?",
      opts: ["Tierce mineure", "Quinte juste", "Quarte juste", "Sixte majeure"],
      a: 2,
      fb: "La basse de lamento descend d'une quarte juste (2 tons et demi). De Do à Sol en Do mineur : c'est exactement une quarte juste descendante, parcourue chromatiquement (par demi-tons). Cette symétrie intervalique est constitutive de la figure.",
    },
    // ── Basse de chaconne ──────────────────────────────────────────────────────
    {
      q: "La basse de chaconne Do–Si–Sib–La–Lab–Sol est :",
      opts: [
        "Une gamme majeure descendante",
        "Une descente chromatique de quarte en Do mineur (basse de lamento)",
        "Un accord de septième de dominante",
        "Une gamme pentatonique",
      ],
      a: 1,
      fb: "Do–Si–Sib–La–Lab–Sol est la basse de lamento/chaconne en Do mineur — descente chromatique de quarte de la tonique (Do) à la dominante (Sol). Cette ligne constitue la structure harmonique de nombreuses chaconnes baroques.",
    },
    {
      q: "Quelle est la différence entre chaconne et passacaille dans leur rapport à la basse chromatique ?",
      opts: [
        "La chaconne utilise une basse fixe, la passacaille une harmonie fixe",
        "Les deux utilisent un ostinato répété, mais la chaconne varie l'harmonie sur le motif de basse tandis que la passacaille varie la mélodie",
        "Il n'y a pas de différence",
        "La passacaille est en majeur, la chaconne en mineur",
      ],
      a: 1,
      fb: "Dans la pratique baroque, chaconne et passacaille sont souvent interchangeables — toutes deux reposent sur un ostinato répété. La distinction théorique (basse vs harmonie fixe) n'est pas appliquée rigoureusement. Les deux formes ont abondamment utilisé la descente chromatique de quarte.",
    },
    // ── Accord de Tristan ──────────────────────────────────────────────────────
    {
      q: "L'accord de Tristan est formé des notes :",
      opts: [
        "Do–Mi–Sol–Si",
        "Fa–Si–Ré#–Sol#",
        "La–Do–Mi–Sol",
        "Ré–Fa–La–Do",
      ],
      a: 1,
      fb: "L'accord de Tristan (Prélude de Tristan und Isolde, Wagner, 1865) est Fa–Si–Ré#–Sol#. Sa particularité : il contient un triton (Fa–Si) et une sixte augmentée (Fa–Ré#), créant une ambiguïté fonctionnelle absolue.",
    },
    {
      q: "Quelle est l'une des analyses possibles de l'accord de Tristan Fa–Si–Ré#–Sol# ?",
      opts: [
        "Accord parfait de Do majeur",
        "IVm7 avec quinte augmentée (Fa mineur 7 ♯5)",
        "Accord de tonique en Do majeur",
        "Accord de sixte napolitaine",
      ],
      a: 1,
      fb: "Une des lectures possibles de Fa–Si–Ré#–Sol# est Fa mineur 7 avec quinte augmentée. Mais cet accord peut aussi être analysé comme V7 de II altéré, ou accord de dominante secondaire — l'ambiguïté est intentionnelle chez Wagner.",
    },
    {
      q: "Pourquoi l'accord de Tristan est-il historiquement important ?",
      opts: [
        "C'est le premier accord de jazz jamais écrit",
        "Sa résolution non-résolue pendant 16 minutes a remis en question la tonalité fonctionnelle, ouvrant la voie à Schönberg",
        "C'est l'accord de dominante le plus parfait de l'histoire",
        "Wagner l'a utilisé pour imiter le son des instruments baroques",
      ],
      a: 1,
      fb: "Wagner laisse l'accord de Tristan sans résolution claire pendant tout le Prélude (16 minutes). Cette tension permanente a ébranlé les fondements de la tonalité fonctionnelle — Schönberg a prolongé cette logique jusqu'à l'atonalisme.",
    },
    {
      q: "L'ambiguïté de l'accord de Tristan provient principalement de :",
      opts: [
        "Sa complexité rythmique",
        "La présence simultanée d'un triton et d'une sixte augmentée rendant son analyse fonctionnelle indécise",
        "Son registre aigu inhabituel",
        "L'absence de basse",
      ],
      a: 1,
      fb: "Fa–Si forment un triton (intervalle le plus dissonant), et Fa–Ré# une sixte augmentée. Ces deux intervalles ambigus se combinent pour rendre l'identification fonctionnelle (dominante ? sous-dominante ? altéré ?) pratiquement impossible — c'est voulu.",
    },
    {
      q: "Quel accord parmi les suivants est l'accord de Tristan ?",
      opts: [
        "Do–Mi–Sol (accord parfait de Do)",
        "Sol–Si–Ré–Fa (accord de Sol7)",
        "Fa–Si–Ré#–Sol# (accord de Tristan)",
        "La–Do–Mi (accord de La mineur)",
      ],
      a: 2,
      fb: "Fa–Si–Ré#–Sol# est l'accord de Tristan. Les intervalles caractéristiques : Fa–Si = triton, Si–Ré# = tierce majeure, Ré#–Sol# = quarte juste. Ni majeur, ni mineur, ni dominant évident — c'est son mystère.",
    },
    {
      q: "La troisième analyse possible de l'accord de Tristan le considère comme :",
      opts: [
        "Un accord de tomique",
        "Un accord de dominante secondaire altéré",
        "Un accord de sixte italienne",
        "Un accord pentatonique",
      ],
      a: 1,
      fb: "Troisième lecture : accord de dominante secondaire altéré — V7 altéré pointant vers une tonalité tierce. Les théoriciens débattent encore : Forte (analyse par séries), Kurth (fonction de dominante), Schönberg (accord errant). Aucune lecture ne fait consensus.",
    },
    // ── Accord diminué 7e ──────────────────────────────────────────────────────
    {
      q: "L'accord diminué 7e (ex. Sol#–Si–Ré–Fa) est particulier car :",
      opts: [
        "Il ne peut résoudre que vers un seul accord",
        "Il est symétrique — divisé en 4 tierces mineures égales — et peut résoudre dans 4 tonalités différentes",
        "Il est identique à l'accord parfait majeur",
        "Il est impossible à jouer au piano",
      ],
      a: 1,
      fb: "Sol#–Si–Ré–Fa divise l'octave en quatre tierces mineures parfaitement égales. Cette symétrie lui permet d'être enharmoniquement réinterprété comme Sol#dim7, Sidim7, Rédim7 ou Fadim7 — chacun résout dans une tonalité différente.",
    },
    {
      q: "Combien de résolutions enharmoniques différentes possède un accord diminué 7e ?",
      opts: ["1", "2", "3", "4"],
      a: 3,
      fb: "Un accord diminué 7e possède exactement 4 résolutions enharmoniques, car il contient 4 notes et chacune peut être réinterprétée comme fondamentale d'un dim7 différent. Sol#dim7 → La mineur ; Sidim7 → Do majeur ; Rédim7 → Mib majeur ; Fadim7 → Fa# mineur.",
    },
    {
      q: "Dans Sol#–Si–Ré–Fa, quel intervalle se répète entre chaque note successive ?",
      opts: ["Ton entier", "Tierce mineure (3 demi-tons)", "Tierce majeure (4 demi-tons)", "Quarte juste"],
      a: 1,
      fb: "Sol# à Si = 3 demi-tons (tierce mineure) ; Si à Ré = 3 demi-tons ; Ré à Fa = 3 demi-tons. L'accord dim7 est entièrement construit par empilement de tierces mineures, créant la symétrie enharmonique.",
    },
    {
      q: "La résolution naturelle de Sol#dim7 (Sol#–Si–Ré–Fa) est vers :",
      opts: ["Fa majeur", "La majeur ou mineur", "Sol majeur", "Ré mineur"],
      a: 1,
      fb: "Sol# est la sensible de La — il monte vers La. Si descend vers La. Ré descend vers Do# ou Mi. Le mouvement de résolution naturel de Sol#dim7 conduit vers La (majeur ou mineur), où Sol# est sensible.",
    },
    {
      q: "Comment appelle-t-on le fait de changer l'interprétation harmonique d'un dim7 sans changer ses notes ?",
      opts: [
        "Transposition",
        "Modulation enharmonique",
        "Emprunt diatonique",
        "Substitution de triton",
      ],
      a: 1,
      fb: "La modulation enharmonique réinterprète le même accord (mêmes sons) dans une nouvelle tonalité. Un dim7 est idéal pour cela car ses 4 notes peuvent être enharmoniquement renommées pour pointer vers 4 tonalités différentes — changement de sens sans changement de sons.",
    },
    // ── Modulation enharmonique ────────────────────────────────────────────────
    {
      q: "La modulation enharmonique consiste à :",
      opts: [
        "Changer de tempo pour passer d'une tonalité à une autre",
        "Réinterpréter un accord pivot en changeant le nom de ses notes sans changer les sons",
        "Jouer une gamme chromatique complète",
        "Répéter un accord diatonique dans une nouvelle tonalité",
      ],
      a: 1,
      fb: "La modulation enharmonique change le nom (l'orthographe) des notes d'un accord sans en modifier le son. Sol# devient Lab — même touche de piano, mais nouvelle direction harmonique. Le dim7 et la dominante augmentée sont les pivots enharmoniques favoris.",
    },
    {
      q: "Quel type d'accord est le plus utilisé pour les modulations enharmoniques ?",
      opts: [
        "L'accord parfait majeur",
        "L'accord de sixte augmentée et le diminué 7e",
        "L'accord de quarte et sixte",
        "L'accord de sous-dominante",
      ],
      a: 1,
      fb: "La sixte augmentée (ex. Lab–Fa# en Do majeur) peut être enharmoniquement réinterprétée comme un V7 (Sol#–Do–Ré#–Fa# = Sol7 avec renommage) pointant vers une nouvelle tonalité. Le dim7 fonctionne de même avec 4 possibilités.",
    },
    {
      q: "Dans une modulation enharmonique par dim7, Sol#–Si–Ré–Fa est renommé Ré–Fa–Lab–Dob (= Rédim7). La nouvelle résolution va vers :",
      opts: [
        "La mineur",
        "Mib majeur ou mineur (Ré devient sensible et monte vers Mib)",
        "Sol majeur",
        "Fa# mineur",
      ],
      a: 1,
      fb: "En renommant Sol# en Lab et Si en Dob (enharmonie : mêmes touches, nouvelle orthographe), le même accord s'écrit Rédim7 = Ré–Fa–Lab–Dob. Ré devient alors sensible et monte d'un demi-ton vers Mib : l'accord résout vers Mib (majeur ou mineur). Un même dim7 pointe vers quatre tonalités selon son orthographe — les modulations enharmoniques exigent de tracer avec soin le vecteur de résolution.",
    },
    {
      q: "La modulation enharmonique différencie musicalement Sol# de Lab parce que :",
      opts: [
        "Ils n'ont pas le même son sur un instrument tempéré",
        "Sol# monte vers La (chromatisme ascendant) tandis que Lab descend vers Sol (chromatisme descendant)",
        "Sol# est joué plus fort que Lab",
        "Lab n'existe pas dans la gamme tempérée",
      ],
      a: 1,
      fb: "Sur un piano, Sol# et Lab sonnent identique (tempérament égal) mais en théorie, Sol# est une sensible montante (vers La) et Lab est une note de passage descendante (vers Sol). Cette direction de résolution différente est toute la logique de la modulation enharmonique.",
    },
    // ── Résolution des notes chromatiques ─────────────────────────────────────
    {
      q: "La règle universelle de résolution des notes chromatiques est :",
      opts: [
        "♯ descend, ♭ monte",
        "♯ monte, ♭ descend",
        "Toutes les notes chromatiques montent",
        "La résolution est libre, au choix du compositeur",
      ],
      a: 1,
      fb: "♯ monte, ♭ descend — règle absolue de conduite de voix. Un ♯ crée une sensibilisation ascendante (note attirée vers le demi-ton supérieur). Un ♭ crée un assombrissement descendant (note attirée vers le demi-ton inférieur). Violer cette règle produit une faute.",
    },
    {
      q: "Si une voix contient Fa#, vers quelle note doit-elle résoudre ?",
      opts: ["Fa naturel", "Sol", "Mi", "La"],
      a: 1,
      fb: "Fa# = dièse → monte vers Sol. La logique du ♯ est ascendante : Fa# est une sensibilisation de Sol, attiré vers cette note par demi-ton. Résoudre Fa# vers Fa naturel contredirait sa logique d'altération.",
    },
    {
      q: "Si une voix contient Réb, vers quelle note doit-elle résoudre ?",
      opts: ["Ré naturel", "Do", "Mi", "Si"],
      a: 1,
      fb: "Réb = bémol → descend vers Do. La logique du ♭ est descendante : Réb est un assombrissement pointant vers Do par demi-ton descendant. Résoudre Réb vers Ré naturel (montée) contredirait sa direction naturelle.",
    },
    {
      q: "Pourquoi ne peut-on pas résoudre Do# vers Do naturel ?",
      opts: [
        "Ce serait trop facile",
        "Do# est une sensibilisation montante (♯ monte) — résoudre vers le bas viole la logique de l'altération",
        "Do naturel n'existe pas",
        "Ce serait une résolution par triton",
      ],
      a: 1,
      fb: "Do# est altéré en haut (dièse) pour créer une attraction vers Ré. Résoudre vers Do naturel va dans le sens opposé — c'est une faute de conduite de voix appelée 'résolution contraire à l'altération'. En SATB strict, c'est interdit.",
    },
    // ── Marche tonale vs marche réelle avec chromatisme ───────────────────────
    {
      q: "Quelle est la différence entre une marche tonale et une marche réelle ?",
      opts: [
        "La marche tonale est en majeur, la réelle en mineur",
        "La marche tonale transpose le motif en restant dans la tonalité (intervalles légèrement modifiés), la marche réelle reproduit exactement les mêmes intervalles (peut quitter la tonalité)",
        "Il n'y a pas de différence pratique",
        "La marche réelle utilise des accords de jazz",
      ],
      a: 1,
      fb: "Marche tonale : on transpose le motif aux degrés successifs de la gamme — les intervalles sont approximativement préservés mais restent diatoniques (tons et demi-tons peuvent varier). Marche réelle : on reproduit exactement les mêmes intervalles, ce qui peut nécessiter des altérations et sortir de la tonalité.",
    },
    {
      q: "Une marche réelle avec chromatisme se distingue d'une marche tonale car :",
      opts: [
        "Elle est plus lente",
        "Elle introduit des altérations pour préserver exactement les intervalles, créant une modulation ou un passage chromatique",
        "Elle est réservée à la basse",
        "Elle évite les demi-tons",
      ],
      a: 1,
      fb: "La marche réelle préserve exactement les intervalles du motif initial — si le motif contient un demi-ton chromatique, la transposition l'inclut aussi, introduisant des altérations. Cela peut créer des modulations passagères ou des couleurs chromatiques inexistantes dans la marche tonale.",
    },
    {
      q: "Dans une séquence par quintes descendantes en Do majeur (I–IV–VII–III...), si on maintient exactement les intervalles de chaque accord, on obtient :",
      opts: [
        "Une marche tonale stricte",
        "Une marche réelle qui peut introduire des altérations",
        "Un accord de dominante prolongé",
        "Une gamme pentatonique",
      ],
      a: 1,
      fb: "Reproduire exactement les mêmes types d'accords (ex. toujours un accord parfait majeur) sur chaque degré d'une séquence par quintes nécessite des altérations — c'est la marche réelle. Les altérations chromatiques introduites donnent une couleur plus riche que la marche tonale.",
    },
    {
      q: "Laquelle de ces séquences est une marche tonale (pas de chromatisme) en Do majeur ?",
      opts: [
        "CMaj–FMaj–BbMaj–EbMaj (toujours accord majeur parfait, altérations nécessaires)",
        "CMaj–Dm–Em–FMaj (accords diatoniques, intervalles légèrement variables)",
        "CMaj–C#Maj–DdMaj–EbMaj (chromatique strict)",
        "GMaj–FMaj–EbMaj (tierce descendante altérée)",
      ],
      a: 1,
      fb: "CMaj–Dm–Em–FMaj reste entièrement dans la gamme de Do majeur — pas d'altération. Les intervalles ne sont pas identiques (CMaj = majeur, Dm = mineur) mais tous les accords sont diatoniques. C'est la marche tonale : préservation de la tonalité au prix d'une légère variation des intervalles.",
    },
    // ── Questions mixtes avancées ──────────────────────────────────────────────
    {
      q: "La 'sensibilisation' chromatique désigne :",
      opts: [
        "L'ajout d'un bémol pour assombrir",
        "L'introduction d'un demi-ton montant qui crée une attraction vers la note diatonique supérieure",
        "La résolution d'un accord de dominante",
        "Une gamme descendante par tons entiers",
      ],
      a: 1,
      fb: "La sensibilisation chromatique transforme une note en 'sensible artificielle' — un demi-ton en dessous d'une note cible. Ex. Do# sensibilise vers Ré (même si Ré n'est pas la tonique). Ce procédé renforce l'attraction mélodique par chromatisme ascendant.",
    },
    {
      q: "Wagner est le compositeur le plus associé au chromatisme avancé car :",
      opts: [
        "Il a inventé la gamme chromatique",
        "Il a utilisé le chromatisme si systématiquement que la tonalité elle-même devient incertaine",
        "Il n'utilisait que des gammes diatoniques",
        "Il a interdit les modulations dans ses opéras",
      ],
      a: 1,
      fb: "Wagner a poussé le chromatisme jusqu'à ses limites dans Tristan und Isolde (1865). La tonalité y est si continuellement instable que les théoriciens parlent de 'tonalité élargie' — Schönberg a directement prolongé cette logique vers l'atonalisme (12 tons).",
    },
    {
      q: "Schönberg est souvent désigné comme l'héritier de Wagner car :",
      opts: [
        "Il a écrit dans le même style romantique",
        "Le chromatisme wagnérien a logiquement conduit à l'atonalisme de Schönberg — le pas suivant une fois que la tonalité est dissoute",
        "Il a copié l'accord de Tristan dans toutes ses œuvres",
        "Il préférait les opéras",
      ],
      a: 1,
      fb: "Schönberg a lui-même dit que son évolution vers l'atonalisme et le dodécaphonisme était l'aboutissement logique du chromatisme de Wagner. Quand tout accord peut être n'importe quoi (comme l'accord de Tristan), la hiérarchie tonale s'effondre — et le système des 12 tons remplace la tonalité.",
    },
    {
      q: "Quelle note chromatique s'insère entre Sol et La dans une ligne ascendante ?",
      opts: ["Fa#", "Sol#", "Lab", "Si"],
      a: 1,
      fb: "Sol# (= Lab enharmonique) est le demi-ton entre Sol et La. Dans une ligne ascendante, on l'écrit Sol# (dièse = monte) pour signaler son attraction vers La. Lab serait orthographiquement incorrect dans un mouvement ascendant (♭ = descend).",
    },
    {
      q: "Dans une ligne descendante La–Sol, quelle note chromatique s'insère ?",
      opts: ["Sol#", "La#", "Lab", "Si"],
      a: 2,
      fb: "Lab est le demi-ton entre La et Sol dans une descente. On l'écrit Lab (bémol = descend) car le mouvement est descendant. L'écrire Sol# serait incorrect car ♯ implique une montée vers La — l'altération doit toujours indiquer la direction de résolution.",
    },
    {
      q: "Dans le Prélude de Tristan, Wagner évite la résolution pendant :",
      opts: ["2 minutes", "8 minutes", "16 minutes", "30 secondes"],
      a: 2,
      fb: "Le Prélude de Tristan und Isolde dure environ 10-16 minutes selon les interprétations. Wagner maintient la tension chromatique sans résolution tonale claire pendant toute cette durée — la seule 'résolution' survient à la mort d'Isolde, à la toute fin de l'opéra.",
    },
    {
      q: "L'accord parfait de Do majeur (Do–Mi–Sol) est-il chromatique ou diatonique en Do majeur ?",
      opts: ["Chromatique", "Diatonique", "Enharmonique", "Diminué"],
      a: 1,
      fb: "Do–Mi–Sol appartient entièrement à la gamme de Do majeur — aucune altération, aucune note étrangère. C'est l'accord diatonique I par excellence. Le chromatisme commence quand on introduit une note (ou altération) extérieure à la gamme.",
    },
    {
      q: "Si un accord de Fa mineur (Fa–Lab–Do) apparaît dans une pièce en Do majeur, il s'agit d'un :",
      opts: [
        "Accord diatonique de Do majeur",
        "Accord chromatique (emprunt — Lab est étranger à Do majeur)",
        "Accord de tonique",
        "Accord de dominante secondaire",
      ],
      a: 1,
      fb: "Do majeur contient La naturel, pas Lab. La présence de Lab rend l'accord de Fa mineur chromatique (étranger à la gamme). C'est un emprunt au mode parallèle (Do mineur) — technique romantique fréquente, notamment chez Chopin.",
    },
    {
      q: "Quelle est la couleur expressive typique du chromatisme ascendant par opposition au descendant ?",
      opts: [
        "Ascendant = deuil, descendant = joie",
        "Ascendant = tension, élan, espoir ; descendant = assombrissement, deuil, résignation",
        "Ascendant = repos, descendant = tension",
        "Aucune différence expressive",
      ],
      a: 1,
      fb: "C'est une constante de la rhétorique musicale baroque et classique : le chromatisme ascendant (demi-tons montants, ♯) intensifie, crée de l'élan et de la tension vers une résolution. Le descendant (♭) assombrit, évoque la plainte, le deuil — comme dans les lamenti baroques.",
    },
    {
      q: "Dans la conduite de voix à 4 parties (SATB), une note chromatique altérée doit être doublée avec :",
      opts: [
        "Une octave dans une autre voix",
        "Précaution — les notes chromatiques ne doivent généralement pas être doublées",
        "La fondamentale de l'accord",
        "La quinte",
      ],
      a: 1,
      fb: "Doubler une note chromatique en SATB crée deux voix devant résoudre dans le même sens — ce qui peut entraîner des octaves parallèles ou des difficultés de conduite de voix. La règle générale est de ne pas doubler les notes chromatiques (sensibles, notes altérées).",
    },
    {
      q: "Le 'cadre diatonique' dans une pièce chromatique désigne :",
      opts: [
        "L'absence totale de chromatisme",
        "Les notes et accords appartenant à la tonalité principale, qui servent de référence à laquelle le chromatisme revient",
        "La gamme chromatique complète",
        "Un accord diminué 7e",
      ],
      a: 1,
      fb: "Même dans une pièce très chromatique (Wagner, Liszt), il existe un cadre diatonique de référence — des moments de clarté tonale qui ancrent l'auditeur. Le chromatisme dérive à partir de ce cadre et y revient, créant le jeu de tension/résolution.",
    },
    {
      q: "L'accord de Tristan contient l'intervalle de sixte augmentée entre :",
      opts: ["Fa et Sol#", "Si et Ré#", "Fa et Ré#", "Si et Sol#"],
      a: 2,
      fb: "Fa–Ré# = sixte augmentée (9 demi-tons). Cet intervalle est l'un des plus caractéristiques de l'accord — il ressemble à une septième mineure (Sol7) mais s'écrit différemment pour indiquer une résolution en mouvement contraire vers l'extérieur. Avec le triton Fa–Si, la sixte augmentée crée l'ambiguïté fonctionnelle de l'accord.",
    },
    {
      q: "Quelle progression chromatique est typique de la basse albertine romantique ?",
      opts: [
        "Do–Ré–Mi–Fa (diatonique)",
        "Do–Do#–Ré–Ré#–Mi (chromatique ascendant)",
        "Do–Si–La–Sol (diatonique descendant)",
        "Do–Sol–Do–Sol (pédale)",
      ],
      a: 1,
      fb: "Le chromatisme ascendant Do–Do#–Ré–Ré#–Mi est une montée par demi-tons typique d'un passage romantique ou wagnérien. Chaque note est sensibilisée vers la suivante, créant une tension croissante. La basse albertine romantique l'utilise pour rehausser l'intensité dramatique.",
    },
    {
      q: "Dans une modulation enharmonique, Sol# → Lab signifie que :",
      opts: [
        "Le son change",
        "Le son reste identique mais la direction harmonique s'inverse — Sol# montait vers La, Lab descend vers Sol",
        "La note est transposée d'une octave",
        "On passe du majeur au mineur",
      ],
      a: 1,
      fb: "Sur piano tempéré, Sol# et Lab sonnent identique. Mais écrire Lab signale une nouvelle direction : ♭ = descend → vers Sol. Écrire Sol# signale l'ancienne direction : ♯ = monte → vers La. La modulation enharmonique exploite cette dualité pour changer de tonalité sans changer de son.",
    },
    {
      q: "Le principe de la 'note sensible artificielle' désigne :",
      opts: [
        "La note sensible naturelle d'une gamme",
        "Un demi-ton chromatique créé par altération pour imiter l'attraction d'une sensible vers une note non-tonique",
        "L'accord de dominante",
        "La basse de lamento",
      ],
      a: 1,
      fb: "La note sensible naturelle est le VII degré (Si en Do majeur → Do). Une sensible artificielle est créée par chromatisme pour renforcer une autre attraction : ex. Do# → Ré crée une sensible artificielle de Ré. Cette technique (dominante secondaire, chromatisme) est centrale au langage wagnérien.",
    },
    {
      q: "Quelle est la différence entre un accord demi-diminué (m7b5) et un accord diminué 7e ?",
      opts: [
        "Ils sont identiques",
        "Le demi-diminué a une septième mineure (10 demi-tons), le diminué 7e a une septième diminuée (9 demi-tons = double bémol)",
        "Le demi-diminué est en majeur",
        "Le diminué 7e n'a que 3 sons",
      ],
      a: 1,
      fb: "Accord demi-diminué (ex. Si–Ré–Fa–La) : fondamentale–tierce mineure–quinte diminuée–septième mineure. Accord diminué 7e (ex. Si–Ré–Fa–Lab) : même structure mais septième diminuée (Lab au lieu de La). La différence est un demi-ton sur la septième — essentielle pour les modulations enharmoniques.",
    },
    {
      q: "Dans la basse de lamento, Do–Si–Sib–La–Lab–Sol, quel type de mouvement y a-t-il entre chaque note ?",
      opts: [
        "Ton entier",
        "Demi-ton (chromatique)",
        "Tierce",
        "Quarte",
      ],
      a: 1,
      fb: "Chaque pas de la basse de lamento est un demi-ton : Do–Si = 1 demi-ton, Si–Sib = 1 demi-ton, Sib–La = 1 demi-ton, La–Lab = 1 demi-ton, Lab–Sol = 1 demi-ton. Cinq demi-tons successifs descendent de la tonique Do à la dominante Sol — c'est la définition du mouvement chromatique.",
    },
    {
      q: "Pourquoi l'accord diminué 7e est-il si utile pour les modulations enharmoniques ?",
      opts: [
        "Car il résout toujours vers Do majeur",
        "Car sa symétrie parfaite (4 tierces mineures égales) lui permet d'être réinterprété dans 4 tonalités sans changer un seul son",
        "Car il est le plus consonant de tous les accords",
        "Car il ne contient aucune dissonance",
      ],
      a: 1,
      fb: "Sol#–Si–Ré–Fa = Sol#dim7 (vers La) = Sidim7 (vers Do) = Rédim7 (vers Mib) = Fadim7 (vers Fa#). Les 4 notes sont équidistantes (tierce mineure) — on peut nommer n'importe laquelle comme fondamentale et résoudre vers la tonalité correspondante. C'est le pivot enharmonique parfait.",
    },
    {
      q: "La tendance historique du chromatisme au XIXe siècle a conduit à :",
      opts: [
        "Un retour au plain-chant médiéval",
        "L'atonalisme du XXe siècle, où la tonalité est abandonnée",
        "La musique baroque stricte",
        "La gamme pentatonique",
      ],
      a: 1,
      fb: "Wagner → Liszt → Reger → Schönberg : chaque génération a poussé le chromatisme un peu plus loin, jusqu'à ce que Schönberg franchisse le seuil de l'atonalisme (vers 1908-1909) avec ses Trois pièces pour piano op. 11. L'accord de Tristan est un jalon essentiel de cette trajectoire.",
    },
    {
      q: "Quel est l'effet harmonique principal du chromatisme dans la basse de lamento ?",
      opts: [
        "Établir clairement la tonalité",
        "Créer une atmosphère d'inéluctabilité tragique par une descente continue vers la dominante",
        "Éviter toute dissonance",
        "Établir une modulation vers le relatif",
      ],
      a: 1,
      fb: "La répétition en ostinato de la descente chromatique Do–Si–Sib–La–Lab–Sol crée un sentiment d'inéluctabilité — chaque demi-ton semble inévitable, comme une chute qu'on ne peut arrêter. C'est l'effet rhétorique du lamento : la plainte sans fin qui ne peut se résoudre.",
    },
];

export const cours25Content: Record<string, Cours25Locale> = {
  fr: { questions: questionsFr },
  en: { questions: questionsFr },
  es: { questions: questionsFr },
  de: { questions: questionsFr },
  it: { questions: questionsFr },
  pt: { questions: questionsFr },
};
