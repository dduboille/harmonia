const fs = require('fs');

const COMMON_KEYS = {
  fr: {
    conservatoireIntuition: "Intuition musicale",
    conservatoireVoix: "Conduite des voix · Règles DEM",
    conservatoireRepertoire: "Exemple du répertoire",
    conservatoireEcouter: "▶ Écouter",
    conservatoireCursus: "Voir le cursus conservatoire →",
    conservatoirePieges: "Pièges fréquents",
    conservatoireResume: "Résumé conservatoire",
  },
  en: {
    conservatoireIntuition: "Musical intuition",
    conservatoireVoix: "Voice leading · DEM rules",
    conservatoireRepertoire: "Repertoire example",
    conservatoireEcouter: "▶ Listen",
    conservatoireCursus: "View conservatory curriculum →",
    conservatoirePieges: "Common pitfalls",
    conservatoireResume: "Conservatory summary",
  },
  de: {
    conservatoireIntuition: "Musikalische Intuition",
    conservatoireVoix: "Stimmführung · DEM-Regeln",
    conservatoireRepertoire: "Repertoire-Beispiel",
    conservatoireEcouter: "▶ Anhören",
    conservatoireCursus: "Konservatorium-Curriculum ansehen →",
    conservatoirePieges: "Häufige Fallen",
    conservatoireResume: "Konservatorium-Zusammenfassung",
  },
  es: {
    conservatoireIntuition: "Intuición musical",
    conservatoireVoix: "Conducción de voces · Reglas DEM",
    conservatoireRepertoire: "Ejemplo del repertorio",
    conservatoireEcouter: "▶ Escuchar",
    conservatoireCursus: "Ver el currículo del conservatorio →",
    conservatoirePieges: "Errores frecuentes",
    conservatoireResume: "Resumen del conservatorio",
  },
  it: {
    conservatoireIntuition: "Intuizione musicale",
    conservatoireVoix: "Condotta delle voci · Regole DEM",
    conservatoireRepertoire: "Esempio del repertorio",
    conservatoireEcouter: "▶ Ascolta",
    conservatoireCursus: "Vedi il curriculum del conservatorio →",
    conservatoirePieges: "Errori frequenti",
    conservatoireResume: "Riepilogo del conservatorio",
  },
  pt: {
    conservatoireIntuition: "Intuição musical",
    conservatoireVoix: "Condução de vozes · Regras DEM",
    conservatoireRepertoire: "Exemplo do repertório",
    conservatoireEcouter: "▶ Ouvir",
    conservatoireCursus: "Ver o currículo do conservatório →",
    conservatoirePieges: "Erros frequentes",
    conservatoireResume: "Resumo do conservatório",
  },
};

const COURS37_NARRATIVE = {
  fr: {
    maitreCardPeriod: "1874–1951",
    maitreCardConcept: "Analyse motivique et structure profonde",
    maitreCardAnecdote: "Schoenberg est célèbre pour le dodécaphonisme, mais il était aussi un analyste et théoricien majeur. Il a développé le concept de Grundgestalt (forme fondamentale) — un motif de 2 à 6 notes dont toute l'œuvre est une extension. Son manuel 'Fundamentals of Musical Composition' est encore utilisé dans les conservatoires. Paradoxe : le père de l'atonalité était obsédé par la cohérence motivique que seul le tonal peut établir clairement.",
    maitreCardLesson: "L'analyse n'explique pas pourquoi la musique est belle — elle montre la charpente sous la peau. C'est un outil, pas une valeur.",
  },
  en: {
    maitreCardPeriod: "1874–1951",
    maitreCardConcept: "Motivic analysis and deep structure",
    maitreCardAnecdote: "Schoenberg is famous for twelve-tone music, but he was also a major analyst and theorist. He developed the concept of Grundgestalt (basic shape) — a 2-to-6-note motif from which an entire work unfolds. His manual 'Fundamentals of Musical Composition' is still used in conservatories. Paradox: the father of atonality was obsessed with the motivic coherence that only tonal music can establish clearly.",
    maitreCardLesson: "Analysis does not explain why music is beautiful — it reveals the framework beneath the surface. It is a tool, not a value.",
  },
  de: {
    maitreCardPeriod: "1874–1951",
    maitreCardConcept: "Motivische Analyse und Tiefenstruktur",
    maitreCardAnecdote: "Schönberg ist berühmt für die Zwölftonmusik, war aber auch ein bedeutender Analytiker und Theoretiker. Er entwickelte das Konzept der Grundgestalt — ein 2-bis-6-Töne-Motiv, aus dem sich das gesamte Werk entfaltet. Sein Handbuch 'Fundamentals of Musical Composition' wird noch heute in Konservatorien verwendet. Paradoxon: Der Vater der Atonalität war besessen von der motivischen Kohärenz, die nur die tonale Musik klar herstellen kann.",
    maitreCardLesson: "Analyse erklärt nicht, warum Musik schön ist — sie zeigt das Gerüst unter der Oberfläche. Sie ist ein Werkzeug, kein Wert.",
  },
  es: {
    maitreCardPeriod: "1874–1951",
    maitreCardConcept: "Análisis motívico y estructura profunda",
    maitreCardAnecdote: "Schoenberg es famoso por el dodecafonismo, pero también fue un gran analista y teórico. Desarrolló el concepto de Grundgestalt (forma básica) — un motivo de 2 a 6 notas del que se desarrolla toda la obra. Su manual 'Fundamentals of Musical Composition' sigue usándose en los conservatorios. Paradoja: el padre de la atonalidad estaba obsesionado con la coherencia motívica que solo la música tonal puede establecer claramente.",
    maitreCardLesson: "El análisis no explica por qué la música es bella — muestra la estructura bajo la superficie. Es una herramienta, no un valor.",
  },
  it: {
    maitreCardPeriod: "1874–1951",
    maitreCardConcept: "Analisi motivica e struttura profonda",
    maitreCardAnecdote: "Schoenberg è famoso per il dodecafonismo, ma era anche un importante analista e teorico. Ha sviluppato il concetto di Grundgestalt (forma fondamentale) — un motivo di 2-6 note da cui si dispiega l'intera opera. Il suo manuale 'Fundamentals of Musical Composition' è ancora usato nei conservatori. Paradosso: il padre dell'atonalità era ossessionato dalla coerenza motivica che solo la musica tonale può stabilire chiaramente.",
    maitreCardLesson: "L'analisi non spiega perché la musica è bella — mostra l'impalcatura sotto la superficie. È uno strumento, non un valore.",
  },
  pt: {
    maitreCardPeriod: "1874–1951",
    maitreCardConcept: "Análise motívica e estrutura profunda",
    maitreCardAnecdote: "Schoenberg é famoso pelo dodecafonismo, mas também foi um importante analista e teórico. Desenvolveu o conceito de Grundgestalt (forma básica) — um motivo de 2 a 6 notas a partir do qual toda a obra se desenvolve. O seu manual 'Fundamentals of Musical Composition' ainda é usado nos conservatórios. Paradoxo: o pai da atonalidade estava obcecado com a coerência motívica que só a música tonal consegue estabelecer claramente.",
    maitreCardLesson: "A análise não explica por que a música é bela — mostra o esqueleto sob a superfície. É uma ferramenta, não um valor.",
  },
};

['fr','en','de','es','it','pt'].forEach(lang => {
  const path = `./messages/${lang}.json`;
  const data = JSON.parse(fs.readFileSync(path, 'utf8'));

  // Add common labels
  data.common = { ...data.common, ...COMMON_KEYS[lang] };

  // Add cours37 narrative
  if (!data.cours37) data.cours37 = {};
  data.cours37.narrative = COURS37_NARRATIVE[lang];

  fs.writeFileSync(path, JSON.stringify(data, null, 2), 'utf8');
  console.log(`${lang} updated`);
});
