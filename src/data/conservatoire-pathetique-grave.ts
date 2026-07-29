import type { MesureAnalyse, AnalyseNarrative } from "./conservatoire-bwv846";

/**
 * data/conservatoire-pathetique-grave.ts
 * Harmonia — Extrait (10 mesures) de l'introduction Grave de la Sonate n°8
 * "Pathétique" op.13 de Beethoven (1er mouvement), pour la section
 * "conservatoire" du cours 39 (niveau 2 — les 7èmes d'espèces).
 *
 * MusicXML VERBATIM fourni par Dany (export MuseScore Studio 4.6.3, fichier
 * « pathetique-grave-annote.musicxml ») — jamais reconstruit à la main, cf.
 * feedback-partitions-verbatim. Do mineur (fifths=-3), 4/4 (symbole C). Avec
 * <harmony> ET chiffrage romain complet en <direction><words> juste après
 * chaque <harmony> (PAS de <lyric> dans ce fichier, convention différente
 * des pièces précédentes) — inclut des changements de tonalité de référence
 * explicites dans le texte ("c :", "E♭ :").
 *
 * PIÈGE ÉVITÉ dès le départ : cette pièce était initialement proposée pour
 * le cours 24 (sixtes augmentées) — vérifié AVANT toute analyse que le
 * chiffrage complet ne contient AUCUNE sixte augmentée (It+6/All+6/Fr+6) :
 * toute la couleur chromatique vient de la 7e diminuée (vii°7) et de ses
 * renversements, avec un pivot enharmonique à la mesure 6. Réorientée vers
 * le cours 39 ("Les 7èmes d'espèces"), qui couvre exactement cette matière.
 *
 * CORRECTIF DE STRUCTURE (pas de contenu musical touché) : le fichier source
 * scindait la mesure 10 en DEUX éléments <measure number="10"> consécutifs
 * (barline "none" entre les deux, saut de page MuseScore au milieu — un pur
 * artefact de mise en page, pas un fait musical). Notre parseur partagé
 * (musicxml-parse.ts ligne ~321, `Math.max` sur les longueurs par numéro de
 * mesure) ne fait pas la somme de deux blocs de même numéro : il gardait la
 * longueur du plus long des deux (mesure "10" rapportée à 1538 ticks au lieu
 * de ~3072, soit une mesure coupée de moitié — vérifié par
 * `score.measures`). Fusionné en un seul <measure number="10"> continu (barline
 * + réouverture + bloc <print> intermédiaires retirés, tout le reste —
 * notes, harmonies, directions — conservé intact) : la mesure 10 rapporte
 * maintenant 3069 ticks, une mesure complète normale.
 *
 * Tempo : plusieurs `<sound tempo>` déjà écrits dans le fichier (30, 10, 30,
 * 10, 30 — un Grave très lent avec des fluctuations aux points d'orgue), le
 * premier dès la mesure 1 (onset 0) : pas de désynchronisation Verovio à
 * corriger ici (vérifié par échantillonnage — écarts de 8000ms exactement
 * entre chaque mesure, cf. tests).
 *
 * LIMITE CONNUE (Verovio, pas notre moteur) : la cascade de la mesure 10
 * (le grand trait chromatique descendant) utilise des 128e associées à des
 * ratios de rythme irréguliers (6:4, 7:4, 9:8 — "jusqu'aux nonolets").
 * `renderToMIDI()` de Verovio n'arrive pas à convertir toutes ces valeurs
 * ("Unknown dur '2048'"/"'65536'" en warning) et ~35 notes sur 564 ne
 * s'affichent pas dans la partition gravée (vérifié : `class="note"` dans
 * le SVG). Notre PROPRE moteur (musicxml-parse.ts, utilisé pour l'audio) ne
 * dépend pas du même chemin de code et capture les 502 notes réelles sans
 * problème — seul l'AFFICHAGE gravé perd quelques ornements très rapides
 * dans ce passage, pas le son ni l'analyse harmonique.
 */
export const PATHETIQUE_GRAVE_MESURES_1_10 =
`<?xml version='1.0' encoding='UTF-8'?>
<score-partwise version="4.0">
  <identification>
    <encoding>
      <software>MuseScore Studio 4.6.3</software>
      <encoding-date>2026-07-29</encoding-date>
      <supports element="accidental" type="yes" />
      <supports element="beam" type="yes" />
      <supports element="print" attribute="new-page" type="yes" value="yes" />
      <supports element="print" attribute="new-system" type="yes" value="yes" />
      <supports element="stem" type="yes" />
      </encoding>
    <miscellaneous>
      <miscellaneous-field name="creationDate">2026-07-29</miscellaneous-field>
      <miscellaneous-field name="mscVersion">4.60</miscellaneous-field>
      <miscellaneous-field name="platform">Microsoft Windows</miscellaneous-field>
      </miscellaneous>
    </identification>
  <defaults>
    <scaling>
      <millimeters>7.056</millimeters>
      <tenths>40</tenths>
      </scaling>
    <page-layout>
      <page-height>1683.67</page-height>
      <page-width>1190.48</page-width>
      <page-margins type="even">
        <left-margin>56.6893</left-margin>
        <right-margin>56.6893</right-margin>
        <top-margin>56.6893</top-margin>
        <bottom-margin>113.379</bottom-margin>
        </page-margins>
      <page-margins type="odd">
        <left-margin>56.6893</left-margin>
        <right-margin>56.6893</right-margin>
        <top-margin>56.6893</top-margin>
        <bottom-margin>113.379</bottom-margin>
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
    <credit-words default-x="595.238095" default-y="1626.98414" justify="center" valign="top" font-size="24">Sonate No. 8, “Pathétique”</credit-words>
    </credit>
  <credit page="1">
    <credit-type>subtitle</credit-type>
    <credit-words default-x="595.238095" default-y="1570.294798" justify="center" valign="top" font-size="14">1st Movement
</credit-words>
    <credit-words>Opus 13</credit-words>
    </credit>
  <credit page="1">
    <credit-type>composer</credit-type>
    <credit-words default-x="1133.786861" default-y="1526.98414" justify="right" valign="bottom" font-size="12">Ludwig van Beethoven
</credit-words>
    <credit-words>(1770 - 1827)</credit-words>
    </credit>
  <part-list>
    <score-part id="P1">
      <part-name>Piano</part-name>
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
    <measure number="1" width="523.91">
      <print>
        <system-layout>
          <system-margins>
            <left-margin>163.21</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>170</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>75.7</staff-distance>
          </staff-layout>
        <measure-layout>
          <measure-distance>85</measure-distance>
          </measure-layout>
        </print>
      <attributes>
        <divisions>10080</divisions>
        <key>
          <fifths>-3</fifths>
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
          <dynamics default-x="2.29" default-y="-62.32" relative-y="-40">
            <fp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="106.67" />
        </direction>
      <direction placement="above" system="only-top">
        <direction-type>
          <words default-x="-38.52" relative-y="20" font-weight="bold" font-size="12">Grave</words>
          </direction-type>
        <staff>1</staff>
        <sound tempo="30" />
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>C</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">c : i</words></direction-type><staff>2</staff></direction><note default-x="122.23" default-y="-75">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>10080</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="122.23" default-y="-65">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>10080</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="122.23" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>10080</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="192.25" default-y="-75">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3780</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="208.74" default-y="-75" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="192.25" default-y="-65">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3780</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="208.74" default-y="-65" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="192.25" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3780</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="208.74" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="231.7" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">forward hook</beam>
        </note>
      <note default-x="231.7" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="262.53" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3780</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="279.02" default-y="-65" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="262.53" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3780</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="279.02" default-y="-55" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="262.53" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3780</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="279.02" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="301.98" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">backward hook</beam>
        </note>
      <note default-x="301.98" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="301.98" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>F</root-step><root-alter>1</root-alter></root><kind text="°7">diminished-seventh</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">vii°7/V</words></direction-type><staff>2</staff></direction><note default-x="332.81" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>10080</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="18.449109" bezier-y="-11.964342" number="1" />
          <slur type="start" bezier-x="18.449109" bezier-y="-11.964342" number="2" />
          </notations>
        </note>
      <note default-x="332.81" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>10080</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="332.81" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>10080</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V</words></direction-type><staff>2</staff></direction><note default-x="402.83" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-16.561804" bezier-y="-14.4645" />
          <slur type="stop" number="2" bezier-x="-16.561804" bezier-y="-14.4645" />
          </notations>
        </note>
      <note default-x="402.83" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="449.5" default-y="-20">
        <rest />
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>40320</duration>
        </backup>
      <note default-x="122.23" default-y="-175.7">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>10080</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="122.23" default-y="-165.7">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>10080</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="122.23" default-y="-155.7">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>10080</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="122.23" default-y="-140.7">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>10080</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="192.25" default-y="-175.7">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>3780</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="208.74" default-y="-170.7" />
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="192.25" default-y="-165.7">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>3780</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="208.74" default-y="-160.7" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="192.25" default-y="-155.7">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>3780</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="208.74" default-y="-150.7" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="192.25" default-y="-140.7">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>3780</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="208.74" default-y="-140.7" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="231.7" default-y="-130.7">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">forward hook</beam>
        </note>
      <note default-x="262.53" default-y="-135.7">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>3780</duration>
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="279.02" default-y="-130.7" />
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="301.98" default-y="-140.7">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">backward hook</beam>
        </note>
      <note default-x="332.81" default-y="-125.7">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>10080</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="17.184254" bezier-y="13.654313" number="1" />
          </notations>
        </note>
      <note default-x="402.83" default-y="-120.7">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>5040</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-17.82666" bezier-y="12.80426" />
          </notations>
        </note>
      <note default-x="449.5" default-y="-135.7">
        <rest />
        <duration>3780</duration>
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="466.72" default-y="-130.7" />
        <staff>2</staff>
        </note>
      <note default-x="488.95" default-y="-150.7">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="2" width="389.98">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="2.29" default-y="-47.9" relative-y="-40">
            <fp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="106.67" />
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step></root><kind text="°7">diminished-seventh</kind><bass><bass-step>A</bass-step><bass-alter>-1</bass-alter></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">vii°4/2</words></direction-type><staff>2</staff></direction><note default-x="15.14" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>10080</duration>
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
      <note default-x="15.14" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>10080</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="15.14" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>10080</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="85.15" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3780</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="101.65" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="85.15" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3780</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="101.65" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="85.15" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3780</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="101.65" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="124.6" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">forward hook</beam>
        </note>
      <note default-x="124.6" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="124.6" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="147.1" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3780</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="163.59" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="147.1" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3780</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="163.59" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="147.1" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3780</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="163.59" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="186.55" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">backward hook</beam>
        </note>
      <note default-x="186.55" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="186.55" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step></root><kind text="°7">diminished-seventh</kind><bass><bass-step>E</bass-step><bass-alter>-1</bass-alter></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">(app.)</words></direction-type><staff>2</staff></direction><note default-x="209.04" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>10080</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="18.449109" bezier-y="-11.964342" number="1" />
          </notations>
        </note>
      <note default-x="209.04" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>10080</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="209.04" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>10080</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>C</root-step></root><kind text="m">minor</kind><bass><bass-step>E</bass-step><bass-alter>-1</bass-alter></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">i6</words></direction-type><staff>2</staff></direction><note default-x="279.06" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-16.561804" bezier-y="-14.4645" />
          </notations>
        </note>
      <note default-x="279.06" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="279.06" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="325.74" default-y="-20">
        <rest />
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>40320</duration>
        </backup>
      <note default-x="15.14" default-y="-115.7">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>10080</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="85.15" default-y="-115.7">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3780</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="101.65" default-y="-110.7" />
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="124.6" default-y="-115.7">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">forward hook</beam>
        </note>
      <note default-x="147.1" default-y="-120.7">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3780</duration>
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="163.59" default-y="-120.7" />
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="186.55" default-y="-125.7">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>32nd</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">backward hook</beam>
        </note>
      <note default-x="209.04" default-y="-130.7">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>10080</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="279.06" default-y="-130.7">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>5040</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="325.74" default-y="-135.7">
        <rest />
        <duration>3780</duration>
        <voice>5</voice>
        <type>16th</type>
        <dot default-x="342.95" default-y="-130.7" />
        <staff>2</staff>
        </note>
      <note default-x="365.18" default-y="-130.7">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>5</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="3" width="455.23">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>129.17</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>67.99</staff-distance>
          </staff-layout>
        </print>
      <harmony placement="above" print-frame="no"><root><root-step>F</root-step><root-alter>1</root-alter></root><kind text="°7">diminished-seventh</kind><bass><bass-step>E</bass-step><bass-alter>-1</bass-alter></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">vii°4/2/V</words></direction-type><staff>2</staff></direction><note default-x="110.71" default-y="-10" print-object="no">
        <rest />
        <duration>10080</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="166.25" default-y="-10" print-object="no">
        <rest />
        <duration>10080</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="273.82" default-y="-10" print-object="no">
        <rest />
        <duration>10080</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="">major</kind><bass><bass-step>B</bass-step></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V6</words></direction-type><staff>2</staff></direction><note default-x="329.36" default-y="-10" print-object="no">
        <rest />
        <duration>2520</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="356.01" default-y="-20">
        <rest />
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <staff>1</staff>
        </note>
      <note default-x="376.65" default-y="-10" print-object="no">
        <rest />
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <staff>1</staff>
        </note>
      <note default-x="399.14" default-y="-10" print-object="no">
        <rest />
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>40320</duration>
        </backup>
      <note default-x="110.71" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>10080</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="110.71" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>10080</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="110.71" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>10080</duration>
        <tie type="start" />
        <voice>2</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="166.25" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3780</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>16th</type>
        <dot default-x="182.74" default-y="-35" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="166.25" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3780</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>16th</type>
        <dot default-x="182.74" default-y="-25" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="166.25" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3780</duration>
        <tie type="stop" />
        <voice>2</voice>
        <type>16th</type>
        <dot default-x="182.74" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="197.54" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>2</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">forward hook</beam>
        </note>
      <note default-x="197.54" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>2</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="197.54" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1260</duration>
        <voice>2</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="220.03" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3780</duration>
        <voice>2</voice>
        <type>16th</type>
        <dot default-x="236.52" default-y="-35" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="220.03" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3780</duration>
        <voice>2</voice>
        <type>16th</type>
        <dot default-x="236.52" default-y="-25" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="220.03" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3780</duration>
        <voice>2</voice>
        <type>16th</type>
        <dot default-x="236.52" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="251.32" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>2</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">backward hook</beam>
        </note>
      <note default-x="251.32" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>2</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="251.32" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1260</duration>
        <voice>2</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="273.82" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>10080</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="11.780868" bezier-y="-14.190701" number="1" />
          </notations>
        </note>
      <note default-x="273.82" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>10080</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="273.82" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>10080</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="329.36" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2520</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-15.990674" bezier-y="-9.190386" />
          </notations>
        <notations print-object="no">
          <articulations>
            <staccato default-x="7.93" default-y="26.97" />
            </articulations>
          <notations>
            <staccatissimo default-x="6.96" default-y="36.89" />
            </notations>
          </notations>
        </note>
      <note default-x="329.36" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2520</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="329.36" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2520</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <forward>
        <duration>1260</duration>
        </forward>
      <note default-x="376.65" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>2</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">forward hook</beam>
        </note>
      <note default-x="376.65" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>2</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="376.65" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1260</duration>
        <voice>2</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="399.14" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3780</duration>
        <voice>2</voice>
        <type>16th</type>
        <dot default-x="415.64" default-y="-35" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="399.14" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3780</duration>
        <voice>2</voice>
        <type>16th</type>
        <dot default-x="415.64" default-y="-25" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="399.14" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3780</duration>
        <voice>2</voice>
        <type>16th</type>
        <dot default-x="415.64" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="430.44" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>2</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">backward hook</beam>
        </note>
      <note default-x="430.44" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>2</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="430.44" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1260</duration>
        <voice>2</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>40320</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="2.29" default-y="-40" relative-y="-40">
            <fp />
            </dynamics>
          </direction-type>
        <staff>2</staff>
        <sound dynamics="106.67" />
        </direction>
      <note default-x="110.71" default-y="-117.99" print-object="no">
        <rest />
        <duration>5040</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="138.48" default-y="-117.99" print-object="no">
        <rest />
        <duration>5040</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="166.25" default-y="-117.99" print-object="no">
        <rest />
        <duration>10080</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="273.82" default-y="-117.99" print-object="no">
        <rest />
        <duration>10080</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="329.36" default-y="-117.99" print-object="no">
        <rest />
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      <note default-x="356.01" default-y="-127.99">
        <rest />
        <duration>1260</duration>
        <voice>5</voice>
        <type>32nd</type>
        <staff>2</staff>
        </note>
      <note default-x="376.65" default-y="-117.99" print-object="no">
        <rest />
        <duration>1260</duration>
        <voice>5</voice>
        <type>32nd</type>
        <staff>2</staff>
        </note>
      <note default-x="399.14" default-y="-117.99" print-object="no">
        <rest />
        <duration>5040</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>40320</duration>
        </backup>
      <note default-x="110.71" default-y="-87.99">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>10080</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="166.25" default-y="-87.99">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3780</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>16th</type>
        <dot default-x="182.74" default-y="-92.99" />
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="197.54" default-y="-87.99">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>6</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">forward hook</beam>
        </note>
      <note default-x="220.03" default-y="-92.99">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3780</duration>
        <voice>6</voice>
        <type>16th</type>
        <dot default-x="236.52" default-y="-92.99" />
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="251.32" default-y="-97.99">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>6</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">backward hook</beam>
        </note>
      <note default-x="273.82" default-y="-97.99">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>10080</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="11.441851" bezier-y="-11.770674" number="1" />
          </notations>
        </note>
      <note default-x="329.36" default-y="-102.99">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>6</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-12.82947" bezier-y="-10.240578" />
          </notations>
        <notations print-object="no">
          <articulations>
            <staccato default-x="1.93" default-y="-33.44" />
            </articulations>
          <notations>
            <staccatissimo default-x="0.96" default-y="-54.55" />
            </notations>
          </notations>
        </note>
      <forward>
        <duration>1260</duration>
        </forward>
      <note default-x="376.65" default-y="-87.99">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>6</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">forward hook</beam>
        </note>
      <note default-x="399.14" default-y="-92.99">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3780</duration>
        <voice>6</voice>
        <type>16th</type>
        <dot default-x="415.64" default-y="-92.99" />
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="430.44" default-y="-97.99">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>6</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">backward hook</beam>
        </note>
      </measure>
    <measure number="4" width="621.87">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="5.79" default-y="-40" relative-y="-40">
            <sf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="124.44" />
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-75.4" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>F</root-step><root-alter>1</root-alter></root><kind text="°7">diminished-seventh</kind><bass><bass-step>C</bass-step></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">vii°4/3/V</words></direction-type><staff>2</staff></direction><note default-x="23.99" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>10080</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="29.280491" bezier-y="-21.917752" number="1" />
          </notations>
        </note>
      <note default-x="23.99" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>10080</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="23.99" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>10080</duration>
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
      <direction placement="below">
        <direction-type>
          <dynamics default-x="3.09" default-y="-40" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <sound tempo="10" />
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="">major</kind><bass><bass-step>B</bass-step></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V6</words></direction-type><staff>2</staff></direction><note default-x="79.53" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="79.53" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="79.53" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>C</root-step></root><kind text="7">dominant</kind><bass><bass-step>B</bass-step><bass-alter>-1</bass-alter></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V4/2/iv</words></direction-type><staff>2</staff></direction><note default-x="124.68" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="124.68" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="124.68" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>F</root-step></root><kind text="m">minor</kind><bass><bass-step>A</bass-step><bass-alter>-1</bass-alter></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">iv6</words></direction-type><staff>2</staff></direction><note default-x="161.7" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-25.806869" bezier-y="-25.91891" />
          </notations>
        </note>
      <note default-x="161.7" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="161.7" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="5.79" default-y="-38.56" relative-y="-40">
            <sf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="124.44" />
        </direction>
      <note default-x="198.73" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>5040</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <sound tempo="30" />
      <sound tempo="10" />
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step><root-alter>-1</root-alter></root><kind text="7">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">E♭ : V7</words></direction-type><staff>2</staff></direction><note default-x="235.76" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1260</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <sound tempo="30" />
      <note default-x="255.75" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>630</duration>
        <voice>1</voice>
        <type>64th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">begin</beam>
        <notations>
          <slur type="start" bezier-x="25.138682" bezier-y="24.63053" number="1" />
          </notations>
        </note>
      <note default-x="275.74" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>630</duration>
        <voice>1</voice>
        <type>64th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        </note>
      <note default-x="298.24" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>630</duration>
        <voice>1</voice>
        <type>64th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        </note>
      <note default-x="320.73" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>630</duration>
        <voice>1</voice>
        <type>64th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        </note>
      <note default-x="340.73" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>630</duration>
        <voice>1</voice>
        <type>64th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        </note>
      <note default-x="357.72" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>630</duration>
        <voice>1</voice>
        <type>64th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <beam number="4">end</beam>
        </note>
      <note default-x="384.53" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>630</duration>
        <voice>1</voice>
        <type>64th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <beam number="4">begin</beam>
        </note>
      <note default-x="401.53" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>630</duration>
        <voice>1</voice>
        <type>64th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        </note>
      <note default-x="418.53" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>630</duration>
        <voice>1</voice>
        <type>64th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        </note>
      <note default-x="435.53" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>630</duration>
        <voice>1</voice>
        <type>64th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-30.150113" bezier-y="18.154532" />
          </notations>
        </note>
      <note default-x="452.53" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>128th</type>
        <time-modification>
          <actual-notes>9</actual-notes>
          <normal-notes>8</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        <beam number="5">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <slur type="start" bezier-x="24.014677" bezier-y="-25.782266" number="1" />
          </notations>
        </note>
      <note default-x="469.53" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>128th</type>
        <time-modification>
          <actual-notes>9</actual-notes>
          <normal-notes>8</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        <beam number="5">continue</beam>
        </note>
      <note default-x="495.07" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>128th</type>
        <accidental>natural</accidental>
        <time-modification>
          <actual-notes>9</actual-notes>
          <normal-notes>8</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        <beam number="5">continue</beam>
        </note>
      <note default-x="512.07" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>128th</type>
        <time-modification>
          <actual-notes>9</actual-notes>
          <normal-notes>8</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        <beam number="5">continue</beam>
        </note>
      <note default-x="529.07" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>128th</type>
        <time-modification>
          <actual-notes>9</actual-notes>
          <normal-notes>8</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        <beam number="5">continue</beam>
        </note>
      <note default-x="546.07" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>128th</type>
        <time-modification>
          <actual-notes>9</actual-notes>
          <normal-notes>8</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        <beam number="5">continue</beam>
        </note>
      <note default-x="563.07" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>128th</type>
        <time-modification>
          <actual-notes>9</actual-notes>
          <normal-notes>8</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        <beam number="5">continue</beam>
        </note>
      <note default-x="580.07" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>128th</type>
        <time-modification>
          <actual-notes>9</actual-notes>
          <normal-notes>8</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        <beam number="5">continue</beam>
        </note>
      <note default-x="597.07" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>280</duration>
        <voice>1</voice>
        <type>128th</type>
        <time-modification>
          <actual-notes>9</actual-notes>
          <normal-notes>8</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <beam number="4">end</beam>
        <beam number="5">end</beam>
        <notations>
          <tuplet type="stop" />
          <slur type="stop" number="1" bezier-x="-31.005911" bezier-y="-18.187042" />
          </notations>
        </note>
      <backup>
        <duration>40320</duration>
        </backup>
      <note default-x="23.99" default-y="-97.99">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>10080</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="79.53" default-y="-102.99">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>5040</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="112.68" default-y="-102.99">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>5040</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        </note>
      <note default-x="124.68" default-y="-97.99">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>5040</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="124.68" default-y="-87.99">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>5040</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="161.7" default-y="-107.99">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>5040</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="161.7" default-y="-97.99">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>5040</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="161.7" default-y="-82.99">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>5040</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="198.73" default-y="-127.99">
        <rest />
        <duration>5040</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="5.79" default-y="-52.32" relative-y="-40">
            <sf />
            </dynamics>
          </direction-type>
        <staff>2</staff>
        <sound dynamics="124.44" />
        </direction>
      <note default-x="235.76" default-y="-172.99">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>10080</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="235.76" default-y="-137.99">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>10080</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="5" width="541.19">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>129.17</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>72.43</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="3.09" default-y="-41.75" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>E</root-step><root-alter>-1</root-alter></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">I</words></direction-type><staff>2</staff></direction><note default-x="98.71" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations print-object="no">
          <articulations>
            <staccato default-x="4.93" default-y="-49.3" />
            </articulations>
          <notations>
            <staccatissimo default-x="3.96" default-y="-49.4" />
            </notations>
          </notations>
        </note>
      <note default-x="148.01" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>5040</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="148.01" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>5040</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="193.3" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3780</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="209.79" default-y="-35" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="193.3" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3780</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="209.79" default-y="-5" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="227.27" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">forward hook</beam>
        </note>
      <note default-x="227.27" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="244.26" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3780</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="260.75" default-y="-35" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="244.26" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>3780</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="260.75" default-y="5" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="278.23" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">backward hook</beam>
        </note>
      <note default-x="278.23" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>A</root-step><root-alter>-1</root-alter></root><kind text="">major</kind><bass><bass-step>E</bass-step><bass-alter>-1</bass-alter></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">IV6/4</words></direction-type><staff>2</staff></direction><note default-x="295.22" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="12.493893" bezier-y="9.358849" number="1" />
          </notations>
        </note>
      <note default-x="295.22" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="340.51" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2520</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-10.151324" bezier-y="11.859006" />
          </notations>
        </note>
      <note default-x="340.51" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>2520</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="363.15" default-y="-20">
        <rest />
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="2.88" default-y="-33.45" relative-y="-40">
            <ff />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="124.44" />
        </direction>
      <note default-x="383.79" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step></root><kind text="°7">diminished-seventh</kind><bass><bass-step>D</bass-step></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">c : vii°6/5</words></direction-type><staff>2</staff></direction><note default-x="410.44" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>3780</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="438.94" default-y="-75" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="410.44" default-y="-60">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3780</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="438.94" default-y="-65" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="422.44" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3780</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="438.94" default-y="-55" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="410.44" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3780</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="438.94" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="447.93" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">forward hook</beam>
        </note>
      <note default-x="447.93" default-y="-60">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="459.93" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="447.93" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>F</root-step></root><kind text="m">minor</kind><bass><bass-step>C</bass-step></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">iv6/4</words></direction-type><staff>2</staff></direction><note default-x="482.43" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>3780</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="498.92" default-y="-65" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="482.43" default-y="-60">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3780</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="498.92" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="482.43" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3780</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="498.92" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="482.43" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3780</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="498.92" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="516.39" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">backward hook</beam>
        </note>
      <note default-x="516.39" default-y="-60">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="516.39" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="516.39" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>40320</duration>
        </backup>
      <note default-x="98.71" default-y="-162.43">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="98.71" default-y="-127.43">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="125.37" default-y="-127.43">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="125.37" default-y="-117.43">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="125.37" default-y="-107.43">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="148.01" default-y="-127.43">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="148.01" default-y="-117.43">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="148.01" default-y="-107.43">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="170.66" default-y="-127.43">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="170.66" default-y="-117.43">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="170.66" default-y="-107.43">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="193.3" default-y="-127.43">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="193.3" default-y="-117.43">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="193.3" default-y="-107.43">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="215.94" default-y="-127.43">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="215.94" default-y="-117.43">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="215.94" default-y="-107.43">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="244.26" default-y="-127.43">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="244.26" default-y="-117.43">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="244.26" default-y="-107.43">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="266.9" default-y="-127.43">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="266.9" default-y="-117.43">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="266.9" default-y="-107.43">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="295.22" default-y="-127.43">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="295.22" default-y="-112.43">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="295.22" default-y="-102.43">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="317.86" default-y="-127.43">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="317.86" default-y="-112.43">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="317.86" default-y="-102.43">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="340.51" default-y="-127.43">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="340.51" default-y="-112.43">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="340.51" default-y="-102.43">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="363.15" default-y="-127.43">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="363.15" default-y="-112.43">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="363.15" default-y="-102.43">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="410.44" default-y="-167.43">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="410.44" default-y="-132.43">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="436.55" default-y="-167.43">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="436.55" default-y="-132.43">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="482.43" default-y="-172.43">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="482.43" default-y="-137.43">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="505.07" default-y="-172.43">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="505.07" default-y="-137.43">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="6" width="535.91">
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step></root><kind text="°7">diminished-seventh</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">vii°7</words></direction-type><staff>2</staff></direction><note default-x="15.14" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="15.14" default-y="-60">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="15.14" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="15.14" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="64.44" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>5040</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="64.44" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>5040</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step><root-alter>-1</root-alter></root><kind text="7">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V7/III</words></direction-type><staff>2</staff></direction><note default-x="113.89" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3780</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="130.39" default-y="-35" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="113.89" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>3780</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="130.39" default-y="5" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="147.86" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">forward hook</beam>
        </note>
      <note default-x="147.86" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="164.85" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3780</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="181.35" default-y="-25" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="164.85" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>3780</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="181.35" default-y="5" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="205.06" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">backward hook</beam>
        </note>
      <note default-x="205.06" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>C</root-step><root-alter>1</root-alter></root><kind text="°7">diminished-seventh</kind><bass><bass-step>B</bass-step><bass-alter>-1</bass-alter></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">pivot enh.</words></direction-type><staff>2</staff></direction><note default-x="236.98" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="15.531099" bezier-y="10.767394" number="1" />
          </notations>
        </note>
      <note default-x="236.98" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="294.95" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2520</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-13.458227" bezier-y="13.267552" />
          </notations>
        </note>
      <note default-x="294.95" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>2520</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="323.94" default-y="-20">
        <rest />
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="2.88" default-y="-55.7" relative-y="-40">
            <ff />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="124.44" />
        </direction>
      <note default-x="366.37" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="366.37" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="366.37" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="366.37" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>A</root-step></root><kind text="7">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V7/(V/V)</words></direction-type><staff>2</staff></direction><note default-x="405.17" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3780</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="421.66" default-y="-55" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="405.17" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3780</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="421.66" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="405.17" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3780</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="421.66" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="405.17" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3780</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="421.66" default-y="-25" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="439.13" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">forward hook</beam>
        </note>
      <note default-x="439.13" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="439.13" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="439.13" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="461.63" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3780</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="490.12" default-y="-55" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="473.63" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3780</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="490.12" default-y="-45" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="461.63" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3780</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="490.12" default-y="-35" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="461.63" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3780</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="490.12" default-y="-15" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="499.11" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">backward hook</beam>
        </note>
      <note default-x="511.11" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="499.11" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="499.11" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>40320</duration>
        </backup>
      <note default-x="15.14" default-y="-177.43">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="15.14" default-y="-142.43">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="3.09" default-y="-40" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <staff>2</staff>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="41.79" default-y="-142.43">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="41.79" default-y="-132.43">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="41.79" default-y="-122.43">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="41.79" default-y="-112.43">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="64.44" default-y="-142.43">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="64.44" default-y="-132.43">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="64.44" default-y="-122.43">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="64.44" default-y="-112.43">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="87.08" default-y="-142.43">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="87.08" default-y="-132.43">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="87.08" default-y="-122.43">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="87.08" default-y="-112.43">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="113.89" default-y="-142.43">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="113.89" default-y="-132.43">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="113.89" default-y="-122.43">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="113.89" default-y="-112.43">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="136.54" default-y="-142.43">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="136.54" default-y="-132.43">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="136.54" default-y="-122.43">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="136.54" default-y="-112.43">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="164.85" default-y="-142.43">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="164.85" default-y="-132.43">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="164.85" default-y="-122.43">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="164.85" default-y="-112.43">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="187.5" default-y="-142.43">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="187.5" default-y="-132.43">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="187.5" default-y="-122.43">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="187.5" default-y="-112.43">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="224.98" default-y="-142.43">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="236.98" default-y="-137.43">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="236.98" default-y="-127.43">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="236.98" default-y="-117.43">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="253.97" default-y="-142.43">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="265.97" default-y="-137.43">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="265.97" default-y="-127.43">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="265.97" default-y="-117.43">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="282.96" default-y="-142.43">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="294.95" default-y="-137.43">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="294.95" default-y="-127.43">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="294.95" default-y="-117.43">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="311.95" default-y="-142.43">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="323.94" default-y="-137.43">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="323.94" default-y="-127.43">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="323.94" default-y="-117.43">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="405.17" default-y="-182.43">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="405.17" default-y="-147.43">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="427.81" default-y="-182.43">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="427.81" default-y="-147.43">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="461.63" default-y="-187.43">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="461.63" default-y="-152.43">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="487.73" default-y="-187.43">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="487.73" default-y="-152.43">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="7" width="606.66">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>129.17</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <harmony placement="above" print-frame="no"><root><root-step>D</root-step></root><kind text="">major</kind><bass><bass-step>F</bass-step><bass-alter>1</bass-alter></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V6/V</words></direction-type><staff>2</staff></direction><note default-x="113.81" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="113.81" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="113.81" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="113.81" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="190.38" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>5040</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="190.38" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>5040</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="243.62" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3780</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="260.11" default-y="-25" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="243.62" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>3780</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="260.11" default-y="15" />
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="283.55" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">forward hook</beam>
        </note>
      <note default-x="283.55" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="314.38" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3780</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="330.88" default-y="-15" />
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="314.38" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>3780</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="330.88" default-y="15" />
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="354.32" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">backward hook</beam>
        </note>
      <note default-x="354.32" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>D</root-step></root><kind text="°">diminished</kind><bass><bass-step>F</bass-step></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">(dissol.)</words></direction-type><staff>2</staff></direction><note default-x="380.1" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="14.39265" bezier-y="10.262535" number="1" />
          </notations>
        </note>
      <note default-x="380.1" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="433.34" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2520</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-12.230359" bezier-y="12.762692" />
          </notations>
        </note>
      <note default-x="433.34" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>2520</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="459.96" default-y="-20">
        <rest />
        <duration>2520</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step></root><kind text="°">diminished</kind><bass><bass-step>D</bass-step></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">vii°6</words></direction-type><staff>2</staff></direction><note default-x="488.69" default-y="-20">
        <rest />
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="541.94" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3780</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="558.43" default-y="-15" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="541.94" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>3780</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="558.43" default-y="15" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="581.87" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">backward hook</beam>
        </note>
      <note default-x="581.87" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>40320</duration>
        </backup>
      <note default-x="113.81" default-y="-185">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="113.81" default-y="-150">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="3.09" default-y="-40" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <staff>2</staff>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="163.76" default-y="-115">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="163.76" default-y="-105">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="163.76" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="190.38" default-y="-115">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="190.38" default-y="-105">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="190.38" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="217" default-y="-115">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="217" default-y="-105">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="217" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="243.62" default-y="-115">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="243.62" default-y="-105">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="243.62" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="270.24" default-y="-115">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="270.24" default-y="-105">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="270.24" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="314.38" default-y="-115">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="314.38" default-y="-105">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="314.38" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="341" default-y="-115">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="341" default-y="-105">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="341" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="380.1" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="380.1" default-y="-105">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="380.1" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="406.72" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="406.72" default-y="-105">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="406.72" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="433.34" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="433.34" default-y="-105">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="433.34" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="459.96" default-y="-115">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="459.96" default-y="-105">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="459.96" default-y="-90">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="488.69" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="488.69" default-y="-115">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="488.69" default-y="-100">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="515.32" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="515.32" default-y="-115">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="515.32" default-y="-100">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="541.94" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="541.94" default-y="-115">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="541.94" default-y="-100">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="568.56" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="568.56" default-y="-115">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="568.56" default-y="-100">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="8" width="470.44">
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step></root><kind text="°7">diminished-seventh</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">vii°7</words></direction-type><staff>2</staff></direction><note default-x="18.06" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="12.230359" bezier-y="12.762692" number="1" />
          </notations>
        </note>
      <note default-x="18.06" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="71.3" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-14.39265" bezier-y="10.262535" />
          </notations>
        </note>
      <note default-x="71.3" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step></root><kind text="°7">diminished-seventh</kind><bass><bass-step>A</bass-step><bass-alter>-1</bass-alter></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">vii°4/2</words></direction-type><staff>2</staff></direction><note default-x="124.54" default-y="-20">
        <rest />
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="182.53" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3780</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="199.02" default-y="-5" />
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="34.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="182.53" default-y="25">
        <chord />
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>3780</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="199.02" default-y="25" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="224.83" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">backward hook</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="39.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="224.83" default-y="30">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>6</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="7">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V7</words></direction-type><staff>2</staff></direction><note default-x="255.66" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="start" bezier-x="12.230359" bezier-y="12.762692" number="1" />
          </notations>
        </note>
      <note default-x="255.66" default-y="30">
        <chord />
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="308.91" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>10080</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-14.39265" bezier-y="10.262535" />
          </notations>
        </note>
      <note default-x="308.91" default-y="35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>6</octave>
          </pitch>
        <duration>10080</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>F</root-step></root><kind text="m">minor</kind><bass><bass-step>A</bass-step><bass-alter>-1</bass-alter></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">iv6</words></direction-type><staff>2</staff></direction><note default-x="415.39" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="415.39" default-y="35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>6</octave>
          </pitch>
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>40320</duration>
        </backup>
      <note default-x="18.06" default-y="-135">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="18.06" default-y="-125">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="18.06" default-y="-105">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="44.68" default-y="-135">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="44.68" default-y="-125">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="44.68" default-y="-105">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="71.3" default-y="-135">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="71.3" default-y="-125">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="71.3" default-y="-105">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="97.92" default-y="-135">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="97.92" default-y="-125">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="97.92" default-y="-105">
        <chord />
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="124.54" default-y="-140">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="136.54" default-y="-135">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="124.54" default-y="-115">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="153.54" default-y="-140">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="165.54" default-y="-135">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="153.54" default-y="-115">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="182.53" default-y="-140">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="194.53" default-y="-135">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="182.53" default-y="-115">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="211.52" default-y="-140">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="223.52" default-y="-135">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="211.52" default-y="-115">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="255.66" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="255.66" default-y="-135">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="255.66" default-y="-115">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="282.29" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="282.29" default-y="-135">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="282.29" default-y="-115">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="308.91" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="308.91" default-y="-135">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="308.91" default-y="-115">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="335.53" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="335.53" default-y="-135">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="335.53" default-y="-115">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="362.15" default-y="-140">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="362.15" default-y="-130">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="362.15" default-y="-115">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="388.77" default-y="-140">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="388.77" default-y="-130">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="388.77" default-y="-115">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="415.39" default-y="-140">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="415.39" default-y="-130">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="415.39" default-y="-115">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="442.01" default-y="-140">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="442.01" default-y="-130">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="442.01" default-y="-115">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="9" width="653.16">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>129.17</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>75.82</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="6.57" default-y="-33.46" relative-y="-40">
            <sfp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="106.67" />
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="7">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V7</words></direction-type><staff>2</staff></direction><note default-x="98.75" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>5040</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="98.75" default-y="35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>6</octave>
          </pitch>
        <duration>5040</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="151.38" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>1260</duration>
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
      <note default-x="151.38" default-y="35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>6</octave>
          </pitch>
        <duration>1260</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>32nd</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="183.49" default-y="30">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>6</octave>
          </pitch>
        <duration>630</duration>
        <voice>1</voice>
        <type>64th</type>
        <accidental cautionary="yes" parentheses="no">flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">begin</beam>
        </note>
      <note default-x="205.99" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>630</duration>
        <voice>1</voice>
        <type>64th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        </note>
      <note default-x="228.48" default-y="35">
        <pitch>
          <step>F</step>
          <octave>6</octave>
          </pitch>
        <duration>630</duration>
        <voice>1</voice>
        <type>64th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        </note>
      <note default-x="250.98" default-y="30">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>6</octave>
          </pitch>
        <duration>630</duration>
        <voice>1</voice>
        <type>64th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        </note>
      <note default-x="273.47" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>630</duration>
        <voice>1</voice>
        <type>64th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        </note>
      <note default-x="295.96" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>630</duration>
        <voice>1</voice>
        <type>64th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <beam number="4">end</beam>
        </note>
      <note default-x="326.79" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>2520</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="20.654053" bezier-y="16.068352" number="1" />
          <articulations>
            <staccato default-x="4.93" default-y="24.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="361.88" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>2520</duration>
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
      <note default-x="396.97" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>2520</duration>
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
      <note default-x="396.97" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>2520</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="432.06" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>2520</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-20.654053" bezier-y="16.068352" />
          <articulations>
            <staccato default-x="4.93" default-y="24.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="432.06" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>2520</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>A</root-step><root-alter>-1</root-alter></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">VI (cad. rompue)</words></direction-type><staff>2</staff></direction><note default-x="467.15" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="467.15" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="519.78" default-y="-20">
        <rest />
        <duration>5040</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="572.41" default-y="-20">
        <rest />
        <duration>10080</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>40320</duration>
        </backup>
      <note default-x="98.75" default-y="-155.82">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>5040</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="98.75" default-y="-145.82">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>5040</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="98.75" default-y="-125.82">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>5040</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="151.38" default-y="-135.82">
        <rest />
        <duration>5040</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="326.79" default-y="-135.82">
        <rest />
        <duration>5040</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="396.97" default-y="-145.82">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="8.272501" bezier-y="9.095616" number="1" />
          <articulations>
            <staccato default-x="4.93" default-y="3.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="396.97" default-y="-125.82">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="432.06" default-y="-145.82">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-8.272501" bezier-y="9.095616" />
          <articulations>
            <staccato default-x="4.93" default-y="3.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="432.06" default-y="-125.82">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="467.15" default-y="-140.82">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>5040</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="467.15" default-y="-130.82">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>5040</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="519.78" default-y="-135.82">
        <rest />
        <duration>5040</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="572.41" default-y="-135.82">
        <rest />
        <duration>10080</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="10" width="423.94">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="3.09" default-y="-42.13" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="12" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>5040</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="64.63" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>1260</duration>
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
      <note default-x="95.46" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>630</duration>
        <voice>1</voice>
        <type>64th</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">begin</beam>
        <notations>
          <slur type="start" bezier-x="31.155416" bezier-y="22.489586" number="1" />
          </notations>
        </note>
      <note default-x="117.96" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>630</duration>
        <voice>1</voice>
        <type>64th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        </note>
      <note default-x="140.45" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>64th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="162.94" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>64th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        </note>
      <note default-x="193.26" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>64th</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        </note>
      <note default-x="215.75" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>64th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        </note>
      <note default-x="235.74" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>64th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        </note>
      <note default-x="255.74" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>64th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <beam number="4">end</beam>
        <notations>
          <tuplet type="stop" />
          <slur type="stop" number="1" bezier-x="-31.606217" bezier-y="22.509497" />
          </notations>
        </note>
      <note default-x="278.23" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2520</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="21.423847" bezier-y="16.365053" number="1" />
          <articulations>
            <staccato default-x="4.93" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="313.32" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2520</duration>
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
      <harmony placement="above" print-frame="no"><root><root-step>D</root-step></root><kind text="ø7">half-diminished</kind><bass><bass-step>F</bass-step></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">iiø6/5</words></direction-type><staff>2</staff></direction><note default-x="348.41" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2520</duration>
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
      <forward>
        <duration>21</duration>
        </forward>
      <note default-x="387.34" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2520</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-21.423847" bezier-y="16.365053" />
          <articulations>
            <staccato default-x="4.93" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>21</duration>
        </backup>
      <backup>
        <duration>20160</duration>
        </backup>
      <note default-x="12" default-y="-135.82">
        <rest />
        <duration>10080</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="278.23" default-y="-135.82">
        <rest />
        <duration>5040</duration>
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
      <note default-x="348.41" default-y="-125.82">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="8.272501" bezier-y="9.095616" number="1" />
          <articulations>
            <staccato default-x="4.93" default-y="24.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="336.41" default-y="-105.82">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="348.41" default-y="-100.82">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="383.5" default-y="-125.82">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-8.272501" bezier-y="9.095616" />
          <articulations>
            <staccato default-x="4.93" default-y="24.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="371.5" default-y="-105.82">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="383.5" default-y="-100.82">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2520</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>C</root-step></root><kind text="m">minor</kind><bass><bass-step>G</bass-step></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">i6/4</words></direction-type><staff>2</staff></direction><note default-x="98.71" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>2520</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="6.388805" bezier-y="16.461301" number="1" />
          </notations>
        </note>
      <note default-x="149.4" default-y="30">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>6</octave>
          </pitch>
        <duration>2520</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <tied type="start" />
          <slur type="stop" number="1" bezier-x="-17.207719" bezier-y="3.960514" />
          </notations>
        </note>
      <note default-x="200.09" default-y="30">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>64th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">begin</beam>
        <beam number="4">begin</beam>
        <notations>
          <tied type="stop" />
          <tuplet type="start" bracket="no" />
          <slur type="start" bezier-x="26.657354" bezier-y="17.886677" number="1" />
          </notations>
        </note>
      <note default-x="222.59" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>64th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        </note>
      <note default-x="252.9" default-y="25">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>64th</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        </note>
      <note default-x="275.39" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>64th</type>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        </note>
      <note default-x="306.22" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>64th</type>
        <accidental>natural</accidental>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        </note>
      <note default-x="336.54" default-y="15">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>420</duration>
        <voice>1</voice>
        <type>64th</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>6</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        <notations>
          <tuplet type="stop" />
          <slur type="stop" number="1" bezier-x="-21.056293" bezier-y="23.733768" />
          </notations>
        </note>
      <note default-x="367.37" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>360</duration>
        <voice>1</voice>
        <type>64th</type>
        <accidental>natural</accidental>
        <time-modification>
          <actual-notes>7</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <slur type="start" bezier-x="28.230081" bezier-y="23.497927" number="1" />
          </notations>
        </note>
      <note default-x="399.48" default-y="10">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>360</duration>
        <voice>1</voice>
        <type>64th</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>7</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        </note>
      <note default-x="419.47" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>360</duration>
        <voice>1</voice>
        <type>64th</type>
        <time-modification>
          <actual-notes>7</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        </note>
      <note default-x="447.92" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>360</duration>
        <voice>1</voice>
        <type>64th</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>7</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        </note>
      <note default-x="474.46" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>360</duration>
        <voice>1</voice>
        <type>64th</type>
        <accidental>natural</accidental>
        <time-modification>
          <actual-notes>7</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        </note>
      <note default-x="500.99" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>360</duration>
        <voice>1</voice>
        <type>64th</type>
        <accidental>natural</accidental>
        <time-modification>
          <actual-notes>7</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        </note>
      <note default-x="527.8" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>360</duration>
        <voice>1</voice>
        <type>64th</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>7</actual-notes>
          <normal-notes>4</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <beam number="4">end</beam>
        <notations>
          <tuplet type="stop" />
          <slur type="stop" number="1" bezier-x="-23.805136" bezier-y="28.703037" />
          </notations>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="7(♭9)">dominant</kind><degree><degree-value>9</degree-value><degree-alter>-1</degree-alter><degree-type>add</degree-type></degree></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V7(♭9)</words></direction-type><staff>2</staff></direction><note default-x="553.33" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>315</duration>
        <voice>1</voice>
        <type>128th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <beam number="3">begin</beam>
        <beam number="4">begin</beam>
        <beam number="5">begin</beam>
        <notations>
          <slur type="start" bezier-x="51.863215" bezier-y="-40.443272" number="1" />
          </notations>
        </note>
      <note default-x="581.79" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>315</duration>
        <voice>1</voice>
        <type>128th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        <beam number="5">continue</beam>
        </note>
      <note default-x="607.32" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>315</duration>
        <voice>1</voice>
        <type>128th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        <beam number="5">continue</beam>
        </note>
      <note default-x="632.86" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>315</duration>
        <voice>1</voice>
        <type>128th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        <beam number="5">continue</beam>
        </note>
      <note default-x="659.68" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>315</duration>
        <voice>1</voice>
        <type>128th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        <beam number="5">continue</beam>
        </note>
      <note default-x="685.22" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>315</duration>
        <voice>1</voice>
        <type>128th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        <beam number="5">continue</beam>
        </note>
      <note default-x="712.04" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>315</duration>
        <voice>1</voice>
        <type>128th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        <beam number="5">continue</beam>
        </note>
      <note default-x="729.04" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>315</duration>
        <voice>1</voice>
        <type>128th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        <beam number="5">continue</beam>
        </note>
      <note default-x="757.49" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>315</duration>
        <voice>1</voice>
        <type>128th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        <beam number="5">continue</beam>
        </note>
      <note default-x="783.03" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>315</duration>
        <voice>1</voice>
        <type>128th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        <beam number="5">continue</beam>
        </note>
      <note default-x="808.57" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>315</duration>
        <voice>1</voice>
        <type>128th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        <beam number="5">continue</beam>
        </note>
      <note default-x="835.39" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>315</duration>
        <voice>1</voice>
        <type>128th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        <beam number="5">continue</beam>
        </note>
      <note default-x="852.39" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>315</duration>
        <voice>1</voice>
        <type>128th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        <beam number="5">continue</beam>
        </note>
      <note default-x="883.94" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>315</duration>
        <voice>1</voice>
        <type>128th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        <beam number="5">continue</beam>
        </note>
      <note default-x="914.77" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>315</duration>
        <voice>1</voice>
        <type>128th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <beam number="3">continue</beam>
        <beam number="4">continue</beam>
        <beam number="5">continue</beam>
        </note>
      <note default-x="945.61" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>315</duration>
        <voice>1</voice>
        <type>128th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">end</beam>
        <beam number="4">end</beam>
        <beam number="5">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-59.206641" bezier-y="-28.634534" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="5.79" default-y="-37.2" relative-y="-40">
            <sf />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="124.44" />
        </direction>
      <note default-x="968.05" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3780</duration>
        <voice>1</voice>
        <type>16th</type>
        <dot default-x="984.54" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <fermata type="upright" default-y="4" relative-y="10" />
          </notations>
        </note>
      <note default-x="1032.3" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1260</duration>
        <voice>1</voice>
        <type>32nd</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <beam number="3">backward hook</beam>
        </note>
      <backup>
        <duration>20160</duration>
        </backup>
      <direction placement="above">
        <direction-type>
          <words default-y="14.59" relative-y="20">Attacca subito l'Allegro</words>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="98.71" default-y="-130.59">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>5040</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="98.71" default-y="-115.59">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>5040</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="98.71" default-y="-105.59">
        <chord />
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>5040</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="200.09" default-y="-145.59">
        <rest />
        <duration>5040</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="553.33" default-y="-165.59">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>5040</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="553.33" default-y="-145.59">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>5040</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="553.33" default-y="-135.59">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>5040</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="968.05" default-y="-145.59">
        <rest />
        <duration>5040</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        <notations>
          <fermata type="upright" relative-y="10" />
          </notations>
        </note>
      <barline location="right">
        <bar-style>light-light</bar-style>
        </barline>
      </measure>
    </part>
  </score-partwise>`;

/**
 * Analyse mesure par mesure (accord/degré/fonction) — premier accord de
 * chaque mesure, transcrit depuis le chiffrage <harmony>/<direction><words>
 * déjà écrit dans le fichier. Do mineur ; la mesure 5 bascule brièvement la
 * référence tonale vers Mib majeur (relatif), signalée verbatim par le "I"
 * de son propre chiffrage — la fonction "T" ici est relative à Mib, pas Do.
 */
export const PATHETIQUE_GRAVE_ANALYSE: MesureAnalyse[] = [
  { numero: 1,  nom: "Dom",     degre: "i",        fonction: "T" },
  { numero: 2,  nom: "Sidim7",  degre: "vii°4/2",  fonction: "D" },
  { numero: 3,  nom: "Fa#dim7", degre: "vii°4/2/V", fonction: "D", dominanteSecondaire: true },
  { numero: 4,  nom: "Fa#dim7", degre: "vii°4/3/V", fonction: "D", dominanteSecondaire: true },
  { numero: 5,  nom: "MibMaj",  degre: "I",        fonction: "T" },
  { numero: 6,  nom: "Sidim7",  degre: "vii°7",    fonction: "D" },
  { numero: 7,  nom: "Ré",      degre: "V6/V",     fonction: "D", dominanteSecondaire: true },
  { numero: 8,  nom: "Sidim7",  degre: "vii°7",    fonction: "D" },
  { numero: 9,  nom: "Sol7",    degre: "V7",       fonction: "D" },
  { numero: 10, nom: "Rém7b5",  degre: "iiø6/5",   fonction: "SD" },
];

/**
 * Analyse harmonique NARRATIVE — construite à partir d'une analyse déjà
 * très détaillée fournie par Dany (chiffrage romain complet, verbatim dans
 * le fichier lui-même, donc pas un brouillon externe à vérifier au même
 * titre que les pièces précédentes). Chiffrage recoupé mesure par mesure
 * contre les balises <harmony> réelles : concordance totale sur les 10
 * mesures. Quelques hauteurs précises (pivot enharmonique de la mesure 6,
 * basse chromatique de la mesure 5, dissolution de la mesure 7) vérifiées
 * indépendamment note à note — confirmées.
 */
export const PATHETIQUE_GRAVE_ANALYSE_NARRATIVE: AnalyseNarrative = {
  tonalite:
    "Do mineur (armure à 3 bémols). Bascule passagère vers Mib majeur (le relatif) aux mesures " +
    "4-5, via une dominante précipitée (Sib7), avant un retour au mineur par un pivot " +
    "enharmonique unique (mesure 6).",
  metrique: "4/4 (symbole C). Grave, très lent (30 à la noire), avec des ralentissements supplémentaires aux passages les plus denses.",
  forme:
    "10 mesures = l'introduction Grave complète du 1er mouvement, enchaînée attacca à l'Allegro " +
    "di molto e con brio. Toute l'introduction est une seule cadence différée : exposition du " +
    "problème (mesures 1-3), crise et modulation précipitée (mesure 4), fausse lumière et pivot " +
    "enharmonique (mesures 5-6), grande montée chromatique interrompue par une cadence rompue " +
    "(mesures 7-9), et cadence enfin réalisée mais suspendue sur la dominante (mesure 10).",
  sections: [
    {
      label: "Mesures 1-3",
      titre: "L'exposition du problème",
      chiffrage: "Do (i) – Fa#°7 (vii°7/V) – Sol (V) | Si°7 (vii°4/2) – Do (i6) | Fa#°7 (vii°4/2/V) – Sol (V6)",
      fonctions: "i – D – D | D – i6 | D – D",
      texte:
        "La mesure 1 pose le monde en germe : accord de tonique complet <em>fp</em> dans le " +
        "grave, rythme pointé caractéristique, puis un <strong>vii°7/V</strong> (Fa♯-La-Do-Mib) " +
        "qui résout sur la dominante — tonique, tension, dominante, en quatre temps. La mesure 2 " +
        "déplace le même dispositif sur <strong>vii°4/2</strong> (Si-Ré-Fa sur basse Lab) : la " +
        "basse descend Lab-Sol-Fa vers Mib pendant que les voix supérieures tiennent encore " +
        "l'accord — une résolution différée sur i6 au temps suivant. La mesure 3 transpose le " +
        "tout une tierce plus haut (la 7e à la basse, Mib-Ré-Do) et relance aussitôt la figure : " +
        "le débit harmonique s'accélère.",
    },
    {
      label: "Mesure 4",
      titre: "La crise et l'échappée",
      chiffrage: "Fa#°7 (vii°7/V) – Sol (V6) – Do7 (V4/2/iv) – Fam (iv6) – Sib7 (Mib : V7)",
      fonctions: "D – D – SD – SD – D (dans Mib)",
      texte:
        "Sur un <em>sf</em>, l'harmonie accélère brutalement : vii°7/V, V6, puis deux accords " +
        "étrangers au circuit de Do mineur — Do7/Sib (<strong>V4/2 de fa mineur</strong>) et fa " +
        "mineur/Lab (iv6), trois croches, trois fonctions. Puis tout s'arrête sur un Lab " +
        "suspendu, et une cascade écrite note pour note (jusqu'aux nonolets) déplie Sib7 : la " +
        "dominante du relatif majeur. La modulation n'est pas préparée, elle est précipitée par " +
        "la crise.",
    },
    {
      label: "Mesures 5-6",
      titre: "La fausse lumière et le pivot",
      chiffrage: "Mib (I) – Lab/Mib (IV6/4) – Si°7 (vii°6/5, en do) – Fam/Do (iv6/4) | Si°7 (vii°7) – Sib7 (V7/III) – Do#°7 (pivot enh.) – La7 (V7/(V/V))",
      fonctions: "T (Mib) puis D (retour en do) | D – D – (pivot) – D",
      texte:
        "Mib majeur, <em>p</em>, texture neuve : accords répétés, mélodie ascendante reprenant " +
        "la cellule pointée. Cette éclaircie ne dure que deux temps et demi : <em>ff</em> subit, " +
        "le vii°7 natal (Si-Ré-Fa-Lab) fait irruption dans le majeur, et la basse entame une " +
        "descente chromatique — Ré, Do, Si (vii°7 à l'état fondamental), Sib (le même agrégat " +
        "glisse d'un demi-ton et devient Sib7, V7 de Mib)… puis, sur cette même basse Sib, " +
        "surgit Do♯-Mi-Sol : <strong>Do♯°7, le pivot enharmonique</strong>. En un seul accord, " +
        "l'orbite de Mib est quittée pour celle de Ré : La7 conclut la mesure, dominante d'une " +
        "dominante encore inouïe.",
    },
    {
      label: "Mesures 7-9",
      titre: "La grande montée, puis la cadence rompue",
      chiffrage: "Ré/Fa# (V6/V) – Ré/Fa♮ (dissolution en diminué) – Si°6 (vii°6) | Si°7 (vii°7) → Sol7 (V7) – Fam/Lab (iv6) | Sol7 (V7) → Lab (VI, cadence rompue)",
      fonctions: "D lointaine | D | D → VI",
      texte:
        "Ré majeur en premier renversement (<strong>V6/V</strong>) — l'harmonie la plus " +
        "lointaine de l'introduction — lance l'ascension terminale. La mélodie en octaves " +
        "grimpe, puis l'accord de Ré se défait sous elle (Fa♯ devient Fa♮, La devient Lab : le " +
        "majeur se dissout en diminué), et la montée continue, chromatique intégrale, chaque " +
        "degré harmonisé par une rotation du même stock vii°7/dominante, jusqu'au V7 enfin à " +
        "l'état fondamental (mesure 8) — une sixte chromatique complète, tendue sur trois " +
        "mesures. La mesure 9 devrait résoudre : <em>sfp</em> sur Sol7, fragmentation en " +
        "staccatos secs — et <strong>cadence rompue</strong> : V7 → Lab majeur (VI). Après huit " +
        "mesures de construction, la résolution est refusée. Silence.",
    },
    {
      label: "Mesure 10",
      titre: "La cadence, enfin — et suspendue",
      chiffrage: "Ré°7/Fa (iiø6/5) – Do/Sol (i6/4) – Sol7(♭9) (V7)",
      fonctions: "SD – i6/4 – D",
      texte:
        "La tonique refusée arrive d'abord nue, dans la mélodie seule — une voix qui reprend " +
        "après l'interruption. Puis la formule cadentielle d'école se déploie, étirée : " +
        "<strong>iiø6/5</strong> (Ré-Fa-Lab-Do, sous des Lab staccato obstinés), un i6/4 " +
        "cadentiel sous lequel se déverse un grand trait chromatique descendant de deux octaves " +
        "et une tierce (miroir démultiplié de la montée précédente), et enfin V7 avec neuvième " +
        "mineure — Sol-Si-Ré-Fa-Lab, la ♭9 frappée <em>sf</em> sous point d'orgue. Dernière " +
        "note : la sensible, Si, en quadruple croche. Double barre, attacca : la résolution sur " +
        "do mineur appartient à l'Allegro.",
    },
  ],
  synthese: [
    {
      titre: "Un seul accord, toutes les fonctions",
      texte:
        "vii°7 apparaît sous presque toutes ses formes possibles dans ces 10 mesures : dominante " +
        "secondaire (vii°7/V), dominante principale (vii°7 tout court), et pivot enharmonique " +
        "(Do♯°7). Un seul type d'accord, décliné du début à la fin.",
    },
    {
      titre: "La symétrie du vii°7, moteur de la modulation",
      texte:
        "Parce qu'il empile trois tierces mineures égales, l'accord de 7e diminuée peut se " +
        "réécrire enharmoniquement de quatre façons et résoudre vers quatre toniques " +
        "différentes — exactement ce qui permet, à la mesure 6, de quitter l'orbite de Mib " +
        "majeur pour celle de Ré en un seul accord.",
    },
    {
      titre: "L'harmonie d'école, mise en scène",
      texte:
        "Techniquement, ce Grave n'invente rien : appoggiatures, diminuées, cadence rompue, " +
        "sixte-et-quarte cadentielle — tout est dans les traités. Ce qui est neuf, c'est le " +
        "régime dramatique imposé à ce vocabulaire : dynamiques en électrochocs, silences qui " +
        "coupent le discours, résolutions systématiquement différées — l'harmonie de manuel " +
        "traitée comme un matériau théâtral.",
    },
  ],
};
