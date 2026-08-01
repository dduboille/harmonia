import type { MesureAnalyse, AnalyseNarrative } from "./conservatoire-bwv846";

/**
 * Source : scheherazade-3-annote.musicxml (fourni par Dany), VERBATIM.
 * Rimsky-Korsakov, Schéhérazade, 3e mouvement « Le jeune Prince et la jeune
 * Princesse » (1888) — version condensée pour quatuor à cordes + contrebasse
 * (5 parties : Violon I, Violon II, Alto, Violoncelle, Contrebasse), 80 mesures,
 * 6/8. Le mouvement original fait ~180 mesures : ceci est un arrangement
 * condensé, PAS l'intégrale de la partition d'orchestre.
 *
 * Arrangement essentiellement MÉLODIQUE (comme le 1er fichier du Boléro/cours19) :
 * la ligne du Violon I porte le discours presque tout du long, les autres parties
 * fournissant des pédales/accords tenus (harmonie implicite), pas une grille
 * chiffrable mesure par mesure. Aucun `<harmony>` de progression n'a été ajouté
 * au-delà de 2 étiquettes structurelles (sol mineur à l'entrée de la Princesse,
 * m.43 ; Sol majeur à l'accord final, m.80) déjà présentes dans le fichier de Dany.
 *
 * NUANCE VÉRIFIÉE (à ne pas prendre pour argent comptant) : le message de Dany
 * dit "un seul accord complet dans tout le fichier (le Sol majeur final, m.80)".
 * Vérification note à note, à DEUX niveaux :
 *  1. Des triades complètes TENUES en pédale sous la mélodie existent à de
 *     nombreux endroits (ex. m.2-3, Sol-Si-Ré tenu 2 mesures) — donc "un seul
 *     accord" est faux au sens le plus strict.
 *  2. Même en ne comptant que les vrais TUTTIS HOMOPHONES (5 parties attaquant
 *     ENSEMBLE, même durée), il y en a 7 dans le fichier (m.42, 50, 58×2, 74,
 *     75, 80), pas 1 seul — MAIS ils se concentrent presque tous aux
 *     articulations de la forme (fin du Prince m.42, fin de la Princesse m.58,
 *     fin du retour m.74, début de la coda m.75) plutôt qu'au fil des phrases.
 * Ce qui reste vrai et vérifié : l'accord de la mesure 80 est, DE LOIN, le plus
 * dense de toute la pièce (15 notes simultanées contre 7 au maximum ailleurs,
 * 6 classes de hauteur distinctes contre 4 au maximum ailleurs) et le seul
 * explicitement annoté "Sol majeur final" dans le fichier — c'est ce critère,
 * plus défendable que "le seul accord", qui est retenu dans l'analyse ci-dessous.
 *
 * Vérifié également : thème du Prince (m.1-9) strictement diatonique de Sol
 * majeur seulement à partir de m.2 (m.1 = anacrouse du violon SEUL, sans les
 * pédales) ; épisode pizzicato (m.24-30, La-Si sous Fa# tenu) confirmé ; thème
 * de la Princesse (m.43-46, armure à 2 bémols) confirmé sol mineur orné du Do#
 * (acciaccatura) ; descente Ré-Do-Sib-La-Sol confirmée dans la région m.47-58 ;
 * coda (m.75-80) confirmée avec les glissades chromatiques annoncées. 1264
 * `<note>` bruts dans le fichier = exactement le compte annoncé par Dany (9e
 * fois d'affilée que ce compte tombe pile, depuis Bolero/cours19).
 *
 * Aucune mesure implicite non-numérique (vérification proactive post-cours45/46
 * du piège X1-X8) : les 400 balises `<measure>` (5 parties × 80 mesures)
 * numérotent proprement 1..80, measures.length === 80 confirmé.
 *
 * DÉTAIL DÉCOUVERT, NON MENTIONNÉ PAR DANY : l'accord final (m.80) n'est pas
 * un Sol majeur pur. Violon I/II, Alto (note tenue) et Contrebasse forment bien
 * Sol-Ré-Si en accord, MAIS l'Alto y superpose, en même temps (`<chord/>`,
 * `<arpeggiate>`), un arpège Mi3-Do4-La4 (pizzicato) — un ajout coloré (6te/9e)
 * par-dessus la triade de base, PAS une simple triade nue. Le hexacorde complet
 * réellement sonnant à cet instant est Do-Ré-Mi-Sol-La-Si (6 classes de
 * hauteur), pas seulement Sol-Si-Ré. Documenté ici plutôt que simplifié en
 * "accord de Sol majeur" dans le narratif affiché.
 */
export const SCHEHERAZADE3_MESURES_1_80 = `<?xml version='1.0' encoding='UTF-8'?>
<score-partwise version="4.0">
  <work>
    <work-title>Scheherazade </work-title>
    </work>
  <identification>
    <creator type="composer">Nikolai Rimsky-Korsakov</creator>
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
      <miscellaneous-field name="creationDate">2015-11-10</miscellaneous-field>
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
    <credit-words default-x="612" default-y="1527.31" justify="center" valign="top" font-size="24">Scheherazade </credit-words>
    </credit>
  <credit page="1">
    <credit-type>subtitle</credit-type>
    <credit-words default-x="612" default-y="1470.61" justify="center" valign="top" font-size="14">The Young Prince and The Young Princess</credit-words>
    </credit>
  <credit page="1">
    <credit-type>composer</credit-type>
    <credit-words default-x="1167.31" default-y="1427.31" justify="right" valign="bottom" font-size="12">Nikolai Rimsky-Korsakov</credit-words>
    </credit>
  <part-list>
    <score-part id="P1">
      <part-name>Violin</part-name>
      <part-abbreviation>Vln.</part-abbreviation>
      <score-instrument id="P1-I1">
        <instrument-name>Violin</instrument-name>
        <instrument-sound>strings.violin</instrument-sound>
        </score-instrument>
      <midi-device id="P1-I1" port="1" />
      <midi-instrument id="P1-I1">
        <midi-channel>1</midi-channel>
        <midi-program>41</midi-program>
        <volume>78.7402</volume>
        <pan>0</pan>
        </midi-instrument>
      </score-part>
    <score-part id="P2">
      <part-name>Violin</part-name>
      <part-abbreviation>Vln.</part-abbreviation>
      <score-instrument id="P2-I1">
        <instrument-name>Violin</instrument-name>
        <instrument-sound>strings.violin</instrument-sound>
        </score-instrument>
      <midi-device id="P2-I1" port="1" />
      <midi-instrument id="P2-I1">
        <midi-channel>4</midi-channel>
        <midi-program>41</midi-program>
        <volume>78.7402</volume>
        <pan>0</pan>
        </midi-instrument>
      </score-part>
    <score-part id="P3">
      <part-name>Viola</part-name>
      <part-abbreviation>Vla.</part-abbreviation>
      <score-instrument id="P3-I1">
        <instrument-name>Viola</instrument-name>
        <instrument-sound>strings.viola</instrument-sound>
        </score-instrument>
      <midi-device id="P3-I1" port="1" />
      <midi-instrument id="P3-I1">
        <midi-channel>7</midi-channel>
        <midi-program>42</midi-program>
        <volume>78.7402</volume>
        <pan>0</pan>
        </midi-instrument>
      </score-part>
    <score-part id="P4">
      <part-name>Violoncello</part-name>
      <part-abbreviation>Vc.</part-abbreviation>
      <score-instrument id="P4-I1">
        <instrument-name>Violoncello</instrument-name>
        <instrument-sound>strings.cello</instrument-sound>
        </score-instrument>
      <midi-device id="P4-I1" port="1" />
      <midi-instrument id="P4-I1">
        <midi-channel>11</midi-channel>
        <midi-program>43</midi-program>
        <volume>78.7402</volume>
        <pan>0</pan>
        </midi-instrument>
      </score-part>
    <score-part id="P5">
      <part-name>Contrabass</part-name>
      <part-abbreviation>Cb.</part-abbreviation>
      <score-instrument id="P5-I1">
        <instrument-name>Contrabass</instrument-name>
        <instrument-sound>strings.contrabass</instrument-sound>
        </score-instrument>
      <midi-device id="P5-I1" port="1" />
      <midi-instrument id="P5-I1">
        <midi-channel>14</midi-channel>
        <midi-program>44</midi-program>
        <volume>78.7402</volume>
        <pan>0</pan>
        </midi-instrument>
      </score-part>
    </part-list>
  <part id="P1">
    <measure number="1" width="153.11">
      <print>
        <system-layout>
          <system-margins>
            <left-margin>120.48</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>170</top-system-distance>
          </system-layout>
        </print>
      <attributes>
        <divisions>12</divisions>
        <key>
          <fifths>1</fifths>
          </key>
        <time>
          <beats>6</beats>
          <beat-type>8</beat-type>
          </time>
        <clef>
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <direction placement="above" system="only-top">
        <direction-type>
          <metronome parentheses="no" default-x="-35.72" relative-y="20">
            <beat-unit>quarter</beat-unit>
            <per-minute>74</per-minute>
            </metronome>
          </direction-type>
        <sound tempo="74" />
        </direction>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="99.65" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="5.953612" bezier-y="8.486491" number="1" />
          </notations>
        </note>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">THÈME DU PRINCE : Sol majeur diatonique pur, courbe suave en 6/8 (harmonie implicite : I–V)</words></direction-type><staff>2</staff></direction><note default-x="125.48" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-7.014425" bezier-y="7.633077" />
          </notations>
        </note>
      </measure>
    <measure number="2" width="165.4">
      <note default-x="12" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="28.5" default-y="-5" />
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="12.542286" bezier-y="11.221704" number="1" />
          </notations>
        </note>
      <note default-x="44.75" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="61.97" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-12.542286" bezier-y="11.221704" />
          </notations>
        </note>
      <note default-x="87.8" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="104.3" default-y="-15" />
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="10.318466" bezier-y="-13.622118" number="1" />
          </notations>
        </note>
      <note default-x="120.55" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="137.77" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-14.766105" bezier-y="-8.602034" />
          </notations>
        </note>
      </measure>
    <measure number="3" width="140.42">
      <note default-x="12" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-15" />
        <stem>down</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="61.12" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="86.95" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <notations>
          <slur type="start" bezier-x="5.953612" bezier-y="8.486491" number="1" />
          </notations>
        </note>
      <note default-x="112.78" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-7.014425" bezier-y="7.633077" />
          </notations>
        </note>
      </measure>
    <measure number="4" width="217.63">
      <note default-x="12" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="19.452055" bezier-y="13.975045" number="1" />
          </notations>
        </note>
      <note default-x="37.83" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="55.05" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="72.28" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="89.5" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-19.452055" bezier-y="13.975045" />
          </notations>
        </note>
      <note default-x="106.72" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="18.517084" bezier-y="-19.162572" number="1" />
          </notations>
        </note>
      <note default-x="123.94" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="141.16" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="158.38" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="175.6" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="192.83" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-24.709706" bezier-y="-9.975819" />
          </notations>
        </note>
      </measure>
    <measure number="5" width="140.42">
      <note default-x="12" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-15" />
        <stem>down</stem>
        <notations>
          <slur type="start" bezier-x="14.571593" bezier-y="8.503639" number="1" />
          </notations>
        </note>
      <note default-x="61.12" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-10.087226" bezier-y="13.523722" />
          </notations>
        </note>
      <note default-x="86.95" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <notations>
          <slur type="start" bezier-x="8.54292" bezier-y="-6.256508" number="1" />
          </notations>
        </note>
      <note default-x="112.78" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-4.425117" bezier-y="-9.619964" />
          </notations>
        </note>
      </measure>
    <measure number="6" width="173.16">
      <note default-x="18.06" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="34.56" default-y="-25" />
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="12.542286" bezier-y="-11.221704" number="1" />
          </notations>
        </note>
      <note default-x="50.81" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="68.03" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-12.542286" bezier-y="-11.221704" />
          </notations>
        </note>
      <note default-x="93.86" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="12.968037" bezier-y="-11.410577" number="1" />
          </notations>
        </note>
      <note default-x="119.69" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="145.53" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-12.968037" bezier-y="-11.410577" />
          </notations>
        </note>
      </measure>
    <measure number="7" width="196.57">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>51.36</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        </print>
      <note default-x="79.52" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="96.03" default-y="-35" />
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="21.379598" bezier-y="-13.078874" number="1" />
          </notations>
        </note>
      <note default-x="125.19" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="161.21" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-19.624726" bezier-y="-15.588916" />
          </notations>
        </note>
      </measure>
    <measure number="8" width="185.79">
      <note default-x="12" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="36.01" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="60.03" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="84.04" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="99.54" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="115.04" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="130.54" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="147.04" default-y="-25" />
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="160.98" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        </note>
      </measure>
    <measure number="9" width="120.91">
      <note default-x="12" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">période close (double barre) ; conséquent développé</words></direction-type><staff>2</staff></direction><note default-x="66.03" default-y="-20">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        <repeat direction="backward" />
        </barline>
      </measure>
    <measure number="10" width="61.83">
      <note default-x="12" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="36.01" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="11" width="154.72">
      <note default-x="12" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="28.5" default-y="-25" />
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="11.658983" bezier-y="-10.819341" number="1" />
          </notations>
        </note>
      <note default-x="42.44" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="58.45" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-11.658983" bezier-y="-10.819341" />
          </notations>
        </note>
      <note default-x="82.46" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="98.96" default-y="-35" />
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="9.355941" bezier-y="-13.207526" number="1" />
          </notations>
        </note>
      <note default-x="112.9" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="128.91" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-13.962025" bezier-y="-8.187443" />
          </notations>
        </note>
      </measure>
    <measure number="12" width="134.55">
      <note default-x="12" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-35" />
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="57.66" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="84.72" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <notations>
          <slur type="start" bezier-x="8.157586" bezier-y="-5.953026" number="1" />
          </notations>
        </note>
      <note default-x="108.74" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-3.897164" bezier-y="-9.316482" />
          </notations>
        </note>
      </measure>
    <measure number="13" width="204.89">
      <note default-x="12" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="18.082126" bezier-y="-13.473959" number="1" />
          </notations>
        </note>
      <note default-x="36.01" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="52.02" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="68.03" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="84.04" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-18.082126" bezier-y="-13.473959" />
          </notations>
        </note>
      <note default-x="100.05" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="18.026163" bezier-y="-17.064682" number="1" />
          </notations>
        </note>
      <note default-x="116.06" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="132.07" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="148.07" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="164.08" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="180.09" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-22.156338" bezier-y="-11.191184" />
          </notations>
        </note>
      </measure>
    <measure number="14" width="216.42">
      <print new-page="yes" page-number="2">
        <system-layout>
          <system-margins>
            <left-margin>51.36</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>70</top-system-distance>
          </system-layout>
        </print>
      <note default-x="79.52" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="96.03" default-y="-35" />
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="139.54" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="166.6" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <notations>
          <slur type="start" bezier-x="6.576021" bezier-y="-7.341824" number="1" />
          </notations>
        </note>
      <note default-x="190.61" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-5.475811" bezier-y="-8.195239" />
          </notations>
        </note>
      </measure>
    <measure number="15" width="161.82">
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-75" spread="12" number="1" />
          </direction-type>
        </direction>
      <note default-x="12" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="28.5" default-y="-25" />
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="11.65616" bezier-y="-10.818031" number="1" />
          </notations>
        </note>
      <note default-x="42.43" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="58.44" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-11.65616" bezier-y="-10.818031" />
          </notations>
        </note>
      <note default-x="88" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="12.051832" bezier-y="-11.000109" number="1" />
          </notations>
        </note>
      <note default-x="112.01" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="136.01" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-12.051832" bezier-y="-11.000109" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        </direction>
      </measure>
    <measure number="16" width="161.82">
      <note default-x="12" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="28.5" default-y="-35" />
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="9.068154" bezier-y="-7.444465" number="1" />
          </notations>
        </note>
      <note default-x="42.43" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <beam number="2">forward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-6.209611" bezier-y="-9.954507" />
          </notations>
        </note>
      <note default-x="58.44" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="88" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="12.051832" bezier-y="-11.000109" number="1" />
          </notations>
        </note>
      <note default-x="112.01" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="136.01" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-12.051832" bezier-y="-11.000109" />
          </notations>
        </note>
      </measure>
    <measure number="17" width="165.32">
      <note default-x="16.42" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="12.978849" bezier-y="-12.009897" number="1" />
          </notations>
        </note>
      <note default-x="40.43" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="64.44" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-9.729885" bezier-y="-14.830566" />
          </notations>
        </note>
      <note default-x="88.44" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="12.818427" bezier-y="-11.344565" number="1" />
          </notations>
        </note>
      <note default-x="115.5" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="139.51" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-12.818427" bezier-y="-11.344565" />
          </notations>
        </note>
      </measure>
    <measure number="18" width="170.17">
      <sound tempo="65" />
      <direction placement="below">
        <direction-type>
          <words default-y="-66.39" relative-y="-35" font-style="italic" font-size="12">rit.</words>
          </direction-type>
        </direction>
      <note default-x="13.32" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="15.55652" bezier-y="-17.412333" number="1" />
          </notations>
        </note>
      <note default-x="45.28" default-y="-60">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <sound tempo="55" />
      <note default-x="69.29" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="93.3" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-17.815558" bezier-y="-17.860288" />
          </notations>
        </note>
      <note default-x="120.36" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <notations>
          <slur type="start" bezier-x="9.13884" bezier-y="-4.963227" number="1" />
          </notations>
        </note>
      <note default-x="144.37" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-2.912992" bezier-y="-9.983311" />
          </notations>
        </note>
      </measure>
    <measure number="19" width="183.7">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.62" default-y="-40" relative-y="-40">
            <ff />
            </dynamics>
          </direction-type>
        <sound dynamics="124.44" />
        </direction>
      <note default-x="13.32" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="13.579418" bezier-y="-9.265476" number="1" />
          </notations>
        </note>
      <note default-x="37.33" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="61.34" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-10.524245" bezier-y="-12.628932" />
          </notations>
        </note>
      <note default-x="86.88" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="16.216063" bezier-y="-15.918209" number="1" />
          </notations>
        </note>
      <note default-x="110.88" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="126.89" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="142.89" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="158.9" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-19.939432" bezier-y="-10.898125" />
          </notations>
        </note>
      </measure>
    <measure number="20" width="200.43">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>51.36</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-85.26" number="1" />
          </direction-type>
        </direction>
      <note default-x="79.52" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="96.03" default-y="-45" />
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="19.760255" bezier-y="-17.142642" number="1" />
          </notations>
        </note>
      <note default-x="127.34" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="165.06" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-23.181489" bezier-y="-12.122559" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        </direction>
      </measure>
    <measure number="21" width="169.27">
      <note default-x="12" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="25.910929" bezier-y="-19.268794" number="1" />
          </notations>
        </note>
      <note default-x="37.15" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="62.3" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="87.44" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="112.59" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="129.09" default-y="-55" />
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="144.47" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-27.28972" bezier-y="-17.26076" />
          </notations>
        </note>
      </measure>
    <measure number="22" width="156.42">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-51.95" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <sound dynamics="54.44" />
        </direction>
      <direction placement="above" system="only-top">
        <direction-type>
          <metronome parentheses="no" relative-y="20">
            <beat-unit>quarter</beat-unit>
            <per-minute>74</per-minute>
            </metronome>
          </direction-type>
        <sound tempo="74" />
        </direction>
      <note default-x="12" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-65" />
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="74.87" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="101.93" default-y="-20">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="23" width="161.38">
      <note default-x="73.29" default-y="-10">
        <rest measure="yes" />
        <duration>36</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="24" width="158.92">
      <note default-x="12" default-y="-20">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40.84" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <sound dynamics="36.67" />
        </direction>
      <direction placement="above">
        <direction-type>
          <words relative-y="40">pizz</words>
          </direction-type>
        <sound pizzicato="yes" />
        </direction>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">épisode pizz : dialogue de basses La–Si sous Fa# — pédales de dominante implicites</words></direction-type><staff>2</staff></direction><note default-x="49.72" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        </note>
      <note default-x="79.28" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="129.58" default-y="-20">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      </measure>
    <measure number="25" width="212.83">
      <note default-x="99.02" default-y="-10">
        <rest measure="yes" />
        <duration>36</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="26" width="221.36">
      <print new-page="yes" page-number="3">
        <system-layout>
          <system-margins>
            <left-margin>51.36</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>70</top-system-distance>
          </system-layout>
        </print>
      <note default-x="79.52" default-y="-20">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <note default-x="115.07" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        </note>
      <note default-x="144.63" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="192.02" default-y="-20">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      </measure>
    <measure number="27" width="171.18">
      <note default-x="78.19" default-y="-10">
        <rest measure="yes" />
        <duration>36</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="28" width="141.99">
      <note default-x="12" default-y="-20">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <note default-x="47.54" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        </note>
      <note default-x="77.1" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="112.64" default-y="-20">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      </measure>
    <measure number="29" width="213.29">
      <note default-x="99.25" default-y="-10">
        <rest measure="yes" />
        <duration>36</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="30" width="150.85">
      <note default-x="12" default-y="-20">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      <direction placement="above">
        <direction-type>
          <words relative-y="40">arco</words>
          </direction-type>
        <sound pizzicato="no" />
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-75.4" spread="12" number="1" />
          </direction-type>
        </direction>
      <note default-x="101.66" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="2.816991" bezier-y="9.927144" number="1" />
          </notations>
        </note>
      <note default-x="125.36" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-9.077686" bezier-y="4.907061" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        </direction>
      </measure>
    <measure number="31" width="160.58">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-40" relative-y="-40">
            <mf />
            </dynamics>
          </direction-type>
        <sound dynamics="88.89" />
        </direction>
      <note default-x="14.96" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="31.46" default-y="-5" />
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="11.052358" bezier-y="11.48845" number="1" />
          </notations>
        </note>
      <note default-x="45" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="60.79" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-10.60055" bezier-y="11.373335" />
          </notations>
        </note>
      <note default-x="89.26" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="105.76" default-y="-15" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="13.821957" bezier-y="8.112994" number="1" />
          </notations>
        </note>
      <note default-x="119.29" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="135.09" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-9.186373" bezier-y="13.133077" />
          </notations>
        </note>
      </measure>
    <measure number="32" width="244.31">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>51.36</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        </print>
      <note default-x="79.52" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="96.03" default-y="-15" />
        <stem>down</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="153.61" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="183.24" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <notations>
          <slur type="start" bezier-x="4.599339" bezier-y="10.921842" number="1" />
          </notations>
        </note>
      <note default-x="212.87" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-10.276663" bezier-y="5.901758" />
          </notations>
        </note>
      </measure>
    <measure number="33" width="255.9">
      <note default-x="14.96" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="21.862195" bezier-y="15.714756" number="1" />
          </notations>
        </note>
      <note default-x="44.59" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="64.35" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="84.1" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="103.86" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-21.410388" bezier-y="15.58245" />
          </notations>
        </note>
      <note default-x="123.62" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="24.36533" bezier-y="12.666357" number="1" />
          </notations>
        </note>
      <note default-x="152.08" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="171.83" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="191.59" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="211.34" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="231.1" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-18.800939" bezier-y="20.015759" />
          </notations>
        </note>
      </measure>
    <measure number="34" width="176.78">
      <note default-x="12" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-15" />
        <stem>down</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="86.08" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-75.4" spread="12" number="1" />
          </direction-type>
        </direction>
      <note default-x="115.72" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <notations>
          <slur type="start" bezier-x="5.062796" bezier-y="10.563383" number="1" />
          </notations>
        </note>
      <note default-x="145.35" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-9.813206" bezier-y="6.396714" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        </direction>
      </measure>
    <measure number="35" width="192.61">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-40" relative-y="-40">
            <mf />
            </dynamics>
          </direction-type>
        <sound dynamics="88.89" />
        </direction>
      <note default-x="14.96" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="31.46" default-y="-5" />
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="14.38761" bezier-y="12.018902" number="1" />
          </notations>
        </note>
      <note default-x="52.53" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="72.28" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-14.38761" bezier-y="12.018902" />
          </notations>
        </note>
      <note default-x="101.91" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="14.876002" bezier-y="12.221192" number="1" />
          </notations>
        </note>
      <note default-x="131.55" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="161.18" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-14.876002" bezier-y="12.221192" />
          </notations>
        </note>
      </measure>
    <measure number="36" width="189.65">
      <note default-x="12" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="28.5" default-y="-15" />
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="15.872129" bezier-y="14.475181" number="1" />
          </notations>
        </note>
      <note default-x="49.56" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="69.32" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-10.090733" bezier-y="19.14953" />
          </notations>
        </note>
      <note default-x="98.95" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="14.876002" bezier-y="-12.221192" number="1" />
          </notations>
        </note>
      <note default-x="128.59" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="158.22" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-14.876002" bezier-y="-12.221192" />
          </notations>
        </note>
      </measure>
    <measure number="37" width="233.82">
      <print new-page="yes" page-number="4">
        <system-layout>
          <system-margins>
            <left-margin>51.36</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>70</top-system-distance>
          </system-layout>
        </print>
      <direction placement="above">
        <direction-type>
          <words relative-y="40" font-style="italic" font-size="12">rit.</words>
          </direction-type>
        </direction>
      <note default-x="82.49" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="14.661713" bezier-y="-10.83081" number="1" />
          </notations>
        </note>
      <note default-x="107.41" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="132.33" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-10.360883" bezier-y="-14.997479" />
          </notations>
        </note>
      <sound tempo="65" />
      <note default-x="157.25" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="12.511298" bezier-y="-11.207833" number="1" />
          </notations>
        </note>
      <note default-x="182.18" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="207.1" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-12.511298" bezier-y="-11.207833" />
          </notations>
        </note>
      </measure>
    <measure number="38" width="168.2">
      <note default-x="13.32" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="11.698213" bezier-y="-17.112167" number="1" />
          </notations>
        </note>
      <note default-x="41.78" default-y="-40">
        <pitch>
          <step>E</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="66.71" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-11.051757" bezier-y="-17.385552" />
          </notations>
        </note>
      <sound tempo="56" />
      <note default-x="91.63" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="14.737763" bezier-y="-8.587769" number="1" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-75.4" spread="12" number="1" />
          </direction-type>
        </direction>
      <note default-x="116.55" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="141.47" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-10.284833" bezier-y="-13.607852" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        </direction>
      </measure>
    <measure number="39" width="192.82">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.62" default-y="-40" relative-y="-40">
            <ff />
            </dynamics>
          </direction-type>
        <sound dynamics="124.44" />
        </direction>
      <note default-x="13.32" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="41.78" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="66.71" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="93.25" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="118.17" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="134.79" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="151.4" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="168.02" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      </measure>
    <measure number="40" width="123.5">
      <note default-x="12" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-25" />
        <stem>up</stem>
        </note>
      <note default-x="59.39" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="96.77" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="41" width="168.08">
      <note default-x="12" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="36.92" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="61.84" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="86.77" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="111.69" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="128.19" default-y="-5" />
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="143.28" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        </note>
      </measure>
    <measure number="42" width="172.84">
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-75" number="1" />
          </direction-type>
        </direction>
      <note default-x="12" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-5" />
        <stem>down</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="59.39" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="above" system="only-top">
        <direction-type>
          <metronome parentheses="no" relative-y="20">
            <beat-unit>quarter</beat-unit>
            <per-minute>98</per-minute>
            </metronome>
          </direction-type>
        <sound tempo="98" />
        </direction>
      <note default-x="86.45" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="111.37" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        </direction>
      <barline location="right">
        <bar-style>light-light</bar-style>
        </barline>
      </measure>
    <measure number="43" width="272.04">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>51.36</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        </print>
      <attributes>
        <key>
          <fifths>-2</fifths>
          </key>
        </attributes>
      <note default-x="89" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="105.51" default-y="-5" />
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="22.241531" bezier-y="15.403427" number="1" />
          </notations>
        </note>
      <note default-x="127.72" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">forward hook</beam>
        </note>
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">LA PRINCESSE (2♭) : sol mineur orné du DO# — l'ornement « oriental » (4te augmentée brodée)</words></direction-type><staff>2</staff></direction><note default-x="148.08" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="178.62" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          <slur type="stop" number="1" bezier-x="-22.744803" bezier-y="14.650091" />
          </notations>
        </note>
      <note default-x="209.16" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="239.7" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="44" width="195.03">
      <note default-x="12" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="28.5" default-y="-5" />
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="22.241531" bezier-y="15.403427" number="1" />
          </notations>
        </note>
      <note default-x="50.71" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="71.07" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="101.61" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          <slur type="stop" number="1" bezier-x="-22.744803" bezier-y="14.650091" />
          </notations>
        </note>
      <note default-x="132.15" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="162.69" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="45" width="195.03">
      <note default-x="12" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="28.5" default-y="-5" />
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="22.241531" bezier-y="15.403427" number="1" />
          </notations>
        </note>
      <note default-x="50.71" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="71.07" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="101.61" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          <slur type="stop" number="1" bezier-x="-22.744803" bezier-y="14.650091" />
          </notations>
        </note>
      <note default-x="132.15" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="162.69" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="46" width="195.03">
      <note default-x="12" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="28.5" default-y="-5" />
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="22.241531" bezier-y="15.403427" number="1" />
          </notations>
        </note>
      <note default-x="50.71" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="71.07" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="101.61" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          <slur type="stop" number="1" bezier-x="-22.744803" bezier-y="14.650091" />
          </notations>
        </note>
      <note default-x="132.15" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="162.69" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="47" width="202.13">
      <note default-x="12" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="28.5" default-y="-15" />
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="22.936679" bezier-y="17.666118" number="1" />
          </notations>
        </note>
      <note default-x="57.81" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">forward hook</beam>
        </note>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">descente Ré–Do–Si♭–La–Sol : le tétracorde descendant, encore lui</words></direction-type><staff>2</staff></direction><note default-x="78.17" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="108.71" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          <slur type="stop" number="1" bezier-x="-25.611479" bezier-y="13.499449" />
          </notations>
        </note>
      <note default-x="139.25" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="169.79" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-16.56" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="48" width="284.08">
      <print new-page="yes" page-number="5">
        <system-layout>
          <system-margins>
            <left-margin>51.36</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>70</top-system-distance>
          </system-layout>
        </print>
      <note default-x="89" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="105.51" default-y="-15" />
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="24.673241" bezier-y="16.191078" number="1" />
          </notations>
        </note>
      <note default-x="136.02" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="156.91" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="188.26" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          <slur type="stop" number="1" bezier-x="-25.15146" bezier-y="15.437742" />
          </notations>
        </note>
      <note default-x="219.6" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-33.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="250.94" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="49" width="201.85">
      <note default-x="12" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-16.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="43.34" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-6.56" />
            </articulations>
          </notations>
        </note>
      <note default-x="74.68" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="106.03" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="137.37" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-33.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="168.71" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-33.44" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="50" width="170.51">
      <note default-x="12" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="59.01" default-y="-20">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="51" width="201.4">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <sound dynamics="54.44" />
        </direction>
      <direction placement="above">
        <direction-type>
          <words relative-y="40">pizz</words>
          </direction-type>
        <sound pizzicato="yes" />
        </direction>
      <note default-x="12" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="12" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="74.23" default-y="-20">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <note default-x="105.58" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="136.92" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="168.26" default-y="-20">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      </measure>
    <measure number="52" width="201.4">
      <note default-x="12" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="12" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="74.23" default-y="-20">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <note default-x="105.58" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="136.92" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="168.26" default-y="-20">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      </measure>
    <measure number="53" width="271.83">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>51.36</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        </print>
      <note default-x="89" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="89" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="150.57" default-y="-20">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <note default-x="180.43" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="210.3" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="240.17" default-y="-20">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      </measure>
    <measure number="54" width="195.8">
      <note default-x="12" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="12" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="73.56" default-y="-20">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <note default-x="103.43" default-y="-55">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="134.27" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="164.14" default-y="-20">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      </measure>
    <measure number="55" width="200.56">
      <note default-x="12" default-y="-20">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <note default-x="41.87" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="79.3" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="109.17" default-y="-20">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <note default-x="139.03" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="168.9" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="56" width="198.06">
      <note default-x="12" default-y="-20">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <note default-x="41.87" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="76.8" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="106.67" default-y="-20">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <note default-x="136.53" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="166.4" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="57" width="192.99">
      <note default-x="12" default-y="-20">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <note default-x="41.87" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="71.73" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="101.6" default-y="-20">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <note default-x="131.46" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="161.33" default-y="-20">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="58" width="213.66">
      <print new-page="yes" page-number="6">
        <system-layout>
          <system-margins>
            <left-margin>51.36</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>79.56</top-system-distance>
          </system-layout>
        </print>
      <note default-x="89" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="105.51" default-y="-25" />
        <stem>down</stem>
        </note>
      <note default-x="89" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="105.51" default-y="5" />
        <stem>down</stem>
        </note>
      <note default-x="139.48" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="139.48" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        </note>
      <note default-x="166.54" default-y="-20">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <barline location="right">
        <bar-style>light-light</bar-style>
        </barline>
      </measure>
    <measure number="59" width="87.15">
      <attributes>
        <key>
          <fifths>1</fifths>
          </key>
        </attributes>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <sound dynamics="54.44" />
        </direction>
      <direction placement="above" system="only-top">
        <direction-type>
          <metronome parentheses="no" default-y="36.76" relative-y="20">
            <beat-unit>quarter</beat-unit>
            <per-minute>74</per-minute>
            </metronome>
          </direction-type>
        <sound tempo="74" />
        </direction>
      <direction placement="above">
        <direction-type>
          <words relative-y="40">arco</words>
          </direction-type>
        <sound pizzicato="no" />
        </direction>
      <note default-x="32.26" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="6.139728" bezier-y="8.597435" number="1" />
          </notations>
        </note>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">retour du Prince (Sol majeur), da capo varié</words></direction-type><staff>2</staff></direction><note default-x="58.81" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-7.186257" bezier-y="7.744021" />
          </notations>
        </note>
      </measure>
    <measure number="60" width="169.59">
      <note default-x="12" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="28.5" default-y="-5" />
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="12.888481" bezier-y="11.375522" number="1" />
          </notations>
        </note>
      <note default-x="45.65" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="63.35" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-12.888481" bezier-y="11.375522" />
          </notations>
        </note>
      <note default-x="89.89" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="106.39" default-y="-15" />
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="10.693612" bezier-y="-13.780188" number="1" />
          </notations>
        </note>
      <note default-x="123.54" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="141.24" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-15.083351" bezier-y="-8.760104" />
          </notations>
        </note>
      </measure>
    <measure number="61" width="159.8">
      <note default-x="12" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-15" />
        <stem>down</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="78.36" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="104.91" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <notations>
          <slur type="start" bezier-x="6.139728" bezier-y="8.597435" number="1" />
          </notations>
        </note>
      <note default-x="131.45" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-7.186257" bezier-y="7.744021" />
          </notations>
        </note>
      </measure>
    <measure number="62" width="269.26">
      <note default-x="12" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="23.873194" bezier-y="14.756778" number="1" />
          </notations>
        </note>
      <note default-x="38.55" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="56.24" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="73.94" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="89.44" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="104.94" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          <slur type="stop" number="1" bezier-x="-20.003995" bezier-y="18.431286" />
          </notations>
        </note>
      <note default-x="120.44" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <slur type="start" bezier-x="6.254946" bezier-y="4.20185" number="1" />
          </notations>
        </note>
      <note default-x="135.94" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="0" bezier-y="7.535186" />
          </notations>
        </note>
      <note default-x="151.45" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="166.95" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="182.45" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="197.95" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="213.45" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="228.95" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="244.45" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="63" width="159.8">
      <note default-x="12" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-15" />
        <stem>down</stem>
        <notations>
          <slur type="start" bezier-x="18.595281" bezier-y="10.349853" number="1" />
          </notations>
        </note>
      <note default-x="78.36" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-14.71968" bezier-y="15.369936" />
          </notations>
        </note>
      <note default-x="104.91" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <notations>
          <slur type="start" bezier-x="8.695753" bezier-y="-6.372053" number="1" />
          </notations>
        </note>
      <note default-x="131.45" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-4.630232" bezier-y="-9.735509" />
          </notations>
        </note>
      </measure>
    <measure number="64" width="236.66">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>51.36</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        </print>
      <note default-x="82.49" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="98.99" default-y="-25" />
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="12.466418" bezier-y="-11.187713" number="1" />
          </notations>
        </note>
      <note default-x="115.03" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="132.15" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-12.466418" bezier-y="-11.187713" />
          </notations>
        </note>
      <note default-x="157.83" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="12.889594" bezier-y="-11.376013" number="1" />
          </notations>
        </note>
      <note default-x="183.5" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="209.18" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-12.889594" bezier-y="-11.376013" />
          </notations>
        </note>
      </measure>
    <measure number="65" width="150.07">
      <note default-x="12" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-35" />
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="21.406112" bezier-y="-15.074577" number="1" />
          </notations>
        </note>
      <note default-x="76.19" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="114.7" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-19.840588" bezier-y="-17.08261" />
          </notations>
        </note>
      </measure>
    <measure number="66" width="204.74">
      <note default-x="12" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="14.367592" bezier-y="-9.646381" number="1" />
          </notations>
        </note>
      <note default-x="37.68" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="63.35" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-11.411596" bezier-y="-13.009837" />
          </notations>
        </note>
      <note default-x="89.03" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="21.440681" bezier-y="-17.18846" number="1" />
          </notations>
        </note>
      <note default-x="114.7" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="131.82" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="148.94" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="164.44" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="179.94" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          <slur type="stop" number="1" bezier-x="-24.198738" bezier-y="-13.021791" />
          </notations>
        </note>
      </measure>
    <measure number="67" width="158.27">
      <note default-x="12" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-25" />
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="76.19" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-40" relative-y="-40">
            <mf />
            </dynamics>
          </direction-type>
        <sound dynamics="88.89" />
        </direction>
      <note default-x="103.25" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <notations>
          <slur type="start" bezier-x="3.420577" bezier-y="10.275045" number="1" />
          </notations>
        </note>
      <note default-x="128.93" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-9.469017" bezier-y="5.254961" />
          </notations>
        </note>
      </measure>
    <measure number="68" width="169.87">
      <note default-x="12" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="28.5" default-y="15" />
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="13.817841" bezier-y="11.778516" number="1" />
          </notations>
        </note>
      <note default-x="44.55" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="67.05" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-13.817841" bezier-y="11.778516" />
          </notations>
        </note>
      <note default-x="92.73" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="109.23" default-y="5" />
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="13.968858" bezier-y="9.455657" number="1" />
          </notations>
        </note>
      <note default-x="125.28" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="142.39" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-10.963977" bezier-y="12.819113" />
          </notations>
        </note>
      </measure>
    <measure number="69" width="139.65">
      <note default-x="12" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-5" />
        <stem>down</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="60.82" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="86.5" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <notations>
          <slur type="start" bezier-x="3.420577" bezier-y="10.275045" number="1" />
          </notations>
        </note>
      <note default-x="112.18" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-9.469017" bezier-y="5.254961" />
          </notations>
        </note>
      </measure>
    <measure number="70" width="317.72">
      <print new-page="yes" page-number="7">
        <system-layout>
          <system-margins>
            <left-margin>51.36</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>70</top-system-distance>
          </system-layout>
        </print>
      <note default-x="79.52" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="23.784299" bezier-y="16.346582" number="1" />
          </notations>
        </note>
      <note default-x="108.58" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="131.08" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="153.58" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="176.08" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-23.332492" bezier-y="16.212825" />
          </notations>
        </note>
      <note default-x="196.08" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="26.188069" bezier-y="12.628894" number="1" />
          </notations>
        </note>
      <note default-x="215.45" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="234.82" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="254.19" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="273.56" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="292.92" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-22.42689" bezier-y="18.502392" />
          </notations>
        </note>
      </measure>
    <measure number="71" width="173.59">
      <note default-x="12" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-5" />
        <stem>down</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="84.63" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-75" spread="12" number="1" />
          </direction-type>
        </direction>
      <note default-x="113.68" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <notations>
          <slur type="start" bezier-x="5.830331" bezier-y="9.749404" number="1" />
          </notations>
        </note>
      <note default-x="142.74" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-8.754157" bezier-y="7.239362" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        </direction>
      </measure>
    <measure number="72" width="192.3">
      <note default-x="14.96" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="31.46" default-y="15" />
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="14.892125" bezier-y="12.227814" number="1" />
          </notations>
        </note>
      <note default-x="51.79" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="74.29" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-14.892125" bezier-y="12.227814" />
          </notations>
        </note>
      <note default-x="103.34" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="14.584488" bezier-y="12.100855" number="1" />
          </notations>
        </note>
      <note default-x="132.4" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="161.45" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-14.584488" bezier-y="12.100855" />
          </notations>
        </note>
      </measure>
    <measure number="73" width="186.21">
      <note default-x="12" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="28.5" default-y="-5" />
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="14.027646" bezier-y="12.228141" number="1" />
          </notations>
        </note>
      <note default-x="48.83" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="68.2" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-12.815224" bezier-y="12.9191" />
          </notations>
        </note>
      <note default-x="97.25" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="14.584488" bezier-y="12.100855" number="1" />
          </notations>
        </note>
      <note default-x="126.3" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="155.35" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-14.584488" bezier-y="12.100855" />
          </notations>
        </note>
      </measure>
    <measure number="74" width="189.43">
      <note default-x="13.32" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="12.864637" bezier-y="14.123236" number="1" />
          </notations>
        </note>
      <note default-x="42.37" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="71.43" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-16.304339" bezier-y="9.956566" />
          </notations>
        </note>
      <note default-x="100.48" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="14.584488" bezier-y="12.100855" number="1" />
          </notations>
        </note>
      <note default-x="129.53" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="158.58" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-14.584488" bezier-y="12.100855" />
          </notations>
        </note>
      </measure>
    <measure number="75" width="242.44">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>51.36</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        </print>
      <sound tempo="65" />
      <direction placement="below">
        <direction-type>
          <words default-y="-40.96" relative-y="-35" font-style="italic" font-size="12">rit.</words>
          </direction-type>
        </direction>
      <note default-x="80.85" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="13.321807" bezier-y="12.146556" number="1" />
          </notations>
        </note>
      <note default-x="109.31" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <sound tempo="55" />
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">coda : glissades chromatiques (La#–Si–Do / Mi♭–Fa#–Sol) — l'arabesque de la conteuse</words></direction-type><staff>2</staff></direction><note default-x="135.37" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-14.052555" bezier-y="11.293141" />
          </notations>
        </note>
      <note default-x="161.44" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="188.5" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <notations>
          <slur type="start" bezier-x="3.538527" bezier-y="10.341629" number="1" />
          </notations>
        </note>
      <note default-x="214.57" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-9.547336" bezier-y="5.321545" />
          </notations>
        </note>
      </measure>
    <measure number="76" width="195">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.62" default-y="-40" relative-y="-40">
            <ff />
            </dynamics>
          </direction-type>
        <sound dynamics="124.44" />
        </direction>
      <note default-x="13.32" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="39.39" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="65.45" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="92" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="118.06" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="135.44" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="152.82" default-y="-5">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="170.2" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      </measure>
    <measure number="77" width="128.53">
      <note default-x="12" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-5" />
        <stem>down</stem>
        <notations>
          <slur type="start" bezier-x="6.792503" bezier-y="17.188647" number="1" />
          </notations>
        </note>
      <note default-x="61.57" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-18.090364" bezier-y="3.785024" />
          </notations>
        </note>
      <note default-x="61.57" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="100.67" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        </note>
      <note default-x="100.67" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="78" width="174.11">
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-76.06" number="1" />
          </direction-type>
        </direction>
      <note default-x="12" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="27.445587" bezier-y="20.3341" number="1" />
          </notations>
        </note>
      <note default-x="12" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        </note>
      <note default-x="38.07" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="38.07" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        </note>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">traits parallèles descendants</words></direction-type><staff>2</staff></direction><note default-x="64.13" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="64.13" default-y="20">
        <chord />
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        </note>
      <note default-x="90.2" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="90.2" default-y="15">
        <chord />
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        </note>
      <note default-x="116.27" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="132.77" default-y="-25" />
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="116.27" default-y="10">
        <chord />
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="132.77" default-y="15" />
        <stem>down</stem>
        </note>
      <note default-x="149.31" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-26.361954" bezier-y="21.841536" />
          </notations>
        </note>
      <note default-x="149.31" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        </direction>
      </measure>
    <measure number="79" width="144.14">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-40.66" relative-y="-40">
            <mp />
            </dynamics>
          </direction-type>
        <sound dynamics="71.11" />
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-76.06" number="1" />
          </direction-type>
        </direction>
      <note default-x="12" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-25" />
        <stem>down</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="12" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="5" />
        <stem>down</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        </direction>
      </measure>
    <measure number="80" width="175.03">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40.66" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="12" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="12" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="39.06" default-y="-20">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <note default-x="65.13" default-y="-20">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-45.84" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <sound dynamics="36.67" />
        </direction>
      <direction placement="above">
        <direction-type>
          <words relative-y="40">pizz</words>
          </direction-type>
        <sound pizzicato="yes" />
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">Sol majeur final, pizz</words></direction-type><staff>2</staff></direction><note default-x="97.39" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <arpeggiate direction="up" number="1" default-x="-20.22" default-y="10.3" />
          </notations>
        </note>
      <note default-x="97.39" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <arpeggiate direction="up" number="1" default-x="-20.22" default-y="10.3" />
          </notations>
        </note>
      <note default-x="97.39" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <arpeggiate direction="up" number="1" default-x="-20.22" default-y="10.3" />
          </notations>
        </note>
      <note default-x="97.39" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <arpeggiate direction="up" number="1" default-x="-20.22" default-y="10.3" />
          </notations>
        </note>
      <note default-x="136.49" default-y="-20">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        </barline>
      </measure>
    </part>
  <part id="P2">
    <measure number="1" width="153.11">
      <print>
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <divisions>12</divisions>
        <key>
          <fifths>1</fifths>
          </key>
        <time>
          <beats>6</beats>
          <beat-type>8</beat-type>
          </time>
        <clef>
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="99.65" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="2" width="165.4">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="12" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-150" />
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="3" width="140.42">
      <note default-x="12" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-150" />
        <stem>up</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="4" width="217.63">
      <note default-x="12" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-150" />
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="33.313247" bezier-y="-22.662877" number="1" />
          </notations>
        </note>
      <note default-x="106.72" default-y="-150">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="123.22" default-y="-150" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="5" width="140.42">
      <note default-x="12" default-y="-145">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-140" />
        <stem>up</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-32.237285" bezier-y="-24.168902" />
          </notations>
        </note>
      </measure>
    <measure number="6" width="173.16">
      <note default-x="18.06" default-y="-155">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="34.56" default-y="-150" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="18.574496" bezier-y="-14.567121" number="1" />
          </notations>
        </note>
      <note default-x="93.86" default-y="-155">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="110.36" default-y="-150" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-18.122689" bezier-y="-14.437977" />
          </notations>
        </note>
      </measure>
    <measure number="7" width="196.57">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="79.52" default-y="-160">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="96.03" default-y="-160" />
        <stem>up</stem>
        </note>
      </measure>
    <measure number="8" width="185.79">
      <note default-x="12" default-y="-155">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-150" />
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="27.397536" bezier-y="-22.387086" number="1" />
          </notations>
        </note>
      </measure>
    <measure number="9" width="120.91">
      <note default-x="12" default-y="-160">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-28.562001" bezier-y="-20.881061" />
          </notations>
        </note>
      <note default-x="66.03" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        <repeat direction="backward" />
        </barline>
      </measure>
    <measure number="10" width="61.83">
      <note default-x="12" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="11" width="154.72">
      <note default-x="12" default-y="-145">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-140" />
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="29.640316" bezier-y="-23.191905" number="1" />
          </notations>
        </note>
      <note default-x="82.46" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="98.96" default-y="-150" />
        <stem>up</stem>
        </note>
      </measure>
    <measure number="12" width="134.55">
      <note default-x="12" default-y="-145">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-140" />
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="57.66" default-y="-145">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notations>
          <tied type="stop" />
          <slur type="stop" number="1" bezier-x="-30.716892" bezier-y="-21.745927" />
          </notations>
        </note>
      <note default-x="84.72" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="13" width="204.89">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <sound dynamics="36.67" />
        </direction>
      <note default-x="12" default-y="-145">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-140" />
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="26.797735" bezier-y="-22.218532" number="1" />
          </notations>
        </note>
      <note default-x="100.05" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="116.55" default-y="-150" />
        <stem>up</stem>
        </note>
      </measure>
    <measure number="14" width="216.42">
      <print new-page="yes" page-number="2">
        <staff-layout number="1">
          <staff-distance>122.71</staff-distance>
          </staff-layout>
        </print>
      <note default-x="79.52" default-y="-202.71">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="96.03" default-y="-197.71" />
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="139.54" default-y="-202.71">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notations>
          <tied type="stop" />
          <slur type="stop" number="1" bezier-x="-21.248692" bezier-y="-13.19775" />
          </notations>
        </note>
      <note default-x="166.6" default-y="-182.71">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="15" width="161.82">
      <note default-x="12" default-y="-217.71">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="11.65616" bezier-y="-10.818031" number="1" />
          </notations>
        </note>
      <note default-x="58.44" default-y="-217.71">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-11.65616" bezier-y="-10.818031" />
          </notations>
        </note>
      <note default-x="88" default-y="-222.71">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="104.5" default-y="-217.71" />
        <stem>up</stem>
        </note>
      </measure>
    <measure number="16" width="161.82">
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-86.95" spread="12" number="1" />
          </direction-type>
        </direction>
      <note default-x="12" default-y="-217.71">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="11.65616" bezier-y="-10.818031" number="1" />
          </notations>
        </note>
      <note default-x="58.44" default-y="-217.71">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-11.65616" bezier-y="-10.818031" />
          </notations>
        </note>
      <note default-x="88" default-y="-222.71">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="104.5" default-y="-217.71" />
        <stem>up</stem>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        </direction>
      </measure>
    <measure number="17" width="165.32">
      <note default-x="16.42" default-y="-222.71">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="32.92" default-y="-217.71" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="17.143574" bezier-y="-14.711164" number="1" />
          </notations>
        </note>
      <note default-x="88.44" default-y="-227.71">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-19.01192" bezier-y="-12.201122" />
          </notations>
        </note>
      <note default-x="115.5" default-y="-182.71">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="18" width="170.17">
      <direction placement="above">
        <direction-type>
          <words relative-y="40" font-style="italic" font-size="12">rit.</words>
          </direction-type>
        </direction>
      <note default-x="13.32" default-y="-227.71">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="29.82" default-y="-227.71" />
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="93.3" default-y="-227.71">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="120.36" default-y="-182.71">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="19" width="183.7">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.62" default-y="-50.6" relative-y="-40">
            <ff />
            </dynamics>
          </direction-type>
        <sound dynamics="124.44" />
        </direction>
      <note default-x="13.32" default-y="-212.71">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="29.82" default-y="-207.71" />
        <stem>up</stem>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-59.32" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="20" width="200.43">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>106.16</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-96.08" number="1" />
          </direction-type>
        </direction>
      <note default-x="79.52" default-y="-201.16">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="96.03" default-y="-201.16" />
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="8.29199" bezier-y="-15.837847" number="1" />
          </notations>
        </note>
      <note default-x="127.34" default-y="-211.16">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="143.84" default-y="-211.16" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-13.244785" bezier-y="-12.253948" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        </direction>
      </measure>
    <measure number="21" width="169.27">
      <note default-x="12" default-y="-206.16">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-201.16" />
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="25.910929" bezier-y="-19.268794" number="1" />
          </notations>
        </note>
      <note default-x="87.44" default-y="-201.16">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="112.59" default-y="-206.16">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="129.09" default-y="-201.16" />
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="144.47" default-y="-211.16">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-27.28972" bezier-y="-17.26076" />
          </notations>
        </note>
      </measure>
    <measure number="22" width="156.42">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-51.95" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="12" default-y="-211.16">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-211.16" />
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="74.87" default-y="-211.16">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="101.93" default-y="-166.16">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="23" width="161.38">
      <note default-x="73.29" default-y="-156.16">
        <rest measure="yes" />
        <duration>36</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="24" width="158.92">
      <note default-x="12" default-y="-166.16">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40.84" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <sound dynamics="36.67" />
        </direction>
      <direction placement="above">
        <direction-type>
          <words relative-y="40">pizz</words>
          </direction-type>
        <sound pizzicato="yes" />
        </direction>
      <note default-x="49.72" default-y="-206.16">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        </note>
      <note default-x="79.28" default-y="-206.16">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="129.58" default-y="-166.16">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      </measure>
    <measure number="25" width="212.83">
      <note default-x="99.02" default-y="-156.16">
        <rest measure="yes" />
        <duration>36</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="26" width="221.36">
      <print new-page="yes" page-number="3">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="79.52" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <note default-x="115.07" default-y="-170">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        </note>
      <note default-x="144.63" default-y="-160">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="192.02" default-y="-125">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      </measure>
    <measure number="27" width="171.18">
      <note default-x="78.19" default-y="-115">
        <rest measure="yes" />
        <duration>36</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="28" width="141.99">
      <note default-x="12" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <note default-x="47.54" default-y="-160">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        </note>
      <note default-x="77.1" default-y="-160">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="112.64" default-y="-125">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      </measure>
    <measure number="29" width="213.29">
      <note default-x="99.25" default-y="-115">
        <rest measure="yes" />
        <duration>36</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="30" width="150.85">
      <note default-x="12" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <note default-x="47.54" default-y="-165">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        </note>
      <note default-x="74.6" default-y="-140">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        </note>
      <note default-x="101.66" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="31" width="160.58">
      <note default-x="72.89" default-y="-115">
        <rest measure="yes" />
        <duration>36</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="32" width="244.31">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>102.08</staff-distance>
          </staff-layout>
        </print>
      <note default-x="79.52" default-y="-162.08">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <note default-x="123.97" default-y="-197.08">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        </note>
      <note default-x="123.97" default-y="-187.08">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        </note>
      <note default-x="153.61" default-y="-187.08">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="153.61" default-y="-162.08">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="212.87" default-y="-162.08">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      </measure>
    <measure number="33" width="255.9">
      <note default-x="120.55" default-y="-152.08">
        <rest measure="yes" />
        <duration>36</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="34" width="176.78">
      <note default-x="12" default-y="-162.08">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <note default-x="56.45" default-y="-197.08">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        </note>
      <note default-x="56.45" default-y="-187.08">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        </note>
      <note default-x="86.08" default-y="-187.08">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="86.08" default-y="-162.08">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="145.35" default-y="-162.08">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      </measure>
    <measure number="35" width="192.61">
      <direction placement="above">
        <direction-type>
          <words relative-y="40">arco</words>
          </direction-type>
        <sound pizzicato="no" />
        </direction>
      <note default-x="14.96" default-y="-167.08">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31.46" default-y="-167.08" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="36" width="189.65">
      <note default-x="12" default-y="-162.08">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="28.5" default-y="-157.08" />
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="15.872129" bezier-y="14.475181" number="1" />
          </notations>
        </note>
      <note default-x="49.56" default-y="-157.08">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="69.32" default-y="-167.08">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-10.090733" bezier-y="19.14953" />
          </notations>
        </note>
      <note default-x="98.95" default-y="-167.08">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="14.876002" bezier-y="-12.221192" number="1" />
          </notations>
        </note>
      <note default-x="128.59" default-y="-162.08">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="158.22" default-y="-167.08">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-14.876002" bezier-y="-12.221192" />
          </notations>
        </note>
      </measure>
    <measure number="37" width="233.82">
      <print new-page="yes" page-number="4">
        <staff-layout number="1">
          <staff-distance>70.41</staff-distance>
          </staff-layout>
        </print>
      <direction placement="above">
        <direction-type>
          <words relative-y="40" font-style="italic" font-size="12">rit.</words>
          </direction-type>
        </direction>
      <note default-x="82.49" default-y="-140.41">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="14.661713" bezier-y="-10.83081" number="1" />
          </notations>
        </note>
      <note default-x="107.41" default-y="-145.41">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="132.33" default-y="-135.41">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-10.360883" bezier-y="-14.997479" />
          </notations>
        </note>
      <note default-x="157.25" default-y="-140.41">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="12.511298" bezier-y="-11.207833" number="1" />
          </notations>
        </note>
      <note default-x="182.18" default-y="-135.41">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="207.1" default-y="-140.41">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-12.511298" bezier-y="-11.207833" />
          </notations>
        </note>
      </measure>
    <measure number="38" width="168.2">
      <note default-x="13.32" default-y="-145.41">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="11.698213" bezier-y="-17.112167" number="1" />
          </notations>
        </note>
      <note default-x="41.78" default-y="-150.41">
        <pitch>
          <step>E</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="66.71" default-y="-140.41">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-11.051757" bezier-y="-17.385552" />
          </notations>
        </note>
      <note default-x="91.63" default-y="-145.41">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="14.737763" bezier-y="-8.587769" number="1" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-81" spread="12" number="1" />
          </direction-type>
        </direction>
      <note default-x="116.55" default-y="-145.41">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="141.47" default-y="-135.41">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-10.284833" bezier-y="-13.607852" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        </direction>
      </measure>
    <measure number="39" width="192.82">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.62" default-y="-45.6" relative-y="-40">
            <ff />
            </dynamics>
          </direction-type>
        <sound dynamics="124.44" />
        </direction>
      <note default-x="13.32" default-y="-155.41">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="29.82" default-y="-155.41" />
        <stem>up</stem>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-54.32" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="40" width="123.5">
      <note default-x="12" default-y="-155.41">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-155.41" />
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="10.05899" bezier-y="-14.352358" number="1" />
          </notations>
        </note>
      <note default-x="59.39" default-y="-160.41">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="75.89" default-y="-155.41" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-12.430802" bezier-y="-12.433846" />
          </notations>
        </note>
      </measure>
    <measure number="41" width="168.08">
      <note default-x="12" default-y="-150.41">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-145.41" />
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="15.923714" bezier-y="-17.531558" number="1" />
          </notations>
        </note>
      <note default-x="86.77" default-y="-160.41">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="103.27" default-y="-155.41" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-19.043052" bezier-y="-12.623634" />
          </notations>
        </note>
      </measure>
    <measure number="42" width="172.84">
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-75" number="1" />
          </direction-type>
        </direction>
      <note default-x="12" default-y="-155.41">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-155.41" />
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="59.39" default-y="-155.41">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="86.45" default-y="-130.41">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        </direction>
      <barline location="right">
        <bar-style>light-light</bar-style>
        </barline>
      </measure>
    <measure number="43" width="272.04">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>68.8</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <key>
          <fifths>-2</fifths>
          </key>
        </attributes>
      <note default-x="89" default-y="-128.8">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-40" relative-y="-40">
            <mf />
            </dynamics>
          </direction-type>
        <sound dynamics="88.89" />
        </direction>
      <direction placement="above">
        <direction-type>
          <words relative-y="40">pizz</words>
          </direction-type>
        <sound pizzicato="yes" />
        </direction>
      <note default-x="148.08" default-y="-143.8">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        </note>
      <note default-x="178.62" default-y="-143.8">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="209.16" default-y="-143.8">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="239.7" default-y="-143.8">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="44" width="195.03">
      <note default-x="12" default-y="-128.8">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <note default-x="71.07" default-y="-143.8">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        </note>
      <note default-x="101.61" default-y="-143.8">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="132.15" default-y="-143.8">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="162.69" default-y="-143.8">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="45" width="195.03">
      <note default-x="12" default-y="-128.8">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <note default-x="71.07" default-y="-143.8">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        </note>
      <note default-x="101.61" default-y="-143.8">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="132.15" default-y="-143.8">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="162.69" default-y="-143.8">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="46" width="195.03">
      <note default-x="12" default-y="-128.8">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <note default-x="71.07" default-y="-143.8">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        </note>
      <note default-x="101.61" default-y="-143.8">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="132.15" default-y="-143.8">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="162.69" default-y="-143.8">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="47" width="202.13">
      <note default-x="12" default-y="-128.8">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <note default-x="42.54" default-y="-173.8">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="78.17" default-y="-173.8">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="108.71" default-y="-128.8">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <note default-x="139.25" default-y="-143.8">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="169.79" default-y="-143.8">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="48" width="284.08">
      <print new-page="yes" page-number="5">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="89" default-y="-125">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <note default-x="120.35" default-y="-170">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="156.91" default-y="-170">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="188.26" default-y="-125">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <note default-x="219.6" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="250.94" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="49" width="201.85">
      <note default-x="12" default-y="-125">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <note default-x="43.34" default-y="-145">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="74.68" default-y="-145">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="106.03" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="137.37" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="168.71" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="50" width="170.51">
      <note default-x="12" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="59.01" default-y="-125">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="51" width="201.4">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="12" default-y="-160">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="74.23" default-y="-125">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="52" width="201.4">
      <note default-x="12" default-y="-160">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="74.23" default-y="-125">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="53" width="271.83">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="89" default-y="-160">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="150.57" default-y="-125">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="54" width="195.8">
      <note default-x="12" default-y="-160">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="73.56" default-y="-125">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="55" width="200.56">
      <note default-x="12" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-44.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="12" default-y="-120">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="79.3" default-y="-125">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <note default-x="109.17" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-54.32" />
            </articulations>
          </notations>
        </note>
      <note default-x="109.17" default-y="-120">
        <chord />
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="168.9" default-y="-125">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      </measure>
    <measure number="56" width="198.06">
      <note default-x="12" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-54.32" />
            </articulations>
          </notations>
        </note>
      <note default-x="12" default-y="-125">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="76.8" default-y="-125">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <note default-x="106.67" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-44.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="166.4" default-y="-125">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      </measure>
    <measure number="57" width="192.99">
      <note default-x="12" default-y="-145">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-49.32" />
            </articulations>
          </notations>
        </note>
      <note default-x="12" default-y="-130">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="71.73" default-y="-125">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <note default-x="101.6" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-54.32" />
            </articulations>
          </notations>
        </note>
      <note default-x="161.33" default-y="-125">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      </measure>
    <measure number="58" width="213.66">
      <print new-page="yes" page-number="6">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="89" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="105.51" default-y="-150" />
        <stem>up</stem>
        </note>
      <note default-x="139.48" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-54.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="166.54" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <barline location="right">
        <bar-style>light-light</bar-style>
        </barline>
      </measure>
    <measure number="59" width="87.15">
      <attributes>
        <key>
          <fifths>1</fifths>
          </key>
        </attributes>
      <note default-x="32.26" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="60" width="169.59">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <sound dynamics="54.44" />
        </direction>
      <direction placement="above">
        <direction-type>
          <words relative-y="40">arco</words>
          </direction-type>
        <sound pizzicato="no" />
        </direction>
      <note default-x="12" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-150" />
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="61" width="159.8">
      <note default-x="12" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-150" />
        <stem>up</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="62" width="269.26">
      <note default-x="12" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-150" />
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="20.872191" bezier-y="-17.902057" number="1" />
          </notations>
        </note>
      <note default-x="120.44" default-y="-150">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="136.94" default-y="-150" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-19.968576" bezier-y="-17.886812" />
          </notations>
        </note>
      </measure>
    <measure number="63" width="159.8">
      <note default-x="12" default-y="-145">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-140" />
        <stem>up</stem>
        </note>
      </measure>
    <measure number="64" width="236.66">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="82.49" default-y="-145">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="98.99" default-y="-140" />
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="17.036298" bezier-y="-16.441349" number="1" />
          </notations>
        </note>
      <note default-x="157.83" default-y="-150">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="174.33" default-y="-150" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-18.141072" bezier-y="-13.870892" />
          </notations>
        </note>
      </measure>
    <measure number="65" width="150.07">
      <note default-x="12" default-y="-145">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-140" />
        <stem>up</stem>
        </note>
      </measure>
    <measure number="66" width="204.74">
      <note default-x="12" default-y="-145">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-140" />
        <stem>up</stem>
        </note>
      <note default-x="89.03" default-y="-145">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="105.53" default-y="-140" />
        <accidental>flat</accidental>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="67" width="158.27">
      <note default-x="12" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-150" />
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="76.19" default-y="-150">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="103.25" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="68" width="169.87">
      <note default-x="12" default-y="-110">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-110" />
        <stem>down</stem>
        <notations>
          <slur type="start" bezier-x="20.562972" bezier-y="13.834961" number="1" />
          </notations>
        </note>
      <note default-x="92.73" default-y="-115">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="109.23" default-y="-110" />
        <stem>down</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-19.962304" bezier-y="14.688375" />
          </notations>
        </note>
      </measure>
    <measure number="69" width="139.65">
      <note default-x="12" default-y="-110">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-110" />
        <stem>down</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="60.82" default-y="-110">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="86.5" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="70" width="317.72">
      <print new-page="yes" page-number="7">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <sound dynamics="36.67" />
        </direction>
      <note default-x="79.52" default-y="-110">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="96.03" default-y="-110" />
        <stem>down</stem>
        <notations>
          <slur type="start" bezier-x="23.655198" bezier-y="16.796587" number="1" />
          </notations>
        </note>
      <note default-x="196.08" default-y="-115">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="212.58" default-y="-110" />
        <stem>down</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-23.155283" bezier-y="17.479318" />
          </notations>
        </note>
      </measure>
    <measure number="71" width="173.59">
      <note default-x="12" default-y="-110">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-110" />
        <stem>down</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="84.63" default-y="-110">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="113.68" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="72" width="192.3">
      <note default-x="14.96" default-y="-115">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="31.46" default-y="-110" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <notations>
          <slur type="start" bezier-x="23.582838" bezier-y="12.808242" number="1" />
          </notations>
        </note>
      <note default-x="103.34" default-y="-120">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="119.85" default-y="-120" />
        <stem>down</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-20.785901" bezier-y="16.974911" />
          </notations>
        </note>
      </measure>
    <measure number="73" width="186.21">
      <note default-x="12" default-y="-110">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <notations>
          <slur type="start" bezier-x="16.557175" bezier-y="8.838232" number="1" />
          </notations>
        </note>
      <note default-x="68.2" default-y="-125">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-11.654158" bezier-y="14.71173" />
          </notations>
        </note>
      <note default-x="97.25" default-y="-130">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="113.75" default-y="-130" />
        <stem>up</stem>
        </note>
      </measure>
    <measure number="74" width="189.43">
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-75" spread="12" number="1" />
          </direction-type>
        </direction>
      <note default-x="13.32" default-y="-130">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="29.82" default-y="-130" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="20.468552" bezier-y="-16.870383" number="1" />
          </notations>
        </note>
      <note default-x="100.48" default-y="-135">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-23.284911" bezier-y="-12.703713" />
          </notations>
        </note>
      <note default-x="129.53" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        </direction>
      </measure>
    <measure number="75" width="242.44">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>111.16</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <words default-y="-40" relative-y="-35" font-style="italic" font-size="13">rit</words>
          <words font-size="10">.</words>
          </direction-type>
        </direction>
      <note default-x="80.85" default-y="-181.16">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="97.35" default-y="-176.16" />
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="20.230112" bezier-y="-14.251797" number="1" />
          </notations>
        </note>
      <note default-x="161.44" default-y="-181.16">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-20.230112" bezier-y="-14.251797" />
          </notations>
        </note>
      <note default-x="188.5" default-y="-171.16">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="76" width="195">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.62" default-y="-40" relative-y="-40">
            <ff />
            </dynamics>
          </direction-type>
        <sound dynamics="124.44" />
        </direction>
      <note default-x="13.32" default-y="-166.16">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="29.82" default-y="-166.16" />
        <stem>down</stem>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="77" width="128.53">
      <note default-x="12" default-y="-171.16">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-166.16" />
        <stem>down</stem>
        </note>
      <note default-x="61.57" default-y="-181.16">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="78.07" default-y="-176.16" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="78" width="174.11">
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-75.4" number="1" />
          </direction-type>
        </direction>
      <note default-x="12" default-y="-176.16">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-176.16" />
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="26.449403" bezier-y="-20.251987" number="1" />
          </notations>
        </note>
      <note default-x="90.2" default-y="-171.16">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="116.27" default-y="-176.16">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="132.77" default-y="-176.16" />
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="149.31" default-y="-181.16">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-28.696221" bezier-y="-16.918652" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        </direction>
      </measure>
    <measure number="79" width="144.14">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-40" relative-y="-40">
            <mp />
            </dynamics>
          </direction-type>
        <sound dynamics="71.11" />
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-75.4" number="1" />
          </direction-type>
        </direction>
      <note default-x="12" default-y="-181.16">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-176.16" />
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        </direction>
      </measure>
    <measure number="80" width="175.03">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="12" default-y="-181.16">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="39.06" default-y="-171.16">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <note default-x="65.13" default-y="-171.16">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-45.84" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <sound dynamics="36.67" />
        </direction>
      <direction placement="above">
        <direction-type>
          <words relative-y="40">pizz</words>
          </direction-type>
        <sound pizzicato="yes" />
        </direction>
      <note default-x="97.39" default-y="-216.16">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <arpeggiate direction="up" number="1" default-x="-20.22" default-y="10.3" />
          </notations>
        </note>
      <note default-x="97.39" default-y="-196.16">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <arpeggiate direction="up" number="1" default-x="-20.22" default-y="10.3" />
          </notations>
        </note>
      <note default-x="97.39" default-y="-171.16">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <arpeggiate direction="up" number="1" default-x="-20.22" default-y="10.3" />
          </notations>
        </note>
      <note default-x="97.39" default-y="-146.16">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <arpeggiate direction="up" number="1" default-x="-20.22" default-y="10.3" />
          </notations>
        </note>
      <note default-x="136.49" default-y="-171.16">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        </barline>
      </measure>
    </part>
  <part id="P3">
    <measure number="1" width="153.11">
      <print>
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <divisions>12</divisions>
        <key>
          <fifths>1</fifths>
          </key>
        <time>
          <beats>6</beats>
          <beat-type>8</beat-type>
          </time>
        <clef>
          <sign>C</sign>
          <line>3</line>
          </clef>
        </attributes>
      <note default-x="99.65" default-y="-230">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="2" width="165.4">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="12" default-y="-235">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-235" />
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="3" width="140.42">
      <note default-x="12" default-y="-235">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-235" />
        <stem>up</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="4" width="217.63">
      <note default-x="12" default-y="-235">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-235" />
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="5" width="140.42">
      <note default-x="12" default-y="-235">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-235" />
        <stem>up</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="6" width="173.16">
      <note default-x="18.06" default-y="-240">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="34.56" default-y="-235" />
        <stem>up</stem>
        </note>
      </measure>
    <measure number="7" width="196.57">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="79.52" default-y="-245">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="96.03" default-y="-245" />
        <stem>up</stem>
        </note>
      </measure>
    <measure number="8" width="185.79">
      <note default-x="12" default-y="-240">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-235" />
        <stem>up</stem>
        </note>
      </measure>
    <measure number="9" width="120.91">
      <note default-x="12" default-y="-235">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="66.03" default-y="-230">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        <repeat direction="backward" />
        </barline>
      </measure>
    <measure number="10" width="61.83">
      <note default-x="12" default-y="-230">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="11" width="154.72">
      <note default-x="12" default-y="-250">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-245" />
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="30.20096" bezier-y="-22.44211" number="1" />
          </notations>
        </note>
      <note default-x="82.46" default-y="-240">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="98.96" default-y="-235" />
        <stem>up</stem>
        </note>
      </measure>
    <measure number="12" width="134.55">
      <note default-x="12" default-y="-245">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-245" />
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="57.66" default-y="-245">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notations>
          <tied type="stop" />
          <slur type="stop" number="1" bezier-x="-30.156247" bezier-y="-22.502157" />
          </notations>
        </note>
      <note default-x="84.72" default-y="-230">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="13" width="204.89">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <sound dynamics="36.67" />
        </direction>
      <note default-x="12" default-y="-250">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-245" />
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="28.211459" bezier-y="-20.405542" number="1" />
          </notations>
        </note>
      <note default-x="100.05" default-y="-240">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="116.55" default-y="-235" />
        <stem>up</stem>
        </note>
      </measure>
    <measure number="14" width="216.42">
      <print new-page="yes" page-number="2">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="79.52" default-y="-302.71">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="96.03" default-y="-302.71" />
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="139.54" default-y="-302.71">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notations>
          <tied type="stop" />
          <slur type="stop" number="1" bezier-x="-21.248692" bezier-y="-13.19775" />
          </notations>
        </note>
      <note default-x="166.6" default-y="-287.71">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="15" width="161.82">
      <note default-x="12" default-y="-312.71">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-312.71" />
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="18.166673" bezier-y="-15.079452" number="1" />
          </notations>
        </note>
      <note default-x="88" default-y="-317.71">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="104.5" default-y="-312.71" />
        <stem>up</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-19.98569" bezier-y="-12.56941" />
          </notations>
        </note>
      </measure>
    <measure number="16" width="161.82">
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-81.79" spread="12" number="1" />
          </direction-type>
        </direction>
      <note default-x="12" default-y="-312.71">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-312.71" />
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="18.166673" bezier-y="-15.079452" number="1" />
          </notations>
        </note>
      <note default-x="88" default-y="-317.71">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="104.5" default-y="-312.71" />
        <stem>up</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-19.98569" bezier-y="-12.56941" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        </direction>
      </measure>
    <measure number="17" width="165.32">
      <note default-x="16.42" default-y="-317.71">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="32.92" default-y="-312.71" />
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="20.854008" bezier-y="-9.565005" number="1" />
          </notations>
        </note>
      <note default-x="88.44" default-y="-302.71">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="104.94" default-y="-302.71" />
        <stem>up</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-15.301487" bezier-y="-17.09513" />
          </notations>
        </note>
      </measure>
    <measure number="18" width="170.17">
      <note default-x="13.32" default-y="-302.71">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="29.82" default-y="-302.71" />
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="93.3" default-y="-302.71">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="120.36" default-y="-287.71">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="19" width="183.7">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.62" default-y="-40" relative-y="-40">
            <ff />
            </dynamics>
          </direction-type>
        <sound dynamics="124.44" />
        </direction>
      <note default-x="13.32" default-y="-302.71">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="29.82" default-y="-302.71" />
        <stem>up</stem>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-44.55" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="20" width="200.43">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>75.78</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-75" number="1" />
          </direction-type>
        </direction>
      <note default-x="79.52" default-y="-286.94">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="96.03" default-y="-286.94" />
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="8.661923" bezier-y="-14.636666" number="1" />
          </notations>
        </note>
      <note default-x="127.34" default-y="-296.94">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="143.84" default-y="-296.94" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-12.874852" bezier-y="-9.944334" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        </direction>
      </measure>
    <measure number="21" width="169.27">
      <note default-x="12" default-y="-291.94">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-286.94" />
        <stem>up</stem>
        </note>
      <note default-x="87.44" default-y="-301.94">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="103.94" default-y="-296.94" />
        <stem>up</stem>
        </note>
      </measure>
    <measure number="22" width="156.42">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <sound dynamics="54.44" />
        </direction>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="12" default-y="-286.94">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="10.577927" bezier-y="14.524389" number="1" />
          </notations>
        </note>
      <note default-x="49.72" default-y="-276.94">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        </note>
      <note default-x="74.87" default-y="-261.94">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-15.962447" bezier-y="8.249284" />
          </notations>
        </note>
      <note default-x="127.08" default-y="-281.94">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      </measure>
    <measure number="23" width="161.38">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <sound dynamics="36.67" />
        </direction>
      <direction placement="above">
        <direction-type>
          <words relative-y="40">pizz</words>
          </direction-type>
        <sound pizzicato="yes" />
        </direction>
      <note default-x="12" default-y="-276.94">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="60.64" default-y="-281.94">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="24" width="158.92">
      <note default-x="12" default-y="-276.94">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="49.72" default-y="-281.94">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="25" width="212.83">
      <note default-x="12" default-y="-276.94">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="70.68" default-y="-281.94">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="26" width="221.36">
      <print new-page="yes" page-number="3">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="79.52" default-y="-225">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="115.07" default-y="-230">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="27" width="171.18">
      <note default-x="78.19" default-y="-220">
        <rest measure="yes" />
        <duration>36</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="28" width="141.99">
      <note default-x="12" default-y="-225">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="47.54" default-y="-230">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="29" width="213.29">
      <note default-x="99.25" default-y="-220">
        <rest measure="yes" />
        <duration>36</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="30" width="150.85">
      <note default-x="12" default-y="-225">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="47.54" default-y="-230">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="31" width="160.58">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-40" relative-y="-40">
            <mf />
            </dynamics>
          </direction-type>
        <sound dynamics="88.89" />
        </direction>
      <direction placement="above">
        <direction-type>
          <words relative-y="40">arco</words>
          </direction-type>
        <sound pizzicato="no" />
        </direction>
      <note default-x="14.96" default-y="-235">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="31.46" default-y="-235" />
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="17.124496" bezier-y="-15.724289" number="1" />
          </notations>
        </note>
      <note default-x="89.26" default-y="-240">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="105.76" default-y="-235" />
        <stem>up</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-20.172333" bezier-y="-11.55762" />
          </notations>
        </note>
      </measure>
    <measure number="32" width="244.31">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="79.52" default-y="-272.08">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="96.03" default-y="-272.08" />
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="153.61" default-y="-272.08">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="183.24" default-y="-267.08">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="33" width="255.9">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="14.96" default-y="-272.08">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="31.46" default-y="-272.08" />
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="20.555919" bezier-y="-18.190188" number="1" />
          </notations>
        </note>
      <note default-x="123.62" default-y="-277.08">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="140.12" default-y="-272.08" />
        <stem>up</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-23.080353" bezier-y="-14.856853" />
          </notations>
        </note>
      </measure>
    <measure number="34" width="176.78">
      <note default-x="12" default-y="-272.08">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-272.08" />
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="86.08" default-y="-272.08">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="115.72" default-y="-267.08">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="35" width="192.61">
      <note default-x="14.96" default-y="-277.08">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31.46" default-y="-272.08" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="36" width="189.65">
      <note default-x="12" default-y="-272.08">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="28.5" default-y="-272.08" />
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="12.656271" bezier-y="-14.040049" number="1" />
          </notations>
        </note>
      <note default-x="49.56" default-y="-267.08">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="69.32" default-y="-277.08">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-16.11895" bezier-y="-9.87338" />
          </notations>
        </note>
      <note default-x="98.95" default-y="-277.08">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="14.876002" bezier-y="-12.221192" number="1" />
          </notations>
        </note>
      <note default-x="128.59" default-y="-272.08">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="158.22" default-y="-277.08">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-14.876002" bezier-y="-12.221192" />
          </notations>
        </note>
      </measure>
    <measure number="37" width="233.82">
      <print new-page="yes" page-number="4">
        <staff-layout number="1">
          <staff-distance>70.41</staff-distance>
          </staff-layout>
        </print>
      <direction placement="above">
        <direction-type>
          <words relative-y="40" font-style="italic" font-size="12">rit.</words>
          </direction-type>
        </direction>
      <direction placement="below">
        <direction-type>
          <words default-y="-40" relative-y="-35" font-style="italic" font-size="12">rit.</words>
          </direction-type>
        </direction>
      <note default-x="82.49" default-y="-255.83">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="12.457294" bezier-y="-11.244814" number="1" />
          </notations>
        </note>
      <note default-x="107.41" default-y="-260.83">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="132.33" default-y="-250.83">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-11.195267" bezier-y="-12.503573" />
          </notations>
        </note>
      <note default-x="157.25" default-y="-255.83">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="12.511298" bezier-y="-11.207833" number="1" />
          </notations>
        </note>
      <note default-x="182.18" default-y="-250.83">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="207.1" default-y="-255.83">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-12.511298" bezier-y="-11.207833" />
          </notations>
        </note>
      </measure>
    <measure number="38" width="168.2">
      <note default-x="13.32" default-y="-270.83">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="29.82" default-y="-265.83" />
        <stem>up</stem>
        </note>
      </measure>
    <measure number="39" width="192.82">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.62" default-y="-40" relative-y="-40">
            <ff />
            </dynamics>
          </direction-type>
        <sound dynamics="124.44" />
        </direction>
      <note default-x="13.32" default-y="-255.83">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="29.82" default-y="-255.83" />
        <stem>up</stem>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-44.55" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="40" width="123.5">
      <note default-x="12" default-y="-240.83">
        <rest />
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="24.9" default-y="-235.83" />
        </note>
      <note default-x="59.39" default-y="-250.83">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="75.89" default-y="-245.83" />
        <stem>up</stem>
        </note>
      </measure>
    <measure number="41" width="168.08">
      <note default-x="12" default-y="-245.83">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-245.83" />
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="18.766947" bezier-y="-13.726736" number="1" />
          </notations>
        </note>
      <note default-x="86.77" default-y="-245.83">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="103.27" default-y="-245.83" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-18.766947" bezier-y="-13.726736" />
          </notations>
        </note>
      </measure>
    <measure number="42" width="172.84">
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-75" number="1" />
          </direction-type>
        </direction>
      <note default-x="12" default-y="-250.83">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-245.83" />
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="59.39" default-y="-250.83">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="86.45" default-y="-240.83">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        </direction>
      <barline location="right">
        <bar-style>light-light</bar-style>
        </barline>
      </measure>
    <measure number="43" width="272.04">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <key>
          <fifths>-2</fifths>
          </key>
        </attributes>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-40" relative-y="-40">
            <mf />
            </dynamics>
          </direction-type>
        <sound dynamics="88.89" />
        </direction>
      <direction placement="above">
        <direction-type>
          <words relative-y="40">pizz</words>
          </direction-type>
        <sound pizzicato="yes" />
        </direction>
      <note default-x="89" default-y="-228.8">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="148.08" default-y="-233.8">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="44" width="195.03">
      <note default-x="12" default-y="-228.8">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="71.07" default-y="-233.8">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="45" width="195.03">
      <note default-x="12" default-y="-228.8">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="71.07" default-y="-233.8">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="46" width="195.03">
      <note default-x="12" default-y="-228.8">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="71.07" default-y="-233.8">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="47" width="202.13">
      <note default-x="12" default-y="-233.8">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="78.17" default-y="-233.8">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <note default-x="108.71" default-y="-233.8">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="169.79" default-y="-233.8">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      </measure>
    <measure number="48" width="284.08">
      <print new-page="yes" page-number="5">
        <staff-layout number="1">
          <staff-distance>66.8</staff-distance>
          </staff-layout>
        </print>
      <note default-x="89" default-y="-236.8">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="156.91" default-y="-231.8">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <note default-x="188.26" default-y="-236.8">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="250.94" default-y="-231.8">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      </measure>
    <measure number="49" width="201.85">
      <note default-x="12" default-y="-221.8">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="74.68" default-y="-231.8">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <note default-x="106.03" default-y="-226.8">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="168.71" default-y="-231.8">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      </measure>
    <measure number="50" width="170.51">
      <note default-x="12" default-y="-236.8">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="59.01" default-y="-231.8">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="51" width="201.4">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="12" default-y="-211.8">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="12" default-y="-201.8">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="74.23" default-y="-251.8">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        </note>
      <note default-x="105.58" default-y="-236.8">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="136.92" default-y="-216.8">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="168.26" default-y="-231.8">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      </measure>
    <measure number="52" width="201.4">
      <note default-x="12" default-y="-211.8">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="12" default-y="-201.8">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="74.23" default-y="-251.8">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        </note>
      <note default-x="105.58" default-y="-236.8">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="136.92" default-y="-216.8">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="168.26" default-y="-231.8">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      </measure>
    <measure number="53" width="271.83">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="89" default-y="-210">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="89" default-y="-200">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="150.57" default-y="-250">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        </note>
      <note default-x="180.43" default-y="-235">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="210.3" default-y="-215">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="240.17" default-y="-230">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      </measure>
    <measure number="54" width="195.8">
      <note default-x="12" default-y="-210">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="12" default-y="-200">
        <chord />
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="73.56" default-y="-250">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        </note>
      <note default-x="103.43" default-y="-235">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="134.27" default-y="-215">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="164.14" default-y="-230">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      </measure>
    <measure number="55" width="200.56">
      <note default-x="12" default-y="-230">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="12" default-y="-210">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        </note>
      <note default-x="41.87" default-y="-245">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="79.3" default-y="-230">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="109.17" default-y="-225">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="139.03" default-y="-230">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="168.9" default-y="-225">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="56" width="198.06">
      <note default-x="12" default-y="-245">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-44.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="12" default-y="-225">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        </note>
      <note default-x="41.87" default-y="-235">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="76.8" default-y="-225">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="106.67" default-y="-245">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-44.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="106.67" default-y="-225">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        </note>
      <note default-x="136.53" default-y="-245">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="166.4" default-y="-225">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="57" width="192.99">
      <note default-x="12" default-y="-230">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="12" default-y="-210">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        </note>
      <note default-x="41.87" default-y="-245">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="71.73" default-y="-230">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="101.6" default-y="-235">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-44.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="131.46" default-y="-245">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="161.33" default-y="-235">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="58" width="213.66">
      <print new-page="yes" page-number="6">
        <staff-layout number="1">
          <staff-distance>100.88</staff-distance>
          </staff-layout>
        </print>
      <note default-x="89" default-y="-270.88">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="105.51" default-y="-270.88" />
        <stem>down</stem>
        </note>
      <note default-x="89" default-y="-245.88">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="105.51" default-y="-240.88" />
        <stem>down</stem>
        </note>
      <note default-x="139.48" default-y="-270.88">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="139.48" default-y="-245.88">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        </note>
      <note default-x="166.54" default-y="-265.88">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <barline location="right">
        <bar-style>light-light</bar-style>
        </barline>
      </measure>
    <measure number="59" width="87.15">
      <attributes>
        <key>
          <fifths>1</fifths>
          </key>
        </attributes>
      <note default-x="32.26" default-y="-265.88">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="60" width="169.59">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <sound dynamics="54.44" />
        </direction>
      <direction placement="above">
        <direction-type>
          <words relative-y="40">arco
</words>
          <words />
          </direction-type>
        <sound pizzicato="no" />
        </direction>
      <note default-x="12" default-y="-270.88">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-270.88" />
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="61" width="159.8">
      <note default-x="12" default-y="-270.88">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-270.88" />
        <stem>up</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="62" width="269.26">
      <note default-x="12" default-y="-270.88">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-270.88" />
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="63" width="159.8">
      <note default-x="12" default-y="-270.88">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-270.88" />
        <stem>up</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="64" width="236.66">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="82.49" default-y="-230">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="98.99" default-y="-225" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <notations>
          <slur type="start" bezier-x="18.911215" bezier-y="13.779396" number="1" />
          </notations>
        </note>
      <note default-x="157.83" default-y="-230">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="174.33" default-y="-225" />
        <accidental>natural</accidental>
        <stem>down</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-18.911215" bezier-y="13.779396" />
          </notations>
        </note>
      </measure>
    <measure number="65" width="150.07">
      <note default-x="12" default-y="-235">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-235" />
        <stem>up</stem>
        </note>
      <note default-x="76.19" default-y="-235">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="92.69" default-y="-235" />
        <stem>up</stem>
        </note>
      </measure>
    <measure number="66" width="204.74">
      <note default-x="12" default-y="-230">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-225" />
        <stem>down</stem>
        </note>
      <note default-x="89.03" default-y="-230">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="105.53" default-y="-225" />
        <stem>down</stem>
        </note>
      </measure>
    <measure number="67" width="158.27">
      <note default-x="12" default-y="-235">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-235" />
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="76.19" default-y="-235">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-40" relative-y="-40">
            <mf />
            </dynamics>
          </direction-type>
        <sound dynamics="88.89" />
        </direction>
      <note default-x="103.25" default-y="-220">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="128.93" default-y="-210">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="68" width="169.87">
      <note default-x="12" default-y="-205">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="28.5" default-y="-205" />
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="13.817841" bezier-y="11.778516" number="1" />
          </notations>
        </note>
      <note default-x="44.55" default-y="-200">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="67.05" default-y="-205">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-13.817841" bezier-y="11.778516" />
          </notations>
        </note>
      <note default-x="92.73" default-y="-215">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="109.23" default-y="-215" />
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="14.696731" bezier-y="8.567073" number="1" />
          </notations>
        </note>
      <note default-x="125.28" default-y="-220">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="142.39" default-y="-225">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-10.236104" bezier-y="13.587157" />
          </notations>
        </note>
      </measure>
    <measure number="69" width="139.65">
      <note default-x="12" default-y="-220">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-215" />
        <stem>down</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="60.82" default-y="-220">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="86.5" default-y="-220">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <notations>
          <slur type="start" bezier-x="4.380037" bezier-y="9.594396" number="1" />
          </notations>
        </note>
      <note default-x="112.18" default-y="-210">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-8.509556" bezier-y="6.230941" />
          </notations>
        </note>
      </measure>
    <measure number="70" width="317.72">
      <print new-page="yes" page-number="7">
        <staff-layout number="1">
          <staff-distance>69.31</staff-distance>
          </staff-layout>
        </print>
      <note default-x="79.52" default-y="-209.31">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="23.784299" bezier-y="16.346582" number="1" />
          </notations>
        </note>
      <note default-x="108.58" default-y="-204.31">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="131.08" default-y="-209.31">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="153.58" default-y="-204.31">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="176.08" default-y="-209.31">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-23.332492" bezier-y="16.212825" />
          </notations>
        </note>
      <note default-x="196.08" default-y="-214.31">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="26.712942" bezier-y="11.764753" number="1" />
          </notations>
        </note>
      <note default-x="215.45" default-y="-219.31">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="234.82" default-y="-214.31">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="254.19" default-y="-219.31">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="273.56" default-y="-224.31">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="292.92" default-y="-229.31">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-21.902017" bezier-y="19.294878" />
          </notations>
        </note>
      </measure>
    <measure number="71" width="173.59">
      <note default-x="12" default-y="-224.31">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-219.31" />
        <stem>down</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="84.63" default-y="-224.31">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="113.68" default-y="-234.31">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="72" width="192.3">
      <note default-x="14.96" default-y="-219.31">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="31.46" default-y="-219.31" />
        <stem>down</stem>
        <notations>
          <slur type="start" bezier-x="23.071317" bezier-y="13.661909" number="1" />
          </notations>
        </note>
      <note default-x="103.34" default-y="-229.31">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="119.85" default-y="-229.31" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-18.502172" bezier-y="18.691925" />
          </notations>
        </note>
      </measure>
    <measure number="73" width="186.21">
      <note default-x="12" default-y="-224.31">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-219.31" />
        <stem>down</stem>
        <notations>
          <slur type="start" bezier-x="22.821614" bezier-y="12.539508" number="1" />
          </notations>
        </note>
      <note default-x="97.25" default-y="-229.31">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="113.75" default-y="-229.31" />
        <stem>down</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-19.974207" bezier-y="16.706177" />
          </notations>
        </note>
      </measure>
    <measure number="74" width="189.43">
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-75" spread="12" number="1" />
          </direction-type>
        </direction>
      <note default-x="13.32" default-y="-229.31">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="29.82" default-y="-229.31" />
        <stem>down</stem>
        <notations>
          <slur type="start" bezier-x="19.344623" bezier-y="18.477766" number="1" />
          </notations>
        </note>
      <note default-x="100.48" default-y="-214.31">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-24.40884" bezier-y="10.947641" />
          </notations>
        </note>
      <note default-x="129.53" default-y="-234.31">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        </direction>
      </measure>
    <measure number="75" width="242.44">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>111.16</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <words default-y="-40" relative-y="-35" font-style="italic" font-size="12">rit</words>
          <words font-size="10">.</words>
          </direction-type>
        </direction>
      <note default-x="80.85" default-y="-302.33">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="97.35" default-y="-297.33" />
        <stem>down</stem>
        <notations>
          <slur type="start" bezier-x="20.230112" bezier-y="14.251797" number="1" />
          </notations>
        </note>
      <note default-x="161.44" default-y="-302.33">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-20.230112" bezier-y="14.251797" />
          </notations>
        </note>
      <note default-x="188.5" default-y="-322.33">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="76" width="195">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.62" default-y="-40" relative-y="-40">
            <ff />
            </dynamics>
          </direction-type>
        <sound dynamics="124.44" />
        </direction>
      <note default-x="13.32" default-y="-337.33">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="29.82" default-y="-337.33" />
        <stem>up</stem>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-44.55" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="77" width="128.53">
      <note default-x="12" default-y="-327.33">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-327.33" />
        <stem>up</stem>
        </note>
      <note default-x="61.57" default-y="-337.33">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="78.07" default-y="-337.33" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="78" width="174.11">
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-75.4" number="1" />
          </direction-type>
        </direction>
      <note default-x="12" default-y="-332.33">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-327.33" />
        <stem>up</stem>
        </note>
      <note default-x="90.2" default-y="-342.33">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="106.7" default-y="-337.33" />
        <stem>up</stem>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        </direction>
      </measure>
    <measure number="79" width="144.14">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-40" relative-y="-40">
            <mp />
            </dynamics>
          </direction-type>
        <sound dynamics="71.11" />
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-75.4" number="1" />
          </direction-type>
        </direction>
      <note default-x="12" default-y="-337.33">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-337.33" />
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        </direction>
      </measure>
    <measure number="80" width="175.03">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="12" default-y="-337.33">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="39.06" default-y="-322.33">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <note default-x="65.13" default-y="-322.33">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-45.52" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <sound dynamics="36.67" />
        </direction>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-45.52" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <sound dynamics="36.67" />
        </direction>
      <direction placement="above">
        <direction-type>
          <words relative-y="40">pizz</words>
          </direction-type>
        <sound pizzicato="yes" />
        </direction>
      <note default-x="97.39" default-y="-347.33">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <notations>
          <arpeggiate direction="up" number="1" default-x="-18.72" default-y="10.3" />
          </notations>
        </note>
      <note default-x="97.39" default-y="-322.33">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <notations>
          <arpeggiate direction="up" number="1" default-x="-18.72" default-y="10.3" />
          </notations>
        </note>
      <note default-x="97.39" default-y="-297.33">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <notations>
          <arpeggiate direction="up" number="1" default-x="-18.72" default-y="10.3" />
          </notations>
        </note>
      <note default-x="136.49" default-y="-322.33">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        </barline>
      </measure>
    </part>
  <part id="P4">
    <measure number="1" width="153.11">
      <print>
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <divisions>12</divisions>
        <key>
          <fifths>1</fifths>
          </key>
        <time>
          <beats>6</beats>
          <beat-type>8</beat-type>
          </time>
        <clef>
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="99.65" default-y="-335">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="2" width="165.4">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="12" default-y="-335">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-330" />
        <stem>down</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="3" width="140.42">
      <note default-x="12" default-y="-335">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-330" />
        <stem>down</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="4" width="217.63">
      <note default-x="12" default-y="-335">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-330" />
        <stem>down</stem>
        <notations>
          <slur type="start" bezier-x="32.592331" bezier-y="23.674646" number="1" />
          </notations>
        </note>
      <note default-x="106.72" default-y="-335">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="123.22" default-y="-330" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="5" width="140.42">
      <note default-x="12" default-y="-330">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-330" />
        <stem>down</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-32.958201" bezier-y="23.162597" />
          </notations>
        </note>
      </measure>
    <measure number="6" width="173.16">
      <note default-x="18.06" default-y="-330">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="34.56" default-y="-330" />
        <stem>down</stem>
        <notations>
          <slur type="start" bezier-x="19.336237" bezier-y="13.392817" number="1" />
          </notations>
        </note>
      <note default-x="93.86" default-y="-335">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="110.36" default-y="-330" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-18.71637" bezier-y="14.246231" />
          </notations>
        </note>
      </measure>
    <measure number="7" width="196.57">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="79.52" default-y="-330">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="96.03" default-y="-330" />
        <stem>down</stem>
        </note>
      </measure>
    <measure number="8" width="185.79">
      <note default-x="12" default-y="-330">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-330" />
        <stem>down</stem>
        </note>
      <note default-x="84.04" default-y="-330">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="100.54" default-y="-330" />
        <accidental>flat</accidental>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="9" width="120.91">
      <note default-x="12" default-y="-335">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="66.03" default-y="-335">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        <repeat direction="backward" />
        </barline>
      </measure>
    <measure number="10" width="61.83">
      <note default-x="12" default-y="-335">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="11" width="154.72">
      <note default-x="12" default-y="-340">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-340" />
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="12" width="134.55">
      <note default-x="12" default-y="-340">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-340" />
        <stem>up</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="13" width="204.89">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <sound dynamics="36.67" />
        </direction>
      <note default-x="12" default-y="-340">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-340" />
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="14" width="216.42">
      <print new-page="yes" page-number="2">
        <staff-layout number="1">
          <staff-distance>70.42</staff-distance>
          </staff-layout>
        </print>
      <note default-x="79.52" default-y="-403.13">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="96.03" default-y="-403.13" />
        <stem>up</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="15" width="161.82">
      <note default-x="12" default-y="-408.13">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-403.13" />
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="18.766653" bezier-y="-14.264342" number="1" />
          </notations>
        </note>
      <note default-x="88" default-y="-413.13">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="104.5" default-y="-413.13" />
        <stem>up</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-19.38571" bezier-y="-13.410928" />
          </notations>
        </note>
      </measure>
    <measure number="16" width="161.82">
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-76.79" spread="12" number="1" />
          </direction-type>
        </direction>
      <note default-x="12" default-y="-418.13">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-413.13" />
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="18.166673" bezier-y="-15.079452" number="1" />
          </notations>
        </note>
      <note default-x="88" default-y="-423.13">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="104.5" default-y="-423.13" />
        <stem>up</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-19.98569" bezier-y="-12.56941" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        </direction>
      </measure>
    <measure number="17" width="165.32">
      <note default-x="16.42" default-y="-423.13">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="32.92" default-y="-423.13" />
        <accidental>natural</accidental>
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="17.143574" bezier-y="-14.711164" number="1" />
          </notations>
        </note>
      <note default-x="88.44" default-y="-428.13">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-19.01192" bezier-y="-12.201122" />
          </notations>
        </note>
      <note default-x="115.5" default-y="-398.13">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="18" width="170.17">
      <direction placement="above">
        <direction-type>
          <words relative-y="40" font-style="italic" font-size="12">rit.</words>
          </direction-type>
        </direction>
      <note default-x="13.32" default-y="-418.13">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="29.82" default-y="-413.13" />
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="93.3" default-y="-418.13">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="120.36" default-y="-398.13">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="19" width="183.7">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.62" default-y="-40" relative-y="-40">
            <ff />
            </dynamics>
          </direction-type>
        <sound dynamics="124.44" />
        </direction>
      <note default-x="13.32" default-y="-403.13">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="29.82" default-y="-403.13" />
        <stem>up</stem>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-44.55" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="20" width="200.43">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>66.18</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-75" number="1" />
          </direction-type>
        </direction>
      <note default-x="79.52" default-y="-388.12">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="96.03" default-y="-383.12" />
        <stem>down</stem>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        </direction>
      </measure>
    <measure number="21" width="169.27">
      <note default-x="12" default-y="-393.12">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-393.12" />
        <stem>up</stem>
        </note>
      </measure>
    <measure number="22" width="156.42">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <sound dynamics="54.44" />
        </direction>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="12" default-y="-373.12">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-373.12" />
        <stem>down</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="74.87" default-y="-373.12">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="101.93" default-y="-378.12">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="127.08" default-y="-373.12">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="23" width="161.38">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <sound dynamics="36.67" />
        </direction>
      <note default-x="12" default-y="-368.12">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="28.5" default-y="-363.12" />
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="11.758053" bezier-y="11.81386" number="1" />
          </notations>
        </note>
      <note default-x="43.88" default-y="-363.12">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="60.64" default-y="-368.12">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-11.306245" bezier-y="11.696695" />
          </notations>
        </note>
      <note default-x="85.79" default-y="-378.12">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="102.29" default-y="-373.12" />
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="14.462553" bezier-y="8.447968" number="1" />
          </notations>
        </note>
      <note default-x="117.67" default-y="-383.12">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="134.44" default-y="-388.12">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-9.957167" bezier-y="13.468051" />
          </notations>
        </note>
      </measure>
    <measure number="24" width="158.92">
      <note default-x="12" default-y="-378.12">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-373.12" />
        <stem>down</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="79.28" default-y="-378.12">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="104.43" default-y="-378.12">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <notations>
          <slur type="start" bezier-x="5.774617" bezier-y="8.378491" number="1" />
          </notations>
        </note>
      <note default-x="129.58" default-y="-373.12">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-6.84971" bezier-y="7.525077" />
          </notations>
        </note>
      </measure>
    <measure number="25" width="212.83">
      <note default-x="12" default-y="-368.12">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="18.484683" bezier-y="14.534428" number="1" />
          </notations>
        </note>
      <note default-x="37.15" default-y="-363.12">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="53.91" default-y="-368.12">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="70.68" default-y="-363.12">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="87.44" default-y="-368.12">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-18.032876" bezier-y="14.405384" />
          </notations>
        </note>
      <note default-x="104.21" default-y="-373.12">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" bezier-x="23.059441" bezier-y="11.527775" number="1" />
          </notations>
        </note>
      <note default-x="120.97" default-y="-378.12">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="137.74" default-y="-373.12">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="154.5" default-y="-378.12">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="171.27" default-y="-383.12">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="188.03" default-y="-388.12">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-19.021649" bezier-y="17.401273" />
          </notations>
        </note>
      </measure>
    <measure number="26" width="221.36">
      <print new-page="yes" page-number="3">
        <staff-layout number="1">
          <staff-distance>102.08</staff-distance>
          </staff-layout>
        </print>
      <note default-x="79.52" default-y="-362.08">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="96.03" default-y="-357.08" />
        <stem>down</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="144.63" default-y="-362.08">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="168.32" default-y="-347.08">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <notations>
          <slur type="start" bezier-x="2.816991" bezier-y="9.927144" number="1" />
          </notations>
        </note>
      <note default-x="192.02" default-y="-337.08">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-9.077686" bezier-y="4.907061" />
          </notations>
        </note>
      </measure>
    <measure number="27" width="171.18">
      <note default-x="12" default-y="-332.08">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="28.5" default-y="-327.08" />
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="13.187227" bezier-y="11.506605" number="1" />
          </notations>
        </note>
      <note default-x="42.04" default-y="-327.08">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="64.54" default-y="-332.08">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-13.187227" bezier-y="11.506605" />
          </notations>
        </note>
      <note default-x="88.23" default-y="-337.08">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="14.42191" bezier-y="12.03322" number="1" />
          </notations>
        </note>
      <note default-x="121.99" default-y="-342.08">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="145.69" default-y="-337.08">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <slur type="stop" number="1" bezier-x="-14.42191" bezier-y="12.03322" />
          </notations>
        </note>
      </measure>
    <measure number="28" width="141.99">
      <note default-x="12" default-y="-347.08">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-347.08" />
        <stem>down</stem>
        <notations>
          <slur type="start" bezier-x="18.471577" bezier-y="18.01324" number="1" />
          </notations>
        </note>
      <note default-x="77.1" default-y="-337.08">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="112.64" default-y="-342.08">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-19.285013" bezier-y="16.575994" />
          </notations>
        </note>
      </measure>
    <measure number="29" width="213.29">
      <note default-x="12" default-y="-347.08">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="43.56" default-y="-342.08">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="67.26" default-y="-337.08">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="90.95" default-y="-332.08">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          </notations>
        </note>
      <note default-x="113.45" default-y="-327.08">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="135.95" default-y="-332.08">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          </notations>
        </note>
      <note default-x="158.46" default-y="-337.08">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="174.96" default-y="-337.08" />
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="188.49" default-y="-342.08">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        </note>
      </measure>
    <measure number="30" width="150.85">
      <note default-x="12" default-y="-337.08">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-337.08" />
        <stem>down</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="74.6" default-y="-337.08">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="101.66" default-y="-372.08">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="31" width="160.58">
      <direction placement="above">
        <direction-type>
          <words relative-y="40">arco</words>
          </direction-type>
        <sound pizzicato="no" />
        </direction>
      <note default-x="14.96" default-y="-377.08">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="31.46" default-y="-377.08" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="15.801683" bezier-y="13.15359" number="1" />
          </notations>
        </note>
      <note default-x="89.26" default-y="-367.08">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="105.76" default-y="-367.08" />
        <stem>down</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-16.474702" bezier-y="12.300175" />
          </notations>
        </note>
      </measure>
    <measure number="32" width="244.31">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="79.52" default-y="-372.08">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="96.03" default-y="-367.08" />
        <stem>down</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="153.61" default-y="-372.08">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="183.24" default-y="-372.08">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="33" width="255.9">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="14.96" default-y="-377.08">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="31.46" default-y="-377.08" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="24.49076" bezier-y="16.193197" number="1" />
          </notations>
        </note>
      <note default-x="123.62" default-y="-367.08">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="140.12" default-y="-367.08" />
        <stem>down</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-25.034137" bezier-y="15.339783" />
          </notations>
        </note>
      </measure>
    <measure number="34" width="176.78">
      <note default-x="12" default-y="-372.08">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-367.08" />
        <stem>down</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="86.08" default-y="-372.08">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="115.72" default-y="-372.08">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="35" width="192.61">
      <note default-x="14.96" default-y="-377.08">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="31.46" default-y="-377.08" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="17.513278" bezier-y="16.377728" number="1" />
          </notations>
        </note>
      <note default-x="101.91" default-y="-357.08">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="118.42" default-y="-357.08" />
        <stem>down</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-21.1175" bezier-y="11.357645" />
          </notations>
        </note>
      </measure>
    <measure number="36" width="189.65">
      <note default-x="12" default-y="-362.08">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <notations>
          <slur type="start" bezier-x="23.235424" bezier-y="12.686271" number="1" />
          </notations>
        </note>
      <note default-x="69.32" default-y="-362.08">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        </note>
      <note default-x="98.95" default-y="-367.08">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="115.45" default-y="-367.08" />
        <stem>down</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-20.415798" bezier-y="16.85294" />
          </notations>
        </note>
      </measure>
    <measure number="37" width="233.82">
      <print new-page="yes" page-number="4">
        <staff-layout number="1">
          <staff-distance>66.79</staff-distance>
          </staff-layout>
        </print>
      <note default-x="82.49" default-y="-347.62">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="98.99" default-y="-342.62" />
        <accidental>sharp</accidental>
        <stem>down</stem>
        </note>
      <note default-x="157.25" default-y="-347.62">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="173.75" default-y="-342.62" />
        <accidental>natural</accidental>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="38" width="168.2">
      <note default-x="13.32" default-y="-347.62">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="29.82" default-y="-342.62" />
        <stem>down</stem>
        </note>
      </measure>
    <measure number="39" width="192.82">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.62" default-y="-40" relative-y="-40">
            <ff />
            </dynamics>
          </direction-type>
        <sound dynamics="124.44" />
        </direction>
      <note default-x="13.32" default-y="-347.62">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="29.82" default-y="-342.62" />
        <stem>down</stem>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="40" width="123.5">
      <note default-x="12" default-y="-337.62">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-332.62" />
        <stem>down</stem>
        <notations>
          <slur type="start" bezier-x="10.357745" bezier-y="12.556168" number="1" />
          </notations>
        </note>
      <note default-x="59.39" default-y="-327.62">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="75.89" default-y="-322.62" />
        <stem>down</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-13.432583" bezier-y="9.192712" />
          </notations>
        </note>
      </measure>
    <measure number="41" width="168.08">
      <note default-x="12" default-y="-332.62">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-332.62" />
        <stem>down</stem>
        </note>
      </measure>
    <measure number="42" width="172.84">
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-75" number="1" />
          </direction-type>
        </direction>
      <note default-x="12" default-y="-337.62">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-332.62" />
        <stem>down</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="59.39" default-y="-337.62">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="86.45" default-y="-347.62">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        </direction>
      <barline location="right">
        <bar-style>light-light</bar-style>
        </barline>
      </measure>
    <measure number="43" width="272.04">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>106.52</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <key>
          <fifths>-2</fifths>
          </key>
        </attributes>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-40" relative-y="-40">
            <mf />
            </dynamics>
          </direction-type>
        <sound dynamics="88.89" />
        </direction>
      <direction placement="above">
        <direction-type>
          <words relative-y="40">pizz</words>
          </direction-type>
        <sound pizzicato="yes" />
        </direction>
      <note default-x="89" default-y="-370.32">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="148.08" default-y="-380.32">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="44" width="195.03">
      <note default-x="12" default-y="-370.32">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="71.07" default-y="-380.32">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="45" width="195.03">
      <note default-x="12" default-y="-370.32">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="71.07" default-y="-380.32">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="46" width="195.03">
      <note default-x="12" default-y="-370.32">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="71.07" default-y="-380.32">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="47" width="202.13">
      <note default-x="12" default-y="-365.32">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="78.17" default-y="-380.32">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <note default-x="108.71" default-y="-370.32">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        </note>
      <note default-x="169.79" default-y="-380.32">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      </measure>
    <measure number="48" width="284.08">
      <print new-page="yes" page-number="5">
        <staff-layout number="1">
          <staff-distance>74.71</staff-distance>
          </staff-layout>
        </print>
      <note default-x="89" default-y="-331.51">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="156.91" default-y="-346.51">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <note default-x="188.26" default-y="-331.51">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="250.94" default-y="-346.51">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      </measure>
    <measure number="49" width="201.85">
      <note default-x="12" default-y="-331.51">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="74.68" default-y="-346.51">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <note default-x="106.03" default-y="-336.51">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        </note>
      <note default-x="168.71" default-y="-346.51">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      </measure>
    <measure number="50" width="170.51">
      <note default-x="12" default-y="-336.51">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="59.01" default-y="-346.51">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-4.18" default-y="-40" relative-y="-40">
            <f />
            </dynamics>
          </direction-type>
        <sound dynamics="106.67" />
        </direction>
      <direction placement="above">
        <direction-type>
          <words relative-y="40">arco</words>
          </direction-type>
        <sound pizzicato="no" />
        </direction>
      <note default-x="106.03" default-y="-321.51">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="137.37" default-y="-316.51">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="51" width="201.4">
      <note default-x="12" default-y="-311.51">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="28.5" default-y="-311.51" />
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="22.700552" bezier-y="16.551392" number="1" />
          </notations>
        </note>
      <note default-x="51.73" default-y="-316.51">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="74.23" default-y="-311.51">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="105.58" default-y="-311.51">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          <slur type="stop" number="1" bezier-x="-24.275165" bezier-y="14.141428" />
          </notations>
        </note>
      <note default-x="136.92" default-y="-301.51">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="34.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="168.26" default-y="-306.51">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="52" width="201.4">
      <note default-x="12" default-y="-311.51">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="28.5" default-y="-311.51" />
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="22.700552" bezier-y="16.551392" number="1" />
          </notations>
        </note>
      <note default-x="51.73" default-y="-316.51">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="74.23" default-y="-311.51">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="105.58" default-y="-311.51">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          <slur type="stop" number="1" bezier-x="-24.275165" bezier-y="14.141428" />
          </notations>
        </note>
      <note default-x="136.92" default-y="-321.51">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="168.26" default-y="-316.51">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="53" width="271.83">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="89" default-y="-300">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="105.51" default-y="-300" />
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="22.152875" bezier-y="16.373971" number="1" />
          </notations>
        </note>
      <note default-x="128.07" default-y="-305">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="150.57" default-y="-300">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="180.43" default-y="-300">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          <slur type="stop" number="1" bezier-x="-23.745806" bezier-y="13.964008" />
          </notations>
        </note>
      <note default-x="210.3" default-y="-290">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="34.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="240.17" default-y="-295">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="54" width="195.8">
      <note default-x="12" default-y="-300">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="28.5" default-y="-300" />
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="22.152875" bezier-y="16.373971" number="1" />
          </notations>
        </note>
      <note default-x="51.06" default-y="-305">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="73.56" default-y="-300">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="103.43" default-y="-300">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          <slur type="stop" number="1" bezier-x="-23.745806" bezier-y="13.964008" />
          </notations>
        </note>
      <note default-x="134.27" default-y="-305">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="164.14" default-y="-310">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="55" width="200.56">
      <note default-x="12" default-y="-305">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="28.5" default-y="-300" />
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="23.616269" bezier-y="16.843735" number="1" />
          </notations>
        </note>
      <note default-x="56.8" default-y="-300">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="79.3" default-y="-305">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="109.17" default-y="-305">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          <slur type="stop" number="1" bezier-x="-25.161593" bezier-y="14.433772" />
          </notations>
        </note>
      <note default-x="139.03" default-y="-310">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="168.9" default-y="-315">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="56" width="198.06">
      <note default-x="12" default-y="-310">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="28.5" default-y="-310" />
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur type="start" bezier-x="22.978648" bezier-y="16.640734" number="1" />
          </notations>
        </note>
      <note default-x="56.8" default-y="-305">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">forward hook</beam>
        </note>
      <note default-x="76.8" default-y="-310">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="106.67" default-y="-310">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          <slur type="stop" number="1" bezier-x="-24.544194" bezier-y="14.230771" />
          </notations>
        </note>
      <note default-x="136.53" default-y="-315">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="166.4" default-y="-320">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="57" width="192.99">
      <note default-x="12" default-y="-315">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="41.87" default-y="-305">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="71.73" default-y="-310">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="101.6" default-y="-310">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="131.46" default-y="-315">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="161.33" default-y="-310">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="58" width="213.66">
      <print new-page="yes" page-number="6">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="89" default-y="-355.88">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="105.51" default-y="-355.88" />
        <stem>down</stem>
        </note>
      <note default-x="139.48" default-y="-355.88">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="166.54" default-y="-370.88">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <barline location="right">
        <bar-style>light-light</bar-style>
        </barline>
      </measure>
    <measure number="59" width="87.15">
      <attributes>
        <key>
          <fifths>1</fifths>
          </key>
        </attributes>
      <note default-x="32.26" default-y="-370.88">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="60" width="169.59">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="12" default-y="-390.88">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="19.036024" bezier-y="22.58612" number="1" />
          </notations>
        </note>
      <note default-x="63.35" default-y="-370.88">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        </note>
      <note default-x="89.89" default-y="-345.88">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="141.24" default-y="-370.88">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-20.974011" bezier-y="26.208219" />
          </notations>
        </note>
      </measure>
    <measure number="61" width="159.8">
      <note default-x="12" default-y="-390.88">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="19.792938" bezier-y="22.807272" number="1" />
          </notations>
        </note>
      <note default-x="51.82" default-y="-370.88">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        </note>
      <note default-x="78.36" default-y="-345.88">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="131.45" default-y="-370.88">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-24.164252" bezier-y="22.392326" />
          </notations>
        </note>
      </measure>
    <measure number="62" width="269.26">
      <note default-x="12" default-y="-390.88">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="27.357078" bezier-y="24.570302" number="1" />
          </notations>
        </note>
      <note default-x="73.94" default-y="-370.88">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        </note>
      <note default-x="120.44" default-y="-345.88">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="213.45" default-y="-370.88">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-30.309026" bezier-y="25.280614" />
          </notations>
        </note>
      </measure>
    <measure number="63" width="159.8">
      <note default-x="12" default-y="-390.88">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="19.423923" bezier-y="21.067783" number="1" />
          </notations>
        </note>
      <note default-x="51.82" default-y="-370.88">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        </note>
      <note default-x="78.36" default-y="-345.88">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="131.45" default-y="-365.88">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-24.533267" bezier-y="22.190949" />
          </notations>
        </note>
      </measure>
    <measure number="64" width="236.66">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="82.49" default-y="-355">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="19.470596" bezier-y="21.54306" number="1" />
          </notations>
        </note>
      <note default-x="132.15" default-y="-335">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        </note>
      <note default-x="157.83" default-y="-310">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="209.18" default-y="-335">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-22.146755" bezier-y="24.126929" />
          </notations>
        </note>
      </measure>
    <measure number="65" width="150.07">
      <note default-x="12" default-y="-355">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="17.526523" bezier-y="24.641743" number="1" />
          </notations>
        </note>
      <note default-x="50.51" default-y="-335">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        </note>
      <note default-x="76.19" default-y="-310">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="114.7" default-y="-330">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-21.28232" bezier-y="24.3292" />
          </notations>
        </note>
      </measure>
    <measure number="66" width="204.74">
      <note default-x="12" default-y="-355">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="21.298541" bezier-y="22.724269" number="1" />
          </notations>
        </note>
      <note default-x="63.35" default-y="-335">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        </note>
      <note default-x="89.03" default-y="-310">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="148.94" default-y="-330">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-24.447769" bezier-y="26.263532" />
          </notations>
        </note>
      </measure>
    <measure number="67" width="158.27">
      <note default-x="12" default-y="-355">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="9.092924" bezier-y="16.706319" number="1" />
          </notations>
        </note>
      <note default-x="50.51" default-y="-335">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        </note>
      <note default-x="76.19" default-y="-310">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-18.110617" bezier-y="5.812738" />
          </notations>
        </note>
      <note default-x="128.93" default-y="-335">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      </measure>
    <measure number="68" width="169.87">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-40" relative-y="-40">
            <mf />
            </dynamics>
          </direction-type>
        <sound dynamics="88.89" />
        </direction>
      <note default-x="12" default-y="-340">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-340" />
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="69" width="139.65">
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-75" number="1" />
          </direction-type>
        </direction>
      <note default-x="12" default-y="-340">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-340" />
        <stem>up</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        </direction>
      </measure>
    <measure number="70" width="317.72">
      <print new-page="yes" page-number="7">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <sound dynamics="36.67" />
        </direction>
      <note default-x="79.52" default-y="-344.31">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="96.03" default-y="-344.31" />
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="71" width="173.59">
      <note default-x="12" default-y="-344.31">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-344.31" />
        <stem>up</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="72" width="192.3">
      <note default-x="14.96" default-y="-314.31">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="31.46" default-y="-314.31" />
        <stem>down</stem>
        <notations>
          <slur type="start" bezier-x="23.027997" bezier-y="13.657363" number="1" />
          </notations>
        </note>
      <note default-x="103.34" default-y="-319.31">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="119.85" default-y="-314.31" />
        <stem>down</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-21.340741" bezier-y="16.167405" />
          </notations>
        </note>
      </measure>
    <measure number="73" width="186.21">
      <note default-x="12" default-y="-324.31">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-324.31" />
        <stem>down</stem>
        <notations>
          <slur type="start" bezier-x="21.690172" bezier-y="14.22921" number="1" />
          </notations>
        </note>
      <note default-x="97.25" default-y="-329.31">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="113.75" default-y="-324.31" />
        <stem>down</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-21.105649" bezier-y="15.082624" />
          </notations>
        </note>
      </measure>
    <measure number="74" width="189.43">
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-75" spread="12" number="1" />
          </direction-type>
        </direction>
      <note default-x="13.32" default-y="-329.31">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="29.82" default-y="-324.31" />
        <accidental>natural</accidental>
        <stem>down</stem>
        <notations>
          <slur type="start" bezier-x="23.284911" bezier-y="12.703713" number="1" />
          </notations>
        </note>
      <note default-x="100.48" default-y="-334.31">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-20.468552" bezier-y="16.870383" />
          </notations>
        </note>
      <note default-x="129.53" default-y="-339.31">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        </direction>
      </measure>
    <measure number="75" width="242.44">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>110.84</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <words default-y="-68.56" relative-y="-35" font-style="italic" font-size="12">rit.</words>
          </direction-type>
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-75.4" spread="12" number="1" />
          </direction-type>
        </direction>
      <note default-x="80.85" default-y="-458.17">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="97.35" default-y="-458.17" />
        <stem>down</stem>
        <notations>
          <slur type="start" bezier-x="20.230112" bezier-y="14.251797" number="1" />
          </notations>
        </note>
      <note default-x="161.44" default-y="-458.17">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-20.230112" bezier-y="14.251797" />
          </notations>
        </note>
      <note default-x="188.5" default-y="-473.17">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        </direction>
      </measure>
    <measure number="76" width="195">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.62" default-y="-40" relative-y="-40">
            <ff />
            </dynamics>
          </direction-type>
        <sound dynamics="124.44" />
        </direction>
      <note default-x="13.32" default-y="-478.17">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="29.82" default-y="-478.17" />
        <stem>up</stem>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-44.55" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="77" width="128.53">
      <note default-x="12" default-y="-473.17">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-468.17" />
        <stem>down</stem>
        </note>
      </measure>
    <measure number="78" width="174.11">
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-75.4" number="1" />
          </direction-type>
        </direction>
      <note default-x="12" default-y="-478.17">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-478.17" />
        <stem>up</stem>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        </direction>
      </measure>
    <measure number="79" width="144.14">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-40" relative-y="-40">
            <mp />
            </dynamics>
          </direction-type>
        <sound dynamics="71.11" />
        </direction>
      <note default-x="12" default-y="-483.17">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="20.560562" bezier-y="18.223039" number="1" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-75.4" number="1" />
          </direction-type>
        </direction>
      <note default-x="51.1" default-y="-473.17">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        </note>
      <note default-x="77.17" default-y="-458.17">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="116.27" default-y="-473.17">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-22.830731" bezier-y="20.102527" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        </direction>
      </measure>
    <measure number="80" width="175.03">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="12" default-y="-493.17">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        </note>
      <note default-x="39.06" default-y="-473.17">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <note default-x="65.13" default-y="-473.17">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40.52" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <sound dynamics="36.67" />
        </direction>
      <direction placement="above">
        <direction-type>
          <words relative-y="40">pizz</words>
          </direction-type>
        <sound pizzicato="yes" />
        </direction>
      <note default-x="97.39" default-y="-493.17">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <notations>
          <arpeggiate direction="up" number="1" default-x="-18.72" default-y="10.3" />
          </notations>
        </note>
      <note default-x="97.39" default-y="-473.17">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <notations>
          <arpeggiate direction="up" number="1" default-x="-18.72" default-y="10.3" />
          </notations>
        </note>
      <note default-x="97.39" default-y="-448.17">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <notations>
          <arpeggiate direction="up" number="1" default-x="-18.72" default-y="10.3" />
          </notations>
        </note>
      <note default-x="136.49" default-y="-473.17">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        </barline>
      </measure>
    </part>
  <part id="P5">
    <measure number="1" width="153.11">
      <print>
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <divisions>12</divisions>
        <key>
          <fifths>1</fifths>
          </key>
        <time>
          <beats>6</beats>
          <beat-type>8</beat-type>
          </time>
        <clef>
          <sign>F</sign>
          <line>4</line>
          <clef-octave-change>-1</clef-octave-change>
          </clef>
        </attributes>
      <note default-x="99.65" default-y="-440">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="2" width="165.4">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="12" default-y="-425">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-425" />
        <stem>down</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="3" width="140.42">
      <note default-x="12" default-y="-425">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-425" />
        <stem>down</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="4" width="217.63">
      <note default-x="12" default-y="-425">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-425" />
        <stem>down</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="5" width="140.42">
      <note default-x="12" default-y="-425">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-425" />
        <stem>down</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="6" width="173.16">
      <note default-x="18.06" default-y="-425">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="34.56" default-y="-425" />
        <stem>down</stem>
        </note>
      </measure>
    <measure number="7" width="196.57">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="79.52" default-y="-425">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="96.03" default-y="-425" />
        <stem>down</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="8" width="185.79">
      <note default-x="12" default-y="-425">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-425" />
        <stem>down</stem>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="9" width="120.91">
      <note default-x="12" default-y="-425">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="66.03" default-y="-440">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        <repeat direction="backward" />
        </barline>
      </measure>
    <measure number="10" width="61.83">
      <note default-x="12" default-y="-440">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="11" width="154.72">
      <note default-x="12" default-y="-430">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-425" />
        <stem>down</stem>
        <notations>
          <slur type="start" bezier-x="30.178604" bezier-y="22.472139" number="1" />
          </notations>
        </note>
      <note default-x="82.46" default-y="-420">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="98.96" default-y="-415" />
        <stem>down</stem>
        </note>
      </measure>
    <measure number="12" width="134.55">
      <note default-x="12" default-y="-435">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-435" />
        <stem>down</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="57.66" default-y="-435">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <tied type="stop" />
          <slur type="stop" number="1" bezier-x="-30.178604" bezier-y="22.472139" />
          </notations>
        </note>
      <note default-x="84.72" default-y="-440">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="13" width="204.89">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <sound dynamics="36.67" />
        </direction>
      <note default-x="12" default-y="-430">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-425" />
        <stem>down</stem>
        </note>
      <note default-x="100.05" default-y="-420">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="116.55" default-y="-415" />
        <stem>down</stem>
        </note>
      </measure>
    <measure number="14" width="216.42">
      <print new-page="yes" page-number="2">
        <staff-layout number="1">
          <staff-distance>75.42</staff-distance>
          </staff-layout>
        </print>
      <note default-x="79.52" default-y="-508.54">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="115.54" default-y="-513.54">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <note default-x="139.54" default-y="-483.54">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="156.04" default-y="-478.54" />
        <stem>down</stem>
        </note>
      </measure>
    <measure number="15" width="161.82">
      <note default-x="12" default-y="-488.54">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-488.54" />
        <stem>down</stem>
        <notations>
          <slur type="start" bezier-x="19.98569" bezier-y="12.56941" number="1" />
          </notations>
        </note>
      <note default-x="88" default-y="-493.54">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="104.5" default-y="-488.54" />
        <stem>down</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-18.166673" bezier-y="15.079452" />
          </notations>
        </note>
      </measure>
    <measure number="16" width="161.82">
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-75" spread="12" number="1" />
          </direction-type>
        </direction>
      <note default-x="12" default-y="-498.54">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-498.54" />
        <stem>down</stem>
        <notations>
          <slur type="start" bezier-x="19.38571" bezier-y="13.410928" number="1" />
          </notations>
        </note>
      <note default-x="88" default-y="-503.54">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="104.5" default-y="-498.54" />
        <stem>down</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-18.766653" bezier-y="14.264342" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        </direction>
      </measure>
    <measure number="17" width="165.32">
      <note default-x="16.42" default-y="-503.54">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="32.92" default-y="-498.54" />
        <accidental>natural</accidental>
        <stem>down</stem>
        <notations>
          <slur type="start" bezier-x="19.625227" bezier-y="11.344629" number="1" />
          </notations>
        </note>
      <note default-x="88.44" default-y="-508.54">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-16.530268" bezier-y="15.511298" />
          </notations>
        </note>
      <note default-x="115.5" default-y="-513.54">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="18" width="170.17">
      <direction placement="above">
        <direction-type>
          <words relative-y="40" font-style="italic" font-size="12">rit</words>
          <words font-style="normal">.</words>
          </direction-type>
        </direction>
      <direction placement="below">
        <direction-type>
          <words default-y="-40" relative-y="-35" font-style="italic" font-size="12">rit.</words>
          </direction-type>
        </direction>
      <note default-x="13.32" default-y="-508.54">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="29.82" default-y="-508.54" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <notations>
          <slur type="start" bezier-x="20.376332" bezier-y="13.768601" number="1" />
          </notations>
        </note>
      <note default-x="93.3" default-y="-513.54">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-19.772859" bezier-y="14.622015" />
          </notations>
        </note>
      <note default-x="120.36" default-y="-513.54">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="19" width="183.7">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.62" default-y="-40" relative-y="-40">
            <ff />
            </dynamics>
          </direction-type>
        <sound dynamics="124.44" />
        </direction>
      <note default-x="13.32" default-y="-518.54">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="29.82" default-y="-518.54" />
        <stem>up</stem>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-44.55" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="20" width="200.43">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>105.32</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-75" number="1" />
          </direction-type>
        </direction>
      <note default-x="79.52" default-y="-533.45">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="96.03" default-y="-528.45" />
        <stem>down</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        </direction>
      </measure>
    <measure number="21" width="169.27">
      <note default-x="12" default-y="-533.45">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-528.45" />
        <stem>down</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="22" width="156.42">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="12" default-y="-518.45">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-518.45" />
        <stem>down</stem>
        </note>
      </measure>
    <measure number="23" width="161.38">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <sound dynamics="36.67" />
        </direction>
      <direction placement="above">
        <direction-type>
          <words relative-y="40">pizz</words>
          </direction-type>
        <sound pizzicato="yes" />
        </direction>
      <note default-x="12" default-y="-533.45">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="60.64" default-y="-533.45">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="24" width="158.92">
      <note default-x="12" default-y="-533.45">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="49.72" default-y="-533.45">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="25" width="212.83">
      <note default-x="12" default-y="-533.45">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="70.68" default-y="-533.45">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="26" width="221.36">
      <print new-page="yes" page-number="3">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="79.52" default-y="-477.08">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="115.07" default-y="-477.08">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="27" width="171.18">
      <note default-x="78.19" default-y="-467.08">
        <rest measure="yes" />
        <duration>36</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="28" width="141.99">
      <note default-x="12" default-y="-477.08">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="47.54" default-y="-477.08">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="29" width="213.29">
      <note default-x="99.25" default-y="-467.08">
        <rest measure="yes" />
        <duration>36</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="30" width="150.85">
      <note default-x="12" default-y="-477.08">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="47.54" default-y="-477.08">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="31" width="160.58">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-40" relative-y="-40">
            <mf />
            </dynamics>
          </direction-type>
        <sound dynamics="88.89" />
        </direction>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-40" relative-y="-40">
            <mf />
            </dynamics>
          </direction-type>
        <sound dynamics="88.89" />
        </direction>
      <direction placement="above">
        <direction-type>
          <words relative-y="40">arco</words>
          </direction-type>
        <sound pizzicato="no" />
        </direction>
      <note default-x="14.96" default-y="-462.08">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31.46" default-y="-462.08" />
        <stem>down</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="32" width="244.31">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="79.52" default-y="-462.08">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="96.03" default-y="-462.08" />
        <stem>down</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="33" width="255.9">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="14.96" default-y="-462.08">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="31.46" default-y="-462.08" />
        <stem>down</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="34" width="176.78">
      <note default-x="12" default-y="-462.08">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-462.08" />
        <stem>down</stem>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="86.08" default-y="-462.08">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="115.72" default-y="-477.08">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="35" width="192.61">
      <note default-x="14.96" default-y="-467.08">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="31.46" default-y="-462.08" />
        <stem>down</stem>
        <notations>
          <slur type="start" bezier-x="23.235424" bezier-y="12.686271" number="1" />
          </notations>
        </note>
      <note default-x="101.91" default-y="-472.08">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="118.42" default-y="-472.08" />
        <stem>down</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-20.415798" bezier-y="16.85294" />
          </notations>
        </note>
      </measure>
    <measure number="36" width="189.65">
      <note default-x="12" default-y="-477.08">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-472.08" />
        <stem>down</stem>
        <notations>
          <slur type="start" bezier-x="22.811923" bezier-y="13.33089" number="1" />
          </notations>
        </note>
      <note default-x="98.95" default-y="-482.08">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="115.45" default-y="-482.08" />
        <accidental>sharp</accidental>
        <stem>up</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-20.839299" bezier-y="16.242538" />
          </notations>
        </note>
      </measure>
    <measure number="37" width="233.82">
      <print new-page="yes" page-number="4">
        <staff-layout number="1">
          <staff-distance>70.96</staff-distance>
          </staff-layout>
        </print>
      <direction placement="above">
        <direction-type>
          <words relative-y="40" font-style="italic" font-size="12">rit.</words>
          </direction-type>
        </direction>
      <note default-x="82.49" default-y="-463.58">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="98.99" default-y="-463.58" />
        <stem>up</stem>
        </note>
      <note default-x="157.25" default-y="-468.58">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="173.75" default-y="-463.58" />
        <stem>up</stem>
        </note>
      </measure>
    <measure number="38" width="168.2">
      <note default-x="13.32" default-y="-468.58">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="29.82" default-y="-463.58" />
        <accidental>flat</accidental>
        <stem>up</stem>
        <notations>
          <slur type="start" bezier-x="19.350613" bezier-y="-14.473005" number="1" />
          </notations>
        </note>
      <note default-x="91.63" default-y="-473.58">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="108.13" default-y="-473.58" />
        <stem>up</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-19.960482" bezier-y="-13.619591" />
          </notations>
        </note>
      </measure>
    <measure number="39" width="192.82">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.62" default-y="-40.6" relative-y="-40">
            <ff />
            </dynamics>
          </direction-type>
        <sound dynamics="124.44" />
        </direction>
      <note default-x="13.32" default-y="-478.58">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="29.82" default-y="-473.58" />
        <stem>up</stem>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-49.32" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="40" width="123.5">
      <note default-x="12" default-y="-473.58">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-473.58" />
        <stem>up</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="41" width="168.08">
      <note default-x="12" default-y="-473.58">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-473.58" />
        <stem>up</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="42" width="172.84">
      <note default-x="12" default-y="-458.58">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-453.58" />
        <stem>down</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="59.39" default-y="-458.58">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="86.45" default-y="-458.58">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <barline location="right">
        <bar-style>light-light</bar-style>
        </barline>
      </measure>
    <measure number="43" width="272.04">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>106.52</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <key>
          <fifths>-2</fifths>
          </key>
        </attributes>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-40" relative-y="-40">
            <mf />
            </dynamics>
          </direction-type>
        <sound dynamics="88.89" />
        </direction>
      <direction placement="above">
        <direction-type>
          <words relative-y="40">pizz</words>
          </direction-type>
        <sound pizzicato="yes" />
        </direction>
      <note default-x="89" default-y="-536.84">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="148.08" default-y="-526.84">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="44" width="195.03">
      <note default-x="12" default-y="-536.84">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="71.07" default-y="-526.84">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="45" width="195.03">
      <note default-x="12" default-y="-536.84">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="71.07" default-y="-526.84">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="46" width="195.03">
      <note default-x="12" default-y="-536.84">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="71.07" default-y="-526.84">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="47" width="202.13">
      <note default-x="12" default-y="-521.84">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="78.17" default-y="-526.84">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <note default-x="108.71" default-y="-526.84">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="169.79" default-y="-526.84">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      </measure>
    <measure number="48" width="284.08">
      <print new-page="yes" page-number="5">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="89" default-y="-471.51">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="156.91" default-y="-451.51">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <note default-x="188.26" default-y="-461.51">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="250.94" default-y="-451.51">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      </measure>
    <measure number="49" width="201.85">
      <note default-x="12" default-y="-456.51">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="74.68" default-y="-451.51">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <note default-x="106.03" default-y="-451.51">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="168.71" default-y="-451.51">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      </measure>
    <measure number="50" width="170.51">
      <note default-x="12" default-y="-436.51">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="59.01" default-y="-451.51">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="51" width="201.4">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-0.68" default-y="-40" relative-y="-40">
            <sfz />
            </dynamics>
          </direction-type>
        <sound dynamics="124.44" />
        </direction>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="12" default-y="-461.51">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="74.23" default-y="-451.51">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="52" width="201.4">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-0.68" default-y="-40" relative-y="-40">
            <sfz />
            </dynamics>
          </direction-type>
        <sound dynamics="124.44" />
        </direction>
      <note default-x="12" default-y="-461.51">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="74.23" default-y="-451.51">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="53" width="271.83">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-0.68" default-y="-40" relative-y="-40">
            <sfz />
            </dynamics>
          </direction-type>
        <sound dynamics="124.44" />
        </direction>
      <note default-x="89" default-y="-450">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="150.57" default-y="-440">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="54" width="195.8">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-0.68" default-y="-40" relative-y="-40">
            <sfz />
            </dynamics>
          </direction-type>
        <sound dynamics="124.44" />
        </direction>
      <note default-x="12" default-y="-450">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="73.56" default-y="-440">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="55" width="200.56">
      <note default-x="12" default-y="-435">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="79.3" default-y="-440">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <note default-x="109.17" default-y="-440">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="168.9" default-y="-440">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      </measure>
    <measure number="56" width="198.06">
      <note default-x="12" default-y="-460">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-49.32" />
            </articulations>
          </notations>
        </note>
      <note default-x="76.8" default-y="-440">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <note default-x="106.67" default-y="-450">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-44.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="166.4" default-y="-440">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      </measure>
    <measure number="57" width="192.99">
      <note default-x="12" default-y="-445">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-44.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="71.73" default-y="-440">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <note default-x="101.6" default-y="-440">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="161.33" default-y="-440">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      </measure>
    <measure number="58" width="213.66">
      <print new-page="yes" page-number="6">
        <staff-layout number="1">
          <staff-distance>100.88</staff-distance>
          </staff-layout>
        </print>
      <note default-x="89" default-y="-496.76">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="105.51" default-y="-496.76" />
        <stem>down</stem>
        </note>
      <note default-x="139.48" default-y="-496.76">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="166.54" default-y="-511.76">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <barline location="right">
        <bar-style>light-light</bar-style>
        </barline>
      </measure>
    <measure number="59" width="87.15">
      <attributes>
        <key>
          <fifths>1</fifths>
          </key>
        </attributes>
      <note default-x="32.26" default-y="-511.76">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="60" width="169.59">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <sound dynamics="54.44" />
        </direction>
      <direction placement="above">
        <direction-type>
          <words relative-y="40">arco</words>
          </direction-type>
        <sound pizzicato="no" />
        </direction>
      <note default-x="12" default-y="-496.76">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-496.76" />
        <stem>down</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="61" width="159.8">
      <note default-x="12" default-y="-496.76">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-496.76" />
        <stem>down</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="62" width="269.26">
      <note default-x="12" default-y="-496.76">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-496.76" />
        <stem>down</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="63" width="159.8">
      <note default-x="12" default-y="-496.76">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-496.76" />
        <stem>down</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="64" width="236.66">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="82.49" default-y="-425">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="98.99" default-y="-425" />
        <stem>down</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="65" width="150.07">
      <note default-x="12" default-y="-425">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-425" />
        <stem>down</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="66" width="204.74">
      <note default-x="12" default-y="-425">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-425" />
        <stem>down</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="67" width="158.27">
      <note default-x="12" default-y="-425">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-425" />
        <stem>down</stem>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="76.19" default-y="-425">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="103.25" default-y="-440">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="68" width="169.87">
      <note default-x="77.53" default-y="-430">
        <rest measure="yes" />
        <duration>36</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="69" width="139.65">
      <note default-x="62.42" default-y="-430">
        <rest measure="yes" />
        <duration>36</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="70" width="317.72">
      <print new-page="yes" page-number="7">
        <staff-layout number="1">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="178.72" default-y="-434.31">
        <rest measure="yes" />
        <duration>36</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="71" width="173.59">
      <note default-x="12" default-y="-444.31">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <note default-x="55.58" default-y="-444.31">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-40" relative-y="-40">
            <mf />
            </dynamics>
          </direction-type>
        <sound dynamics="88.89" />
        </direction>
      <note default-x="84.63" default-y="-414.31">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="101.13" default-y="-409.31" />
        <stem>down</stem>
        <notations>
          <slur type="start" bezier-x="30.104948" bezier-y="20.493231" number="1" />
          </notations>
        </note>
      </measure>
    <measure number="72" width="192.3">
      <note default-x="14.96" default-y="-419.31">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="31.46" default-y="-419.31" />
        <stem>down</stem>
        </note>
      <note default-x="103.34" default-y="-424.31">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="119.85" default-y="-419.31" />
        <stem>down</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-27.816941" bezier-y="23.505281" />
          </notations>
        </note>
      </measure>
    <measure number="73" width="186.21">
      <note default-x="12" default-y="-429.31">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="28.5" default-y="-429.31" />
        <stem>down</stem>
        <notations>
          <slur type="start" bezier-x="21.690172" bezier-y="14.22921" number="1" />
          </notations>
        </note>
      <note default-x="97.25" default-y="-434.31">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="113.75" default-y="-429.31" />
        <stem>down</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-21.105649" bezier-y="15.082624" />
          </notations>
        </note>
      </measure>
    <measure number="74" width="189.43">
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-75" spread="12" number="1" />
          </direction-type>
        </direction>
      <note default-x="13.32" default-y="-434.31">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="29.82" default-y="-429.31" />
        <accidental>natural</accidental>
        <stem>down</stem>
        <notations>
          <slur type="start" bezier-x="23.284911" bezier-y="12.703713" number="1" />
          </notations>
        </note>
      <note default-x="100.48" default-y="-439.31">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-20.468552" bezier-y="16.870383" />
          </notations>
        </note>
      <note default-x="129.53" default-y="-444.31">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        </direction>
      </measure>
    <measure number="75" width="242.44">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>105.84</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <words default-y="-40" relative-y="-35" font-style="italic" font-size="12">rit.</words>
          </direction-type>
        </direction>
      <note default-x="80.85" default-y="-614.01">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>18</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="97.35" default-y="-614.01" />
        <accidental>flat</accidental>
        <stem>down</stem>
        <notations>
          <slur type="start" bezier-x="20.530687" bezier-y="13.823505" number="1" />
          </notations>
        </note>
      <note default-x="161.44" default-y="-619.01">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <slur type="stop" number="1" bezier-x="-19.929537" bezier-y="14.676919" />
          </notations>
        </note>
      <note default-x="188.5" default-y="-619.01">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="76" width="195">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.62" default-y="-40" relative-y="-40">
            <ff />
            </dynamics>
          </direction-type>
        <sound dynamics="124.44" />
        </direction>
      <note default-x="13.32" default-y="-624.01">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="29.82" default-y="-624.01" />
        <stem>up</stem>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-44.55" />
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="77" width="128.53">
      <note default-x="12" default-y="-619.01">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-614.01" />
        <stem>down</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="78" width="174.11">
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-75.4" number="1" />
          </direction-type>
        </direction>
      <note default-x="12" default-y="-619.01">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-614.01" />
        <stem>down</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        </direction>
      </measure>
    <measure number="79" width="144.14">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-1.18" default-y="-40" relative-y="-40">
            <mp />
            </dynamics>
          </direction-type>
        <sound dynamics="71.11" />
        </direction>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-75.4" number="1" />
          </direction-type>
        </direction>
      <note default-x="12" default-y="-604.01">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>half</type>
        <dot default-x="28.5" default-y="-604.01" />
        <stem>down</stem>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        </direction>
      </measure>
    <measure number="80" width="175.03">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <sound dynamics="54.44" />
        </direction>
      <note default-x="12" default-y="-604.01">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <tie type="stop" />
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="39.06" default-y="-619.01">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <note default-x="65.13" default-y="-619.01">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.4" default-y="-40" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <sound dynamics="36.67" />
        </direction>
      <direction placement="above">
        <direction-type>
          <words relative-y="40">pizz</words>
          </direction-type>
        <sound pizzicato="yes" />
        </direction>
      <note default-x="97.39" default-y="-639.01">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="136.49" default-y="-619.01">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        </barline>
      </measure>
    </part>
  </score-partwise>`;

export const SCHEHERAZADE3_ANALYSE: MesureAnalyse[] = [
  { numero: 1,  nom: "Sol",       degre: "I implicite — anacrouse du violon seul, avant l'entrée de la pédale", fonction: "T" },
  { numero: 2,  nom: "Sol tenu",  degre: "I en pédale (Sol-Si-Ré tenus 2 mesures sous la mélodie)", fonction: "T" },
  { numero: 9,  nom: "Sol",       degre: "période close (double barre) : le Prince, diatonisme sans accident", fonction: "T" },
  { numero: 24, nom: "La-Si/Fa#", degre: "épisode pizz : dialogue de basses sous Fa# tenu — pédale de dominante implicite", fonction: "D" },
  { numero: 43, nom: "sol m + Do#", degre: "LA PRINCESSE : sol mineur orné du Do# (4te augmentée brodée, jamais résolue)", fonction: "?" },
  { numero: 47, nom: "Ré-Do-Sib-La-Sol", degre: "le tétracorde descendant en séquences", fonction: "?" },
  { numero: 59, nom: "Sol",       degre: "retour du Prince, da capo varié", fonction: "T" },
  { numero: 75, nom: "chromatismes", degre: "coda : glissades La#-Si-Do / Mib-Fa#-Sol, l'arabesque de la conteuse", fonction: "?" },
  { numero: 80, nom: "Sol-Ré-Si + arpège d'alto", degre: "I — l'UNIQUE tutti homophone du fichier (5 parties, même rythme), enrichi de l'arpège Mi-Do-La à l'alto, pizz", fonction: "T" },
];

export const SCHEHERAZADE3_ANALYSE_NARRATIVE: AnalyseNarrative = {
  tonalite: "Sol majeur pour le Prince (armure 1 dièse) ; sol mineur orné pour la Princesse (armure 2 bémols, m.43-58) ; retour à Sol majeur pour la reprise et la coda.",
  metrique: "6/8, un diptyque de deux mélodies-mondes sur la même pulsation berçante, sans jamais de vraie rupture de mètre.",
  forme: "Prince (m.1-42, avec un épisode pizzicato intérieur m.24-30) — Princesse (m.43-58) — retour du Prince, da capo varié (m.59-74) — coda (m.75-80).",
  sections: [
    {
      label: "Le Prince (m.1-9)",
      titre: "La suavité comme absence calculée d'accident",
      chiffrage: "I (pédale tenue sous la mélodie)",
      fonctions: "T",
      texte: "Le violon expose seul son anacrouse, puis les quatre autres cordes entrent en pédale (Sol-Si-Ré, tenue deux mesures d'affilée) tandis que la ligne poursuit sa courbe : Si-Do, Ré-Mi, la retombée Sol-La-Si. Pas une seule altération avant la période close de la mesure 9 — un diatonisme parfait, l'élégance sans événement.",
    },
    {
      label: "L'épisode pizzicato (m.24-30)",
      titre: "L'harmonie réduite à l'état de squelette",
      chiffrage: "V implicite (pédale de dominante)",
      fonctions: "D",
      texte: "Un dialogue de basses en pizzicato, La et Si alternés sous un Fa# tenu : la dominante est suggérée, jamais frappée en accord complet. C'est l'accompagnement à son degré le plus économe — trois notes qui esquissent une fonction sans jamais se rassembler en un accord attaqué ensemble.",
    },
    {
      label: "La Princesse (m.43-58)",
      titre: "L'exact négatif : l'ornement comme décor",
      chiffrage: "i (sol mineur), avec Do# étranger au mode",
      fonctions: "?",
      texte: "L'acciaccatura Do#-Ré, répétée comme un tambour de basque, brode une quarte augmentée qui n'appartient à aucune gamme du passage et ne se résout jamais — un pur ornement « oriental », de la couleur sans fonction. Puis la ligne se love en une descente Ré-Do-Sib-La-Sol, le même tétracorde chromatique-mélodique qui charpente la Folia, le ground de Purcell et la descente andalouse de Sibelius, ici en parure de danse plutôt qu'en socle harmonique.",
    },
    {
      label: "Retour du Prince (m.59-74)",
      titre: "Le da capo varié",
      chiffrage: "I",
      fonctions: "T",
      texte: "Le thème du Prince revient, retravaillé mais reconnaissable, en Sol majeur — la tonique retrouvée après le détour modal de la Princesse, préparant la coda.",
    },
    {
      label: "La coda (m.75-80)",
      titre: "La signature de la conteuse, et l'unique tutti",
      chiffrage: "I — le seul accord réellement ATTAQUÉ ensemble par les 5 parties",
      fonctions: "T",
      texte: "Des glissades chromatiques (La#-Si-Do, Mib-Fa#-Sol) évoquent l'arabesque du violon de Schéhérazade elle-même, qui rôde dans tout le cycle. Puis, à la toute dernière mesure, les cinq parties articulent ENSEMBLE, dans le même rythme, le tutti le plus dense de tout le mouvement : Sol-Ré-Si aux violons et à la contrebasse, mais l'alto y superpose son propre arpège pizzicato (Mi-Do-La) — un dernier trait de couleur qui enrichit la triade plutôt qu'un simple accord de Sol majeur nu. Partout ailleurs, la « verticalité » n'était qu'une pédale tenue sous une ligne qui bouge, avec de rares éclairs d'ensemble aux seules articulations de la forme ; ici, pour finir, c'est le geste collectif le plus riche de la pièce, et même ce geste garde une voix qui s'en écarte d'un délié.",
    },
  ],
  synthese: [
    {
      titre: "Verticalité tenue contre verticalité frappée",
      texte: "Le relevé note à note distingue deux textures que l'œil confond facilement sur une partition : une pédale de cordes SOUTENUE sous une mélodie qui continue de bouger (le cas presque partout dans ce mouvement) n'est pas la même chose qu'un accord réellement ATTAQUÉ ensemble par toutes les parties, dans le même rythme (rare, et concentré aux articulations de la forme — fin du Prince, fin de la Princesse, fin du retour, coda). L'accord final (m.80) n'est pas le seul de ces instants, mais il en est de loin le plus dense. Vérifier les onsets réels, pas seulement les hauteurs qui sonnent ensemble à un instant donné, est la seule façon fiable de trancher entre pédale tenue et vrai tutti.",
    },
    {
      titre: "Le tétracorde descendant et l'ornement « oriental », deux exports russes",
      texte: "Le tétracorde chromatique de la Princesse (Ré-Do-Sib-La-Sol) relie ce mouvement à la Folia, au ground de Purcell et à la descente andalouse de Sibelius ; et la recette de la quarte augmentée brodée, jamais résolue, comme pur décor sonore, est exactement celle que le thème B du Boléro (1928) et Morricone (1966) industrialiseront plus tard — ici à sa source russe, chez le maître dont l'orientalisme a fourni le lexique à trois générations.",
    },
    {
      titre: "1888, l'année aux deux visages",
      texte: "La même année que la Première Gymnopédie de Satie : à Paris, l'harmonie perd sa fonction ; à Saint-Pétersbourg, Rimsky porte à sa perfection l'art inverse, la couleur DANS la fonction — le chromatisme comme costume, la modalité comme parfum, le tout sagement arrimé à la tonalité. Et le fil est direct : Rimsky fut le professeur de Stravinsky, dont Les Augures (cours 21) retournent cet atelier contre lui-même.",
    },
  ],
};
