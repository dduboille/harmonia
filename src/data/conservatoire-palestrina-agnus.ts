import type { MesureAnalyse, AnalyseNarrative } from "./conservatoire-bwv846";

/**
 * data/conservatoire-palestrina-agnus.ts
 * Harmonia — Giovanni Pierluigi da Palestrina, Missa Brevis (1570), Agnus Dei
 * II, pour la section "conservatoire" du cours 43 (niveau licence —
 * contrepoint modal de la Renaissance, style Palestrina).
 *
 * MusicXML VERBATIM fourni par Dany (fichier "palestrina-agnus-annote
 * .musicxml") — jamais reconstruit à la main, cf. feedback-partitions-
 * verbatim. 56 mesures (barrées en 4/4 moderne), 4 parties SATB séparées,
 * édition transposée à 3 bémols (finale sur Mi♭). Domaine public absolu
 * (Palestrina mort en 1594) — publiable. LA PIÈCE LA PLUS ANCIENNE DE TOUT
 * LE CORPUS (1570, 120 ans avant Dido's Lament/cours38, la précédente plus
 * ancienne).
 *
 * Lacune éditoriale du fichier source (signalée par Dany, non corrigée ici) :
 * le texte liturgique « Agnus Dei » a été retiré — pour une œuvre vocale,
 * cela retire la moitié du sens ; à réinjecter en cas d'usage choral.
 *
 * Le fichier porte 5 balises <harmony> aux clausules structurelles (m.16 Mi♭,
 * m.35 sol m, m.46 Si♭, m.55 La♭/IV, m.56 Mi♭ final), cohérentes avec de
 * nombreux repères <direction><words> embarqués dans le XML (non affichés à
 * la gravure) — tous retrouvés par mapping position→mesure, concordance
 * totale avec le brouillon de Dany. Le chiffrage fonctionnel (T/SD/D) est
 * ANACHRONIQUE pour cette musique modale antérieure à la tonalité codifiée
 * — les repères de Dany parlent en CLAUSULES (points de repos cadentiels),
 * pas en degrés fonctionnels ; conservé tel quel dans `PALESTRINA_ANALYSE`
 * ci-dessous plutôt que forcé dans une grille T/SD/D qui n'aurait pas de
 * sens historique.
 *
 * Vérifié note à note (script d'extraction dédié, tsx standalone) :
 *  - m.1 : le sujet commence bien par Si♭4 au soprano (P1) ;
 *  - m.2 : la réponse de l'alto (P2) entre sur Mi♭4 — exactement une quinte
 *    en dessous du Si♭4 du soprano, confirmé note pour note ;
 *  - m.7 : le ténor (P3) entre sur Si♭3 — exactement une octave sous
 *    l'entrée du soprano, confirmé ;
 *  - m.8 : la basse (P4) entre, l'exposition à quatre voix est complète ;
 *  - LE RÉGIME ZÉRO DE LA DISSONANCE CONFIRMÉ EXHAUSTIVEMENT : sur
 *    l'intégralité des 503 évènements sonores retenus (4 voix, 56 mesures),
 *    UNE SEULE note tombe hors de la gamme diatonique de l'armure à 3
 *    bémols (Do-Ré-Mib-Fa-Sol-Lab-Sib) — le La naturel du soprano à la
 *    mesure 45, confirmé exactement, la musica ficta qui fait la sensible
 *    de la clausule sur Si♭ (m.46) ;
 *  - m.56 (accord final) : confirmé Mi♭-Sol-Si♭, la triade complète (avec
 *    tierce, contrairement à d'autres finales dépouillées du corpus).
 *
 * Note de comptage : 598 <note> bruts — correspond EXACTEMENT au compte
 * annoncé par Dany ("598 notes vérifiées"), 6e fois d'affilée (Boléro,
 * Marche au supplice, Grieg, BWV775, Folia, Palestrina) que le compte tombe
 * pile. Sur ces 598 : 73 silences, 0 note d'ornement, 22 liaisons fusionnées
 * → 503 évènements sonores retenus par le parseur (lib/musicxml-parse).
 *
 * `score.mode` infère "major" — attendu, cette musique modale (mode de Mi♭,
 * proche d'un mixolydien/ionien transposé) ne correspond de toute façon à
 * aucune des deux catégories majeur/mineur du profil de Krumhansl-Kessler
 * (conçu pour la tonalité classique, pas pour les modes ecclésiastiques) ;
 * l'inférence n'a pas de portée analytique ici, seul le repérage en
 * clausules (ci-dessus) fait sens pour cette pièce.
 */
export const PALESTRINA_AGNUS_MESURES_1_56 =
`<?xml version='1.0' encoding='UTF-8'?>
<score-partwise version="4.0">
  <work>
    <work-title>Agnus Dei 2</work-title>
    </work>
  <identification>
    <creator type="composer">Palestrina</creator>
    <encoding>
      <software>MuseScore Studio 4.7.4</software>
      <encoding-date>2026-07-31</encoding-date>
      <supports element="accidental" type="yes" />
      <supports element="beam" type="yes" />
      <supports element="print" attribute="new-page" type="yes" value="yes" />
      <supports element="print" attribute="new-system" type="yes" value="yes" />
      <supports element="stem" type="yes" />
      </encoding>
    <miscellaneous>
      <miscellaneous-field name="creationDate">2017-03-09</miscellaneous-field>
      <miscellaneous-field name="mscVersion">4.70</miscellaneous-field>
      <miscellaneous-field name="platform">Microsoft Windows</miscellaneous-field>
      </miscellaneous>
    </identification>
  <defaults>
    <scaling>
      <millimeters>7.05556</millimeters>
      <tenths>40</tenths>
      </scaling>
    <page-layout>
      <page-height>1683.36</page-height>
      <page-width>1190.88</page-width>
      <page-margins type="even">
        <left-margin>56.6929</left-margin>
        <right-margin>56.6929</right-margin>
        <top-margin>56.6929</top-margin>
        <bottom-margin>113.386</bottom-margin>
        </page-margins>
      <page-margins type="odd">
        <left-margin>56.6929</left-margin>
        <right-margin>56.6929</right-margin>
        <top-margin>56.6929</top-margin>
        <bottom-margin>113.386</bottom-margin>
        </page-margins>
      </page-layout>
    <appearance>
      <line-width type="light barline">1.8</line-width>
      <line-width type="heavy barline">5.5</line-width>
      <line-width type="beam">5</line-width>
      <line-width type="bracket">4.4</line-width>
      <line-width type="dashes">1.5</line-width>
      <line-width type="enclosure">2</line-width>
      <line-width type="ending">1.1</line-width>
      <line-width type="extend">1</line-width>
      <line-width type="leger">1.6</line-width>
      <line-width type="pedal">1.1</line-width>
      <line-width type="octave shift">1.1</line-width>
      <line-width type="slur middle">2.1</line-width>
      <line-width type="slur tip">0.7</line-width>
      <line-width type="staff">1.1</line-width>
      <line-width type="stem">1</line-width>
      <line-width type="tie middle">2.1</line-width>
      <line-width type="tie tip">0.7</line-width>
      <line-width type="tuplet bracket">1</line-width>
      <line-width type="wedge">1.2</line-width>
      <note-size type="cue">70</note-size>
      <note-size type="grace">70</note-size>
      <note-size type="grace-cue">49</note-size>
      </appearance>
    <music-font font-family="Leland" />
    <word-font font-family="FreeSerif" font-size="10" />
    <lyric-font font-family="FreeSerif" font-size="11" />
    </defaults>
  <credit page="1">
    <credit-type>title</credit-type>
    <credit-words default-x="595.44" default-y="1626.67" justify="center" valign="top" font-size="24">Agnus Dei 2</credit-words>
    </credit>
  <credit page="1">
    <credit-type>composer</credit-type>
    <credit-words default-x="1134.19" default-y="1526.67" justify="right" valign="bottom" font-size="12">Palestrina</credit-words>
    </credit>
  <part-list>
    <part-group type="start" number="1">
      <group-symbol>bracket</group-symbol>
      </part-group>
    <score-part id="P1">
      <part-name>Soprano</part-name>
      <part-abbreviation>S.</part-abbreviation>
      <score-instrument id="P1-I1">
        <instrument-name>Soprano</instrument-name>
        <instrument-sound>voice.soprano</instrument-sound>
        </score-instrument>
      <midi-device id="P1-I1" port="1" />
      <midi-instrument id="P1-I1">
        <midi-channel>1</midi-channel>
        <midi-program>53</midi-program>
        <volume>78.7402</volume>
        <pan>0</pan>
        </midi-instrument>
      </score-part>
    <score-part id="P2">
      <part-name>Alto</part-name>
      <part-abbreviation>A.</part-abbreviation>
      <score-instrument id="P2-I1">
        <instrument-name>Alto</instrument-name>
        <instrument-sound>voice.alto</instrument-sound>
        </score-instrument>
      <midi-device id="P2-I1" port="1" />
      <midi-instrument id="P2-I1">
        <midi-channel>2</midi-channel>
        <midi-program>53</midi-program>
        <volume>78.7402</volume>
        <pan>0</pan>
        </midi-instrument>
      </score-part>
    <score-part id="P3">
      <part-name>Tenor</part-name>
      <part-abbreviation>T.</part-abbreviation>
      <score-instrument id="P3-I1">
        <instrument-name>Tenor</instrument-name>
        <instrument-sound>voice.tenor</instrument-sound>
        </score-instrument>
      <midi-device id="P3-I1" port="1" />
      <midi-instrument id="P3-I1">
        <midi-channel>3</midi-channel>
        <midi-program>53</midi-program>
        <volume>78.7402</volume>
        <pan>0</pan>
        </midi-instrument>
      </score-part>
    <score-part id="P4">
      <part-name>Bass</part-name>
      <part-abbreviation>B.</part-abbreviation>
      <score-instrument id="P4-I1">
        <instrument-name>Bass</instrument-name>
        <instrument-sound>voice.bass</instrument-sound>
        </score-instrument>
      <midi-device id="P4-I1" port="1" />
      <midi-instrument id="P4-I1">
        <midi-channel>4</midi-channel>
        <midi-program>53</midi-program>
        <volume>78.7402</volume>
        <pan>0</pan>
        </midi-instrument>
      </score-part>
    <part-group type="stop" number="1" />
    </part-list>
  <part id="P1">
    <measure number="1" width="210.48">
      <print>
        <system-layout>
          <system-margins>
            <left-margin>98.54</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>170</top-system-distance>
          </system-layout>
        </print>
      <attributes>
        <divisions>2</divisions>
        <key>
          <fifths>-3</fifths>
          </key>
        <time symbol="common">
          <beats>4</beats>
          <beat-type>4</beat-type>
          </time>
        <clef>
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <direction placement="above" system="only-top">
        <direction-type>
          <metronome parentheses="no" default-x="-38.52" relative-y="20">
            <beat-unit>quarter</beat-unit>
            <per-minute>80</per-minute>
            </metronome>
          </direction-type>
        <sound tempo="80" />
        </direction>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">POINT D'IMITATION : sujet au soprano (Si♭, descente conjointe)</words></direction-type><staff>2</staff></direction><note default-x="122.69" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>whole</type>
        </note>
      </measure>
    <measure number="2" width="127.17">
      <note default-x="12" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">réponse à l'alto (sur Mi♭, à la quinte inférieure)</words></direction-type><staff>2</staff></direction><note default-x="68.69" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="3" width="158.66">
      <note default-x="12" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="49.79" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="74.98" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="100.18" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="4" width="158.66">
      <note default-x="12" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="49.79" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="106.48" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="131.67" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="5" width="147.03">
      <note default-x="12.96" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="50.75" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="107.44" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="6" width="176.95">
      <note default-x="12" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="86.97" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="7" width="274.02">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>42.5</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>104.14</system-distance>
          </system-layout>
        </print>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">entrée du ténor (à l'octave)</words></direction-type><staff>2</staff></direction><note default-x="99.17" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>whole</type>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="8" width="185.9">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">entrée de la basse : l'exposition à quatre est complète</words></direction-type><staff>2</staff></direction><note default-x="85.55" default-y="-10">
        <rest measure="yes" />
        <duration>8</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="9" width="203.88">
      <note default-x="94.54" default-y="-10">
        <rest measure="yes" />
        <duration>8</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="10" width="194.06">
      <note default-x="12" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>whole</type>
        </note>
      </measure>
    <measure number="11" width="177.14">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">chaînes de retards : préparés, frappés sur temps fort, résolus par degré descendant</words></direction-type><staff>2</staff></direction><note default-x="12" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="91.43" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="12" width="263.46">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>42.5</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>104.14</system-distance>
          </system-layout>
        </print>
      <note default-x="100.13" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="142.27" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="170.36" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="198.45" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="13" width="184.61">
      <note default-x="12" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="98.04" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="14" width="210.45">
      <note default-x="12" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-25" />
        <stem>up</stem>
        </note>
      <note default-x="152.47" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="180.56" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="15" width="182.36">
      <note default-x="12" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="54.14" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="138.42" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="16" width="194.1">
      <harmony placement="above" print-frame="no"><root><root-step>E</root-step><root-alter>-1</root-alter></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">clausule sur Mi♭ (finale du mode)</words></direction-type><staff>2</staff></direction><note default-x="12" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>whole</type>
        </note>
      </measure>
    <measure number="17" width="248.05">
      <print new-page="yes" page-number="2">
        <system-layout>
          <system-margins>
            <left-margin>42.5</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>70</top-system-distance>
          </system-layout>
        </print>
      <note default-x="154.19" default-y="-10">
        <rest measure="yes" />
        <duration>8</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="18" width="128.16">
      <note default-x="12" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="69.18" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="19" width="166.28">
      <note default-x="12" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="50.12" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="88.24" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="20" width="156.75">
      <note default-x="12" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="50.12" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="116.83" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="21" width="169.46">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">module cadentiel à double retard (reviendra m.26, 30, 38-39, 49-51 : l'économie de Palestrina)</words></direction-type><staff>2</staff></direction><note default-x="12" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="37.41" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="62.83" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="129.54" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="22" width="166.28">
      <note default-x="12" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="88.24" default-y="-20">
        <rest />
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="23" width="274.55">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>42.5</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        </print>
      <note default-x="100.13" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="189.89" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="24" width="179.51">
      <note default-x="12" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="53.43" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="94.86" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="25" width="208.09">
      <note default-x="12.96" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="40.58" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="68.2" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="95.82" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="123.44" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="164.87" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="26" width="193.32">
      <note default-x="12" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="39.62" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="67.24" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="150.1" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="27" width="179.51">
      <note default-x="12" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="53.43" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="94.86" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="28" width="271.84">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>42.5</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        </print>
      <note default-x="100.13" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="142.6" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="185.08" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="29" width="212.03">
      <note default-x="12" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="40.32" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="68.64" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="96.95" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="125.27" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="167.75" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="30" width="201.41">
      <note default-x="12" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="40.32" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="68.64" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="157.13" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="31" width="162.47">
      <note default-x="12" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="96.95" default-y="-20">
        <rest />
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="32" width="187.25">
      <note default-x="86.22" default-y="-10">
        <rest measure="yes" />
        <duration>8</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="33" width="256.49">
      <print new-page="yes" page-number="3">
        <system-layout>
          <system-margins>
            <left-margin>42.5</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>70</top-system-distance>
          </system-layout>
        </print>
      <note default-x="100.13" default-y="-20">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <note default-x="135.45" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="207.58" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="34" width="146.28">
      <note default-x="12" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="47.33" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="82.66" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="35" width="155.11">
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">clausule sur sol (couleur médiane)</words></direction-type><staff>2</staff></direction><note default-x="12" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="82.66" default-y="-20">
        <rest />
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="36" width="146.28">
      <note default-x="12" default-y="-20">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <note default-x="47.33" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="109.15" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="37" width="158.06">
      <note default-x="12" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="59.1" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="94.43" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="38" width="172.78">
      <note default-x="12" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="47.33" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="70.88" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="94.43" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="135.65" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="39" width="265.02">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>42.5</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        </print>
      <note default-x="100.13" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="124.74" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="149.36" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="213.98" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="40" width="143.04">
      <note default-x="12" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="76.62" default-y="-20">
        <rest />
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="41" width="143.04">
      <note default-x="64.12" default-y="-10">
        <rest measure="yes" />
        <duration>8</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="42" width="143.04">
      <note default-x="12" default-y="-20">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <note default-x="48.93" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="104.32" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="43" width="152.28">
      <note default-x="12" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="48.93" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="85.85" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="44" width="188.57">
      <note default-x="12" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="48.93" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="73.54" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="100.61" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="149.84" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="45" width="250.32">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>42.5</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        </print>
      <note default-x="100.13" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="124.35" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="148.58" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">LE SEUL ACCIDENT DE LA PIÈCE : La♮ (musica ficta), sensible de la clausule sur Si♭</words></direction-type><staff>2</staff></direction><note default-x="212.18" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="46" width="150.08">
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step><root-alter>-1</root-alter></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">clausule sur Si♭</words></direction-type><staff>2</staff></direction><note default-x="12" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="75.6" default-y="-20">
        <rest />
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="47" width="160.13">
      <note default-x="72.66" default-y="-10">
        <rest measure="yes" />
        <duration>8</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="48" width="140.99">
      <note default-x="12" default-y="-20">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <note default-x="48.34" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="102.85" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="49" width="162.19">
      <note default-x="12" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="48.34" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="84.68" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="50" width="171.28">
      <note default-x="12" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="48.34" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="72.57" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="96.8" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="133.14" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="51" width="254.21">
      <print new-page="yes" page-number="4">
        <system-layout>
          <system-margins>
            <left-margin>42.5</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>70</top-system-distance>
          </system-layout>
        </print>
      <note default-x="100.13" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="124.99" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="149.85" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="215.12" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="52" width="163.42">
      <note default-x="12" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="80.81" default-y="-20">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <note default-x="124.32" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="53" width="162.98">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">dernière période : les modules cadentiels superposés</words></direction-type><staff>2</staff></direction><note default-x="12" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="49.29" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="123.88" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="54" width="176.37">
      <note default-x="12.96" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="37.82" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="62.69" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="137.27" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="55" width="170.15">
      <harmony placement="above" print-frame="no"><root><root-step>A</root-step><root-alter>-1</root-alter></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">IV — cadence PLAGALE finale, ornement de broderie à l'alto</words></direction-type><staff>2</staff></direction><note default-x="12" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>whole</type>
        </note>
      </measure>
    <measure number="56" width="107.87">
      <harmony placement="above" print-frame="no"><root><root-step>E</root-step><root-alter>-1</root-alter></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">Mi♭ final : la finale établie par le poids, non par une dominante</words></direction-type><staff>2</staff></direction><note default-x="12" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>whole</type>
        </note>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        </barline>
      </measure>
    </part>
  <part id="P2">
    <measure number="1" width="210.48">
      <print>
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <divisions>2</divisions>
        <key>
          <fifths>-3</fifths>
          </key>
        <time symbol="common">
          <beats>4</beats>
          <beat-type>4</beat-type>
          </time>
        <clef>
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="149.66" default-y="-115">
        <rest measure="yes" />
        <duration>8</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="2" width="127.17">
      <note default-x="12" default-y="-125">
        <rest />
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      <note default-x="68.69" default-y="-145">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="3" width="158.66">
      <note default-x="12" default-y="-145">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="100.18" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="4" width="158.66">
      <note default-x="12" default-y="-155">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-150" />
        <stem>up</stem>
        </note>
      <note default-x="106.48" default-y="-160">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="131.67" default-y="-165">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="5" width="147.03">
      <note default-x="12" default-y="-160">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>whole</type>
        </note>
      </measure>
    <measure number="6" width="176.95">
      <note default-x="12" default-y="-155">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-150" />
        <stem>up</stem>
        </note>
      <note default-x="59.91" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        </note>
      <note default-x="86.97" default-y="-145">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="112.16" default-y="-140">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="137.36" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="7" width="274.02">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="100.13" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="139.84" default-y="-140">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="166.32" default-y="-145">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="192.79" default-y="-140">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="232.51" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="8" width="185.9">
      <note default-x="12" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="51.71" default-y="-140">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="91.43" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="131.14" default-y="-170">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="157.62" default-y="-165">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="9" width="203.88">
      <note default-x="12" default-y="-160">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="38.48" default-y="-155">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="64.95" default-y="-160">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="81.45" default-y="-160" />
        <stem>up</stem>
        </note>
      <note default-x="132.8" default-y="-165">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        </note>
      <note default-x="162.36" default-y="-175">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="10" width="194.06">
      <note default-x="12.96" default-y="-170">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="52.68" default-y="-165">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="99.59" default-y="-170">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="139.31" default-y="-155">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="11" width="177.14">
      <note default-x="12" default-y="-160">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="91.43" default-y="-155">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="107.93" default-y="-150" />
        <stem>up</stem>
        </note>
      <note default-x="141.77" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="12" width="263.46">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="99.17" default-y="-145">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>whole</type>
        </note>
      </measure>
    <measure number="13" width="184.61">
      <note default-x="12" default-y="-125">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <note default-x="54.14" default-y="-140">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="133.65" default-y="-155">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="14" width="210.45">
      <note default-x="12" default-y="-145">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="110.33" default-y="-160">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="15" width="182.36">
      <note default-x="12" default-y="-125">
        <rest />
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      <note default-x="96.28" default-y="-140">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="16" width="194.1">
      <note default-x="12.96" default-y="-160">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="55.1" default-y="-145">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="71.6" default-y="-140" />
        <stem>up</stem>
        </note>
      <note default-x="122.07" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        </note>
      <note default-x="150.16" default-y="-155">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="17" width="248.05">
      <print new-page="yes" page-number="2">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="100.13" default-y="-155">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="150.95" default-y="-165">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="189.07" default-y="-160">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="18" width="128.16">
      <note default-x="12" default-y="-160">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="69.18" default-y="-125">
        <rest />
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="19" width="166.28">
      <note default-x="12" default-y="-145">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="88.24" default-y="-140">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="20" width="156.75">
      <note default-x="12" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="50.12" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="116.83" default-y="-140">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="21" width="169.46">
      <note default-x="12" default-y="-140">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="37.41" default-y="-145">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="62.83" default-y="-145">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="129.54" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="22" width="166.28">
      <note default-x="12" default-y="-145">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="88.24" default-y="-125">
        <rest />
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="23" width="274.55">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="100.13" default-y="-125">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <note default-x="141.55" default-y="-145">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="231.32" default-y="-155">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="24" width="179.51">
      <note default-x="12" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="53.43" default-y="-145">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="94.86" default-y="-140">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="136.29" default-y="-145">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="25" width="208.09">
      <note default-x="12.96" default-y="-145">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="40.58" default-y="-140">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="68.2" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="123.44" default-y="-145">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="164.87" default-y="-155">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="26" width="193.32">
      <note default-x="12" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="67.24" default-y="-155">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="108.67" default-y="-125">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <note default-x="150.1" default-y="-140">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="27" width="179.51">
      <note default-x="12" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="94.86" default-y="-145">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="136.29" default-y="-155">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="28" width="271.84">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="100.13" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="142.6" default-y="-145">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="185.08" default-y="-155">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="227.56" default-y="-165">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="29" width="212.03">
      <note default-x="12" default-y="-160">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="125.27" default-y="-125">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <note default-x="167.75" default-y="-165">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="30" width="201.41">
      <note default-x="12" default-y="-160">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="68.64" default-y="-155">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="125.27" default-y="-165">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="31" width="162.47">
      <note default-x="12" default-y="-160">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="96.95" default-y="-125">
        <rest />
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="32" width="187.25">
      <note default-x="12" default-y="-145">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="96.95" default-y="-140">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="33" width="256.49">
      <print new-page="yes" page-number="3">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="100.13" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="172.25" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="207.58" default-y="-140">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="231.13" default-y="-145">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="34" width="146.28">
      <note default-x="12" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="47.33" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="109.15" default-y="-140">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="35" width="155.11">
      <note default-x="12" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="82.66" default-y="-125">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <note default-x="117.98" default-y="-145">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="36" width="146.28">
      <note default-x="12" default-y="-140">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="47.33" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="109.15" default-y="-140">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="37" width="158.06">
      <note default-x="12" default-y="-140">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="35.55" default-y="-145">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="59.1" default-y="-145">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="120.93" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="38" width="172.78">
      <note default-x="12" default-y="-145">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-140" />
        <stem>up</stem>
        </note>
      <note default-x="70.88" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        </note>
      <note default-x="94.43" default-y="-155">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="39" width="265.02">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="100.13" default-y="-160">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="149.36" default-y="-155">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="213.98" default-y="-160">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="238.6" default-y="-165">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="40" width="143.04">
      <note default-x="12" default-y="-160">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="76.62" default-y="-125">
        <rest />
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="41" width="143.04">
      <note default-x="12" default-y="-145">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="85.85" default-y="-140">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="42" width="143.04">
      <note default-x="12" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="76.62" default-y="-145">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="43" width="152.28">
      <note default-x="12" default-y="-125">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <note default-x="48.93" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="113.55" default-y="-130">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="44" width="188.57">
      <note default-x="12" default-y="-125">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-120" />
        <stem>down</stem>
        </note>
      <note default-x="73.54" default-y="-130">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        </note>
      <note default-x="100.61" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="125.22" default-y="-140">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="149.84" default-y="-145">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="45" width="250.32">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="100.13" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="148.58" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="212.18" default-y="-155">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="46" width="150.08">
      <note default-x="12" default-y="-125">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <note default-x="48.34" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="111.94" default-y="-145">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="47" width="160.13">
      <note default-x="12" default-y="-140">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>whole</type>
        </note>
      </measure>
    <measure number="48" width="140.99">
      <note default-x="12" default-y="-160">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="75.6" default-y="-155">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="49" width="162.19">
      <note default-x="12" default-y="-160">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="48.34" default-y="-145">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="111.94" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="50" width="171.28">
      <note default-x="12" default-y="-145">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="96.8" default-y="-125">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <note default-x="133.14" default-y="-160">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="51" width="254.21">
      <print new-page="yes" page-number="4">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="100.13" default-y="-160">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="149.85" default-y="-155">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="215.12" default-y="-165">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="52" width="163.42">
      <note default-x="12" default-y="-125">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <note default-x="49.29" default-y="-145">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="124.32" default-y="-140">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="53" width="162.98">
      <note default-x="12" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="49.29" default-y="-145">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="86.59" default-y="-125">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <note default-x="123.88" default-y="-160">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="54" width="176.37">
      <note default-x="12.96" default-y="-170">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="62.69" default-y="-155">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="99.98" default-y="-160">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="137.27" default-y="-145">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="55" width="170.15">
      <note default-x="12.96" default-y="-145">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="37.82" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="62.69" default-y="-155">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="87.55" default-y="-160">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="112.41" default-y="-155">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="56" width="107.87">
      <note default-x="12" default-y="-160">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>whole</type>
        </note>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        </barline>
      </measure>
    </part>
  <part id="P3">
    <measure number="1" width="210.48">
      <print>
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <divisions>2</divisions>
        <key>
          <fifths>-3</fifths>
          </key>
        <time symbol="common">
          <beats>4</beats>
          <beat-type>4</beat-type>
          </time>
        <clef>
          <sign>G</sign>
          <line>2</line>
          <clef-octave-change>-1</clef-octave-change>
          </clef>
        </attributes>
      <note default-x="149.66" default-y="-220">
        <rest measure="yes" />
        <duration>8</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="2" width="127.17">
      <note default-x="56.19" default-y="-220">
        <rest measure="yes" />
        <duration>8</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="3" width="158.66">
      <note default-x="71.93" default-y="-220">
        <rest measure="yes" />
        <duration>8</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="4" width="158.66">
      <note default-x="71.93" default-y="-220">
        <rest measure="yes" />
        <duration>8</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="5" width="147.03">
      <note default-x="66.11" default-y="-220">
        <rest measure="yes" />
        <duration>8</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="6" width="176.95">
      <note default-x="81.07" default-y="-220">
        <rest measure="yes" />
        <duration>8</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="7" width="274.02">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="99.17" default-y="-230">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>whole</type>
        </note>
      </measure>
    <measure number="8" width="185.9">
      <note default-x="12" default-y="-235">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="91.43" default-y="-240">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="9" width="203.88">
      <note default-x="12" default-y="-240">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="64.95" default-y="-245">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="91.43" default-y="-250">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="117.91" default-y="-245">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="10" width="194.06">
      <note default-x="12.96" default-y="-250">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="29.46" default-y="-245" />
        <stem>up</stem>
        </note>
      <note default-x="72.53" default-y="-245">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        </note>
      <note default-x="99.59" default-y="-240">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="139.31" default-y="-235">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="11" width="177.14">
      <note default-x="12" default-y="-235">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="51.71" default-y="-240">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="91.43" default-y="-235">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="12" width="263.46">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="100.13" default-y="-235">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="198.45" default-y="-240">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="13" width="184.61">
      <note default-x="12" default-y="-245">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-245" />
        <stem>up</stem>
        </note>
      <note default-x="69.94" default-y="-240">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        </note>
      <note default-x="98.04" default-y="-235">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="114.54" default-y="-235" />
        <stem>up</stem>
        </note>
      <note default-x="154.72" default-y="-230">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="14" width="210.45">
      <note default-x="12" default-y="-225">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="68.19" default-y="-240">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="110.33" default-y="-230">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <note default-x="152.47" default-y="-230">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="15" width="182.36">
      <note default-x="12" default-y="-230">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="54.14" default-y="-240">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="96.28" default-y="-235">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="138.42" default-y="-245">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="16" width="194.1">
      <note default-x="12.96" default-y="-240">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="29.46" default-y="-235" />
        <stem>up</stem>
        </note>
      <note default-x="72.91" default-y="-245">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        </note>
      <note default-x="101" default-y="-250">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="150.16" default-y="-235">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="17" width="248.05">
      <print new-page="yes" page-number="2">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="100.13" default-y="-235">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="125.54" default-y="-240">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="150.95" default-y="-250">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="189.07" default-y="-245">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="18" width="128.16">
      <note default-x="12" default-y="-240">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="69.18" default-y="-235">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="19" width="166.28">
      <note default-x="12" default-y="-240">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="88.24" default-y="-230">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <note default-x="126.36" default-y="-245">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="20" width="156.75">
      <note default-x="12" default-y="-240">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="78.71" default-y="-250">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="116.83" default-y="-245">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="21" width="169.46">
      <note default-x="12" default-y="-240">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="62.83" default-y="-250">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="100.95" default-y="-245">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="22" width="166.28">
      <note default-x="12" default-y="-250">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="50.12" default-y="-215">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="88.24" default-y="-220">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="126.36" default-y="-225">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="23" width="274.55">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="100.13" default-y="-215">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="116.63" default-y="-215" />
        <stem>down</stem>
        </note>
      <note default-x="162.27" default-y="-220">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        </note>
      <note default-x="189.89" default-y="-225">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="231.32" default-y="-245">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="24" width="179.51">
      <note default-x="12" default-y="-230">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <note default-x="53.43" default-y="-230">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="94.86" default-y="-225">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="25" width="208.09">
      <note default-x="12.96" default-y="-230">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="68.2" default-y="-240">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="123.44" default-y="-235">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="26" width="193.32">
      <note default-x="12" default-y="-240">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="108.67" default-y="-245">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="27" width="179.51">
      <note default-x="12" default-y="-250">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="94.86" default-y="-230">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <note default-x="136.29" default-y="-235">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="28" width="271.84">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="100.13" default-y="-230">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="185.08" default-y="-235">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="227.56" default-y="-245">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="29" width="212.03">
      <note default-x="12" default-y="-240">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="125.27" default-y="-235">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="30" width="201.41">
      <note default-x="12" default-y="-240">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="68.64" default-y="-245">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="96.95" default-y="-250">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="125.27" default-y="-245">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="31" width="162.47">
      <note default-x="12" default-y="-250">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="96.95" default-y="-235">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="32" width="187.25">
      <note default-x="12" default-y="-230">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="54.48" default-y="-225">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="128.81" default-y="-230">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="157.13" default-y="-235">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="33" width="256.49">
      <print new-page="yes" page-number="3">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="100.13" default-y="-230">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="172.25" default-y="-230">
        <rest />
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="34" width="146.28">
      <note default-x="12" default-y="-230">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="82.66" default-y="-225">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="35" width="155.11">
      <note default-x="12" default-y="-220">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="47.33" default-y="-220">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="82.66" default-y="-215">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="36" width="146.28">
      <note default-x="12" default-y="-230">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="82.66" default-y="-230">
        <rest />
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="37" width="158.06">
      <note default-x="12" default-y="-230">
        <rest />
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      <note default-x="94.43" default-y="-235">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="38" width="172.78">
      <note default-x="12" default-y="-230">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="47.33" default-y="-225">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="63.83" default-y="-225" />
        <stem>down</stem>
        </note>
      <note default-x="112.1" default-y="-230">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        </note>
      <note default-x="135.65" default-y="-235">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="39" width="265.02">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="100.13" default-y="-240">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="149.36" default-y="-250">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="186.29" default-y="-245">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="40" width="143.04">
      <note default-x="12" default-y="-250">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="48.93" default-y="-215">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="104.32" default-y="-220">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="41" width="143.04">
      <note default-x="12" default-y="-230">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="48.93" default-y="-225">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="85.85" default-y="-235">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="42" width="143.04">
      <note default-x="12" default-y="-230">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="48.93" default-y="-240">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="104.32" default-y="-235">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="43" width="152.28">
      <note default-x="12" default-y="-230">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="48.93" default-y="-240">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="85.85" default-y="-225">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="44" width="188.57">
      <note default-x="12" default-y="-230">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="100.61" default-y="-230">
        <rest />
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="45" width="250.32">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="100.13" default-y="-230">
        <rest />
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      <note default-x="184.92" default-y="-215">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="46" width="150.08">
      <note default-x="12" default-y="-210">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="75.6" default-y="-210">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="111.94" default-y="-215">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="47" width="160.13">
      <note default-x="12.96" default-y="-220">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="85.64" default-y="-225">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="121.98" default-y="-245">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="48" width="140.99">
      <note default-x="12" default-y="-240">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="75.6" default-y="-235">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="49" width="162.19">
      <note default-x="12" default-y="-240">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="48.34" default-y="-225">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="111.94" default-y="-230">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="136.17" default-y="-235">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="50" width="171.28">
      <note default-x="12" default-y="-230">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="48.34" default-y="-225">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="133.14" default-y="-245">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="51" width="254.21">
      <print new-page="yes" page-number="4">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="100.13" default-y="-230">
        <rest />
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      <note default-x="187.15" default-y="-235">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="52" width="163.42">
      <note default-x="12" default-y="-230">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="49.29" default-y="-225">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="65.8" default-y="-225" />
        <stem>down</stem>
        </note>
      <note default-x="99.46" default-y="-230">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        </note>
      <note default-x="124.32" default-y="-235">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="53" width="162.98">
      <note default-x="12" default-y="-240">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="49.29" default-y="-235">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="86.59" default-y="-245">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="54" width="176.37">
      <note default-x="12" default-y="-250">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>whole</type>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="55" width="170.15">
      <note default-x="12" default-y="-250">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>whole</type>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="56" width="107.87">
      <note default-x="12" default-y="-250">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>whole</type>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        </barline>
      </measure>
    </part>
  <part id="P4">
    <measure number="1" width="210.48">
      <print>
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <divisions>2</divisions>
        <key>
          <fifths>-3</fifths>
          </key>
        <time symbol="common">
          <beats>4</beats>
          <beat-type>4</beat-type>
          </time>
        <clef>
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="149.66" default-y="-325">
        <rest measure="yes" />
        <duration>8</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="2" width="127.17">
      <note default-x="56.19" default-y="-325">
        <rest measure="yes" />
        <duration>8</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="3" width="158.66">
      <note default-x="71.93" default-y="-325">
        <rest measure="yes" />
        <duration>8</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="4" width="158.66">
      <note default-x="71.93" default-y="-325">
        <rest measure="yes" />
        <duration>8</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="5" width="147.03">
      <note default-x="66.11" default-y="-325">
        <rest measure="yes" />
        <duration>8</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="6" width="176.95">
      <note default-x="81.07" default-y="-325">
        <rest measure="yes" />
        <duration>8</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="7" width="274.02">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="167.17" default-y="-325">
        <rest measure="yes" />
        <duration>8</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="8" width="185.9">
      <note default-x="12" default-y="-335">
        <rest />
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      <note default-x="91.43" default-y="-330">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="9" width="203.88">
      <note default-x="12" default-y="-330">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="117.91" default-y="-335">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="10" width="194.06">
      <note default-x="12.96" default-y="-345">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="29.46" default-y="-340" />
        <stem>up</stem>
        </note>
      <note default-x="139.31" default-y="-345">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="165.79" default-y="-350">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="11" width="177.14">
      <note default-x="12" default-y="-345">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="91.43" default-y="-350">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="12" width="263.46">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="100.13" default-y="-350">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="198.45" default-y="-330">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="13" width="184.61">
      <note default-x="12" default-y="-345">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="98.04" default-y="-325">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="114.54" default-y="-320" />
        <stem>down</stem>
        </note>
      <note default-x="154.72" default-y="-330">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="14" width="210.45">
      <note default-x="12" default-y="-340">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="40.09" default-y="-335">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="68.19" default-y="-330">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="152.47" default-y="-335">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="180.56" default-y="-340">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="15" width="182.36">
      <note default-x="12" default-y="-335">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="54.14" default-y="-330">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="96.28" default-y="-325">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="16" width="194.1">
      <note default-x="12.96" default-y="-330">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="101" default-y="-340">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="17" width="248.05">
      <print new-page="yes" page-number="2">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="100.13" default-y="-350">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="150.95" default-y="-340">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="189.07" default-y="-345">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="18" width="128.16">
      <note default-x="12" default-y="-330">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="69.18" default-y="-350">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="19" width="166.28">
      <note default-x="12" default-y="-330">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="88.24" default-y="-335">
        <rest />
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="20" width="156.75">
      <note default-x="70.98" default-y="-325">
        <rest measure="yes" />
        <duration>8</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="21" width="169.46">
      <note default-x="77.33" default-y="-325">
        <rest measure="yes" />
        <duration>8</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="22" width="166.28">
      <note default-x="12" default-y="-330">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="88.24" default-y="-325">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="23" width="274.55">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="100.13" default-y="-330">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="141.55" default-y="-330">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="189.89" default-y="-315">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="24" width="179.51">
      <note default-x="12" default-y="-320">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="94.86" default-y="-325">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="136.29" default-y="-315">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="25" width="208.09">
      <note default-x="12" default-y="-330">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>whole</type>
        </note>
      </measure>
    <measure number="26" width="193.32">
      <note default-x="89.26" default-y="-325">
        <rest measure="yes" />
        <duration>8</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="27" width="179.51">
      <note default-x="12" default-y="-335">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <note default-x="53.43" default-y="-320">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="94.86" default-y="-315">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="28" width="271.84">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="100.13" default-y="-320">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="142.6" default-y="-330">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="185.08" default-y="-325">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="29" width="212.03">
      <note default-x="12" default-y="-330">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="125.27" default-y="-350">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="30" width="201.41">
      <note default-x="12" default-y="-330">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="125.27" default-y="-335">
        <rest />
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="31" width="162.47">
      <note default-x="12" default-y="-335">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <note default-x="54.48" default-y="-330">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="96.95" default-y="-325">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="32" width="187.25">
      <note default-x="12" default-y="-320">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="54.48" default-y="-315">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="96.95" default-y="-325">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="33" width="256.49">
      <print new-page="yes" page-number="3">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="100.13" default-y="-330">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="116.63" default-y="-330" />
        <stem>down</stem>
        </note>
      <note default-x="148.7" default-y="-325">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        </note>
      <note default-x="172.25" default-y="-320">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="207.58" default-y="-315">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="34" width="146.28">
      <note default-x="12" default-y="-310">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="47.33" default-y="-320">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="82.66" default-y="-315">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="35" width="155.11">
      <note default-x="12" default-y="-320">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="82.66" default-y="-330">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="36" width="146.28">
      <note default-x="12" default-y="-335">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <note default-x="47.33" default-y="-330">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="82.66" default-y="-315">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="37" width="158.06">
      <note default-x="12" default-y="-320">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="59.1" default-y="-330">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="94.43" default-y="-325">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="38" width="172.78">
      <note default-x="12" default-y="-330">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="94.43" default-y="-335">
        <rest />
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="39" width="265.02">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="162.67" default-y="-325">
        <rest measure="yes" />
        <duration>8</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="40" width="143.04">
      <note default-x="12" default-y="-335">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <note default-x="48.93" default-y="-330">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="104.32" default-y="-325">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="41" width="143.04">
      <note default-x="12" default-y="-320">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="48.93" default-y="-315">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="85.85" default-y="-325">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="42" width="143.04">
      <note default-x="12" default-y="-330">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="76.62" default-y="-335">
        <rest />
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="43" width="152.28">
      <note default-x="68.74" default-y="-325">
        <rest measure="yes" />
        <duration>8</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="44" width="188.57">
      <note default-x="12" default-y="-335">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <note default-x="48.93" default-y="-320">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="149.84" default-y="-315">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="45" width="250.32">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="100.13" default-y="-310">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="148.58" default-y="-320">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="184.92" default-y="-305">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="46" width="150.08">
      <note default-x="12" default-y="-310">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="48.34" default-y="-345">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="111.94" default-y="-340">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="47" width="160.13">
      <note default-x="12.96" default-y="-335">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="49.3" default-y="-345">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="85.64" default-y="-325">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="48" width="140.99">
      <note default-x="12" default-y="-330">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="75.6" default-y="-350">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="49" width="162.19">
      <note default-x="12" default-y="-330">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="84.68" default-y="-325">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="50" width="171.28">
      <note default-x="12" default-y="-330">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="48.34" default-y="-340">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="133.14" default-y="-335">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="51" width="254.21">
      <print new-page="yes" page-number="4">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="100.13" default-y="-330">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="149.85" default-y="-340">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="187.15" default-y="-325">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="52" width="163.42">
      <note default-x="12" default-y="-330">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="80.81" default-y="-335">
        <rest />
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="53" width="162.98">
      <note default-x="12" default-y="-335">
        <rest />
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <note default-x="49.29" default-y="-350">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="123.88" default-y="-345">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="54" width="176.37">
      <note default-x="12.96" default-y="-340">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="62.69" default-y="-350">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="99.98" default-y="-330">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="55" width="170.15">
      <note default-x="12" default-y="-350">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>whole</type>
        </note>
      </measure>
    <measure number="56" width="107.87">
      <note default-x="12" default-y="-330">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>whole</type>
        </note>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        </barline>
      </measure>
    </part>
  </score-partwise>`;

/**
 * Le chiffrage T/SD/D est anachronique pour cette musique modale (1570,
 * avant la tonalité fonctionnelle codifiée) — `degre` porte donc des
 * CLAUSULES (points de repos cadentiels) plutôt que des degrés harmoniques,
 * et `fonction` reste "?" quand aucune lecture fonctionnelle n'a de sens
 * historique, "T" seulement pour la finale (le point de repos absolu).
 */
export const PALESTRINA_AGNUS_ANALYSE: MesureAnalyse[] = [
  { numero: 1,  nom: "Si♭ (sujet)", degre: "point d'imitation : entrée du soprano", fonction: "?" },
  { numero: 2,  nom: "Mi♭ (réponse)", degre: "entrée de l'alto, à la quinte inférieure", fonction: "?" },
  { numero: 7,  nom: "Si♭ (réponse)", degre: "entrée du ténor, à l'octave du soprano", fonction: "?" },
  { numero: 8,  nom: "—", degre: "entrée de la basse : exposition à quatre voix complète", fonction: "?" },
  { numero: 16, nom: "Mi♭", degre: "clausule sur la finale du mode", fonction: "T" },
  { numero: 21, nom: "—", degre: "module cadentiel à double retard (reviendra m.26, 30, 38-39, 49-51)", fonction: "?" },
  { numero: 35, nom: "sol m", degre: "clausule médiane (couleur de passage)", fonction: "?" },
  { numero: 45, nom: "La♮ (ficta)", degre: "l'unique accident de toute la pièce — sensible de la clausule sur Si♭", fonction: "?" },
  { numero: 46, nom: "Si♭", degre: "clausule sur Si♭", fonction: "?" },
  { numero: 55, nom: "La♭",  degre: "IV (cadence plagale, broderie descendante à l'alto)", fonction: "?" },
  { numero: 56, nom: "Mi♭", degre: "finale du mode, établie par le poids des clausules", fonction: "T" },
];

export const PALESTRINA_AGNUS_ANALYSE_NARRATIVE: AnalyseNarrative = {
  tonalite: "Mode transposé sur Mi♭ (édition à 3 bémols) — pas de tonalité fonctionnelle au sens classique : la finale s'impose par la fréquence et le poids des clausules, non par une polarité dominante-tonique.",
  metrique: "4/4 barré (alla breve moderne). Tempo modéré, sans accélération ni ralentissement.",
  forme: "Un unique point d'imitation à quatre voix (m.1-9) puis un tissage continu de modules cadentiels récurrents, ponctué de clausules sur les degrés successifs du mode, jusqu'à la cadence plagale finale.",
  sections: [
    {
      label: "Mesures 1-9",
      titre: "Le point d'imitation : l'exposition à quatre voix",
      chiffrage: "Si♭ (S) → Mi♭ (A, 5te inf.) → Si♭ (T, 8ve) → B",
      fonctions: "?",
      texte: "Le sujet — une descente conjointe depuis Si♭, la courbe suppliante de l'Agnus — entre seul au soprano, puis répond à l'alto sur Mi♭ (une quinte plus bas, confirmé note pour note), puis au ténor sur Si♭ (une octave sous le soprano, confirmé), puis à la basse : l'exposition classique du style Palestrina, chaque voix naissant de la précédente.",
    },
    {
      label: "Mesures 10-44",
      titre: "L'économie des modules : retards, clausules, répétition varée",
      chiffrage: "clausules successives sur Mi♭, sol, Si♭…",
      fonctions: "?",
      texte: "Le mouvement se construit sur un petit nombre de modules cadentiels — en particulier une formule à double retard (deux voix suspendues en parallèle, résolues ensemble) qui revient, telle quelle ou variée, à intervalles réguliers. L'invention n'est pas dans le matériau mais dans la couture : les clausules jalonnent le parcours (Mi♭ comme repos principal, un détour de couleur sur sol mineur) sans qu'aucune ne fonctionne comme une dominante au sens classique — l'attraction ici est affaire de degrés conjoints et de convention cadentielle, pas de quintes.",
    },
    {
      label: "Mesures 45-46",
      titre: "Le seul accident de toute la pièce",
      chiffrage: "La♮ (ficta) → Si♭",
      fonctions: "?",
      texte: "Sur l'intégralité des 503 évènements sonores de la pièce, un seul tombe hors de la gamme diatonique de l'armure : un La naturel au soprano, la musica ficta qui fabrique la sensible de la clausule sur Si♭. Tout le reste — chaque dissonance des 56 mesures — appartient à deux catégories strictement réglées : les notes de passage sur temps faible, et les retards, préparés en consonance, frappés sur le temps fort, résolus par degré descendant, sans exception.",
    },
    {
      label: "Mesures 47-56",
      titre: "La cadence plagale finale",
      chiffrage: "IV (La♭) → finale (Mi♭)",
      fonctions: "? → T",
      texte: "La dernière période superpose les modules cadentiels déjà entendus avant de se refermer sur une cadence plagale : l'accord de La♭ (IV), orné d'une broderie descendante à l'alto, avant l'accord final de Mi♭ — une triade complète, avec sa tierce. Pas de dominante conclusive : la finale s'impose par le poids de ses clausules et la gravité de sa basse, non par une polarité V-I qui n'existe pas encore dans ce langage.",
    },
  ],
  synthese: [
    {
      titre: "Le régime zéro de la dissonance",
      texte: "Un seul accident en 56 mesures à quatre voix, et chaque dissonance rigoureusement classée en deux catégories (passage, retard) : c'est le monde d'avant toute dramatisation de la dissonance. Elle n'y est pas encore un évènement, ni un drame, ni une couleur qu'on habite délibérément — c'est une règle de circulation entre les voix, un phénomène de trafic, jamais un objet en soi. Le concile de Trente fit de cette discipline le modèle même du style d'église.",
    },
    {
      titre: "L'économie du module : l'invention dans la couture",
      texte: "Palestrina construit ce mouvement entier sur un petit nombre de formules cadentielles récurrentes plutôt que sur une profusion d'idées nouvelles — le même principe qui sous-tend, des siècles plus tard, une grille harmonique fixe comme la Folia ou un standard de jazz : un matériau limité, mais une combinatoire inépuisable.",
    },
    {
      titre: "La finale par le poids, pas par la dominante",
      texte: "Sans dominante conclusive ni polarité V-I, la finale de cette pièce s'impose par la répétition et la gravité de ses clausules — un mécanisme d'attraction tonale entièrement différent de celui que la musique fonctionnelle développera par la suite, et qui rappelle que la notion même de « tonalité » recouvre plusieurs systèmes historiquement distincts, pas un seul principe universel.",
    },
  ],
};
