import type { MesureAnalyse, AnalyseNarrative } from "./conservatoire-bwv846";

/**
 * data/conservatoire-pastiche-classique.ts
 * Harmonia — Période classique en Do majeur, EXERCICE ORIGINAL composé pour la
 * section "conservatoire" du cours 41 (niveau 5 — l'écriture de style : pastiche
 * classique/romantique/XXe). Réalisation piano (mélodie + basse d'Alberti) d'un
 * exercice DEM/CPES : le cours décrit déjà cet exercice en prose (i18n
 * cours41.narrative.corrige_classique_text) pour quatuor à cordes — la basse
 * d'Alberti "au 2e violon et à l'alto" y devient ici la main gauche du piano,
 * simplification assumée pour l'encodage et le test, sans changer la substance
 * pédagogique (harmonie diatonique, rythme harmonique régulier, cadence parfaite
 * préparée par une demi-cadence à mi-parcours, aucun chromatisme superflu).
 *
 * Structure approuvée par Dany le 2026-07-30 ("c'est parfait") :
 * ANTÉCÉDENT (m.1-4, "le fragment donné") : I (m.1) - IV (m.2) - V (m.3) -
 * demi-cadence sur V tenue (m.4). CONSÉQUENT (m.5-8, "le corrigé" à composer) :
 * reprise de l'ouverture (m.5) - détour par le ii (m.6) - V7 (m.7) - cadence
 * parfaite V7-I (m.8). Carrure stricte 4+4.
 *
 * Généré via le sérialiseur interne piece-vers-musicxml.ts (modèle Piece/Voix/
 * Note de piece-model.ts) plutôt qu'écrit à la main, pour garantir une structure
 * MusicXML valide (durées, liaisons, voix) — PAS un fichier fourni par Dany,
 * seul cas de ce chantier où la pièce est composée par l'assistant plutôt que
 * vérifiée depuis un fichier externe (cf. décision explicite de Dany : "je
 * compose l'exercice moi-même" a été décliné en "l'assistant compose", Dany
 * validant le plan avant l'encodage plutôt que le fichier après coup).
 *
 * Tempo 96 à la noire ajouté explicitement (Andante grazioso) — évite la
 * désynchronisation Verovio/moteur audio documentée dans
 * project_playback_tempo_desync (sans tempo écrit, Verovio suppose 120bpm,
 * notre moteur 90bpm).
 */
export const PASTICHE_CLASSIQUE_MESURES_1_8 =
`<?xml version="1.0" encoding="UTF-8"?><score-partwise version="4.0"><movement-title>Période classique (exercice de style, Do majeur)</movement-title><identification><creator type="composer">Exercice original Harmonia — pastiche classique (Haydn/Mozart)</creator></identification><part-list><score-part id="P1"><part-name print-object="no">Piano</part-name></score-part></part-list><part id="P1"><measure number="1"><attributes><divisions>48</divisions><key><fifths>0</fifths><mode>major</mode></key><time><beats>4</beats><beat-type>4</beat-type></time><staves>2</staves><clef number="1"><sign>G</sign><line>2</line></clef><clef number="2"><sign>F</sign><line>4</line></clef></attributes><direction placement="above"><direction-type><metronome><beat-unit>quarter</beat-unit><per-minute>96</per-minute></metronome></direction-type><sound tempo="96"/></direction><note><pitch><step>C</step><octave>5</octave></pitch><duration>48</duration><voice>1</voice><type>quarter</type><stem>up</stem><staff>1</staff></note><note><pitch><step>E</step><octave>5</octave></pitch><duration>48</duration><voice>1</voice><type>quarter</type><stem>up</stem><staff>1</staff></note><note><pitch><step>G</step><octave>5</octave></pitch><duration>48</duration><voice>1</voice><type>quarter</type><stem>up</stem><staff>1</staff></note><note><pitch><step>C</step><octave>6</octave></pitch><duration>48</duration><voice>1</voice><type>quarter</type><stem>up</stem><staff>1</staff></note><backup><duration>192</duration></backup><note><pitch><step>C</step><octave>3</octave></pitch><duration>48</duration><voice>4</voice><type>quarter</type><stem>down</stem><staff>2</staff></note><note><pitch><step>G</step><octave>3</octave></pitch><duration>48</duration><voice>4</voice><type>quarter</type><stem>down</stem><staff>2</staff></note><note><pitch><step>E</step><octave>3</octave></pitch><duration>48</duration><voice>4</voice><type>quarter</type><stem>down</stem><staff>2</staff></note><note><pitch><step>G</step><octave>3</octave></pitch><duration>48</duration><voice>4</voice><type>quarter</type><stem>down</stem><staff>2</staff></note></measure><measure number="2"><note><pitch><step>G</step><octave>5</octave></pitch><duration>48</duration><voice>1</voice><type>quarter</type><stem>up</stem><staff>1</staff></note><note><pitch><step>F</step><octave>5</octave></pitch><duration>48</duration><voice>1</voice><type>quarter</type><stem>up</stem><staff>1</staff></note><note><pitch><step>E</step><octave>5</octave></pitch><duration>48</duration><voice>1</voice><type>quarter</type><stem>up</stem><staff>1</staff></note><note><pitch><step>D</step><octave>5</octave></pitch><duration>48</duration><voice>1</voice><type>quarter</type><stem>up</stem><staff>1</staff></note><backup><duration>192</duration></backup><note><pitch><step>F</step><octave>3</octave></pitch><duration>48</duration><voice>4</voice><type>quarter</type><stem>down</stem><staff>2</staff></note><note><pitch><step>C</step><octave>4</octave></pitch><duration>48</duration><voice>4</voice><type>quarter</type><stem>down</stem><staff>2</staff></note><note><pitch><step>A</step><octave>3</octave></pitch><duration>48</duration><voice>4</voice><type>quarter</type><stem>down</stem><staff>2</staff></note><note><pitch><step>C</step><octave>4</octave></pitch><duration>48</duration><voice>4</voice><type>quarter</type><stem>down</stem><staff>2</staff></note></measure><measure number="3"><note><pitch><step>C</step><octave>6</octave></pitch><duration>48</duration><voice>1</voice><type>quarter</type><stem>up</stem><staff>1</staff></note><note><pitch><step>B</step><octave>5</octave></pitch><duration>48</duration><voice>1</voice><type>quarter</type><stem>up</stem><staff>1</staff></note><note><pitch><step>A</step><octave>5</octave></pitch><duration>48</duration><voice>1</voice><type>quarter</type><stem>up</stem><staff>1</staff></note><note><pitch><step>G</step><octave>5</octave></pitch><duration>48</duration><voice>1</voice><type>quarter</type><stem>up</stem><staff>1</staff></note><backup><duration>192</duration></backup><note><pitch><step>G</step><octave>3</octave></pitch><duration>48</duration><voice>4</voice><type>quarter</type><stem>down</stem><staff>2</staff></note><note><pitch><step>D</step><octave>4</octave></pitch><duration>48</duration><voice>4</voice><type>quarter</type><stem>down</stem><staff>2</staff></note><note><pitch><step>B</step><octave>3</octave></pitch><duration>48</duration><voice>4</voice><type>quarter</type><stem>down</stem><staff>2</staff></note><note><pitch><step>D</step><octave>4</octave></pitch><duration>48</duration><voice>4</voice><type>quarter</type><stem>down</stem><staff>2</staff></note></measure><measure number="4"><note><pitch><step>G</step><octave>5</octave></pitch><duration>192</duration><voice>1</voice><type>whole</type><stem>up</stem><staff>1</staff></note><backup><duration>192</duration></backup><note><pitch><step>G</step><octave>3</octave></pitch><duration>96</duration><voice>4</voice><type>half</type><stem>down</stem><staff>2</staff></note><note><pitch><step>D</step><octave>4</octave></pitch><duration>96</duration><voice>4</voice><type>half</type><stem>down</stem><staff>2</staff></note></measure><measure number="5"><note><pitch><step>C</step><octave>5</octave></pitch><duration>48</duration><voice>1</voice><type>quarter</type><stem>up</stem><staff>1</staff></note><note><pitch><step>E</step><octave>5</octave></pitch><duration>48</duration><voice>1</voice><type>quarter</type><stem>up</stem><staff>1</staff></note><note><pitch><step>G</step><octave>5</octave></pitch><duration>48</duration><voice>1</voice><type>quarter</type><stem>up</stem><staff>1</staff></note><note><pitch><step>C</step><octave>6</octave></pitch><duration>48</duration><voice>1</voice><type>quarter</type><stem>up</stem><staff>1</staff></note><backup><duration>192</duration></backup><note><pitch><step>C</step><octave>3</octave></pitch><duration>48</duration><voice>4</voice><type>quarter</type><stem>down</stem><staff>2</staff></note><note><pitch><step>G</step><octave>3</octave></pitch><duration>48</duration><voice>4</voice><type>quarter</type><stem>down</stem><staff>2</staff></note><note><pitch><step>E</step><octave>3</octave></pitch><duration>48</duration><voice>4</voice><type>quarter</type><stem>down</stem><staff>2</staff></note><note><pitch><step>G</step><octave>3</octave></pitch><duration>48</duration><voice>4</voice><type>quarter</type><stem>down</stem><staff>2</staff></note></measure><measure number="6"><note><pitch><step>A</step><octave>5</octave></pitch><duration>48</duration><voice>1</voice><type>quarter</type><stem>up</stem><staff>1</staff></note><note><pitch><step>F</step><octave>5</octave></pitch><duration>48</duration><voice>1</voice><type>quarter</type><stem>up</stem><staff>1</staff></note><note><pitch><step>D</step><octave>5</octave></pitch><duration>48</duration><voice>1</voice><type>quarter</type><stem>up</stem><staff>1</staff></note><note><pitch><step>F</step><octave>5</octave></pitch><duration>48</duration><voice>1</voice><type>quarter</type><stem>up</stem><staff>1</staff></note><backup><duration>192</duration></backup><note><pitch><step>D</step><octave>3</octave></pitch><duration>48</duration><voice>4</voice><type>quarter</type><stem>down</stem><staff>2</staff></note><note><pitch><step>A</step><octave>3</octave></pitch><duration>48</duration><voice>4</voice><type>quarter</type><stem>down</stem><staff>2</staff></note><note><pitch><step>F</step><octave>3</octave></pitch><duration>48</duration><voice>4</voice><type>quarter</type><stem>down</stem><staff>2</staff></note><note><pitch><step>A</step><octave>3</octave></pitch><duration>48</duration><voice>4</voice><type>quarter</type><stem>down</stem><staff>2</staff></note></measure><measure number="7"><note><pitch><step>G</step><octave>5</octave></pitch><duration>48</duration><voice>1</voice><type>quarter</type><stem>up</stem><staff>1</staff></note><note><pitch><step>F</step><octave>5</octave></pitch><duration>48</duration><voice>1</voice><type>quarter</type><stem>up</stem><staff>1</staff></note><note><pitch><step>D</step><octave>5</octave></pitch><duration>48</duration><voice>1</voice><type>quarter</type><stem>up</stem><staff>1</staff></note><note><pitch><step>B</step><octave>4</octave></pitch><duration>48</duration><voice>1</voice><type>quarter</type><stem>up</stem><staff>1</staff></note><backup><duration>192</duration></backup><note><pitch><step>G</step><octave>3</octave></pitch><duration>48</duration><voice>4</voice><type>quarter</type><stem>down</stem><staff>2</staff></note><note><pitch><step>D</step><octave>4</octave></pitch><duration>48</duration><voice>4</voice><type>quarter</type><stem>down</stem><staff>2</staff></note><note><pitch><step>B</step><octave>3</octave></pitch><duration>48</duration><voice>4</voice><type>quarter</type><stem>down</stem><staff>2</staff></note><note><pitch><step>F</step><octave>4</octave></pitch><duration>48</duration><voice>4</voice><type>quarter</type><stem>down</stem><staff>2</staff></note></measure><measure number="8"><note><pitch><step>C</step><octave>5</octave></pitch><duration>192</duration><voice>1</voice><type>whole</type><stem>up</stem><staff>1</staff></note><backup><duration>192</duration></backup><note><pitch><step>C</step><octave>3</octave></pitch><duration>192</duration><voice>4</voice><type>whole</type><stem>down</stem><staff>2</staff></note></measure></part></score-partwise>`;

export const PASTICHE_CLASSIQUE_ANALYSE: MesureAnalyse[] = [
  { numero: 1, nom: "Do M",         degre: "I — l'ouverture, arpège de tonique",              fonction: "T" },
  { numero: 2, nom: "Fa M",         degre: "IV — la sous-dominante",                          fonction: "SD" },
  { numero: 3, nom: "Sol M",        degre: "V — la dominante",                                fonction: "D" },
  { numero: 4, nom: "Sol M (tenu)", degre: "V — demi-cadence, fin de l'antécédent",           fonction: "D" },
  { numero: 5, nom: "Do M",         degre: "I — reprise de l'ouverture, début du conséquent", fonction: "T" },
  { numero: 6, nom: "Ré m",         degre: "ii — détour supertonique, la couleur classique",  fonction: "SD" },
  { numero: 7, nom: "Sol 7",        degre: "V7 — préparation de la cadence",                  fonction: "D" },
  { numero: 8, nom: "Do M",         degre: "I — cadence parfaite, résolution",                fonction: "T" },
];

export const PASTICHE_CLASSIQUE_ANALYSE_NARRATIVE: AnalyseNarrative = {
  tonalite: "Do majeur, sans la moindre altération — la clarté diatonique n'est pas une contrainte de l'exercice, elle EST l'exercice.",
  metrique: "4/4, Andante grazioso (96 à la noire). Carrure stricte 4+4 : huit mesures, deux phrases rigoureusement symétriques.",
  forme: "Une période classique : un antécédent (m.1-4) qui pose la question et s'arrête sur une demi-cadence, un conséquent (m.5-8) qui reprend la même ouverture puis referme sur une cadence parfaite. C'est la cellule la plus élémentaire — et la plus stricte — de l'écriture classique : tout exercice de pastiche s'y ramène avant de s'en éloigner.",
  sections: [
    {
      label: "Mesures 1-4 (l'antécédent : la question)",
      titre: "Trois degrés, une seule direction",
      chiffrage: "I – IV – V – V (demi-cadence)",
      fonctions: "T – SD – D – D",
      texte: "La mélodie s'ouvre sur l'arpège de tonique puis descend par degrés conjoints sur les trois premières mesures, pendant que la main gauche égrène une basse d'Alberti (fondamentale-quinte-tierce-quinte) sur chacun des trois accords fondamentaux du système tonal. La quatrième mesure suspend le mouvement : la mélodie se tient sur Sol, la basse tient l'accord de dominante — une demi-cadence, la question qui attend sa réponse.",
    },
    {
      label: "Mesures 5-8 (le conséquent : la réponse)",
      titre: "La même ouverture, une résolution différente",
      chiffrage: "I – ii – V7 – I (cadence parfaite)",
      fonctions: "T – SD – D – T",
      texte: "Le conséquent reprend l'antécédent note pour note à son ouverture — la carrure symétrique est la signature de la période classique. Puis, là où l'antécédent visitait la sous-dominante, le conséquent se détourne par le degré supertonique (ii, Ré-Fa-La) : une simple touche de couleur, sans jamais quitter le système diatonique. La dominante revient enrichie de sa septième (V7), la mélodie porte la sensible (Si) juste avant la résolution — et la pièce se referme sur la cadence parfaite, la tonique tenue à la basse comme à la mélodie.",
    },
    {
      label: "La basse d'Alberti",
      titre: "Une texture au service de la clarté, pas de la couleur",
      chiffrage: "fondamentale – quinte – tierce – quinte (ou septième, en m.7)",
      fonctions: "aucune fonction propre — la texture porte l'harmonie posée par la mélodie",
      texte: "La basse d'Alberti déroule inlassablement le même contour (fondamentale-quinte-tierce-quinte) sous chaque accord, changeant seulement de hauteur avec l'harmonie. Sa régularité est le contraire d'un procédé expressif : elle existe pour que l'oreille cesse de la remarquer et se concentre sur la mélodie. C'est l'exacte inverse de la pédale « sempre dopo » de Bill Evans (cours 35) — la même idée d'un accompagnement répétitif, mise au service d'un objectif opposé : la transparence plutôt que le flou.",
    },
  ],
  synthese: [
    {
      titre: "L'anachronisme, le piège numéro un",
      texte: "Aucune neuvième, aucune sixte ajoutée, aucun accord parallèle — tout procédé né après 1800 romprait immédiatement l'illusion stylistique. Le pastiche classique se juge autant à ce qu'il s'interdit qu'à ce qu'il emploie.",
    },
    {
      titre: "Carrure et symétrie : la phrase comme architecture",
      texte: "Le 4+4 rigoureux de cette période est à l'opposé du cycle décentré de Blue in Green (cours 35, un tour de dix mesures qui ne revient jamais à son point de départ) ou des sections en blocs sonores de Debussy (cours 29-30). Chaque style a sa propre géométrie de phrase ; reconnaître celle du classicisme viennois est la première étape de tout pastiche réussi.",
    },
    {
      titre: "Le même outil, deux visages",
      texte: "Une figure d'accompagnement répétée au service de la clarté ici, du flou là-bas (la pédale continue d'Evans, cours 35) : le même geste technique change de sens selon l'esthétique qu'il sert. Comprendre CE service que rend une texture est plus utile que la mémoriser comme une simple recette.",
    },
  ],
};