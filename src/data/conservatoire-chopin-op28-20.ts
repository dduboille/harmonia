import type { MesureAnalyse, AnalyseNarrative } from "./conservatoire-bwv846";

/**
 * data/conservatoire-chopin-op28-20.ts
 * Harmonia — Prélude op.28 n°20 en do mineur de Chopin, INTÉGRAL (13
 * mesures), pour la section "conservatoire" du cours 24 (niveau 2 — les
 * sixtes augmentées).
 *
 * MusicXML VERBATIM fourni par Dany (export MuseScore Studio 4.7.4, fichier
 * « chopin-op28-20-annote.musicxml », source
 * musescore.com/user/49096755/scores/8557367) — jamais reconstruit à la
 * main, cf. feedback-partitions-verbatim. Do mineur (fifths=-3), 4/4. Avec
 * <harmony> ET chiffrage romain complet en <direction><words> (même
 * convention que la Pathétique, cours39 — pas de <lyric>).
 *
 * Chiffrage recoupé mesure par mesure contre les 49 balises <harmony>
 * réelles (extraction automatisée) : concordance totale, y compris les deux
 * annotations non standard "(pass.)" (mesure 6/10, La m7 — note de passage
 * dans la descente chromatique, volontairement non fonctionnelle) et
 * "+6 fr." (sixte augmentée française, chiffrée D7(b5)/Ab — sa lecture
 * enharmonique jazz, cohérente avec les pièces jazz de ce chantier).
 *
 * Tempo/nuances AJOUTÉS (absents du fichier source, qui n'a NI tempo NI
 * la moindre nuance) : Largo (indication d'origine), 40 à la noire (choix
 * éditorial pour un Largo funèbre), et les 3 nuances structurelles décrites
 * par Dany (ff mesures 1-4, p mesures 5-8, pp mesures 9-12 — une décrue
 * organisée, pas des marquages décoratifs).
 *
 * VARIANTE ÉDITORIALE SIGNALÉE PAR DANY : mesure 3, cette transcription donne
 * Mi♮ (accord de Do MAJEUR, romain "IV/V") — la leçon la plus attestée du
 * prélude, mais certaines éditions impriment Mi♭. Vérifié : le fichier donne
 * bien <step>E</step> SANS <alter>, confirmant Mi♮ — reproduit verbatim,
 * aucune correction. PRÉCISION DE TEMPS : ce Do majeur est le 4e accord de la
 * mesure (temps 4), pas le 3e comme indiqué dans le brouillon — vérifié par
 * extraction onset par onset (le 3e accord, à ce temps-là, est Fa mineur/iv,
 * sans aucun Mi).
 */
export const CHOPIN_OP28_N20_MESURES_1_13 =
`<?xml version='1.0' encoding='UTF-8'?>
<score-partwise version="4.0">
  <identification>
    <creator type="composer">Frédéric Chopin</creator>
    <encoding>
      <software>MuseScore Studio 4.7.4</software>
      <encoding-date>2026-07-29</encoding-date>
      <supports element="accidental" type="yes" />
      <supports element="beam" type="yes" />
      <supports element="print" attribute="new-page" type="yes" value="yes" />
      <supports element="print" attribute="new-system" type="yes" value="yes" />
      <supports element="stem" type="yes" />
      </encoding>
    <source>http://musescore.com/user/49096755/scores/8557367</source>
    <miscellaneous>
      <miscellaneous-field name="creationDate">2020-04-29</miscellaneous-field>
      <miscellaneous-field name="mscVersion">4.70</miscellaneous-field>
      <miscellaneous-field name="platform">Windows 10</miscellaneous-field>
      </miscellaneous>
    </identification>
  <defaults>
    <scaling>
      <millimeters>7</millimeters>
      <tenths>40</tenths>
      </scaling>
    <page-layout>
      <page-height>1696.75</page-height>
      <page-width>1200.34</page-width>
      <page-margins type="even">
        <left-margin>86.0571</left-margin>
        <right-margin>85.7143</right-margin>
        <top-margin>85.7143</top-margin>
        <bottom-margin>85.7143</bottom-margin>
        </page-margins>
      <page-margins type="odd">
        <left-margin>85.7143</left-margin>
        <right-margin>86.0571</right-margin>
        <top-margin>85.7143</top-margin>
        <bottom-margin>85.7143</bottom-margin>
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
      <line-width type="stem">1.1</line-width>
      <line-width type="tie middle">2.1</line-width>
      <line-width type="tie tip">0.7</line-width>
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
    <credit-type>title</credit-type>
    <credit-words default-x="600.17" default-y="1575.01" justify="center" valign="top" font-size="22">24 préludes Op.28 N°20</credit-words>
    </credit>
  <credit page="1">
    <credit-type>composer</credit-type>
    <credit-words default-x="1114.29" default-y="1409.51" justify="right" valign="bottom">Frédéric Chopin
</credit-words>
    <credit-words>
</credit-words>
    <credit-words>
</credit-words>
    <credit-words />
    </credit>
  <part-list>
    <score-part id="P1">
      <part-name print-object="no">Piano</part-name>
      <score-instrument id="P1-I1">
        <instrument-name>Acoustic Grand Piano</instrument-name>
        <instrument-sound>keyboard.piano</instrument-sound>
        </score-instrument>
      <midi-device id="P1-I1" port="1" />
      <midi-instrument id="P1-I1">
        <midi-channel>1</midi-channel>
        <midi-program>1</midi-program>
        <volume>77.9528</volume>
        <pan>0</pan>
        </midi-instrument>
      </score-part>
    </part-list>
  <part id="P1">
    <measure number="1" width="346.64">
      <print page-number="1">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>271.59</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <divisions>4</divisions>
        <key>
          <fifths>-3</fifths>
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
        <clef number="1" after-barline="yes">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <direction placement="above">
        <direction-type>
          <words default-x="-38.52" relative-y="20" font-weight="bold" font-size="12">Largo</words>
          </direction-type>
        <staff>1</staff>
        <sound tempo="40"/>
        </direction>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="2.29" relative-y="-40">
            <ff/>
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="120"/>
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>C</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">c : i</words></direction-type><staff>2</staff></direction><note default-x="143.22" default-y="20">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="26.845974" bezier-y="30.561608" number="1" />
          </notations>
        </note>
      <note default-x="143.22" default-y="30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>F</root-step></root><kind text="m7">minor-seventh</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">iv7</words></direction-type><staff>2</staff></direction><note default-x="189.81" default-y="20">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="189.81" default-y="35">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="7">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V7</words></direction-type><staff>2</staff></direction><note default-x="236.39" default-y="20">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="252.89" default-y="25" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="236.39" default-y="30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="252.89" default-y="35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="275.76" default-y="15">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        </note>
      <note default-x="275.76" default-y="25">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>C</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">i</words></direction-type><staff>2</staff></direction><note default-x="298.26" default-y="10">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-16.255239" bezier-y="35.242137" />
          </notations>
        </note>
      <note default-x="298.26" default-y="20">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="143.22" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="143.22" default-y="10">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="189.81" default-y="0">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="189.81" default-y="10">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="236.39" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="236.39" default-y="5">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="298.26" default-y="-15">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="298.26" default-y="-5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="143.22" default-y="-165">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="143.22" default-y="-130">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="189.81" default-y="-185">
        <pitch>
          <step>F</step>
          <octave>1</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="189.81" default-y="-150">
        <chord />
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="236.39" default-y="-180">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="236.39" default-y="-145">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="298.26" default-y="-165">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="298.26" default-y="-145">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="298.26" default-y="-130">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="2" width="213.42">
      <harmony placement="above" print-frame="no"><root><root-step>A</root-step><root-alter>-1</root-alter></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">A♭ : I</words></direction-type><staff>2</staff></direction><note default-x="10" default-y="-15">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="26.845974" bezier-y="30.561608" number="1" />
          </notations>
        </note>
      <note default-x="10" default-y="0">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="10" default-y="10">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="10" default-y="20">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>D</root-step><root-alter>-1</root-alter></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">IV</words></direction-type><staff>2</staff></direction><note default-x="56.58" default-y="-10">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="56.58" default-y="0">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="56.58" default-y="15">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="56.58" default-y="25">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>E</root-step><root-alter>-1</root-alter></root><kind text="7">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V7</words></direction-type><staff>2</staff></direction><note default-x="103.17" default-y="10">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="119.67" default-y="15" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="103.17" default-y="20">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="119.67" default-y="25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="142.53" default-y="5">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        </note>
      <note default-x="142.53" default-y="15">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>A</root-step><root-alter>-1</root-alter></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">I</words></direction-type><staff>2</staff></direction><note default-x="165.04" default-y="0">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-16.255239" bezier-y="35.242137" />
          </notations>
        </note>
      <note default-x="165.04" default-y="10">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <forward>
        <duration>8</duration>
        </forward>
      <note default-x="91.27" default-y="-20">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="103.17" default-y="-15">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="103.17" default-y="-5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="165.04" default-y="-25">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="165.04" default-y="-15">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="10" default-y="-175">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="10" default-y="-140">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="56.58" default-y="-195">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="56.58" default-y="-160">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="103.17" default-y="-190">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="103.17" default-y="-155">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="165.04" default-y="-175">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="165.04" default-y="-140">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="3" width="229.28">
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="7">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">c : V7</words></direction-type><staff>2</staff></direction><note default-x="25.18" default-y="5">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="53.80512" bezier-y="50.142827" number="1" />
          </notations>
        </note>
      <note default-x="25.18" default-y="15">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>C</root-step></root><kind text="7">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V7/iv</words></direction-type><staff>2</staff></direction><note default-x="60.54" default-y="5">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="72.45" default-y="10">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="72.45" default-y="20">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>F</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">iv</words></direction-type><staff>2</staff></direction><note default-x="119.03" default-y="30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="135.53" default-y="35" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="158.4" default-y="25">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>C</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">IV/V</words></direction-type><staff>2</staff></direction><note default-x="180.9" default-y="10">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="180.9" default-y="20">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="25.18" default-y="-20">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="25.18" default-y="-10">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="72.45" default-y="-15">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="72.45" default-y="-5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="119.03" default-y="0">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="119.03" default-y="10">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="180.9" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="25.18" default-y="-180">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="72.45" default-y="-200">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="72.45" default-y="-165">
        <chord />
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="119.03" default-y="-185">
        <pitch>
          <step>F</step>
          <octave>1</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="119.03" default-y="-150">
        <chord />
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="180.9" default-y="-165">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="180.9" default-y="-130">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="4" width="239.23">
      <harmony placement="above" print-frame="no"><root><root-step>D</root-step></root><kind text="7">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V7/V</words></direction-type><staff>2</staff></direction><note default-x="10" default-y="10">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="21.9" default-y="15">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V</words></direction-type><staff>2</staff></direction><note default-x="68.48" default-y="15">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="68.48" default-y="30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <attributes>
        <clef number="1">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <harmony placement="above" print-frame="no"><root><root-step>D</root-step></root><kind text="7">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V7/V</words></direction-type><staff>2</staff></direction><note default-x="130.77" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="147.27" default-y="-15" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="170.14" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V (½ cad.)</words></direction-type><staff>2</staff></direction><note default-x="190.84" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-50.809823" bezier-y="49.383953" />
          </notations>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="21.9" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="68.48" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="68.48" default-y="5">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="118.87" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="130.77" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="130.77" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="190.84" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="190.84" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="21.9" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="21.9" default-y="-140">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="21.9" default-y="-125">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="68.48" default-y="-180">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="68.48" default-y="-145">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="130.77" default-y="-195">
        <pitch>
          <step>D</step>
          <octave>1</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="130.77" default-y="-160">
        <chord />
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="190.84" default-y="-180">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="190.84" default-y="-145">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="5" width="276.11">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>92.02</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="2.29" relative-y="-40">
            <p/>
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54"/>
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>C</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">i</words></direction-type><staff>2</staff></direction><note default-x="103.05" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="94.698942" bezier-y="52.441876" number="1" />
          </notations>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>A</root-step><root-alter>-1</root-alter></root><kind text="">major</kind><bass><bass-step>C</bass-step></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">VI6</words></direction-type><staff>2</staff></direction><note default-x="141.14" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step></root><kind text="°7">diminished-seventh</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">vii°7</words></direction-type><staff>2</staff></direction><note default-x="190.83" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="190.83" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="m">minor</kind><bass><bass-step>B</bass-step><bass-alter>-1</bass-alter></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">v6</words></direction-type><staff>2</staff></direction><note default-x="236.22" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="103.05" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="103.05" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="141.14" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="141.14" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="179.23" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>2</voice>
        <type>eighth</type>
        <dot default-x="195.73" default-y="-25" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" relative-x="-18.3" relative-y="-3.13">3</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="219.29" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <technical>
            <fingering default-x="6.5" relative-x="2.65" relative-y="14.96">2</fingering>
            </technical>
          </notations>
        </note>
      <note default-x="236.22" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="236.22" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="103.05" default-y="-192.02">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="94.860788" bezier-y="56.952121" number="2" />
          </notations>
        </note>
      <note default-x="103.05" default-y="-157.02">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="141.14" default-y="-157.02">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="141.14" default-y="-122.02">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="179.23" default-y="-162.02">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="179.23" default-y="-127.02">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="236.22" default-y="-162.02">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="236.22" default-y="-127.02">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="6" width="192.99">
      <harmony placement="above" print-frame="no"><root><root-step>A</root-step></root><kind text="m7">minor-seventh</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">(pass.)</words></direction-type><staff>2</staff></direction><note default-x="13.04" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="13.04" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="13.04" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>D</root-step></root><kind text="7(♭5)">dominant</kind><degree><degree-value>5</degree-value><degree-alter>-1</degree-alter><degree-type>alter</degree-type></degree><bass><bass-step>A</bass-step><bass-alter>-1</bass-alter></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">+6 fr.</words></direction-type><staff>2</staff></direction><note default-x="51.13" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="63.03" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="51.13" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="51.13" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V</words></direction-type><staff>2</staff></direction><note default-x="89.22" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="105.72" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="89.22" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="105.72" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="89.22" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="105.72" default-y="-15" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="122.26" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        </note>
      <note default-x="122.26" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="7">dominant</kind><bass><bass-step>F</bass-step></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V4/2</words></direction-type><staff>2</staff></direction><note default-x="153.1" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="153.1" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="153.1" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="13.04" default-y="-167.02">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="13.04" default-y="-132.02">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="51.13" default-y="-167.02">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="51.13" default-y="-132.02">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="89.22" default-y="-172.02">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="89.22" default-y="-137.02">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="153.1" default-y="-177.02">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="153.1" default-y="-142.02">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="7" width="183.05">
      <harmony placement="above" print-frame="no"><root><root-step>C</root-step></root><kind text="m">minor</kind><bass><bass-step>E</bass-step><bass-alter>-1</bass-alter></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">i6</words></direction-type><staff>2</staff></direction><note default-x="10" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="10" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>F</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">iv</words></direction-type><staff>2</staff></direction><note default-x="48.09" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="">major</kind><bass><bass-step>B</bass-step></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V6</words></direction-type><staff>2</staff></direction><note default-x="86.18" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="102.68" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="118.37" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>C</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">i</words></direction-type><staff>2</staff></direction><note default-x="135.3" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="10" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="48.09" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="48.09" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="86.18" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="86.18" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="135.3" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="135.3" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="10" default-y="-182.02">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="10" default-y="-147.02">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="48.09" default-y="-177.02">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="48.09" default-y="-142.02">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="86.18" default-y="-197.02">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="86.18" default-y="-162.02">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="135.3" default-y="-192.02">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="135.3" default-y="-157.02">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="8" width="193.36">
      <attributes>
        <clef number="1">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <harmony placement="above" print-frame="no"><root><root-step>A</root-step><root-alter>-1</root-alter></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">VI</words></direction-type><staff>2</staff></direction><note default-x="10" default-y="0">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="10" default-y="10">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="10" default-y="20">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>D</root-step><root-alter>-1</root-alter></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">♭II</words></direction-type><staff>2</staff></direction><note default-x="48.09" default-y="15">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="48.09" default-y="25">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="7">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V7</words></direction-type><staff>2</staff></direction><note default-x="87.73" default-y="20">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="104.23" default-y="25" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="123.88" default-y="15">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>C</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">i</words></direction-type><staff>2</staff></direction><note default-x="146.38" default-y="10">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-88.426756" bezier-y="55.519489" />
          </notations>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="10" default-y="-15">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="48.09" default-y="-10">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="48.09" default-y="0">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="75.83" default-y="-10">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="87.73" default-y="-5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="87.73" default-y="5">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="146.38" default-y="-15">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="146.38" default-y="-5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="10" default-y="-202.02">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="10" default-y="-167.02">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="48.09" default-y="-222.02">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="48.09" default-y="-187.02">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="87.73" default-y="-207.02">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="87.73" default-y="-172.02">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="146.38" default-y="-227.02">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-89.960838" bezier-y="63.572957" />
          </notations>
        </note>
      <note default-x="146.38" default-y="-192.02">
        <chord />
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="9" width="183.06">
      <attributes>
        <clef number="1">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="2.29" relative-y="-40">
            <pp/>
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="27"/>
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>C</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">i</words></direction-type><staff>2</staff></direction><note default-x="10" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="30.814131" bezier-y="19.706787" number="1" />
          </notations>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>A</root-step><root-alter>-1</root-alter></root><kind text="">major</kind><bass><bass-step>C</bass-step></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">VI6</words></direction-type><staff>2</staff></direction><note default-x="48.09" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step></root><kind text="°7">diminished-seventh</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">vii°7</words></direction-type><staff>2</staff></direction><note default-x="97.78" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="97.78" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="m">minor</kind><bass><bass-step>B</bass-step><bass-alter>-1</bass-alter></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">v6</words></direction-type><staff>2</staff></direction><note default-x="143.17" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="10" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="10" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="48.09" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="48.09" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="86.18" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>2</voice>
        <type>eighth</type>
        <dot default-x="102.68" default-y="-25" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="126.24" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        </note>
      <note default-x="143.17" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="143.17" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="10" default-y="-192.02">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="15.862677" bezier-y="35.105306" number="2" />
          </notations>
        </note>
      <note default-x="10" default-y="-157.02">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="48.09" default-y="-157.02">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="48.09" default-y="-122.02">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="86.18" default-y="-162.02">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="86.18" default-y="-127.02">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="143.17" default-y="-162.02">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="143.17" default-y="-127.02">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="10" width="357.6">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>93.99</staff-distance>
          </staff-layout>
        </print>
      <harmony placement="above" print-frame="no"><root><root-step>A</root-step></root><kind text="m7">minor-seventh</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">(pass.)</words></direction-type><staff>2</staff></direction><note default-x="102.77" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="102.77" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="102.77" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>D</root-step></root><kind text="7(♭5)">dominant</kind><degree><degree-value>5</degree-value><degree-alter>-1</degree-alter><degree-type>alter</degree-type></degree><bass><bass-step>A</bass-step><bass-alter>-1</bass-alter></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">+6 fr.</words></direction-type><staff>2</staff></direction><note default-x="160.55" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="172.45" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="160.55" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="160.55" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V</words></direction-type><staff>2</staff></direction><note default-x="218.34" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="234.84" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="218.34" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="234.84" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="218.34" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="234.84" default-y="-15" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="267.17" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        </note>
      <note default-x="267.17" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="7">dominant</kind><bass><bass-step>F</bass-step></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V4/2</words></direction-type><staff>2</staff></direction><note default-x="298.01" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="298.01" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="298.01" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="102.77" default-y="-168.99">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="102.77" default-y="-133.99">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="160.55" default-y="-133.99">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="218.34" default-y="-173.99">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="218.34" default-y="-138.99">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="298.01" default-y="-178.99">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="298.01" default-y="-143.99">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <forward>
        <duration>4</duration>
        </forward>
      <note default-x="160.55" default-y="-168.99">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <forward>
        <duration>8</duration>
        </forward>
      </measure>
    <measure number="11" width="259.67">
      <harmony placement="above" print-frame="no"><root><root-step>C</root-step></root><kind text="m">minor</kind><bass><bass-step>E</bass-step><bass-alter>-1</bass-alter></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">i6</words></direction-type><staff>2</staff></direction><note default-x="10" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>F</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">iv</words></direction-type><staff>2</staff></direction><note default-x="67.79" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="">major</kind><bass><bass-step>B</bass-step></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V6</words></direction-type><staff>2</staff></direction><note default-x="125.57" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="142.07" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="174.41" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>C</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">i</words></direction-type><staff>2</staff></direction><note default-x="200.09" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="10" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="10" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="67.79" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="67.79" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="125.57" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="125.57" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="200.09" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="200.09" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="10" default-y="-183.99">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="10" default-y="-148.99">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="67.79" default-y="-178.99">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="67.79" default-y="-143.99">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="125.57" default-y="-198.99">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="125.57" default-y="-163.99">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="200.09" default-y="-193.99">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="200.09" default-y="-158.99">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="12" width="259.67">
      <attributes>
        <clef number="1">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <harmony placement="above" print-frame="no"><root><root-step>A</root-step><root-alter>-1</root-alter></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">VI</words></direction-type><staff>2</staff></direction><note default-x="10" default-y="10">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="10" default-y="20">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>D</root-step><root-alter>-1</root-alter></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">♭II</words></direction-type><staff>2</staff></direction><note default-x="67.79" default-y="15">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="67.79" default-y="25">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="7">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V7</words></direction-type><staff>2</staff></direction><note default-x="125.57" default-y="20">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="142.07" default-y="25" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="174.41" default-y="15">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>C</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">i</words></direction-type><staff>2</staff></direction><note default-x="200.09" default-y="10">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-49.708529" bezier-y="104.117227" />
          </notations>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="10" default-y="-15">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="10" default-y="0">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="67.79" default-y="-10">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="67.79" default-y="0">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="113.67" default-y="-10">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="125.57" default-y="-5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="125.57" default-y="5">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="200.09" default-y="-15">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="200.09" default-y="-5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <forward>
        <duration>8</duration>
        </forward>
      <forward>
        <duration>4</duration>
        </forward>
      <note default-x="200.09" default-y="-70">
        <rest />
        <duration>4</duration>
        <voice>3</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="10" default-y="-203.99">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="10" default-y="-168.99">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="67.79" default-y="-223.99">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="67.79" default-y="-188.99">
        <chord />
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="125.57" default-y="-208.99">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="125.57" default-y="-173.99">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="200.09" default-y="-228.99">
        <pitch>
          <step>C</step>
          <octave>1</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-96.312814" bezier-y="62.429603" />
          </notations>
        </note>
      <note default-x="200.09" default-y="-193.99">
        <chord />
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="13" width="151.63">
      <attributes>
        <clef number="1">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <harmony placement="above" print-frame="no"><root><root-step>C</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">i (final)</words></direction-type><staff>2</staff></direction><note default-x="10" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="10" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        <notations>
          <fermata type="upright" relative-y="10" />
          </notations>
        </note>
      <note default-x="10" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="10" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>2</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="10" default-y="-138.99">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <fermata type="upright" relative-y="10" />
          </notations>
        </note>
      <backup>
        <duration>16</duration>
        </backup>
      <note default-x="10" default-y="-158.99">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>16</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        </barline>
      </measure>
    </part>
  </score-partwise>`;

/**
 * Analyse mesure par mesure (accord/degré/fonction) — premier accord de
 * chaque mesure, transcrit depuis le chiffrage <harmony>/<direction><words>
 * déjà écrit dans le fichier. Mesures 6/10 : le PREMIER accord (Lam7, noté
 * "(pass.)" par Dany — un accord de conduite, pas fonctionnel) est repris
 * ici par convention ; la sixte augmentée française (2e accord de ces
 * mesures) est le sujet du cours et détaillée dans l'analyse narrative.
 */
export const CHOPIN_OP28_N20_ANALYSE: MesureAnalyse[] = [
  { numero: 1,  nom: "Dom",    degre: "i",         fonction: "T" },
  { numero: 2,  nom: "LabMaj", degre: "I",         fonction: "T" },
  { numero: 3,  nom: "Sol7",   degre: "V7",        fonction: "D" },
  { numero: 4,  nom: "Ré7",    degre: "V7/V",      fonction: "D", dominanteSecondaire: true },
  { numero: 5,  nom: "Dom",    degre: "i",         fonction: "T" },
  { numero: 6,  nom: "Lam7",   degre: "(pass.)",   fonction: "?" },
  { numero: 7,  nom: "Dom",    degre: "i6",        fonction: "T" },
  { numero: 8,  nom: "LabMaj", degre: "VI",        fonction: "T" },
  { numero: 9,  nom: "Dom",    degre: "i",         fonction: "T" },
  { numero: 10, nom: "Lam7",   degre: "(pass.)",   fonction: "?" },
  { numero: 11, nom: "Dom",    degre: "i6",        fonction: "T" },
  { numero: 12, nom: "LabMaj", degre: "VI",        fonction: "T" },
  { numero: 13, nom: "Dom",    degre: "i (final)", fonction: "T" },
];

/**
 * Analyse harmonique NARRATIVE — construite à partir d'une analyse déjà très
 * détaillée fournie par Dany (chiffrage romain complet, intégré directement
 * dans le fichier). Chiffrage recoupé mesure par mesure contre les 49
 * balises <harmony> réelles : concordance totale. Plusieurs affirmations
 * précises vérifiées indépendamment note à note — toutes confirmées,
 * jusqu'à l'exactitude de la ligne de basse chromatique (Do-Do-Si-Sib-La-
 * Lab-Sol-Fa sur les mesures 5-6) et de la conduite d'alto (Lab-Fa♯-Sol,
 * mesure 5) — SAUF un repère de temps : le Do majeur au Mi♮ (mesure 3) est
 * le 4e accord de la mesure, pas le 3e (le 3e est Fa mineur, sans Mi) —
 * corrigé, cf. commentaire d'en-tête de ce fichier.
 */
export const CHOPIN_OP28_N20_ANALYSE_NARRATIVE: AnalyseNarrative = {
  tonalite:
    "Do mineur (armure à 3 bémols). Deux excursions passagères : La♭ majeur (le relatif) à la " +
    "mesure 2, puis Sol majeur (la dominante) tonicisée aux mesures 3-4 par une chaîne de " +
    "dominantes secondaires.",
  metrique: "4/4. Largo, très lent (40 à la noire — absent du fichier source, ajouté).",
  forme:
    "13 mesures = A (mesures 1-4) + B (mesures 5-8) + B repris à l'identique (mesures 9-12) + " +
    "accord final (mesure 13). Un choral funèbre en accords homorythmiques, quatre par mesure — " +
    "un accord par temps, 49 harmonies en tout. La dynamique (ajoutée, absente du fichier " +
    "source) organise une décrue : ff (mesures 1-4), p (mesures 5-8), pp pour la reprise " +
    "(mesures 9-12) — un cortège qui s'éloigne.",
  sections: [
    {
      label: "Mesure 1",
      titre: "La cadence-mère",
      chiffrage: "Dom (i) – Fam7 (iv7) – Sol7 (V7) – Dom (i)",
      fonctions: "i – SD7 – D – i",
      texte:
        "La formule cadentielle complète en un seul souffle. Le iv porte sa 7e (Mib sur Fa-Lab-" +
        "Do : Fm7), héritée de la tonique précédente. Sur le V7, le Mib frappé avec l'accord au " +
        "3e temps est une appoggiature de <strong>♭13</strong> qui ne se résout sur Ré qu'en fin " +
        "de temps — ce soupir Mib→Ré sur dominante reviendra à chaque cadence du prélude.",
    },
    {
      label: "Mesure 2",
      titre: "Le même bloc, transposé au relatif",
      chiffrage: "LabMaj (I) – RébMaj (IV) – Mib7 (V7) – LabMaj (I)",
      fonctions: "T – SD – D – T (en Lab)",
      texte:
        "La formule entière de la mesure 1 est rejouée telle quelle, transposée en bloc en La♭ " +
        "majeur (I-IV-V7-I, avec la même appoggiature Do→Sib sur le Mib7) — séquence réelle " +
        "brutale, sans transition.",
    },
    {
      label: "Mesures 3-4",
      titre: "Le retour par chaîne de dominantes",
      chiffrage: "Sol7 (V7) – Do7 (V7/iv) – Fam (iv) – DoMaj (IV/V) | Ré7 (V7/V) – Sol (V) – Ré7 (V7/V) – Sol (V)",
      fonctions: "D – D – SD – SD (vers V) | D – D – D – D (demi-cadence)",
      texte:
        "Sol7 ne résout pas sur do mineur : il glisse vers Do7 (<strong>V7/iv</strong>), puis Fa " +
        "mineur, puis un Do MAJEUR (Mi♮, le 4e accord de la mesure) qui fonctionne comme IV de " +
        "Sol. La phrase bascule vers la dominante et s'y installe : Ré7-Sol-Ré7-Sol, tonicisation " +
        "de V et demi-cadence. Bilan de la période A : do mineur → La♭ → cycle de quintes → " +
        "dominante, en quatre mesures.",
    },
    {
      label: "Mesures 5-6",
      titre: "Le lamento chromatique et la sixte française",
      chiffrage: "Dom (i) – LabMaj/Do (VI6) – Si°7 (vii°7) – Solm/Sib (v6) | Lam7 (accord de passage) – +6 fr. (Ré7♭5/Lab) – Sol (V) – Sol7/Fa (V4/2)",
      fonctions: "T – T – D – D (mineure de passage) | ? – D – D – D",
      texte:
        "Sous une mélodie qui monte à l'aigu, la basse entame une descente chromatique " +
        "intégrale sur deux mesures : Do-Do-Si-Sib-La-Lab-Sol-Fa, harmonisée accord par accord " +
        "— dont un <strong>vii°7 incomplet</strong> (Si-Ré-Lab, la 7e diminuée sans sa fondamentale, " +
        "l'empreinte d'un G7♭9). L'alto dessine en parallèle Lab-Fa♯-Sol, une double broderie " +
        "chromatique autour de la quinte. Puis le sommet : Lab-Do-Ré-Fa♯, la " +
        "<strong>sixte augmentée française</strong> — lisible aussi, en écriture jazz, comme un " +
        "Ré7(♭5) sur basse Lab — qui écrase sa double dissonance sur V, prolongé en V4/2.",
    },
    {
      label: "Mesures 7-8",
      titre: "La cadence élargie, et la napolitaine",
      chiffrage: "Dom/Mib (i6) – Fam (iv) – Sol/Si (V6) – Dom (i) | LabMaj (VI) – RébMaj (♭II) – Sol7 (V7) – Dom (i)",
      fonctions: "T – SD – D – T | T – SD (napolitaine) – D – T",
      texte:
        "Le 4/2 de la mesure 6 résout sur i6, puis cadence élargie iv-V6-i. La mesure 8 rejoue " +
        "les accords de la mesure 2 réinterprétés : le La♭ n'est plus une tonique locale mais " +
        "<strong>VI</strong>, et le Ré♭ majeur, qui était IV de La♭, devient <strong>♭II</strong> " +
        "— la sixte napolitaine à l'état fondamental, enchaînée directement sur V7 (avec la même " +
        "appoggiature ♭13 qu'à la mesure 1). Les deux mêmes accords changent ainsi de sens entre " +
        "la mesure 2 et la mesure 8 : diatoniques dans une tonalité voisine là-bas, chromatiques " +
        "dans la tonalité principale ici.",
    },
    {
      label: "Mesures 9-13",
      titre: "La reprise en écho, et la fin nue",
      chiffrage: "(reprise intégrale de 5-8, agrégat par agrégat) | Dom (i, final)",
      fonctions: "(identiques à 5-8, en pp) | i",
      texte:
        "Les mesures 9-12 reprennent 5-8 note pour note — dans l'original, seule la nuance " +
        "(pp) transforme la répétition en écho. La mesure 13 referme le prélude sur un accord de " +
        "tonique nu, sans tierce de Picardie : le mineur assumé jusqu'au bout.",
    },
  ],
  synthese: [
    {
      titre: "Trois couleurs romantiques réunies",
      texte:
        "La basse de lamento chromatique (l'héritage baroque du tétracorde descendant), la " +
        "sixte napolitaine et la sixte augmentée française apparaissent toutes les trois dans " +
        "ces 13 mesures — l'outillage même du chromatisme romantique.",
    },
    {
      titre: "Le même accord, deux fois, deux sens",
      texte:
        "La♭ majeur et Ré♭ majeur reviennent à la mesure 8 avec les mêmes notes qu'à la mesure " +
        "2 — mais diatoniques et passagers là-bas (dans une tonalité voisine), chromatiques et " +
        "lourds de sens ici (VI et ♭II de la tonique).",
    },
    {
      titre: "Un tic cadentiel qui devient grammaire",
      texte:
        "L'appoggiature ♭6→5 sur la dominante (Mib→Ré à la mesure 1) revient à chaque cadence du " +
        "prélude — un même geste expressif répété jusqu'à devenir une habitude d'écriture, pas " +
        "un accident.",
    },
  ],
};
