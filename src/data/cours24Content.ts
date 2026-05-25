export interface Question {
  q: string;
  opts: string[];
  a: number;
  fb: string;
}

export interface Cours24Locale {
  questions: Question[];
}

const questionsFr: Question[] = [
    // ── Identification des 3 types ─────────────────────────────────────────────
    {
      q: "Combien de types de sixtes augmentées distingue-t-on en harmonie tonale classique ?",
      opts: ["2 types", "3 types", "4 types", "5 types"],
      a: 1,
      fb: "On distingue 3 types : la sixte italienne (It+6), la sixte française (Fr+6) et la sixte allemande (Al+6). Chacune se définit par sa construction au-dessus du bVI.",
    },
    {
      q: "Quel est le nom de la sixte augmentée la plus simple, à seulement 3 notes ?",
      opts: ["Sixte française", "Sixte allemande", "Sixte italienne", "Sixte napolitaine"],
      a: 2,
      fb: "La sixte italienne (It+6) est la plus sobre : bVI – I – #IV, soit Lab–Do–Fa# en Do majeur. Elle n'utilise que 3 voix, d'où sa pureté.",
    },
    {
      q: "Quelle sixte augmentée contient la note Ré en Do majeur, formant la structure bVI–I–II–#IV ?",
      opts: ["Sixte italienne", "Sixte allemande", "Sixte napolitaine", "Sixte française"],
      a: 3,
      fb: "La sixte française (Fr+6) contient Lab–Do–Ré–Fa# en Do majeur. Le Ré correspond au IIe degré, qui est aussi la neuvième de la dominante — d'où sa couleur particulièrement colorée.",
    },
    {
      q: "Quelle sixte augmentée contient la note Mib en Do majeur, formant la structure bVI–I–bIII–#IV ?",
      opts: ["Sixte italienne", "Sixte française", "Sixte allemande", "Sixte espagnole"],
      a: 2,
      fb: "La sixte allemande (Al+6) contient Lab–Do–Mib–Fa# en Do majeur. Le Mib (bIII) la distingue des deux autres et lui confère sa richesse sonore particulière.",
    },
    {
      q: "Quel accord représente la sixte augmentée italienne en Do majeur ?",
      opts: ["Lab–Do–Mib–Fa#", "Lab–Do–Ré–Fa#", "Lab–Do–Fa#", "La–Do–Fa#"],
      a: 2,
      fb: "La sixte italienne en Do majeur = Lab–Do–Fa#. Structure : bVI–I–#IV (trois notes seulement). C'est l'accord le plus pur, sans ajout de couleur supplémentaire.",
    },
    {
      q: "Quel accord représente la sixte augmentée française en Do majeur ?",
      opts: ["Lab–Do–Fa#", "Lab–Do–Mib–Fa#", "Lab–Do–Ré–Fa#", "Lab–Si–Ré–Fa#"],
      a: 2,
      fb: "La sixte française en Do majeur = Lab–Do–Ré–Fa# (bVI–I–II–#IV). Le Ré (IIe degré) est la note distinctive ; il préfigure la 9e de la dominante Sol9.",
    },
    {
      q: "Quel accord représente la sixte augmentée allemande en Do majeur ?",
      opts: ["Lab–Do–Ré–Fa#", "Lab–Do–Fa#", "Lab–Si–Mib–Fa#", "Lab–Do–Mib–Fa#"],
      a: 3,
      fb: "La sixte allemande en Do majeur = Lab–Do–Mib–Fa# (bVI–I–bIII–#IV). Le Mib (IIIe degré mineur) est la note distinctive — identique à un Lab7 enharmonique.",
    },
    // ── Construction à partir de bVI ───────────────────────────────────────────
    {
      q: "Dans la sixte augmentée, quelle est toujours la note à la basse ?",
      opts: ["Le Ve degré (dominante)", "Le IVe degré (sous-dominante)", "Le bVIe degré (sixte napolitaine abaissée)", "La tonique"],
      a: 2,
      fb: "Le bVI est toujours à la basse dans les sixtes augmentées — l'accord est utilisé en premier renversement par nature. En Do majeur, c'est Lab qui est invariablement à la basse.",
    },
    {
      q: "L'intervalle constitutif caractéristique de toutes les sixtes augmentées est :",
      opts: ["Une tierce augmentée", "Une quinte augmentée", "Une sixte augmentée (bVI–#IV)", "Un triton"],
      a: 2,
      fb: "Toutes les sixtes augmentées contiennent l'intervalle de sixte augmentée entre le bVI (basse) et le #IV (voix aiguë). En Do majeur : Lab–Fa#, qui forme une sixte augmentée (+6).",
    },
    {
      q: "En Sol majeur, quelle est la note à la basse d'une sixte augmentée ?",
      opts: ["Mi bémol", "Ré bémol", "La bémol", "Fa#"],
      a: 1,
      fb: "En Sol majeur, le bVI = Réb. La basse d'une sixte augmentée en Sol est donc Réb. L'intervalle de sixte augmentée se formerait entre Réb et Do# (le #IV de Sol majeur).",
    },
    {
      q: "La note aiguë constitutive (le #IV) dans une sixte augmentée en Do majeur est :",
      opts: ["Fa naturel", "Sol dièse", "Fa dièse", "Mi bémol"],
      a: 2,
      fb: "Le #IV en Do majeur = Fa# (Fa dièse). C'est cette note qui forme la sixte augmentée avec Lab (bVI). Fa# résout obligatoirement vers Sol (quinte de dominante).",
    },
    {
      q: "La note distinctive de la sixte française (Fr+6) est :",
      opts: ["Le bIII (tierce mineure)", "Le II (seconde majeure / neuvième de dominante)", "Le IV (quarte juste)", "Le bVI (sixte majeure bémolisée)"],
      a: 1,
      fb: "La note distinctive de la sixte française est le IIe degré (Ré en Do majeur). Il correspond à la 9e de la dominante Sol9 — d'où la couleur particulièrement expressive de la Fr+6.",
    },
    {
      q: "La note distinctive de la sixte allemande (Al+6) est :",
      opts: ["Le IIe degré (seconde majeure)", "Le #IVe degré dièse", "Le bIII (tierce mineure)", "Le Ve degré"],
      a: 2,
      fb: "La note distinctive de la sixte allemande est le bIII (tierce mineure, Mib en Do majeur). C'est cette note qui rend Al+6 enharmoniquement équivalent à un accord de dominante septième (Lab7).",
    },
    // ── Règles de résolution ────────────────────────────────────────────────────
    {
      q: "Vers quel accord la sixte augmentée résout-elle toujours ?",
      opts: ["L'accord de tonique (I)", "L'accord de sous-dominante (IV)", "L'accord de dominante (V)", "L'accord napolitain (bII)"],
      a: 2,
      fb: "La sixte augmentée résout toujours vers la dominante (V), ou vers I6/4–V (accord de quarte et sixte de cadence). C'est sa fonction pré-dominante essentielle.",
    },
    {
      q: "Comment le Lab (bVI, à la basse) résout-il lors de la résolution de la sixte augmentée en Do majeur ?",
      opts: ["Il monte vers La naturel", "Il descend vers Sol (quinte de dominante)", "Il reste sur Lab", "Il monte vers Si"],
      a: 1,
      fb: "Lab descend par demi-ton vers Sol — la quinte de la dominante. Ce mouvement chromatique descendant, combiné avec la montée de Fa# vers Sol, forme le mouvement contraire obligatoire.",
    },
    {
      q: "Comment le Fa# (#IV, voix aiguë) résout-il lors de la résolution de la sixte augmentée en Do majeur ?",
      opts: ["Il descend vers Fa naturel", "Il descend vers Mi", "Il monte vers Sol (quinte de dominante)", "Il reste sur Fa#"],
      a: 2,
      fb: "Fa# monte par demi-ton vers Sol — la quinte de la dominante. Les deux notes extrêmes (Lab et Fa#) convergent par mouvement contraire vers Sol–Sol, ce qui est une règle absolue.",
    },
    {
      q: "Quel principe régit le mouvement des voix extrêmes lors de la résolution de la sixte augmentée ?",
      opts: ["Mouvement parallèle (toutes les voix montent)", "Mouvement contraire obligatoire (basse descend, aigu monte vers Sol)", "Oblique (une voix fixe, l'autre monte)", "Le choix est libre"],
      a: 1,
      fb: "Mouvement contraire obligatoire : Lab descend vers Sol, Fa# monte vers Sol. Ces deux notes constituent la quinte de dominante — l'arrivée est toujours une quinte doublée à l'unisson.",
    },
    {
      q: "Pourquoi la résolution de la sixte allemande vers V pose-t-elle un problème classique ?",
      opts: ["Elle crée des fausses relations", "Elle peut provoquer des quintes parallèles entre la basse et une voix intérieure", "Elle est interdite au baroque", "Elle crée une octave parallèle"],
      a: 1,
      fb: "Lors de la résolution Al+6 → V, Mib (bIII) descend vers Ré (tierce de dominante Sol–Si–Ré), mais Lab–Sol à la basse peut créer des quintes parallèles avec cette voix. On intercale souvent I6/4 pour les éviter.",
    },
    {
      q: "Quelle est la solution classique pour éviter les quintes parallèles lors de la résolution de Al+6 ?",
      opts: ["Supprimer le Mib", "Résoudre vers IV au lieu de V", "Intercaler I6/4 entre Al+6 et V", "Doubler le bVI à l'octave"],
      a: 2,
      fb: "On intercale I6/4 (accord de tonique en deuxième renversement, dit accord de quarte et sixte de cadence) entre Al+6 et V. Cette progression Al+6 → I6/4 → V est la formule cadentielle classique par excellence.",
    },
    {
      q: "Dans quel contexte harmonique apparaît exclusivement la sixte augmentée ?",
      opts: ["Avant l'accord de tonique (I)", "Dans la zone pré-dominante, avant V ou I6/4–V", "Après la dominante (V)", "En substitut de l'accord de sous-dominante (IV)"],
      a: 1,
      fb: "La sixte augmentée est un accord pré-dominant : elle prépare toujours la dominante (V). Elle n'apparaît idiomatiquement qu'immédiatement avant V ou avant I6/4–V dans la cadence finale.",
    },
    // ── Contexte et schémas harmoniques ────────────────────────────────────────
    {
      q: "Quel est le schéma harmonique classique qui intègre la sixte augmentée ?",
      opts: ["I – IV – V – I", "IVm – +6 – V – I", "I – II – V – I", "IV – V – VI – I"],
      a: 1,
      fb: "Le schéma classique est IVm → +6 → V → I. Le IVm (sous-dominante mineure) prépare la sixte augmentée, qui elle-même crée la tension maximale avant la dominante.",
    },
    {
      q: "Lequel de ces éléments est toujours vrai pour toutes les sixtes augmentées ?",
      opts: ["Elles contiennent 4 notes", "Elles sont en position fondamentale", "La basse est sur le bVI (premier renversement)", "Elles précèdent toujours IV"],
      a: 2,
      fb: "La sixte augmentée est toujours en premier renversement, avec le bVI à la basse. Cette position est constitutive de l'accord — on ne la rencontre jamais en position fondamentale (la fondamentale est une note conceptuelle, pas réelle).",
    },
    {
      q: "En Do majeur, quelle sous-dominante mineure prépare le plus naturellement la sixte augmentée ?",
      opts: ["Fa majeur (IV)", "Fa mineur (IVm)", "Ré mineur (IIm)", "Si bémol majeur (bVII)"],
      a: 1,
      fb: "Fa mineur (IVm) contient Lab–Do–Mib. En supprimant Mib et en haussant Fa vers Fa#, on obtient Lab–Do–Fa# = sixte italienne. Le IVm est donc le contexte pré-sixte augmentée le plus naturel.",
    },
    {
      q: "Schubert utilise la sixte augmentée allemande dans Der Wanderer (D.489) pour :",
      opts: ["Créer une modulation vers le majeur", "Intensifier la tension avant la dominante avec une couleur sombre", "Terminer la phrase sur la tonique", "Imiter une cadence plagale"],
      a: 1,
      fb: "Dans Der Wanderer, Schubert utilise Al+6 pour concentrer la tension harmonique avant la dominante. La richesse de cet accord (Lab–Do–Mib–Fa#) crée un moment d'intensité émotionnelle caractéristique de son style.",
    },
    {
      q: "Beethoven utilise la sixte augmentée italienne dans la Sonate op.57 (Appassionata) pour :",
      opts: ["Créer une couleur jazz avant-gardiste", "Exprimer une tension dramatique pure avec la sobriété des 3 voix", "Harmoniser une mélodie populaire", "Préparer une cadence plagale"],
      a: 1,
      fb: "Beethoven utilise la sobriété de la sixte italienne (3 voix : Lab–Do–Fa#) pour créer une tension nette et dramatique. La pureté de l'accord renforce l'effet de surprise avant la résolution vers la dominante.",
    },
    // ── Distinction Al+6 vs V7/IV ───────────────────────────────────────────────
    {
      q: "Quel accord est enharmoniquement identique à la sixte augmentée allemande (Al+6) en Do majeur ?",
      opts: ["Sol7 (V7 de Do majeur)", "Ré7 (V7/Sol)", "Lab7 (V7/Réb) = V7/IV enharmonique", "Si♭7"],
      a: 2,
      fb: "Al+6 en Do majeur (Lab–Do–Mib–Fa#) est enharmoniquement identique à Lab7 (Lab–Do–Mib–Sol♭=Fa#). C'est le V7 de Réb (bII), ce qui crée le lien avec la substitution tritonique du jazz.",
    },
    {
      q: "Comment distinguer Al+6 d'un V7/IV si les notes sont identiques ?",
      opts: ["Par la notation seulement, les deux se résolvent pareil", "Par la résolution : Al+6 → V par mvt contraire ; V7/IV → IV par mvt normal de dominante", "Par le registre des voix", "Par le tempo"],
      a: 1,
      fb: "La distinction est fonctionnelle et contextuelle. Al+6 se résout vers V (Lab et Fa# convergent vers Sol), tandis que V7/IV (Lab7) se résout normalement vers Réb (IVm). Mêmes notes, résolutions opposées.",
    },
    {
      q: "Dans un contexte tonal en Do majeur, si Lab–Do–Mib–Fa# se résout vers Sol majeur, c'est :",
      opts: ["Un V7/IV (accord de dominante secondaire)", "Un accord napolitain", "Une sixte augmentée allemande (Al+6)", "Un accord de Neapolitan 6th"],
      a: 2,
      fb: "Si Lab–Do–Mib–Fa# résout vers Sol majeur (V de Do) avec mouvement contraire (Lab↓Sol, Fa#↑Sol), c'est une sixte augmentée allemande. La résolution vers V est le critère décisif.",
    },
    {
      q: "Dans un contexte modal en Lab majeur, si Lab–Do–Mib–Sol♭ se résout vers Réb majeur, c'est :",
      opts: ["Une sixte augmentée italienne", "Une sixte augmentée allemande", "Un accord de sous-dominante", "Un V7 (accord de dominante secondaire Lab7 → Réb)"],
      a: 3,
      fb: "Si les notes Lab–Do–Mib–Sol♭ (=Fa#) se résolvent vers Réb (pas vers Mi majeur), c'est un accord de dominante septième classique (Lab7 → Réb), pas une sixte augmentée. La résolution détermine la fonction.",
    },
    {
      q: "L'équivalence enharmonique entre Al+6 et V7 est utilisée par les compositeurs romantiques pour :",
      opts: ["Simplifier l'écriture harmonique", "Réaliser des modulations ambiguës entre deux tonalités à distance de triton", "Éviter les quintes parallèles", "Justifier l'usage du mode dorien"],
      a: 1,
      fb: "En exploitant l'ambiguïté enharmonique Al+6/V7, des compositeurs comme Schubert et Liszt modulent entre tonalités à distance de triton (ex : Do majeur ↔ Réb majeur) de façon surprenante mais logique.",
    },
    // ── Équivalence enharmonique et jazz ────────────────────────────────────────
    {
      q: "La substitution tritonique en jazz est directement liée à :",
      opts: ["La sixte napolitaine", "L'accord de quarte et sixte", "L'équivalence enharmonique Al+6 ↔ bII7 (accord de dominante abaissée)", "La gamme pentatonique"],
      a: 2,
      fb: "La substitution tritonique consiste à remplacer V7 par bII7 (ex : Sol7 par Réb7 en Do). Or Réb7 = Al+6 enharmonique. Les harmonistes classiques et les jazzmen exploitent la même ambiguïté, indépendamment.",
    },
    {
      q: "En jazz en Do majeur, remplacer Sol7 par Réb7 (substitution tritonique) est harmoniquement équivalent à :",
      opts: ["Utiliser une sixte italienne", "Utiliser une sixte française", "Utiliser une sixte augmentée allemande enharmonique (Al+6 = Réb7)", "Utiliser un accord napolitain"],
      a: 2,
      fb: "Réb7 en Do majeur = Réb–Fa–Lab–Do♭(=Si). Si on respelle Réb→Do#, Fa→Mi#, Lab→Sol#, Do♭→Si... ce n'est pas tout à fait Al+6. Mais fonctionnellement, bII7 → I est la même tension que Al+6 → V dans un contexte jazz.",
    },
    {
      q: "Pourquoi Al+6 et V7/IV partagent-ils les mêmes notes ?",
      opts: ["Par hasard de la construction des gammes", "Parce que la septième mineure et la sixte augmentée sont des intervalles enharmoniques (ex : Sol♭ = Fa#)", "Parce que les deux accords ont la même fondamentale", "Parce qu'ils résolvent tous deux vers IV"],
      a: 1,
      fb: "Sol♭ (7e mineure de Lab7) et Fa# (#IV de Al+6 en Do majeur) sont enharmoniquement identiques. C'est cette équivalence qui rend les deux accords homophoniques mais fonctionnellement distincts.",
    },
    // ── Usage historique ────────────────────────────────────────────────────────
    {
      q: "À quelle époque la sixte augmentée a-t-elle été codifiée comme accord standard ?",
      opts: ["Renaissance (XVe–XVIe siècle)", "Baroque tardif – début de la période classique (XVIIe–XVIIIe siècle)", "Romantisme (XIXe siècle)", "Modernisme (XXe siècle)"],
      a: 1,
      fb: "La sixte augmentée est théorisée et codifiée au baroque tardif (fin XVIIe, début XVIIIe siècle). Bach en fait usage, et les théoriciens de l'époque la formalisent. Elle devient ensuite un outil courant du classicisme.",
    },
    {
      q: "Quel compositeur de la période classique viennoise est connu pour son usage dramatique des sixtes augmentées ?",
      opts: ["Haendel", "Vivaldi", "Beethoven", "Telemann"],
      a: 2,
      fb: "Beethoven utilise abondamment les sixtes augmentées pour créer des moments d'intense tension avant les résolutions cadentielles. L'Appassionata (op.57) et la Cinquième Symphonie en contiennent des exemples saisissants.",
    },
    {
      q: "Quel compositeur romantique est cité comme maître de la sixte augmentée expressive ?",
      opts: ["Berlioz", "Liszt", "Wagner", "Chopin"],
      a: 1,
      fb: "Franz Liszt utilise la sixte augmentée allemande comme signature harmonique dans ses poèmes symphoniques et ses rhapsodies. Pour lui, un accord altéré bien placé concentre toute la tension romantique.",
    },
    {
      q: "Brahms utilise la sixte française dans l'Intermezzo op.118 n°2 pour :",
      opts: ["Créer une modulation vers le mineur parallèle", "Colorer la cadence finale avec la neuvième de dominante implicite (Ré)", "Harmoniser une mélodie en mode dorien", "Doubler l'accord de tonique"],
      a: 1,
      fb: "La Fr+6 contient Ré (IIe degré = 9e de dominante). Brahms l'utilise pour enrichir la couleur harmonique à la cadence : la neuvième de dominante est déjà implicitement présente dans l'accord pré-dominant.",
    },
    {
      q: "La sixte augmentée est rarement utilisée dans quelle musique ?",
      opts: ["La musique baroque allemande", "La musique romantique française", "La musique modale (grégorien, jazz modal, folk celtique)", "La musique classique viennoise"],
      a: 2,
      fb: "La sixte augmentée est un accord tonal fonctionnel qui n'existe que dans un cadre de tonalité fonctionnelle (dominante, résolution). Les musiques modales ou atonales n'ont pas ce cadre et n'utilisent donc pas cet accord.",
    },
    // ── Identification dans un contexte musical ────────────────────────────────
    {
      q: "Vous entendez les notes Lab–Do–Fa# suivies par Sol–Si–Ré (Sol majeur). Quel accord s'est produit ?",
      opts: ["Sixte française", "Sixte allemande", "Sixte italienne", "Accord napolitain"],
      a: 2,
      fb: "Lab–Do–Fa# = 3 notes, structure bVI–I–#IV, résolution vers V (Sol majeur) = sixte augmentée italienne (It+6). La sobriété des 3 voix est la marque distinctive de l'italienne.",
    },
    {
      q: "Vous entendez les notes Lab–Do–Ré–Fa# suivies par Sol–Si–Ré–Fa (Sol7). Quel accord s'est produit ?",
      opts: ["Sixte italienne", "Sixte allemande", "Sixte française", "Accord de Neapolitan"],
      a: 2,
      fb: "Lab–Do–Ré–Fa# = 4 notes avec Ré (IIe degré) = sixte française (Fr+6). La résolution vers Sol7 est cohérente — le Ré est aussi dans Sol7, il peut rester ou descendre vers Ré.",
    },
    {
      q: "Vous entendez Lab–Do–Mib–Fa# suivi de Do–Mi–Sol (Do majeur, I6/4). Quel accord pré-dominant entendez-vous ?",
      opts: ["Sixte italienne", "Sixte française", "V7/IV", "Sixte allemande"],
      a: 3,
      fb: "Lab–Do–Mib–Fa# résolvant vers I6/4 (puis V–I) = sixte augmentée allemande (Al+6). La présence de Mib (bIII) et la résolution via I6/4 pour éviter les quintes parallèles sont caractéristiques de Al+6.",
    },
    {
      q: "Dans une tonalité en La majeur, les notes d'une sixte augmentée italienne seraient :",
      opts: ["Fa–La–Ré#", "Fa#–La–Ré#", "Mib–Sol–Do#", "Fa–La–Do#"],
      a: 0,
      fb: "En La majeur, bVI = Fa (naturel), I = La, #IV = Ré#. La sixte italienne en La majeur = Fa–La–Ré#. L'intervalle de sixte augmentée est bien entre Fa et Ré#.",
    },
    {
      q: "Dans une tonalité en Ré majeur, les notes d'une sixte augmentée allemande seraient :",
      opts: ["Si♭–Ré–Fa–Sol#", "Si–Ré#–Fa–Sol#", "Si♭–Ré–Fa#–Sol#", "La–Do#–Mi–Sol#"],
      a: 0,
      fb: "En Ré majeur, bVI = Si♭, I = Ré, bIII = Fa (naturel), #IV = Sol#. La sixte allemande en Ré majeur = Si♭–Ré–Fa–Sol#. La sixte augmentée est entre Si♭ et Sol#.",
    },
    {
      q: "En Mi majeur, la sixte française contient :",
      opts: ["Do–Mi–Fa#–Sol#", "Do–Mi–Sol–Sol#", "Do–Mi–Fa#–Si♭", "Do–Mi–Fa##–Sol#"],
      a: 0,
      fb: "En Mi majeur, bVI = Do, I = Mi, II = Fa#, #IV = Sol#. La sixte française = Do–Mi–Fa#–Sol# (bVI–I–II–#IV). Le Fa# (IIe degré) est la note distinctive.",
    },
    // ── Questions théoriques avancées ──────────────────────────────────────────
    {
      q: "Pourquoi la sixte augmentée est-elle toujours présentée en premier renversement ?",
      opts: ["Par convention arbitraire du XVIIIe siècle", "Parce que le bVI à la basse crée la tension optimale pour le mouvement descendant vers la quinte de dominante", "Pour faciliter la lecture des partitions", "Pour éviter les dissonances entre voix intérieures"],
      a: 1,
      fb: "Le bVI à la basse descend par demi-ton vers la quinte de dominante. Cette force de gravité harmonique (mouvement chromatique descendant) est constitutive de l'effet de la sixte augmentée — sans cette basse, l'accord perd sa fonction.",
    },
    {
      q: "Qu'est-ce qui rend la sixte augmentée si tendue harmoniquement ?",
      opts: ["La présence d'un accord de septième", "L'intervalle de sixte augmentée (+6) qui dépasse la sixte juste et crée une tension de résolution maximale", "La présence de trois bémols", "Le fait que toutes ses notes sont altérées"],
      a: 1,
      fb: "La sixte augmentée (Lab–Fa# en Do majeur) est un intervalle élargi d'un demi-ton par rapport à la sixte majeure. Cette tension extrême, combinée à l'attraction de chaque note vers Sol, crée la plus forte tension pré-dominante de la tonalité.",
    },
    {
      q: "En quoi la sixte augmentée diffère-t-elle d'un accord de septième de dominante ordinaire ?",
      opts: ["Elle résout vers I au lieu de V", "Elle crée un mouvement de demi-ton dans les deux voix extrêmes simultanément (convergence vers Sol–Sol)", "Elle est toujours en position ouverte", "Elle ne peut apparaître qu'en mode mineur"],
      a: 1,
      fb: "Contrairement à V7 → I (où une seule sensible monte d'un demi-ton), la sixte augmentée fait converger deux voix extrêmes par demi-ton vers la même note (Sol). Cette double attraction crée une tension unique et symétrique.",
    },
    {
      q: "La sixte augmentée peut-elle apparaître en mode mineur ?",
      opts: ["Non, elle est réservée au mode majeur", "Oui, et c'est même son contexte d'origine — les altérations chromatiques s'y intègrent naturellement", "Oui, mais uniquement la sixte italienne", "Non, car les altérations créeraient des fausses relations"],
      a: 1,
      fb: "La sixte augmentée apparaît fréquemment en mode mineur. En La mineur, par exemple : Fa–La–Ré# (It+6). Le contexte mineur favorise même certaines sixtes augmentées car le bVI (Fa en La mineur) est déjà dans la gamme mineure naturelle.",
    },
    {
      q: "Quelle est la différence entre la sixte napolitaine et la sixte augmentée ?",
      opts: ["Ce sont deux noms pour le même accord", "La sixte napolitaine (bII en position 6/3) est une sous-dominante majeure sur le bII, tandis que la sixte augmentée utilise bVI", "La sixte napolitaine ne résout pas vers V", "La sixte napolitaine contient une quinte augmentée"],
      a: 1,
      fb: "La sixte napolitaine (accord de bII en premier renversement) est un accord majeur sur le bII degré — ex : Réb–Fa–La♭ en Do majeur. C'est un accord pré-dominant distinct des sixtes augmentées, même si tous deux préparent la dominante.",
    },
    {
      q: "Quelle caractéristique partagent la sixte napolitaine et la sixte augmentée ?",
      opts: ["Elles contiennent toutes deux le bVI à la basse", "Elles sont toutes deux des accords pré-dominants qui préparent la dominante (V)", "Elles sont enharmoniques", "Elles apparaissent toujours ensemble dans une progression"],
      a: 1,
      fb: "Sixte napolitaine et sixtes augmentées sont toutes deux des accords pré-dominants — leur fonction harmonique est de créer la tension maximale avant la dominante. Elles peuvent même apparaître ensemble : N6 → Al+6 → V → I.",
    },
    // ── Questions d'analyse ────────────────────────────────────────────────────
    {
      q: "Dans la progression Lab–Do–Mib–Fa# → Sol–Si–Ré, à quoi correspond Sol–Si–Ré ?",
      opts: ["L'accord de tonique (Do majeur)", "L'accord de dominante (Sol majeur = V)", "L'accord de sous-dominante (Fa majeur)", "L'accord napolitain"],
      a: 1,
      fb: "Sol–Si–Ré = Sol majeur = le Ve degré en Do majeur. La résolution de Al+6 (Lab–Do–Mib–Fa#) vers Sol majeur est la résolution pré-dominante → dominante standard.",
    },
    {
      q: "Dans Al+6 → I6/4 → V → I, quel est le rôle de I6/4 ?",
      opts: ["C'est un accord de tonique de repos", "C'est un accord de cadence qui dissout les quintes parallèles potentielles et renforce la progression vers V", "C'est un accord de passage vers IV", "C'est une forme d'accord de pédale"],
      a: 1,
      fb: "I6/4 (accord de quarte et sixte de cadence) entre Al+6 et V sert à éviter les quintes parallèles et à renforcer la tension cadentielle. Fonctionnellement, I6/4 ici n'est pas un accord de repos — c'est une double suspension pré-dominante.",
    },
    {
      q: "Si on entend la progression Fa mineur → Lab–Do–Fa# → Sol majeur en Do majeur, que se passe-t-il ?",
      opts: ["IVm → It+6 → V (classique)", "IVm → Fr+6 → V (classique)", "IV → Al+6 → V (moins courant)", "IIm → It+6 → V"],
      a: 0,
      fb: "Fa mineur (IVm) → Lab–Do–Fa# (It+6) → Sol majeur (V). C'est la progression pré-dominante classique IVm → It+6 → V. Le IVm prépare l'oreille à la sixte augmentée, qui concentre la tension avant la résolution.",
    },
    {
      q: "Pourquoi la sixte augmentée est-elle qualifiée d'accord 'altéré' ?",
      opts: ["Parce qu'elle est jouée plus fort", "Parce qu'elle contient des notes chromatiques (bVI et #IV) qui ne font pas partie de la gamme diatonique majeure", "Parce qu'elle déforme le rythme", "Parce qu'elle est en mode mineur"],
      a: 1,
      fb: "Les sixtes augmentées contiennent des notes chromatiques : en Do majeur, Lab (bVI) et Fa# (#IV) ne sont pas dans la gamme de Do majeur diatonique. Ces altérations chromatiques créent la couleur expressive distinctive.",
    },
    {
      q: "En Do majeur, à quelle gamme appartient l'accord Lab–Do–Mib ?",
      opts: ["La gamme majeure de Do", "La gamme mineure harmonique de Do", "La gamme de Fa majeur ou de Lab majeur", "La gamme pentatonique de Do"],
      a: 2,
      fb: "Lab–Do–Mib est l'accord de Lab majeur. Cet accord appartient à la gamme de Fa majeur (IIIe degré) ou de Lab majeur (tonique). En Do majeur, il provient de la région sous-médiante (bVI) — une emprunt chromatique.",
    },
    // ── Questions de comparaison ────────────────────────────────────────────────
    {
      q: "Quelle sixte augmentée est la plus utilisée dans la littérature musicale classique et romantique ?",
      opts: ["La sixte italienne", "La sixte française", "La sixte allemande", "Toutes également"],
      a: 2,
      fb: "La sixte allemande est la plus fréquente — sa richesse sonore (4 notes) et sa relation enharmonique avec V7/IV en font l'accord le plus polyvalent. Schubert, Beethoven, Brahms et Liszt y reviennent constamment.",
    },
    {
      q: "Dans quelle sixte augmentée retrouve-t-on la 9e de la dominante ?",
      opts: ["Sixte italienne", "Sixte allemande", "Sixte française", "Aucune"],
      a: 2,
      fb: "La sixte française (Fr+6) contient le IIe degré (Ré en Do majeur), qui est aussi la 9e de la dominante Sol9. Cette préfiguration de la couleur de V9 donne à la Fr+6 sa sonorité particulièrement expressive.",
    },
    {
      q: "Quelle sixte augmentée peut être décrite comme 'l'accord de dominante déguisé' ?",
      opts: ["Sixte italienne (It+6)", "Sixte française (Fr+6)", "Sixte allemande (Al+6)", "Toutes les trois"],
      a: 2,
      fb: "La sixte allemande (Al+6) est enharmoniquement identique à un accord de dominante septième (Lab7 en Do majeur). Elle est souvent décrite comme un 'V7 déguisé' qui résout dans la mauvaise direction — vers V au lieu de vers I.",
    },
    {
      q: "Quelle sixte augmentée est souvent évitée en écriture à 4 voix en raison de sa duplication problématique ?",
      opts: ["Sixte allemande (Al+6) — problèmes de quintes parallèles", "Sixte française (Fr+6) — trop de dissonances", "Sixte italienne (It+6) — impossible à écrire à 4 voix", "Aucune — toutes sont également utilisables"],
      a: 0,
      fb: "La sixte allemande (Al+6) pose des problèmes de quintes parallèles en écriture stricte à 4 voix lors de la résolution vers V. On la résout souvent via I6/4, ou on double la quinte de V pour compenser.",
    },
    {
      q: "La sixte italienne a-t-elle une note doublée en écriture à 4 voix ?",
      opts: ["Non, elle n'a que 3 notes et on n'en double aucune", "Oui, on double toujours le bVI", "Oui, on double toujours le I (tonique)", "Oui, on double le #IV"],
      a: 2,
      fb: "La sixte italienne n'ayant que 3 notes (bVI–I–#IV), une note doit être doublée pour remplir 4 voix. On double généralement le Ie degré (Do en Do majeur), car ni le bVI ni le #IV ne doivent être doublés (ils ont une résolution obligatoire).",
    },
    // ── Questions d'application pratique ──────────────────────────────────────
    {
      q: "Un étudiant écrit Lab–Do–Fa# → La–Do–Sol (La mineur en premier renversement). Quelle erreur a-t-il commise ?",
      opts: ["Il a utilisé les mauvaises notes pour la sixte augmentée", "Il a résolu la sixte augmentée vers Im au lieu de V", "Il a mis la mauvaise note à la basse", "Il n'a pas doublé la bonne voix"],
      a: 1,
      fb: "La sixte augmentée doit résoudre vers V (Sol majeur), pas vers Im (La mineur). Résoudre It+6 vers Im est une erreur de fonction harmonique — même si certaines voix bougent correctement, la résolution finale doit être vers la dominante.",
    },
    {
      q: "Un compositeur veut créer une cadence finale expressive en Do majeur. Quelle progression utiliserait les sixtes augmentées ?",
      opts: ["I – IV – V – I", "IVm – Al+6 – I6/4 – V7 – I", "I – II – V – I", "I – bVII – IV – I"],
      a: 1,
      fb: "IVm → Al+6 → I6/4 → V7 → I est la progression cadentielle la plus expressive utilisant les sixtes augmentées. Elle accumule les tensions (IVm, Al+6, I6/4) avant la résolution finale sur V7 → I.",
    },
    {
      q: "Pourquoi ne peut-on pas doubler le Fa# (#IV) dans une sixte augmentée à 4 voix ?",
      opts: ["Pour des raisons de registre uniquement", "Parce que Fa# doit résoudre vers Sol sans exception — le doubler créerait des octaves parallèles à la résolution", "Parce que Fa# est trop grave", "Par convention arbitraire"],
      a: 1,
      fb: "Fa# doit résoudre vers Sol (#IV → V). Si Fa# est doublé, les deux voix doivent monter vers Sol — créant des octaves parallèles. Par la même logique, on ne double pas Lab (bVI), qui doit descendre vers Sol.",
    },
    {
      q: "Quelle est la principale fonction harmonique de la sixte augmentée dans la forme sonate classique ?",
      opts: ["Créer des modulations éloignées vers la médiante", "Renforcer les cadences importantes (exposition, développement, récapitulation) avec une tension pré-dominante maximale", "Remplacer l'accord de tonique dans les transitions", "Harmoniser la mélodie du second thème"],
      a: 1,
      fb: "Dans la forme sonate, les sixtes augmentées apparaissent aux moments cadentiels clés — fin d'exposition, fin de développement, cadence finale de récapitulation. Leur intensité concentrée renforce ces points d'articulation structurelle.",
    },
    {
      q: "La sixte augmentée est parfois appelée 'accord de couleur' (color chord). Pourquoi ?",
      opts: ["Parce qu'elle est souvent jouée forte", "Parce que ses notes chromatiques apportent une couleur harmonique intense qui sort momentanément du cadre diatonique", "Parce qu'elle est associée à une couleur visuelle dans la synesthésie", "Parce qu'elle apparaît dans les tableaux musicaux romantiques"],
      a: 1,
      fb: "Les notes chromatiques (bVI et #IV, voire bIII) sorte du cadre diatonique et apportent une couleur harmonique particulièrement intense. C'est ce contraste avec le contexte diatonique environnant qui crée l'effet expressif caractéristique.",
    },
];

export const cours24Content: Record<string, Cours24Locale> = {
  fr: { questions: questionsFr },
  en: { questions: questionsFr },
  es: { questions: questionsFr },
  de: { questions: questionsFr },
  it: { questions: questionsFr },
  pt: { questions: questionsFr },
};
