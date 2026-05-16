/**
 * Flat lookup map for translatable music theory terms.
 * Key = French string as used in component data arrays.
 * Falls back to French (the key itself) when a locale has no entry.
 *
 * Usage: const tr = useTerm(); tr("Majeure") → "Mayor" (es)
 */
export const MUSIC_TERMS: Record<string, Partial<Record<string, string>>> = {

  // ─── Chord / interval quality ─────────────────────────────────────────────
  "Majeure": {
    en: "Major", es: "Mayor", de: "Dur", it: "Maggiore", pt: "Maior",
  },
  "Mineure": {
    en: "Minor", es: "Menor", de: "Moll", it: "Minore", pt: "Menor",
  },
  "Diminuée": {
    en: "Diminished", es: "Disminuida", de: "Vermindert", it: "Diminuita", pt: "Diminuta",
  },
  "Augmentée": {
    en: "Augmented", es: "Aumentada", de: "Übermäßig", it: "Aumentata", pt: "Aumentada",
  },
  "Majeure (triade)": {
    en: "Major (triad)", es: "Mayor (tríada)", de: "Dur (Dreiklang)", it: "Maggiore (triade)", pt: "Maior (tríade)",
  },
  "Mineure (triade)": {
    en: "Minor (triad)", es: "Menor (tríada)", de: "Moll (Dreiklang)", it: "Minore (triade)", pt: "Menor (tríade)",
  },

  // ─── Chord tetrad labels ───────────────────────────────────────────────────
  "Maj7": { en: "Maj7", es: "Maj7", de: "Maj7", it: "Maj7", pt: "Maj7" },
  "7 (dominante)": {
    en: "7 (dominant)", es: "7 (dominante)", de: "7 (Dominante)", it: "7 (dominante)", pt: "7 (dominante)",
  },

  // ─── Stability ────────────────────────────────────────────────────────────
  "stable": {
    en: "stable", es: "estable", de: "stabil", it: "stabile", pt: "estável",
  },
  "instable": {
    en: "unstable", es: "inestable", de: "instabil", it: "instabile", pt: "instável",
  },

  // ─── Tonal functions ──────────────────────────────────────────────────────
  "Tonique": {
    en: "Tonic", es: "Tónica", de: "Tonika", it: "Tonica", pt: "Tônica",
  },
  "Dominante": {
    en: "Dominant", es: "Dominante", de: "Dominante", it: "Dominante", pt: "Dominante",
  },
  "Sous-dom.": {
    en: "Subdom.", es: "Subdominante", de: "Subdominante", it: "Sottodominante", pt: "Subdominante",
  },
  "Sous-dominante": {
    en: "Subdominant", es: "Subdominante", de: "Subdominante", it: "Sottodominante", pt: "Subdominante",
  },
  "Ambigu": {
    en: "Ambiguous", es: "Ambiguo", de: "Mehrdeutig", it: "Ambiguo", pt: "Ambíguo",
  },
  "Dominante secondaire": {
    en: "Secondary dominant", es: "Dominante secundaria", de: "Sekundärdominante", it: "Dominante secondaria", pt: "Dominante secundária",
  },
  "Sous-dominante secondaire": {
    en: "Secondary subdominant", es: "Subdominante secundaria", de: "Sekundärsubdominante", it: "Sottodominante secondaria", pt: "Subdominante secundária",
  },

  // ─── Interval names ───────────────────────────────────────────────────────
  "Tierce majeure (4 demi-tons)": {
    en: "Major third (4 semitones)", es: "Tercera mayor (4 semitonos)",
    de: "Große Terz (4 Halbtonschritte)", it: "Terza maggiore (4 semitoni)", pt: "Terça maior (4 semitons)",
  },
  "Tierce mineure (3 demi-tons)": {
    en: "Minor third (3 semitones)", es: "Tercera menor (3 semitonos)",
    de: "Kleine Terz (3 Halbtonschritte)", it: "Terza minore (3 semitoni)", pt: "Terça menor (3 semitons)",
  },
  "Tierce majeure (4 dt)": {
    en: "Major third (4 st)", es: "Tercera mayor (4 st)",
    de: "Große Terz (4 HT)", it: "Terza maggiore (4 st)", pt: "Terça maior (4 st)",
  },
  "Tierce mineure (3 dt)": {
    en: "Minor third (3 st)", es: "Tercera menor (3 st)",
    de: "Kleine Terz (3 HT)", it: "Terza minore (3 st)", pt: "Terça menor (3 st)",
  },
  "juste (7 demi-tons)": {
    en: "perfect (7 semitones)", es: "justa (7 semitonos)",
    de: "rein (7 Halbtonschritte)", it: "giusta (7 semitoni)", pt: "justa (7 semitons)",
  },
  "diminuée (6 demi-tons)": {
    en: "diminished (6 semitones)", es: "disminuida (6 semitonos)",
    de: "vermindert (6 Halbtonschritte)", it: "diminuita (6 semitoni)", pt: "diminuta (6 semitons)",
  },
  "augmentée (8 demi-tons)": {
    en: "augmented (8 semitones)", es: "aumentada (8 semitonos)",
    de: "übermäßig (8 Halbtonschritte)", it: "aumentata (8 semitoni)", pt: "aumentada (8 semitons)",
  },

  // ─── Tetrad bases ─────────────────────────────────────────────────────────
  "Triade majeure + 7e majeure": {
    en: "Major triad + major 7th", es: "Tríada mayor + 7ª mayor",
    de: "Dur-Dreiklang + große Septime", it: "Triade maggiore + 7ª maggiore", pt: "Tríade maior + 7ª maior",
  },
  "Triade majeure + 7e mineure": {
    en: "Major triad + minor 7th", es: "Tríada mayor + 7ª menor",
    de: "Dur-Dreiklang + kleine Septime", it: "Triade maggiore + 7ª minore", pt: "Tríade maior + 7ª menor",
  },
  "Triade mineure + 7e mineure": {
    en: "Minor triad + minor 7th", es: "Tríada menor + 7ª menor",
    de: "Moll-Dreiklang + kleine Septime", it: "Triade minore + 7ª minore", pt: "Tríade menor + 7ª menor",
  },
  "Triade diminuée + 7e mineure": {
    en: "Diminished triad + minor 7th", es: "Tríada disminuida + 7ª menor",
    de: "Verminderter Dreiklang + kleine Septime", it: "Triade diminuita + 7ª minore", pt: "Tríade diminuta + 7ª menor",
  },
  "Triade diminuée + 7e diminuée": {
    en: "Diminished triad + diminished 7th", es: "Tríada disminuida + 7ª disminuida",
    de: "Verminderter Dreiklang + verminderte Septime", it: "Triade diminuita + 7ª diminuita", pt: "Tríade diminuta + 7ª diminuta",
  },

  // ─── Inversions ───────────────────────────────────────────────────────────
  "État fondamental": {
    en: "Root position", es: "Estado fundamental",
    de: "Grundstellung", it: "Posizione fondamentale", pt: "Estado fundamental",
  },
  "1er renversement": {
    en: "1st inversion", es: "1ª inversión",
    de: "1. Umkehrung", it: "1° rivolto", pt: "1ª inversão",
  },
  "2e renversement": {
    en: "2nd inversion", es: "2ª inversión",
    de: "2. Umkehrung", it: "2° rivolto", pt: "2ª inversão",
  },
  "3e renversement": {
    en: "3rd inversion", es: "3ª inversión",
    de: "3. Umkehrung", it: "3° rivolto", pt: "3ª inversão",
  },

  // ─── Non-chord tones (Cours 6) ────────────────────────────────────────────
  "Note de passage": {
    en: "Passing tone", es: "Nota de paso",
    de: "Durchgangsnote", it: "Nota di passaggio", pt: "Nota de passagem",
  },
  "Broderie": {
    en: "Neighboring tone", es: "Bordadura",
    de: "Wechselnote", it: "Bordatura", pt: "Bordadura",
  },
  "Retard": {
    en: "Suspension", es: "Retardo",
    de: "Vorhalt", it: "Ritardo", pt: "Retardo",
  },
  "Anticipation": {
    en: "Anticipation", es: "Anticipación",
    de: "Antizipation", it: "Anticipazione", pt: "Antecipação",
  },
  "Appoggiature": {
    en: "Appoggiatura", es: "Apoyatura",
    de: "Vorschlag", it: "Appoggiatura", pt: "Apojatura",
  },
  "Échappée": {
    en: "Escape tone", es: "Nota escapada",
    de: "Échappée", it: "Nota di fuga", pt: "Nota escapada",
  },

  // ─── Accompaniment types (Cours 6) ────────────────────────────────────────
  "Arpège": {
    en: "Arpeggio", es: "Arpegio",
    de: "Arpeggio", it: "Arpeggio", pt: "Arpejo",
  },
  "Accords brisés": {
    en: "Broken chords", es: "Acordes rotos",
    de: "Gebrochene Akkorde", it: "Accordi spezzati", pt: "Acordes quebrados",
  },
  "Basse / accord séparés": {
    en: "Bass / chord separated", es: "Bajo / acorde separados",
    de: "Bass / Akkord getrennt", it: "Basso / accordo separati", pt: "Baixo / acorde separados",
  },
  "Comping": {
    en: "Comping", es: "Comping",
    de: "Comping", it: "Comping", pt: "Comping",
  },
  "Contrepoint": {
    en: "Counterpoint", es: "Contrapunto",
    de: "Kontrapunkt", it: "Contrappunto", pt: "Contraponto",
  },

  // ─── Harmonic sequences (Cours 9) ─────────────────────────────────────────
  "Marche diatonique": {
    en: "Diatonic sequence", es: "Secuencia diatónica",
    de: "Diatonische Sequenz", it: "Sequenza diatonica", pt: "Sequência diatônica",
  },
  "Marche harmonique": {
    en: "Harmonic sequence", es: "Secuencia armónica",
    de: "Harmonische Sequenz", it: "Sequenza armonica", pt: "Sequência harmônica",
  },

  // ─── Phrase structure steps (Cours 17) ────────────────────────────────────
  "Idée de base": {
    en: "Basic idea", es: "Idea básica",
    de: "Grundidee", it: "Idea di base", pt: "Ideia básica",
  },
  "Répétition": {
    en: "Repetition", es: "Repetición",
    de: "Wiederholung", it: "Ripetizione", pt: "Repetição",
  },
  "Accélération": {
    en: "Acceleration", es: "Aceleración",
    de: "Beschleunigung", it: "Accelerazione", pt: "Aceleração",
  },
  "Cadence": {
    en: "Cadence", es: "Cadencia",
    de: "Kadenz", it: "Cadenza", pt: "Cadência",
  },

  // ─── Motivic elements (Cours 18) ──────────────────────────────────────────
  "Intervalles": {
    en: "Intervals", es: "Intervalos",
    de: "Intervalle", it: "Intervalli", pt: "Intervalos",
  },
  "Rythme": {
    en: "Rhythm", es: "Ritmo",
    de: "Rhythmus", it: "Ritmo", pt: "Ritmo",
  },
  "Harmonie": {
    en: "Harmony", es: "Armonía",
    de: "Harmonie", it: "Armonia", pt: "Harmonia",
  },
  "Accompagnement": {
    en: "Accompaniment", es: "Acompañamiento",
    de: "Begleitung", it: "Accompagnamento", pt: "Acompanhamento",
  },
  "Dynamique": {
    en: "Dynamics", es: "Dinámica",
    de: "Dynamik", it: "Dinamica", pt: "Dinâmica",
  },

  // ─── Harmonic progressions / sequences (Cours 5) ─────────────────────────
  "Cycle des quintes descendantes": {
    en: "Descending cycle of fifths", es: "Ciclo de quintas descendente",
    de: "Absteigende Quintfolge", it: "Ciclo delle quinte discendente", pt: "Ciclo de quintas descendente",
  },
  "Basse de chaconne": {
    en: "Chaconne bass", es: "Bajo de chacona",
    de: "Chaconne-Bass", it: "Basso di ciaccona", pt: "Baixo de chacona",
  },
  "Accord napolitain": {
    en: "Neapolitan chord", es: "Acorde napolitano",
    de: "Neapolitanischer Akkord", it: "Accordo napoletano", pt: "Acorde napolitano",
  },

  // ─── UI labels (shared across courses) ───────────────────────────────────
  "Fondamentale": {
    en: "Root", es: "Fundamental",
    de: "Grundton", it: "Fondamentale", pt: "Fundamental",
  },
  "Type d'accord": {
    en: "Chord type", es: "Tipo de acorde",
    de: "Akkordtyp", it: "Tipo di accordo", pt: "Tipo de acorde",
  },
  "Quinte :": {
    en: "Fifth:", es: "Quinta:",
    de: "Quinte:", it: "Quinta:", pt: "Quinta:",
  },
  "Base :": {
    en: "Base:", es: "Base:",
    de: "Basis:", it: "Base:", pt: "Base:",
  },
  "Basse :": {
    en: "Bass:", es: "Bajo:",
    de: "Bass:", it: "Basso:", pt: "Baixo:",
  },
  "Notation slash :": {
    en: "Slash notation:", es: "Notación slash:",
    de: "Slash-Notation:", it: "Notazione slash:", pt: "Notação slash:",
  },
  "Note caractéristique": {
    en: "Characteristic note", es: "Nota característica",
    de: "Charakternote", it: "Nota caratteristica", pt: "Nota característica",
  },
  "Accord caractéristique": {
    en: "Characteristic chord", es: "Acorde característico",
    de: "Charakterakkord", it: "Accordo caratteristico", pt: "Acorde característico",
  },
  "Accord caractéristique :": {
    en: "Characteristic chord:", es: "Acorde característico:",
    de: "Charakterakkord:", it: "Accordo caratteristico:", pt: "Acorde característico:",
  },
  "Progression type :": {
    en: "Typical progression:", es: "Progresión típica:",
    de: "Typische Progression:", it: "Progressione tipica:", pt: "Progressão típica:",
  },
  "Entraînement": {
    en: "Practice", es: "Práctica",
    de: "Übung", it: "Esercizio", pt: "Prática",
  },
  "Nouveau quiz": {
    en: "New quiz", es: "Nuevo quiz",
    de: "Neues Quiz", it: "Nuovo quiz", pt: "Novo quiz",
  },
  "Récapitulatif": {
    en: "Summary", es: "Resumen",
    de: "Zusammenfassung", it: "Riepilogo", pt: "Resumo",
  },
  "Exemples musicaux": {
    en: "Musical examples", es: "Ejemplos musicales",
    de: "Musikbeispiele", it: "Esempi musicali", pt: "Exemplos musicais",
  },
  "Exemples :": {
    en: "Examples:", es: "Ejemplos:",
    de: "Beispiele:", it: "Esempi:", pt: "Exemplos:",
  },
  "Exemple :": {
    en: "Example:", es: "Ejemplo:",
    de: "Beispiel:", it: "Esempio:", pt: "Exemplo:",
  },
  "Principe clé :": {
    en: "Key principle:", es: "Principio clave:",
    de: "Schlüsselprinzip:", it: "Principio chiave:", pt: "Princípio chave:",
  },
  "Règle d'or :": {
    en: "Golden rule:", es: "Regla de oro:",
    de: "Goldene Regel:", it: "Regola d'oro:", pt: "Regra de ouro:",
  },
  "Règle :": {
    en: "Rule:", es: "Regla:",
    de: "Regel:", it: "Regola:", pt: "Regra:",
  },
  "Règle pratique :": {
    en: "Practical rule:", es: "Regla práctica:",
    de: "Praktische Regel:", it: "Regola pratica:", pt: "Regra prática:",
  },
  "Attention :": {
    en: "Warning:", es: "Atención:",
    de: "Achtung:", it: "Attenzione:", pt: "Atenção:",
  },
  "Définition :": {
    en: "Definition:", es: "Definición:",
    de: "Definition:", it: "Definizione:", pt: "Definição:",
  },
  "À retenir :": {
    en: "Key takeaway:", es: "Para recordar:",
    de: "Merksatz:", it: "Da ricordare:", pt: "Para lembrar:",
  },
  "Conseil :": {
    en: "Tip:", es: "Consejo:",
    de: "Tipp:", it: "Consiglio:", pt: "Dica:",
  },
  "Analyse :": {
    en: "Analysis:", es: "Análisis:",
    de: "Analyse:", it: "Analisi:", pt: "Análise:",
  },
  "Exercice :": {
    en: "Exercise:", es: "Ejercicio:",
    de: "Übung:", it: "Esercizio:", pt: "Exercício:",
  },
  "Couleur harmonique :": {
    en: "Harmonic color:", es: "Color armónico:",
    de: "Harmonische Farbe:", it: "Colore armonico:", pt: "Cor harmônica:",
  },
  "Voir le résultat": {
    en: "See result", es: "Ver resultado",
    de: "Ergebnis sehen", it: "Vedi risultato", pt: "Ver resultado",
  },
  "Suivante →": {
    en: "Next →", es: "Siguiente →",
    de: "Weiter →", it: "Successiva →", pt: "Próxima →",
  },

  // ─── Section headings (Cours 2) ───────────────────────────────────────────
  "Construire une triade": {
    en: "Building a triad", es: "Construir una tríada",
    de: "Einen Dreiklang aufbauen", it: "Costruire una triade", pt: "Construir uma tríade",
  },
  "Les 4 types de triades": {
    en: "The 4 triad types", es: "Los 4 tipos de tríada",
    de: "Die 4 Dreiklangtypen", it: "I 4 tipi di triade", pt: "Os 4 tipos de tríade",
  },
  "Les 7 accords de la gamme majeure": {
    en: "The 7 chords of the major scale", es: "Los 7 acordes de la escala mayor",
    de: "Die 7 Akkorde der Durtonleiter", it: "I 7 accordi della scala maggiore", pt: "Os 7 acordes da escala maior",
  },
  "Les accords de septième": {
    en: "Seventh chords", es: "Los acordes de séptima",
    de: "Septakkorde", it: "Gli accordi di settima", pt: "Os acordes de sétima",
  },
  "Tétrades de C majeur": {
    en: "C major tetrads", es: "Tétradas de Do mayor",
    de: "C-Dur Vierklänge", it: "Tetrade di Do maggiore", pt: "Tétrades de Dó maior",
  },
  "Renversements de C major": {
    en: "C major inversions", es: "Inversiones de Do mayor",
    de: "C-Dur Umkehrungen", it: "Rivolti di Do maggiore", pt: "Inversões de Dó maior",
  },

  // ─── Section headings (Cours 3) ───────────────────────────────────────────
  "Le triton — moteur de la tension harmonique": {
    en: "The tritone — engine of harmonic tension", es: "El tritono — motor de la tensión armónica",
    de: "Der Tritonus — Motor der harmonischen Spannung", it: "Il tritono — motore della tensione armonica", pt: "O trítono — motor da tensão harmônica",
  },
  "Classification des accords par rapport au triton": {
    en: "Chord classification relative to the tritone", es: "Clasificación de los acordes respecto al tritono",
    de: "Akkordklassifikation in Bezug auf den Tritonus", it: "Classificazione degli accordi rispetto al tritono", pt: "Classificação dos acordes em relação ao trítono",
  },
  "Les fonctions tonales": {
    en: "Tonal functions", es: "Las funciones tonales",
    de: "Tonalfunktionen", it: "Le funzioni tonali", pt: "As funções tonais",
  },
  "Progressions et cadences": {
    en: "Progressions and cadences", es: "Progresiones y cadencias",
    de: "Progressionen und Kadenzen", it: "Progressioni e cadenze", pt: "Progressões e cadências",
  },
  "Les cadences": {
    en: "Cadences", es: "Las cadencias",
    de: "Kadenzen", it: "Le cadenze", pt: "As cadências",
  },
  "La conduite de voix (SATB)": {
    en: "Voice leading (SATB)", es: "Conducción de voces (SATB)",
    de: "Stimmführung (SATB)", it: "Conduzione delle voci (SATB)", pt: "Condução de vozes (SATB)",
  },

  // ─── Section headings (Cours 4) ───────────────────────────────────────────
  "Les cadences : ponctuation du discours musical": {
    en: "Cadences: punctuation of musical discourse", es: "Las cadencias: puntuación del discurso musical",
    de: "Kadenzen: Interpunktion des musikalischen Diskurses", it: "Le cadenze: punteggiatura del discorso musicale", pt: "As cadências: pontuação do discurso musical",
  },
  "Techniques de progression harmonique": {
    en: "Harmonic progression techniques", es: "Técnicas de progresión armónica",
    de: "Harmonische Progressionstechniken", it: "Tecniche di progressione armonica", pt: "Técnicas de progressão harmônica",
  },
  "Substitutions diatoniques en C majeur": {
    en: "Diatonic substitutions in C major", es: "Sustituciones diatónicas en Do mayor",
    de: "Diatonische Substitutionen in C-Dur", it: "Sostituzioni diatoniche in Do maggiore", pt: "Substituições diatônicas em Dó maior",
  },
  "Choisir le bon renversement": {
    en: "Choosing the right inversion", es: "Elegir la inversión correcta",
    de: "Die richtige Umkehrung wählen", it: "Scegliere il giusto rivolto", pt: "Escolher a inversão correta",
  },

  // ─── Section headings (Cours 5) ───────────────────────────────────────────
  "La gamme mineure et ses deux formes": {
    en: "The minor scale and its two forms", es: "La escala menor y sus dos formas",
    de: "Die Molltonleiter und ihre zwei Formen", it: "La scala minore e le sue due forme", pt: "A escala menor e suas duas formas",
  },
  "Les 7 accords de C mineur": {
    en: "The 7 chords of C minor", es: "Los 7 acordes de Do menor",
    de: "Die 7 Akkorde in c-Moll", it: "I 7 accordi di Do minore", pt: "Os 7 acordes de Dó menor",
  },
  "Emprunts à l'homonyme": {
    en: "Parallel mode borrowing", es: "Préstamos del homónimo",
    de: "Entlehnung aus dem Gleichnamigen", it: "Prestiti dall'omonimo", pt: "Empréstimos do homônimo",
  },
  "Trois suites harmoniques incontournables": {
    en: "Three essential harmonic progressions", es: "Tres progresiones armónicas esenciales",
    de: "Drei unverzichtbare harmonische Sequenzen", it: "Tre sequenze armoniche imprescindibili", pt: "Três sequências harmônicas essenciais",
  },

  // ─── Section headings (Cours 6) ───────────────────────────────────────────
  "Identifier le centre tonal": {
    en: "Identifying the tonal center", es: "Identificar el centro tonal",
    de: "Das Tonzentrum bestimmen", it: "Identificare il centro tonale", pt: "Identificar o centro tonal",
  },
  "Notes réelles et notes étrangères": {
    en: "Chord tones and non-chord tones", es: "Notas reales y notas ajenas",
    de: "Akkordtöne und akkordfreie Töne", it: "Note reali e note estranee", pt: "Notas reais e notas estranhas",
  },
  "Construire le squelette harmonique": {
    en: "Building the harmonic skeleton", es: "Construir el esqueleto armónico",
    de: "Das harmonische Skelett aufbauen", it: "Costruire lo scheletro armonico", pt: "Construir o esqueleto harmônico",
  },
  "Les 5 étapes de l'harmonisation": {
    en: "The 5 steps of harmonization", es: "Los 5 pasos de la armonización",
    de: "Die 5 Schritte der Harmonisierung", it: "I 5 passi dell'armonizzazione", pt: "Os 5 passos da harmonização",
  },

  // ─── Section headings (Cours 7) ───────────────────────────────────────────
  "Principe de la tonicisation": {
    en: "Principle of tonicization", es: "Principio de la tonicización",
    de: "Prinzip der Tonikalisierung", it: "Principio della tonicizzazione", pt: "Princípio da tonicização",
  },
  "Les dominantes secondaires en C majeur": {
    en: "Secondary dominants in C major", es: "Dominantes secundarias en Do mayor",
    de: "Sekundärdominanten in C-Dur", it: "Dominanti secondarie in Do maggiore", pt: "Dominantes secundárias em Dó maior",
  },
  "Tons voisins et fonctions secondaires": {
    en: "Closely related keys and secondary functions", es: "Tonalidades vecinas y funciones secundarias",
    de: "Verwandte Tonarten und Sekundärfunktionen", it: "Tonalità vicine e funzioni secondarie", pt: "Tonalidades vizinhas e funções secundárias",
  },
  "Chaînes de tonicisations": {
    en: "Chains of tonicizations", es: "Cadenas de tonicizaciones",
    de: "Tonikalisierungsketten", it: "Catene di tonicizzazioni", pt: "Cadeias de tonicizações",
  },

  // ─── Section headings (Cours 8) ───────────────────────────────────────────
  "Logique d'une modulation": {
    en: "Logic of a modulation", es: "Lógica de una modulación",
    de: "Logik einer Modulation", it: "Logica di una modulazione", pt: "Lógica de uma modulação",
  },
  "Tons voisins — les destinations privilégiées": {
    en: "Closely related keys — preferred destinations", es: "Tonalidades vecinas — destinos preferidos",
    de: "Verwandte Tonarten — bevorzugte Ziele", it: "Tonalità vicine — destinazioni preferite", pt: "Tonalidades vizinhas — destinos preferenciais",
  },
  "L'accord pivot": {
    en: "The pivot chord", es: "El acorde pivote",
    de: "Der Drehpunktakkord", it: "L'accordo perno", pt: "O acorde pivô",
  },
  "Exemples de modulations par accord pivot": {
    en: "Examples of pivot chord modulations", es: "Ejemplos de modulaciones por acorde pivote",
    de: "Beispiele für Modulation durch Drehpunktakkord", it: "Esempi di modulazioni per accordo perno", pt: "Exemplos de modulações por acorde pivô",
  },

  // ─── Section headings (Cours 9) ───────────────────────────────────────────
  "La marche harmonique": {
    en: "The harmonic sequence", es: "La marcha armónica",
    de: "Die harmonische Sequenz", it: "La marcia armonica", pt: "A marcha harmônica",
  },
  "Modulation par note commune": {
    en: "Modulation by common note", es: "Modulación por nota común",
    de: "Modulation durch Gemeinnote", it: "Modulazione per nota comune", pt: "Modulação por nota comum",
  },
  "Les pédales harmoniques": {
    en: "Harmonic pedals", es: "Los pedales armónicos",
    de: "Harmonische Orgelpunkte", it: "I pedali armonici", pt: "Os pedais harmônicos",
  },
  "Les accords appogiaturés": {
    en: "Appoggiatura chords", es: "Los acordes apoyatura",
    de: "Vorhaltsakkorde", it: "Gli accordi appogiaturati", pt: "Os acordes apoiatura",
  },

  // ─── Section headings (Cours 10) ──────────────────────────────────────────
  "Les modes de la gamme majeure": {
    en: "Modes of the major scale", es: "Los modos de la escala mayor",
    de: "Modi der Durtonleiter", it: "I modi della scala maggiore", pt: "Os modos da escala maior",
  },
  "Les 7 modes de la gamme majeure": {
    en: "The 7 modes of the major scale", es: "Los 7 modos de la escala mayor",
    de: "Die 7 Modi der Durtonleiter", it: "I 7 modi della scala maggiore", pt: "Os 7 modos da escala maior",
  },
  "Harmonie modale — accords et progressions": {
    en: "Modal harmony — chords and progressions", es: "Armonía modal — acordes y progresiones",
    de: "Modale Harmonie — Akkorde und Progressionen", it: "Armonia modale — accordi e progressioni", pt: "Harmonia modal — acordes e progressões",
  },
  "Progressions modales emblématiques": {
    en: "Emblematic modal progressions", es: "Progresiones modales emblemáticas",
    de: "Emblematische Modalprogressionen", it: "Progressioni modali emblematiche", pt: "Progressões modais emblemáticas",
  },

  // ─── Section headings (Cours 11–19) ───────────────────────────────────────
  "Les extensions d'accords": {
    en: "Chord extensions", es: "Las extensiones de acordes",
    de: "Akkorderweiterungen", it: "Le estensioni degli accordi", pt: "As extensões de acordes",
  },
  "La substitution tritonique": {
    en: "Tritone substitution", es: "La sustitución tritónica",
    de: "Tritonussubstitution", it: "La sostituzione tritonica", pt: "A substituição tritônica",
  },
  "Le contrepoint à 2 voix": {
    en: "Two-voice counterpoint", es: "El contrapunto a 2 voces",
    de: "Zweistimmiger Kontrapunkt", it: "Il contrappunto a 2 voci", pt: "O contraponto a 2 vozes",
  },
  "Les 5 espèces de contrepoint": {
    en: "The 5 species of counterpoint", es: "Las 5 especies de contrapunto",
    de: "Die 5 Kontrapunktgattungen", it: "Le 5 specie di contrappunto", pt: "As 5 espécies de contraponto",
  },
  "L'harmonisation modale": {
    en: "Modal harmonization", es: "La armonización modal",
    de: "Modale Harmonisierung", it: "L'armonizzazione modale", pt: "A harmonização modal",
  },
  "Les progressions jazz avancées": {
    en: "Advanced jazz progressions", es: "Las progresiones jazz avanzadas",
    de: "Erweiterte Jazz-Progressionen", it: "Le progressioni jazz avanzate", pt: "As progressões jazz avançadas",
  },
  "La réharmonisation": {
    en: "Reharmonization", es: "La rearmonización",
    de: "Reharmonisierung", it: "La riarmonizzazione", pt: "A rearmonização",
  },
  "La phrase musicale et la forme": {
    en: "The musical phrase and form", es: "La frase musical y la forma",
    de: "Die musikalische Phrase und die Form", it: "La frase musicale e la forma", pt: "A frase musical e a forma",
  },
  "Le développement motivique": {
    en: "Motivic development", es: "El desarrollo motívico",
    de: "Motivische Entwicklung", it: "Lo sviluppo motivico", pt: "O desenvolvimento motívico",
  },
  "Introduction à l'orchestration": {
    en: "Introduction to orchestration", es: "Introducción a la orquestación",
    de: "Einführung in die Orchestrierung", it: "Introduzione all'orchestrazione", pt: "Introdução à orquestração",
  },

  // ─── Section headings (Cours 22–23) ───────────────────────────────────────
  "Les 4 techniques de réharmonisation": {
    en: "The 4 reharmonization techniques", es: "Las 4 técnicas de rearmonización",
    de: "Die 4 Reharmonisierungstechniken", it: "Le 4 tecniche di riarmonizzazione", pt: "As 4 técnicas de rearmonização",
  },
  "Réharmonisations célèbres analysées": {
    en: "Famous reharmonizations analyzed", es: "Rearmonizaciones famosas analizadas",
    de: "Berühmte Reharmonisierungen analysiert", it: "Riarmonizzazioni famose analizzate", pt: "Rearmonizações famosas analisadas",
  },
  "Composer dans le style des maîtres": {
    en: "Composing in the style of the masters", es: "Componer en el estilo de los maestros",
    de: "Im Stil der Meister komponieren", it: "Comporre nello stile dei maestri", pt: "Compor no estilo dos mestres",
  },

  // ─── Misc shared ──────────────────────────────────────────────────────────
  "Tableau récapitulatif": {
    en: "Summary table", es: "Tabla resumen",
    de: "Übersichtstabelle", it: "Tabella riassuntiva", pt: "Tabela resumo",
  },
  "Tableau comparatif": {
    en: "Comparison table", es: "Tabla comparativa",
    de: "Vergleichstabelle", it: "Tabella comparativa", pt: "Tabela comparativa",
  },
  "Simplification pratique": {
    en: "Practical shortcut", es: "Simplificación práctica",
    de: "Praktische Vereinfachung", it: "Semplificazione pratica", pt: "Simplificação prática",
  },
  "Calcul rapide :": {
    en: "Quick calculation:", es: "Cálculo rápido:",
    de: "Schnellberechnung:", it: "Calcolo rapido:", pt: "Cálculo rápido:",
  },
  "Erreur fréquente :": {
    en: "Common mistake:", es: "Error frecuente:",
    de: "Häufiger Fehler:", it: "Errore frequente:", pt: "Erro frequente:",
  },
  "Piège courant :": {
    en: "Common pitfall:", es: "Trampa común:",
    de: "Häufige Falle:", it: "Trappola comune:", pt: "Armadilha comum:",
  },
  "Rappel :": {
    en: "Reminder:", es: "Recordatorio:",
    de: "Erinnerung:", it: "Promemoria:", pt: "Lembrete:",
  },
  "En C majeur :": {
    en: "In C major:", es: "En Do mayor:",
    de: "In C-Dur:", it: "In Do maggiore:", pt: "Em Dó maior:",
  },
  "En C mineur :": {
    en: "In C minor:", es: "En Do menor:",
    de: "In c-Moll:", it: "In Do minore:", pt: "Em Dó menor:",
  },
  "Tensions disponibles par fonction": {
    en: "Available tensions by function", es: "Tensiones disponibles por función",
    de: "Verfügbare Spannungen nach Funktion", it: "Tensioni disponibili per funzione", pt: "Tensões disponíveis por função",
  },
  "Consonances ✓": {
    en: "Consonances ✓", es: "Consonancias ✓",
    de: "Konsonanzen ✓", it: "Consonanze ✓", pt: "Consonâncias ✓",
  },
  "Dissonances ✗": {
    en: "Dissonances ✗", es: "Disonancias ✗",
    de: "Dissonanzen ✗", it: "Dissonanze ✗", pt: "Dissonâncias ✗",
  },
  "Les 4 types de mouvement": {
    en: "The 4 types of motion", es: "Los 4 tipos de movimiento",
    de: "Die 4 Bewegungsarten", it: "I 4 tipi di moto", pt: "Os 4 tipos de movimento",
  },
  "Intervalles consonants et dissonants": {
    en: "Consonant and dissonant intervals", es: "Intervalos consonantes y disonantes",
    de: "Konsonante und dissonante Intervalle", it: "Intervalli consonanti e dissonanti", pt: "Intervalos consonantes e dissonantes",
  },
  "Règles fondamentales du contrepoint": {
    en: "Fundamental rules of counterpoint", es: "Reglas fundamentales del contrapunto",
    de: "Grundregeln des Kontrapunkts", it: "Regole fondamentali del contrappunto", pt: "Regras fundamentais do contraponto",
  },
  "Harmonisation modale vs tonale": {
    en: "Modal vs tonal harmonization", es: "Armonización modal vs tonal",
    de: "Modale vs tonale Harmonisierung", it: "Armonizzazione modale vs tonale", pt: "Harmonização modal vs tonal",
  },
  "Penser modal vs penser tonal :": {
    en: "Thinking modal vs thinking tonal:", es: "Pensar modal vs pensar tonal:",
    de: "Modal denken vs tonal denken:", it: "Pensare modale vs pensare tonale:", pt: "Pensar modal vs pensar tonal:",
  },
  "Les grandes formes musicales": {
    en: "The great musical forms", es: "Las grandes formas musicales",
    de: "Die großen musikalischen Formen", it: "Le grandi forme musicali", pt: "As grandes formas musicais",
  },
  "La période et les grandes formes": {
    en: "The period and large-scale forms", es: "El período y las grandes formas",
    de: "Die Periode und die großen Formen", it: "Il periodo e le grandi forme", pt: "O período e as grandes formas",
  },
  "Les 5 éléments constitutifs d'un motif": {
    en: "The 5 constituent elements of a motive", es: "Los 5 elementos constitutivos de un motivo",
    de: "Die 5 Bestandteile eines Motivs", it: "I 5 elementi costitutivi di un motivo", pt: "Os 5 elementos constitutivos de um motivo",
  },
  "Les 4 familles de techniques de développement": {
    en: "The 4 families of development techniques", es: "Las 4 familias de técnicas de desarrollo",
    de: "Die 4 Familien der Entwicklungstechniken", it: "Le 4 famiglie di tecniche di sviluppo", pt: "As 4 famílias de técnicas de desenvolvimento",
  },
  "Les familles d'instruments et leurs caractéristiques": {
    en: "Instrument families and their characteristics", es: "Las familias de instrumentos y sus características",
    de: "Instrumentenfamilien und ihre Eigenschaften", it: "Le famiglie di strumenti e le loro caratteristiche", pt: "As famílias de instrumentos e suas características",
  },
  "Principes d'écriture orchestrale": {
    en: "Principles of orchestral writing", es: "Principios de escritura orquestal",
    de: "Prinzipien des Orchestersatzes", it: "Principi della scrittura orchestrale", pt: "Princípios de escrita orquestral",
  },
  "EXERCICES D'ANALYSE COMPARATIVE": {
    en: "COMPARATIVE ANALYSIS EXERCISES", es: "EJERCICIOS DE ANÁLISIS COMPARATIVO",
    de: "VERGLEICHENDE ANALYSEÜBUNGEN", it: "ESERCIZI DI ANALISI COMPARATIVA", pt: "EXERCÍCIOS DE ANÁLISE COMPARATIVA",
  },
  "Réharmonisé": {
    en: "Reharmonized", es: "Rearmonizado",
    de: "Reharmonisiert", it: "Riarmonizzato", pt: "Rearmonizado",
  },
};
