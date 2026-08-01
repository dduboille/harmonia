import type { MesureAnalyse, AnalyseNarrative } from "./conservatoire-bwv846";

/**
 * data/conservatoire-traumerei.ts
 * Harmonia — Robert Schumann, « Träumerei » (Kinderszenen op. 15, n° 7,
 * 1838), intégrale, pour la section "conservatoire" du cours 46 (niveau
 * DNSPM — analyser une œuvre qu'on va jouer).
 *
 * MusicXML VERBATIM fourni par Dany (fichier "traumerei-annote.musicxml")
 * — jamais reconstruit à la main, cf. feedback-partitions-verbatim. 24
 * mesures plus anacrouse (numérotation d'origine 0-24, une seule mesure
 * `implicit="yes"` — la m.0, l'anacrouse standard, AUCUNE collision cette
 * fois : vérifié systématiquement après le piège rencontré sur le Nocturne
 * de Fauré/cours45, `score.measures.length` correspond bien aux 25 balises
 * `<measure>` du fichier). 4/4, Fa majeur, Moderato (noire = 90). Domaine
 * public absolu (Schumann mort en 1856) — publiable.
 *
 * Curiosité d'encodage (même outil source que Sibelius/cours18 : 2 balises
 * <harmony> détournent `<root-alter>` — normalement un demi-ton numérique —
 * pour y loger la lettre de la BASSE d'un accord renversé : m.3 et m.23
 * portent `<root-step>F</root-step><root-alter>C</root-alter>`, à lire
 * "Fa/Do" (Fa majeur en 2nd renversement, basse Do) plutôt qu'un vrai
 * root-alter — cohérent avec le texte embarqué "I6/4-V7 : demi-cadence"
 * (m.3) et "I6/4-V7, dernière traversée" (m.23). Sans conséquence sur le
 * rendu (l'affichage vient du `MesureAnalyse[]` écrit à la main).
 *
 * Le fichier porte 18 balises <harmony> aux points structurels clés,
 * cohérentes avec de nombreux repères <direction><words> embarqués dans le
 * XML (non affichés à la gravure) — tous retrouvés par mapping
 * position→mesure, concordance totale avec le brouillon de Dany.
 *
 * Vérifié note à note (script d'extraction dédié, tsx standalone) :
 *  - m.17-20 = m.1-4 : la reprise EXACTE confirmée note pour note, à
 *    l'onset et à la hauteur près, sur les 4 mesures ;
 *  - strophe 1 (m.0-4) : sommet mélodique confirmé exactement Fa5 (midi 77) ;
 *  - strophe 4 (m.13-16) : sommet mélodique confirmé exactement Si♭5
 *    (midi 82) — le plus haut de toute la pièce, toutes strophes confondues
 *    (77, 81, 75, 82, 81 respectivement pour les strophes 1,2,3,4,6) ;
 *  - m.7 : l'agrégat Fa#°7 (Fa#-La-Do-Mi♭) confirmé, les 4 classes de
 *    hauteur toutes présentes ;
 *  - m.22 : le Sol9 sous point d'orgue confirmé EXACTEMENT — les 5 classes
 *    de hauteur Sol-Si-Ré-Fa-La toutes présentes, la mélodie suspendue sur
 *    La5 (midi 81) confirmée exactement, `<fermata>` confirmée présente ;
 *  - m.24 : le Ré et le Mi confirmés bien présents dans l'accord de V9 (Do9),
 *    juste avant la résolution finale sur l'accord de Fa ; `<fermata>`
 *    confirmée présente (le second point d'orgue).
 *
 * Note de comptage : 420 <note> bruts — correspond EXACTEMENT au compte
 * annoncé par Dany ("420 notes vérifiées"), 8e fois d'affilée que le compte
 * tombe pile. Sur ces 420 : 19 silences, 8 notes d'ornement (grâce), 17
 * liaisons fusionnées → 379 évènements sonores retenus par le parseur
 * (lib/musicxml-parse).
 *
 * `score.mode` infère correctement "major" (Fa majeur confirmé sans
 * ambiguïté relative-mineur à trancher).
 */
export const TRAUMEREI_MESURES_0_24 =
`<?xml version='1.0' encoding='UTF-8'?>
<score-partwise version="4.0">
  <identification>
    <encoding>
      <software>MuseScore Studio 4.7.4</software>
      <encoding-date>2026-08-01</encoding-date>
      <supports element="accidental" type="yes" />
      <supports element="beam" type="yes" />
      <supports element="print" attribute="new-page" type="yes" value="yes" />
      <supports element="print" attribute="new-system" type="yes" value="yes" />
      <supports element="stem" type="yes" />
      </encoding>
    <miscellaneous>
      <miscellaneous-field name="creationDate">2026-08-01</miscellaneous-field>
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
      <page-height>1683.78</page-height>
      <page-width>1190.55</page-width>
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
      <line-width type="enclosure">1</line-width>
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
    <credit-words default-x="595.28" default-y="1627.09" justify="center" valign="top" font-size="24">Träumerei</credit-words>
    </credit>
  <credit page="1">
    <credit-type>composer</credit-type>
    <credit-words default-x="1133.86" default-y="1554.09" justify="right" valign="bottom" font-size="12">Robert Schumann</credit-words>
    </credit>
  <part-list>
    <score-part id="P1">
      <part-name print-object="no">Piano</part-name>
      <score-instrument id="P1-I1">
        <instrument-name>Piano</instrument-name>
        <instrument-sound>keyboard.piano</instrument-sound>
        </score-instrument>
      <midi-device id="P1-I1" port="1" />
      <midi-instrument id="P1-I1">
        <midi-channel>1</midi-channel>
        <midi-program>1</midi-program>
        <volume>78.7402</volume>
        <pan>0</pan>
        </midi-instrument>
      </score-part>
    </part-list>
  <part id="P1">
    <measure number="0" implicit="yes" width="135.06">
      <print>
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>143</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>90.69</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <divisions>2</divisions>
        <key>
          <fifths>-1</fifths>
          </key>
        <time>
          <beats>4</beats>
          <beat-type>4</beat-type>
          </time>
        <staves>2</staves>
        <clef number="1">
          <sign>G</sign>
          <line>2</line>
          </clef>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <direction placement="above" system="only-top">
        <direction-type>
          <words default-x="-37.68" relative-y="20" font-weight="bold" font-size="12">Moderato</words>
          </direction-type>
        <staff>1</staff>
        <sound tempo="90" />
        </direction>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">anacrouse : le Do d'élan — LE THÈME REVIENDRA SIX FOIS, chaque fois éclairé autrement</words></direction-type><staff>2</staff></direction><note default-x="98.61" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="21.867258" bezier-y="23.370492" number="1" />
          </notations>
        </note>
      <backup>
        <duration>2</duration>
        </backup>
      <note default-x="98.61" default-y="-150.69">
        <rest />
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="1" width="189.43">
      <barline location="left">
        <bar-style>heavy-light</bar-style>
        <repeat direction="forward" />
        </barline>
      <harmony placement="above" print-frame="no"><root><root-step>F</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">F : I — strophe 1, sommet Fa5</words></direction-type><staff>2</staff></direction><note default-x="30.86" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-100.05" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="90.42" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <slur type="stop" number="1" bezier-x="-26.273744" bezier-y="18.483634" />
          </notations>
        </note>
      <note default-x="114.72" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="21.873392" bezier-y="23.836304" number="1" />
          </notations>
        </note>
      <note default-x="139.02" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="163.32" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="30.86" default-y="-60">
        <rest />
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="67.31" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>half</type>
        <dot default-x="83.81" default-y="-75" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="67.31" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>half</type>
        <dot default-x="83.81" default-y="-55" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="30.86" default-y="-175.69">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="67.31" default-y="-155.69">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="83.81" default-y="-155.69" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="67.31" default-y="-130.69">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="83.81" default-y="-125.69" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="45.36" default-y="-175.69">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="2" width="165.69">
      <note default-x="12" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="36.3" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-73.3" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="60.6" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-25.306929" bezier-y="17.905561" />
          </notations>
        </note>
      <note default-x="115.28" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="139.58" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-40">
        <rest />
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="60.6" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>half</type>
        <dot default-x="77.11" default-y="-35" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-155.69">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="12" default-y="-130.69">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="60.6" default-y="-115.69">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="115.28" default-y="-120.69">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="18.669258" bezier-y="6.390348" number="1" />
          </notations>
        </note>
      <note default-x="139.58" default-y="-125.69">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-175.69">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="32.43" default-y="-160.69">
        <grace />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <voice>6</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="44.54" default-y="-140.69">
        <grace />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <tie type="start" />
        <voice>6</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="60.6" default-y="-140.69">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>half</type>
        <dot default-x="77.11" default-y="-145.69" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="3" width="208.21">
      <harmony placement="above" print-frame="no"><root><root-step>F</root-step><root-alter>C</root-alter></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">I6/4–V7 : demi-cadence</words></direction-type><staff>2</staff></direction><note default-x="12" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="36.3" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="60.6" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="84.91" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="109.21" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="133.51" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="157.81" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <slur type="start" bezier-x="23.053775" bezier-y="14.496945" number="2" />
          </notations>
        </note>
      <note default-x="182.11" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="182.11" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="60.6" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="157.81" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-130.69">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-10.148554" bezier-y="16.922902" />
          </notations>
        </note>
      <note default-x="60.6" default-y="-125.69">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="15.733066" bezier-y="4.684791" number="1" />
          </notations>
        </note>
      <note default-x="84.91" default-y="-130.69">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="109.21" default-y="-135.69">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-6.157031" bezier-y="15.217346" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-81.53" spread="12" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="157.81" default-y="-140.69">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="22.607581" bezier-y="14.595398" number="1" />
          </notations>
        </note>
      <note default-x="182.11" default-y="-135.69">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-155.69">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="60.6" default-y="-155.69">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="157.81" default-y="-165.69">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="19.179166" bezier-y="-5.620252" number="3" />
          </notations>
        </note>
      <note default-x="182.11" default-y="-155.69">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="4" width="208.21">
      <note default-x="12" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="12" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="36.3" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="60.6" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-15.279931" bezier-y="21.730787" />
          </notations>
        </note>
      <note default-x="60.6" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="157.81" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="60.6" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="157.81" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="21.51136" bezier-y="-29.691689" number="2" />
          </notations>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-130.69">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="60.6" default-y="-135.69">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-19.966203" bezier-y="18.041039" />
          </notations>
        </note>
      <note default-x="157.81" default-y="-140.69">
        <rest />
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-140.69">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="3" bezier-x="-9.637924" bezier-y="-17.508229" />
          </notations>
        </note>
      <note default-x="60.6" default-y="-155.69">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="84.91" default-y="-150.69">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="109.21" default-y="-155.69">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="133.51" default-y="-160.69">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="157.81" default-y="-170.69">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="182.11" default-y="-165.69">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="5" width="170.56">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">strophe 2 : même départ…</words></direction-type><staff>2</staff></direction><note default-x="12" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="71.56" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <slur type="stop" number="2" bezier-x="-6.462559" bezier-y="-37.604406" />
          </notations>
        </note>
      <note default-x="95.86" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="13.868674" bezier-y="12.26447" number="1" />
          </notations>
        </note>
      <note default-x="120.16" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="144.46" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-60">
        <rest />
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="48.45" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>half</type>
        <dot default-x="64.95" default-y="-75" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="48.45" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>half</type>
        <dot default-x="64.95" default-y="-55" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-175.69">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="48.45" default-y="-155.69">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="64.95" default-y="-155.69" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="48.45" default-y="-130.69">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="64.95" default-y="-125.69" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="26.5" default-y="-175.69">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="6" width="245.72">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>125.51</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>89.13</staff-distance>
          </staff-layout>
        </print>
      <note default-x="76.48" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="102.74" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-14.417184" bezier-y="9.948783" />
          </notations>
        </note>
      <note default-x="129" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="145.5" default-y="15" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="65.605963" bezier-y="32.988755" number="1" />
          </notations>
        </note>
      <note default-x="173.59" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="197.03" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="220.48" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="76.48" default-y="-40">
        <rest />
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="117" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>half</type>
        <dot default-x="145.5" default-y="-35" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="129" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>half</type>
        <dot default-x="145.5" default-y="-25" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="76.48" default-y="-154.13">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="76.48" default-y="-129.13">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="129" default-y="-109.13">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="145.5" default-y="-104.13" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="76.48" default-y="-174.13">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="100.83" default-y="-154.13">
        <grace />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <voice>6</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="112.93" default-y="-129.13">
        <grace />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <tie type="start" />
        <voice>6</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="129" default-y="-129.13">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>half</type>
        <dot default-x="145.5" default-y="-134.13" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="7" width="223.43">
      <harmony placement="above" print-frame="no"><root><root-step>D</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">…vi, puis la porte tournante :</words></direction-type><staff>2</staff></direction><note default-x="12" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="35.45" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="58.89" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="85.71" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="112.72" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="129.22" default-y="-5" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>F</root-step><root-alter>1</root-alter></root><kind text="°7">diminished-seventh</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">vii°7/V (Fa#–La–Do–Mi♭)</words></direction-type><staff>2</staff></direction><note default-x="188.07" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>2</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-25" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="85.71" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="112.72" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="26.171509" bezier-y="-14.002951" number="2" />
          </notations>
        </note>
      <note default-x="136.16" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="159.61" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="188.07" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-149.13">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-144.13" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="85.71" default-y="-139.13">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="85.71" default-y="-119.13">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="112.72" default-y="-134.13">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="129.22" default-y="-134.13" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="112.72" default-y="-119.13">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="129.22" default-y="-114.13" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="188.07" default-y="-129.13">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="27.647975" bezier-y="35.89832" number="3" />
          </notations>
        </note>
      <note default-x="188.07" default-y="-119.13">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-129.13">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>6</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-134.13" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="12" default-y="-114.13">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>6</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-114.13" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <forward>
        <duration>1</duration>
        </forward>
      <forward>
        <duration>4</duration>
        </forward>
      </measure>
    <measure number="8" width="233.2">
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="7">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V/V…</words></direction-type><staff>2</staff></direction><note default-x="13.04" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="59.93" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="87.36" default-y="-15">
        <grace slash="yes" />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>C</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">…cadence en DO (V) : le rêve a glissé d'une quinte</words></direction-type><staff>2</staff></direction><note default-x="106.83" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-59.336442" bezier-y="40.903143" />
          </notations>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="13.04" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-21.522178" bezier-y="-20.440802" />
          </notations>
        </note>
      <note default-x="106.83" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="157.33" default-y="-30">
        <rest />
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="180.78" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="21.828446" bezier-y="-33.213257" number="1" />
          </notations>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="13.04" default-y="-124.13">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="36.49" default-y="-99.13">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="59.93" default-y="-129.13">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="83.38" default-y="-124.13">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="106.83" default-y="-119.13">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="3" bezier-x="-26.74436" bezier-y="30.030575" />
          </notations>
        </note>
      <note default-x="133.89" default-y="-129.13">
        <rest />
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="157.33" default-y="-129.13">
        <rest />
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="13.04" default-y="-134.13">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="106.83" default-y="-154.13">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="133.89" default-y="-149.13">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="157.33" default-y="-159.13">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="180.78" default-y="-169.13">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        <repeat direction="backward" />
        </barline>
      </measure>
    <measure number="9" width="165.05">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">strophe 3 (mf) : départ en Fa…</words></direction-type><staff>2</staff></direction><note default-x="12" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-59.05" relative-y="-40">
            <mf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89" />
        </direction>
      <note default-x="69.46" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <slur type="stop" number="1" bezier-x="-6.113536" bezier-y="-39.498922" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-86.65" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="92.91" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="116.35" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="139.8" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-60">
        <rest />
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="47.17" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>half</type>
        <dot default-x="63.67" default-y="-75" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="47.17" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>half</type>
        <dot default-x="63.67" default-y="-55" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-174.13">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="47.17" default-y="-154.13">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="63.67" default-y="-154.13" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="47.17" default-y="-129.13">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="63.67" default-y="-124.13" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="26.5" default-y="-174.13">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="10" width="209.76">
      <harmony placement="above" print-frame="no"><root><root-step>C</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">…ut mineur surgit (Mi♭ !), puis D7♭9 :</words></direction-type><staff>2</staff></direction><note default-x="12" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="38.82" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="67.28" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="161.07" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="184.52" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="38.82" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="67.28" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="161.07" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-149.13">
        <rest />
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="38.82" default-y="-154.13">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="67.28" default-y="-149.13">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="161.07" default-y="-149.13">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="184.52" default-y="-139.13">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <forward>
        <duration>1</duration>
        </forward>
      <note default-x="38.82" default-y="-134.13">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="67.28" default-y="-139.13">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="90.73" default-y="-129.13">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="114.18" default-y="-114.13">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="137.62" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>6</duration>
        </backup>
      <forward>
        <duration>4</duration>
        </forward>
      <note default-x="128.68" default-y="-114.13">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>7</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="11" width="329.41">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>125.51</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>90.48</staff-distance>
          </staff-layout>
        </print>
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">SOL MINEUR (ii) — deuxième détour</words></direction-type><staff>2</staff></direction><note default-x="76.48" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="107.56" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="138.64" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="169.72" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="200.8" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="217.31" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="294.04" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="76.48" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>2</voice>
        <type>quarter</type>
        <dot default-x="92.99" default-y="-35" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="169.72" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="200.8" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="231.88" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="262.96" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="294.04" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="start" bezier-x="0" bezier-y="-31.763993" number="1" />
          </notations>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="76.48" default-y="-135.48">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="92.99" default-y="-135.48" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="169.72" default-y="-155.48">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="169.72" default-y="-140.48">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="200.8" default-y="-150.48">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="217.31" default-y="-145.48" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="200.8" default-y="-135.48">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="217.31" default-y="-135.48" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="294.04" default-y="-145.48">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="76.48" default-y="-115.48">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>7</voice>
        <type>quarter</type>
        <dot default-x="92.99" default-y="-115.48" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <forward>
        <duration>1</duration>
        </forward>
      <forward>
        <duration>4</duration>
        </forward>
      </measure>
    <measure number="12" width="268.34">
      <note default-x="12" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="105.24" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="139.74" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="201.9" default-y="-20">
        <rest />
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="232.98" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="20.426178" bezier-y="22.808763" number="2" />
          </notations>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <forward>
        <duration>2</duration>
        </forward>
      <forward>
        <duration>1</duration>
        </forward>
      <note default-x="117.24" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="139.74" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>6</duration>
        </backup>
      <note default-x="12" default-y="-150.48">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-145.48" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="105.24" default-y="-150.48">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="139.74" default-y="-150.48">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="158.82" default-y="-135.48">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="189.9" default-y="-170.48">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="220.98" default-y="-165.48">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-125.48">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="43.08" default-y="-115.48">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="74.16" default-y="-135.48">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-46.46594" bezier-y="-41.999592" />
          </notations>
        </note>
      <note default-x="105.24" default-y="-130.48">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="139.74" default-y="-130.48">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="170.82" default-y="-135.48">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="201.9" default-y="-170.48">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="232.98" default-y="-165.48">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="13" width="214.29">
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step><root-alter>-1</root-alter></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">strophe 4 : LE THÈME EN SI♭ (IV) — sommet Si♭5, le plus haut du morceau</words></direction-type><staff>2</staff></direction><note default-x="12" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="88.17" default-y="-20">
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
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <slur type="stop" number="2" bezier-x="-24.943787" bezier-y="18.019118" />
          </notations>
        </note>
      <note default-x="119.25" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="23.863773" bezier-y="20.146728" number="1" />
          </notations>
        </note>
      <note default-x="150.33" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-79.82" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="181.41" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-50">
        <rest />
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="58.62" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>half</type>
        <dot default-x="75.12" default-y="-55" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="58.62" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>half</type>
        <dot default-x="75.12" default-y="-35" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-195.48">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="58.62" default-y="-140.48">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="75.12" default-y="-135.48" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="58.62" default-y="-115.48">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="75.12" default-y="-115.48" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="14" width="265.12">
      <note default-x="12" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="43.08" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-30.401504" bezier-y="7.149749" />
          </notations>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>A</root-step></root><kind text="7">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V/vi (le Do# : porte tournante n°2, C#°7)…</words></direction-type><staff>2</staff></direction><note default-x="76.84" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="201.16" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="12.853416" bezier-y="9.187892" number="1" />
          </notations>
        </note>
      <note default-x="232.24" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="76.84" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="201.16" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-150.48">
        <rest />
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="43.08" default-y="-135.48">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="43.08" default-y="-115.48">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="76.84" default-y="-130.48">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="201.16" default-y="-130.48">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="232.24" default-y="-120.48">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <forward>
        <duration>2</duration>
        </forward>
      <note default-x="76.84" default-y="-120.48">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="107.92" default-y="-110.48">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="139" default-y="-95.48">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="170.08" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>6</duration>
        </backup>
      <forward>
        <duration>4</duration>
        </forward>
      <note default-x="153.5" default-y="-95.48">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>7</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="15" width="279.48">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>125.51</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>72</staff-distance>
          </staff-layout>
        </print>
      <harmony placement="above" print-frame="no"><root><root-step>D</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">…ré mineur (vi)</words></direction-type><staff>2</staff></direction><note default-x="76.48" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="100.43" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="124.38" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="148.33" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="172.27" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="188.78" default-y="5" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="244.12" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="76.48" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>2</voice>
        <type>quarter</type>
        <dot default-x="92.99" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="148.33" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="172.27" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="196.22" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="220.17" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <slur type="start" bezier-x="0" bezier-y="-82.118876" number="2" />
          </notations>
        </note>
      <note default-x="244.12" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="76.48" default-y="-97">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="92.99" default-y="-97" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="148.33" default-y="-117">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="148.33" default-y="-102">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="172.27" default-y="-112">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="188.78" default-y="-107" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="172.27" default-y="-97">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="188.78" default-y="-97" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="244.12" default-y="-107">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="76.48" default-y="-77">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>7</voice>
        <type>quarter</type>
        <dot default-x="92.99" default-y="-77" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <forward>
        <duration>1</duration>
        </forward>
      <forward>
        <duration>4</duration>
        </forward>
      </measure>
    <measure number="16" width="242.89">
      <note default-x="12" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-5" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="93.66" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="121.66" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <slur type="stop" number="1" bezier-x="-39.789949" bezier-y="42.629323" />
          </notations>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>C</root-step></root><kind text="7">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V7 : retour</words></direction-type><staff>2</staff></direction><note default-x="193.19" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <forward>
        <duration>2</duration>
        </forward>
      <forward>
        <duration>1</duration>
        </forward>
      <note default-x="105.66" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="121.66" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="193.19" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="35.95" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="59.89" default-y="-97">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-25.883111" bezier-y="-81.47444" />
          </notations>
        </note>
      <note default-x="93.66" default-y="-102">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>3</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="93.66" default-y="-92">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>4</duration>
        </backup>
      <note default-x="12" default-y="-112">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="121.66" default-y="-112">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="145.61" default-y="-107">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <slur type="start" bezier-x="10.607586" bezier-y="13.972312" number="1" />
          </notations>
        </note>
      <note default-x="181.19" default-y="-107">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-13.280313" bezier-y="11.460691" />
          </notations>
        </note>
      <note default-x="193.19" default-y="-102">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="217.14" default-y="-137">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="17" width="185.95">
      <note default-x="10.2" default-y="-50">
        <grace slash="yes" />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="0" bezier-y="10.205037" number="1" />
          </notations>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>F</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">strophe 5 = strophe 1 exacte : reprise</words></direction-type><staff>2</staff></direction><note default-x="29.67" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          <slur type="stop" number="1" bezier-x="-10.633107" bezier-y="-1.190552" />
          </notations>
        </note>
      <note default-x="88.36" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="112.3" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="21.499724" bezier-y="23.707077" number="1" />
          </notations>
        </note>
      <note default-x="136.25" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="160.2" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="29.67" default-y="-60">
        <rest />
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="65.59" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>half</type>
        <dot default-x="82.09" default-y="-75" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="65.59" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>half</type>
        <dot default-x="82.09" default-y="-55" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="29.67" default-y="-157">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="65.59" default-y="-137">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="82.09" default-y="-137" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="65.59" default-y="-112">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="82.09" default-y="-107" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="44.17" default-y="-157">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="27.322" bezier-y="-21.185593" number="2" />
          </notations>
        </note>
      </measure>
    <measure number="18" width="163.47">
      <note default-x="12" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="35.95" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="59.89" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-24.97335" bezier-y="17.786979" />
          </notations>
        </note>
      <note default-x="113.78" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="137.72" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-40">
        <rest />
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="59.89" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>half</type>
        <dot default-x="76.4" default-y="-35" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-137">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="12" default-y="-112">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="59.89" default-y="-97">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="113.78" default-y="-102">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="18.514628" bezier-y="6.30981" number="1" />
          </notations>
        </note>
      <note default-x="137.72" default-y="-107">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-157">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-30.235044" bezier-y="-16.76792" />
          </notations>
        </note>
      <note default-x="31.73" default-y="-142">
        <grace />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <voice>6</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="43.83" default-y="-122">
        <grace />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <tie type="start" />
        <voice>6</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="59.89" default-y="-122">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>half</type>
        <dot default-x="76.4" default-y="-127" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="19" width="205.38">
      <note default-x="12" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="35.95" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="59.89" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <slur type="start" bezier-x="18.707288" bezier-y="7.317177" number="2" />
          </notations>
        </note>
      <note default-x="83.84" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="107.79" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="131.74" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-15.852216" bezier-y="12.33738" />
          </notations>
        </note>
      <note default-x="155.68" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <slur type="start" bezier-x="8.877332" bezier-y="7.9809" number="2" />
          </notations>
        </note>
      <note default-x="179.63" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="179.63" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="59.89" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="155.68" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-112">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-9.947452" bezier-y="16.842011" />
          </notations>
        </note>
      <note default-x="59.89" default-y="-107">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="15.586912" bezier-y="4.58842" number="1" />
          </notations>
        </note>
      <note default-x="83.84" default-y="-112">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="107.79" default-y="-117">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-5.947453" bezier-y="15.120622" />
          </notations>
        </note>
      <note default-x="155.68" default-y="-122">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="179.63" default-y="-117">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-137">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="59.89" default-y="-137">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="155.68" default-y="-147">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="179.63" default-y="-137">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="20" width="287.19">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>125.51</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>78.9</staff-distance>
          </staff-layout>
        </print>
      <note default-x="76.48" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="76.48" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="102.6" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="128.71" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-9.659204" bezier-y="21.936092" />
          </notations>
        </note>
      <note default-x="128.71" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="233.16" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="22.532988" bezier-y="23.613002" number="1" />
          </notations>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="76.48" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="128.71" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="233.16" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="76.48" default-y="-118.9">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="128.71" default-y="-123.9">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="233.16" default-y="-128.9">
        <rest />
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="76.48" default-y="-128.9">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="128.71" default-y="-143.9">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="154.82" default-y="-138.9">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="180.94" default-y="-143.9">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="207.05" default-y="-148.9">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="233.16" default-y="-158.9">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="259.28" default-y="-153.9">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="21" width="182.25">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">strophe 6 : dernier départ…</words></direction-type><staff>2</staff></direction><note default-x="12" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="76" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <slur type="stop" number="1" bezier-x="-26.873736" bezier-y="18.700747" />
          </notations>
        </note>
      <note default-x="102.11" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="17.748382" bezier-y="24.132545" number="1" />
          </notations>
        </note>
      <note default-x="128.22" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="154.34" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-60">
        <rest />
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="51.17" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>half</type>
        <dot default-x="67.67" default-y="-75" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="51.17" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>half</type>
        <dot default-x="67.67" default-y="-55" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-163.9">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="51.17" default-y="-143.9">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="67.67" default-y="-143.9" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="51.17" default-y="-118.9">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="67.67" default-y="-113.9" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="26.5" default-y="-163.9">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="22" width="194.02">
      <note default-x="12" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="38.11" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-28.53764" bezier-y="9.109769" />
          </notations>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="9">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">…LE POINT D'ORGUE sur Sol9 (V9/V) : la rêverie suspendue — mélodie sur La5</words></direction-type><staff>2</staff></direction><note default-x="64.23" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="80.73" default-y="15" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <fermata type="upright" default-y="29" relative-y="10" />
          </notations>
        </note>
      <note default-x="113.88" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="23.871656" bezier-y="16.044879" number="1" />
          </notations>
        </note>
      <note default-x="139.99" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="166.11" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-40">
        <rest />
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="52.22" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>half</type>
        <dot default-x="80.73" default-y="-35" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="64.23" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>half</type>
        <dot default-x="80.73" default-y="-25" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="64.23" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>half</type>
        <dot default-x="80.73" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-143.9">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="12" default-y="-118.9">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="64.23" default-y="-158.9">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="80.73" default-y="-153.9" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <fermata type="upright" default-y="6.64" relative-y="10" />
          </notations>
        </note>
      <note default-x="64.23" default-y="-148.9">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="80.73" default-y="-143.9" />
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="64.23" default-y="-113.9">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="80.73" default-y="-113.9" />
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-163.9">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <forward>
        <duration>2</duration>
        </forward>
      <forward>
        <duration>4</duration>
        </forward>
      </measure>
    <measure number="23" width="225.05">
      <harmony placement="above" print-frame="no"><root><root-step>F</root-step><root-alter>C</root-alter></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">I6/4 – V7, dernière traversée (le Fa#/sol m en passage)</words></direction-type><staff>2</staff></direction><note default-x="12" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="38.11" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-22.414366" bezier-y="18.024713" />
          </notations>
        </note>
      <note default-x="64.23" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <slur type="start" bezier-x="20.276192" bezier-y="7.779205" number="1" />
          </notations>
        </note>
      <note default-x="90.34" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="116.45" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="142.57" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-17.544661" bezier-y="12.799408" />
          </notations>
        </note>
      <note default-x="168.68" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <slur type="start" bezier-x="22.964093" bezier-y="15.184239" number="1" />
          </notations>
        </note>
      <note default-x="197.14" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="197.14" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="64.23" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="168.68" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-118.9">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="12" default-y="-108.9">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="76.23" default-y="-108.9">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="168.68" default-y="-148.9">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="15.252899" bezier-y="15.567661" number="2" />
          </notations>
        </note>
      <note default-x="168.68" default-y="-123.9">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="197.14" default-y="-138.9">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="197.14" default-y="-118.9">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-143.9">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="64.23" default-y="-113.9">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="10.931962" bezier-y="-13.879642" number="3" />
          </notations>
        </note>
      <note default-x="90.34" default-y="-118.9">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="116.45" default-y="-123.9">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="3" bezier-x="-15.285957" bezier-y="-8.859559" />
          </notations>
        </note>
      <backup>
        <duration>6</duration>
        </backup>
      <forward>
        <duration>2</duration>
        </forward>
      <note default-x="64.23" default-y="-143.9">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>7</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <forward>
        <duration>2</duration>
        </forward>
      </measure>
    <measure number="24" width="188.65">
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">ii…</words></direction-type><staff>2</staff></direction><note default-x="12" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="12" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="38.11" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-22.964014" bezier-y="15.184359" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-65.52" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>C</root-step></root><kind text="9">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">…V9 (le Ré et le Mi dans l'accord !)…</words></direction-type><staff>2</staff></direction><note default-x="64.23" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <slur type="start" bezier-x="19.226181" bezier-y="6.84458" number="1" />
          </notations>
        </note>
      <note default-x="90.34" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="90.34" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>F</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">…I, p, point d'orgue : le réveil</words></direction-type><staff>2</staff></direction><note default-x="116.45" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-4.482416" bezier-y="19.918448" />
          <fermata type="upright" default-y="12.51" relative-y="10" />
          </notations>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <note default-x="12" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="64.23" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="64.23" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="116.45" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="116.45" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>6</duration>
        </backup>
      <note default-x="12" default-y="-123.9">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-19.072274" bezier-y="10.547578" />
          </notations>
        </note>
      <note default-x="12" default-y="-113.9">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="64.23" default-y="-143.9">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="116.45" default-y="-143.9">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <fermata type="upright" default-y="1.5" relative-y="10" />
          </notations>
        </note>
      <backup>
        <duration>8</duration>
        </backup>
      <forward>
        <duration>2</duration>
        </forward>
      <note default-x="64.23" default-y="-143.9">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="90.34" default-y="-178.9">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>1</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="116.45" default-y="-163.9">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>2</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <forward>
        <duration>2</duration>
        </forward>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        </barline>
      </measure>
    </part>
  </score-partwise>`;

export const TRAUMEREI_ANALYSE: MesureAnalyse[] = [
  { numero: 0,  nom: "Fa",      degre: "I — strophe 1 : l'anacrouse-thème, sommet Fa5", fonction: "T" },
  { numero: 3,  nom: "Fa/Do",   degre: "I6/4 – V7 : demi-cadence", fonction: "T" },
  { numero: 5,  nom: "Fa",      degre: "I — strophe 2 : même départ", fonction: "T" },
  { numero: 7,  nom: "ré m → Fa#°7", degre: "vi, puis vii°7/V (porte tournante n°1)", fonction: "?" },
  { numero: 8,  nom: "Sol7 → Do", degre: "V/V → V (le rêve a glissé d'une quinte)", fonction: "D" },
  { numero: 9,  nom: "Fa",      degre: "I — strophe 3 (mf) : départ en Fa", fonction: "T" },
  { numero: 10, nom: "ut m",    degre: "iii emprunté (le Mi♭ !), vers Ré7♭9", fonction: "?" },
  { numero: 11, nom: "sol m",   degre: "ii — le détour le plus sombre", fonction: "SD" },
  { numero: 13, nom: "Si♭",     degre: "IV — strophe 4 : le thème lui-même, sommet Si♭5 (le plus haut)", fonction: "SD" },
  { numero: 14, nom: "La7 → Do#°7", degre: "V/vi : porte tournante n°2", fonction: "?" },
  { numero: 15, nom: "ré m",    degre: "vi", fonction: "T" },
  { numero: 16, nom: "Do7",     degre: "V7 : retour", fonction: "D" },
  { numero: 17, nom: "Fa",      degre: "I — strophe 5 : reprise EXACTE de la strophe 1", fonction: "T" },
  { numero: 21, nom: "Fa",      degre: "I — strophe 6 : dernier départ", fonction: "T" },
  { numero: 22, nom: "Sol9",    degre: "V9/V, sous point d'orgue : la rêverie suspendue (mélodie sur La5)", fonction: "?" },
  { numero: 23, nom: "Fa/Do",   degre: "I6/4 – V7 : dernière traversée", fonction: "T" },
  { numero: 24, nom: "sol m → Do9 → Fa", degre: "ii – V9 – I : cadence finale, 2e point d'orgue", fonction: "T" },
];

export const TRAUMEREI_ANALYSE_NARRATIVE: AnalyseNarrative = {
  tonalite: "Fa majeur du début à la fin — chaque strophe repart de la même tonique, mais visite une région différente avant d'y revenir ou de s'en écarter.",
  metrique: "4/4, Moderato (noire = 90). Une seule et même phrase, respirée six fois, avec anacrouse.",
  forme: "Six strophes de quatre mesures sur un même thème : I (m.0-4) — V (m.5-8) — ii (m.9-12) — IV, avec vi en passage (m.13-16) — I, reprise exacte (m.17-20) — I, avec point d'orgue et cadence finale (m.21-24).",
  sections: [
    {
      label: "Strophes 1 et 5 (m.0-4, m.17-20)",
      titre: "L'exposition, la maison — et son retour exact",
      chiffrage: "I … I6/4 – V7",
      fonctions: "T … T",
      texte: "Le thème s'élève depuis l'anacrouse de Do jusqu'à son sommet, Fa5, avant une demi-cadence I6/4-V7. La strophe 5 reprend cette même phrase note pour note, à l'onset et à la hauteur près — vérifié exhaustivement — le retour au réel après le voyage des strophes intermédiaires.",
    },
    {
      label: "Strophe 2 (m.5-8)",
      titre: "La première porte tournante",
      chiffrage: "I → vi → vii°7/V → V/V → V",
      fonctions: "T → T → ? → D → D",
      texte: "Même départ, mais la phrase glisse vers vi (ré mineur), puis pivote sur un accord de septième diminuée (Fa#-La-Do-Mi♭, confirmé exactement) qui fait basculer vers la dominante de la dominante, puis vers Do majeur : le rêve a dérivé d'une quinte entière sans jamais forcer la porte.",
    },
    {
      label: "Strophe 3 (m.9-12)",
      titre: "Le détour le plus sombre",
      chiffrage: "I → ut mineur (emprunté) → Ré7♭9 → sol mineur (ii)",
      fonctions: "T → ? → ? → SD",
      texte: "Départ en Fa, mais très vite le mode mineur fait surface (le Mi♭ emprunté), la phrase se charge d'un Ré7 avec neuvième mineure, et se dépose finalement sur sol mineur — le point le plus sombre de tout le morceau, atteint mezzo forte.",
    },
    {
      label: "Strophe 4 (m.13-16)",
      titre: "Le coup de maître : le thème en Si♭",
      chiffrage: "IV → V/vi (vii°7 pivot) → vi → V7",
      fonctions: "SD → ? → T → D",
      texte: "Le thème lui-même, jusqu'ici toujours entendu comme mélodie sur un accord de Fa, est réénoncé en Si♭ majeur (IV) — et atteint ici le sommet absolu de toute la pièce, Si♭5. Une seconde porte tournante (un accord de septième diminuée sur Do#) fait glisser vers ré mineur (vi), avant qu'un Do7 ne prépare le retour.",
    },
    {
      label: "Strophe 6 (m.21-24)",
      titre: "Le point d'orgue et le réveil",
      chiffrage: "I → V9/V (point d'orgue) → I6/4-V7 → ii-V9-I",
      fonctions: "T → ? → T → T",
      texte: "Le thème repart une dernière fois, mais au lieu de continuer sa course, la phrase s'immobilise : un accord de Sol9 (Sol-Si-Ré-Fa-La, confirmé exactement) est tenu sous point d'orgue, la mélodie suspendue sur La5 — la rêverie tenue dans la main, hors du temps. Puis une dernière traversée (I6/4-V7), et la cadence finale, pianissimo : ii, puis un V9 complet où le Ré et la Mi sonnent ensemble (confirmé), avant l'accord de Fa sous un second point d'orgue — le réveil sur la pointe des pieds.",
    },
  ],
  synthese: [
    {
      titre: "La septième diminuée comme gond silencieux",
      texte: "Les deux portes tournantes de la pièce (strophes 2 et 4) utilisent le même agrégat qui, ailleurs dans ce corpus, dramatise (Beethoven) ou suspend indéfiniment (Wagner) : ici, la septième diminuée ne fait ni l'un ni l'autre — elle pivote sans bruit, la modulation comme pure association d'idées plutôt que comme évènement.",
    },
    {
      titre: "Le point d'orgue promu évènement structurel",
      texte: "Le Sol9 tenu de la mesure 22 n'est pas une simple pause : c'est le sommet expressif de la pièce, un accord suspendu pour lui-même, savouré avant même sa résolution — vingt et un ans avant Tristan, la même idée d'une tension tenue pour elle-même, mais qui ici finit toujours par rentrer se coucher.",
    },
    {
      titre: "Une leçon de réharmonisation avant la lettre",
      texte: "Le même matériau mélodique, harmonisé six fois vers six destinations différentes (I, V, ii, IV, vi en passage, puis I) : Träumerei est l'exercice de réharmonisation le plus limpide du répertoire, un thème que tout le monde connaît sous six éclairages d'auteur.",
    },
  ],
};
