import type { MesureAnalyse, AnalyseNarrative } from "./conservatoire-bwv846";

/**
 * data/conservatoire-all-the-things.ts
 * Harmonia — Vamp chromatique d'introduction (mesures 1 a 8, AVANT le theme
 * lui-meme qui commence a la mesure 9 du fichier source) de « All the
 * Things You Are » (Jerome Kern / Oscar Hammerstein II), pour la section
 * « conservatoire » du cours 11 (niveau 2 — les extensions d'accords).
 *
 * MusicXML VERBATIM fourni par Dany (export MuseScore Studio 4.6.3, fichier
 * « all-the-things-you-are-jerome-kernoscar-hammerstein-ii-solo-piano.musicxml »,
 * piano solo, 53 mesures au total) — jamais reconstruit a la main, cf.
 * feedback-partitions-verbatim. TRONQUE aux 8 premieres mesures (pratique
 * habituelle de Dany) : le vrai standard commence a la mesure 9 du fichier
 * original avec Fmin7 (non repris ici).
 *
 * Chiffrage de Dany : PAS des <harmony> structures cette fois, mais du texte
 * libre (<direction><words>Db7(#9)</words></direction>) pour le nom d'accord,
 * combine a un <lyric> romain classique (SubV/V, V7/VI...) sous la portee de
 * basse — verifie et transcrit note a note avant construction du tableau
 * ANALYSE ci-dessous (jamais suppose).
 *
 * Contenu reel verifie : apres la levee (mesure 1), un vamp de 2 mesures
 * repete (mesures 2-3, 4-5, 6-7, 8), alternant Réb7(#9) ("SubV/V" puis
 * "SubV7/V" — Dany chiffre differemment le retour, verifie, pas une coquille)
 * et Do7(#9) ("V7/VI"), chacun voice en 3-7-#9 SANS fondamentale ni quinte a
 * la main qui joue les tensions (la basse porte fondamentale+quinte). Le
 * retour (mesures 6-8) n'est PAS une repetition stricte : la main droite y
 * ajoute un dessin plus fourni qui touche en passant d'autres couleurs (13e,
 * 11e augmentee) absentes du premier passage — verifie note a note, PAS
 * suppose depuis le brouillon de reference qui parlait a tort de
 * "repetition stricte". Aucune indication independante sur les mesures
 * impaires (1,3,5,7) : la meme harmonie s'y prolonge en broderie/notes de
 * passage a la basse — mesure 1 omise du tableau ANALYSE (simple levee d'une
 * note, comme les levees precedentes), mesures 3/5/7 reprennent le chiffrage
 * de la mesure qui precede.
 *
 * ATTENTION en cas de reimport ulterieur des mesures 9+ : plusieurs
 * <tie type="start"> de la mesure 8 n'ont pas leur <tie type="stop">
 * correspondant (il est dans la mesure 9, coupee ici) — Verovio les tolere
 * (avertissement, pas une erreur), verifie par le test de gravure.
 */
export const ALL_THE_THINGS_MESURES_1_8 =
`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 4.0 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">
<score-partwise version="4.0">
  <work>
    <work-title>All The Things You Are</work-title>
    </work>
  <identification>
    <creator type="composer">Bruh make up your mind.  This is like the third standard you're trying to arrange but miserably failing</creator>
    <encoding>
      <software>MuseScore Studio 4.6.3</software>
      <encoding-date>2026-07-28</encoding-date>
      <supports element="accidental" type="yes"/>
      <supports element="beam" type="yes"/>
      <supports element="print" attribute="new-page" type="yes" value="yes"/>
      <supports element="print" attribute="new-system" type="yes" value="yes"/>
      <supports element="stem" type="yes"/>
      </encoding>
    <miscellaneous>
      <miscellaneous-field name="creationDate">2019-07-18</miscellaneous-field>
      <miscellaneous-field name="mscVersion">4.60</miscellaneous-field>
      <miscellaneous-field name="platform">Microsoft Windows</miscellaneous-field>
      </miscellaneous>
    </identification>
  <defaults>
    <scaling>
      <millimeters>7.05556</millimeters>
      <tenths>40</tenths>
      </scaling>
    <page-layout>
      <page-height>1584</page-height>
      <page-width>1224</page-width>
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
    <music-font font-family="Leland"/>
    <word-font font-family="FreeSerif" font-size="10"/>
    <lyric-font font-family="FreeSerif" font-size="11"/>
    </defaults>
  <credit page="1">
    <credit-type>title</credit-type>
    <credit-words default-x="611.999614" default-y="1527.306094" justify="center" valign="top" font-size="24">All The Things You Are</credit-words>
    </credit>
  <credit page="1">
    <credit-type>composer</credit-type>
    <credit-words default-x="1167.306321" default-y="1427.306094" justify="right" valign="bottom" font-size="12">Arranged by Casey Stratton </credit-words>
    </credit>
  <part-list>
    <score-part id="P1">
      <part-name>Piano</part-name>
      <part-abbreviation>Pno.</part-abbreviation>
      <score-instrument id="P1-I1">
        <instrument-name>Piano</instrument-name>
        <instrument-sound>keyboard.piano</instrument-sound>
        </score-instrument>
      <midi-device id="P1-I1" port="1"></midi-device>
      <midi-instrument id="P1-I1">
        <midi-channel>1</midi-channel>
        <midi-program>1</midi-program>
        <volume>78.7402</volume>
        <pan>0</pan>
        </midi-instrument>
      </score-part>
    </part-list>
  <part id="P1">
    <measure number="1" width="266.4">
      <print>
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>170</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <divisions>12</divisions>
        <key>
          <fifths>-4</fifths>
          </key>
        <time>
          <beats>4</beats>
          <beat-type>4</beat-type>
          </time>
        <staves>2</staves>
        <clef number="1">
          <sign>F</sign>
          <line>4</line>
          </clef>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <direction placement="above" system="only-top">
        <direction-type>
          <metronome parentheses="no" default-x="-37.67" default-y="22.2" relative-y="20">
            <beat-unit>quarter</beat-unit>
            <per-minute>140</per-minute>
            </metronome>
          </direction-type>
        <staff>1</staff>
        <sound tempo="140"/>
        </direction>
      <direction placement="above" system="only-top">
        <direction-type>
          <words relative-y="20" font-weight="bold" font-size="12">Swing</words>
          </direction-type>
        <sound>
          <swing>
            <first>10</first>
            <second>7</second>
            <swing-type>eighth</swing-type>
            </swing>
          </sound>
        <staff>1</staff>
        </direction>
      <note default-x="183.28" default-y="-10">
        <rest measure="yes"/>
        <duration>48</duration>
        <voice>1</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="134.95" default-y="-125">
        <rest/>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="151.44" default-y="-120"/>
        <staff>2</staff>
        </note>
      <note default-x="206.1" default-y="-125">
        <rest/>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="5.32" default-y="-40" relative-y="-40">
            <mp/>
            </dynamics>
          </direction-type>
        <staff>2</staff>
        <sound dynamics="71.11"/>
        </direction>
      <note default-x="231.04" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="2" width="195.49">
      <note default-x="13.32" default-y="-20">
        <rest/>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="63.21" default-y="-20">
        <rest/>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <words default-y="19.44" relative-y="20">Db7(#9)</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="88.15" default-y="-10">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="88.15" default-y="5">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="88.15" default-y="20">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="115.15" default-y="-10">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop"/>
        <tie type="start"/>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="115.15" default-y="5">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop"/>
        <tie type="start"/>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="115.15" default-y="20">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop"/>
        <tie type="start"/>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          <tied type="start"/>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="13.32" default-y="-140">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="38.26" default-y="-160">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start"/>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="63.21" default-y="-160">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop"/>
        <tie type="start"/>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop"/>
          <tied type="start"/>
          </notations>
        <lyric number="1" default-x="6.5" default-y="-70.23" relative-y="-30">
          <syllabic>single</syllabic>
          <text>SubV/V</text>
          </lyric>
        </note>
      <note default-x="143.21" default-y="-160">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop"/>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="168.74" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="3" width="235.72">
      <note default-x="12.36" default-y="-10">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="12.36" default-y="5">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="12.36" default-y="20">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="13.32" default-y="-140">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="38.26" default-y="-160">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="63.21" default-y="-125">
        <rest/>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="88.15" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="125.53" default-y="-140">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="150.47" default-y="-160">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="175.41" default-y="-125">
        <rest/>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="200.36" default-y="-140">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="4" width="180.66">
      <note default-x="10" default-y="-20">
        <rest/>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="22.89" default-y="-15"/>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <words default-y="17.6" relative-y="20">C7(#9)</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="73.92" default-y="-15">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="73.92" default-y="5">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="73.92" default-y="20">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="100.91" default-y="-15">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop"/>
        <tie type="start"/>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="100.91" default-y="5">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop"/>
        <tie type="start"/>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="100.91" default-y="20">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop"/>
        <tie type="start"/>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          <tied type="start"/>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="10" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="34.94" default-y="-165">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start"/>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="59.89" default-y="-165">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop"/>
        <tie type="start"/>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop"/>
          <tied type="start"/>
          </notations>
        <lyric number="1" default-x="6.5" default-y="-70.23" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V7/VI</text>
          </lyric>
        </note>
      <note default-x="128.98" default-y="-165">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop"/>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="153.92" default-y="-140">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="5" width="232.35">
      <note default-x="10" default-y="-15">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="10" default-y="5">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="10" default-y="20">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="34.94" default-y="-20">
        <rest/>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="59.89" default-y="-20">
        <rest/>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="84.83" default-y="0">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="109.78" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="134.72" default-y="-25">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="159.67" default-y="-20">
        <rest/>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="184.61" default-y="-10">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="184.61" default-y="0">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="10" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="34.94" default-y="-165">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="59.89" default-y="-125">
        <rest/>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="84.83" default-y="-140">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="109.78" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="134.72" default-y="-165">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="159.67" default-y="-125">
        <rest/>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="184.61" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="6" width="330.03">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>71.77</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <clef number="1">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="114.15" default-y="-15">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="114.15" default-y="0">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="144.2" default-y="-20">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="144.2" default-y="-10">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="174.24" default-y="-20">
        <rest/>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <words default-y="14.91" relative-y="20">Db7(#9)</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="204.29" default-y="-10">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="204.29" default-y="5">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="204.29" default-y="20">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="234.34" default-y="-10">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="234.34" default-y="5">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="234.34" default-y="20">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="114.15" default-y="-146.77">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="144.2" default-y="-166.77">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start"/>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="174.24" default-y="-166.77">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop"/>
        <tie type="start"/>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop"/>
          <tied type="start"/>
          </notations>
        <lyric number="1" default-x="6.5" default-y="-69.91" relative-y="-30">
          <syllabic>single</syllabic>
          <text>SubV7/V</text>
          </lyric>
        </note>
      <note default-x="268.14" default-y="-166.77">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop"/>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="298.19" default-y="-146.77">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="7" width="266.33">
      <note default-x="13.32" default-y="-20">
        <rest/>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="43.37" default-y="5">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="43.37" default-y="15">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="43.37" default-y="30">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="73.41" default-y="5">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="73.41" default-y="15">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="73.41" default-y="30">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="140.83" default-y="-20">
        <rest/>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="170.88" default-y="0">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="187.37" default-y="5"/>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="170.88" default-y="10">
        <chord/>
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="187.37" default-y="15"/>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="170.88" default-y="25">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="187.37" default-y="25"/>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="13.32" default-y="-146.77">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="43.37" default-y="-166.77">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="73.41" default-y="-131.77">
        <rest/>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="103.46" default-y="-146.77">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="140.83" default-y="-146.77">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="170.88" default-y="-166.77">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="200.93" default-y="-131.77">
        <rest/>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="230.97" default-y="-146.77">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="8" width="242.73">
      <note default-x="10" default-y="-20">
        <rest/>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="40.05" default-y="5">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="40.05" default-y="20">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="70.09" default-y="-20">
        <rest/>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <words default-y="16.35" relative-y="20">C7(#9)</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="85.38" default-y="20">
        <grace slash="yes"/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="116.98" default-y="-50">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="116.98" default-y="-5">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="116.98" default-y="5">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="116.98" default-y="20">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="147.03" default-y="-50">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop"/>
        <tie type="start"/>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="147.03" default-y="-5">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop"/>
        <tie type="start"/>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="147.03" default-y="5">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop"/>
        <tie type="start"/>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="147.03" default-y="20">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop"/>
        <tie type="start"/>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
          <tied type="start"/>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="10" default-y="-151.77">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="40.05" default-y="-171.77">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start"/>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="70.09" default-y="-171.77">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop"/>
        <tie type="start"/>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop"/>
          <tied type="start"/>
          </notations>
        <lyric number="1" default-x="6.5" default-y="-69.91" relative-y="-30">
          <syllabic>single</syllabic>
          <text>V7/VI</text>
          </lyric>
        </note>
      <note default-x="180.83" default-y="-171.77">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop"/>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="210.88" default-y="-146.77">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
        </part>
  </score-partwise>`;

/**
 * Analyse mesure par mesure — transcrite depuis le chiffrage de Dany (nom
 * d'accord en <words>, degre romain en <lyric>, voir commentaire d'en-tete).
 * Mesure 1 (levee d'une seule note) omise, comme les levees precedentes.
 * Mesures 3, 5, 7 (aucun nouveau chiffrage) reprennent l'accord de la
 * mesure precedente, qui s'y prolonge en broderie a la basse.
 */
export const ALL_THE_THINGS_ANALYSE: MesureAnalyse[] = [
  { numero: 2, nom: "Réb7(#9)", degre: "SubV/V",  fonction: "D", dominanteSecondaire: true },
  { numero: 3, nom: "Réb7(#9)", degre: "SubV/V",  fonction: "D", dominanteSecondaire: true },
  { numero: 4, nom: "Do7(#9)",  degre: "V7/VI",   fonction: "D", dominanteSecondaire: true },
  { numero: 5, nom: "Do7(#9)",  degre: "V7/VI",   fonction: "D", dominanteSecondaire: true },
  { numero: 6, nom: "Réb7(#9)", degre: "SubV7/V", fonction: "D", dominanteSecondaire: true },
  { numero: 7, nom: "Réb7(#9)", degre: "SubV7/V", fonction: "D", dominanteSecondaire: true },
  { numero: 8, nom: "Do7(#9)",  degre: "V7/VI",   fonction: "D", dominanteSecondaire: true },
];

/**
 * Analyse narrative — verifiee note a note (script Node sur les hauteurs
 * reelles, mesure par mesure) avant redaction. Brouillon de reference fourni
 * par Dany (Gemini), portant sur les 53 mesures du fichier original : seule
 * la partie concernant les mesures 1-9 (notre extrait) a ete verifiee et
 * exploitee. 2 corrections :
 *  - Le brouillon uniformise le chiffrage en "SubV7/V" partout — le fichier
 *    de Dany distingue en realite "SubV/V" (mesures 2-3) de "SubV7/V"
 *    (mesures 6-7), une nuance volontaire preservee ici, pas une coquille.
 *  - Le brouillon decrit les mesures 6-9 comme une "repetition stricte" du
 *    vamp — verifie faux : la main droite y ajoute un dessin plus fourni,
 *    touchant en passant d'autres couleurs (13e, 11e augmentee) absentes du
 *    premier passage.
 * Le reste (identite des 2 accords, fonctions harmoniques, absence de
 * fondamentale/quinte dans les voicings de tension) s'est revele exact.
 */
export const ALL_THE_THINGS_ANALYSE_NARRATIVE: AnalyseNarrative = {
  tonalite:
    "La bémol majeur (armure de 4 bémols) — mais ce vamp d'introduction ne s'y ancre jamais : " +
    "il alterne deux dominantes altérées sans jamais résoudre sur Lab.",
  metrique: "4/4, swing (croches inégales), 140 à la noire.",
  forme:
    "Un vamp de 2 mesures (accord tenu, puis broderie à la basse) répété avant que le standard " +
    "lui-même ne commence, à la mesure 9 du fichier original (non reprise ici, elle ouvre sur " +
    "Fa mineur) — cette introduction n'est qu'une préparation chromatique, pas encore le thème.",
  sections: [
    {
      label: "Mesure 1",
      titre: "L'anacrouse",
      chiffrage: "(silence) — La",
      fonctions: "—",
      texte:
        "L'extrait s'ouvre sur un silence puis une seule note à la basse (La bécarre), qui " +
        "descend aussitôt d'un demi-ton vers Lab — la <strong>5te</strong> de l'accord qui " +
        "arrive à la mesure suivante, pas sa fondamentale. Ce n'est donc pas une anacrouse " +
        "tonale : c'est une couleur qui s'approche par degré conjoint chromatique.",
    },
    {
      label: "Mesures 2-3",
      titre: "Réb7(#9), la substitution tritonique",
      chiffrage: "Réb7(#9)",
      fonctions: "SubV/V",
      texte:
        "La basse pose la fondamentale (Réb) puis la quinte (Lab) ; la main droite plaque, sur " +
        "le contretemps, les trois notes qui font toute la couleur de l'accord : Fa (tierce), " +
        "Si bécarre (orthographié comme la 7ᵉ mineure) et Mi bécarre " +
        "(<strong>la 9ᵉ augmentée</strong>) — ni fondamentale ni quinte dans cette main : ce " +
        "sont les tensions seules qui portent l'identité harmonique. Réb7 remplace Sol7 par " +
        "substitution tritonique (même triton Fa-Si), menant vers Do7 à la mesure suivante.",
    },
    {
      label: "Mesures 4-5",
      titre: "Do7(#9), la dominante de la relative mineure",
      chiffrage: "Do7(#9)",
      fonctions: "V7/VI",
      texte:
        "Même geste, une tierce plus bas : la main droite ne joue là encore que tierce (Mi), " +
        "7ᵉ (Sib) et 9ᵉ augmentée (Mib) — sans fondamentale ni quinte. C'est la dominante " +
        "secondaire de la relative mineure du ton (Fa mineur), qui n'apparaît qu'à la mesure 9 " +
        "du fichier original. La mesure 5 orne cette harmonie d'une ligne descendante à la " +
        "main droite (Lab-Sol-Do-Fa-La) avant que le cycle ne reparte.",
    },
    {
      label: "Mesures 6-7",
      titre: "Retour de Réb7(#9), une couleur plus riche",
      chiffrage: "Réb7(#9)",
      fonctions: "SubV7/V",
      texte:
        "Le même accord revient — mais pas à l'identique. Dany chiffre différemment cette " +
        "fois (<strong>« SubV7/V »</strong> plutôt que « SubV/V »), et la main droite " +
        "s'est enrichie : son dessin touche en passant d'autres couleurs — une 13ᵉ (Sib) et " +
        "une 11ᵉ augmentée (Sol) — absentes du premier passage aux mesures 2-3. Un vamp qui " +
        "se répète peut donc s'autoriser un peu plus de couleur à chaque retour : c'est " +
        "l'esprit même des extensions qu'enseigne ce cours.",
    },
    {
      label: "Mesure 8",
      titre: "Dernier Do7(#9), fin en suspension",
      chiffrage: "Do7(#9)",
      fonctions: "V7/VI",
      texte:
        "Dernier accord de l'extrait : Do7(#9), lui aussi voicé plus richement qu'à sa première " +
        "apparition (la main droite y ajoute la quinte, absente à la mesure 4). L'extrait " +
        "s'arrête ici, en pleine tension — le standard commence juste après, à la mesure 9 du " +
        "fichier original, sur Fa mineur.",
    },
  ],
  synthese: [
    {
      titre: "Des tensions sans fondamentale ni quinte",
      texte:
        "Les deux accords de ce vamp (Réb7(#9), Do7(#9)) sont voicés exactement de la même " +
        "façon : la basse porte la fondamentale et la quinte, la main droite ne joue que la " +
        "tierce, la 7ᵉ et la 9ᵉ altérée — un voicing rootless classique du piano jazz, où les " +
        "tensions font tout le travail de couleur.",
    },
    {
      titre: "La couleur s'enrichit à chaque retour",
      texte:
        "Le vamp n'est pas simplement recopié : à son retour (mesures 6-8), la main droite " +
        "ajoute des touches de 13ᵉ et de 11ᵉ augmentée absentes du premier passage — un vamp " +
        "répété n'est jamais tout à fait identique à lui-même.",
    },
    {
      titre: "Un premier goût d'altération avant le thème",
      texte:
        "Cette introduction ne touche jamais la tonique du morceau (Lab) : elle prépare " +
        "l'oreille avec deux dominantes altérées avant que le vrai standard — beaucoup plus " +
        "diatonique — ne commence à la mesure 9.",
    },
  ],
};
