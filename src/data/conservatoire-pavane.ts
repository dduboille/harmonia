import type { MesureAnalyse, AnalyseNarrative } from "./conservatoire-bwv846";

/**
 * data/conservatoire-pavane.ts
 * Harmonia — Pavane pour une infante défunte (Maurice Ravel, 1899), intégrale
 * pour piano (72 mesures, Sol majeur, 4/4), pour la section "conservatoire" du
 * cours 36 (niveau 3 — Debussy/Ravel, l'harmonie impressionniste approfondie).
 *
 * MusicXML VERBATIM fourni par Dany (fichier "pavane-annote.musicxml") —
 * jamais reconstruit à la main, cf. feedback-partitions-verbatim. Aucune
 * métadonnée ajoutée : <work-title> et le compositeur sont déjà présents dans
 * le fichier reçu, ainsi qu'un vrai repère de métronome (♩=80, balise
 * <metronome>) — aucun tempo à ajouter, cas rare de ce chantier.
 *
 * STATUT : Ravel est entré dans le domaine public (mort en 1937, > 70 ans) —
 * cette pièce est LIBREMENT PUBLIABLE, avec Satie (Gymnopédie, cours 14) et
 * Debussy (Voiles/Cathédrale, cours 29-30) le troisième pilier publiable du
 * "second récit" du corpus (l'harmonie après la fonction).
 *
 * Vérifications effectuées (scripts jetables, supprimés après usage) :
 * - 72 mesures, Sol majeur, 4/4 (noté "symbol=common", le C barré), tempo
 *   ♩=80 confirmé via la vraie balise <metronome> du fichier. Confirmé.
 * - La chaîne de septièmes diatoniques du refrain (m.1-4) est EXACTEMENT
 *   celle du brouillon, chiffrage déjà annoté dans le fichier par Dany
 *   lui-même : I (m.1) - IV∆7(#11 mélodique) (m.1) - iii6 (m.2) - vi9 (m.2) -
 *   IV∆7 (m.3) - ii9 (m.3) - V9 (m.4) - I∆9 (m.4). Confirmé note à note que
 *   le I∆9 de la mesure 4 contient bien le Fa# (7e majeure) : pcs {Ré, Do,
 *   Fa#, Sol, La, Si}.
 * - "Premier chromatisme de la pièce" (Sol#, m.11, fabriquant un E7 = V/iii) :
 *   vérifié RIGOUREUSEMENT — aucune note hors de la gamme de Sol majeur
 *   (Sol-La-Si-Do-Ré-Mi-Fa#) n'apparaît nulle part avant la mesure 11.
 *   Confirmé, et le E7 cadence bien sur Si mineur (iii) à la mesure 12.
 * - Repères de forme (rondeau) tous confirmés via les <direction><words>
 *   déjà présents dans le fichier (annotations de Dany, conservées
 *   verbatim) : refrain m.1-12, écho "Très lointain" m.13 sur pédale de Si,
 *   couplet 1 "un peu plus lent" m.26 (vers si mineur/Ré), refrain 2
 *   "Reprenez le mouvement" m.28, couplet 2 "subitement très doux et très
 *   lié" m.39 (mixtures avec bémols), "Très grave" (lamento) aux mesures 48
 *   ET 58 (même marque expressive, pas nécessairement note pour note
 *   identiques — vérifié : très proche mais pas strictement identique, ce
 *   qui est cohérent avec une reprise variée plutôt qu'un copier-coller),
 *   refrain final "marquez le chant" m.61, cadence "En élargissant
 *   beaucoup" m.70.
 * - Les bémols du couplet 2 (Sol mineur, mixture modale) apparaissent
 *   progressivement : Sib dès la mesure 40, Fa naturel aussi, Mib à partir
 *   de la mesure 44 — les trois degrés qui distinguent Sol mineur de Sol
 *   majeur, exactement comme décrit ("mixtures vers sol mineur").
 */
export const PAVANE_MESURES_1_72 =
`<?xml version='1.0' encoding='UTF-8'?>
<score-partwise version="4.0">
  <work>
    <work-title>Pavane pour une infante défunte</work-title>
    </work>
  <identification>
    <creator type="composer">Maurice Ravel</creator>
    <encoding>
      <software>MuseScore Studio 4.7.4</software>
      <encoding-date>2026-07-30</encoding-date>
      <supports element="accidental" type="yes" />
      <supports element="beam" type="yes" />
      <supports element="print" attribute="new-page" type="yes" value="yes" />
      <supports element="print" attribute="new-system" type="yes" value="yes" />
      <supports element="stem" type="yes" />
      </encoding>
    <source>http://musescore.com/user/2749876/scores/6139802</source>
    <miscellaneous>
      <miscellaneous-field name="creationDate">2020-05-08</miscellaneous-field>
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
      <line-width type="enclosure">1</line-width>
      <line-width type="ending">1.1</line-width>
      <line-width type="extend">1.6</line-width>
      <line-width type="leger">1.6</line-width>
      <line-width type="pedal">1.1</line-width>
      <line-width type="octave shift">1.1</line-width>
      <line-width type="slur middle">2.1</line-width>
      <line-width type="slur tip">1</line-width>
      <line-width type="staff">1.1</line-width>
      <line-width type="stem">1</line-width>
      <line-width type="tie middle">2.1</line-width>
      <line-width type="tie tip">1</line-width>
      <line-width type="tuplet bracket">1.6</line-width>
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
    <credit-words default-x="595.44" default-y="1564.32" justify="center" valign="top" font-weight="bold" font-size="24">PAVANE</credit-words>
    </credit>
  <credit page="1">
    <credit-type>subtitle</credit-type>
    <credit-words default-x="595.44" default-y="1509.19" justify="center" valign="top" font-size="14">P O U R   U N E   I N F A N T E   D É F U N T E.</credit-words>
    </credit>
  <credit page="1">
    <credit-type>composer</credit-type>
    <credit-words default-x="1134.19" default-y="1435.97" justify="right" valign="bottom" font-weight="bold" font-family="Arial Narrow" font-size="12">Maurice Ravel.</credit-words>
    </credit>
  <credit page="1">
    <credit-type>subtitle</credit-type>
    <credit-words default-x="595.44" default-y="1619.97" justify="center" valign="top" font-style="italic" font-family="Times New Roman">á Madame la Princesse E. de POLIGNAC.</credit-words>
    </credit>
  <part-list>
    <score-part id="P1">
      <part-name>PIANO.</part-name>
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
    <measure number="1" width="387.75">
      <print>
        <system-layout>
          <system-margins>
            <left-margin>103.53</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>263.7</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>77.72</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <divisions>840</divisions>
        <key>
          <fifths>1</fifths>
          </key>
        <time symbol="common">
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
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-65.14" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89" />
        </direction>
      <direction placement="above" system="only-top">
        <direction-type>
          <words default-x="-38.52" default-y="15.15" relative-y="20" font-weight="bold" font-size="12">Assez doux, mais d'une sonorité large    </words>
          <words font-weight="normal" font-family="Leland Text"></words>
          </direction-type>
        <direction-type>
          <metronome parentheses="no" default-x="-38.52" default-y="15.15" relative-y="20">
            <beat-unit>quarter</beat-unit>
            <per-minute>80</per-minute></metronome>
          </direction-type>
        <direction-type>
          <words default-x="-38.52" default-y="15.15" relative-y="20" font-weight="bold" font-size="12">= 80.</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">Sol : I — REFRAIN, chaîne de 7es diatoniques</words></direction-type><staff>2</staff></direction><note default-x="104.65" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          <slur type="start" bezier-x="75.574018" bezier-y="33.884076" number="1" />
          </notations>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>C</root-step></root><kind text="∆7(#11)">major-seventh</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">IV∆7 (#11 mélodique)</words></direction-type><staff>2</staff></direction><note default-x="245.3" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="280.46" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="315.63" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="350.79" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="104.65" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-86.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="139.81" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-86.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="174.97" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-86.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="210.14" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-86.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="245.3" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-86.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="280.46" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-86.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="315.63" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-86.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="350.79" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-86.5" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="104.65" default-y="-137.72">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="174.97" default-y="-157.72">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
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
      <note default-x="210.14" default-y="-137.72">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="245.3" default-y="-177.72">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-69.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="280.46" default-y="-137.72">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="315.63" default-y="-132.72">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-23.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="350.79" default-y="-137.72">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="2" width="293.11">
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step><root-alter>D</root-alter></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">iii6</words></direction-type><staff>2</staff></direction><note default-x="10" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="80.33" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="115.49" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>E</root-step></root><kind text="m9">minor-seventh</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">vi9</words></direction-type><staff>2</staff></direction><note default-x="150.65" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="185.82" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="220.98" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-74.150109" bezier-y="36.896126" />
          </notations>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-101.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="45.16" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-101.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="80.33" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-101.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="115.49" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-101.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="150.65" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-96.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="185.82" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-96.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="220.98" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="256.14" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-172.72">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-64.3" />
            <tenuto default-x="0.18" default-y="-71.42" />
            </articulations>
          </notations>
        </note>
      <note default-x="45.16" default-y="-147.72">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="80.33" default-y="-147.72">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            <tenuto default-x="0.18" default-y="-51.2" />
            </articulations>
          </notations>
        </note>
      <note default-x="115.49" default-y="-137.72">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="150.65" default-y="-167.72">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="185.82" default-y="-137.72">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="220.98" default-y="-137.72">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="256.14" default-y="-137.72">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="3" width="293.11">
      <harmony placement="above" print-frame="no"><root><root-step>C</root-step></root><kind text="∆7">major-seventh</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">IV∆7</words></direction-type><staff>2</staff></direction><note default-x="10" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          <slur type="start" bezier-x="38.599978" bezier-y="27.231861" number="1" />
          </notations>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>A</root-step></root><kind text="m9">minor-seventh</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">ii9</words></direction-type><staff>2</staff></direction><note default-x="150.65" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="185.82" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="220.98" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="256.14" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="45.16" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="80.33" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="115.49" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="150.65" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="185.82" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="220.98" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="256.14" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-137.72">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="80.33" default-y="-122.72">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="30.267797" bezier-y="22.505323" number="2" />
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            <tenuto default-x="0.18" default-y="11.42" />
            </articulations>
          </notations>
        </note>
      <note default-x="115.49" default-y="-137.72">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="150.65" default-y="-152.72">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-26.56" />
            <tenuto default-x="0.18" default-y="-15.92" />
            </articulations>
          </notations>
        </note>
      <note default-x="185.82" default-y="-137.72">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="220.98" default-y="-122.72">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            <tenuto default-x="0.18" default-y="11.42" />
            </articulations>
          </notations>
        </note>
      <note default-x="256.14" default-y="-137.72">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="4" width="406.58">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>110.87</staff-distance>
          </staff-layout>
        </print>
      <harmony placement="above" print-frame="no"><root><root-step>D</root-step></root><kind text="9">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V9</words></direction-type><staff>2</staff></direction><note default-x="81.12" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-4.679054" bezier-y="8.049897" />
          <slur type="start" orientation="over" placement="above" bezier-x="99.235309" bezier-y="41.940565" number="1" />
          </notations>
        </note>
      <note default-x="162.04" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="202.5" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="∆9">major-seventh</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">I∆9 — la tonique porte sa 7e majeure</words></direction-type><staff>2</staff></direction><note default-x="242.95" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="283.41" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="323.87" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="364.32" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="81.12" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="121.58" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="162.04" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="202.5" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="242.95" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="283.41" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="323.87" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="364.32" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="81.12" default-y="-170.87">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            <tenuto default-x="0.18" default-y="4.08" />
            </articulations>
          </notations>
        </note>
      <note default-x="121.58" default-y="-170.87">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="162.04" default-y="-140.87">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="202.5" default-y="-170.87">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="242.95" default-y="-190.87">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-26.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="283.41" default-y="-170.87">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="323.87" default-y="-160.87">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
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
      <note default-x="364.32" default-y="-170.87">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="5" width="335.46">
      <note default-x="10" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="90.91" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="131.37" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>F</root-step><root-alter>1</root-alter></root><kind text="ø7">half-diminished</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">viiø7</words></direction-type><staff>2</staff></direction><note default-x="171.83" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="212.29" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="252.74" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="293.2" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="50.46" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="90.91" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="131.37" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="171.83" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="212.29" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="252.74" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="293.2" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-175.87">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-33.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="50.46" default-y="-170.87">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="90.91" default-y="-145.87">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-3.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="131.37" default-y="-170.87">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="171.83" default-y="-195.87">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="212.29" default-y="-170.87">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="252.74" default-y="-165.87">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-23.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="293.2" default-y="-170.87">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      </measure>
    <measure number="6" width="335.46">
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">iii (cédez)</words></direction-type><staff>2</staff></direction><note default-x="10" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-100.136155" bezier-y="39.741768" />
          </notations>
        </note>
      <note default-x="171.83" default-y="-10">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <words default-y="-135.94" relative-x="20" relative-y="20" font-style="italic" font-size="11">cédez</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="212.29" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="22.018711" bezier-y="14.997849" number="1" />
          <articulations>
            <tenuto default-x="0.18" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="212.29" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="212.29" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-47.98" relative-y="-40">
            <mf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="94.44" />
        </direction>
      <note default-x="252.74" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-64.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="252.74" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="252.74" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="293.2" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-79.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="293.2" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="293.2" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="50.46" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="90.91" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="131.37" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="171.83" default-y="-40">
        <rest />
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="212.29" default-y="-30" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="252.74" default-y="-30" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-180.87">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-106.969088" bezier-y="39.511072" />
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="50.46" default-y="-170.87">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="90.91" default-y="-170.87">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="171.83" default-y="-195.87">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" orientation="over" placement="above" bezier-x="27.460076" bezier-y="20.984353" number="2" />
          </notations>
        </note>
      <note default-x="252.74" default-y="-190.87">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="293.2" default-y="-185.87">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="7" width="412.83">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>116.77</staff-distance>
          </staff-layout>
        </print>
      <note default-x="81.12" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-5.082502" bezier-y="8.30171" />
          <articulations>
            <tenuto default-x="3.18" default-y="4.48" />
            </articulations>
          </notations>
        </note>
      <note default-x="121.13" default-y="-10">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="diminuendo" default-y="38.32" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="161.14" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="266.15" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="328.11" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>84</duration>
        <voice>1</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>5</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations print-object="no">
          <tuplet type="start" bracket="yes" placement="below" />
          </notations>
        </note>
      <note default-x="336.51" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>84</duration>
        <voice>1</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>5</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="346.62" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>84</duration>
        <voice>1</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>5</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="362.22" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>84</duration>
        <voice>1</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>5</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="377.82" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>84</duration>
        <tie type="start" />
        <voice>1</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>5</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <notations>
          <tied type="start" orientation="under" placement="below" />
          </notations>
        </note>
      <note default-x="393.43" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>84</duration>
        <voice>1</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>5</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>3780</duration>
        </backup>
      <note default-x="81.12" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="121.13" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="161.14" default-y="-50">
        <rest />
        <duration>840</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="221.15" default-y="-50">
        <rest />
        <duration>1680</duration>
        <voice>2</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <note default-x="326.16" default-y="-30" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3780</duration>
        </backup>
      <note default-x="81.12" default-y="-176.77">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <slur type="stop" number="2" bezier-x="-5.39677" bezier-y="7.36101" />
          </notations>
        </note>
      <note default-x="221.15" default-y="-221.77">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="221.15" default-y="-176.77">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="326.16" default-y="-176.77" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="8" width="332.81">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89" />
        </direction>
      <direction placement="above" system="only-top">
        <direction-type>
          <words default-y="10.28" relative-y="20" font-weight="bold" font-size="12">En mesure</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="10.96" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          <slur type="start" bezier-x="95.234156" bezier-y="40.32945" number="1" />
          </notations>
        </note>
      <note default-x="170.99" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="210.99" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="251" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="291.01" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10.96" default-y="-40">
        <rest />
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="50.97" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-71.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="90.97" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-71.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="130.98" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-71.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="170.99" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-81.48" />
            </articulations>
          </notations>
        </note>
      <note default-x="210.99" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="251" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="291.01" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10.96" default-y="-166.77">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="90.97" default-y="-151.77">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" orientation="over" placement="above" />
          <slur type="start" orientation="over" placement="above" bezier-x="79.536775" bezier-y="43.162072" number="2" />
          <articulations>
            <accent placement="above" default-x="-0.72" default-y="28.31" />
            </articulations>
          </notations>
        </note>
      <note default-x="170.99" default-y="-151.77">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
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
      <note default-x="210.99" default-y="-156.77">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="251" default-y="-141.77">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="291.01" default-y="-151.77">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-226.77">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>3360</duration>
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="9" width="331.85">
      <harmony placement="above" print-frame="no"><root><root-step>D</root-step></root><kind text="13">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V13</words></direction-type><staff>2</staff></direction><note default-x="10" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="3.18" default-y="14" />
            </articulations>
          </notations>
        </note>
      <note default-x="90.01" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="3.18" default-y="11.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="170.03" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="3.18" default-y="9" />
            </articulations>
          </notations>
        </note>
      <note default-x="250.04" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="3.18" default-y="11.5" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="50.01" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="50.01" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="90.01" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="130.02" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="170.03" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="210.03" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="250.04" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="290.05" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-151.77">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="90.01" default-y="-166.77">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="170.03" default-y="-151.77">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="250.04" default-y="-156.77">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-186.77">
        <rest />
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="50.01" default-y="-211.77">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="50.01" default-y="-191.77">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="90.01" default-y="-211.77">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="90.01" default-y="-191.77">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="170.03" default-y="-211.77">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="170.03" default-y="-191.77">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="10" width="426.5">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>93.41</staff-distance>
          </staff-layout>
        </print>
      <note default-x="81.12" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-5.959655" bezier-y="7.827378" />
          <slur type="start" bezier-x="29.211338" bezier-y="-26.948698" number="1" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-62.37" relative-x="-10" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="66.67" />
        </direction>
      <note default-x="252.91" default-y="-10">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="295.86" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="27.588753" bezier-y="14.516415" number="3" />
          <articulations>
            <staccato default-x="7.93" default-y="24.01" />
            </articulations>
          </notations>
        </note>
      <note default-x="307.86" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="338.81" default-y="-10">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="381.76" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="25.52" />
            </articulations>
          </notations>
        </note>
      <note default-x="393.76" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="81.12" default-y="-60">
        <rest />
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="124.07" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-88.87" />
            </articulations>
          </notations>
        </note>
      <note default-x="167.02" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-77.75" />
            </articulations>
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <words default-y="-91.13" relative-y="-35" font-style="italic" font-size="11">un peu retenu</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="209.97" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-66.63" />
            </articulations>
          </notations>
        </note>
      <note default-x="252.91" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-37.370526" bezier-y="-13.526948" />
          <slur type="start" bezier-x="35.429746" bezier-y="-17.37906" number="1" />
          <articulations>
            <tenuto default-x="-2.82" default-y="-76.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="295.86" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-76.5" />
            <tenuto default-x="-2.82" default-y="-83.62" />
            </articulations>
          </notations>
        </note>
      <note default-x="338.81" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="381.76" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-76.5" />
            <tenuto default-x="-2.82" default-y="-83.62" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="81.12" default-y="-138.41">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-5.216555" bezier-y="8.38387" />
          </notations>
        </note>
      <note default-x="167.02" default-y="-143.41">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="252.91" default-y="-143.41" print-object="no">
        <rest />
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="81.12" default-y="-163.41">
        <rest />
        <duration>1680</duration>
        <voice>6</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="252.91" default-y="-183.41">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="28.230939" bezier-y="-20.253586" number="2" />
          <articulations>
            <staccato default-x="1.93" default-y="-86.5" />
            <tenuto default-x="-2.82" default-y="-93.62" />
            </articulations>
          </notations>
        </note>
      <note default-x="252.91" default-y="-148.41">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="295.86" default-y="-188.41">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-86.5" />
            <tenuto default-x="-2.82" default-y="-93.62" />
            </articulations>
          </notations>
        </note>
      <note default-x="295.86" default-y="-153.41">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="338.81" default-y="-173.41">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-86.5" />
            <tenuto default-x="-2.82" default-y="-93.62" />
            </articulations>
          </notations>
        </note>
      <note default-x="338.81" default-y="-138.41">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="381.76" default-y="-178.41">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-86.5" />
            <tenuto default-x="-2.82" default-y="-93.62" />
            </articulations>
          </notations>
        </note>
      <note default-x="381.76" default-y="-143.41">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="11" width="353.27">
      <note default-x="10" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="3" bezier-x="-28.090729" bezier-y="13.519487" />
          <articulations>
            <staccato default-x="7.93" default-y="26.49" />
            </articulations>
          </notations>
        </note>
      <note default-x="10" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-4.18" default-y="-40" relative-x="10" relative-y="-30">
            <f />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="106.67" />
        </direction>
      <note default-x="52.95" default-y="-10" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <direction placement="above" system="only-top">
        <direction-type>
          <words default-y="16.72" relative-y="20" font-weight="bold" font-size="12">En élargissant</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="95.89" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="39.679674" bezier-y="27.148875" number="3" />
          <articulations>
            <tenuto default-x="0.18" default-y="-5.92" />
            </articulations>
          </notations>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>E</root-step></root><kind text="7">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V/iii — premier chromatisme (Sol#)</words></direction-type><staff>2</staff></direction><note default-x="181.79" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="181.79" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="246.21" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-36.694435" bezier-y="-14.519542" />
          <articulations>
            <staccato default-x="1.93" default-y="-76.5" />
            <tenuto default-x="-2.82" default-y="-83.62" />
            </articulations>
          </notations>
        </note>
      <note default-x="52.95" default-y="-30">
        <rest />
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="95.89" default-y="-30" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="181.79" default-y="-30" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="261.21" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>2</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <articulations>
            <tenuto default-x="-2.82" default-y="-86.54" />
            </articulations>
          </notations>
        </note>
      <note default-x="283.71" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>280</duration>
        <voice>2</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <tenuto default-x="-2.82" default-y="-88.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="317.59" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>280</duration>
        <voice>2</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tuplet type="stop" />
          <articulations>
            <tenuto default-x="-2.82" default-y="-91.46" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-143.41" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="52.95" default-y="-128.41">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <tenuto placement="above" default-x="3.18" default-y="51.97" />
            </articulations>
          </notations>
        </note>
      <note default-x="95.89" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <tenuto default-x="-2.82" default-y="-93.41" />
            </articulations>
          </notations>
        </note>
      <note default-x="138.84" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <tenuto default-x="-2.82" default-y="-91.97" />
            </articulations>
          </notations>
        </note>
      <note default-x="181.79" default-y="-138.41">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="246.21" default-y="-143.41">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-183.41">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-26.464607" bezier-y="-22.512624" />
          <articulations>
            <staccato default-x="1.93" default-y="-79" />
            <tenuto default-x="-2.82" default-y="-86.12" />
            </articulations>
          </notations>
        </note>
      <note default-x="10" default-y="-148.41">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="95.89" default-y="-163.41">
        <rest />
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="181.79" default-y="-183.41">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="-2.82" default-y="-79" />
            </articulations>
          </notations>
        </note>
      <note default-x="181.79" default-y="-163.41">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="246.21" default-y="-188.41">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="-2.82" default-y="-84" />
            </articulations>
          </notations>
        </note>
      <note default-x="246.21" default-y="-168.41">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="12" width="297.72">
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">iii — le refrain cadence sur la médiante</words></direction-type><staff>2</staff></direction><note default-x="10" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="3" bezier-x="-41.156214" bezier-y="24.853652" />
          <articulations>
            <tenuto placement="above" default-x="3.18" default-y="4" />
            </articulations>
          </notations>
        </note>
      <note default-x="10" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="above" system="only-top">
        <direction-type>
          <words relative-y="20" font-weight="bold" font-size="12">1</words>
          <words>er</words>
          <words> Mouvement</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="106.63" default-y="-20">
        <rest />
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-143.41">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations print-object="no">
          <articulations>
            <tenuto default-x="3.18" default-y="19" />
            </articulations>
          </notations>
        </note>
      <note default-x="106.63" default-y="-143.41">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="18.15918" bezier-y="31.697661" number="1" />
          <articulations>
            <staccato placement="above" default-x="7.93" default-y="55.73" />
            </articulations>
          </notations>
        </note>
      <note default-x="106.63" default-y="-128.41">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <dynamics default-x="-3.4" relative-x="10" relative-y="66">
            <p />
            </dynamics>
          </direction-type>
        <staff>2</staff>
        <sound dynamics="77.78" />
        </direction>
      <note default-x="149.58" default-y="-128.41">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato placement="above" default-x="7.93" default-y="57.38" />
            </articulations>
          </notations>
        </note>
      <note default-x="149.58" default-y="-118.41">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="204.53" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato placement="above" default-x="4.93" default-y="-26.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="204.53" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="247.47" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-36.396236" bezier-y="3.132342" />
          <articulations>
            <staccato placement="above" default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="247.47" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-198.41">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="-2.82" default-y="-94" />
            </articulations>
          </notations>
        </note>
      <note default-x="10" default-y="-178.41">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="10" default-y="-153.41">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="106.63" default-y="-163.41">
        <rest />
        <duration>1680</duration>
        <voice>6</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <barline location="right">
        <bar-style>light-light</bar-style>
        </barline>
      </measure>
    <measure number="13" width="405.26">
      <print new-page="yes" page-number="2">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>70</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>66.47</staff-distance>
          </staff-layout>
        </print>
      <direction placement="above" system="only-top">
        <direction-type>
          <words default-y="15.36" relative-y="20" font-weight="bold" font-size="12">Très lointain</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-49.95" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="72.22" />
        </direction>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">« Très lointain » : écho du refrain sur pédale de Si</words></direction-type><staff>2</staff></direction><note default-x="85.63" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="165.08" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="244.54" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <words default-y="-52.14" relative-y="-35" font-style="italic" font-size="11">m.g.</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="284.27" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="284.27" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="284.27" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="324" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="324" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="324" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="363.73" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="363.73" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="363.73" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="73.62" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="30.500264" bezier-y="-21.4735" number="1" />
          <articulations>
            <staccato default-x="1.93" default-y="-59.01" />
            </articulations>
          </notations>
        </note>
      <note default-x="85.63" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="85.63" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="113.35" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-59.84" />
            </articulations>
          </notations>
        </note>
      <note default-x="125.36" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="125.36" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="165.08" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-60.66" />
            </articulations>
          </notations>
        </note>
      <note default-x="165.08" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="165.08" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="204.81" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-61.49" />
            </articulations>
          </notations>
        </note>
      <note default-x="204.81" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="204.81" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="244.54" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-32.518925" bezier-y="-18.272843" />
          <articulations>
            <staccato default-x="1.93" default-y="-66.98" />
            </articulations>
          </notations>
        </note>
      <note default-x="244.54" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="244.54" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="296.27" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="21.935058" bezier-y="-16.304401" number="1" />
          </notations>
        </note>
      <note default-x="324" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="363.73" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-112.2" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="85.63" default-y="-171.47">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-74.3" />
            <tenuto default-x="0.18" default-y="-81.42" />
            </articulations>
          </notations>
        </note>
      <note default-x="85.63" default-y="-136.47">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="244.54" default-y="-171.47">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-74.3" />
            <tenuto default-x="0.18" default-y="-81.42" />
            </articulations>
          </notations>
        </note>
      <note default-x="244.54" default-y="-136.47">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="no" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="14" width="330.6">
      <note default-x="10.96" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="90.42" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="169.88" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10.96" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-25.634242" bezier-y="-9.479762" />
          <slur type="start" bezier-x="32.844748" bezier-y="-21.604806" number="1" />
          <articulations>
            <staccato default-x="1.93" default-y="-71.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="10.96" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="10.96" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="50.69" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-71.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="50.69" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="50.69" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="102.42" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-71.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="102.42" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="102.42" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="130.15" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-71.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="130.15" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="130.15" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="181.88" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-34.191085" bezier-y="-19.40399" />
          <articulations>
            <staccato default-x="1.93" default-y="-76.98" />
            </articulations>
          </notations>
        </note>
      <note default-x="181.88" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="181.88" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="209.61" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="29.457211" bezier-y="-12.04271" number="1" />
          </notations>
        </note>
      <note default-x="249.34" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="289.07" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10.96" default-y="-10" print-object="no">
        <rest />
        <duration>1680</duration>
        <voice>3</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <note default-x="169.88" default-y="-10" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>3</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="209.61" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="209.61" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="249.34" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="249.34" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="289.07" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="289.07" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-112.2" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="10" default-y="-171.47">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>3360</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="3.97" default-y="-74.4" />
            <tenuto default-x="-0.78" default-y="-81.52" />
            </articulations>
          </notations>
        </note>
      <note default-x="10" default-y="-136.47">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>3360</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="no" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="15" width="341.64">
      <note default-x="22" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="43.477036" bezier-y="30.076175" number="2" />
          </notations>
        </note>
      <note default-x="101.46" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="180.92" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="220.65" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="220.65" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="220.65" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="260.38" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="260.38" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="260.38" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="300.11" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="300.11" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="300.11" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-27.366141" bezier-y="-16.243412" />
          <slur type="start" bezier-x="30.09218" bezier-y="-21.346116" number="1" />
          <articulations>
            <staccato default-x="1.93" default-y="-69.01" />
            </articulations>
          </notations>
        </note>
      <note default-x="22" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="22" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="49.73" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-69.84" />
            </articulations>
          </notations>
        </note>
      <note default-x="61.73" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="61.73" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="101.46" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-70.66" />
            </articulations>
          </notations>
        </note>
      <note default-x="101.46" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="101.46" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="141.19" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-71.49" />
            </articulations>
          </notations>
        </note>
      <note default-x="141.19" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="141.19" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="180.92" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-32.123796" bezier-y="-18.14546" />
          <articulations>
            <staccato default-x="1.93" default-y="-76.98" />
            </articulations>
          </notations>
        </note>
      <note default-x="180.92" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="180.92" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="232.65" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="15.449517" bezier-y="-10.781633" number="1" />
          </notations>
        </note>
      <note default-x="260.38" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="300.11" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-16.908639" bezier-y="-8.308377" />
          </notations>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-112.2" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="22" default-y="-171.47">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-74.3" />
            <tenuto default-x="0.18" default-y="-81.42" />
            </articulations>
          </notations>
        </note>
      <note default-x="22" default-y="-136.47">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="180.92" default-y="-171.47">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-74.3" />
            <tenuto default-x="0.18" default-y="-81.42" />
            </articulations>
          </notations>
        </note>
      <note default-x="180.92" default-y="-136.47">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="no" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="16" width="418.65">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>125.55</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>106.54</staff-distance>
          </staff-layout>
        </print>
      <note default-x="87.19" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="168.09" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="248.99" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-27.179297" bezier-y="24.214899" />
          </notations>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="87.19" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-81.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="87.19" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="87.19" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="127.64" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-81.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="127.64" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="127.64" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="180.09" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-81.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="180.09" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="180.09" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="208.54" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-81.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="208.54" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="208.54" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="251.49" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="22.270188" bezier-y="-12.538589" number="1" />
          <articulations>
            <staccato default-x="1.93" default-y="-81.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="263.49" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="263.49" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="283.49" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-81.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="295.5" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="295.5" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="323.95" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-81.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="335.95" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="335.95" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="364.4" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-22.270188" bezier-y="-12.538589" />
          <articulations>
            <staccato default-x="1.93" default-y="-81.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="376.4" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="376.4" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-117.1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="86.23" default-y="-211.54">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>3360</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="86.23" default-y="-176.54">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>3360</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="no" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="17" width="355.47">
      <note default-x="30.06" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="59.603264" bezier-y="29.423101" number="1" />
          </notations>
        </note>
      <note default-x="110.97" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="crescendo" default-y="18.94" relative-x="15.12" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-131.17" spread="12" number="2" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="191.87" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="232.32" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="232.32" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="232.32" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="272.77" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="272.77" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="272.77" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="313.22" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="313.22" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="313.22" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="2" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="18.06" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="23.696461" bezier-y="-13.503902" number="2" />
          <articulations>
            <staccato default-x="1.93" default-y="-84.01" />
            </articulations>
          </notations>
        </note>
      <note default-x="30.06" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="30.06" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="58.51" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-84.84" />
            </articulations>
          </notations>
        </note>
      <note default-x="70.51" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="70.51" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="110.97" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-85.66" />
            </articulations>
          </notations>
        </note>
      <note default-x="110.97" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="110.97" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="151.42" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-24.236858" bezier-y="-12.508091" />
          <articulations>
            <staccato default-x="1.93" default-y="-86.49" />
            </articulations>
          </notations>
        </note>
      <note default-x="151.42" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="151.42" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="191.87" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="24.041609" bezier-y="-17.239546" number="2" />
          <articulations>
            <staccato default-x="1.93" default-y="-91.98" />
            </articulations>
          </notations>
        </note>
      <note default-x="191.87" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="191.87" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="244.32" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-86.54" />
            </articulations>
          </notations>
        </note>
      <note default-x="272.77" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-88.57" />
            </articulations>
          </notations>
        </note>
      <note default-x="272.77" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="313.22" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-23.89171" bezier-y="-17.446692" />
          <articulations>
            <staccato default-x="1.93" default-y="-91.46" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-117.1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="30.06" default-y="-216.54">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-79.3" />
            <tenuto default-x="0.18" default-y="-86.42" />
            </articulations>
          </notations>
        </note>
      <note default-x="191.87" default-y="-216.54">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-79.3" />
            <tenuto default-x="0.18" default-y="-86.42" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="18" width="303.37">
      <direction placement="below">
        <direction-type>
          <dynamics default-y="-40" relative-x="60" relative-y="-71.32">
            <mf />
            <other-dynamics> très soutenu</other-dynamics>
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89" />
        </direction>
      <note default-x="10" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
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
      <note default-x="10" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="10" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="70.68" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="87.18" default-y="-65" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-57.591785" bezier-y="30.878925" />
          <articulations>
            <tenuto default-x="0.18" default-y="-74.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="70.68" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="87.18" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="70.68" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="87.18" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="147.6" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="23.99601" bezier-y="-14.523122" number="1" />
          <articulations>
            <tenuto default-x="0.18" default-y="-79.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="147.6" default-y="-60">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="147.6" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="188.05" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-74.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="188.05" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="188.05" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="228.5" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-74.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="228.5" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="228.5" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-196.54">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
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
      <note default-x="10" default-y="-176.54">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="70.68" default-y="-181.54">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="87.18" default-y="-181.54" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-44.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="70.68" default-y="-161.54">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="87.18" default-y="-161.54" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="147.6" default-y="-166.54">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-34.08" />
            </articulations>
          </notations>
        </note>
      <note default-x="147.6" default-y="-146.54">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="188.05" default-y="-181.54">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-44.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="188.05" default-y="-161.54">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="228.5" default-y="-196.54">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="228.5" default-y="-176.54">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <barline location="right">
        <bar-style>light-light</bar-style>
        </barline>
      </measure>
    <measure number="19" width="253.18">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>130.2</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>90.69</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <time>
          <beats>2</beats>
          <beat-type>4</beat-type>
          </time>
        </attributes>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-104.99" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="103.25" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
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
      <note default-x="103.25" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="103.25" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="174.56" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-23.641774" bezier-y="-11.997952" />
          <articulations>
            <tenuto default-x="0.18" default-y="-79.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="174.56" default-y="-60">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="174.56" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>1680</duration>
        </backup>
      <note default-x="103.25" default-y="-165.69">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-44.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="103.25" default-y="-145.69">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="no" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="174.56" default-y="-150.69">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="174.56" default-y="-130.69">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <barline location="right">
        <bar-style>light-light</bar-style>
        </barline>
      </measure>
    <measure number="20" width="431.19">
      <attributes>
        <time symbol="common">
          <beats>4</beats>
          <beat-type>4</beat-type>
          </time>
        </attributes>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-51.77" relative-y="-40">
            <ppp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="55.56" />
        </direction>
      <note default-x="49.02" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="72.194179" bezier-y="40.298918" number="1" />
          </notations>
        </note>
      <note default-x="144.11" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="239.21" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="286.75" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="286.75" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="286.75" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="334.3" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="334.3" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="334.3" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="381.84" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="381.84" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="381.84" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="37.02" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="27.418574" bezier-y="-22.967822" number="2" />
          <articulations>
            <staccato default-x="1.93" default-y="-59.01" />
            </articulations>
          </notations>
        </note>
      <note default-x="49.02" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="49.02" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="84.57" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-59.84" />
            </articulations>
          </notations>
        </note>
      <note default-x="96.57" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="96.57" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="144.11" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-60.66" />
            </articulations>
          </notations>
        </note>
      <note default-x="144.11" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="144.11" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="191.66" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-61.49" />
            </articulations>
          </notations>
        </note>
      <note default-x="191.66" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="191.66" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="239.21" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-29.26269" bezier-y="-20.566818" />
          <articulations>
            <staccato default-x="1.93" default-y="-66.98" />
            </articulations>
          </notations>
        </note>
      <note default-x="239.21" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="239.21" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="298.75" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="26.235566" bezier-y="-22.256587" number="2" />
          </notations>
        </note>
      <note default-x="334.3" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="381.84" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-99.2" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="48.06" default-y="-195.69">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>3360</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="48.06" default-y="-160.69">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>3360</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="no" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="21" width="393.12">
      <direction placement="above">
        <direction-type>
          <wedge type="diminuendo" default-y="55.22" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="10.96" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="106.05" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          <slur type="stop" number="1" bezier-x="-68.638181" bezier-y="44.260577" />
          </notations>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="201.14" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10.96" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-30.750605" bezier-y="-15.429222" />
          <slur type="start" bezier-x="29.229031" bezier-y="-23.169324" number="1" />
          <articulations>
            <staccato default-x="1.93" default-y="-71.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="10.96" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="10.96" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="58.51" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-71.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="58.51" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="58.51" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="118.05" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-71.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="118.05" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="118.05" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="153.6" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-71.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="153.6" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="153.6" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="213.14" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-30.464715" bezier-y="-21.518712" />
          <articulations>
            <staccato default-x="1.93" default-y="-76.98" />
            </articulations>
          </notations>
        </note>
      <note default-x="213.14" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="213.14" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="248.69" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="23.115214" bezier-y="-11.425577" number="1" />
          </notations>
        </note>
      <note default-x="296.23" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="343.78" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-23.115155" bezier-y="-11.425697" />
          </notations>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10.96" default-y="-10" print-object="no">
        <rest />
        <duration>1680</duration>
        <voice>3</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <note default-x="201.14" default-y="-10" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>3</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="248.69" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="248.69" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="296.23" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="296.23" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="343.78" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="343.78" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-180.69">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>3360</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="10" default-y="-145.69">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>3360</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="22" width="397.63">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>125.55</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>101.29</staff-distance>
          </staff-layout>
        </print>
      <direction placement="above">
        <direction-type>
          <wedge type="crescendo" default-y="52.23" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="85.63" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="73.271547" bezier-y="37.847316" number="1" />
          </notations>
        </note>
      <note default-x="163.18" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="240.73" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="279.5" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="279.5" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="279.5" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="318.28" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="318.28" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="318.28" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="357.06" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="357.06" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="357.06" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="73.62" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="29.721738" bezier-y="-21.229738" number="2" />
          <articulations>
            <staccato default-x="1.93" default-y="-69.01" />
            </articulations>
          </notations>
        </note>
      <note default-x="85.63" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="85.63" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="112.4" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-69.84" />
            </articulations>
          </notations>
        </note>
      <note default-x="124.4" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="124.4" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="163.18" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-70.66" />
            </articulations>
          </notations>
        </note>
      <note default-x="163.18" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="163.18" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="201.95" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-71.49" />
            </articulations>
          </notations>
        </note>
      <note default-x="201.95" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="201.95" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="240.73" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-31.765265" bezier-y="-18.029183" />
          <articulations>
            <staccato default-x="1.93" default-y="-76.98" />
            </articulations>
          </notations>
        </note>
      <note default-x="240.73" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="240.73" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="291.51" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="22.212151" bezier-y="-20.912483" number="2" />
          </notations>
        </note>
      <note default-x="318.28" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="357.06" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="84.67" default-y="-176.29">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>3360</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="84.67" default-y="-141.29">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3360</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="23" width="337.79">
      <direction placement="above">
        <direction-type>
          <wedge type="diminuendo" default-y="52.23" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="18.06" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="95.61" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="173.16" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-70.755309" bezier-y="38.639105" />
          </notations>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="18.06" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-27.059793" bezier-y="-14.088265" />
          <slur type="start" bezier-x="22.555618" bezier-y="-12.618685" number="1" />
          <articulations>
            <staccato default-x="1.93" default-y="-81.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="18.06" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="18.06" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="56.84" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-81.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="56.84" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="56.84" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="107.61" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-81.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="107.61" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="107.61" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="134.39" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-22.555618" bezier-y="-12.618685" />
          <articulations>
            <staccato default-x="1.93" default-y="-81.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="134.39" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="134.39" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="175.66" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="21.597231" bezier-y="-16.463589" number="1" />
          <articulations>
            <staccato default-x="1.93" default-y="-81.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="187.67" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="187.67" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="207.67" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-81.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="219.67" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="219.67" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="246.44" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-81.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="258.44" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="258.44" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="285.22" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-21.597231" bezier-y="-16.463589" />
          <articulations>
            <staccato default-x="1.93" default-y="-81.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="297.22" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="297.22" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="18.06" default-y="-161.29">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="95.61" default-y="-211.29">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="95.61" default-y="-176.29">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="173.16" default-y="-196.29">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="173.16" default-y="-161.29">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="24" width="342.07">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-87.69" relative-x="-20" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="66.67" />
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-123.09" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="above">
        <direction-type>
          <wedge type="crescendo" default-y="44.81" spread="12" number="2" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="30.06" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="42.770972" bezier-y="28.981784" number="1" />
          </notations>
        </note>
      <note default-x="107.61" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="185.17" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="223.94" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="223.94" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="223.94" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="262.72" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="262.72" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="262.72" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="301.49" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="301.49" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="301.49" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="above">
        <direction-type>
          <wedge type="stop" number="2" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="18.06" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="29.721738" bezier-y="-21.229738" number="2" />
          <articulations>
            <staccato default-x="1.93" default-y="-84.01" />
            </articulations>
          </notations>
        </note>
      <note default-x="30.06" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="30.06" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="56.84" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-84.84" />
            </articulations>
          </notations>
        </note>
      <note default-x="68.84" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="68.84" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="107.61" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-85.66" />
            </articulations>
          </notations>
        </note>
      <note default-x="107.61" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="107.61" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="146.39" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-86.49" />
            </articulations>
          </notations>
        </note>
      <note default-x="146.39" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="146.39" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="185.17" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-31.765265" bezier-y="-18.029183" />
          <articulations>
            <staccato default-x="1.93" default-y="-91.98" />
            </articulations>
          </notations>
        </note>
      <note default-x="185.17" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="185.17" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="235.94" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="24.835031" bezier-y="-16.210323" number="2" />
          </notations>
        </note>
      <note default-x="262.72" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="301.49" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="30.06" default-y="-216.29">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="46.56" default-y="-216.29" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="30.06" default-y="-181.29">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="46.56" default-y="-176.29" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="262.72" default-y="-206.29">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="262.72" default-y="-171.29">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="25" width="383.98">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>125.55</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>101.45</staff-distance>
          </staff-layout>
        </print>
      <note default-x="99.15" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-9.030727" bezier-y="-10.470245" />
          <articulations>
            <tenuto default-x="0.18" default-y="-74.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="99.15" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="111.15" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="99.15" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-67.11" relative-y="-40">
            <mf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89" />
        </direction>
      <note default-x="165.47" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="193.97" default-y="-65" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-20.23416" bezier-y="18.497043" />
          <articulations>
            <tenuto default-x="0.18" default-y="-74.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="165.47" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="193.97" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="177.47" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="193.97" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="165.47" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="193.97" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="249.54" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="35.3316" bezier-y="-24.367119" number="1" />
          <articulations>
            <tenuto default-x="0.18" default-y="-79.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="249.54" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="249.54" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="293.76" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-74.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="293.76" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="305.76" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="293.76" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="337.97" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-74.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="337.97" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="349.97" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="337.97" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="99.15" default-y="-191.45">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="99.15" default-y="-171.45">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="165.47" default-y="-176.45">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="181.97" default-y="-176.45" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="165.47" default-y="-156.45">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="181.97" default-y="-156.45" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="249.54" default-y="-161.45">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="249.54" default-y="-141.45">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="293.76" default-y="-176.45">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="293.76" default-y="-156.45">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="337.97" default-y="-191.45">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="337.97" default-y="-171.45">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="26" width="324.22">
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-115.51" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">couplet 1 (un peu plus lent) — vers si mineur/Ré</words></direction-type><staff>2</staff></direction><note default-x="35.03" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="yes">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="15.673612" bezier-y="-14.164887" number="2" />
          </notations>
        </note>
      <note default-x="35.03" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="47.03" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="35.03" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="101.35" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-35.389456" bezier-y="-24.283016" />
          <slur type="stop" number="2" bezier-x="-17.62018" bezier-y="-11.654845" />
          </notations>
        </note>
      <note default-x="101.35" default-y="-60">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="101.35" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="145.57" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <words default-y="-165.12" relative-y="40" font-style="italic" font-size="11">un peu plus lent.</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="189.78" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="63.991373" bezier-y="32.12638" number="1" />
          <articulations>
            <accent placement="above" default-x="2.28" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="189.78" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="189.78" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-4.18" default-y="-57.16" relative-y="-40">
            <f />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89" />
        </direction>
      <note default-x="256.1" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <accent placement="above" default-x="2.28" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="256.1" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="256.1" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="35.03" default-y="-176.45">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="11.01758" bezier-y="15.476319" number="2" />
          </notations>
        </note>
      <note default-x="35.03" default-y="-156.45">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="101.35" default-y="-161.45">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-17.255768" bezier-y="7.946194" />
          </notations>
        </note>
      <note default-x="101.35" default-y="-141.45">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="145.57" default-y="-161.45">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="189.78" default-y="-191.45">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-59.32" />
            </articulations>
          </notations>
        </note>
      <note default-x="189.78" default-y="-171.45">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="256.1" default-y="-196.45">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <accent default-x="-0.72" default-y="-64.32" />
            </articulations>
          </notations>
        </note>
      <note default-x="256.1" default-y="-176.45">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="27" width="369.29">
      <note default-x="10" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="10" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="10" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="54.21" default-y="-75">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <accent placement="above" default-x="2.28" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="54.21" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="54.21" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="98.43" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <accent placement="above" default-x="2.28" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="98.43" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="98.43" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="142.64" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <accent placement="above" default-x="2.28" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="142.64" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="142.64" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="diminuendo" default-y="19.88" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="195.53" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="24.577348" bezier-y="13.464903" number="2" />
          </notations>
        </note>
      <note default-x="195.53" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="295.67" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <slur type="stop" number="1" bezier-x="-63.451147" bezier-y="32.377384" />
          <slur type="stop" number="2" bezier-x="-22.179443" bezier-y="17.129564" />
          <fermata type="upright" relative-y="10" />
          </notations>
        </note>
      <note default-x="295.67" default-y="-60">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="295.67" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="307.67" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-30" print-object="no">
        <rest />
        <duration>1680</duration>
        <voice>2</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <note default-x="183.53" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="195.53" default-y="-65">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="239.45" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="251.45" default-y="-65">
        <chord />
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="295.67" default-y="-30" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-196.45">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
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
      <note default-x="10" default-y="-176.45">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="54.21" default-y="-201.45">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-69.32" />
            </articulations>
          </notations>
        </note>
      <note default-x="54.21" default-y="-181.45">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="98.43" default-y="-196.45">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-64.32" />
            </articulations>
          </notations>
        </note>
      <note default-x="98.43" default-y="-176.45">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="142.64" default-y="-191.45">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-59.32" />
            </articulations>
          </notations>
        </note>
      <note default-x="142.64" default-y="-171.45">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-84.22" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="195.53" default-y="-181.45">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="17.741928" bezier-y="-18.810134" number="1" />
          </notations>
        </note>
      <note default-x="195.53" default-y="-161.45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="295.67" default-y="-196.45">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-22.474752" bezier-y="-12.786033" />
          <fermata type="upright" relative-y="10" />
          </notations>
        </note>
      <note default-x="295.67" default-y="-176.45">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <barline location="right">
        <bar-style>light-light</bar-style>
        </barline>
      </measure>
    <measure number="28" width="400.43">
      <print new-page="yes" page-number="3">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>79.32</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>100.69</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-55.14" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89" />
        </direction>
      <direction placement="above" system="only-top">
        <direction-type>
          <words default-y="42.88" relative-y="20" font-weight="bold" font-size="12">Reprenez le mouvement</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">REFRAIN 2 (Reprenez le mouvement)</words></direction-type><staff>2</staff></direction><note default-x="82.69" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          <slur type="start" bezier-x="84.525302" bezier-y="38.56001" number="1" />
          </notations>
        </note>
      <note default-x="240.66" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="280.15" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="319.65" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="359.14" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="82.69" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-76.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="82.69" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="122.18" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-76.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="161.67" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-76.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="161.67" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="201.17" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-76.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="240.66" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-71.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="240.66" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="280.15" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-71.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="319.65" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-71.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="319.65" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="359.14" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-71.5" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-122.24" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="82.69" default-y="-150.69" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="161.67" default-y="-135.69">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="161.67" default-y="-110.69">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="no" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-122.24" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="240.66" default-y="-130.69">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="319.65" default-y="-135.69">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="319.65" default-y="-110.69">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="no" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="82.69" default-y="-180.69">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-11.56" default-y="10.3" />
          </notations>
        </note>
      <note default-x="82.69" default-y="-160.69">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-11.56" default-y="10.3" />
          </notations>
        </note>
      <note default-x="82.69" default-y="-135.69">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-11.56" default-y="10.3" />
          </notations>
        </note>
      <note default-x="161.67" default-y="-170.69">
        <rest />
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="240.66" default-y="-200.69">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="240.66" default-y="-180.69">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="240.66" default-y="-155.69">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="319.65" default-y="-170.69">
        <rest />
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="29" width="337.31">
      <note default-x="19.56" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="98.55" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="138.04" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="177.54" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="217.03" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="256.52" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-81.505786" bezier-y="41.843966" />
          </notations>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="19.56" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="19.56" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="59.05" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="98.55" default-y="-30">
        <rest />
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="138.04" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="177.54" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="177.54" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="217.03" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="256.52" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="296.02" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-122.24" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="19.56" default-y="-125.69">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="98.55" default-y="-135.69">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="98.55" default-y="-115.69">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="no" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="177.54" default-y="-120.69">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="256.52" default-y="-135.69">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="256.52" default-y="-110.69">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="19.56" default-y="-195.69">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <accent default-x="-3.72" default-y="-84" />
            </articulations>
          <arpeggiate number="1" default-x="-13.06" default-y="-4.7" />
          </notations>
        </note>
      <note default-x="19.56" default-y="-170.69">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="-4.7" />
          </notations>
        </note>
      <note default-x="19.56" default-y="-150.69">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="-4.7" />
          </notations>
        </note>
      <note default-x="98.55" default-y="-170.69">
        <rest />
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="177.54" default-y="-190.69">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <accent default-x="-3.72" default-y="-79" />
            </articulations>
          <arpeggiate number="1" default-x="-13.06" default-y="0.3" />
          </notations>
        </note>
      <note default-x="177.54" default-y="-170.69">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="0.3" />
          </notations>
        </note>
      <note default-x="177.54" default-y="-145.69">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="0.3" />
          </notations>
        </note>
      <note default-x="256.52" default-y="-170.69">
        <rest />
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="30" width="339.75">
      <note default-x="22" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          <slur type="start" bezier-x="43.646247" bezier-y="29.249357" number="1" />
          </notations>
        </note>
      <note default-x="179.98" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="219.47" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="258.96" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="302.46" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="302.46" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="22" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="61.5" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="88.99" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="100.99" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="140.48" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="167.97" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="179.98" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="219.47" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="246.96" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="258.96" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="298.46" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="22" default-y="-165.69">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="29.3" />
            </articulations>
          <arpeggiate number="1" default-x="-13.06" default-y="25.3" />
          </notations>
        </note>
      <note default-x="22" default-y="-145.69">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="25.3" />
          </notations>
        </note>
      <note default-x="22" default-y="-120.69">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="25.3" />
          </notations>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="100.99" default-y="-180.69">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="100.99" default-y="-155.69">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="179.98" default-y="-175.69">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="19.3" />
            </articulations>
          <arpeggiate number="1" default-x="-13.06" default-y="15.3" />
          </notations>
        </note>
      <note default-x="179.98" default-y="-155.69">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="15.3" />
          </notations>
        </note>
      <note default-x="179.98" default-y="-130.69">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="15.3" />
          </notations>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="258.96" default-y="-180.69">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="258.96" default-y="-155.69">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="31" width="402.25">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>154.64</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>87.5</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="84.19" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="84.19" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="163.25" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="163.25" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="206.78" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="206.78" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="242.32" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="281.85" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="321.38" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="360.91" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="84.19" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="123.72" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="123.72" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="163.25" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="202.78" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="242.32" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="242.32" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="281.85" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="321.38" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="360.91" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="84.19" default-y="-157.5">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="24.3" />
            </articulations>
          <arpeggiate number="1" default-x="-13.06" default-y="20.3" />
          </notations>
        </note>
      <note default-x="84.19" default-y="-137.5">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="20.3" />
          </notations>
        </note>
      <note default-x="84.19" default-y="-112.5">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="20.3" />
          </notations>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="163.25" default-y="-172.5">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="163.25" default-y="-162.5">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="163.25" default-y="-147.5">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="242.32" default-y="-167.5">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="14.3" />
            </articulations>
          <arpeggiate number="1" default-x="-11.56" default-y="10.3" />
          </notations>
        </note>
      <note default-x="242.32" default-y="-147.5">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-11.56" default-y="10.3" />
          </notations>
        </note>
      <note default-x="242.32" default-y="-122.5">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-11.56" default-y="10.3" />
          </notations>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="321.38" default-y="-172.5">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="321.38" default-y="-162.5">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="321.38" default-y="-147.5">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="32" width="337.62">
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="23.56" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="23.56" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="98.63" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="98.63" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="142.16" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="142.16" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="177.69" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="217.22" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="256.76" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="296.29" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="19.56" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="59.09" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="98.63" default-y="-55">
        <rest />
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="138.16" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="177.69" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="177.69" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="217.22" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="256.76" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="296.29" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="19.56" default-y="-162.5">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="19.3" />
            </articulations>
          <arpeggiate number="1" default-x="-13.06" default-y="15.3" />
          </notations>
        </note>
      <note default-x="19.56" default-y="-142.5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="15.3" />
          </notations>
        </note>
      <note default-x="19.56" default-y="-117.5">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="15.3" />
          </notations>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="98.63" default-y="-177.5">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="-19.7" />
          </notations>
        </note>
      <note default-x="98.63" default-y="-167.5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="-19.7" />
          </notations>
        </note>
      <note default-x="98.63" default-y="-152.5">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="-19.7" />
          </notations>
        </note>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="177.69" default-y="-172.5">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-54.32" />
            </articulations>
          <arpeggiate number="1" default-x="-11.56" default-y="5.3" />
          </notations>
        </note>
      <note default-x="177.69" default-y="-152.5">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-11.56" default-y="5.3" />
          </notations>
        </note>
      <note default-x="177.69" default-y="-127.5">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-11.56" default-y="5.3" />
          </notations>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="256.76" default-y="-177.5">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="-19.7" />
          </notations>
        </note>
      <note default-x="256.76" default-y="-167.5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="-19.7" />
          </notations>
        </note>
      <note default-x="256.76" default-y="-152.5">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="-19.7" />
          </notations>
        </note>
      </measure>
    <measure number="33" width="337.62">
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="19.56" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-87.494228" bezier-y="60.016233" />
          </notations>
        </note>
      <note default-x="177.69" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <accent placement="above" default-x="-0.72" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="177.69" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="177.69" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-66.1" relative-y="-40">
            <mf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89" />
        </direction>
      <direction placement="below">
        <direction-type>
          <words default-x="21.72" default-y="-73.41" relative-y="-35" font-style="italic" font-size="11">cédez</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="217.22" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="19.583478" bezier-y="-19.909122" number="1" />
          <articulations>
            <tenuto default-x="0.18" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="217.22" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="217.22" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="256.76" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-64.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="256.76" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="256.76" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="296.29" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-79.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="296.29" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="296.29" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="19.56" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="19.56" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="59.09" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="98.63" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="98.63" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="138.16" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>1680</duration>
        </backup>
      <note default-x="19.56" default-y="-157.5">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <accent placement="above" default-x="-0.72" default-y="24.3" />
            </articulations>
          <arpeggiate number="1" default-x="-13.06" default-y="20.3" />
          </notations>
        </note>
      <note default-x="19.56" default-y="-137.5">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="20.3" />
          </notations>
        </note>
      <note default-x="19.56" default-y="-112.5">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="20.3" />
          </notations>
        </note>
      <note default-x="98.63" default-y="-122.5">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="98.63" default-y="-102.5">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="177.69" default-y="-137.5">
        <rest />
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="19.56" default-y="-157.5" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="98.63" default-y="-157.5">
        <rest />
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="177.69" default-y="-172.5">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="33.554164" bezier-y="-14.364497" number="2" />
          <articulations>
            <tenuto default-x="-2.82" default-y="-74" />
            </articulations>
          </notations>
        </note>
      <note default-x="256.76" default-y="-157.5">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <tenuto default-x="-2.82" default-y="-61.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="296.29" default-y="-147.5">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <tenuto default-x="-2.82" default-y="-56.56" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="34" width="436.3">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>127.72</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>74.97</staff-distance>
          </staff-layout>
        </print>
      <note default-x="81.12" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-4.543736" bezier-y="-7.963849" />
          <articulations>
            <tenuto placement="above" default-x="3.18" default-y="4.48" />
            </articulations>
          </notations>
        </note>
      <note default-x="81.12" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="81.12" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="122.99" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="diminuendo" default-y="55.08" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="164.87" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="164.87" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <words default-y="-45.24" relative-x="50" relative-y="21.28" font-style="italic" font-size="11">rapide</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="259.07" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="259.07" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="323.83" default-y="-109.97">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>60</duration>
        <voice>1</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>7</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        <notations>
          <slur type="start" bezier-x="12.535512" bezier-y="34.229877" number="1" />
          <articulations>
            <accent default-x="-0.5" default-y="-42.8" />
            </articulations>
          </notations>
        </note>
      <note default-x="349.25" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>60</duration>
        <voice>1</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>7</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="363.25" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>60</duration>
        <voice>1</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>7</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="376.66" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>60</duration>
        <voice>1</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>7</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="390.07" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>60</duration>
        <voice>1</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>7</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="403.49" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>60</duration>
        <voice>1</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>7</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="416.9" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>60</duration>
        <tie type="start" />
        <voice>1</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>7</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <notations>
          <tied type="start" orientation="over" placement="above" />
          </notations>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>3780</duration>
        </backup>
      <note default-x="81.12" default-y="-144.97">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <slur type="stop" number="2" bezier-x="-2.570213" bezier-y="-7.109567" />
          <articulations>
            <tenuto placement="below" default-x="-2.82" default-y="-59" />
            </articulations>
          </notations>
        </note>
      <note default-x="211.97" default-y="-179.97">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="211.97" default-y="-144.97">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="323.83" default-y="-109.97">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>5</voice>
        <type size="cue">eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" orientation="over" placement="above" />
          </notations>
        </note>
      </measure>
    <measure number="35" width="346.76">
      <direction placement="above" system="only-top">
        <direction-type>
          <words default-y="41.25" relative-y="20" font-weight="bold" font-size="12">En mesure</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="77.78" />
        </direction>
      <note default-x="10" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" orientation="under" placement="below" />
          <slur type="stop" number="1" bezier-x="-36.329897" bezier-y="-2.993677" />
          <slur type="start" bezier-x="92.001377" bezier-y="39.236658" number="1" />
          </notations>
        </note>
      <note default-x="10" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="177.48" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="177.48" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="233.85" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="233.85" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="261.22" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="261.22" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="314.1" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="314.1" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-40">
        <rest />
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="51.87" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="21.019351" bezier-y="14.52714" number="2" />
          <articulations>
            <staccato default-x="1.93" default-y="-59.01" />
            </articulations>
          </notations>
        </note>
      <note default-x="51.87" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="81.74" default-y="-104.97">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato placement="below" default-x="4.93" default-y="-3.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="81.74" default-y="-94.97">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="135.61" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-21.019351" bezier-y="14.52714" />
          <articulations>
            <staccato default-x="1.93" default-y="-61.49" />
            </articulations>
          </notations>
        </note>
      <note default-x="135.61" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="177.48" default-y="-30" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="219.35" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="219.35" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="261.22" default-y="-30">
        <rest />
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="303.09" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="303.09" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-149.97">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto placement="below" default-x="-2.82" default-y="-64" />
            </articulations>
          </notations>
        </note>
      <note default-x="10" default-y="-129.97">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="10" default-y="-109.97">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="177.48" default-y="-124.97" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="219.35" default-y="-94.97">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="219.35" default-y="-84.97">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="261.22" default-y="-79.97">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="303.09" default-y="-94.97">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="303.09" default-y="-84.97">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-144.97" print-object="no">
        <rest />
        <duration>1680</duration>
        <voice>6</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="177.48" default-y="-109.97">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="219.35" default-y="-114.97">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="261.22" default-y="-99.97">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="303.09" default-y="-109.97">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="36" width="294.43">
      <note default-x="10" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="3.18" default-y="44" />
            </articulations>
          </notations>
        </note>
      <note default-x="10" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="93.74" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="3.18" default-y="39" />
            </articulations>
          </notations>
        </note>
      <note default-x="93.74" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="156.55" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="3.18" default-y="34" />
            </articulations>
          </notations>
        </note>
      <note default-x="156.55" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="219.35" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="3.18" default-y="39" />
            </articulations>
          </notations>
        </note>
      <note default-x="219.35" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-40">
        <rest />
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="51.87" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="51.87" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="51.87" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="93.74" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="93.74" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="93.74" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="156.55" default-y="-30" print-object="no">
        <rest />
        <duration>1680</duration>
        <voice>2</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-10" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>3</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="93.74" default-y="-10" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>3</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="125.14" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>3</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="125.14" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>3</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="187.95" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>3</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="187.95" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>3</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="250.76" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>3</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="250.76" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>3</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" orientation="over" placement="above" />
          </notations>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-109.97">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="93.74" default-y="-124.97">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="no" relative-x="-35.22" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="156.55" default-y="-109.97">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="219.35" default-y="-114.97">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-144.97" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-87.53" relative-x="-35.22" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="51.87" default-y="-169.97">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="51.87" default-y="-149.97">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="93.74" default-y="-169.97">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="93.74" default-y="-149.97">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="156.55" default-y="-144.97" print-object="no">
        <rest />
        <duration>1680</duration>
        <voice>6</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-124.97" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>7</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="93.74" default-y="-124.97" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>7</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="125.14" default-y="-104.97">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>7</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="125.14" default-y="-94.97">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>7</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="187.95" default-y="-104.97">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>7</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="187.95" default-y="-94.97">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>7</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="250.76" default-y="-104.97">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>7</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="250.76" default-y="-94.97">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>7</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" orientation="over" placement="above" />
          </notations>
        </note>
      </measure>
    <measure number="37" width="334.07">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>152.21</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>79.38</staff-distance>
          </staff-layout>
        </print>
      <note default-x="95.63" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" orientation="under" placement="below" />
          <articulations>
            <tenuto default-x="3.18" default-y="24" />
            </articulations>
          </notations>
        </note>
      <note default-x="95.63" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1680</duration>
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
          <dynamics default-x="-3.4" default-y="-40.5" relative-y="-28">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="66.67" />
        </direction>
      <direction placement="below">
        <direction-type>
          <words default-x="23.07" default-y="-40" relative-y="-35" font-style="italic" font-size="11">un peu retenu</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="194.98" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="194.98" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="242.08" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="36.5" />
            <tenuto default-x="3.18" default-y="43.62" />
            </articulations>
          </notations>
        </note>
      <note default-x="242.08" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="260.17" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="36.5" />
            <tenuto default-x="3.18" default-y="43.62" />
            </articulations>
          </notations>
        </note>
      <note default-x="260.17" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="303.68" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="36.5" />
            <tenuto default-x="3.18" default-y="43.62" />
            </articulations>
          </notations>
        </note>
      <note default-x="303.68" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="81.12" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>3</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="81.12" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>3</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="121.63" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>3</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="121.63" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>3</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="170.53" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>3</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="170.53" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>3</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="215.57" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>3</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="227.57" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>3</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="275.67" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="287.67" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="81.12" default-y="-124.38">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="194.98" default-y="-169.38">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="26.5" />
            <tenuto default-x="3.18" default-y="33.62" />
            </articulations>
          </notations>
        </note>
      <note default-x="194.98" default-y="-134.38">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="242.08" default-y="-174.38">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="26.5" />
            <tenuto default-x="3.18" default-y="33.62" />
            </articulations>
          </notations>
        </note>
      <note default-x="242.08" default-y="-139.38">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="260.17" default-y="-159.38">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="26.5" />
            <tenuto default-x="3.18" default-y="33.62" />
            </articulations>
          </notations>
        </note>
      <note default-x="260.17" default-y="-124.38">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="303.68" default-y="-164.38">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="26.5" />
            <tenuto default-x="3.18" default-y="33.62" />
            </articulations>
          </notations>
        </note>
      <note default-x="303.68" default-y="-129.38">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="99.13" default-y="-109.38">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>7</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="99.13" default-y="-99.38">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>7</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="121.63" default-y="-114.38">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>7</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="121.63" default-y="-99.38">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>7</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="170.53" default-y="-114.38">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>7</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="170.53" default-y="-99.38">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>7</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="215.57" default-y="-144.38">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>7</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="227.57" default-y="-139.38">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>7</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="275.67" default-y="-144.38">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>7</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="287.67" default-y="-139.38">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>7</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="38" width="284.01">
      <note default-x="24.5" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-44.637554" bezier-y="30.478004" />
          <articulations>
            <staccato default-x="7.93" default-y="24" />
            <tenuto default-x="3.18" default-y="31.12" />
            </articulations>
          </notations>
        </note>
      <note default-x="24.5" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="above" system="only-top">
        <direction-type>
          <words default-y="3.99" relative-y="20" font-weight="bold" font-size="12">Large</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="75.2" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="162.26" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-74.32" />
            </articulations>
          </notations>
        </note>
      <note default-x="162.26" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="162.26" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="202.61" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <articulations>
            <accent default-x="2.28" default-y="18.93" />
            </articulations>
          </notations>
        </note>
      <note default-x="228.33" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <accent default-x="2.28" default-y="17.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="254.04" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tuplet type="stop" />
          <articulations>
            <accent default-x="2.28" default-y="14.5" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="10" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="42.6" default-y="-10" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>3</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="75.2" default-y="-10" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>3</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="156.26" default-y="-10" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>3</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="202.61" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>3</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="202.61" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>3</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="202.61" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>3</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="24.5" default-y="-169.38">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="16.5" />
            <tenuto default-x="3.18" default-y="23.62" />
            </articulations>
          </notations>
        </note>
      <note default-x="24.5" default-y="-134.38">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="75.2" default-y="-129.38">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="156.26" default-y="-169.38">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="156.26" default-y="-149.38">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="202.61" default-y="-174.38">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="202.61" default-y="-154.38">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-149.38">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>7</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="10" default-y="-134.38">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>7</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <dynamics default-x="-3.62" relative-x="2" relative-y="46">
            <ff />
            </dynamics>
          </direction-type>
        <staff>2</staff>
        <sound dynamics="124.44" />
        </direction>
      <note default-x="42.6" default-y="-114.38">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>7</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <tenuto default-x="3.18" default-y="36.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="75.2" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>7</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <tenuto default-x="-2.82" default-y="-93.6" />
            </articulations>
          </notations>
        </note>
      <note default-x="107.8" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>7</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <tenuto default-x="-2.82" default-y="-90.08" />
            </articulations>
          </notations>
        </note>
      <note default-x="146.26" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>7</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <tenuto default-x="-2.82" default-y="-85.93" />
            </articulations>
          </notations>
        </note>
      <note default-x="188.86" default-y="-129.38" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>7</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="202.61" default-y="-129.38" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>7</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="241.19" default-y="-129.38" print-object="no">
        <rest />
        <duration>210</duration>
        <voice>7</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>2</actual-notes>
          <normal-notes>1</normal-notes>
          </time-modification>
        <staff>2</staff>
        <notations print-object="no">
          <tuplet type="start" bracket="yes" placement="above" />
          </notations>
        </note>
      <note default-x="262.42" default-y="-194.38">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>210</duration>
        <voice>7</voice>
        <type size="cue">eighth</type>
        <time-modification>
          <actual-notes>2</actual-notes>
          <normal-notes>1</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        <notations>
          <slur type="start" bezier-x="5.625782" bezier-y="-7.877234" number="1" />
          <slur type="start" orientation="over" placement="above" bezier-x="6.784923" bezier-y="10.626641" number="2" />
          </notations>
        </note>
      <note default-x="262.42" default-y="-159.38">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>210</duration>
        <voice>7</voice>
        <type size="cue">eighth</type>
        <time-modification>
          <actual-notes>2</actual-notes>
          <normal-notes>1</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="39" width="196.6">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">couplet 2 (subitement très doux) — mixtures avec ♭ (Sol m/Mi♭)</words></direction-type><staff>2</staff></direction><note default-x="14" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <accent default-x="2.28" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="87.35" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <accent default-x="2.28" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <words default-y="-40" relative-y="-35" font-style="italic" font-size="11">subitement très doux et très lié.</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="132.25" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <accent default-x="2.28" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-30" print-object="no">
        <rest />
        <duration>1680</duration>
        <voice>2</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <note default-x="83.35" default-y="-30" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="132.25" default-y="-30" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="156.7" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="start" />
          <articulations>
            <tenuto default-x="-2.82" default-y="-34.08" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="start" />
        <voice>3</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="10" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="start" />
        <voice>3</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" orientation="over" placement="above" />
          </notations>
        </note>
      <note default-x="83.35" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="stop" />
        <voice>3</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="83.35" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="stop" />
        <voice>3</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-30" print-object="no">
        <rest />
        <duration>1680</duration>
        <voice>4</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <note default-x="83.35" default-y="-30" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>4</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="132.25" default-y="-30" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>4</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="156.7" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>4</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="43.963401" bezier-y="-27.123172" number="3" />
          </notations>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="21" default-y="-164.38">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="21" default-y="-149.38">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="21" default-y="-129.38">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="89.35" default-y="-169.38">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <accent default-x="2.28" default-y="16.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="89.35" default-y="-134.38">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="132.25" default-y="-174.38">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <accent default-x="2.28" default-y="14" />
            </articulations>
          </notations>
        </note>
      <note default-x="132.25" default-y="-139.38">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-194.38">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <slur type="stop" number="1" bezier-x="-6.135958" bezier-y="-7.486671" />
          <slur type="stop" number="2" bezier-x="-10.048815" bezier-y="7.614591" />
          </notations>
        </note>
      <note default-x="10" default-y="-159.38">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="83.35" default-y="-194.38">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="83.35" default-y="-159.38">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="83.35" default-y="-149.38">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <barline location="right">
        <bar-style>light-light</bar-style>
        </barline>
      </measure>
    <measure number="40" width="262.82">
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <direction placement="above" system="only-top">
        <direction-type>
          <words relative-x="8" relative-y="86" font-weight="bold" font-size="12">1</words>
          <words>er</words>
          <words> Mouvement</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="above">
        <direction-type>
          <wedge type="crescendo" default-y="54.84" relative-x="10.39" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="14.62" default-y="-10" print-object="no">
        <rest />
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="above">
        <direction-type>
          <wedge type="diminuendo" default-y="71.85" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="146.92" default-y="35">
        <pitch>
          <step>F</step>
          <octave>6</octave>
          </pitch>
        <duration>840</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="195.82" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="228.42" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="14.62" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="stop" />
          <articulations>
            <tenuto default-x="-2.82" default-y="-34.08" />
            </articulations>
          </notations>
        </note>
      <note default-x="59.22" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="-2.82" default-y="-34.08" />
            </articulations>
          </notations>
        </note>
      <note default-x="59.22" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="114.32" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="-2.82" default-y="-34.08" />
            </articulations>
          </notations>
        </note>
      <note default-x="114.32" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="171.37" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="-2.82" default-y="-34.08" />
            </articulations>
          </notations>
        </note>
      <note default-x="171.37" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="228.42" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="228.42" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" orientation="over" placement="above" />
          </notations>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="14.62" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>4</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="47.22" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <voice>4</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="81.72" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <voice>4</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="114.32" default-y="35">
        <pitch>
          <step>F</step>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>4</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="146.92" default-y="-30" print-object="no">
        <rest />
        <duration>1680</duration>
        <voice>4</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="14.62" default-y="-139.38">
        <rest />
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="146.92" default-y="-129.38">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="23.1973" bezier-y="13.13979" number="1" />
          <articulations>
            <staccato default-x="4.93" default-y="3.44" />
            <tenuto default-x="0.18" default-y="11.2" />
            </articulations>
          </notations>
        </note>
      <note default-x="195.82" default-y="-129.38">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="3.44" />
            <tenuto default-x="0.18" default-y="11.2" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="41" width="417.86">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>134.02</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>100.19</staff-distance>
          </staff-layout>
        </print>
      <note default-x="82.16" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="127.83" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="184.5" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="3" bezier-x="-23.743621" bezier-y="-19.944275" />
          </notations>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="223.1" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="261.69" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="37.102377" bezier-y="-29.180501" number="2" />
          <articulations>
            <staccato default-x="4.93" default-y="-69.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="261.69" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="261.69" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="300.28" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="300.28" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="300.28" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="338.88" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-69.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="338.88" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="338.88" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="377.47" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-79.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="377.47" default-y="-60">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="377.47" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="82.16" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="82.16" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="139.83" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="139.83" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="184.5" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="184.5" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="223.1" default-y="-30" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="261.69" default-y="-30" print-object="no">
        <rest />
        <duration>1680</duration>
        <voice>2</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="82.16" default-y="-155.19">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>280</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="112.61" default-y="-170.19">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="143.05" default-y="-155.19">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>280</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tuplet type="stop" />
          </notations>
        </note>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="184.5" default-y="-125.19">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <slur type="stop" number="1" bezier-x="-28.557147" bezier-y="13.86069" />
          </notations>
        </note>
      <note default-x="261.69" default-y="-125.19">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="300.28" default-y="-150.19" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="338.88" default-y="-150.19" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="82.16" default-y="-170.19" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="184.5" default-y="-170.19">
        <rest />
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="223.1" default-y="-145.19">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="-2.82" default-y="-44" />
            </articulations>
          </notations>
        </note>
      <note default-x="300.28" default-y="-145.19">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="-2.82" default-y="-44" />
            </articulations>
          </notations>
        </note>
      <note default-x="300.28" default-y="-125.19">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="377.47" default-y="-145.19">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" orientation="over" placement="above" bezier-x="13.161076" bezier-y="11.49519" number="1" />
          <articulations>
            <tenuto default-x="-2.82" default-y="-44" />
            </articulations>
          </notations>
        </note>
      <note default-x="377.47" default-y="-125.19">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="42" width="336.73">
      <note default-x="12.04" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <articulations>
            <staccato placement="above" default-x="7.93" default-y="14.06" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.04" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="12.04" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="42.48" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato placement="above" default-x="7.93" default-y="17.75" />
            </articulations>
          </notations>
        </note>
      <note default-x="42.48" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="42.48" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="72.93" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tuplet type="stop" />
          <slur type="stop" number="2" bezier-x="-25.535545" bezier-y="-39.534673" />
          <articulations>
            <staccato placement="above" default-x="7.93" default-y="21.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="72.93" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="72.93" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="103.37" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <accent placement="above" default-x="2.28" default-y="24" />
            </articulations>
          </notations>
        </note>
      <note default-x="103.37" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" orientation="over" placement="above" />
          </notations>
        </note>
      <note default-x="103.37" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="180.56" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="180.56" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="180.56" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-85.25" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="219.15" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-69.3" />
            <tenuto default-x="0.18" default-y="-76.42" />
            </articulations>
          </notations>
        </note>
      <note default-x="219.15" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="219.15" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="257.74" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            <tenuto default-x="0.18" default-y="-66.42" />
            </articulations>
          </notations>
        </note>
      <note default-x="257.74" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="257.74" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="296.34" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-44.3" />
            <tenuto default-x="0.18" default-y="-51.42" />
            </articulations>
          </notations>
        </note>
      <note default-x="296.34" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="296.34" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
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
        <duration>3360</duration>
        </backup>
      <note default-x="12.04" default-y="-150.19" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="103.37" default-y="-160.19">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="103.37" default-y="-135.19">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="180.56" default-y="-160.19">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="180.56" default-y="-135.19">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="no" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="219.15" default-y="-150.19">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="257.74" default-y="-150.19" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="12.04" default-y="-145.19">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-13.161076" bezier-y="11.49519" />
          </notations>
        </note>
      <note default-x="12.04" default-y="-125.19">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="57.71" default-y="-145.19">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="57.71" default-y="-130.19">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="103.37" default-y="-180.19">
        <rest />
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-96.06" relative-x="-32.13" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="141.97" default-y="-180.19">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <staccato default-x="1.93" default-y="-76.98" />
            <tenuto default-x="-2.82" default-y="-84.1" />
            </articulations>
          </notations>
        </note>
      <note default-x="180.56" default-y="-180.19">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="257.74" default-y="-145.19">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-44" />
            <tenuto default-x="-2.82" default-y="-51.12" />
            </articulations>
          </notations>
        </note>
      <note default-x="257.74" default-y="-125.19">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="296.34" default-y="-145.19">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-44" />
            <tenuto default-x="-2.82" default-y="-51.12" />
            </articulations>
          </notations>
        </note>
      <note default-x="296.34" default-y="-130.19">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="43" width="322.9">
      <note default-x="12.04" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" orientation="under" placement="below" />
          <articulations>
            <accent placement="below" default-x="-0.72" default-y="-44.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.04" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" orientation="over" placement="above" />
          </notations>
        </note>
      <note default-x="12.04" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="89.23" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="89.23" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="89.23" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-81.05" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="127.82" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="13.707918" bezier-y="-0.575997" number="1" />
          </notations>
        </note>
      <note default-x="127.82" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="127.82" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="166.41" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="0" bezier-y="13.691081" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="12.04" default-y="-30" print-object="no">
        <rest />
        <duration>1680</duration>
        <voice>2</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <note default-x="166.41" default-y="-30" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="233.95" default-y="-30" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="crescendo" default-y="35" relative-x="24.57" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="287.54" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="12.04" default-y="-10" print-object="no">
        <rest />
        <duration>1680</duration>
        <voice>3</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <note default-x="166.41" default-y="-10" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>3</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="233.95" default-y="-10" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>3</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="287.54" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="5.366068" bezier-y="-8.474653" number="1" />
          </notations>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="12.04" default-y="-160.19">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="12.04" default-y="-135.19">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="89.23" default-y="-160.19">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="89.23" default-y="-135.19">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="127.82" default-y="-150.19" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="166.41" default-y="-150.19" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="183.36" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="195.36" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="233.95" default-y="-140.19">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="245.95" default-y="-135.19">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <dynamics default-x="-3.4" relative-y="25">
            <pp />
            </dynamics>
          </direction-type>
        <staff>2</staff>
        <sound dynamics="72.22" />
        </direction>
      <note default-x="272.54" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="272.54" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="12.04" default-y="-180.19">
        <rest />
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="50.63" default-y="-180.19">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="8.933988" bezier-y="-7.103128" number="2" />
          </notations>
        </note>
      <note default-x="89.23" default-y="-180.19">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-8.933893" bezier-y="-7.103247" />
          </notations>
        </note>
      <note default-x="127.82" default-y="-145.19">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" orientation="over" placement="above" bezier-x="12.201168" bezier-y="7.193016" number="2" />
          </notations>
        </note>
      <note default-x="127.82" default-y="-135.19">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="166.41" default-y="-165.19">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-7.172739" bezier-y="12.2131" />
          </notations>
        </note>
      <note default-x="166.41" default-y="-145.19">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="233.95" default-y="-170.19" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="44" width="397.28">
      <print new-page="yes" page-number="4">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>70</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>99.84</staff-distance>
          </staff-layout>
        </print>
      <note default-x="82.16" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="120.36" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="158.55" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="196.75" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="diminuendo" default-y="56.34" relative-x="8.5" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="234.94" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="311.33" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="349.53" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="82.16" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="82.16" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="132.36" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="54.665079" bezier-y="-30.864192" number="2" />
          <articulations>
            <tenuto default-x="-2.82" default-y="-44" />
            </articulations>
          </notations>
        </note>
      <note default-x="196.75" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="-2.82" default-y="-51.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="196.75" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="273.14" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="-2.82" default-y="-51.98" />
            </articulations>
          </notations>
        </note>
      <note default-x="273.14" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="311.33" default-y="-30" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="349.53" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="start" />
          <articulations>
            <tenuto default-x="-2.82" default-y="-49" />
            </articulations>
          </notations>
        </note>
      <note default-x="349.53" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="82.16" default-y="-179.84">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="60.64561" bezier-y="34.46051" number="3" />
          </notations>
        </note>
      <note default-x="120.36" default-y="-149.84">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="158.55" default-y="-154.84">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="196.75" default-y="-159.84">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="234.94" default-y="-169.84">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="273.14" default-y="-159.84">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="311.33" default-y="-164.84">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="349.53" default-y="-169.84">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      </measure>
    <measure number="45" width="336.5">
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="15.14" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="60.34" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="105.53" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-18.765594" bezier-y="-95.372744" />
          </notations>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="143.72" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="181.92" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            <tenuto default-x="0.18" default-y="-61.42" />
            </articulations>
          </notations>
        </note>
      <note default-x="181.92" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="181.92" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="220.11" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-44.3" />
            <tenuto default-x="0.18" default-y="-51.42" />
            </articulations>
          </notations>
        </note>
      <note default-x="220.11" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="220.11" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="258.31" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            <tenuto default-x="0.18" default-y="-61.42" />
            </articulations>
          </notations>
        </note>
      <note default-x="258.31" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="258.31" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="296.5" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-64.3" />
            <tenuto default-x="0.18" default-y="-71.42" />
            </articulations>
          </notations>
        </note>
      <note default-x="296.5" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="296.5" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="15.14" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="15.14" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="72.34" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="72.34" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="105.53" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-55.258942" bezier-y="-29.787894" />
          </notations>
        </note>
      <note default-x="105.53" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="143.72" default-y="-30" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="181.92" default-y="-30" print-object="no">
        <rest />
        <duration>1680</duration>
        <voice>2</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="15.14" default-y="-114.84">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <tuplet type="start" bracket="yes" placement="above" />
          </notations>
        </note>
      <note default-x="45.27" default-y="-129.84">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="75.4" default-y="-114.84">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="105.53" default-y="-144.84">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="3" bezier-x="-66.054431" bezier-y="27.23159" />
          </notations>
        </note>
      <note default-x="181.92" default-y="-134.84">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            <tenuto default-x="3.18" default-y="53.62" />
            </articulations>
          </notations>
        </note>
      <note default-x="220.11" default-y="-124.84">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            <tenuto default-x="3.18" default-y="53.62" />
            </articulations>
          </notations>
        </note>
      <note default-x="258.31" default-y="-134.84">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            <tenuto default-x="3.18" default-y="53.62" />
            </articulations>
          </notations>
        </note>
      <note default-x="296.5" default-y="-144.84">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="46.5" />
            <tenuto default-x="3.18" default-y="53.62" />
            </articulations>
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="no" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="15.14" default-y="-169.84" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="105.53" default-y="-169.84">
        <rest />
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-100.79" relative-x="-34.96" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="143.72" default-y="-199.84">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <staccato default-x="1.93" default-y="-96.98" />
            <tenuto default-x="-2.82" default-y="-104.1" />
            </articulations>
          </notations>
        </note>
      <note default-x="143.72" default-y="-179.84">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="181.92" default-y="-199.84">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>quarter</type>
        <dot default-x="198.42" default-y="-204.84" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="181.92" default-y="-179.84">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>quarter</type>
        <dot default-x="198.42" default-y="-184.84" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="296.5" default-y="-199.84">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="296.5" default-y="-179.84">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="46" width="343.72">
      <direction placement="above">
        <direction-type>
          <wedge type="crescendo" default-y="57.55" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="22.36" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            <tenuto default-x="0.18" default-y="-61.42" />
            </articulations>
          </notations>
        </note>
      <note default-x="22.36" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="22.36" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="52.49" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-44.3" />
            <tenuto default-x="0.18" default-y="-51.42" />
            </articulations>
          </notations>
        </note>
      <note default-x="52.49" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="52.49" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="82.62" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tuplet type="stop" />
          <articulations>
            <staccato default-x="4.93" default-y="-33.44" />
            <tenuto default-x="0.18" default-y="-44.08" />
            </articulations>
          </notations>
        </note>
      <note default-x="82.62" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="82.62" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-4.18" default-y="-40" relative-x="3" relative-y="-28">
            <f />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="100" />
        </direction>
      <note default-x="112.75" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <strong-accent type="up" default-x="0.6" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="112.75" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="112.75" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="189.14" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="189.14" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="189.14" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.62" default-y="-40" relative-y="-57">
            <ff />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="80" />
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-69.33" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="227.33" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <accent placement="above" default-x="2.28" default-y="21.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="227.33" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="227.33" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="227.33" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="265.53" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <accent placement="above" default-x="2.28" default-y="26.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="265.53" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="265.53" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="265.53" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="303.72" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <accent placement="above" default-x="2.28" default-y="31.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="303.72" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="303.72" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="303.72" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
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
        <duration>3360</duration>
        </backup>
      <note default-x="22.36" default-y="-134.84">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>280</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <tuplet type="start" bracket="yes" placement="below" />
          </notations>
        </note>
      <note default-x="52.49" default-y="-124.84">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="82.62" default-y="-134.84">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>280</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="82.62" default-y="-114.84">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="112.75" default-y="-144.84">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <strong-accent type="up" default-x="3.6" default-y="49" />
            </articulations>
          </notations>
        </note>
      <note default-x="112.75" default-y="-119.84">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="189.14" default-y="-144.84">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="189.14" default-y="-119.84">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="227.33" default-y="-159.84">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <accent placement="above" default-x="-0.72" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="227.33" default-y="-144.84">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="265.53" default-y="-149.84">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <accent placement="above" default-x="-0.72" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="265.53" default-y="-134.84">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="291.72" default-y="-139.84">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <accent placement="above" default-x="-0.72" default-y="24.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="303.72" default-y="-134.84">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="303.72" default-y="-124.84">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="22.36" default-y="-199.84">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="22.36" default-y="-179.84">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="112.75" default-y="-169.84">
        <rest />
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="150.95" default-y="-199.84">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <staccato default-x="1.93" default-y="-96.98" />
            <tenuto default-x="-2.82" default-y="-104.1" />
            </articulations>
          </notations>
        </note>
      <note default-x="150.95" default-y="-179.84">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="189.14" default-y="-199.84">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="189.14" default-y="-179.84">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="47" width="338.9">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>153.06</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>93.25</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-0.7" default-y="-38.15" relative-y="-40">
            <sf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="124.44" />
        </direction>
      <note default-x="78.75" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.72" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="90.75" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="90.75" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" orientation="over" placement="above" />
          </notations>
        </note>
      <note default-x="90.75" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" orientation="over" placement="above" />
          </notations>
        </note>
      <note default-x="128.71" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="140.71" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="140.71" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="140.71" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="173.69" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="12.997243" bezier-y="4.351447" number="1" />
          </notations>
        </note>
      <note default-x="173.69" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="173.69" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="diminuendo" default-y="48.17" relative-x="17.01" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="218.2" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-4.043127" bezier-y="13.096433" />
          </notations>
        </note>
      <note default-x="218.2" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="218.2" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="265.68" default-y="0">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="303.54" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="303.54" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="303.54" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="90.75" default-y="-30" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="140.71" default-y="-30" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="169.69" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="203.7" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="236.7" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="265.68" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="299.54" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="90.75" default-y="-138.25">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        <notations print-object="no">
          <articulations>
            <accent default-x="2.28" default-y="49" />
            </articulations>
          </notations>
        </note>
      <note default-x="90.75" default-y="-128.25">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="90.75" default-y="-113.25">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="140.71" default-y="-138.25">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="140.71" default-y="-128.25">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="140.71" default-y="-113.25">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="184.2" default-y="-123.25">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="216.7" default-y="-128.25">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="236.7" default-y="-133.25">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="265.68" default-y="-133.25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="314.04" default-y="-138.25">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="90.75" default-y="-163.25">
        <rest />
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="119.73" default-y="-193.25">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-89" />
            <tenuto default-x="-2.82" default-y="-96.12" />
            </articulations>
          </notations>
        </note>
      <note default-x="119.73" default-y="-173.25">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="169.69" default-y="-128.25">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="0.85023" bezier-y="-11.283608" number="1" />
          </notations>
        </note>
      <note default-x="169.69" default-y="-113.25">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="203.7" default-y="-143.25">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-11.01783" bezier-y="-2.578783" />
          </notations>
        </note>
      <note default-x="203.7" default-y="-123.25">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="265.68" default-y="-163.25" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="299.54" default-y="-143.25">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="8.483969" bezier-y="-11.180731" number="1" />
          </notations>
        </note>
      <note default-x="299.54" default-y="-128.25">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="48" width="248.07">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">« Très grave » : le passage-lamento (bis m. 58)</words></direction-type><staff>2</staff></direction><note default-x="24.54" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="24.54" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="24.54" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="72.02" default-y="-10">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="116.33" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="7.007259" bezier-y="5.875095" number="2" />
          </notations>
        </note>
      <note default-x="116.33" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="116.33" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40.52" relative-x="-10" relative-y="-50">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="77.78" />
        </direction>
      <direction placement="above" system="only-top">
        <direction-type>
          <words relative-y="12" font-weight="bold" font-size="12">Très grave</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="147.83" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-3.506282" bezier-y="8.445378" />
          </notations>
        </note>
      <note default-x="192.8" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="3.18" default-y="4" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10.04" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="43.04" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="72.02" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="110.33" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="135.83" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="147.83" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="21.04" default-y="-143.25">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="43.04" default-y="-148.25">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="72.02" default-y="-148.25">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="124.83" default-y="-153.25">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="147.83" default-y="-138.25">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="192.8" default-y="-148.25">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10.04" default-y="-158.25">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-11.114704" bezier-y="-8.570287" />
          </notations>
        </note>
      <note default-x="10.04" default-y="-138.25">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="72.02" default-y="-163.25" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="110.33" default-y="-158.25">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="0" bezier-y="-16.753929" number="1" />
          </notations>
        </note>
      <note default-x="110.33" default-y="-143.25">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="147.83" default-y="-188.25">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <slur type="stop" number="1" bezier-x="-16.629649" bezier-y="2.051372" />
          <articulations>
            <tenuto default-x="-2.82" default-y="-84" />
            </articulations>
          </notations>
        </note>
      <note default-x="147.83" default-y="-153.25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <barline location="right">
        <bar-style>light-light</bar-style>
        </barline>
      </measure>
    <measure number="49" width="140.86">
      <attributes>
        <time>
          <beats>2</beats>
          <beat-type>4</beat-type>
          </time>
        </attributes>
      <note default-x="32.62" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto placement="above" default-x="3.18" default-y="4" />
            </articulations>
          </notations>
        </note>
      <note default-x="44.62" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="32.62" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="77.59" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto placement="above" default-x="3.18" default-y="9" />
            </articulations>
          </notations>
        </note>
      <note default-x="77.59" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="77.59" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>1680</duration>
        </backup>
      <note default-x="32.62" default-y="-30" print-object="no">
        <rest />
        <duration>1260</duration>
        <voice>2</voice>
        <type>quarter</type>
        <dot default-x="43.02" default-y="-25" />
        <staff>1</staff>
        </note>
      <note default-x="101.58" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="start" />
          <articulations>
            <tenuto default-x="-2.82" default-y="-41.5" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>1680</duration>
        </backup>
      <note default-x="32.62" default-y="-10" print-object="no">
        <rest />
        <duration>1260</duration>
        <voice>3</voice>
        <type>quarter</type>
        <dot default-x="43.02" default-y="-5" />
        <staff>1</staff>
        </note>
      <note default-x="101.58" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="57.699411" bezier-y="-29.479835" number="1" />
          </notations>
        </note>
      <backup>
        <duration>1680</duration>
        </backup>
      <note default-x="32.62" default-y="-143.25">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations print-object="no">
          <articulations>
            <tenuto default-x="3.18" default-y="19" />
            </articulations>
          </notations>
        </note>
      <note default-x="77.59" default-y="-138.25">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations print-object="no">
          <articulations>
            <tenuto default-x="3.18" default-y="24" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>1680</duration>
        </backup>
      <note default-x="32.62" default-y="-188.25">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="32.62" default-y="-153.25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="77.59" default-y="-208.25">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="77.59" default-y="-173.25">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <barline location="right">
        <bar-style>light-light</bar-style>
        </barline>
      </measure>
    <measure number="50" width="349.66">
      <attributes>
        <time symbol="common">
          <beats>4</beats>
          <beat-type>4</beat-type>
          </time>
        </attributes>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="66.67" />
        </direction>
      <note default-x="43.14" default-y="-10" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="109.63" default-y="-10" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="diminuendo" default-y="70" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="175.54" default-y="-143.25">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>105</duration>
        <voice>1</voice>
        <type size="cue">32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        <notations>
          <slur type="start" bezier-x="-4.59192" bezier-y="27.400592" number="2" />
          </notations>
        </note>
      <note default-x="201.75" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>105</duration>
        <voice>1</voice>
        <type size="cue">32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="215.97" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>105</duration>
        <voice>1</voice>
        <type size="cue">32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="231.72" default-y="35">
        <pitch>
          <step>F</step>
          <octave>6</octave>
          </pitch>
        <duration>105</duration>
        <voice>1</voice>
        <type size="cue">32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        <notations>
          <slur type="stop" number="2" bezier-x="-25.04588" bezier-y="-12.024227" />
          </notations>
        </note>
      <note default-x="248.89" default-y="-10" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="280.88" default-y="-10" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="43.14" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="87.13" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="-2.82" default-y="-34.08" />
            </articulations>
          </notations>
        </note>
      <note default-x="87.13" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="141.61" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="-2.82" default-y="-34.08" />
            </articulations>
          </notations>
        </note>
      <note default-x="141.61" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="248.89" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="248.89" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="312.86" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="312.86" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="43.14" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>3</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="75.12" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="109.63" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="141.61" default-y="35">
        <pitch>
          <step>F</step>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>3</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="173.59" default-y="35">
        <pitch>
          <step>F</step>
          <octave>6</octave>
          </pitch>
        <duration>840</duration>
        <tie type="stop" />
        <voice>3</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="280.88" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="312.86" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="43.14" default-y="-153.25">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="109.63" default-y="-153.25">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="169.59" default-y="-143.25">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="32.794708" bezier-y="52.871763" number="2" />
          </notations>
        </note>
      <note default-x="280.88" default-y="-143.25">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="43.14" default-y="-163.25" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="109.63" default-y="-163.25" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="173.59" default-y="-163.25" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="248.89" default-y="-93.25">
        <pitch>
          <step>G</step>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="280.88" default-y="-193.25">
        <rest />
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="312.86" default-y="-98.25">
        <pitch>
          <step>F</step>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="324.86" default-y="-93.25">
        <chord />
        <pitch>
          <step>G</step>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="51" width="466.07">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>132.72</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>90.47</staff-distance>
          </staff-layout>
        </print>
      <note default-x="82.16" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="124.55" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="166.94" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="0" bezier-y="-54.360767" />
          </notations>
        </note>
      <note default-x="228.63" default-y="20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="285.15" default-y="-10" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="320.97" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="28.957677" bezier-y="31.064147" number="1" />
          <articulations>
            <staccato placement="below" default-x="4.93" default-y="-69.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="320.97" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="320.97" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="356.8" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato placement="below" default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="356.8" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="356.8" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="392.62" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato placement="below" default-x="4.93" default-y="-69.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="392.62" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="392.62" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="428.45" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato placement="below" default-x="4.93" default-y="-79.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="428.45" default-y="-60">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="428.45" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3780</duration>
        </backup>
      <note default-x="82.16" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="82.16" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="136.56" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="136.56" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="168.89" default-y="-175.47">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>140</duration>
        <voice>2</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations print-object="no">
          <tuplet type="start" bracket="yes" />
          </notations>
        <notations>
          <slur type="start" bezier-x="7.044313" bezier-y="39.593376" number="3" />
          </notations>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="187.73" default-y="-155.47">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>140</duration>
        <voice>2</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="206.57" default-y="-140.47">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>140</duration>
        <voice>2</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="230.58" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>140</duration>
        <voice>2</voice>
        <type size="cue">32nd</type>
        <accidental>natural</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <notations print-object="no">
          <tuplet type="start" bracket="yes" />
          </notations>
        </note>
      <note default-x="249.42" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>140</duration>
        <voice>2</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="268.26" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>140</duration>
        <voice>2</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="287.1" default-y="45">
        <pitch>
          <step>A</step>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type size="cue">eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="3" bezier-x="-38.318601" bezier-y="-12.204205" />
          </notations>
        </note>
      <note default-x="320.97" default-y="-30" print-object="no">
        <rest />
        <duration>1680</duration>
        <voice>2</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3780</duration>
        </backup>
      <note default-x="82.16" default-y="-145.47">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>280</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <tuplet type="start" bracket="yes" placement="below" />
          </notations>
        </note>
      <note default-x="110.42" default-y="-160.47">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="138.68" default-y="-145.47">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>280</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="163.54" default-y="-175.47">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-13.563421" bezier-y="25.658494" />
          </notations>
        </note>
      <note default-x="228.63" default-y="-150.47" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="285.15" default-y="-135.47">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="24.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="285.15" default-y="-115.47">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="356.8" default-y="-135.47">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="24.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="356.8" default-y="-115.47">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="428.45" default-y="-135.47">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="10.805321" bezier-y="12.591079" number="2" />
          <slur type="start" bezier-x="29.24772" bezier-y="15.025129" number="3" />
          </notations>
        </note>
      <note default-x="428.45" default-y="-115.47">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="52" width="304.61">
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-78.12" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="12.04" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <articulations>
            <staccato default-x="4.93" default-y="-69.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.04" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="12.04" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="40.3" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="40.3" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="40.3" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="68.56" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tuplet type="stop" />
          <articulations>
            <staccato default-x="4.93" default-y="-44.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="68.56" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="68.56" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="96.82" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          <slur type="stop" number="1" bezier-x="-20.664856" bezier-y="38.299126" />
          </notations>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.72" default-y="18.76" />
            </articulations>
          </notations>
        </note>
      <note default-x="96.82" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" orientation="over" placement="above" />
          </notations>
        </note>
      <note default-x="96.82" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="159.51" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="159.51" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="159.51" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-91.54" relative-x="3.78" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="195.34" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" orientation="over" placement="above" bezier-x="22.986522" bezier-y="21.421122" number="1" />
          <articulations>
            <staccato default-x="4.93" default-y="-69.3" />
            <tenuto default-x="0.18" default-y="-76.42" />
            </articulations>
          </notations>
        </note>
      <note default-x="195.34" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="195.34" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="231.16" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-59.3" />
            <tenuto default-x="0.18" default-y="-66.42" />
            </articulations>
          </notations>
        </note>
      <note default-x="231.16" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="231.16" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="266.99" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-44.3" />
            <tenuto default-x="0.18" default-y="-51.42" />
            </articulations>
          </notations>
        </note>
      <note default-x="266.99" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="266.99" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
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
        <duration>3360</duration>
        </backup>
      <note default-x="12.04" default-y="-135.47">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-13.625105" bezier-y="9.468196" />
          <articulations>
            <tenuto placement="above" default-x="0.18" default-y="24.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="12.04" default-y="-115.47">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="54.43" default-y="-135.47">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="54.43" default-y="-120.47">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="96.82" default-y="-150.47">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <slur type="stop" number="3" bezier-x="-24.746517" bezier-y="21.651639" />
          <articulations>
            <accent default-x="2.28" default-y="34" />
            </articulations>
          </notations>
        </note>
      <note default-x="96.82" default-y="-125.47">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="159.51" default-y="-150.47">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="159.51" default-y="-125.47">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="195.34" default-y="-140.47">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="231.16" default-y="-135.47">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" orientation="over" placement="above" bezier-x="25.394416" bezier-y="8.557899" number="2" />
          <articulations>
            <staccato default-x="4.93" default-y="24.3" />
            <tenuto default-x="0.18" default-y="31.42" />
            </articulations>
          </notations>
        </note>
      <note default-x="231.16" default-y="-115.47">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="266.99" default-y="-135.47">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="19.3" />
            <tenuto default-x="0.18" default-y="26.42" />
            </articulations>
          </notations>
        </note>
      <note default-x="266.99" default-y="-120.47">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="12.04" default-y="-160.47" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="96.82" default-y="-160.47" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="123.69" default-y="-170.47">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <staccato default-x="1.93" default-y="-76.98" />
            <tenuto default-x="-2.82" default-y="-84.1" />
            </articulations>
          </notations>
        </note>
      <note default-x="159.51" default-y="-170.47">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="231.16" default-y="-160.47" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="53" width="306.81">
      <note default-x="13.04" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" orientation="under" placement="below" />
          <slur type="stop" number="1" bezier-x="-23.123972" bezier-y="21.635367" />
          <articulations>
            <accent placement="above" default-x="-0.72" default-y="13.89" />
            </articulations>
          </notations>
        </note>
      <note default-x="13.04" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" orientation="over" placement="above" />
          </notations>
        </note>
      <note default-x="13.04" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" orientation="over" placement="above" />
          </notations>
        </note>
      <note default-x="84.69" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="84.69" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="84.69" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-82.28" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="120.51" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" orientation="over" placement="above" bezier-x="11.595096" bezier-y="6.815078" number="1" />
          </notations>
        </note>
      <note default-x="120.51" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="120.51" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="156.34" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-6.389092" bezier-y="11.835162" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="13.04" default-y="-30" print-object="no">
        <rest />
        <duration>1680</duration>
        <voice>2</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <note default-x="156.34" default-y="-30" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="220.63" default-y="-30" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="271.45" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="13.04" default-y="-10" print-object="no">
        <rest />
        <duration>1680</duration>
        <voice>3</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <note default-x="156.34" default-y="-10" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>3</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="220.63" default-y="-10" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>3</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="271.45" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="5.366068" bezier-y="-8.474653" number="1" />
          </notations>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="13.04" default-y="-150.47">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <slur type="stop" number="2" bezier-x="-17.522207" bezier-y="20.275262" />
          <articulations>
            <accent default-x="2.28" default-y="34" />
            </articulations>
          </notations>
        </note>
      <note default-x="13.04" default-y="-125.47">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="84.69" default-y="-150.47">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="84.69" default-y="-125.47">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="120.51" default-y="-140.47" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="156.34" default-y="-140.47" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="172.8" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="17.48218" bezier-y="13.248547" number="2" />
          <articulations>
            <staccato placement="above" default-x="4.93" default-y="-16.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="184.8" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="220.63" default-y="-130.47">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-13.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="232.63" default-y="-125.47">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="256.45" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-17.48218" bezier-y="13.248547" />
          <articulations>
            <staccato placement="above" default-x="4.93" default-y="-16.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="256.45" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="13.04" default-y="-170.47">
        <rest />
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="48.87" default-y="-170.47">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="10.403284" bezier-y="-2.875091" number="2" />
          <articulations>
            <staccato default-x="1.93" default-y="-71.5" />
            <tenuto default-x="-2.82" default-y="-78.62" />
            </articulations>
          </notations>
        </note>
      <note default-x="84.69" default-y="-170.47">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="2" bezier-x="-4.819678" bezier-y="-9.657389" />
          </notations>
        </note>
      <note default-x="120.51" default-y="-135.47">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" orientation="over" placement="above" bezier-x="11.595096" bezier-y="6.815078" number="2" />
          </notations>
        </note>
      <note default-x="120.51" default-y="-125.47">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="156.34" default-y="-155.47">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-6.389092" bezier-y="11.835162" />
          </notations>
        </note>
      <note default-x="156.34" default-y="-135.47">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="220.63" default-y="-160.47" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="54" width="401.14">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>104.7</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>86.83</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-71.44" relative-y="-30">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="77.78" />
        </direction>
      <note default-x="82.16" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="115.2" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="148.25" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="181.29" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="214.33" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="315.55" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="352.59" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="352.59" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="82.16" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="82.16" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="127.21" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="181.29" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="181.29" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="290.77" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="290.77" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="348.59" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="348.59" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="82.16" default-y="-10" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>3</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="148.25" default-y="-10" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>3</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="216.28" default-y="-156.83">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>84</duration>
        <voice>3</voice>
        <type size="cue">16th</type>
        <time-modification>
          <actual-notes>5</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <direction placement="above">
        <direction-type>
          <words default-y="30.24" relative-y="15" font-style="italic" font-size="11">6</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="229.16" default-y="-146.83">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>84</duration>
        <voice>3</voice>
        <type size="cue">16th</type>
        <time-modification>
          <actual-notes>5</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="254.05" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>84</duration>
        <tie type="start" />
        <voice>3</voice>
        <type size="cue">16th</type>
        <time-modification>
          <actual-notes>5</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="266.94" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>84</duration>
        <tie type="start" />
        <voice>3</voice>
        <type size="cue">16th</type>
        <time-modification>
          <actual-notes>5</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="279.83" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>84</duration>
        <voice>3</voice>
        <type size="cue">16th</type>
        <time-modification>
          <actual-notes>5</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        <notations>
          <slur type="stop" number="2" bezier-x="-30.068648" bezier-y="-17.524457" />
          </notations>
        </note>
      <note default-x="290.77" default-y="-10" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>3</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="315.55" default-y="-10" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>3</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="82.16" default-y="-166.83">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="30.132229" bezier-y="8.506069" number="3" />
          </notations>
        </note>
      <note default-x="115.2" default-y="-136.83">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="148.25" default-y="-141.83">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="181.29" default-y="-146.83">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="210.33" default-y="-156.83">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="3" bezier-x="-18.326783" bezier-y="22.072439" />
          <slur type="start" orientation="over" placement="above" bezier-x="-9.721561" bezier-y="30.104127" number="2" />
          </notations>
        </note>
      <note default-x="315.55" default-y="-151.83">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" orientation="over" placement="above" bezier-x="32.732797" bezier-y="24.944039" number="2" />
          </notations>
        </note>
      <note default-x="348.59" default-y="-91.83">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="82.16" default-y="-156.83" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="148.25" default-y="-156.83" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="214.33" default-y="-156.83" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="290.77" default-y="-106.83">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="348.59" default-y="-111.83">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="360.59" default-y="-106.83">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="55" width="371.22">
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="15.14" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="54.24" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="93.33" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-6.736449" bezier-y="-118.369251" />
          </notations>
        </note>
      <note default-x="204.22" default-y="-10" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="237.26" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="44.716962" bezier-y="26.991169" number="1" />
          </notations>
        </note>
      <note default-x="237.26" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="237.26" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="270.3" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="270.3" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="270.3" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="303.34" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="303.34" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="303.34" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="336.38" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="336.38" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="336.38" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3780</duration>
        </backup>
      <note default-x="15.14" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="15.14" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="66.24" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="66.24" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="66.24" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="95.28" default-y="-131.83">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>140</duration>
        <voice>2</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations print-object="no">
          <tuplet type="start" bracket="yes" />
          </notations>
        <notations>
          <slur type="start" bezier-x="8.919564" bezier-y="32.566132" number="3" />
          </notations>
        </note>
      <note default-x="112.66" default-y="-111.83">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>140</duration>
        <voice>2</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="130.03" default-y="-96.83">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>140</duration>
        <voice>2</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="154.04" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>140</duration>
        <voice>2</voice>
        <type size="cue">32nd</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <notations print-object="no">
          <tuplet type="start" bracket="yes" />
          </notations>
        </note>
      <note default-x="171.41" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>140</duration>
        <voice>2</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="188.79" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>140</duration>
        <voice>2</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="206.17" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type size="cue">eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="3" bezier-x="-33.503443" bezier-y="-4.198916" />
          </notations>
        </note>
      <note default-x="237.26" default-y="-65">
        <rest />
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="270.3" default-y="-30" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="15.14" default-y="-101.83">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <tuplet type="start" bracket="yes" placement="above" />
          </notations>
        </note>
      <note default-x="41.2" default-y="-116.83">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="67.27" default-y="-101.83">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="89.33" default-y="-131.83">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-37.518375" bezier-y="16.911905" />
          </notations>
        </note>
      <note default-x="204.22" default-y="-136.83" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="237.26" default-y="-121.83">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <tenuto default-x="3.18" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="270.3" default-y="-111.83">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <tenuto default-x="3.18" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="303.34" default-y="-121.83">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <tenuto default-x="3.18" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="336.38" default-y="-131.83">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <tenuto default-x="3.18" default-y="46.5" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>3780</duration>
        </backup>
      <note default-x="15.14" default-y="-156.83" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="93.33" default-y="-156.83">
        <rest />
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="152.09" default-y="-30">
        <rest />
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="204.22" default-y="-186.83">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <staccato default-x="1.93" default-y="-96.98" />
            <tenuto default-x="-2.82" default-y="-104.1" />
            </articulations>
          </notations>
        </note>
      <note default-x="204.22" default-y="-166.83">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="237.26" default-y="-186.83">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>quarter</type>
        <dot default-x="253.76" default-y="-191.83" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="237.26" default-y="-166.83">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>quarter</type>
        <dot default-x="253.76" default-y="-171.83" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="336.38" default-y="-186.83">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="336.38" default-y="-166.83">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="56" width="305.14">
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-65.65" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="22.36" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <articulations>
            <tenuto default-x="0.18" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="22.36" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="22.36" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="48.43" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="-44.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="48.43" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="48.43" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="77.07" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tuplet type="stop" />
          <articulations>
            <tenuto default-x="0.18" default-y="-34.08" />
            </articulations>
          </notations>
        </note>
      <note default-x="77.07" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="77.07" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-0.7" default-y="-42.05" relative-x="8" relative-y="-28.2">
            <sf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="124.44" />
        </direction>
      <note default-x="103.13" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="103.13" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" orientation="over" placement="above" />
          </notations>
        </note>
      <note default-x="103.13" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.62" default-y="-40" relative-y="-37.6">
            <ff />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89" />
        </direction>
      <note default-x="169.21" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <slur type="stop" number="1" bezier-x="-44.342097" bezier-y="27.602687" />
          </notations>
        </note>
      <note default-x="169.21" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="169.21" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-82.74" relative-x="3.78" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="202.25" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-64.32" />
            </articulations>
          </notations>
        </note>
      <note default-x="202.25" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="202.25" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="202.25" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="235.29" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-54.32" />
            </articulations>
          </notations>
        </note>
      <note default-x="235.29" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="235.29" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="235.29" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="268.33" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-44.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="268.33" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="268.33" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="268.33" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
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
        <duration>3360</duration>
        </backup>
      <note default-x="22.36" default-y="-121.83">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>280</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <tuplet type="start" bracket="yes" placement="below" />
          <articulations>
            <tenuto default-x="3.18" default-y="49.07" />
            </articulations>
          </notations>
        </note>
      <note default-x="48.43" default-y="-111.83">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <tenuto default-x="3.18" default-y="52.58" />
            </articulations>
          </notations>
        </note>
      <note default-x="77.07" default-y="-121.83">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>280</duration>
        <voice>5</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <tuplet type="stop" />
          <articulations>
            <tenuto default-x="3.18" default-y="56.43" />
            </articulations>
          </notations>
        </note>
      <note default-x="77.07" default-y="-101.83">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="103.13" default-y="-131.83">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="103.13" default-y="-106.83">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="169.21" default-y="-131.83">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="169.21" default-y="-106.83">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="202.25" default-y="-146.83">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <accent placement="below" default-x="-0.72" default-y="-44" />
            </articulations>
          </notations>
        </note>
      <note default-x="202.25" default-y="-131.83">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="235.29" default-y="-136.83">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <accent placement="below" default-x="-0.72" default-y="-44" />
            </articulations>
          </notations>
        </note>
      <note default-x="235.29" default-y="-121.83">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="268.33" default-y="-126.83">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <accent placement="below" default-x="-0.72" default-y="-44" />
            </articulations>
          </notations>
        </note>
      <note default-x="280.33" default-y="-121.83">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="268.33" default-y="-111.83">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="22.36" default-y="-186.83">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="22.36" default-y="-166.83">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="103.13" default-y="-156.83">
        <rest />
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="136.17" default-y="-186.83">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <accent default-x="-3.72" default-y="-96.98" />
            </articulations>
          </notations>
        </note>
      <note default-x="136.17" default-y="-166.83">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="169.21" default-y="-186.83">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="169.21" default-y="-166.83">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="57" width="481.39">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>117.67</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>80.18</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-0.7" default-y="-31.62" relative-y="-40">
            <sf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="124.44" />
        </direction>
      <note default-x="81.75" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.72" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="93.75" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" orientation="over" placement="above" />
          </notations>
        </note>
      <note default-x="93.75" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" orientation="over" placement="above" />
          </notations>
        </note>
      <note default-x="93.75" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" orientation="over" placement="above" />
          </notations>
        </note>
      <note default-x="168.87" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="180.87" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="180.87" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="180.87" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="diminuendo" default-y="47.58" relative-x="9.15" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="234.66" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="16.291523" bezier-y="6.502814" number="1" />
          <slur type="start" bezier-x="70.027136" bezier-y="30.410361" number="2" />
          </notations>
        </note>
      <note default-x="234.66" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="234.66" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="294.95" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-8.672076" bezier-y="15.2478" />
          </notations>
        </note>
      <note default-x="294.95" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="294.95" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="380.02" default-y="0">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="diminuendo" default-y="31.57" relative-x="19.44" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="433.8" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="19.116452" bezier-y="8.846389" number="1" />
          </notations>
        </note>
      <note default-x="433.8" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="433.8" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="93.75" default-y="-30" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="180.87" default-y="-30" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="230.66" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="280.44" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="330.23" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="380.02" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="429.8" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="93.75" default-y="-125.18">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        <notations print-object="no">
          <articulations>
            <accent default-x="2.28" default-y="49" />
            </articulations>
          </notations>
        </note>
      <note default-x="93.75" default-y="-115.18">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="93.75" default-y="-100.18">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="180.87" default-y="-125.18">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="180.87" default-y="-115.18">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="180.87" default-y="-100.18">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-50.99" relative-x="20.58" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="245.16" default-y="-110.18">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="293.45" default-y="-115.18">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="330.23" default-y="-120.18">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="380.02" default-y="-120.18">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="444.3" default-y="-125.18">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="93.75" default-y="-150.18">
        <rest />
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="143.53" default-y="-180.18">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <accent default-x="-3.72" default-y="-89" />
            </articulations>
          </notations>
        </note>
      <note default-x="143.53" default-y="-160.18">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="230.66" default-y="-115.18">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="5.701172" bezier-y="-13.888963" number="3" />
          <slur type="start" bezier-x="64.250876" bezier-y="-43.467947" number="4" />
          </notations>
        </note>
      <note default-x="230.66" default-y="-100.18">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="280.44" default-y="-130.18">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="3" bezier-x="-14.090116" bezier-y="-5.184138" />
          </notations>
        </note>
      <note default-x="280.44" default-y="-110.18">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="380.02" default-y="-150.18" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="429.8" default-y="-130.18">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="429.8" default-y="-115.18">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="58" width="368.84">
      <note default-x="27.54" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-13.297401" bezier-y="16.336353" />
          </notations>
        </note>
      <note default-x="27.54" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="27.54" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="112.61" default-y="-10">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="diminuendo" default-y="21.28" relative-x="22.87" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="168.4" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="7.824546" bezier-y="11.67098" number="1" />
          </notations>
        </note>
      <note default-x="168.4" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="168.4" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="218.18" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="2" bezier-x="-66.675968" bezier-y="37.187432" />
          <slur type="stop" number="1" bezier-x="-11.61606" bezier-y="7.905849" />
          <articulations>
            <tenuto default-x="3.18" default-y="9" />
            </articulations>
          </notations>
        </note>
      <note default-x="218.18" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="above" system="only-top">
        <direction-type>
          <words relative-y="12" font-weight="bold" font-size="12">Très grave</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-x="-10" relative-y="-50">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="77.78" />
        </direction>
      <note default-x="286.86" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="3.18" default-y="4" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="13.04" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="62.83" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="112.61" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="162.4" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="200.18" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="212.18" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>2</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="24.04" default-y="-130.18">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="62.83" default-y="-135.18">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="112.61" default-y="-135.18">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-96.72" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="176.9" default-y="-140.18">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="216.68" default-y="-125.18">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations print-object="no">
          <articulations>
            <tenuto default-x="3.18" default-y="24" />
            </articulations>
          </notations>
        </note>
      <note default-x="286.86" default-y="-135.18">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations print-object="no">
          <articulations>
            <tenuto default-x="3.18" default-y="16.5" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="13.04" default-y="-145.18">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="13.04" default-y="-125.18">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="112.61" default-y="-150.18" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="162.4" default-y="-145.18">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="3.500785" bezier-y="-18.727492" number="1" />
          </notations>
        </note>
      <note default-x="162.4" default-y="-130.18">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="212.18" default-y="-175.18">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <slur type="stop" number="4" bezier-x="-73.716964" bezier-y="-24.154641" />
          <slur type="stop" number="1" bezier-x="-19.05173" bezier-y="0.077809" />
          <articulations>
            <tenuto default-x="-2.82" default-y="-84" />
            </articulations>
          </notations>
        </note>
      <note default-x="212.18" default-y="-140.18">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <barline location="right">
        <bar-style>light-light</bar-style>
        </barline>
      </measure>
    <measure number="59" width="227.26">
      <attributes>
        <time>
          <beats>2</beats>
          <beat-type>4</beat-type>
          </time>
        </attributes>
      <note default-x="42.08" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto placement="above" default-x="3.18" default-y="4" />
            </articulations>
          </notations>
        </note>
      <note default-x="54.08" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="42.08" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="116.76" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <fermata type="upright" default-y="4.84" relative-y="10" />
          <articulations>
            <tenuto placement="above" default-x="3.18" default-y="9" />
            </articulations>
          </notations>
        </note>
      <note default-x="116.76" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="116.76" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>1680</duration>
        </backup>
      <note default-x="42.08" default-y="-130.18">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations print-object="no">
          <articulations>
            <tenuto default-x="3.18" default-y="19" />
            </articulations>
          </notations>
        </note>
      <note default-x="116.76" default-y="-125.18">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations print-object="no">
          <articulations>
            <tenuto default-x="3.18" default-y="24" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>1680</duration>
        </backup>
      <note default-x="42.08" default-y="-175.18">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="42.08" default-y="-140.18">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="116.76" default-y="-195.18">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <fermata type="inverted" default-y="-99.84" relative-y="-10" />
          <articulations>
            <tenuto default-x="-2.82" default-y="-104" />
            </articulations>
          </notations>
        </note>
      <note default-x="116.76" default-y="-160.18">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <barline location="right">
        <bar-style>light-light</bar-style>
        </barline>
      </measure>
    <measure number="60" width="584.57">
      <print new-page="yes" page-number="5">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>70</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>129.54</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <time symbol="common">
          <beats>4</beats>
          <beat-type>4</beat-type>
          </time>
        </attributes>
      <direction placement="above" system="only-top">
        <direction-type>
          <words default-x="-45.08" default-y="31.37" relative-x="10" relative-y="20" font-weight="bold" font-size="12">1</words>
          <words>er</words>
          <words> Mouvement</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <words default-y="-69.86" relative-y="-35" font-style="italic" font-size="11">marquez le chant</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="111.21" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          <slur type="start" bezier-x="142.725758" bezier-y="48.072858" number="1" />
          </notations>
        </note>
      <note default-x="346.99" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="405.93" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="464.88" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="523.82" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="111.21" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
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
      <note default-x="140.68" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
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
      <note default-x="170.15" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>210</duration>
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
      <note default-x="199.63" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-81.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="229.1" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-81.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="258.57" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
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
      <note default-x="288.04" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>210</duration>
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
      <note default-x="317.52" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-81.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="346.99" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-81.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="376.46" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-81.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="405.93" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-81.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="435.41" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-81.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="464.88" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-81.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="494.35" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-81.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="523.82" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-81.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="553.3" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-81.5" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-113.84" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="111.21" default-y="-179.54" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="229.1" default-y="-164.54">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="229.1" default-y="-139.54">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="no" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-113.84" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="346.99" default-y="-159.54">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="464.88" default-y="-164.54">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="464.88" default-y="-139.54">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="no" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="111.21" default-y="-209.54">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-11.56" default-y="10.3" />
          </notations>
        </note>
      <note default-x="111.21" default-y="-189.54">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-11.56" default-y="10.3" />
          </notations>
        </note>
      <note default-x="111.21" default-y="-164.54">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-11.56" default-y="10.3" />
          </notations>
        </note>
      <note default-x="229.1" default-y="-199.54">
        <rest />
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="346.99" default-y="-229.54">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="-9.7" />
          </notations>
        </note>
      <note default-x="346.99" default-y="-209.54">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="-9.7" />
          </notations>
        </note>
      <note default-x="346.99" default-y="-184.54">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="-9.7" />
          </notations>
        </note>
      <note default-x="464.88" default-y="-199.54">
        <rest />
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="61" width="492.92">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">REFRAIN final, « marquez le chant »</words></direction-type><staff>2</staff></direction><note default-x="19.56" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="137.45" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="196.4" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="255.34" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="314.29" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="373.23" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="19.56" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-91.48" />
            </articulations>
          </notations>
        </note>
      <note default-x="49.03" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-90.32" />
            </articulations>
          </notations>
        </note>
      <note default-x="78.51" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-89.15" />
            </articulations>
          </notations>
        </note>
      <note default-x="107.98" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-87.99" />
            </articulations>
          </notations>
        </note>
      <note default-x="137.45" default-y="-30">
        <rest />
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="166.92" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-85.66" />
            </articulations>
          </notations>
        </note>
      <note default-x="196.4" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-84.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="225.87" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-83.33" />
            </articulations>
          </notations>
        </note>
      <note default-x="255.34" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-82.17" />
            </articulations>
          </notations>
        </note>
      <note default-x="284.81" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-81" />
            </articulations>
          </notations>
        </note>
      <note default-x="314.29" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-79.84" />
            </articulations>
          </notations>
        </note>
      <note default-x="343.76" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-78.68" />
            </articulations>
          </notations>
        </note>
      <note default-x="373.23" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-77.51" />
            </articulations>
          </notations>
        </note>
      <note default-x="402.71" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-76.35" />
            </articulations>
          </notations>
        </note>
      <note default-x="432.18" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-75.18" />
            </articulations>
          </notations>
        </note>
      <note default-x="461.65" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-74.02" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="19.56" default-y="-154.54">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="137.45" default-y="-164.54">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="137.45" default-y="-144.54">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="255.34" default-y="-179.54" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="373.23" default-y="-164.54">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="373.23" default-y="-139.54">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="19.56" default-y="-224.54">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="-4.7" />
          </notations>
        </note>
      <note default-x="19.56" default-y="-199.54">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="-4.7" />
          </notations>
        </note>
      <note default-x="19.56" default-y="-179.54">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="-4.7" />
          </notations>
        </note>
      <note default-x="137.45" default-y="-199.54">
        <rest />
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="255.34" default-y="-219.54">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="0.3" />
          </notations>
        </note>
      <note default-x="255.34" default-y="-199.54">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="0.3" />
          </notations>
        </note>
      <note default-x="255.34" default-y="-174.54">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="0.3" />
          </notations>
        </note>
      <note default-x="373.23" default-y="-199.54">
        <rest />
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="62" width="571.06">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150.05</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="84.19" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          <slur type="stop" number="1" bezier-x="-5.499906" bezier-y="8.555173" />
          <slur type="start" bezier-x="145.854022" bezier-y="50.596529" number="1" />
          </notations>
        </note>
      <note default-x="326.72" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="387.36" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="447.99" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="508.62" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="84.19" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-66.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="114.5" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-66.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="144.82" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-66.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="175.14" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-66.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="205.45" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-66.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="235.77" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-66.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="266.09" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-66.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="296.41" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-66.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="326.72" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-66.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="357.04" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-66.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="387.36" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-66.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="417.67" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-66.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="435.99" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-66.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="447.99" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="478.31" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-66.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="508.62" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-66.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="538.94" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-66.5" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="84.19" default-y="-115" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="205.45" default-y="-145">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="205.45" default-y="-120">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="326.72" default-y="-115" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="447.99" default-y="-145">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="447.99" default-y="-120">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="84.19" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="25.3" />
          </notations>
        </note>
      <note default-x="84.19" default-y="-110">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="25.3" />
          </notations>
        </note>
      <note default-x="84.19" default-y="-85">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="25.3" />
          </notations>
        </note>
      <note default-x="205.45" default-y="-135" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="326.72" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="15.3" />
          </notations>
        </note>
      <note default-x="326.72" default-y="-120">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="15.3" />
          </notations>
        </note>
      <note default-x="326.72" default-y="-95">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="15.3" />
          </notations>
        </note>
      <note default-x="447.99" default-y="-135" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="63" width="506.43">
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="19.56" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="19.56" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="140.83" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="140.83" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="205.46" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="205.46" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="262.1" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="322.73" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="383.37" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="444" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="19.56" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-71.46" />
            </articulations>
          </notations>
        </note>
      <note default-x="49.88" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-68.99" />
            </articulations>
          </notations>
        </note>
      <note default-x="80.19" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-66.51" />
            </articulations>
          </notations>
        </note>
      <note default-x="110.51" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-64.04" />
            </articulations>
          </notations>
        </note>
      <note default-x="140.83" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-71.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="171.15" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-71.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="201.46" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-71.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="231.78" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-71.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="262.1" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-71.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="292.41" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-71.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="322.73" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-71.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="353.05" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-71.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="383.37" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-71.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="413.68" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-71.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="444" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-71.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="474.32" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-71.5" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="19.56" default-y="-115" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="140.83" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="140.83" default-y="-140">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="140.83" default-y="-125">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="262.1" default-y="-115" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="383.37" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="383.37" default-y="-140">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="383.37" default-y="-125">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="19.56" default-y="-135">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="20.3" />
          </notations>
        </note>
      <note default-x="19.56" default-y="-115">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="20.3" />
          </notations>
        </note>
      <note default-x="19.56" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="20.3" />
          </notations>
        </note>
      <note default-x="140.83" default-y="-135" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="262.1" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-11.56" default-y="10.3" />
          </notations>
        </note>
      <note default-x="262.1" default-y="-125">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-11.56" default-y="10.3" />
          </notations>
        </note>
      <note default-x="262.1" default-y="-100">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-11.56" default-y="10.3" />
          </notations>
        </note>
      <note default-x="383.37" default-y="-135" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="64" width="571.06">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>99.38</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>92.5</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="84.19" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="84.19" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="205.45" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="205.45" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="270.09" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="270.09" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="326.72" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="387.36" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="447.99" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="508.62" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="84.19" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-76.45" />
            </articulations>
          </notations>
        </note>
      <note default-x="114.5" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-73.15" />
            </articulations>
          </notations>
        </note>
      <note default-x="144.82" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-69.85" />
            </articulations>
          </notations>
        </note>
      <note default-x="175.14" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-66.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="205.45" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-76.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="235.77" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-76.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="266.09" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-76.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="296.41" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-76.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="326.72" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-76.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="357.04" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-76.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="387.36" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-76.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="417.67" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-76.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="447.99" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-76.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="478.31" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-76.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="508.62" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-76.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="538.94" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-76.5" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="84.19" default-y="-142.5" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="205.45" default-y="-182.5">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="205.45" default-y="-172.5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="205.45" default-y="-157.5">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="326.72" default-y="-142.5" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="447.99" default-y="-182.5">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="447.99" default-y="-172.5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="447.99" default-y="-157.5">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="84.19" default-y="-167.5">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="15.3" />
          </notations>
        </note>
      <note default-x="84.19" default-y="-147.5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="15.3" />
          </notations>
        </note>
      <note default-x="84.19" default-y="-122.5">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="15.3" />
          </notations>
        </note>
      <note default-x="205.45" default-y="-162.5" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="326.72" default-y="-177.5">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-11.56" default-y="5.3" />
          </notations>
        </note>
      <note default-x="326.72" default-y="-157.5">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-11.56" default-y="5.3" />
          </notations>
        </note>
      <note default-x="326.72" default-y="-132.5">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-11.56" default-y="5.3" />
          </notations>
        </note>
      <note default-x="447.99" default-y="-162.5" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="65" width="506.43">
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="19.56" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-75.826493" bezier-y="41.186584" />
          </notations>
        </note>
      <note default-x="262.1" default-y="-10" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="322.73" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <tenuto default-x="3.18" default-y="8.98" />
            </articulations>
          </notations>
        </note>
      <note default-x="383.37" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <tenuto default-x="3.18" default-y="6.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="444" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <tenuto default-x="3.18" default-y="4.02" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="19.56" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-81.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="49.88" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-81.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="80.19" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-81.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="110.51" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-81.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="140.83" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-81.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="171.15" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-81.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="201.46" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-81.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="231.78" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-81.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="262.1" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-81.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="262.1" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="292.41" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-81.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="322.73" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-84.07" />
            </articulations>
          </notations>
        </note>
      <note default-x="353.05" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-88.54" />
            </articulations>
          </notations>
        </note>
      <note default-x="383.37" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-93.01" />
            </articulations>
          </notations>
        </note>
      <note default-x="413.68" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-97.49" />
            </articulations>
          </notations>
        </note>
      <note default-x="444" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-101.96" />
            </articulations>
          </notations>
        </note>
      <note default-x="474.32" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>210</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-106.43" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="19.56" default-y="-142.5" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="140.83" default-y="-127.5">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="140.83" default-y="-107.5">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="262.1" default-y="-142.5">
        <rest />
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="19.56" default-y="-162.5">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="20.3" />
          </notations>
        </note>
      <note default-x="19.56" default-y="-142.5">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="20.3" />
          </notations>
        </note>
      <note default-x="19.56" default-y="-117.5">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="1" default-x="-13.06" default-y="20.3" />
          </notations>
        </note>
      <note default-x="140.83" default-y="-162.5">
        <rest />
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="262.1" default-y="-177.5">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="383.37" default-y="-162.5">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="444" default-y="-152.5">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="66" width="436.3">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>99.38</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>103.12</staff-distance>
          </staff-layout>
        </print>
      <note default-x="81.12" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto placement="above" default-x="3.18" default-y="4.48" />
            </articulations>
          </notations>
        </note>
      <note default-x="81.12" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="81.12" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="122.99" default-y="-20">
        <rest />
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="164.87" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="164.87" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="259.07" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="259.07" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="323.83" default-y="-138.12">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>60</duration>
        <voice>1</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>7</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        <notations>
          <articulations>
            <accent default-x="-0.5" default-y="-42.8" />
            </articulations>
          </notations>
        </note>
      <note default-x="349.25" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>60</duration>
        <voice>1</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>7</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="363.25" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>60</duration>
        <voice>1</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>7</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="376.66" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>60</duration>
        <voice>1</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>7</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="390.07" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>60</duration>
        <voice>1</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>7</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="403.49" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>60</duration>
        <voice>1</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>7</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        </note>
      <note default-x="416.9" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>60</duration>
        <tie type="start" />
        <voice>1</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>7</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <notations>
          <tied type="start" orientation="over" placement="above" />
          </notations>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        </note>
      <backup>
        <duration>3780</duration>
        </backup>
      <note default-x="81.12" default-y="-173.12">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" orientation="over" placement="above" />
          </notations>
        </note>
      <note default-x="211.97" default-y="-208.12">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="211.97" default-y="-173.12">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="323.83" default-y="-138.12">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>5</voice>
        <type size="cue">eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" orientation="over" placement="above" />
          </notations>
        </note>
      </measure>
    <measure number="67" width="346.76">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="0.72" default-y="-40" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="66.67" />
        </direction>
      <note default-x="10" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="10" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="177.48" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="177.48" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="233.85" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="233.85" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="261.22" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="261.22" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="314.1" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="314.1" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-40">
        <rest />
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="51.87" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="51.87" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="81.74" default-y="-133.12">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="81.74" default-y="-123.12">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="135.61" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="135.61" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="177.48" default-y="-30" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="219.35" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="219.35" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="261.22" default-y="-20" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="303.09" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="303.09" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-178.12">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="10" default-y="-158.12">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="10" default-y="-138.12">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="177.48" default-y="-153.12" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="219.35" default-y="-123.12">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="219.35" default-y="-113.12">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="261.22" default-y="-108.12">
        <rest />
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="303.09" default-y="-133.12">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="303.09" default-y="-123.12">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-173.12" print-object="no">
        <rest />
        <duration>1680</duration>
        <voice>6</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="177.48" default-y="-138.12">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="219.35" default-y="-143.12">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="261.22" default-y="-128.12">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        </note>
      <note default-x="315.1" default-y="-138.12">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="68" width="294.43">
      <note default-x="10" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="3.18" default-y="44" />
            </articulations>
          </notations>
        </note>
      <note default-x="10" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="93.74" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="3.18" default-y="39" />
            </articulations>
          </notations>
        </note>
      <note default-x="93.74" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="156.55" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="3.18" default-y="34" />
            </articulations>
          </notations>
        </note>
      <note default-x="156.55" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="219.35" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <tenuto default-x="3.18" default-y="39" />
            </articulations>
          </notations>
        </note>
      <note default-x="219.35" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-40">
        <rest />
        <duration>420</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="51.87" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <staccato default-x="1.93" default-y="-106.98" />
            <tenuto default-x="-2.82" default-y="-114.1" />
            </articulations>
          </notations>
        </note>
      <note default-x="51.87" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="51.87" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="93.74" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="93.74" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="93.74" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="156.55" default-y="-30" print-object="no">
        <rest />
        <duration>1680</duration>
        <voice>2</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-10" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>3</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="93.74" default-y="-10" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>3</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="125.14" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>3</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="125.14" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>3</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="187.95" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>3</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="187.95" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>3</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="250.76" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>3</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="250.76" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>3</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" orientation="over" placement="above" />
          </notations>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-87.46" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="10" default-y="-138.12">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="93.74" default-y="-153.12">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="156.55" default-y="-138.12">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="219.35" default-y="-143.12">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="no" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-173.12">
        <rest />
        <duration>420</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="51.87" default-y="-198.12">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <staccato default-x="1.93" default-y="-91.98" />
            <tenuto default-x="-2.82" default-y="-99.1" />
            </articulations>
          </notations>
        </note>
      <note default-x="51.87" default-y="-178.12">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="93.74" default-y="-198.12">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="93.74" default-y="-178.12">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="156.55" default-y="-173.12" print-object="no">
        <rest />
        <duration>1680</duration>
        <voice>6</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-153.12" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>7</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="93.74" default-y="-153.12" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>7</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="125.14" default-y="-133.12">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>7</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="125.14" default-y="-123.12">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>7</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="187.95" default-y="-133.12">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>7</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="187.95" default-y="-123.12">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>7</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="250.76" default-y="-133.12">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>7</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="250.76" default-y="-123.12">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>7</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" orientation="over" placement="above" />
          </notations>
        </note>
      </measure>
    <measure number="69" width="330.71">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>137.35</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>93.69</staff-distance>
          </staff-layout>
        </print>
      <note default-x="95.63" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" orientation="under" placement="below" />
          <articulations>
            <tenuto default-x="3.18" default-y="24" />
            </articulations>
          </notations>
        </note>
      <note default-x="95.63" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1680</duration>
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
          <dynamics default-x="-3.4" default-y="-51.6" relative-y="-28">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="66.67" />
        </direction>
      <note default-x="193.53" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="193.53" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="239.99" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="36.5" />
            <tenuto default-x="3.18" default-y="43.62" />
            </articulations>
          </notations>
        </note>
      <note default-x="239.99" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notehead filled="yes">normal</notehead>
        <staff>1</staff>
        </note>
      <note default-x="257.45" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="36.5" />
            <tenuto default-x="3.18" default-y="43.62" />
            </articulations>
          </notations>
        </note>
      <note default-x="257.45" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="300.95" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="36.5" />
            <tenuto default-x="3.18" default-y="43.62" />
            </articulations>
          </notations>
        </note>
      <note default-x="300.95" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="81.12" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>3</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="81.12" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>3</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="121.63" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>3</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="121.63" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>3</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="169.56" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>3</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="169.56" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>3</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="213.49" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>3</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="225.49" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>3</voice>
        <type>quarter</type>
        <stem>down</stem>
        <notehead filled="yes">normal</notehead>
        <staff>1</staff>
        </note>
      <note default-x="272.95" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="284.95" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="81.12" default-y="-138.69">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="193.53" default-y="-183.69">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="26.5" />
            <tenuto default-x="3.18" default-y="33.62" />
            </articulations>
          </notations>
        </note>
      <note default-x="193.53" default-y="-148.69">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="239.99" default-y="-188.69">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="26.5" />
            <tenuto default-x="3.18" default-y="33.62" />
            </articulations>
          </notations>
        </note>
      <note default-x="239.99" default-y="-153.69">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="257.45" default-y="-173.69">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="26.5" />
            <tenuto default-x="3.18" default-y="33.62" />
            </articulations>
          </notations>
        </note>
      <note default-x="257.45" default-y="-138.69">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="300.95" default-y="-178.69">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="26.5" />
            <tenuto default-x="3.18" default-y="33.62" />
            </articulations>
          </notations>
        </note>
      <note default-x="300.95" default-y="-143.69">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="99.13" default-y="-123.69">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>7</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="99.13" default-y="-113.69">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>7</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="121.63" default-y="-128.69">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>7</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="121.63" default-y="-113.69">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>7</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="169.56" default-y="-128.69">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>7</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="169.56" default-y="-113.69">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>7</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="213.49" default-y="-158.69">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>7</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="225.49" default-y="-153.69">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>7</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="272.95" default-y="-158.69">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>7</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="284.95" default-y="-153.69">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>7</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="70" width="267.2">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">En élargissant beaucoup — cadence conclusive</words></direction-type><staff>2</staff></direction><note default-x="24.5" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="24" />
            <tenuto default-x="3.18" default-y="31.12" />
            </articulations>
          </notations>
        </note>
      <note default-x="24.5" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="73.92" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <accent default-x="2.28" default-y="14" />
            </articulations>
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <words default-y="-123.16" relative-x="-2" relative-y="30" font-style="italic" font-size="11">m.g.</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="149.5" default-y="-65">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent default-x="2.28" default-y="44" />
            </articulations>
          </notations>
        <notations>
          <arpeggiate number="1" default-x="-24.62" default-y="20.3" />
          </notations>
        </note>
      <note default-x="149.5" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <arpeggiate number="1" default-x="-24.62" default-y="20.3" />
          </notations>
        </note>
      <note default-x="149.5" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <arpeggiate number="1" default-x="-24.62" default-y="20.3" />
          </notations>
        </note>
      <note default-x="149.5" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <arpeggiate number="1" default-x="-24.62" default-y="20.3" />
          </notations>
        </note>
      <note default-x="188.98" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <accent default-x="2.28" default-y="54" />
            </articulations>
          </notations>
        </note>
      <note default-x="188.98" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="188.98" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="10" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <direction placement="above" system="only-top">
        <direction-type>
          <words default-y="52.34" relative-y="20" font-weight="bold" font-size="12">En élargissant beaucoup</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="above">
        <direction-type>
          <dynamics default-x="-4.18" default-y="91.1" relative-x="-18" relative-y="-40">
            <f />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="106.67" />
        </direction>
      <direction placement="above">
        <direction-type>
          <wedge type="crescendo" default-y="55.7" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="41.96" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <accent placement="above" default-x="-0.72" default-y="4" />
            </articulations>
          </notations>
        </note>
      <note default-x="73.92" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <accent placement="above" default-x="-0.72" default-y="4" />
            </articulations>
          </notations>
        </note>
      <note default-x="105.87" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <accent placement="above" default-x="-0.72" default-y="4" />
            </articulations>
          </notations>
        </note>
      <note default-x="143.5" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>420</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <accent placement="above" default-x="-0.72" default-y="4" />
            </articulations>
          </notations>
        </note>
      <note default-x="175.45" default-y="-10" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>3</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="188.98" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>280</duration>
        <voice>3</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        <notations>
          <articulations>
            <accent default-x="-3.72" default-y="-54.05" />
            </articulations>
          </notations>
        </note>
      <note default-x="214.98" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>3</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <accent default-x="-3.72" default-y="-56.54" />
            </articulations>
          </notations>
        </note>
      <note default-x="240.19" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>3</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        <notations>
          <articulations>
            <accent default-x="-3.72" default-y="-58.95" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="24.5" default-y="-183.69">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="16.5" />
            <tenuto default-x="3.18" default-y="23.62" />
            </articulations>
          </notations>
        </note>
      <note default-x="24.5" default-y="-148.69">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="73.92" default-y="-143.69" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-112.78" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="143.5" default-y="-183.69">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations print-object="no">
          <articulations>
            <accent default-x="-3.72" default-y="-79" />
            </articulations>
          </notations>
        <notations>
          <arpeggiate number="2" default-x="-13.06" default-y="-4.7" />
          </notations>
        </note>
      <note default-x="143.5" default-y="-163.69">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="2" default-x="-13.06" default-y="-4.7" />
          </notations>
        </note>
      <note default-x="143.5" default-y="-143.69">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <arpeggiate number="2" default-x="-13.06" default-y="-4.7" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="no" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-112.78" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="169.51" default-y="-188.69">
        <grace slash="yes" />
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="-6.26396" bezier-y="12.313887" number="1" />
          <slur type="start" bezier-x="0" bezier-y="11.496184" number="2" />
          </notations>
        </note>
      <note default-x="169.51" default-y="-168.69">
        <grace slash="yes" />
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="188.98" default-y="-188.69">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-12.426473" bezier-y="-6.03753" />
          <slur type="stop" number="2" bezier-x="-12.325026" bezier-y="-3.740202" />
          </notations>
        <notations print-object="no">
          <articulations>
            <accent default-x="-3.72" default-y="-84" />
            </articulations>
          </notations>
        </note>
      <note default-x="188.98" default-y="-168.69">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="188.98" default-y="-143.69">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="188.98" default-y="-113.69">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="no" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-163.69">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>7</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="10" default-y="-148.69">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>7</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="41.96" default-y="-163.69">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <voice>7</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <accent default-x="2.28" default-y="11.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="73.92" default-y="-153.69">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>7</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <accent default-x="2.28" default-y="14.67" />
            </articulations>
          </notations>
        </note>
      <note default-x="105.87" default-y="-148.69">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>7</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <accent default-x="2.28" default-y="17.78" />
            </articulations>
          </notations>
        </note>
      <note default-x="143.5" default-y="-143.69">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>420</duration>
        <voice>7</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <accent default-x="2.28" default-y="21.45" />
            </articulations>
          </notations>
        </note>
      <note default-x="175.45" default-y="-143.69" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>7</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="194.98" default-y="-123.69">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>7</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        <notations>
          <articulations>
            <accent default-x="2.28" default-y="36.42" />
            </articulations>
          </notations>
        </note>
      <note default-x="214.98" default-y="-128.69">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>280</duration>
        <voice>7</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <accent default-x="2.28" default-y="36.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="240.19" default-y="-133.69">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>280</duration>
        <voice>7</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        <notations>
          <articulations>
            <accent default-x="2.28" default-y="30.87" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="71" width="314.77">
      <note default-x="6.55" default-y="-20" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <words default-y="-127.07" relative-x="-5" relative-y="62.23" font-style="italic" font-size="11">m.g.</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="135.87" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="135.87" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="135.87" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" orientation="over" placement="above" />
          </notations>
        </note>
      <direction placement="above">
        <direction-type>
          <dynamics default-x="-3.62" default-y="83.64" relative-x="-25" relative-y="-30">
            <ff />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="124.44" />
        </direction>
      <note default-x="207.78" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="207.78" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="207.78" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>4200</duration>
        </backup>
      <note default-x="6.55" default-y="-30" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="135.87" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        <notations print-object="no">
          <articulations>
            <accent default-x="2.28" default-y="54" />
            </articulations>
          </notations>
        </note>
      <note default-x="207.78" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>4200</duration>
        </backup>
      <note default-x="6.55" default-y="-10" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>3</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="135.87" default-y="-10" print-object="no">
        <rest />
        <duration>1680</duration>
        <voice>3</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <note default-x="207.78" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>3</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <accent default-x="-3.72" default-y="-69" />
            </articulations>
          </notations>
        </note>
      <note default-x="255.71" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>840</duration>
        <voice>3</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <accent default-x="-3.72" default-y="-74" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>4200</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-112.78" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="8.5" default-y="-208.69">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>5</voice>
        <type size="cue">eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="start" orientation="under" placement="below" />
          </notations>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.5" default-y="-82.72" />
            </articulations>
          </notations>
        </note>
      <note default-x="8.5" default-y="-173.69">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>420</duration>
        <tie type="start" />
        <voice>5</voice>
        <type size="cue">eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" orientation="under" placement="below" />
          </notations>
        </note>
      <note default-x="40.46" default-y="-143.69">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>70</duration>
        <tie type="start" />
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <tied type="start" orientation="under" placement="below" />
          </notations>
        <notations print-object="no">
          <tuplet type="start" bracket="no" />
          </notations>
        <notations>
          <articulations>
            <accent placement="below" default-x="-0.5" default-y="-42.8" />
            </articulations>
          </notations>
        </note>
      <note default-x="51.66" default-y="-128.69">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>70</duration>
        <tie type="start" />
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <notations>
          <tied type="start" orientation="under" placement="below" />
          </notations>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.5" default-y="-90.06" />
            </articulations>
          </notations>
        </note>
      <note default-x="65.66" default-y="-108.69">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>70</duration>
        <tie type="start" />
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <notations>
          <tied type="start" orientation="over" placement="above" />
          </notations>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.5" default-y="-91.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="89.67" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>70</duration>
        <tie type="start" />
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <notations>
          <tied type="start" orientation="under" placement="below" />
          </notations>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.5" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="100.87" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>70</duration>
        <tie type="start" />
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <notations>
          <tied type="start" orientation="under" placement="below" />
          </notations>
        <notations print-object="no">
          <articulations>
            <accent default-x="-0.5" default-y="7.7" />
            </articulations>
          </notations>
        </note>
      <note default-x="114.87" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>70</duration>
        <tie type="start" />
        <voice>5</voice>
        <type size="cue">32nd</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <notations>
          <tied type="start" orientation="over" placement="above" />
          </notations>
        <notations print-object="no">
          <tuplet type="stop" />
          <articulations>
            <accent default-x="-0.5" default-y="22.7" />
            </articulations>
          </notations>
        </note>
      <note default-x="135.87" default-y="-143.69">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="135.87" default-y="-128.69">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="135.87" default-y="-108.69">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="207.78" default-y="-208.69">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="207.78" default-y="-173.69">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="207.78" default-y="-128.69">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <backup>
        <duration>4200</duration>
        </backup>
      <note default-x="6.55" default-y="-163.69" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="135.87" default-y="-208.69">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="135.87" default-y="-173.69">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="213.78" default-y="-183.69">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <accent default-x="2.28" default-y="16.5" />
            </articulations>
          </notations>
        </note>
      <note default-x="213.78" default-y="-148.69">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="255.71" default-y="-188.69">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <accent default-x="2.28" default-y="14" />
            </articulations>
          </notations>
        </note>
      <note default-x="255.71" default-y="-153.69">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>840</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>4200</duration>
        </backup>
      <note default-x="6.55" default-y="-143.69" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>7</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="135.87" default-y="-143.69" print-object="no">
        <rest />
        <duration>1680</duration>
        <voice>7</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="207.78" default-y="-143.69" print-object="no">
        <rest />
        <duration>840</duration>
        <voice>7</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="255.71" default-y="-143.69" print-object="no">
        <rest />
        <duration>420</duration>
        <voice>7</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="279.68" default-y="-143.69" print-object="no">
        <rest />
        <duration>210</duration>
        <voice>7</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>2</actual-notes>
          <normal-notes>1</normal-notes>
          </time-modification>
        <staff>2</staff>
        <notations print-object="no">
          <tuplet type="start" bracket="yes" placement="above" />
          </notations>
        </note>
      <note default-x="293.62" default-y="-208.69">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>210</duration>
        <voice>7</voice>
        <type size="cue">eighth</type>
        <time-modification>
          <actual-notes>2</actual-notes>
          <normal-notes>1</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <notations print-object="no">
          <tuplet type="stop" />
          </notations>
        <notations>
          <slur type="start" bezier-x="5.516109" bezier-y="-7.806741" number="1" />
          <slur type="start" bezier-x="5.516109" bezier-y="-7.806741" number="2" />
          </notations>
        </note>
      <note default-x="293.62" default-y="-173.69">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>210</duration>
        <voice>7</voice>
        <type size="cue">eighth</type>
        <time-modification>
          <actual-notes>2</actual-notes>
          <normal-notes>1</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="72" width="164.81">
      <note default-x="10" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <fermata type="upright" default-y="24.28" relative-y="10" />
          </notations>
        </note>
      <note default-x="10" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="10" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="81.91" default-y="-20">
        <rest />
        <duration>1680</duration>
        <voice>1</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-153.69">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <fermata type="upright" default-y="34" relative-y="10" />
          </notations>
        </note>
      <note default-x="10" default-y="-138.69">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="10" default-y="-118.69">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="no" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="81.91" default-y="-153.69">
        <rest />
        <duration>1680</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>3360</duration>
        </backup>
      <note default-x="10" default-y="-208.69">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>1680</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-6.031" bezier-y="-7.416179" />
          <slur type="stop" number="2" bezier-x="-6.031" bezier-y="-7.416179" />
          </notations>
        </note>
      <note default-x="10" default-y="-173.69">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>1680</duration>
        <voice>6</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="81.91" default-y="-163.69" print-object="no">
        <rest />
        <duration>1680</duration>
        <voice>6</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        </barline>
      </measure>
    </part>
  </score-partwise>`;

export const PAVANE_ANALYSE: MesureAnalyse[] = [
  { numero: 1,  nom: "Sol M → Do∆7(#11)",  degre: "I → IV∆7 (#11 mélodique) — la tonique déjà coiffée de couleur", fonction: "T" },
  { numero: 2,  nom: "Si m → Mi m9",       degre: "iii6 → vi9",                                                    fonction: "T" },
  { numero: 3,  nom: "Do∆7 → La m9",       degre: "IV∆7 → ii9",                                                    fonction: "SD" },
  { numero: 4,  nom: "Ré 9 → Sol∆9",       degre: "V9 → I∆9 — la tonique porte sa 7e majeure (Fa#)",              fonction: "D" },
  { numero: 5,  nom: "Fa#ø7",              degre: "viiø7",                                                         fonction: "D" },
  { numero: 6,  nom: "Si m (cédez)",       degre: "iii — premier ralenti",                                         fonction: "T" },
  { numero: 9,  nom: "Ré 13",              degre: "V13",                                                           fonction: "D" },
  { numero: 11, nom: "Mi 7",               degre: "V/iii — premier chromatisme de la pièce (Sol#)",               fonction: "D", dominanteSecondaire: true },
  { numero: 12, nom: "Si m",               degre: "iii — le refrain cadence sur la médiante, pas la tonique",     fonction: "T" },
  { numero: 13, nom: "Si (pédale)",        degre: "« Très lointain » — écho du refrain, harmonie suspendue",       fonction: "?" },
  { numero: 26, nom: "orbite Si m / Ré",   degre: "couplet 1 — un peu plus lent, Sol# et Do# de passage",         fonction: "?" },
  { numero: 28, nom: "Sol M",              degre: "REFRAIN 2 — Reprenez le mouvement (réharmonisé)",              fonction: "T" },
  { numero: 39, nom: "Sol m (mixture)",    degre: "couplet 2 — subitement très doux, les bémols entrent",         fonction: "?" },
  { numero: 48, nom: "Très grave",         degre: "le passage-lamento",                                           fonction: "?" },
  { numero: 58, nom: "Très grave (bis)",   degre: "le lamento, repris",                                            fonction: "?" },
  { numero: 61, nom: "Sol M",              degre: "REFRAIN final — marquez le chant",                             fonction: "T" },
  { numero: 70, nom: "cadence conclusive", degre: "En élargissant beaucoup",                                       fonction: "T" },
];

export const PAVANE_ANALYSE_NARRATIVE: AnalyseNarrative = {
  tonalite: "Sol majeur, une tonalité pleinement fonctionnelle — contrairement à Debussy ou Satie, Ravel ne renonce jamais à la grammaire tonale. Il en change seulement le vocabulaire : chaque degré porte sa 7e ou sa 9e comme équipement de série.",
  metrique: "4/4 (noté en C barré), ♩=80. « Assez doux, mais d'une sonorité large » — toutes les indications de Ravel, seules en scène dans cette édition.",
  forme: "Un rondeau à la française, lisible dans les indications mêmes de la partition : refrain (m.1-12) et son écho « Très lointain » (m.13 sq.) ; couplet 1 « un peu plus lent » (m.26, orbite si mineur/Ré) ; refrain 2 « Reprenez le mouvement » (m.28, réharmonisé) ; couplet 2 « subitement très doux et très lié » (m.39, le versant sombre, mixtures avec bémols, double passage « Très grave » aux mesures 48 et 58) ; refrain final « marquez le chant » (m.61) et sa cadence « En élargissant beaucoup » (m.70). Trois refrains, deux couplets, symétrie parfaite.",
  sections: [
    {
      label: "Mesures 1-4 (le refrain : une chaîne de septièmes)",
      titre: "La couleur moderne sur la grammaire ancienne",
      chiffrage: "I – IV∆7(#11) – iii6 – vi9 – IV∆7 – ii9 – V9 – I∆9",
      fonctions: "T – SD – T – T – SD – SD – D – T",
      texte: "Le refrain est un petit manifeste : chaque degré de la gamme porte sa septième ou sa neuvième comme équipement de série, y compris la tonique elle-même, qui arrive dès la mesure 4 coiffée de sa propre septième majeure (le Fa#). Mais les enchaînements restent parfaitement fonctionnels — un ii-V-I d'école referme la phrase aux mesures 3-4. C'est le néo-archaïsme de cette pavane : une danse Renaissance revue au gaslight, la couleur du XXe siècle naissant posée sur une syntaxe qui, elle, ne bouge pas.",
    },
    {
      label: "Mesures 5-12 (la cadence sur la médiante)",
      titre: "Une fausse porte, et la mélancolie qui en découle",
      chiffrage: "viiø7 – iii (cédez) – V13 – V/iii (premier chromatisme) – iii",
      fonctions: "D – T – D – D – T",
      texte: "Le premier chromatisme de toute la pièce — un unique Sol# à la mesure 11 — fabrique une dominante secondaire (Mi7, V de iii) qui dépose la phrase non pas sur la tonique, mais sur si mineur. Clore un thème en Sol majeur sur son degré médiant est la cadence modale-archaïque par excellence : une fausse porte qui donne à la pièce sa mélancolie processionnaire. L'écho « Très lointain » qui suit plane sur une pédale de Si avant que Sol ne reprenne ses droits.",
    },
    {
      label: "Mesures 13-38 (couplet 1 et refrain 2)",
      titre: "La même matière, déplacée puis réharmonisée",
      chiffrage: "orbite si mineur/Ré (couplet 1) → Sol M (refrain 2)",
      fonctions: "? – T",
      texte: "Le couplet 1, « un peu plus lent », place le discours en orbite autour de si mineur et de Ré, avec Sol# et Do# de passage — une zone harmonique voisine du refrain, jamais totalement étrangère. Le refrain revient ensuite (« Reprenez le mouvement ») réharmonisé, mais soutenu par les mêmes fonctions aux mêmes endroits : la matière ne change pas, son habillage seul se renouvelle.",
    },
    {
      label: "Mesures 39-59 (couplet 2 : le versant sombre)",
      titre: "Les bémols entrent, et le lamento se répète",
      chiffrage: "Sol m (mixture modale)",
      fonctions: "? (couleur modale, pas de fonction classique à ce niveau)",
      texte: "« Subitement très doux et très lié » : le couplet 2 fait entrer les degrés qui distinguent Sol mineur de Sol majeur — Sib d'abord, puis Fa naturel et Mib — une mixture qui assombrit sans jamais quitter tout à fait l'orbite de la tonique. En son cœur, un double passage marqué « Très grave » (mesures 48 et 58) : un lamento qui revient sur lui-même, la seule répétition littérale de gestes de toute la pièce.",
    },
    {
      label: "Mesures 60-72 (refrain final et cadence conclusive)",
      titre: "Marquez le chant",
      chiffrage: "Sol M (I) → cadence conclusive",
      fonctions: "T – T",
      texte: "Le troisième et dernier refrain revient « marquez le chant » — l'indication la plus explicite de toute la partition sur l'intention mélodique. La pièce s'achève « en élargissant beaucoup », la seule vraie cadence pleinement conclusive de toute la forme : les deux refrains précédents s'étaient détournés vers la médiante, celui-ci referme enfin sur la tonique.",
    },
  ],
  synthese: [
    {
      titre: "Le néo-archaïsme : couleur moderne, grammaire ancienne",
      texte: "En 1899, entre la Gymnopédie de Satie (1888) et la Cathédrale engloutie de Debussy (1910), Ravel systématise ce que Satie avait décrété — la septième n'est plus une tension, c'est le timbre par défaut de l'accord — sans jamais renoncer à la syntaxe fonctionnelle. Satie abolit la fonction ; Debussy la dissoudra dans la couleur pure ; Ravel, lui, garde les deux mains sur la table.",
    },
    {
      titre: "L'ancêtre direct du jazz",
      texte: "Le I∆9 de la mesure 4 est, note pour note, l'accord de tonique par défaut de Bill Evans (cours 35) — et Evans citait Ravel parmi ses influences déclarées. Soixante ans séparent cette pavane du jazz modal, et une seule sonorité les relie directement.",
    },
    {
      titre: "Le diplomate entre deux mondes",
      texte: "Satie, Ravel, Debussy : le second récit de ce corpus (l'harmonie après la fonction) a besoin des trois pour se raconter. Ravel y occupe la position du diplomate — ni l'abolition ni la dissolution, mais la couleur nouvelle patiemment greffée sur une grammaire qui, elle, tient bon.",
    },
  ],
};