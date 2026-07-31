import type { MesureAnalyse, AnalyseNarrative } from "./conservatoire-bwv846";

/**
 * data/conservatoire-haydn94.ts
 * Harmonia — Joseph Haydn, Symphonie n°94 « La Surprise », 2e mouvement
 * (Andante, 1791), réduction piano, pour la section "conservatoire" du
 * cours 17 (niveau 3 — la phrase musicale et la forme).
 *
 * MusicXML VERBATIM fourni par Dany (fichier "haydn94-annote.musicxml") —
 * jamais reconstruit à la main, cf. feedback-partitions-verbatim. 148
 * mesures, 2/4, Do majeur : thème (m.1-16) et 4 variations + coda (m.17-148).
 * Métadonnée d'origine à toiletter : le champ compositeur du fichier source
 * fusionne compositeur et arrangeur (« Haydnarr. by Brantson Brown »).
 *
 * Contrairement à Dido's Lament (cours38, zéro balise), ce fichier PORTE
 * 5 balises <harmony> aux points structurels clés (m.1 Do I, m.16 Sol V,
 * m.49 Do m, m.135 Sol7, m.147 Do I) — un retour à la convention habituelle
 * du corpus. Dany a aussi embarqué ses repères de structure directement
 * dans le XML via <direction><words> (non affichés à la gravure), à chaque
 * section : thème (m.1), reprise pp (m.9), LA SURPRISE (m.16), forme binaire
 * B (m.17), variation I (m.33), variation II ut mineur (m.49), variation III
 * (m.75), variation IV (m.99), second volet dolce (m.107), point d'orgue
 * (m.134), coda (m.135), G7 complet (m.140), conclusion (m.147) — tous
 * retrouvés par mapping ligne→mesure et utilisés comme charpente de
 * l'analyse narrative ci-dessous, concordance totale avec le brouillon de
 * Dany à chaque repère.
 *
 * Vérifié note à note :
 *  - m.1-2 : l'arpège Do4-Mi4 (m.1) puis Sol4-Mi4 (m.2) à la mélodie sur
 *    basse Do — confirme l'arpège Do-Mi-Sol du thème ;
 *  - m.4 et m.8 : basse Sol (Sol1-Sol2, puis Sol1-Sol2-Sol4/Sol3) — les deux
 *    demi-cadences sur V qui bornent l'antécédent puis le conséquent du
 *    thème (l'« alternance I-V » du brouillon, en fait I-IV-V-I-I-V) ;
 *  - m.16 : Sol2-Si2-Ré3-Sol3-Sol4-Si4-Ré5-Sol5 — un accord de Sol MAJEUR qui
 *    couvre EXACTEMENT Sol2 à Sol5, confirmé note à note ;
 *  - m.49-50 : Do (toutes octaves : Do2-Do3-Do4-Do5) puis Mi♭ (mêmes
 *    octaves) martelés, puis Sol (toutes octaves) puis Mi♭ — confirme
 *    « Do-Mi♭ martelés... détours vers Mi♭ majeur » ;
 *  - m.75 : le même accord de Do (Do4-Mi4-Sol4-Do5) répété 4 fois de suite,
 *    puis son 1er renversement (Mi4-Sol4-Do5-Mi5) 4 fois — confirme « notes
 *    répétées » ;
 *  - m.134 : la basse forme un accord de Do diminué (Do-Mi♭-Fa♯, 1er
 *    renversement, basse Mi♭) juste avant la coda — la « suspension » du
 *    point d'orgue ;
 *  - m.140 : PIÈGE DE LECTURE ÉVITÉ — un simple découpage mesure par mesure
 *    ne montre que Sol3-Si3 à l'attaque de cette mesure (Ré4 et Fa4
 *    semblent manquants). Vérification des <tie> : Ré4 et Fa4 sont liés
 *    DEPUIS la mesure 139 (`<tie type="start">` en 139, `<tie type="stop">`
 *    en 140) — la sonorité RÉELLEMENT présente à la mesure 140 est donc bien
 *    Sol-Si-Ré-Fa (Sol7 complet), confirmant le brouillon à la lettre :
 *    seuls Sol et Si sont frappés à neuf, Ré et Fa sonnent déjà, tenus
 *    depuis la mesure précédente — la 7e n'a même pas besoin d'être
 *    rejouée, elle attendait déjà là.
 *
 * Tempo : 64bpm puis 58bpm — le changement tombe EXACTEMENT au premier temps
 * de la mesure 135 (onset 205824 = 134 mesures pleines de 2/4 à 768 ticks/
 * noire), soit très précisément le début de la coda annotée par Dany — un
 * léger ralentissement non mentionné dans le brouillon, découvert par le
 * script d'extraction.
 *
 * Note de comptage (le brouillon annonçait "2229 notes vérifiées" — NON
 * confirmé à l'identique) : 2232 <note> bruts, 129 silences, 1 note
 * d'ornement (<grace/>), 13 liaisons de tenue fusionnées → 2086 évènements
 * sonores réels retenus par le parseur (lib/musicxml-parse), même écart
 * mineur déjà rencontré sur Dido's Lament (838 vérifié contre "879" annoncé).
 *
 * Domaine public absolu (1791).
 */
export const HAYDN94_MESURES_1_148 =
`<?xml version='1.0' encoding='UTF-8'?>
<score-partwise version="4.0">
  <work>
    <work-title>Symphony No. 94, Mvt. 2</work-title>
    </work>
  <identification>
    <creator type="composer">Haydnarr. by Brantson Brown</creator>
    <encoding>
      <software>MuseScore Studio 4.7.4</software>
      <encoding-date>2026-07-31</encoding-date>
      <supports element="accidental" type="yes" />
      <supports element="beam" type="yes" />
      <supports element="print" attribute="new-page" type="yes" value="yes" />
      <supports element="print" attribute="new-system" type="yes" value="yes" />
      <supports element="stem" type="yes" />
      </encoding>
    <source>http://musescore.com/user/110171869/scores/28989206</source>
    <miscellaneous>
      <miscellaneous-field name="creationDate">2025-08-28</miscellaneous-field>
      <miscellaneous-field name="platform">Microsoft Windows</miscellaneous-field>
      <miscellaneous-field name="sourceRevisionId">69082166</miscellaneous-field>
      <miscellaneous-field name="subtitle">"Surprise Symphony"</miscellaneous-field>
      </miscellaneous>
    </identification>
  <defaults>
    <scaling>
      <millimeters>6.99912</millimeters>
      <tenths>40</tenths>
      </scaling>
    <page-layout>
      <page-height>1596.77</page-height>
      <page-width>1233.87</page-width>
      <page-margins type="even">
        <left-margin>85.725</left-margin>
        <right-margin>85.725</right-margin>
        <top-margin>85.725</top-margin>
        <bottom-margin>85.725</bottom-margin>
        </page-margins>
      <page-margins type="odd">
        <left-margin>85.725</left-margin>
        <right-margin>85.725</right-margin>
        <top-margin>85.725</top-margin>
        <bottom-margin>85.725</bottom-margin>
        </page-margins>
      </page-layout>
    <appearance>
      <line-width type="light barline">1.8</line-width>
      <line-width type="heavy barline">5.5</line-width>
      <line-width type="beam">5</line-width>
      <line-width type="bracket">4.5</line-width>
      <line-width type="dashes">1</line-width>
      <line-width type="enclosure">1</line-width>
      <line-width type="ending">1.1</line-width>
      <line-width type="extend">1</line-width>
      <line-width type="leger">1.6</line-width>
      <line-width type="pedal">1.1</line-width>
      <line-width type="octave shift">1.1</line-width>
      <line-width type="slur middle">2.1</line-width>
      <line-width type="slur tip">0.5</line-width>
      <line-width type="staff">1.1</line-width>
      <line-width type="stem">1</line-width>
      <line-width type="tie middle">2.1</line-width>
      <line-width type="tie tip">0.5</line-width>
      <line-width type="tuplet bracket">1</line-width>
      <line-width type="wedge">1.2</line-width>
      <note-size type="cue">70</note-size>
      <note-size type="grace">70</note-size>
      <note-size type="grace-cue">49</note-size>
      </appearance>
    <music-font font-family="Leland" />
    <word-font font-family="Edwin" font-size="10" />
    <lyric-font font-family="Edwin" font-size="10" />
    </defaults>
  <credit page="1">
    <credit-type>composer</credit-type>
    <credit-words default-x="1148.14" default-y="1351.68" justify="right" valign="bottom">Written by Franz Joseph Haydn
</credit-words>
    <credit-words>Arranged by Brantson Brown</credit-words>
    </credit>
  <credit page="1">
    <credit-type>title</credit-type>
    <credit-words default-x="616.93" default-y="1511.05" justify="center" valign="top" font-size="22">"Surprise Symphony"</credit-words>
    </credit>
  <credit page="1">
    <credit-type>subtitle</credit-type>
    <credit-words default-x="616.93" default-y="1453.9" justify="center" valign="top" font-size="14">Symphony No. 48
</credit-words>
    <credit-words>-Movement 2-</credit-words>
    </credit>
  <part-list>
    <score-part id="P1">
      <part-name print-object="no">Piano</part-name>
      <part-abbreviation print-object="no">Pno.</part-abbreviation>
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
    <measure number="1" width="320.71">
      <print>
        <system-layout>
          <system-margins>
            <left-margin>50</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>229.37</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>51.32</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <divisions>24</divisions>
        <key>
          <fifths>0</fifths>
          </key>
        <time>
          <beats>2</beats>
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
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-57.94" relative-y="-20">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <sound tempo="64" />
      <direction placement="above">
        <direction-type>
          <words relative-x="-10.32" relative-y="13.87">Andante</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>C</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">Do : I — THÈME (arpège nu, I–V en alternance d'école)</words></direction-type><staff>2</staff></direction><note default-x="82.99" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="141.97" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="200.95" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="259.93" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="82.99" default-y="-151.32">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="82.99" default-y="-116.32">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="200.95" default-y="-111.32">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="2" width="220.74">
      <note default-x="12.5" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="71.48" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="130.46" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-151.32">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.5" default-y="-116.32">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="130.46" default-y="-111.32">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="3" width="250.23">
      <note default-x="12.5" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-44.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="71.48" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-44.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="130.46" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="189.45" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-171.32">
        <pitch>
          <step>F</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.5" default-y="-136.32">
        <chord />
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="130.46" default-y="-111.32">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="4" width="220.74">
      <note default-x="12.5" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-64.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="71.48" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-64.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="130.46" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-74.3" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-166.32">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.5" default-y="-131.32">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="130.46" default-y="-111.32">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="5" width="317.82">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>96.55</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>42.25</staff-distance>
          </staff-layout>
        </print>
      <note default-x="60.86" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="124.65" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="188.44" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="252.23" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="60.86" default-y="-142.25">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="60.86" default-y="-107.25">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="188.44" default-y="-102.25">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="6" width="237.57">
      <note default-x="12.5" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="76.29" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="140.08" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-142.25">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.5" default-y="-107.25">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="140.08" default-y="-102.25">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="7" width="269.46">
      <note default-x="12.5" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="76.29" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="140.08" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-44.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="203.87" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-44.3" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-152.25">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.5" default-y="-117.25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="76.29" default-y="-102.25">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="140.08" default-y="-137.25">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="140.08" default-y="-102.25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="203.87" default-y="-102.25">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="8" width="237.57">
      <note default-x="12.5" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="14.259863" bezier-y="-21.58316" number="1" />
          </notations>
        </note>
      <note default-x="108.19" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-24.325615" bezier-y="-8.800054" />
          </notations>
        </note>
      <note default-x="171.98" default-y="-20">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-157.25">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.5" default-y="-122.25">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="108.19" default-y="-102.25">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="9" width="317.82">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>96.55</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>69.46</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-57.94" relative-y="-20">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67" />
        </direction>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">reprise pp : la berceuse-piège…</words></direction-type><staff>2</staff></direction><note default-x="60.86" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="124.65" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="188.44" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="252.23" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="60.86" default-y="-149.46">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="60.86" default-y="-134.46">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="60.86" default-y="-124.46">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="60.86" default-y="-114.46">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="188.44" default-y="-129.46">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="10" width="237.57">
      <note default-x="12.5" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="76.29" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="140.08" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-149.46">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.5" default-y="-134.46">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.5" default-y="-124.46">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.5" default-y="-114.46">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="140.08" default-y="-129.46">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="11" width="269.46">
      <note default-x="12.5" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-44.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="76.29" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-44.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="140.08" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="203.87" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-144.46">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.5" default-y="-129.46">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.5" default-y="-119.46">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.5" default-y="-109.46">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="140.08" default-y="-129.46">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="12" width="237.57">
      <note default-x="12.5" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-64.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="76.29" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-64.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="140.08" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-74.3" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-149.46">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.5" default-y="-139.46">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.5" default-y="-129.46">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.5" default-y="-114.46">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="140.08" default-y="-129.46">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="13" width="317.82">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>96.55</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>69.72</staff-distance>
          </staff-layout>
        </print>
      <note default-x="60.86" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="124.65" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="188.44" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="252.23" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="60.86" default-y="-149.72">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="60.86" default-y="-134.72">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="60.86" default-y="-124.72">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="60.86" default-y="-114.72">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="188.44" default-y="-129.72">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="14" width="237.57">
      <note default-x="12.5" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="76.29" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="140.08" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-149.72">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.5" default-y="-134.72">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.5" default-y="-124.72">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.5" default-y="-114.72">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="140.08" default-y="-129.72">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="15" width="269.46">
      <note default-x="12.5" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="76.29" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="140.08" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-44.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="203.87" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-44.3" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-144.72">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.5" default-y="-124.72">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.5" default-y="-109.72">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="76.29" default-y="-129.72">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="140.08" default-y="-144.72">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="140.08" default-y="-129.72">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="140.08" default-y="-119.72">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="140.08" default-y="-109.72">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="203.87" default-y="-129.72">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="16" width="237.57">
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">…LA SURPRISE : V ff tutti sur temps faible — une dynamique, pas une harmonie</words></direction-type><staff>2</staff></direction><note default-x="12.5" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="76.29" default-y="-20">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.62" default-y="-56.88" relative-y="-20">
            <ff />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="141.11" />
        </direction>
      <note default-x="140.08" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="140.08" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="140.08" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="140.08" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-149.72">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.5" default-y="-114.72">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="76.29" default-y="-129.72">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="140.08" default-y="-149.72">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="140.08" default-y="-139.72">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="140.08" default-y="-129.72">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="140.08" default-y="-114.72">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="17" width="299.76">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>96.55</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>107</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-87.55" relative-y="-20">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">B : vers V, puis retour (forme binaire du thème)</words></direction-type><staff>2</staff></direction><note default-x="60.86" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="8.490563" bezier-y="-16.00052" number="1" />
          </notations>
        </note>
      <note default-x="60.86" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="111.67" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-17.119267" bezier-y="-5.919207" />
          </notations>
        </note>
      <note default-x="145.54" default-y="-20">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="179.41" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="9.519845" bezier-y="-14.907363" number="1" />
          </notations>
        </note>
      <note default-x="179.41" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="230.22" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-16.089986" bezier-y="-7.346378" />
          </notations>
        </note>
      <note default-x="264.09" default-y="-20">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="60.86" default-y="-212">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="60.86" default-y="-177">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="179.41" default-y="-207">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="179.41" default-y="-172">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="18" width="251.4">
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-107.07" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="12.5" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-64.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="63.31" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-64.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="63.31" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="114.11" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="65.112377" bezier-y="-34.244585" number="1" />
          </notations>
        </note>
      <note default-x="114.11" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="147.98" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="147.98" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="181.86" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="181.86" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="215.73" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="215.73" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-187">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="12.5" default-y="-152">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="63.31" default-y="-187">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="63.31" default-y="-152">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="114.11" default-y="-187">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="114.11" default-y="-152">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="181.86" default-y="-167">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="19" width="285.27">
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-107.07" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="12.5" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="12.5" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="46.37" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="80.24" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="80.24" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="114.11" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="147.98" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="147.98" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="181.86" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="215.73" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="215.73" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="249.6" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-222">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.5" default-y="-187">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="147.98" default-y="-177">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="29.328216" bezier-y="-20.849474" number="2" />
          </notations>
        </note>
      <note default-x="215.73" default-y="-172">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="20" width="225.99">
      <note default-x="12.5" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-66.162137" bezier-y="-32.169627" />
          <articulations>
            <staccato default-x="4.93" default-y="-64.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="63.31" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-64.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="63.31" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="114.11" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="132.11" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="21.911551" bezier-y="-14.037635" number="1" />
          </notations>
        </note>
      <note default-x="114.11" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="132.11" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="190.32" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-187">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-31.0726" bezier-y="-18.147682" />
          </notations>
        </note>
      <note default-x="12.5" default-y="-152">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="63.31" default-y="-187">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="63.31" default-y="-152">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="114.11" default-y="-187">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="114.11" default-y="-152">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="164.92" default-y="-167">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="21" width="299.41">
      <print new-page="yes" page-number="2">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>70</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>57.61</staff-distance>
          </staff-layout>
        </print>
      <note default-x="60.86" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-4.289975" bezier-y="-7.820745" />
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="60.86" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="120.05" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="120.05" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="179.24" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="179.24" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="238.42" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="238.42" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="60.86" default-y="-122.61">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="60.86" default-y="-112.61">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="120.05" default-y="-122.61">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="120.05" default-y="-112.61">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="179.24" default-y="-137.61">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="179.24" default-y="-122.61">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="238.42" default-y="-137.61">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="238.42" default-y="-122.61">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="22" width="221.45">
      <note default-x="12.5" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="71.69" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="71.69" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="130.87" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="130.87" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-147.61">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="-137.61">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="71.69" default-y="-147.61">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="71.69" default-y="-137.61">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="130.87" default-y="-157.61">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-69.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="130.87" default-y="-147.61">
        <chord />
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="23" width="290.51">
      <note default-x="12.5" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-33.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="71.69" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-44.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="71.69" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="130.87" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="33.815137" bezier-y="-21.987894" number="1" />
          </notations>
        </note>
      <note default-x="130.87" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="170.33" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="170.33" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="209.79" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="209.79" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="249.25" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="249.25" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-142.61">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="-107.61">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="71.69" default-y="-142.61">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="71.69" default-y="-107.61">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="130.87" default-y="-137.61">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="130.87" default-y="-102.61">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="209.79" default-y="-137.61">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="209.79" default-y="-102.61">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="24" width="251.05">
      <note default-x="12.5" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-35.19427" bezier-y="-19.705186" />
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="71.69" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="71.69" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="130.87" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="130.87" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="190.06" default-y="-20">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-157.61">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-69.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="-122.61">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="71.69" default-y="-157.61">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-69.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="71.69" default-y="-122.61">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="130.87" default-y="-157.61">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-69.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="130.87" default-y="-122.61">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="190.06" default-y="-117.61">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="25" width="299.76">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>100.7</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>75.78</staff-distance>
          </staff-layout>
        </print>
      <note default-x="60.86" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="18.422648" bezier-y="3.960519" number="1" />
          </notations>
        </note>
      <note default-x="60.86" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="111.67" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-7.187182" bezier-y="17.419073" />
          </notations>
        </note>
      <note default-x="145.54" default-y="-20">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="179.41" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="17.458566" bezier-y="5.426551" number="1" />
          </notations>
        </note>
      <note default-x="179.41" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="230.22" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-8.151264" bezier-y="16.364776" />
          </notations>
        </note>
      <note default-x="264.09" default-y="-20">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="60.86" default-y="-180.78">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="60.86" default-y="-145.78">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="179.41" default-y="-175.78">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="179.41" default-y="-140.78">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="26" width="251.4">
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-75.85" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="12.5" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="3.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="63.31" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="3.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="63.31" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="114.11" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="65.048179" bezier-y="34.370959" number="1" />
          </notations>
        </note>
      <note default-x="114.11" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="147.98" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="147.98" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="181.86" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="181.86" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="215.73" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="215.73" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-155.78">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="12.5" default-y="-120.78">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="63.31" default-y="-155.78">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="63.31" default-y="-120.78">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="114.11" default-y="-155.78">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="114.11" default-y="-120.78">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="181.86" default-y="-135.78">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="27" width="285.27">
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-75.85" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="12.5" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="12.5" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="46.37" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="80.24" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="80.24" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="114.11" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="147.98" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="147.98" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="181.86" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="215.73" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="215.73" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="249.6" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-190.78">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.5" default-y="-155.78">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="147.98" default-y="-145.78">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="28.800397" bezier-y="-20.680465" number="2" />
          </notations>
        </note>
      <note default-x="215.73" default-y="-140.78">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="28" width="225.99">
      <note default-x="12.5" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-66.226334" bezier-y="32.042176" />
          <articulations>
            <staccato default-x="4.93" default-y="3.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="63.31" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="3.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="63.31" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="114.11" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="132.11" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="20.640517" bezier-y="16.127753" number="1" />
          </notations>
        </note>
      <note default-x="114.11" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="132.11" default-y="-5" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="190.32" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-155.78">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-30.559971" bezier-y="-17.978673" />
          </notations>
        </note>
      <note default-x="12.5" default-y="-120.78">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="63.31" default-y="-155.78">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="63.31" default-y="-120.78">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="114.11" default-y="-155.78">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="114.11" default-y="-120.78">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="164.92" default-y="-135.78">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="29" width="299.41">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>100.7</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>45</staff-distance>
          </staff-layout>
        </print>
      <note default-x="60.86" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-4.562357" bezier-y="7.996486" />
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="60.86" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="60.86" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="120.05" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="120.05" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="120.05" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="179.24" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="179.24" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="179.24" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="238.42" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="238.42" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="238.42" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="60.86" default-y="-110">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="60.86" default-y="-100">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="60.86" default-y="-75">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="120.05" default-y="-110">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="120.05" default-y="-100">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="120.05" default-y="-75">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="179.24" default-y="-125">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="179.24" default-y="-110">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="179.24" default-y="-90">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="238.42" default-y="-125">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="238.42" default-y="-110">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="238.42" default-y="-90">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="30" width="221.45">
      <note default-x="12.5" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="12.5" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="71.69" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="71.69" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="71.69" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="130.87" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="39.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="130.87" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="130.87" default-y="30">
        <chord />
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-135">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="-125">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.5" default-y="-100">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="71.69" default-y="-135">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="71.69" default-y="-125">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="71.69" default-y="-100">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="130.87" default-y="-145">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-69.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="130.87" default-y="-135">
        <chord />
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="130.87" default-y="-110">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="31" width="290.51">
      <note default-x="12.5" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="34.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="12.5" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="71.69" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="34.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="71.69" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="71.69" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="130.87" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="33.512099" bezier-y="22.483849" number="1" />
          </notations>
        </note>
      <note default-x="130.87" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="130.87" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="170.33" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="170.33" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="170.33" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="209.79" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="209.79" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="209.79" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="249.25" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="249.25" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="249.25" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-130">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="-95">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="71.69" default-y="-130">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="71.69" default-y="-95">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="130.87" default-y="-125">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="130.87" default-y="-90">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="209.79" default-y="-125">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="209.79" default-y="-90">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="32" width="251.05">
      <note default-x="12.5" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-35.497308" bezier-y="19.197014" />
          <articulations>
            <staccato default-x="4.93" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="12.5" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="71.69" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="71.69" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="71.69" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="130.87" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="130.87" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="130.87" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="190.06" default-y="-20">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-145">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-69.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="-110">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="71.69" default-y="-145">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-69.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="71.69" default-y="-110">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="130.87" default-y="-145">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-69.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="130.87" default-y="-110">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="190.06" default-y="-105">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="33" width="277.45">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>100.7</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>42.89</staff-distance>
          </staff-layout>
        </print>
      <barline location="left">
        <bar-style>heavy-light</bar-style>
        <repeat direction="forward" />
        </barline>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-4.18" default-y="-49.48" relative-y="-20">
            <f />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="106.67" />
        </direction>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">VARIATION I : le thème + contrechant en doubles croches</words></direction-type><staff>2</staff></direction><note default-x="82.06" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="82.06" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="82.06" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="178.86" default-y="-20">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="82.06" default-y="-132.89">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-x="-46.68" relative-y="-37.48">
            <p />
            </dynamics>
          </direction-type>
        <staff>2</staff>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="130.46" default-y="-132.89">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="178.86" default-y="-122.89">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="227.25" default-y="-122.89">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="34" width="240.15">
      <note default-x="12.5" default-y="-20">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="109.29" default-y="-20">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-43.45" relative-y="-20">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="141.56" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="15.425293" bezier-y="16.03129" number="1" />
          </notations>
        </note>
      <note default-x="173.82" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="206.08" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-17.751333" bezier-y="13.410148" />
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-112.89">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="60.9" default-y="-112.89">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="109.29" default-y="-122.89">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="35" width="272.41">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-0.7" default-y="-46.01" relative-y="-20">
            <sf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="124.44" />
        </direction>
      <note default-x="12.5" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="9.526417" bezier-y="7.740395" number="1" />
          </notations>
        </note>
      <note default-x="44.76" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-6.736756" bezier-y="10.260724" />
          </notations>
        </note>
      <note default-x="77.03" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="start" bezier-x="9.526417" bezier-y="7.740395" number="1" />
          </notations>
        </note>
      <note default-x="109.29" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-6.736756" bezier-y="10.260724" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-0.7" default-y="-46.01" relative-y="-20">
            <sf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="124.44" />
        </direction>
      <note default-x="141.56" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="9.526417" bezier-y="7.740395" number="1" />
          </notations>
        </note>
      <note default-x="173.82" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-6.736756" bezier-y="10.260724" />
          </notations>
        </note>
      <note default-x="206.08" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="start" bezier-x="9.526417" bezier-y="7.740395" number="1" />
          </notations>
        </note>
      <note default-x="238.35" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-6.736756" bezier-y="10.260724" />
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-117.89">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-44.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="77.03" default-y="-117.89">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-44.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="141.56" default-y="-127.89">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="206.08" default-y="-127.89">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="36" width="272.41">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-0.7" default-y="-49.62" relative-y="-20">
            <sf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="124.44" />
        </direction>
      <note default-x="12.5" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="8.60832" bezier-y="8.61939" number="1" />
          </notations>
        </note>
      <note default-x="44.76" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-7.654853" bezier-y="9.476302" />
          </notations>
        </note>
      <note default-x="77.03" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="start" bezier-x="18.235761" bezier-y="10.208385" number="1" />
          </notations>
        </note>
      <note default-x="109.29" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="141.56" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-14.290585" bezier-y="15.249042" />
          </notations>
        </note>
      <note default-x="173.82" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="start" bezier-x="17.930159" bezier-y="10.07746" number="1" />
          </notations>
        </note>
      <note default-x="206.08" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="238.35" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-13.945907" bezier-y="15.118117" />
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-137.89">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-64.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="77.03" default-y="-137.89">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-64.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="141.56" default-y="-147.89">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-74.3" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="37" width="263.29">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>100.7</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>40.28</staff-distance>
          </staff-layout>
        </print>
      <note default-x="59.9" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="160.7" default-y="-20">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="59.9" default-y="-130.28">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="110.3" default-y="-130.28">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="160.7" default-y="-120.28">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="211.1" default-y="-120.28">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="38" width="249.49">
      <note default-x="12.5" default-y="-20">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="113.3" default-y="-20">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="146.89" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="12.229535" bezier-y="18.950703" number="1" />
          </notations>
        </note>
      <note default-x="180.49" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="214.09" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-21.64209" bezier-y="6.349061" />
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-110.28">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="62.9" default-y="-110.28">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="113.3" default-y="-120.28">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="39" width="283.09">
      <note default-x="12.5" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="9.835381" bezier-y="7.928837" number="1" />
          </notations>
        </note>
      <note default-x="46.1" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-7.100431" bezier-y="10.449166" />
          </notations>
        </note>
      <note default-x="79.7" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="start" bezier-x="9.835381" bezier-y="7.928837" number="1" />
          </notations>
        </note>
      <note default-x="113.3" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-7.100431" bezier-y="10.449166" />
          </notations>
        </note>
      <note default-x="146.89" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="9.835381" bezier-y="7.928837" number="1" />
          </notations>
        </note>
      <note default-x="180.49" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-7.100431" bezier-y="10.449166" />
          </notations>
        </note>
      <note default-x="214.09" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="start" bezier-x="9.835381" bezier-y="7.928837" number="1" />
          </notations>
        </note>
      <note default-x="247.69" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-7.100431" bezier-y="10.449166" />
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-105.28">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="-95.28">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="79.7" default-y="-105.28">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="79.7" default-y="-95.28">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="146.89" default-y="-125.28">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="146.89" default-y="-115.28">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="214.09" default-y="-125.28">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="214.09" default-y="-115.28">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="40" width="266.55">
      <note default-x="12.5" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="9.835381" bezier-y="7.928837" number="1" />
          </notations>
        </note>
      <note default-x="46.1" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-7.100431" bezier-y="10.449166" />
          </notations>
        </note>
      <note default-x="79.7" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="start" bezier-x="20.7432" bezier-y="7.751564" number="1" />
          </notations>
        </note>
      <note default-x="113.3" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="146.89" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-13.128425" bezier-y="17.832878" />
          </notations>
        </note>
      <note default-x="197.29" default-y="-20">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-110.28">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="22.797203" bezier-y="-24.622027" number="1" />
          </notations>
        </note>
      <note default-x="146.89" default-y="-145.28">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-31.397398" bezier-y="-11.838922" />
          </notations>
        </note>
      <note default-x="197.29" default-y="-100.28">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        <repeat direction="backward" />
        </barline>
      </measure>
    <measure number="41" width="307.08">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>100.7</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>40.28</staff-distance>
          </staff-layout>
        </print>
      <barline location="left">
        <bar-style>heavy-light</bar-style>
        <repeat direction="forward" />
        </barline>
      <note default-x="82.06" default-y="-20">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="185.96" default-y="-20">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="215.65" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="71.2497" bezier-y="52.186458" number="1" />
          </notations>
        </note>
      <note default-x="245.33" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="275.02" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="82.06" default-y="-125.28">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="6.659424" bezier-y="-15.199603" number="2" />
          </notations>
        </note>
      <note default-x="82.06" default-y="-115.28">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="126.59" default-y="-145.28">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-15.785404" bezier-y="-5.11829" />
          </notations>
        </note>
      <note default-x="156.28" default-y="-100.28">
        <rest />
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      <note default-x="185.96" default-y="-130.28">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="11.907762" bezier-y="-15.874011" number="2" />
          </notations>
        </note>
      <note default-x="185.96" default-y="-120.28">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="245.33" default-y="-145.28">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-18.018675" bezier-y="-8.313026" />
          </notations>
        </note>
      <note default-x="275.02" default-y="-100.28">
        <rest />
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="42" width="251.78">
      <note default-x="12.5" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="42.19" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="71.87" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="101.56" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="131.24" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="160.93" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="190.61" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="220.3" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-135.28">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-64.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="-125.28">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="71.87" default-y="-135.28">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-64.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="71.87" default-y="-125.28">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="131.24" default-y="-135.28">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="24.960832" bezier-y="-11.157056" number="2" />
          </notations>
        </note>
      <note default-x="131.24" default-y="-125.28">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="160.93" default-y="-130.28">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="160.93" default-y="-120.28">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="190.61" default-y="-125.28">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="190.61" default-y="-115.28">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="220.3" default-y="-120.28">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-19.928823" bezier-y="-18.718041" />
          </notations>
        </note>
      <note default-x="220.3" default-y="-110.28">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="43" width="251.78">
      <note default-x="12.5" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="71.87" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="131.24" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="190.61" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-76.200553" bezier-y="47.030947" />
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-115.28">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="14.900545" bezier-y="-38.6224" number="1" />
          </notations>
        </note>
      <note default-x="12.5" default-y="-105.28">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="42.19" default-y="-145.28">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="71.87" default-y="-120.28">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="71.87" default-y="-110.28">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="101.56" default-y="-145.28">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="131.24" default-y="-125.28">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="131.24" default-y="-115.28">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="160.93" default-y="-145.28">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="190.61" default-y="-130.28">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="190.61" default-y="-120.28">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="220.3" default-y="-145.28">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-26.754735" bezier-y="-28.53862" />
          </notations>
        </note>
      </measure>
    <measure number="44" width="251.78">
      <note default-x="12.5" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="35.783643" bezier-y="22.309075" number="1" />
          </notations>
        </note>
      <note default-x="42.19" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="71.87" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="101.56" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="131.24" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="160.93" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="190.61" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="220.3" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-135.28">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-64.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="-125.28">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="71.87" default-y="-135.28">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-64.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="71.87" default-y="-125.28">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="131.24" default-y="-135.28">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="149.24" default-y="-135.28" />
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="23.728451" bezier-y="-12.976458" number="2" />
          </notations>
        </note>
      <note default-x="131.24" default-y="-125.28">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot default-x="149.24" default-y="-125.28" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="220.3" default-y="-125.28">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-19.758104" bezier-y="-18.316071" />
          </notations>
        </note>
      </measure>
    <measure number="45" width="310.09">
      <print new-page="yes" page-number="3">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>84.05</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>38.81</staff-distance>
          </staff-layout>
        </print>
      <note default-x="59.9" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="90.95" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="122" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="153.05" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="184.1" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="215.14" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="246.19" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="277.24" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="59.9" default-y="-128.81">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="59.9" default-y="-118.81">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="122" default-y="-128.81">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="122" default-y="-118.81">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="184.1" default-y="-118.81">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="184.1" default-y="-108.81">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="246.19" default-y="-118.81">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="246.19" default-y="-108.81">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="46" width="262.68">
      <note default-x="12.5" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="43.55" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="74.6" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-55.093635" bezier-y="24.459791" />
          <articulations>
            <staccato default-x="4.93" default-y="39.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="105.64" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="34.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="136.69" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="167.74" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="24.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="198.79" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="229.84" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-108.81">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="-93.81">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="74.6" default-y="-108.81">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="74.6" default-y="-93.81">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="136.69" default-y="-93.81">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="136.69" default-y="-83.81">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="47" width="231.64">
      <note default-x="12.5" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="59.07" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="105.64" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="27.694108" bezier-y="18.259343" number="1" />
          </notations>
        </note>
      <note default-x="136.69" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="167.74" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="198.79" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-103.81">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="3.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="-88.81">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="59.07" default-y="-103.81">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="3.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="59.07" default-y="-88.81">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="105.64" default-y="-93.81">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="29.505599" bezier-y="16.366223" number="2" />
          </notations>
        </note>
      <note default-x="136.69" default-y="-98.81">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="167.74" default-y="-103.81">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="198.79" default-y="-98.81">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      </measure>
    <measure number="48" width="258.01">
      <note default-x="12.5" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-27.229746" bezier-y="18.944873" />
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="59.07" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="105.64" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="152.22" default-y="-20">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-128.81">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-26.341732" bezier-y="21.084278" />
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="-118.81">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="59.07" default-y="-128.81">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="59.07" default-y="-118.81">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="105.64" default-y="-128.81">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="105.64" default-y="-118.81">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="152.22" default-y="-98.81">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        <repeat direction="backward" />
        </barline>
      </measure>
    <measure number="49" width="359.55">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>97.01</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>62.14</staff-distance>
          </staff-layout>
        </print>
      <barline location="left">
        <bar-style>heavy-light</bar-style>
        <repeat direction="forward" />
        </barline>
      <attributes>
        <key>
          <fifths>-3</fifths>
          </key>
        </attributes>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-2" default-y="-64.3" relative-y="-20">
            <ff />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="124.44" />
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>C</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">VARIATION II en UT MINEUR (ff) : le minore — Mi♭ martelé, détours vers Mi♭ majeur</words></direction-type><staff>2</staff></direction><note default-x="119.93" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="119.93" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="179.38" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="179.38" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="238.84" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="238.84" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="298.3" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="298.3" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <attributes>
        <clef number="2" after-barline="yes">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="119.93" default-y="-162.14">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-69.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="119.93" default-y="-127.14">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="179.38" default-y="-162.14">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-69.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="179.38" default-y="-127.14">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="238.84" default-y="-152.14">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="238.84" default-y="-117.14">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="298.3" default-y="-152.14">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="298.3" default-y="-117.14">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="50" width="222.4">
      <note default-x="12.5" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="71.96" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="71.96" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="131.41" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="131.41" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-142.14">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="-107.14">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="71.96" default-y="-142.14">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="71.96" default-y="-107.14">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="131.41" default-y="-152.14">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="131.41" default-y="-117.14">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="51" width="252.13">
      <note default-x="12.5" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="71.96" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="71.96" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="131.41" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="131.41" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="190.87" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="190.87" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-147.14">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="-112.14">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="71.96" default-y="-147.14">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="71.96" default-y="-112.14">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="131.41" default-y="-157.14">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-64.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="131.41" default-y="-122.14">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="190.87" default-y="-157.14">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-64.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="190.87" default-y="-122.14">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="52" width="228.34">
      <note default-x="18.44" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-64.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="18.44" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="77.9" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-64.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="77.9" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="137.35" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-74.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="137.35" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="18.44" default-y="-167.14">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-74.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="18.44" default-y="-132.14">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="77.9" default-y="-167.14">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-74.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="77.9" default-y="-132.14">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="137.35" default-y="-177.14">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-84.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="137.35" default-y="-142.14">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="53" width="348.64">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>97.01</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>38.81</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-41.4" relative-y="-20">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="36.67" />
        </direction>
      <note default-x="97.77" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-33.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="160.03" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-33.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="222.3" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="284.57" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="97.77" default-y="-138.81">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-69.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="97.77" default-y="-128.81">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="128.9" default-y="-128.81">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="128.9" default-y="-118.81">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="160.03" default-y="-138.81">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-69.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="160.03" default-y="-128.81">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="191.17" default-y="-128.81">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="191.17" default-y="-118.81">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="222.3" default-y="-138.81">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-69.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="222.3" default-y="-128.81">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="253.44" default-y="-128.81">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="253.44" default-y="-118.81">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="284.57" default-y="-138.81">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-69.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="284.57" default-y="-128.81">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="315.71" default-y="-128.81">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="315.71" default-y="-118.81">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="54" width="263.37">
      <note default-x="12.5" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="74.77" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="137.04" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-138.81">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-69.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="-128.81">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="43.63" default-y="-128.81">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="43.63" default-y="-118.81">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="74.77" default-y="-138.81">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-69.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="74.77" default-y="-128.81">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="105.9" default-y="-128.81">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="105.9" default-y="-118.81">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="137.04" default-y="-138.81">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-69.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="137.04" default-y="-128.81">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="168.17" default-y="-128.81">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="168.17" default-y="-118.81">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="199.31" default-y="-138.81">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-69.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="199.31" default-y="-128.81">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="230.44" default-y="-128.81">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="230.44" default-y="-118.81">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="55" width="232.24">
      <note default-x="12.5" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="3.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="59.2" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="3.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="105.9" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="26.895879" bezier-y="20.509837" number="1" />
          </notations>
        </note>
      <note default-x="137.04" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="168.17" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="199.31" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-113.81">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-44.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="-103.81">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="59.2" default-y="-113.81">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-44.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="59.2" default-y="-103.81">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="105.9" default-y="-113.81">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="26.184199" bezier-y="-21.071103" number="2" />
          </notations>
        </note>
      <note default-x="105.9" default-y="-103.81">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="137.04" default-y="-118.81">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="137.04" default-y="-108.81">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="168.17" default-y="-123.81">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="168.17" default-y="-113.81">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="199.31" default-y="-113.81">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="199.31" default-y="-103.81">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="56" width="218.17">
      <note default-x="12.5" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-29.207476" bezier-y="17.057697" />
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="59.2" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="105.9" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="152.6" default-y="-20">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-118.81">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-29.398932" bezier-y="-16.288229" />
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="-108.81">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="59.2" default-y="-118.81">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="59.2" default-y="-108.81">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="105.9" default-y="-118.81">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="105.9" default-y="-108.81">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="152.6" default-y="-98.81">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        <repeat direction="backward" />
        </barline>
      </measure>
    <measure number="57" width="312.94">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>97.48</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>61.84</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-4.18" default-y="-66.84" relative-y="-20">
            <f />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="106.67" />
        </direction>
      <note default-x="89.77" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="31.49" />
            </articulations>
          </notations>
        </note>
      <note default-x="108.95" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="37.373368" bezier-y="34.202484" number="1" />
          </notations>
        </note>
      <note default-x="125.96" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="142.96" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="159.96" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="176.96" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="193.96" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="213.76" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="0" bezier-y="51.781377" />
          </notations>
        </note>
      <note default-x="232.95" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="5.892381" bezier-y="11.624458" number="1" />
          </notations>
        </note>
      <note default-x="249.95" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="266.95" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-11.247299" bezier-y="6.583801" />
          </notations>
        </note>
      <note default-x="286.14" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="89.77" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <attributes>
        <clef number="2" after-barline="yes">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="89.77" default-y="-151.84">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="89.77" default-y="-116.84">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="142.96" default-y="-151.84">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="142.96" default-y="-116.84">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="213.76" default-y="-141.84">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="213.76" default-y="-106.84">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="266.95" default-y="-141.84">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="266.95" default-y="-106.84">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="58" width="246.99">
      <note default-x="10.66" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="51.49" />
            </articulations>
          </notations>
        </note>
      <note default-x="40.9" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="39.610727" bezier-y="36.924759" number="1" />
          </notations>
        </note>
      <note default-x="60" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="77.01" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="94.01" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="111.01" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="128.01" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="147.81" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="0" bezier-y="54.719095" />
          </notations>
        </note>
      <note default-x="167" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="5.892381" bezier-y="11.624458" number="1" />
          </notations>
        </note>
      <note default-x="184" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="201" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-11.247299" bezier-y="6.583801" />
          </notations>
        </note>
      <note default-x="220.19" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="10.66" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10.66" default-y="-131.84">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="10.66" default-y="-96.84">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="77.01" default-y="-131.84">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="77.01" default-y="-96.84">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="147.81" default-y="-121.84">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="147.81" default-y="-86.84">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="201" default-y="-121.84">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="201" default-y="-86.84">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="59" width="244.7">
      <note default-x="10" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="36.48" />
            </articulations>
          </notations>
        </note>
      <note default-x="29.19" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="42.19187" bezier-y="35.364634" number="1" />
          </notations>
        </note>
      <note default-x="55.61" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="72.61" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="89.61" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="106.61" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="123.62" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="143.42" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="0" bezier-y="56.486915" />
          </notations>
        </note>
      <note default-x="162.6" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="6.494813" bezier-y="11.922587" number="1" />
          </notations>
        </note>
      <note default-x="179.61" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="198.71" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-11.703406" bezier-y="6.88193" />
          </notations>
        </note>
      <note default-x="217.9" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="10" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10" default-y="-146.84">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="10" default-y="-111.84">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="72.61" default-y="-146.84">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="72.61" default-y="-111.84">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="143.42" default-y="-136.84">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="143.42" default-y="-101.84">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="198.71" default-y="-136.84">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="198.71" default-y="-101.84">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="60" width="257.79">
      <note default-x="10.66" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="56.49" />
            </articulations>
          </notations>
        </note>
      <note default-x="32.26" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="37.848976" bezier-y="33.957803" number="1" />
          </notations>
        </note>
      <note default-x="53.86" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="72.96" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="89.97" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="115.11" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="132.11" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="151.91" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="0" bezier-y="48.535564" />
          </notations>
        </note>
      <note default-x="171.1" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="7.796329" bezier-y="12.541911" number="1" />
          </notations>
        </note>
      <note default-x="190.2" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="211.8" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-12.720592" bezier-y="7.501254" />
          </notations>
        </note>
      <note default-x="230.99" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="10.66" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="10.66" default-y="-126.84">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="10.66" default-y="-91.84">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="72.96" default-y="-126.84">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="72.96" default-y="-91.84">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="151.91" default-y="-116.84">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="151.91" default-y="-81.84">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="211.8" default-y="-116.84">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="211.8" default-y="-81.84">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="61" width="326.02">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>97.01</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>38.81</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="97.77" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="122.22" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="6.978499" bezier-y="12.156533" number="1" />
          </notations>
        </note>
      <note default-x="140.22" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="160.02" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-12.076632" bezier-y="7.115876" />
          </notations>
        </note>
      <note default-x="184.47" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="211.31" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="235.76" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="6.466254" bezier-y="11.908626" number="1" />
          </notations>
        </note>
      <note default-x="253.76" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="271.76" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-11.681558" bezier-y="6.867969" />
          </notations>
        </note>
      <note default-x="296.21" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="97.77" default-y="-148.81">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="97.77" default-y="-113.81">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="160.02" default-y="-128.81">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="160.02" default-y="-93.81">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="211.31" default-y="-143.81">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="211.31" default-y="-108.81">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="271.76" default-y="-128.81">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="271.76" default-y="-93.81">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="62" width="244.26">
      <note default-x="12.5" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="36.95" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="6.978499" bezier-y="12.156533" number="1" />
          </notations>
        </note>
      <note default-x="54.95" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="74.75" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-12.076632" bezier-y="7.115876" />
          </notations>
        </note>
      <note default-x="99.2" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="123.65" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="148.1" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="8.132326" bezier-y="12.696752" number="1" />
          </notations>
        </note>
      <note default-x="167.9" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="190.01" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-12.989474" bezier-y="7.656095" />
          </notations>
        </note>
      <note default-x="214.46" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-138.81">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="12.5" default-y="-103.81">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="74.75" default-y="-128.81">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="74.75" default-y="-93.81">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="123.65" default-y="-153.81">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="123.65" default-y="-118.81">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="190.01" default-y="-128.81">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="190.01" default-y="-93.81">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="63" width="245.4">
      <note default-x="12.5" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="36.95" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="11.302102" bezier-y="10.67427" number="1" />
          </notations>
        </note>
      <note default-x="63.79" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="81.79" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-11.302102" bezier-y="10.67427" />
          </notations>
        </note>
      <note default-x="106.24" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="130.69" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="155.14" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="9.73568" bezier-y="9.406154" number="1" />
          </notations>
        </note>
      <note default-x="173.15" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="191.15" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-9.062413" bezier-y="10.056434" />
          </notations>
        </note>
      <note default-x="215.6" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-148.81">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="12.5" default-y="-113.81">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="81.79" default-y="-148.81">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="81.79" default-y="-113.81">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="130.69" default-y="-143.81">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="130.69" default-y="-108.81">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="191.15" default-y="-143.81">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="191.15" default-y="-108.81">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="64" width="246.75">
      <note default-x="18.76" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="43.21" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="11.302102" bezier-y="10.67427" number="1" />
          </notations>
        </note>
      <note default-x="70.05" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="88.06" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-11.302102" bezier-y="10.67427" />
          </notations>
        </note>
      <note default-x="112.51" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="3.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="136.96" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="154.96" default-y="-5" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="167.95" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">forward hook</beam>
        </note>
      <note default-x="185.95" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="203.95" default-y="-5" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="216.95" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">backward hook</beam>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="18.76" default-y="-138.81">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="18.76" default-y="-103.81">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="88.06" default-y="-138.81">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="88.06" default-y="-103.81">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="136.96" default-y="-98.81">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="185.95" default-y="-138.81">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="185.95" default-y="-103.81">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="65" width="371.3">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>97.01</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65.33</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="82.73" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="82.73" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="104.72" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="22.39328" bezier-y="-24.394124" number="1" />
          </notations>
        </note>
      <note default-x="104.72" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="120.73" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="120.73" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="136.73" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="136.73" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="155.13" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="155.13" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="184.87" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="184.87" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="214.61" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="214.61" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="235.71" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-30.94916" bezier-y="-11.776324" />
          </notations>
        </note>
      <note default-x="235.71" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="257.71" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="16.410809" bezier-y="-9.399958" number="1" />
          </notations>
        </note>
      <note default-x="257.71" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="284.76" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="284.76" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="314.5" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-12.212392" bezier-y="-14.440614" />
          </notations>
        </note>
      <note default-x="314.5" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="336.5" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-23.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="336.5" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="82.73" default-y="-110.33">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="104.72" default-y="-115.33">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="28.877483" bezier-y="14.101431" number="1" />
          </notations>
        </note>
      <note default-x="120.73" default-y="-120.33">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="136.73" default-y="-125.33">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="155.13" default-y="-130.33">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="184.87" default-y="-135.33">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="214.61" default-y="-140.33">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="235.71" default-y="-145.33">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-23.424509" bezier-y="22.001177" />
          </notations>
        </note>
      <note default-x="314.5" default-y="-145.33">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>9</duration>
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="332.5" default-y="-140.33" />
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="314.5" default-y="-110.33">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>9</duration>
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="332.5" default-y="-110.33" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="347.5" default-y="-145.33">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">backward hook</beam>
        </note>
      <note default-x="347.5" default-y="-110.33">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="66" width="226.4">
      <note default-x="8.82" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="26.82" default-y="-5" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="8.82" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="26.82" default-y="25" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="36.71" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">forward hook</beam>
        </note>
      <note default-x="36.71" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="66.45" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="84.45" default-y="15" />
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="66.45" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="84.45" default-y="25" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="94.34" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">backward hook</beam>
        </note>
      <note default-x="94.34" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="115.44" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="133.44" default-y="25" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="115.44" default-y="30">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>6</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="133.44" default-y="35" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="143.32" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">forward hook</beam>
        </note>
      <note default-x="143.32" default-y="30">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>6</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="173.39" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="191.39" default-y="5" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="173.39" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="191.39" default-y="25" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="201.27" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">backward hook</beam>
        </note>
      <note default-x="201.27" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="8.82" default-y="-145.33">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>9</duration>
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="26.82" default-y="-140.33" />
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="8.82" default-y="-110.33">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>9</duration>
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="26.82" default-y="-110.33" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="36.71" default-y="-145.33">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">forward hook</beam>
        </note>
      <note default-x="36.71" default-y="-110.33">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="66.45" default-y="-145.33">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>9</duration>
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="84.45" default-y="-140.33" />
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="66.45" default-y="-115.33">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>9</duration>
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="84.45" default-y="-110.33" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="94.34" default-y="-145.33">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">backward hook</beam>
        </note>
      <note default-x="94.34" default-y="-115.33">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="115.44" default-y="-145.33">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>9</duration>
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="133.44" default-y="-140.33" />
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="115.44" default-y="-120.33">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>9</duration>
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="133.44" default-y="-120.33" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="143.32" default-y="-145.33">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">forward hook</beam>
        </note>
      <note default-x="143.32" default-y="-120.33">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="173.39" default-y="-145.33">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>9</duration>
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="191.39" default-y="-140.33" />
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="173.39" default-y="-120.33">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>9</duration>
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="191.39" default-y="-120.33" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="201.27" default-y="-145.33">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">backward hook</beam>
        </note>
      <note default-x="201.27" default-y="-130.33">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="67" width="271.23">
      <note default-x="7.5" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="7.5" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="29.5" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="22.163907" bezier-y="-25.923107" number="1" />
          </notations>
        </note>
      <note default-x="29.5" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="45.5" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="45.5" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="61.5" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="61.5" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="79.9" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="79.9" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="109.65" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="109.65" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="139.39" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="139.39" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="160.49" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-31.178533" bezier-y="-13.825531" />
          </notations>
        </note>
      <note default-x="160.49" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="185.93" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="12.453081" bezier-y="-7.343774" number="1" />
          </notations>
        </note>
      <note default-x="204.33" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="225.43" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-7.458961" bezier-y="-12.384431" />
          </notations>
        </note>
      <note default-x="247.43" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-33.44" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="7.5" default-y="-110.33">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="29.5" default-y="-115.33">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="30.777183" bezier-y="12.055835" number="1" />
          </notations>
        </note>
      <note default-x="45.5" default-y="-120.33">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="61.5" default-y="-125.33">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="79.9" default-y="-130.33">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="109.65" default-y="-135.33">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="139.39" default-y="-140.33">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="160.49" default-y="-145.33">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-22.565257" bezier-y="24.153412" />
          </notations>
        </note>
      <note default-x="185.93" default-y="-100.33">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="7.458961" bezier-y="12.384431" number="1" />
          </notations>
        </note>
      <note default-x="204.33" default-y="-95.33">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="225.43" default-y="-90.33">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-12.453081" bezier-y="7.343774" />
          </notations>
        </note>
      <note default-x="247.43" default-y="-100.33">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="68" width="193.49">
      <note default-x="8.82" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="26.82" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="36.71" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">forward hook</beam>
        </note>
      <note default-x="52.71" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="70.71" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="80.6" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">backward hook</beam>
        </note>
      <note default-x="96.6" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="114.6" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="124.48" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">forward hook</beam>
        </note>
      <note default-x="140.48" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="158.49" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="168.37" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">backward hook</beam>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="8.82" default-y="-95.33">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="26.82" default-y="-90.33" />
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="36.71" default-y="-95.33">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">forward hook</beam>
        </note>
      <note default-x="52.71" default-y="-110.33">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>9</duration>
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="70.71" default-y="-110.33" />
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="80.6" default-y="-110.33">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">backward hook</beam>
        </note>
      <note default-x="96.6" default-y="-120.33">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>9</duration>
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="114.6" default-y="-120.33" />
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="124.48" default-y="-120.33">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">forward hook</beam>
        </note>
      <note default-x="140.48" default-y="-130.33">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>9</duration>
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="158.49" default-y="-130.33" />
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="168.37" default-y="-130.33">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">backward hook</beam>
        </note>
      </measure>
    <measure number="69" width="468.6">
      <print new-page="yes" page-number="4">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>82.72</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>73.2</staff-distance>
          </staff-layout>
        </print>
      <note default-x="98.73" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-74.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="130.9" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="29.107512" bezier-y="-13.421761" number="1" />
          </notations>
        </note>
      <note default-x="161.64" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="183.74" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="205.19" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="231.03" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="259.79" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-21.447509" bezier-y="-23.689295" />
          </notations>
        </note>
      <note default-x="281.29" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-16.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="313.46" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="35.181932" bezier-y="69.76754" number="1" />
          </notations>
        </note>
      <note default-x="340.3" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="361.75" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="383.2" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="410.04" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="438.8" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="98.73" default-y="-153.2">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="183.74" default-y="-133.2">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="281.29" default-y="-153.2">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="313.46" default-y="-148.2">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">begin</beam>
        <notations>
          <slur type="start" bezier-x="29.431784" bezier-y="28.900675" number="2" />
          </notations>
        </note>
      <note default-x="340.3" default-y="-143.2">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="361.75" default-y="-138.2">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="383.2" default-y="-133.2">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="410.04" default-y="-128.2">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="438.8" default-y="-123.2">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      </measure>
    <measure number="70" width="171.13">
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-71.23" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="12.5" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="30.5" default-y="5" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="121.07" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-118.2">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-13.484321" bezier-y="41.318228" />
          </notations>
        </note>
      <note default-x="84.88" default-y="-133.2">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="71" width="207.32">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-55.83" relative-y="-20">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="12.5" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="60.76" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="109.01" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="157.27" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="96.26" default-y="-123.2">
        <rest measure="yes" />
        <duration>48</duration>
        <voice>5</voice>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="72" width="215.36">
      <note default-x="12.5" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="84.88" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="117.05" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-48.071543" bezier-y="80.575786" />
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <words font-family="Edwin" font-size="10" font-style="italic" default-y="-83.92">dim.</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="149.22" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="181.39" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="100.28" default-y="-123.2">
        <rest measure="yes" />
        <duration>48</duration>
        <voice>5</voice>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="73" width="290.33">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>93.2</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>55.17</staff-distance>
          </staff-layout>
        </print>
      <note default-x="101.67" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="148.38" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="195.1" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="241.81" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="174.63" default-y="-105.17">
        <rest measure="yes" />
        <duration>48</duration>
        <voice>5</voice>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="74" width="206.66">
      <note default-x="12.5" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="3.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="59.22" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="3.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="105.93" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="152.65" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="93.18" default-y="-105.17">
        <rest measure="yes" />
        <duration>48</duration>
        <voice>5</voice>
        <staff>2</staff>
        </note>
      <barline location="right">
        <bar-style>light-light</bar-style>
        </barline>
      </measure>
    <measure number="75" width="301.97">
      <attributes>
        <key>
          <fifths>0</fifths>
          </key>
        </attributes>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">VARIATION III : notes répétées, dialogue de dessus</words></direction-type><staff>2</staff></direction><note default-x="51.02" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="21.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="82.17" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="21.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="113.31" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="21.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="144.45" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="21.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="175.6" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="31.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="206.74" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="31.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="237.89" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="31.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="269.03" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="31.5" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="51.02" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-86.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="51.02" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="51.02" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="82.17" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-86.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="82.17" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="82.17" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="113.31" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-86.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="113.31" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="113.31" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="144.45" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-86.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="144.45" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="144.45" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="175.6" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-76.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="175.6" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="175.6" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="206.74" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-76.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="206.74" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="206.74" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="237.89" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-76.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="237.89" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="237.89" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="269.03" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-76.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="269.03" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="269.03" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="51.02" default-y="-155.17">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="51.02" default-y="-120.17">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="175.6" default-y="-115.17">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="76" width="263.45">
      <note default-x="12.5" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="41.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="43.64" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="41.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="74.79" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="41.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="105.93" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="41.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="137.08" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-66.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="12.5" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="43.64" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-66.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="43.64" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="43.64" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="74.79" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-66.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="74.79" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="74.79" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="105.93" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-66.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="105.93" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="105.93" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="137.08" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-76.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="137.08" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="137.08" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="168.22" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-76.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="168.22" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="168.22" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="199.36" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-76.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="199.36" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="199.36" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="230.51" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-76.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="230.51" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="230.51" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-155.17">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.5" default-y="-120.17">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="137.08" default-y="-115.17">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="77" width="301.88">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>93.2</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>72.5</staff-distance>
          </staff-layout>
        </print>
      <note default-x="60.86" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="36.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="90.76" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="36.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="120.67" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="36.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="150.57" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="36.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="180.47" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="26.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="210.37" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="26.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="240.27" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="26.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="270.18" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="26.5" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="60.86" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-71.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="60.86" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="60.86" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="90.76" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-71.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="90.76" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="90.76" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="120.67" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-71.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="120.67" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="120.67" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="150.57" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-71.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="150.57" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="150.57" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="180.47" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-81.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="180.47" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="180.47" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="210.37" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-81.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="210.37" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="210.37" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="240.27" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-81.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="240.27" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="240.27" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="270.18" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-81.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="270.18" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="270.18" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="60.86" default-y="-157.5">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="60.86" default-y="-122.5">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="180.47" default-y="-132.5">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="78" width="253.51">
      <note default-x="12.5" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="16.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="42.4" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="16.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="72.3" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="16.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="102.21" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="16.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="132.11" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-91.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="12.5" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="42.4" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-91.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="42.4" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="42.4" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="72.3" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-91.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="72.3" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="72.3" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="102.21" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-91.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="102.21" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="102.21" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="132.11" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-101.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="132.11" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="132.11" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="162.01" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-101.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="162.01" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="162.01" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="191.91" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-101.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="191.91" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="191.91" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="221.81" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-101.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="221.81" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="221.81" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-152.5">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.5" default-y="-117.5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="132.11" default-y="-132.5">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="79" width="253.51">
      <note default-x="12.5" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="21.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="42.4" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="21.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="72.3" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="21.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="102.21" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="21.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="132.11" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="31.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="162.01" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="31.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="191.91" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="31.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="221.81" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="31.5" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-86.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="12.5" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="42.4" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-86.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="42.4" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="42.4" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="72.3" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-86.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="72.3" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="72.3" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="102.21" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-86.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="102.21" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="102.21" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="132.11" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-76.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="132.11" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="132.11" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="162.01" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-76.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="162.01" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="162.01" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="191.91" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-76.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="191.91" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="191.91" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="221.81" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-76.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="221.81" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="221.81" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-172.5">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.5" default-y="-137.5">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="132.11" default-y="-132.5">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="80" width="253.51">
      <note default-x="12.5" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="41.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="42.4" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="41.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="72.3" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="41.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="102.21" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="41.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="132.11" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-66.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="12.5" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="42.4" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-66.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="42.4" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="42.4" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="72.3" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-66.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="72.3" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="72.3" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="102.21" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-66.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="102.21" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="102.21" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="132.11" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-76.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="132.11" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="132.11" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="162.01" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-76.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="162.01" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="162.01" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="191.91" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-76.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="191.91" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="191.91" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="221.81" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-76.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="221.81" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="221.81" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-172.5">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.5" default-y="-137.5">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="132.11" default-y="-132.5">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="81" width="340.18">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>93.2</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>45.48</staff-distance>
          </staff-layout>
        </print>
      <note default-x="60.86" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="56.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="95.55" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="56.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="130.24" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="56.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="164.93" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="56.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="199.62" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="36.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="234.31" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="36.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="269" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="36.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="303.69" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="36.5" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="60.86" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-54" />
            </articulations>
          </notations>
        </note>
      <note default-x="60.86" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="60.86" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="95.55" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-54" />
            </articulations>
          </notations>
        </note>
      <note default-x="95.55" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="95.55" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="130.24" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-54" />
            </articulations>
          </notations>
        </note>
      <note default-x="130.24" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="130.24" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="164.93" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-54" />
            </articulations>
          </notations>
        </note>
      <note default-x="164.93" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="164.93" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="199.62" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-71.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="199.62" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="199.62" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="234.31" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-71.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="234.31" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="234.31" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="269" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-71.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="269" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="269" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="303.69" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-71.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="303.69" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="303.69" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="60.86" default-y="-155.48">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="60.86" default-y="-120.48">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="130.24" default-y="-105.48">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="199.62" default-y="-140.48">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="199.62" default-y="-105.48">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="269" default-y="-105.48">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="82" width="257.13">
      <note default-x="12.5" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="29.695305" bezier-y="13.58664" number="1" />
          </notations>
        </note>
      <note default-x="151.26" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-23.436698" bezier-y="22.740473" />
          </notations>
        </note>
      <note default-x="151.26" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="203.29" default-y="-20">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-66.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="12.5" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="47.19" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-66.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="47.19" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="47.19" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="81.88" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-66.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="81.88" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="81.88" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="116.57" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-66.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="116.57" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="116.57" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="12.5" default-y="-160.48">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.5" default-y="-125.48">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="151.26" default-y="-125.48">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="151.26" default-y="-90.48">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="203.29" default-y="-105.48">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="83" width="222.44">
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="12.5" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="22.541976" bezier-y="14.207436" number="1" />
          </notations>
        </note>
      <note default-x="12.5" default-y="30">
        <chord />
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="116.57" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-19.424102" bezier-y="18.239961" />
          </notations>
        </note>
      <note default-x="116.57" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-135.48">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="64.53" default-y="-135.48">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="116.57" default-y="-125.48">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="168.6" default-y="-125.48">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="84" width="242.67">
      <note default-x="12.5" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="30.5" default-y="-5" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="19.359151" bezier-y="18.215505" number="1" />
          </notations>
        </note>
      <note default-x="12.5" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="30.5" default-y="15" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="90.55" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="90.55" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="113.68" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-22.481647" bezier-y="14.18298" />
          </notations>
        </note>
      <note default-x="113.68" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="136.8" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="14.216735" bezier-y="10.211723" number="1" />
          </notations>
        </note>
      <note default-x="136.8" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="188.84" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-12.012065" bezier-y="12.732052" />
          </notations>
        </note>
      <note default-x="188.84" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-115.48">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="64.53" default-y="-115.48">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="136.8" default-y="-125.48">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="85" width="324.63">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>93.2</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>38.83</staff-distance>
          </staff-layout>
        </print>
      <note default-x="59.9" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="172.59" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="210.15" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="start" bezier-x="17.480468" bezier-y="11.389902" number="1" />
          </notations>
        </note>
      <note default-x="247.71" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="285.27" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-18.874151" bezier-y="8.891741" />
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="71.9" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="22.410734" bezier-y="-17.244767" number="1" />
          </notations>
        </note>
      <note default-x="172.59" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-24.811517" bezier-y="-13.565088" />
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="59.9" default-y="-113.83">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-44.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="116.25" default-y="-113.83">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-44.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="172.59" default-y="-123.83">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="247.71" default-y="-123.83">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="86" width="280.36">
      <note default-x="12.5" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="30.5" default-y="5" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="35.897561" bezier-y="-30.145074" number="1" />
          <ornaments>
            <trill-mark />
            </ornaments>
          </notations>
        </note>
      <note default-x="97.01" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="122.05" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="147.09" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="203.44" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <forward>
        <duration>24</duration>
        </forward>
      <forward>
        <duration>12</duration>
        </forward>
      <note default-x="186.6" default-y="15">
        <grace slash="yes" />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="203.44" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="241" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-15.938787" bezier-y="-45.736375" />
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-133.83">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-64.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="68.84" default-y="-133.83">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-64.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="147.09" default-y="-143.83">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-74.3" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="87" width="239.67">
      <note default-x="12.5" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="24.218752" bezier-y="14.871296" number="1" />
          </notations>
        </note>
      <note default-x="12.5" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="125.18" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-21.221426" bezier-y="18.903821" />
          </notations>
        </note>
      <note default-x="125.18" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-128.83">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="68.84" default-y="-128.83">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="125.18" default-y="-118.83">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="181.53" default-y="-118.83">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="88" width="217.76">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-0.7" default-y="-45.56" relative-y="-20">
            <sf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="124.44" />
        </direction>
      <note default-x="18.76" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="22.464831" bezier-y="17.262512" number="1" />
          </notations>
        </note>
      <note default-x="18.76" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="131.45" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-22.975348" bezier-y="16.576983" />
          </notations>
        </note>
      <note default-x="131.45" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="18.76" default-y="-108.83">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="75.1" default-y="-108.83">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="131.45" default-y="-118.83">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="89" width="314.5">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>97.32</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>37.28</staff-distance>
          </staff-layout>
        </print>
      <note default-x="59.9" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="163.1" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="181.1" default-y="25" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="24.3992" bezier-y="16.685219" number="1" />
          </notations>
        </note>
      <note default-x="240.49" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>32nd</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="262.59" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>32nd</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="284.7" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>32nd</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <notations>
          <tuplet type="stop" />
          <slur type="stop" number="1" bezier-x="-23.42597" bezier-y="18.026131" />
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="59.9" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="23.059399" bezier-y="-17.451108" number="1" />
          </notations>
        </note>
      <note default-x="163.1" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-25.428819" bezier-y="-13.771429" />
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="59.9" default-y="-92.28">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="111.5" default-y="-92.28">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="163.1" default-y="-112.28">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-44.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="214.69" default-y="-112.28">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-44.3" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="90" width="218.89">
      <note default-x="12.5" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="64.1" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="64.1" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="115.69" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="115.69" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="167.29" default-y="-20">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-107.28">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="15.943404" bezier-y="-22.223138" number="1" />
          </notations>
        </note>
      <note default-x="115.69" default-y="-142.28">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-25.669939" bezier-y="-9.440032" />
          </notations>
        </note>
      <note default-x="167.29" default-y="-97.28">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="91" width="273.95">
      <barline location="left">
        <bar-style>heavy-light</bar-style>
        <repeat direction="forward" />
        </barline>
      <note default-x="31.36" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="23.548396" bezier-y="18.490536" number="1" />
          </notations>
        </note>
      <note default-x="31.36" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="151.75" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-25.000504" bezier-y="16.474273" />
          </notations>
        </note>
      <note default-x="151.75" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="31.36" default-y="-112.28">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="6.814366" bezier-y="-18.206854" number="1" />
          </notations>
        </note>
      <note default-x="82.96" default-y="-142.28">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-19.193973" bezier-y="-3.084884" />
          </notations>
        </note>
      <note default-x="117.36" default-y="-97.28">
        <rest />
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      <note default-x="151.75" default-y="-117.28">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="7.741349" bezier-y="-17.162676" number="1" />
          </notations>
        </note>
      <note default-x="203.35" default-y="-142.28">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-18.26699" bezier-y="-4.561034" />
          </notations>
        </note>
      <note default-x="237.75" default-y="-97.28">
        <rest />
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="92" width="255.09">
      <note default-x="12.5" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="31.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="64.1" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="31.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="115.69" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="20.015129" bezier-y="12.798563" number="1" />
          </notations>
        </note>
      <note default-x="150.09" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="184.49" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="218.89" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-20.90868" bezier-y="11.279882" />
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-54" />
            </articulations>
          </notations>
        </note>
      <note default-x="64.1" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-54" />
            </articulations>
          </notations>
        </note>
      <note default-x="115.69" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="184.49" default-y="-30">
        <rest />
        <duration>12</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-122.28">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="64.1" default-y="-122.28">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="115.69" default-y="-122.28">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="13.401699" bezier-y="-25.863167" number="1" />
          </notations>
        </note>
      <note default-x="150.09" default-y="-127.28">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="184.49" default-y="-122.28">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="218.89" default-y="-117.28">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-15.631303" bezier-y="-22.52601" />
          </notations>
        </note>
      </measure>
    <measure number="93" width="324.42">
      <print new-page="yes" page-number="5">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>73.81</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>52.13</staff-distance>
          </staff-layout>
        </print>
      <note default-x="59.9" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="17.535238" bezier-y="11.639323" number="1" />
          </notations>
        </note>
      <note default-x="59.9" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="125.58" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-15.571213" bezier-y="14.159652" />
          </notations>
        </note>
      <note default-x="125.58" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="191.26" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="17.535238" bezier-y="11.639323" number="1" />
          </notations>
        </note>
      <note default-x="191.26" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="256.94" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-15.571213" bezier-y="14.159652" />
          </notations>
        </note>
      <note default-x="256.94" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="59.9" default-y="-127.13">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="1.106461" bezier-y="-15.409773" number="1" />
          </notations>
        </note>
      <note default-x="92.74" default-y="-157.13">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-15.446764" bezier-y="-0.287803" />
          </notations>
        </note>
      <note default-x="125.58" default-y="-132.13">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="start" bezier-x="2.073692" bezier-y="-14.448834" number="1" />
          </notations>
        </note>
      <note default-x="158.42" default-y="-157.13">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-14.479533" bezier-y="-1.847192" />
          </notations>
        </note>
      <note default-x="191.26" default-y="-137.13">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="3.135382" bezier-y="-13.482409" number="1" />
          </notations>
        </note>
      <note default-x="224.1" default-y="-157.13">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-13.417844" bezier-y="-3.401096" />
          </notations>
        </note>
      <note default-x="256.94" default-y="-142.13">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="start" bezier-x="4.297313" bezier-y="-12.492353" number="1" />
          </notations>
        </note>
      <note default-x="289.78" default-y="-157.13">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-12.255912" bezier-y="-4.931368" />
          </notations>
        </note>
      </measure>
    <measure number="94" width="277.02">
      <note default-x="12.5" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="3.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="45.34" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="45.34" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="78.18" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="78.18" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="111.02" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="111.02" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="143.86" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="143.86" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="176.7" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="24.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="176.7" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="209.54" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="209.54" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="242.38" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="34.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="242.38" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-122.13">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="143.86" default-y="-112.13">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="95" width="211.34">
      <note default-x="12.5" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="26.431666" bezier-y="13.260601" number="1" />
          </notations>
        </note>
      <note default-x="12.5" default-y="30">
        <chord />
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="111.02" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-23.22801" bezier-y="18.301258" />
          </notations>
        </note>
      <note default-x="111.02" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-142.13">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="61.76" default-y="-142.13">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="111.02" default-y="-132.13">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="160.28" default-y="-132.13">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="96" width="249.65">
      <note default-x="12.5" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="start" />
          <slur type="start" bezier-x="29.850518" bezier-y="15.695823" number="1" />
          </notations>
        </note>
      <note default-x="12.5" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="61.76" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="61.76" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="83.65" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="83.65" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="105.55" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="105.55" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="127.44" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="127.44" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="149.33" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-25.847124" bezier-y="21.66422" />
          </notations>
        </note>
      <note default-x="149.33" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="198.59" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="198.59" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-122.13">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="61.76" default-y="-122.13">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="149.33" default-y="-107.13">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="97" width="258.56">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>130.32</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>95.51</staff-distance>
          </staff-layout>
        </print>
      <note default-x="59.9" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="59.9" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="102.09" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="102.09" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="144.27" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="23.594555" bezier-y="11.735939" number="1" />
          </notations>
        </note>
      <note default-x="144.27" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="172.39" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="172.39" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="200.52" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="200.52" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="228.64" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-19.583021" bezier-y="17.633507" />
          </notations>
        </note>
      <note default-x="228.64" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="59.9" default-y="-170.51">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-44.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="102.09" default-y="-170.51">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-44.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="144.27" default-y="-165.51">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="200.52" default-y="-165.51">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="98" width="200.1">
      <note default-x="12.5" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-23.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="54.68" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="54.68" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="96.87" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="96.87" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="139.05" default-y="-20">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-185.51">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="54.68" default-y="-185.51">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="96.87" default-y="-185.51">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="139.05" default-y="-155.51">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        <repeat direction="backward" />
        </barline>
      </measure>
    <measure number="99" width="310.85">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.62" default-y="-64.3" relative-y="-20">
            <ff />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="124.44" />
        </direction>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">VARIATION IV (ff) : tutti de fanfare, le thème en gloire</words></direction-type><staff>2</staff></direction><note default-x="37.02" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="59.2" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="81.38" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="103.57" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-23.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="125.75" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-33.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="147.94" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          <articulations>
            <staccato default-x="4.93" default-y="-23.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="170.12" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="192.31" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="214.49" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-23.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="236.68" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-13.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="258.86" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-23.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="281.05" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          <articulations>
            <staccato default-x="4.93" default-y="-13.44" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <attributes>
        <clef number="2" after-barline="yes">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <direction placement="above">
        <direction-type>
          <octave-shift type="down" size="8" number="1" default-y="38.37" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="37.02" default-y="-125.51">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" relative-x="-14.19" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="103.57" default-y="-160.51">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="103.57" default-y="-150.51">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="103.57" default-y="-140.51">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="103.57" default-y="-125.51">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="down" size="8" number="1" default-y="48.37" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="170.12" default-y="-115.51">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="236.68" default-y="-150.51">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="236.68" default-y="-140.51">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="236.68" default-y="-125.51">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="236.68" default-y="-115.51">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="100" width="292.91">
      <note default-x="12.5" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <articulations>
            <staccato default-x="4.93" default-y="-16.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="34.68" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="56.87" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="79.05" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="107.82" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="130" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="152.19" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="174.37" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="196.56" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="218.74" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="240.92" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="263.11" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement="above">
        <direction-type>
          <octave-shift type="down" size="8" number="1" default-y="58.37" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="12.5" default-y="-105.51">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="79.05" default-y="-140.51">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="39.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="79.05" default-y="-125.51">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="79.05" default-y="-115.51">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="79.05" default-y="-105.51">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="down" size="8" number="1" default-y="48.37" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="152.19" default-y="-115.51">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="218.74" default-y="-150.51">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="218.74" default-y="-140.51">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="218.74" default-y="-125.51">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="218.74" default-y="-115.51">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="101" width="299.01">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>130.32</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>89.39</staff-distance>
          </staff-layout>
        </print>
      <note default-x="60.86" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <articulations>
            <staccato default-x="4.93" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="79.61" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="99.41" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="119.22" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="137.97" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="156.71" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="175.46" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <articulations>
            <staccato default-x="4.93" default-y="3.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="194.21" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="212.96" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="231.71" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="250.46" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="3.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="269.21" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="60.86" default-y="-139.39">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="60.86" default-y="-104.39">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="119.22" default-y="-139.39">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="119.22" default-y="-104.39">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="175.46" default-y="-149.39">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="175.46" default-y="-114.39">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="231.71" default-y="-149.39">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="231.71" default-y="-114.39">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="102" width="248.55">
      <note default-x="12.5" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="31.25" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="50" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="3.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="68.75" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="87.5" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="106.25" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          <articulations>
            <staccato default-x="4.93" default-y="-16.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="125" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="143.75" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-33.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="162.5" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="181.25" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-44.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="199.99" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="218.74" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-159.39">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="12.5" default-y="-124.39">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="68.75" default-y="-159.39">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="68.75" default-y="-124.39">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="125" default-y="-169.39">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="125" default-y="-134.39">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="181.25" default-y="-169.39">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="181.25" default-y="-134.39">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="103" width="248.55">
      <note default-x="12.5" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="31.25" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="50" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="68.75" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-23.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="87.5" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-33.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="106.25" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          <articulations>
            <staccato default-x="4.93" default-y="-23.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="125" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="143.75" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="162.5" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-23.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="181.25" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-13.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="199.99" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-23.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="218.74" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          <articulations>
            <staccato default-x="4.93" default-y="-13.44" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement="above">
        <direction-type>
          <octave-shift type="down" size="8" number="1" default-y="38.37" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="12.5" default-y="-119.39">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" relative-x="-14.19" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="68.75" default-y="-154.39">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="68.75" default-y="-144.39">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="68.75" default-y="-134.39">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="68.75" default-y="-119.39">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="down" size="8" number="1" default-y="48.37" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="125" default-y="-109.39">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="181.25" default-y="-144.39">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="181.25" default-y="-134.39">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="181.25" default-y="-119.39">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="181.25" default-y="-109.39">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="104" width="266.31">
      <note default-x="12.5" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <articulations>
            <staccato default-x="4.93" default-y="-16.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="31.25" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="50" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="68.75" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="97.51" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="116.26" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="135.01" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="153.76" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="172.51" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="192.31" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="214.41" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="24.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="236.51" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          <articulations>
            <staccato default-x="4.93" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement="above">
        <direction-type>
          <octave-shift type="down" size="8" number="1" default-y="58.37" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="12.5" default-y="-99.39">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="68.75" default-y="-134.39">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="39.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="68.75" default-y="-119.39">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="68.75" default-y="-109.39">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="68.75" default-y="-99.39">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="down" size="8" number="1" default-y="48.37" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="135.01" default-y="-109.39">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="192.31" default-y="-144.39">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="192.31" default-y="-134.39">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="192.31" default-y="-119.39">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="192.31" default-y="-109.39">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="105" width="367.5">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>130.32</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>71.09</staff-distance>
          </staff-layout>
        </print>
      <note default-x="60.86" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="85.67" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="39.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="110.48" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="39.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="135.29" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="39.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="160.09" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="39.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="184.9" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          <articulations>
            <staccato default-x="4.93" default-y="39.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="209.71" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <articulations>
            <staccato default-x="4.93" default-y="34.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="234.52" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="259.32" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="24.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="284.13" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="308.94" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="337.7" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          <articulations>
            <staccato default-x="4.93" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="60.86" default-y="-131.09">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="135.29" default-y="-136.09">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="135.29" default-y="-101.09">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="209.71" default-y="-131.09">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="209.71" default-y="-96.09">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="284.13" default-y="-131.09">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="284.13" default-y="-96.09">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="106" width="257.49">
      <note default-x="12.5" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="37.31" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="62.12" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="3.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="86.92" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="111.73" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="136.54" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          <articulations>
            <staccato default-x="4.93" default-y="-16.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="161.35" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="208.52" default-y="-20">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-151.09">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="12.5" default-y="-131.09">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="86.92" default-y="-131.09">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="86.92" default-y="-116.09">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="161.35" default-y="-151.09">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="161.35" default-y="-131.09">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="208.52" default-y="-131.09">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="107" width="218.71">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-79.02" relative-y="-20">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <direction placement="below">
        <direction-type>
          <words default-x="16.34" default-y="-74.02" relative-y="-25" font-style="italic">dolce</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">(second volet dolce de la var. IV)</words></direction-type><staff>2</staff></direction><note default-x="12.5" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="30.5" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="15.021999" bezier-y="-17.042291" number="1" />
          </notations>
        </note>
      <note default-x="83.26" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-20.644733" bezier-y="-9.481306" />
          </notations>
        </note>
      <note default-x="114.71" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="132.71" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="15.947756" bezier-y="-15.862546" number="1" />
          </notations>
        </note>
      <note default-x="185.46" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-19.718976" bezier-y="-10.82189" />
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-131.09">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="59.67" default-y="-136.09">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="59.67" default-y="-126.09">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="114.71" default-y="-131.09">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="161.88" default-y="-136.09">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="161.88" default-y="-126.09">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="108" width="218.71">
      <note default-x="12.5" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="30.5" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="16.566576" bezier-y="-15.067079" number="1" />
          </notations>
        </note>
      <note default-x="83.26" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-19.100156" bezier-y="-11.689839" />
          </notations>
        </note>
      <note default-x="114.71" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="132.71" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="18.155462" bezier-y="12.977956" number="1" />
          </notations>
        </note>
      <note default-x="185.46" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-17.51127" bezier-y="13.834868" />
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-131.09">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="59.67" default-y="-136.09">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="59.67" default-y="-126.09">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="114.71" default-y="-131.09">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="161.88" default-y="-136.09">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="161.88" default-y="-126.09">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="109" width="326.62">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>130.32</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>52.13</staff-distance>
          </staff-layout>
        </print>
      <note default-x="60.86" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="7.844399" bezier-y="-9.57851" number="1" />
          </notations>
        </note>
      <note default-x="93.86" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-8.787273" bezier-y="-8.721599" />
          </notations>
        </note>
      <note default-x="126.85" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="start" bezier-x="6.047648" bezier-y="-11.108616" number="1" />
          </notations>
        </note>
      <note default-x="159.85" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-10.584024" bezier-y="-6.924871" />
          </notations>
        </note>
      <note default-x="192.84" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="7.844399" bezier-y="-9.57851" number="1" />
          </notations>
        </note>
      <note default-x="225.84" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-8.787273" bezier-y="-8.721599" />
          </notations>
        </note>
      <note default-x="258.83" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="start" bezier-x="6.93619" bezier-y="-10.364462" number="1" />
          </notations>
        </note>
      <note default-x="291.83" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-9.695482" bezier-y="-7.844134" />
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="60.86" default-y="-102.13">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="3.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="126.85" default-y="-102.13">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="3.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="192.84" default-y="-112.13">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="258.83" default-y="-112.13">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="110" width="278.26">
      <note default-x="12.5" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="6.93619" bezier-y="-10.364462" number="1" />
          </notations>
        </note>
      <note default-x="45.5" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-9.695482" bezier-y="-7.844134" />
          </notations>
        </note>
      <note default-x="78.49" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="start" bezier-x="6.93619" bezier-y="-10.364462" number="1" />
          </notations>
        </note>
      <note default-x="111.49" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-9.695482" bezier-y="-7.844134" />
          </notations>
        </note>
      <note default-x="144.48" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="177.48" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-64.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="210.47" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-69.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="243.47" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-74.3" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-122.13">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="-87.13">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="78.49" default-y="-122.13">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="78.49" default-y="-87.13">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="144.48" default-y="-132.13">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="144.48" default-y="-97.13">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="111" width="228.77">
      <note default-x="12.5" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="30.5" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="15.963253" bezier-y="-17.377972" number="1" />
          </notations>
        </note>
      <note default-x="86.74" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-21.458008" bezier-y="-9.816987" />
          </notations>
        </note>
      <note default-x="119.73" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="137.74" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="16.868929" bezier-y="-16.192908" number="1" />
          </notations>
        </note>
      <note default-x="193.97" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-20.552332" bezier-y="-11.152251" />
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-112.13">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="61.99" default-y="-117.13">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="61.99" default-y="-107.13">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="119.73" default-y="-112.13">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="169.23" default-y="-117.13">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="169.23" default-y="-107.13">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="112" width="228.77">
      <note default-x="12.5" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="30.5" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="17.473642" bezier-y="-15.394977" number="1" />
          </notations>
        </note>
      <note default-x="86.74" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-19.947619" bezier-y="-12.017737" />
          </notations>
        </note>
      <note default-x="119.73" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="137.74" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="15.374692" bezier-y="-18.145329" number="1" />
          </notations>
        </note>
      <note default-x="193.97" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-22.046568" bezier-y="-8.920927" />
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-112.13">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="61.99" default-y="-117.13">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="61.99" default-y="-107.13">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="119.73" default-y="-112.13">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="169.23" default-y="-117.13">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="169.23" default-y="-107.13">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="113" width="328.46">
      <print new-page="yes" page-number="6">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>70</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>66.31</staff-distance>
          </staff-layout>
        </print>
      <note default-x="60.86" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="78.86" default-y="-5" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="22.424578" bezier-y="13.489129" number="1" />
          </notations>
        </note>
      <note default-x="149.46" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-20.722343" bezier-y="15.981326" />
          </notations>
        </note>
      <note default-x="184.9" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="17.462989" bezier-y="-20.27365" number="1" />
          </notations>
        </note>
      <note default-x="220.34" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="255.78" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="291.22" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-21.023999" bezier-y="-16.479928" />
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="60.86" default-y="-30">
        <rest />
        <duration>12</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="114.02" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="149.46" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>24</duration>
        </backup>
      <note default-x="60.86" default-y="-126.31">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="114.02" default-y="-141.31">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" orientation="under" placement="below" bezier-x="13.675274" bezier-y="-17.016716" number="1" />
          </notations>
        </note>
      <note default-x="184.9" default-y="-126.31">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-20.035576" bezier-y="-8.66934" />
          <articulations>
            <staccato placement="below" default-x="1.93" default-y="-54" />
            </articulations>
          </notations>
        </note>
      <note default-x="255.78" default-y="-126.31">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato placement="below" default-x="1.93" default-y="-54" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <forward>
        <duration>24</duration>
        </forward>
      <note default-x="184.9" default-y="-91.31">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>6</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="220.34" default-y="-96.31">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>6</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="255.78" default-y="-101.31">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>6</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="291.22" default-y="-106.31">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>6</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      </measure>
    <measure number="114" width="226.93">
      <note default-x="12.5" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="65.66" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="118.82" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="171.98" default-y="-10">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <forward>
        <duration>24</duration>
        </forward>
      <forward>
        <duration>12</duration>
        </forward>
      <note default-x="171.98" default-y="-40">
        <rest />
        <duration>12</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-111.31">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="-101.31">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="65.66" default-y="-111.31">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="65.66" default-y="-101.31">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="118.82" default-y="-111.31">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="118.82" default-y="-101.31">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="171.98" default-y="-126.31">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="115" width="244.65">
      <note default-x="12.5" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="30.5" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="14.915743" bezier-y="-21.331371" number="1" />
          </notations>
        </note>
      <note default-x="92.24" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-25.277463" bezier-y="-6.2094" />
          </notations>
        </note>
      <note default-x="127.68" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="145.68" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="15.737328" bezier-y="-20.204821" number="1" />
          </notations>
        </note>
      <note default-x="207.42" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-24.455878" bezier-y="-7.603179" />
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-91.31">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="65.66" default-y="-136.31">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="127.68" default-y="-96.31">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="180.84" default-y="-131.31">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="116" width="262.37">
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-75.94" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="12.5" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="65.66" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="118.82" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="22.843647" bezier-y="-14.566839" number="1" />
          </notations>
        </note>
      <note default-x="154.26" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="189.7" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="225.13" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-20.029106" bezier-y="-18.244449" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-111.31">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="-101.31">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="65.66" default-y="-111.31">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="65.66" default-y="-101.31">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="118.82" default-y="-111.31">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="118.82" default-y="-101.31">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="189.7" default-y="-126.31">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="117" width="339.6">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>119.65</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>81.33</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-72.39" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="63.12" default-y="-30">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="10.879405" bezier-y="-7.116531" number="1" />
          </notations>
        </note>
      <note default-x="97.46" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-6.427303" bezier-y="-11.300276" />
          </notations>
        </note>
      <note default-x="131.79" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="start" bezier-x="9.115529" bezier-y="-8.905913" number="1" />
          </notations>
        </note>
      <note default-x="166.13" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-8.191179" bezier-y="-9.762824" />
          </notations>
        </note>
      <note default-x="200.46" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="10.006408" bezier-y="-8.031047" number="1" />
          </notations>
        </note>
      <note default-x="234.8" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-7.3003" bezier-y="-10.551375" />
          </notations>
        </note>
      <note default-x="269.13" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="start" bezier-x="10.006408" bezier-y="-8.031047" number="1" />
          </notations>
        </note>
      <note default-x="303.46" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-7.3003" bezier-y="-10.551375" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="63.12" default-y="-131.33">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="31.524226" bezier-y="21.587134" number="1" />
          </notations>
        </note>
      <note default-x="131.79" default-y="-136.33">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="200.46" default-y="-141.33">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="269.13" default-y="-146.33">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-29.872605" bezier-y="23.820341" />
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="63.12" default-y="-161.33">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="118" width="220.31">
      <note default-x="12.5" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="64" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="115.5" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="12.526372" bezier-y="-12.184748" number="1" />
          </notations>
        </note>
      <note default-x="167" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-12.072713" bezier-y="-12.06524" />
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-126.33">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="115.5" default-y="-121.33">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-161.33">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="115.5" default-y="-161.33">
        <rest />
        <duration>24</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="119" width="237.47">
      <note default-x="12.5" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="30.5" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="17.664004" bezier-y="-16.472372" number="1" />
          </notations>
        </note>
      <note default-x="89.75" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-21.276089" bezier-y="-11.431715" />
          </notations>
        </note>
      <note default-x="124.09" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="142.09" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="18.257235" bezier-y="-15.672524" number="1" />
          </notations>
        </note>
      <note default-x="201.34" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-20.682858" bezier-y="-12.295284" />
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-141.33">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="64" default-y="-146.33">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="64" default-y="-136.33">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="124.09" default-y="-141.33">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="175.59" default-y="-146.33">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="175.59" default-y="-136.33">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="120" width="265.04">
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-93.84" spread="11.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="12.5" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="30.5" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="13.747602" bezier-y="7.385468" number="1" />
          </notations>
        </note>
      <note default-x="56.02" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">forward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-8.191621" bezier-y="13.283037" />
          </notations>
        </note>
      <note default-x="78.91" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="96.92" default-y="-5" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="start" bezier-x="13.354867" bezier-y="7.861384" number="1" />
          </notations>
        </note>
      <note default-x="122.44" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-8.584356" bezier-y="12.902041" />
          </notations>
        </note>
      <note default-x="145.33" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="163.33" default-y="5" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="13.354867" bezier-y="7.861384" number="1" />
          </notations>
        </note>
      <note default-x="188.85" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">forward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-8.584356" bezier-y="12.902041" />
          </notations>
        </note>
      <note default-x="211.74" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
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
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-141.33">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="78.91" default-y="-146.33">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="78.91" default-y="-136.33">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="145.33" default-y="-141.33">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="211.74" default-y="-146.33">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="211.74" default-y="-136.33">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="121" width="265.29">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>119.65</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>74.48</staff-distance>
          </staff-layout>
        </print>
      <note default-x="60.86" default-y="-20">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="111.52" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="162.18" default-y="-20">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="212.83" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="60.86" default-y="-134.48">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="111.52" default-y="-124.48">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="162.18" default-y="-134.48">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="212.83" default-y="-119.48">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="122" width="216.93">
      <note default-x="12.5" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="113.81" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="164.47" default-y="-20">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-139.48">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="63.16" default-y="-174.48">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-69.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="113.81" default-y="-174.48">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-69.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="164.47" default-y="-134.48">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="123" width="284.47">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-4.18" default-y="-44.34" relative-y="-20">
            <f />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="106.67" />
        </direction>
      <note default-x="12.5" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="34.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="12.5" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="80.04" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="34.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="80.04" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="80.04" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="147.59" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="147.59" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="147.59" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="215.13" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="215.13" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="215.13" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-119.48">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="34.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="-89.48">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="46.27" default-y="-119.48">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="24.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="46.27" default-y="-99.48">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="80.04" default-y="-119.48">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="34.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="80.04" default-y="-89.48">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="113.81" default-y="-119.48">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="24.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="113.81" default-y="-99.48">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="147.59" default-y="-119.48">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="147.59" default-y="-94.48">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="181.36" default-y="-119.48">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="181.36" default-y="-104.48">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="215.13" default-y="-119.48">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="215.13" default-y="-94.48">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="248.9" default-y="-119.48">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="248.9" default-y="-104.48">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="124" width="295.73">
      <note default-x="12.5" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="12.5" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="12.5" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="46.27" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="68.79" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="91.3" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="125.07" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="158.84" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="192.61" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="226.39" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="260.16" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-119.48">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="12.5" default-y="-109.48">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="46.27" default-y="-119.48">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="68.79" default-y="-119.48">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="91.3" default-y="-119.48">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="125.07" default-y="-119.48">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="158.84" default-y="-119.48">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="192.61" default-y="-119.48">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="226.39" default-y="-119.48">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="260.16" default-y="-119.48">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      </measure>
    <measure number="125" width="274.71">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>119.65</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>95.51</staff-distance>
          </staff-layout>
        </print>
      <note default-x="60.86" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="34.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="60.86" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="60.86" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="113.45" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="34.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="113.45" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="113.45" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="166.03" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="166.03" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="166.03" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="218.62" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="218.62" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="218.62" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="60.86" default-y="-140.51">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="34.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="60.86" default-y="-110.51">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="87.16" default-y="-140.51">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="24.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="87.16" default-y="-120.51">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="113.45" default-y="-140.51">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="34.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="113.45" default-y="-110.51">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="139.74" default-y="-140.51">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="24.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="139.74" default-y="-120.51">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="166.03" default-y="-140.51">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="166.03" default-y="-115.51">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="192.33" default-y="-140.51">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="192.33" default-y="-125.51">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="218.62" default-y="-140.51">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="218.62" default-y="-115.51">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="244.91" default-y="-140.51">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="244.91" default-y="-125.51">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="126" width="236.06">
      <note default-x="12.5" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="12.5" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="12.5" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="38.79" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="56.79" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="74.8" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="101.09" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="127.38" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="153.67" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-44.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="179.97" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="206.26" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-140.51">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="12.5" default-y="-130.51">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="38.79" default-y="-140.51">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">begin</beam>
        </note>
      <note default-x="56.79" default-y="-140.51">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">end</beam>
        </note>
      <note default-x="74.8" default-y="-140.51">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="101.09" default-y="-140.51">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="127.38" default-y="-140.51">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="153.67" default-y="-145.51">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="3.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="179.97" default-y="-150.51">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="206.26" default-y="-155.51">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="127" width="270.45">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-2" default-y="-64.3" relative-y="-20">
            <ff />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="124.44" />
        </direction>
      <note default-x="12.5" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="33.24" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="53.98" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="74.72" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-23.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="95.46" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-33.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="116.2" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          <articulations>
            <staccato default-x="4.93" default-y="-23.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="136.95" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="157.69" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="178.43" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-23.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="199.17" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-13.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="219.91" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-23.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="240.65" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          <articulations>
            <staccato default-x="4.93" default-y="-13.44" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement="above">
        <direction-type>
          <octave-shift type="down" size="8" number="1" default-y="38.37" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="12.5" default-y="-125.51">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" relative-x="-14.19" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="74.72" default-y="-160.51">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="74.72" default-y="-150.51">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="74.72" default-y="-140.51">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="74.72" default-y="-125.51">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="down" size="8" number="1" default-y="48.37" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="136.95" default-y="-115.51">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="199.17" default-y="-150.51">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="199.17" default-y="-140.51">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="199.17" default-y="-125.51">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="199.17" default-y="-115.51">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="128" width="281.19">
      <note default-x="12.5" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <articulations>
            <staccato default-x="4.93" default-y="-16.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="33.24" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="53.98" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="74.72" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="103.49" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="124.23" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="144.97" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="165.71" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="186.45" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="207.19" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="229.29" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="24.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="251.39" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          <articulations>
            <staccato default-x="4.93" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement="above">
        <direction-type>
          <octave-shift type="down" size="8" number="1" default-y="58.37" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="12.5" default-y="-105.51">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="74.72" default-y="-140.51">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="39.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="74.72" default-y="-125.51">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="74.72" default-y="-115.51">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="74.72" default-y="-105.51">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="down" size="8" number="1" default-y="48.37" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="144.97" default-y="-115.51">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <direction placement="above">
        <direction-type>
          <octave-shift type="stop" size="8" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="207.19" default-y="-150.51">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="207.19" default-y="-140.51">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="207.19" default-y="-125.51">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="207.19" default-y="-115.51">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="129" width="267.6">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>119.65</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>89.09</staff-distance>
          </staff-layout>
        </print>
      <note default-x="47.86" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <articulations>
            <staccato default-x="4.93" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="66.26" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="84.02" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="101.77" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="119.52" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="3.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="137.28" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="155.03" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <articulations>
            <staccato default-x="4.93" default-y="-33.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="172.78" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-33.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="190.54" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="208.29" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-44.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="226.04" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="243.79" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="47.86" default-y="-139.09">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="47.86" default-y="-104.09">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="101.77" default-y="-139.09">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="101.77" default-y="-104.09">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="155.03" default-y="-134.09">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="155.03" default-y="-99.09">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="208.29" default-y="-134.09">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="208.29" default-y="-99.09">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="130" width="262.71">
      <note default-x="8.82" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="29.92" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="51.02" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="72.12" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="93.23" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="114.33" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="132.08" default-y="-20">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="8.82" default-y="-154.09">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="132.08" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <articulations>
            <staccato default-x="4.93" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="153.18" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="174.28" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="195.38" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="216.49" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="237.59" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          <articulations>
            <staccato default-x="4.93" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="131" width="266.06">
      <note default-x="8.82" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="8.82" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="72.12" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="72.12" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="135.43" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="135.43" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="198.73" default-y="-20">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="8.82" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="29.92" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="51.02" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="72.12" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="93.23" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="114.33" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="135.43" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="156.53" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="177.63" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="198.73" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="219.83" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="240.94" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="8.82" default-y="-139.09">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="72.12" default-y="-139.09">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="135.43" default-y="-144.09">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-51.98" />
            </articulations>
          </notations>
        </note>
      <note default-x="198.73" default-y="-159.09">
        <rest />
        <duration>12</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="132" width="266.06">
      <note default-x="8.82" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="8.82" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="72.12" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="72.12" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="135.43" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="135.43" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="198.73" default-y="-20">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="8.82" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="29.92" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="51.02" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="72.12" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="93.23" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="114.33" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="135.43" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="156.53" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="177.63" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="198.73" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="219.83" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="240.94" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="8.82" default-y="-149.09">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-54" />
            </articulations>
          </notations>
        </note>
      <note default-x="72.12" default-y="-149.09">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-54" />
            </articulations>
          </notations>
        </note>
      <note default-x="135.43" default-y="-144.09">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-51.98" />
            </articulations>
          </notations>
        </note>
      <note default-x="198.73" default-y="-159.09">
        <rest />
        <duration>12</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="133" width="380.92">
      <print new-page="yes" page-number="7">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>70</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>89.09</staff-distance>
          </staff-layout>
        </print>
      <note default-x="60.86" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="60.86" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="140.02" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="140.02" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="219.18" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="219.18" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="298.35" default-y="-20">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="60.86" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="87.25" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="113.64" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="140.02" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="166.41" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="192.8" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="219.18" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="245.57" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="271.96" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="298.35" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="324.73" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="351.12" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="60.86" default-y="-139.09">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="140.02" default-y="-139.09">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="219.18" default-y="-144.09">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-51.98" />
            </articulations>
          </notations>
        </note>
      <note default-x="298.35" default-y="-159.09">
        <rest />
        <duration>12</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="134" width="251.5">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">point d'orgue — suspension avant la coda</words></direction-type><staff>2</staff></direction><note default-x="12.5" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="91.66" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="91.66" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="174.44" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <fermata type="upright" default-y="19" relative-y="5" />
          </notations>
        </note>
      <note default-x="174.44" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="174.44" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="38.89" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="65.27" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="91.66" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="118.05" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="144.43" default-y="-119.09">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="162.43" default-y="-144.09">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <fermata type="upright" default-y="14.28" relative-y="5" />
          </notations>
        </note>
      <note default-x="174.44" default-y="-139.09">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="174.44" default-y="-119.09">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-149.09">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-54" />
            </articulations>
          </notations>
        </note>
      <note default-x="91.66" default-y="-149.09">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-54" />
            </articulations>
          </notations>
        </note>
      <forward>
        <duration>24</duration>
        </forward>
      </measure>
    <measure number="135" width="215">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.78" default-y="-62.76" relative-y="-20">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <sound tempo="58" />
      <sound tempo="58" />
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="7">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">CODA pp : pédale de dominante, le thème qui s'endort…</words></direction-type><staff>2</staff></direction><note default-x="12.5" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="62.67" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="62.67" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="112.85" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="112.85" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="163.02" default-y="-20">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-169.09">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.5" default-y="-134.09">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="112.85" default-y="-149.09">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="136" width="215">
      <note default-x="12.5" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="62.67" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="62.67" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="112.85" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-64.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="112.85" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="163.02" default-y="-20">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-169.09">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.5" default-y="-134.09">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="112.85" default-y="-149.09">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="137" width="315.75">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>227.08</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="64.08" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="126.55" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="189.02" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="251.49" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="64.08" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="35.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="64.08" default-y="-110">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="64.08" default-y="-100">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="64.08" default-y="-85">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="138" width="232.94">
      <note default-x="12.5" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="74.97" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="137.44" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="35.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="-110">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.5" default-y="-100">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="12.5" default-y="-85">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="139" width="280.79">
      <note default-x="29.12" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="91.59" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="154.06" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="3.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="216.52" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="3.44" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="17.12" default-y="-105">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="29.12" default-y="-100">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="29.12" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="29.12" default-y="-80">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="140" width="232.94">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">…G7 complet, dernière tension pianissimo</words></direction-type><staff>2</staff></direction><note default-x="12.5" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="74.97" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="137.44" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-44.08" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.5" default-y="-100">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.5" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="12.5" default-y="-80">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="141" width="298.78">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>227.08</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="64.08" default-y="10">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="122.31" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="66.98" />
            </articulations>
          </notations>
        </note>
      <note default-x="180.53" default-y="15">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="238.76" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="56.98" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="64.08" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-49" />
            </articulations>
          </notations>
        </note>
      <note default-x="122.31" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-49" />
            </articulations>
          </notations>
        </note>
      <note default-x="180.53" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-44" />
            </articulations>
          </notations>
        </note>
      <note default-x="238.76" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-44" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="64.08" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <tenuto default-x="0.18" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="64.08" default-y="-110">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="64.08" default-y="-100">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="64.08" default-y="-85">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="142" width="252.62">
      <note default-x="17.92" default-y="25">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="76.15" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="51.98" />
            </articulations>
          </notations>
        </note>
      <note default-x="134.37" default-y="15">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="192.59" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="41.98" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="17.92" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-33.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="76.15" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-33.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="134.37" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="-2.82" default-y="-44" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="17.92" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <articulations>
            <tenuto default-x="0.18" default-y="24.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="17.92" default-y="-110">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="17.92" default-y="-100">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="17.92" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="143" width="263.82">
      <note default-x="29.12" default-y="20">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="87.35" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="46.98" />
            </articulations>
          </notations>
        </note>
      <note default-x="145.57" default-y="10">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="203.8" default-y="35">
        <pitch>
          <step>F</step>
          <octave>6</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="71.98" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="29.12" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-44" />
            </articulations>
          </notations>
        </note>
      <note default-x="87.35" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-44" />
            </articulations>
          </notations>
        </note>
      <note default-x="145.57" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="203.8" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-46.5" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="17.12" default-y="-105">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="29.12" default-y="-100">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="29.12" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="29.12" default-y="-80">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="144" width="247.2">
      <note default-x="12.5" default-y="0">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="70.72" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="61.98" />
            </articulations>
          </notations>
        </note>
      <note default-x="128.95" default-y="-10">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="187.17" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="51.98" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-54" />
            </articulations>
          </notations>
        </note>
      <note default-x="70.72" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-54" />
            </articulations>
          </notations>
        </note>
      <note default-x="128.95" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="-2.82" default-y="-59" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.5" default-y="-100">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.5" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="12.5" default-y="-80">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="145" width="315.37">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>227.08</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="60.86" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="60.86" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="124.04" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="124.04" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="187.22" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="187.22" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="250.39" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-23.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="250.39" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="60.86" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="60.86" default-y="-95">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="187.22" default-y="-125">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="146" width="267.01">
      <note default-x="12.5" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.5" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="75.68" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="75.68" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="138.85" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="138.85" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="202.03" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-23.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="202.03" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.5" default-y="-95">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="138.85" default-y="-125">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="147" width="267.01">
      <harmony placement="above" print-frame="no"><root><root-step>C</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">I — conclusion, l'innocence rendue</words></direction-type><staff>2</staff></direction><note default-x="12.5" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="12.5" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="75.68" default-y="-20">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="138.85" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="138.85" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="202.03" default-y="-20">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.5" default-y="-110">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.5" default-y="-95">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="75.68" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="138.85" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="138.85" default-y="-110">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="138.85" default-y="-95">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="202.03" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="148" width="213.03">
      <note default-x="12.5" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="12.5" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="107.27" default-y="-20">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="12.5" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.5" default-y="-110">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="12.5" default-y="-95">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="107.27" default-y="-125">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        </barline>
      </measure>
    </part>
  </score-partwise>`;

export const HAYDN94_ANALYSE: MesureAnalyse[] = [
  { numero: 1,   nom: "Do",     degre: "I (thème, arpège nu)",           fonction: "T" },
  { numero: 4,   nom: "Sol",    degre: "V (demi-cadence, antécédent)",   fonction: "D" },
  { numero: 8,   nom: "Sol",    degre: "V (fin du thème)",               fonction: "D" },
  { numero: 9,   nom: "Do",     degre: "I (reprise pp)",                 fonction: "T" },
  { numero: 16,  nom: "Sol",    degre: "V (LA SURPRISE, ff)",            fonction: "D" },
  { numero: 17,  nom: "Do",     degre: "I (retour, forme binaire)",      fonction: "T" },
  { numero: 33,  nom: "Do",     degre: "I (variation I, contrechant)",   fonction: "T" },
  { numero: 49,  nom: "Do m",   degre: "i (variation II, le minore)",    fonction: "T" },
  { numero: 75,  nom: "Do",     degre: "I (variation III, notes répétées)", fonction: "T" },
  { numero: 99,  nom: "Do",     degre: "I (variation IV, fanfare)",      fonction: "T" },
  { numero: 134, nom: "Do° 6",  degre: "vii°6 (point d'orgue, suspension)", fonction: "D" },
  { numero: 135, nom: "Sol (pédale)", degre: "V (coda)",                 fonction: "D" },
  { numero: 140, nom: "Sol7",   degre: "V7 (complet — Ré/Fa tenus depuis m.139)", fonction: "D" },
  { numero: 147, nom: "Do",     degre: "I (conclusion)",                 fonction: "T" },
];

export const HAYDN94_ANALYSE_NARRATIVE: AnalyseNarrative = {
  tonalite: "Do majeur du début à la fin — la seule incursion hors de la tonique est le passage par ut mineur de la variation II (m.49-74).",
  metrique: "2/4. Andante (♩=64), avec un léger ralentissement (♩=58) pile au début de la coda (m.135).",
  forme: "Thème et quatre variations avec coda, forme binaire à reprises (thème m.1-16, variation I m.17-48 [en 2 volets A/B], II m.49-74, III m.75-98, IV m.99-134, coda m.135-148).",
  sections: [
    {
      label: "Mesures 1-8",
      titre: "Le thème : une nudité calculée",
      chiffrage: "I ... V (antécédent) | I ... V (conséquent)",
      fonctions: "T ... D | T ... D",
      texte: "Huit mesures d'un dépouillement voulu : l'arpège de Do égrené note à note (Do-Mi, puis Sol-Mi), l'harmonie la plus élémentaire du langage classique — la polarité tonique-dominante à l'état pur, ponctuée d'une demi-cadence sur Sol à la mesure 4 puis encore à la mesure 8. Il fallait un thème-comptine pour que les variations aient tout à habiller, et pour que la surprise détonne sur fond d'innocence.",
    },
    {
      label: "Mesures 9-16",
      titre: "La reprise pp, et la surprise",
      chiffrage: "I ... V",
      fonctions: "T ... D",
      texte: "Le même thème revient note pour note, mais pianissimo — la berceuse-piège, l'auditeur invité à somnoler. Puis, à la mesure 16, l'accord : un Sol majeur qui couvre tout le clavier (Sol2 à Sol5), ff, sur le temps faible. Harmoniquement, c'est d'une banalité parfaite — le V que la demi-cadence du thème appelait de toute façon. Rien d'étranger, rien de chromatique : la surprise est une dynamique et une orchestration, pas une harmonie.",
    },
    {
      label: "Mesures 17-32",
      titre: "B : le retour (forme binaire du thème)",
      chiffrage: "I ...",
      fonctions: "T ...",
      texte: "Après le sursaut, le second volet du thème referme sa forme binaire : un bref détour, puis le retour assuré à la tonique, comme si de rien n'était.",
    },
    {
      label: "Mesures 33-48",
      titre: "Variation I : le thème + contrechant",
      chiffrage: "I ...",
      fonctions: "T ...",
      texte: "Le thème reste intact — même arpège Do-Mi-Sol, même charpente — mais un contrechant en doubles croches vient le habiller. La variation par addition : l'harmonie ne change pas, seule la texture s'enrichit.",
    },
    {
      label: "Mesures 49-74",
      titre: "Variation II : le minore",
      chiffrage: "i ... (détours vers III, Mi♭ majeur)",
      fonctions: "T ... SD/D",
      texte: "L'ombre réglementaire du cycle de variations classique : ut mineur, ff, un Do puis un Mi♭ martelés sur tout le clavier avant des détours vers Mi♭ majeur (le relatif majeur) — la seule vraie excursion harmonique de tout le mouvement, entre deux volets qui restent, eux, fermement ancrés sur la tonique.",
    },
    {
      label: "Mesures 75-98",
      titre: "Variation III : notes répétées",
      chiffrage: "I ...",
      fonctions: "T ...",
      texte: "Retour au majeur : le même accord de Do frappé quatre fois de suite, puis son premier renversement encore quatre fois — des notes répétées et des dialogues de dessus, l'inverse texturale du contrechant fleuri de la variation I.",
    },
    {
      label: "Mesures 99-134",
      titre: "Variation IV : fanfare, et le point d'orgue",
      chiffrage: "I ... vii°6 (suspension)",
      fonctions: "T ... D",
      texte: "Le tutti de fanfare : le thème en gloire cuivrée, projeté en arpèges qui montent jusqu'au sommet du clavier, puis un second volet dolce qui apaise la dynamique. La variation s'arrête sur un point d'orgue suspensif à la mesure 134 — un accord de Do diminué (1er renversement, basse Mi♭) qui tient la respiration avant la coda.",
    },
    {
      label: "Mesures 135-148",
      titre: "Coda : la tendresse",
      chiffrage: "V (pédale) ... V7 (complet, m.140) ... I",
      fonctions: "D ... D ... T",
      texte: "Le plus beau moment harmonique du mouvement : le thème se rendort pianissimo sur une pédale de dominante, s'épaissit un instant en Sol7 complet à la mesure 140 — Ré et Fa sonnent déjà, tenus depuis la mesure précédente, seuls Sol et Si sont frappés à neuf : la seule septième vraiment savourée de la pièce, à la dynamique la plus faible de tout le mouvement — puis se résout sur les deux dernières mesures de Do majeur. La blague ouvrait le mouvement ; une tendresse le referme.",
    },
  ],
  synthese: [
    {
      titre: "La surprise est une dynamique, pas une harmonie",
      texte: "L'accord de la mesure 16 est un V à sa place exacte, celui que la demi-cadence du thème appelait de toute façon — rien d'étranger, rien de chromatique. Haydn démontre par l'absurde que l'effet ne loge pas dans l'accord mais dans son statut : le même V, murmuré, endort ; assené, il fait bondir. Le pendant comique exact des sforzando du Grave de Beethoven (son élève, sept ans plus tard) : même levier rhétorique, retourné vers le rire.",
    },
    {
      titre: "Le degré zéro de K.545, poussé jusqu'à la candeur volontaire",
      texte: "Le thème de la Surprise (l'arpège nu, l'alternance tonique-dominante) est encore plus dépouillé que celui de la Sonate K.545 de Mozart (cours 28, trois ans plus tôt) — Mozart faisait simple par élégance, Haydn fait simple par stratégie : il faut un thème-comptine pour que les quatre variations aient tout à habiller, et pour que la surprise détonne sur fond d'innocence.",
    },
    {
      titre: "L'humour comme catégorie harmonique",
      texte: "Entre K.545 (la grammaire transparente) et la Pathétique (la grammaire dramatisée), la Surprise documente une troisième voie : la grammaire jouée, au sens ludique. Rien ne prouve mieux l'existence d'une norme que la possibilité d'en rire — la mesure 16 est la démonstration en un accord que la tonalité classique était une langue commune, condition de tout ce que le reste du corpus raconte ensuite, quand cette même langue se dramatise, se suspend, se dissout et se réinvente.",
    },
  ],
};
