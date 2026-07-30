import type { MesureAnalyse, AnalyseNarrative } from "./conservatoire-bwv846";

/**
 * data/conservatoire-petrouchka-fiche.ts
 * Harmonia — L'accord de Petrouchka : fiche didactique (7 mesures), pour la
 * section "conservatoire" du cours 31 (niveau 4 — polytonalité et harmonie
 * quartale).
 *
 * MusicXML VERBATIM fourni par Dany (fichier "petrouchka-fiche-didactique
 * .musicxml") — jamais reconstruit à la main, cf. feedback-partitions-
 * verbatim. À LA DIFFÉRENCE de toutes les autres pièces de ce chantier :
 * ce fichier est ENTIÈREMENT ORIGINAL (aucun passage du 2e tableau de
 * Petrouchka de Stravinsky n'est reproduit) — une démonstration théorique
 * construite par Dany pour illustrer l'accord de Petrouchka sans les
 * restrictions de publication d'un export direct de la partition de
 * Stravinsky (qui reste, lui, en usage privé). D'où le champ "compositeur"
 * ci-dessous, qui crédite l'objet théorique et non une œuvre de Stravinsky.
 *
 * Chaque affirmation vérifiée directement (fichier de 7 mesures, lu dans son
 * intégralité) : Do majeur (m.1) et Fa# majeur (m.2) sans note commune ;
 * superposition intacte des deux triades (m.3, une main chacune) ; Fa# en
 * 1er renversement, La# à la basse (m.4, confirmé note à note) ; la gamme
 * hexatonique Do-Réb-Mi-Solb-Sol-Sib (m.5, les 6 classes de hauteurs
 * confirmées dans cet ordre exact) ; la collection octatonique englobante
 * (m.6, confirmée alternance demi-ton/ton régulière ET confirmée contenir
 * les deux triades complètes) ; l'accord tenu sous point d'orgue (m.7,
 * <fermata/> présente aux deux portées). AUCUNE erreur trouvée.
 */
export const PETROUCHKA_FICHE_MESURES_1_7 =
`<?xml version='1.0' encoding='UTF-8'?>
<score-partwise version="4.0"><work><work-title>L'accord de Petrouchka : fiche didactique</work-title></work><identification><creator type="lyricist">Exemples théoriques originaux (Harmonia)</creator></identification><part-list><score-part id="P1"><part-name>Piano</part-name></score-part></part-list><part id="P1"><measure number="1"><attributes><divisions>4</divisions><key><fifths>0</fifths></key><time><beats>4</beats><beat-type>4</beat-type></time><staves>2</staves><clef number="1"><sign>G</sign><line>2</line></clef><clef number="2"><sign>F</sign><line>4</line></clef></attributes><harmony placement="above" print-frame="no"><root><root-step>C</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">Do majeur : la triade la plus consonante du système tonal</words></direction-type><staff>2</staff></direction><note><pitch><step>C</step><octave>4</octave></pitch><duration>16</duration><voice>1</voice><type>whole</type><staff>1</staff></note><note><chord /><pitch><step>E</step><octave>4</octave></pitch><duration>16</duration><voice>1</voice><type>whole</type><staff>1</staff></note><note><chord /><pitch><step>G</step><octave>4</octave></pitch><duration>16</duration><voice>1</voice><type>whole</type><staff>1</staff></note><backup><duration>16</duration></backup><note><rest /><duration>16</duration><voice>5</voice><type>whole</type><staff>2</staff></note></measure><measure number="2"><harmony placement="above" print-frame="no"><root><root-step>F</root-step><root-alter>1</root-alter></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">Fa# majeur : son antipode, au triton</words></direction-type><staff>2</staff></direction><note><rest /><duration>16</duration><voice>1</voice><type>whole</type><staff>1</staff></note><backup><duration>16</duration></backup><note><pitch><step>F</step><alter>1</alter><octave>3</octave></pitch><duration>16</duration><voice>5</voice><type>whole</type><staff>2</staff></note><note><chord /><pitch><step>A</step><alter>1</alter><octave>3</octave></pitch><duration>16</duration><voice>5</voice><type>whole</type><staff>2</staff></note><note><chord /><pitch><step>C</step><alter>1</alter><octave>4</octave></pitch><duration>16</duration><voice>5</voice><type>whole</type><staff>2</staff></note></measure><measure number="3"><harmony placement="above" print-frame="no"><root><root-step>C</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">L'ACCORD DE PETROUCHKA : deux fonctions intactes, superposées</words></direction-type><staff>2</staff></direction><note><pitch><step>C</step><octave>4</octave></pitch><duration>16</duration><voice>1</voice><type>whole</type><staff>1</staff></note><note><chord /><pitch><step>E</step><octave>4</octave></pitch><duration>16</duration><voice>1</voice><type>whole</type><staff>1</staff></note><note><chord /><pitch><step>G</step><octave>4</octave></pitch><duration>16</duration><voice>1</voice><type>whole</type><staff>1</staff></note><backup><duration>16</duration></backup><note><pitch><step>F</step><alter>1</alter><octave>3</octave></pitch><duration>16</duration><voice>5</voice><type>whole</type><staff>2</staff></note><note><chord /><pitch><step>A</step><alter>1</alter><octave>3</octave></pitch><duration>16</duration><voice>5</voice><type>whole</type><staff>2</staff></note><note><chord /><pitch><step>C</step><alter>1</alter><octave>4</octave></pitch><duration>16</duration><voice>5</voice><type>whole</type><staff>2</staff></note></measure><measure number="4"><direction placement="below"><direction-type><words font-style="italic" font-size="10">forme alternée (type clarinettes) : Fa# en 1er renversement (La# au grave)</words></direction-type><staff>2</staff></direction><note><pitch><step>C</step><octave>5</octave></pitch><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note><note><pitch><step>E</step><octave>5</octave></pitch><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note><note><pitch><step>G</step><octave>5</octave></pitch><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note><note><pitch><step>C</step><octave>6</octave></pitch><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note><note><pitch><step>G</step><octave>5</octave></pitch><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note><note><pitch><step>E</step><octave>5</octave></pitch><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note><note><pitch><step>C</step><octave>5</octave></pitch><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note><note><pitch><step>E</step><octave>5</octave></pitch><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note><backup><duration>16</duration></backup><note><pitch><step>A</step><alter>1</alter><octave>2</octave></pitch><duration>2</duration><voice>5</voice><type>eighth</type><staff>2</staff></note><note><pitch><step>C</step><alter>1</alter><octave>3</octave></pitch><duration>2</duration><voice>5</voice><type>eighth</type><staff>2</staff></note><note><pitch><step>F</step><alter>1</alter><octave>3</octave></pitch><duration>2</duration><voice>5</voice><type>eighth</type><staff>2</staff></note><note><pitch><step>A</step><alter>1</alter><octave>3</octave></pitch><duration>2</duration><voice>5</voice><type>eighth</type><staff>2</staff></note><note><pitch><step>F</step><alter>1</alter><octave>3</octave></pitch><duration>2</duration><voice>5</voice><type>eighth</type><staff>2</staff></note><note><pitch><step>C</step><alter>1</alter><octave>3</octave></pitch><duration>2</duration><voice>5</voice><type>eighth</type><staff>2</staff></note><note><pitch><step>A</step><alter>1</alter><octave>2</octave></pitch><duration>2</duration><voice>5</voice><type>eighth</type><staff>2</staff></note><note><pitch><step>C</step><alter>1</alter><octave>3</octave></pitch><duration>2</duration><voice>5</voice><type>eighth</type><staff>2</staff></note></measure><measure number="5"><direction placement="below"><direction-type><words font-style="italic" font-size="10">les 6 sons en gamme synthétique hexatonique : Do–Ré♭–Mi–Sol♭–Sol–Si♭ (« gamme triton »)</words></direction-type><staff>2</staff></direction><note><pitch><step>C</step><octave>4</octave></pitch><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note><note><pitch><step>D</step><alter>-1</alter><octave>4</octave></pitch><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note><note><pitch><step>E</step><octave>4</octave></pitch><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note><note><pitch><step>G</step><alter>-1</alter><octave>4</octave></pitch><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note><note><pitch><step>G</step><octave>4</octave></pitch><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note><note><pitch><step>B</step><alter>-1</alter><octave>4</octave></pitch><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note><note><pitch><step>C</step><octave>5</octave></pitch><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note><note><rest /><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note><backup><duration>16</duration></backup><note><rest /><duration>16</duration><voice>5</voice><type>whole</type><staff>2</staff></note></measure><measure number="6"><direction placement="below"><direction-type><words font-style="italic" font-size="10">collection octatonique englobante : les deux triades y coexistent nativement</words></direction-type><staff>2</staff></direction><note><pitch><step>C</step><octave>4</octave></pitch><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note><note><pitch><step>C</step><alter>1</alter><octave>4</octave></pitch><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note><note><pitch><step>D</step><alter>1</alter><octave>4</octave></pitch><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note><note><pitch><step>E</step><octave>4</octave></pitch><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note><note><pitch><step>F</step><alter>1</alter><octave>4</octave></pitch><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note><note><pitch><step>G</step><octave>4</octave></pitch><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note><note><pitch><step>A</step><octave>4</octave></pitch><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note><note><pitch><step>A</step><alter>1</alter><octave>4</octave></pitch><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note><backup><duration>16</duration></backup><note><rest /><duration>16</duration><voice>5</voice><type>whole</type><staff>2</staff></note></measure><measure number="7"><harmony placement="above" print-frame="no"><root><root-step>F</root-step><root-alter>1</root-alter></root><kind text="">major</kind><bass><bass-step>A</bass-step><bass-alter>1</bass-alter></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">polarité active (Taruskin) : le conflit remplace la résolution</words></direction-type><staff>2</staff></direction><note><pitch><step>C</step><octave>5</octave></pitch><duration>16</duration><voice>1</voice><type>whole</type><staff>1</staff><notations><fermata /></notations></note><note><chord /><pitch><step>E</step><octave>5</octave></pitch><duration>16</duration><voice>1</voice><type>whole</type><staff>1</staff></note><note><chord /><pitch><step>G</step><octave>5</octave></pitch><duration>16</duration><voice>1</voice><type>whole</type><staff>1</staff></note><backup><duration>16</duration></backup><note><pitch><step>F</step><alter>1</alter><octave>3</octave></pitch><duration>16</duration><voice>5</voice><type>whole</type><staff>2</staff><notations><fermata /></notations></note><note><chord /><pitch><step>A</step><alter>1</alter><octave>3</octave></pitch><duration>16</duration><voice>5</voice><type>whole</type><staff>2</staff></note><note><chord /><pitch><step>C</step><alter>1</alter><octave>4</octave></pitch><duration>16</duration><voice>5</voice><type>whole</type><staff>2</staff></note><barline location="right"><bar-style>light-heavy</bar-style></barline></measure></part></score-partwise>`;

/**
 * Analyse mesure par mesure — fonction "?" sans exception : la pièce montre
 * deux tonalités simultanées, chacune aussi "tonique" que l'autre pour sa
 * propre triade — aucune hiérarchie T/SD/D n'a de sens ici, le conflit
 * ÉTANT le matériau (cf. commentaire d'en-tête).
 */
export const PETROUCHKA_FICHE_ANALYSE: MesureAnalyse[] = [
  { numero: 1, nom: "Do majeur",                  degre: "triade seule",                          fonction: "?" },
  { numero: 2, nom: "Fa# majeur",                 degre: "triade seule, antipode au triton",       fonction: "?" },
  { numero: 3, nom: "Do + Fa# superposés",        degre: "l'accord de Petrouchka",                 fonction: "?" },
  { numero: 4, nom: "Do + Fa#/La# (alterné)",     degre: "Fa# en 1er renversement",                fonction: "?" },
  { numero: 5, nom: "Gamme triton (hexatonique)", degre: "Do-Réb-Mi-Solb-Sol-Sib",                  fonction: "?" },
  { numero: 6, nom: "Collection octatonique",     degre: "les deux triades y coexistent",          fonction: "?" },
  { numero: 7, nom: "Do + Fa#/La# (tenu)",        degre: "polarité active, point d'orgue",         fonction: "?" },
];

export const PETROUCHKA_FICHE_ANALYSE_NARRATIVE: AnalyseNarrative = {
  tonalite: "Aucune tonalité unique — polarité active entre Do majeur et Fa# majeur, deux triades à distance de triton.",
  metrique: "4/4. Sans tempo indiqué (fiche démonstrative).",
  forme: "Démonstration en sept temps : les deux protagonistes séparés, leur collision, leur forme mélodisée, puis deux lectures savantes (gamme synthétique, collection octatonique), et la formule de clôture.",
  sections: [
    {
      label: "Mesures 1-2",
      titre: "Les deux protagonistes",
      chiffrage: "Do majeur | Fa# majeur",
      fonctions: "? | ?",
      texte:
        "Do majeur d'abord, la triade la plus consonante du système tonal. Puis Fa# majeur, son antipode exact au triton — aucune note commune entre les deux, les touches blanches contre les touches noires.",
    },
    {
      label: "Mesure 3",
      titre: "La collision : l'accord de Petrouchka",
      chiffrage: "Do majeur + Fa# majeur, superposés",
      fonctions: "?",
      texte:
        "Les deux triades sonnent simultanément, chacune parfaitement intacte, une par main. La dissonance n'est plus dans l'accord — chaque moitié reste un accord parfait majeur — mais entre les systèmes : le conflit est passé du niveau de l'intervalle au niveau de la tonalité elle-même.",
    },
    {
      label: "Mesure 4",
      titre: "La forme mélodisée",
      chiffrage: "Do majeur + Fa#/La# (1er renversement)",
      fonctions: "?",
      texte:
        "La forme alternée, celle des deux clarinettes du deuxième tableau : le Fa# apparaît en premier renversement (La# à la basse). Les deux mondes se répondent au lieu de se frapper.",
    },
    {
      label: "Mesure 5",
      titre: "Première lecture savante : la gamme triton",
      chiffrage: "Do-Réb-Mi-Solb-Sol-Sib (hexatonique)",
      fonctions: "?",
      texte:
        "Réunis, les six sons des deux triades forment une gamme synthétique hexatonique alternant tierce majeure et demi-ton — la « gamme triton ». Un objet d'échelle à part entière, pas seulement la somme de deux accords.",
    },
    {
      label: "Mesure 6",
      titre: "Seconde lecture savante : la collection octatonique",
      chiffrage: "Collection octatonique (8 sons, alternance ton/demi-ton)",
      fonctions: "?",
      texte:
        "Les deux triades s'inscrivent nativement dans la collection octatonique complète — la lecture de Taruskin, pour qui l'accord de Petrouchka n'est pas une collision de deux systèmes étrangers mais deux cristallisations diatoniques d'une seule et même collection symétrique.",
    },
    {
      label: "Mesure 7",
      titre: "Polarité active",
      chiffrage: "Do majeur + Fa#/La#, tenu sous point d'orgue",
      fonctions: "?",
      texte:
        "L'accord se referme sous point d'orgue, étiqueté de la formule qui résume le débat : polarité active. Non un mélange passif de douze sons, mais deux forces tonales qui restent en tension sans qu'aucune ne cède.",
    },
  ],
  synthese: [
    {
      titre: "La troisième voie de 1911",
      texte:
        "Après Wagner, qui suspendait indéfiniment la résolution, et Debussy, qui la rendait tour à tour évitée puis inconstructible, Stravinsky invente une troisième issue : la fonction n'est ni suspendue ni dissoute, elle est conservée mais dédoublée. Le conflit lui-même devient le matériau.",
    },
    {
      titre: "Deux lectures, un seul objet",
      texte:
        "L'accord de Petrouchka se laisse entendre comme une collision de deux tonalités étrangères, ou comme deux cristallisations d'une seule collection octatonique — les deux lectures sont vraies à la fois, et c'est précisément ce double statut qui fait tout l'intérêt théorique de l'objet.",
    },
    {
      titre: "Stravinsky lexicalisé",
      texte:
        "La gamme triton et les paires de triades à distance de triton sont devenues un outil standard de l'improvisation moderne — les « triad pairs » et les substitutions sub-V du vocabulaire jazz. Stravinsky y est repris soixante ans plus tard exactement comme Debussy l'a été par Evans : un objet théorique devenu lexique.",
    },
  ],
};
