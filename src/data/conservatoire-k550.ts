import type { MesureAnalyse } from "./conservatoire-bwv846";

/**
 * data/conservatoire-k550.ts
 * Harmonia — Extrait (mesures 1 à 4) du 1er mouvement (Molto allegro, sol mineur)
 * de la Symphonie n°40 K.550 de Mozart, pour la section « conservatoire » du cours 3.
 *
 * ATTENTION — sourçage MOINS complet que BWV846/Pathétique (voir mémoire du projet) :
 * cette œuvre est orchestrale (pas de partition soliste), et aucune des sources qui
 * ont servi pour Bach/Beethoven (Mutopia, corpus DCML/When-in-Rome, dépôts Humdrum)
 * ne la couvre. La MÉLODIE (violons I/II à l'octave) est vérifiée contre l'extrait
 * LilyPond intégré à l'article Wikipédia (EN) « Symphony No. 40 (Mozart) » — une
 * source stable, longuement relue par de nombreux contributeurs — et recoupée avec
 * la description musicologique détaillée de l'article Wikipédia (DE) « 40. Sinfonie
 * (Mozart) » (rythme « deux croches – une noire », levée de sixte, entrée du thème
 * au 4e temps de la mesure 1). Ces deux sources confirment indépendamment la même
 * mélodie. En revanche, aucune des deux ne donne les hauteurs exactes de
 * l'accompagnement (altos divisés) — seule sa TEXTURE est décrite : « teppichartige
 * Achtelbegleitung » (accompagnement en croches, façon tapis) aux altos, « Bass-
 * Vierteln » (noires) à la basse. L'accompagnement ici est donc volontairement
 * simplifié en pédale de tonique (sol) tenue sous les 4 mesures, plutôt qu'une
 * reconstitution note à note non vérifiable. Extrait plus court (4 mesures, pas 8)
 * pour la même raison : au-delà, plus aucune source ne confirme la suite.
 */
export const K550_MESURES_1_4 = `<?xml version="1.0" encoding="UTF-8"?>
<score-partwise version="3.1">
  <work>
    <work-title>Symphonie n°40 K.550, 1er mouvement (extrait, mesures 1-4)</work-title>
  </work>
  <identification>
    <creator type="composer">W.A. Mozart</creator>
  </identification>
  <part-list>
    <score-part id="P1">
      <part-name>Piano</part-name>
    </score-part>
  </part-list>
  <part id="P1">
    <measure number="1">
      <attributes>
        <divisions>4</divisions>
        <key><fifths>-2</fifths><mode>minor</mode></key>
        <time symbol="cut"><beats>2</beats><beat-type>2</beat-type></time>
        <staves>2</staves>
        <clef number="1"><sign>G</sign><line>2</line></clef>
        <clef number="2"><sign>F</sign><line>4</line></clef>
      </attributes>
      <direction placement="above">
        <direction-type><words>Molto allegro</words></direction-type>
        <sound tempo="105"/>
      </direction>
      <note><rest/><duration>4</duration><voice>1</voice><type>quarter</type><staff>1</staff></note>
      <note><rest/><duration>4</duration><voice>1</voice><type>quarter</type><staff>1</staff></note>
      <note><rest/><duration>4</duration><voice>1</voice><type>quarter</type><staff>1</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>5</octave></pitch><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>D</step><octave>5</octave></pitch><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <backup><duration>16</duration></backup>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><chord/><staff>1</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><chord/><staff>1</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><chord/><staff>1</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><chord/><staff>1</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><chord/><staff>1</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><chord/><staff>1</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><chord/><staff>1</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><chord/><staff>1</staff></note>
      <backup><duration>16</duration></backup>
      <note><pitch><step>G</step><octave>2</octave></pitch><duration>4</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
      <note><pitch><step>G</step><octave>2</octave></pitch><duration>4</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
      <note><pitch><step>G</step><octave>2</octave></pitch><duration>4</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
      <note><pitch><step>G</step><octave>2</octave></pitch><duration>4</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
    </measure>
    <measure number="2">
      <note><pitch><step>D</step><octave>5</octave></pitch><duration>4</duration><voice>1</voice><type>quarter</type><staff>1</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>5</octave></pitch><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>D</step><octave>5</octave></pitch><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>D</step><octave>5</octave></pitch><duration>4</duration><voice>1</voice><type>quarter</type><staff>1</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>5</octave></pitch><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>D</step><octave>5</octave></pitch><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <backup><duration>16</duration></backup>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><chord/><staff>1</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><chord/><staff>1</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><chord/><staff>1</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><chord/><staff>1</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><chord/><staff>1</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><chord/><staff>1</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><chord/><staff>1</staff></note>
      <backup><duration>16</duration></backup>
      <note><pitch><step>G</step><octave>2</octave></pitch><duration>4</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
      <note><pitch><step>G</step><octave>2</octave></pitch><duration>4</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
      <note><pitch><step>G</step><octave>2</octave></pitch><duration>4</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
      <note><pitch><step>G</step><octave>2</octave></pitch><duration>4</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
    </measure>
    <measure number="3">
      <note><pitch><step>D</step><octave>5</octave></pitch><duration>4</duration><voice>1</voice><type>quarter</type><staff>1</staff></note>
      <note><pitch><step>B</step><alter>-1</alter><octave>5</octave></pitch><duration>4</duration><voice>1</voice><type>quarter</type><staff>1</staff></note>
      <note><rest/><duration>4</duration><voice>1</voice><type>quarter</type><staff>1</staff></note>
      <note><pitch><step>B</step><alter>-1</alter><octave>5</octave></pitch><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>A</step><octave>5</octave></pitch><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <backup><duration>16</duration></backup>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><chord/><staff>1</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><chord/><staff>1</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><chord/><staff>1</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><chord/><staff>1</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><chord/><staff>1</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><chord/><staff>1</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><chord/><staff>1</staff></note>
      <backup><duration>16</duration></backup>
      <note><pitch><step>G</step><octave>2</octave></pitch><duration>4</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
      <note><pitch><step>G</step><octave>2</octave></pitch><duration>4</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
      <note><pitch><step>G</step><octave>2</octave></pitch><duration>4</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
      <note><pitch><step>G</step><octave>2</octave></pitch><duration>4</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
    </measure>
    <measure number="4">
      <note><pitch><step>G</step><octave>5</octave></pitch><duration>4</duration><voice>1</voice><type>quarter</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>5</octave></pitch><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>F</step><octave>5</octave></pitch><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>5</octave></pitch><duration>4</duration><voice>1</voice><type>quarter</type><staff>1</staff></note>
      <note><pitch><step>E</step><alter>-1</alter><octave>5</octave></pitch><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>D</step><octave>5</octave></pitch><duration>2</duration><voice>1</voice><type>eighth</type><staff>1</staff></note>
      <backup><duration>16</duration></backup>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><chord/><staff>1</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><chord/><staff>1</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><chord/><staff>1</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><chord/><staff>1</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><chord/><staff>1</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><chord/><staff>1</staff></note>
      <note><pitch><step>G</step><octave>3</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><staff>1</staff></note>
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>2</duration><voice>2</voice><type>eighth</type><chord/><staff>1</staff></note>
      <backup><duration>16</duration></backup>
      <note><pitch><step>G</step><octave>2</octave></pitch><duration>4</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
      <note><pitch><step>G</step><octave>2</octave></pitch><duration>4</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
      <note><pitch><step>G</step><octave>2</octave></pitch><duration>4</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
      <note><pitch><step>G</step><octave>2</octave></pitch><duration>4</duration><voice>3</voice><type>quarter</type><staff>2</staff></note>
    </measure>
  </part>
</score-partwise>
`;

/**
 * Harmonie : pédale de tonique (sol mineur, i) tenue sur les 4 mesures — cohérent
 * avec la lecture musicologique de ce passage (le premier thème ne module qu'à la
 * mesure 27, bien après cet extrait). Aucun changement d'accord à annoncer ici :
 * c'est la mélodie et son motif de « soupir » (2nde mineure descendante répétée)
 * qui portent le discours, pas une progression harmonique.
 */
export const K550_ANALYSE: MesureAnalyse[] = [
  { numero: 1, nom: "Solm", degre: "i", fonction: "T" },
  { numero: 2, nom: "Solm", degre: "i", fonction: "T" },
  { numero: 3, nom: "Solm", degre: "i", fonction: "T" },
  { numero: 4, nom: "Solm", degre: "i", fonction: "T" },
];
