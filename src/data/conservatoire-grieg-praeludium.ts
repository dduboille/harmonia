import type { MesureAnalyse, AnalyseNarrative } from "./conservatoire-bwv846";

/**
 * data/conservatoire-grieg-praeludium.ts
 * Harmonia — Edvard Grieg, Suite Holberg op. 40, I. Praeludium (1884),
 * version piano seul, pour la section "conservatoire" du cours 23 (niveau 3
 * — le néo-archaïsme, le regard en arrière comme langage).
 *
 * MusicXML VERBATIM fourni par Dany (fichier "grieg-praeludium-annote
 * .musicxml") — jamais reconstruit à la main, cf. feedback-partitions-
 * verbatim. 72 mesures, 4/4, Sol majeur (armure +1), Allegro vivace (noire =
 * 154), f. Domaine public (Grieg mort en 1907) — publiable.
 *
 * « Fra Holbergs tid » (« du temps de Holberg ») : la suite entière est un
 * néo-archaïsme délibéré — un prélude baroque en moto perpetuo (proche du
 * BWV 847) écrit avec les moyens harmoniques du romantisme tardif. Le
 * fichier porte 16 balises <harmony> aux points structurels clés (m.1 Sol,
 * m.5 Ré/Fa#, m.8 Ré, m.19 Ré7/Fa#, m.21 Sol, m.23 Si7, m.25 mi, m.30 Si,
 * m.40 Lam7, m.41 Ré7, m.42 Sol, m.45 Sol7/Fa, m.47 Do, m.55 Sol, m.71 Ré7,
 * m.72 Sol), cohérentes avec de nombreux repères <direction><words>
 * embarqués dans le XML (non affichés à la gravure) — tous retrouvés par
 * mapping position→mesure, concordance totale avec le brouillon de Dany.
 *
 * Vérifié note à note (script d'extraction dédié, tsx standalone) :
 *  - m.1-4 : pédale de tonique confirmée par lecture DURÉE-CONSCIENTE
 *    (onset≤t<onset+durée, pas juste onset exact) — Sol1 sonne en continu du
 *    début à la fin des 4 mesures, sans interruption ;
 *  - m.9-16 : le champ de hauteurs (Do#, Ré, Fa#, La très majoritaires)
 *    confirme le centre en Ré majeur du 2e thème ;
 *  - m.19-20 : Ré7/Fa# confirmé exactement (Do♮-Ré-Fa#-La, la 7e qui
 *    rappelle Sol comme l'indique le repère de Dany) ;
 *  - m.29 : l'agrégat La#°7/Do confirmé exactement (Do en basse + La#-Do#-
 *    Mi-Sol, la septième diminuée complète construite sur La#) ;
 *  - m.30-39 : la pédale de Si (dominante de mi) confirmée par la basse la
 *    plus grave systématiquement sur Si (sauf une brève voisine chromatique
 *    à la m.33) ; l'alternance majeur/mineur de Dany EXACTEMENT confirmée :
 *    m.38 contient Ré# (Si majeur), m.39 contient Ré♮ et PAS Ré# (si
 *    mineur) ;
 *  - m.40 : Lam7 confirmé exactement (La-Do-Mi-Sol) ; m.41 : Ré7 confirmé
 *    présent (avec des notes de passage supplémentaires) ;
 *  - m.45 : Sol7 confirmé exactement (Sol-Si-Ré-Fa, avec Fa à la basse —
 *    V4/2 de IV) ;
 *  - m.70 : le Fa# (la couleur #11) confirmé présent sur un accord de Do
 *    majeur (Do-Mi-Sol + Fa#) ;
 *  - m.72 (accord final) : Sol-Ré-Si confirmé (Sol majeur).
 *
 * Nuance apportée plutôt que recopiée telle quelle : la « chaîne de
 * septièmes descendante sur basse Mi-Ré-Do-Si-La » (m.27-28 et m.49-52) est
 * confirmée dans son PRINCIPE (une basse qui descend par degrés conjoints
 * sous des accords de septième, à ces deux endroits) mais la ligne de basse
 * exacte, note par note, n'a pas été isolée avec certitude par le script
 * (les figures très arpégées des deux mains, à des rythmiques différentes,
 * rendent l'extraction automatique de la seule basse harmonique ambiguë) —
 * non bloquant, l'essentiel de la description reste vérifié.
 *
 * Note de comptage : 1480 <note> bruts — correspond EXACTEMENT au compte
 * annoncé par Dany ("1480 notes vérifiées"), 3e fois d'affilée après le
 * Boléro et la Marche au supplice (cf. remarque de ces deux fichiers : le
 * motif "toujours sous-estimé" des pièces précédentes ne s'est plus
 * reproduit depuis). Sur ces 1480 : 145 silences, 12 notes d'ornement
 * (grâce), 16 liaisons fusionnées → 1307 évènements sonores retenus par le
 * parseur (lib/musicxml-parse).
 *
 * `score.mode` infère correctement "major" (armure +1, Sol majeur confirmé
 * sans ambiguïté relative-mineur à trancher).
 */
export const GRIEG_PRAELUDIUM_MESURES_1_72 =
`<?xml version='1.0' encoding='UTF-8'?>
<score-partwise version="4.0">
  <work>
    <work-title>Holberg Suite, Op.40 (Piano Solo)</work-title>
    </work>
  <identification>
    <encoding>
      <software>MuseScore Studio 4.7.4</software>
      <encoding-date>2026-07-31</encoding-date>
      <supports element="accidental" type="yes" />
      <supports element="beam" type="yes" />
      <supports element="print" attribute="new-page" type="yes" value="yes" />
      <supports element="print" attribute="new-system" type="yes" value="yes" />
      <supports element="stem" type="yes" />
      </encoding>
    <source>http://musescore.com/user/34824952/scores/6341523</source>
    <miscellaneous>
      <miscellaneous-field name="creationDate">2020-07-18</miscellaneous-field>
      <miscellaneous-field name="mscVersion">4.70</miscellaneous-field>
      <miscellaneous-field name="platform">Microsoft Windows</miscellaneous-field>
      </miscellaneous>
    </identification>
  <defaults>
    <scaling>
      <millimeters>7.856</millimeters>
      <tenths>40</tenths>
      </scaling>
    <page-layout>
      <page-height>1511.87</page-height>
      <page-width>1069.55</page-width>
      <page-margins type="even">
        <left-margin>50.9165</left-margin>
        <right-margin>50.9165</right-margin>
        <top-margin>50.9165</top-margin>
        <bottom-margin>101.833</bottom-margin>
        </page-margins>
      <page-margins type="odd">
        <left-margin>50.9165</left-margin>
        <right-margin>50.9165</right-margin>
        <top-margin>50.9165</top-margin>
        <bottom-margin>101.833</bottom-margin>
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
    <credit-words default-x="534.78" default-y="1460.95" justify="center" valign="top" font-size="24">Holberg Suite, Op.40</credit-words>
    </credit>
  <credit page="1">
    <credit-type>subtitle</credit-type>
    <credit-words default-x="534.78" default-y="1410.04" justify="center" valign="top" font-size="14">Ⅰ.Praeludium</credit-words>
    </credit>
  <part-list>
    <score-part id="P1">
      <part-name print-object="no">グランドピアノ</part-name>
      <part-abbreviation print-object="no">Pno.</part-abbreviation>
      <score-instrument id="P1-I1">
        <instrument-name>グランドピアノ</instrument-name>
        <instrument-sound>keyboard.piano.grand</instrument-sound>
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
    <measure number="1" width="377.81">
      <print>
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>170</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>90.26</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <divisions>12</divisions>
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
      <direction placement="above" system="only-top">
        <direction-type>
          <words default-x="-38.52" relative-y="20" font-weight="bold" font-size="12">Allegro vivace</words>
          </direction-type>
        <staff>1</staff>
        <sound tempo="154" />
        </direction>
      <direction placement="below">
        <direction-type>
          <dynamics default-y="-31.24" relative-y="-40">
            <f />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89" />
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">Sol : I — moto perpetuo sur PÉDALE DE TONIQUE (m.1-4), le principe du prélude baroque</words></direction-type><staff>2</staff></direction><note default-x="223.83" default-y="-10" print-object="no">
        <rest measure="yes" />
        <duration>48</duration>
        <voice>1</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-122.68" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="104.65" default-y="-135.26">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="120.96" default-y="-125.26">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="137.27" default-y="-135.26">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="153.58" default-y="-150.26">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="169.89" default-y="-135.26">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="186.2" default-y="-125.26">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="202.51" default-y="-135.26">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="218.83" default-y="-150.26">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="235.14" default-y="-135.26">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="251.45" default-y="-125.26">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="267.76" default-y="-135.26">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="284.07" default-y="-150.26">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="300.38" default-y="-135.26">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="320.38" default-y="-120.26">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="336.69" default-y="-135.26">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="353.01" default-y="-145.26">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="103.69" default-y="-205.26">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <accent default-x="0.24" default-y="-84.4" />
            </articulations>
          </notations>
        </note>
      <note default-x="103.69" default-y="-170.26">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="2" width="305.07">
      <note default-x="10.96" default-y="-20" print-object="no">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <note default-x="152.52" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="168.83" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="185.14" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="207.64" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="227.65" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="243.96" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="260.27" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="280.27" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="10.96" default-y="-130.26">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="30.96" default-y="-115.26">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="47.27" default-y="-130.26">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="63.58" default-y="-140.26">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="79.89" default-y="-125.26">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="99.9" default-y="-110.26">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="119.9" default-y="-125.26">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="136.21" default-y="-135.26">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="152.52" default-y="-140.26" print-object="no">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="10" default-y="-205.26">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="10" default-y="-170.26">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="3" width="284.84">
      <note default-x="10.96" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-49.32" />
            </articulations>
          </notations>
        </note>
      <note default-x="27.27" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="43.58" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="59.89" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="76.21" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="92.52" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="108.83" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="125.14" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="145.86" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-44.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="162.17" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="178.48" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="194.8" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="211.11" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="227.42" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="243.73" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="260.04" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="135.02" default-y="-130.26" print-object="no">
        <rest measure="yes" />
        <duration>48</duration>
        <voice>5</voice>
        <staff>2</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="10" default-y="-205.26">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      <note default-x="10" default-y="-170.26">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <tie type="start" />
        <voice>6</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <tied type="start" />
          </notations>
        </note>
      </measure>
    <measure number="4" width="388.74">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>90.61</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="83.12" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-54.32" />
            </articulations>
          </notations>
        </note>
      <note default-x="99.71" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="116.29" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="136.29" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="156.29" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="172.88" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="189.46" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="209.46" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="229.46" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="246.05" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="262.63" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="282.63" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="299.21" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="315.8" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="332.38" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="363.94" default-y="-50">
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
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="215.03" default-y="-105" print-object="no">
        <rest measure="yes" />
        <duration>48</duration>
        <voice>5</voice>
        <staff>2</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="83.12" default-y="-180">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>half</type>
        <dot default-x="99.63" default-y="-180" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="83.12" default-y="-145">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <tie type="stop" />
        <voice>6</voice>
        <type>half</type>
        <dot default-x="99.63" default-y="-150" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="299.21" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <accent placement="below" default-x="-0.72" default-y="-49.32" />
            </articulations>
          </notations>
        </note>
      <note default-x="299.21" default-y="-110">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="5" width="295.43">
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-69.86" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>D</root-step></root><kind text="">major</kind><bass><bass-step>F</bass-step><bass-alter>1</bass-alter></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V/… : modulation express vers Ré (V)</words></direction-type><staff>2</staff></direction><note default-x="10" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="26.58" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="43.17" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="59.75" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="76.33" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="92.92" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="109.5" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="126.08" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="142.67" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="171.13" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="187.71" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="204.29" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="220.88" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="237.46" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="254.04" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="270.63" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
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
      <note default-x="10" default-y="-150">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-54.32" />
            </articulations>
          </notations>
        </note>
      <note default-x="10" default-y="-115">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="142.67" default-y="-155">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-59.32" />
            </articulations>
          </notations>
        </note>
      <note default-x="142.67" default-y="-120">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="6" width="283.55">
      <note default-x="10" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="26.58" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="43.17" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="59.75" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="76.33" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="92.92" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="109.5" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="126.08" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="142.67" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="159.25" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="175.83" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="192.41" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="209" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="225.58" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="242.16" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="258.75" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
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
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-92.6" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="10" default-y="-150">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="26.5" default-y="-150" />
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-54.32" />
            </articulations>
          </notations>
        </note>
      <note default-x="10" default-y="-115">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="26.5" default-y="-110" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="209" default-y="-135">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="209" default-y="-100">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="7" width="377.39">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>88.51</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>77.72</staff-distance>
          </staff-layout>
        </print>
      <note default-x="81.12" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="98.48" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="115.84" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="133.2" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="150.55" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="167.91" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="185.27" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="202.63" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="219.98" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="248.45" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="265.8" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="283.16" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="300.52" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="317.88" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="335.23" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="352.59" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="81.12" default-y="-152.72">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="81.12" default-y="-117.72">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="219.98" default-y="-187.72">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-79.32" />
            </articulations>
          </notations>
        </note>
      <note default-x="219.98" default-y="-152.72">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="8" width="295.16">
      <harmony placement="above" print-frame="no"><root><root-step>D</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">Ré : I — arrivée à la dominante</words></direction-type><staff>2</staff></direction><note default-x="10" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="27.36" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="44.71" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="62.07" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-68.64" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="79.43" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="96.79" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="114.14" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="131.5" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="148.86" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="166.22" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="183.57" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="200.93" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="218.29" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="235.65" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="253" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="270.36" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-102.6" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="10" default-y="-172.72">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <accent default-x="-0.72" default-y="-64.32" />
            </articulations>
          </notations>
        </note>
      <note default-x="10" default-y="-137.72">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="148.86" default-y="-172.72">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="148.86" default-y="-137.72">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="218.29" default-y="-137.72">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="9" width="295.16">
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <direction placement="below">
        <direction-type>
          <dynamics default-y="-33.24" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="71.11" />
        </direction>
      <direction placement="below">
        <direction-type>
          <words default-x="-1.45" default-y="-40" relative-x="21.5" relative-y="-37.62" font-style="italic" font-size="11">cantabile</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">2e thème cantabile en Ré, séquences</words></direction-type><staff>2</staff></direction><note default-x="10" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="27.36" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="44.71" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="62.07" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="79.43" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="96.79" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="114.14" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="131.5" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="148.86" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="166.22" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="183.57" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="200.93" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="218.29" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="235.65" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="253" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="270.36" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="10" default-y="-102.72">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="24.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="148.86" default-y="-102.72">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="165.36" default-y="-102.72" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="24.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="253" default-y="-102.72">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="7.195838" bezier-y="9.546115" number="1" />
          </notations>
        </note>
      </measure>
    <measure number="10" width="374.3">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>88.51</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="80.16" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="96.31" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="112.45" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="128.6" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="144.74" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="160.88" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="177.03" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="193.17" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="209.32" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="237.78" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="253.92" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="270.07" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="286.21" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="302.35" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="318.5" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="341.75" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
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
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-80" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="80.16" default-y="-110">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-4.564291" bezier-y="7.999876" />
          </notations>
        </note>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="144.74" default-y="-105">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="19.542992" bezier-y="8.398201" number="1" />
          </notations>
        </note>
      <note default-x="209.32" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-13.02141" bezier-y="16.819666" />
          </notations>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="286.21" default-y="-125">
        <rest />
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="318.5" default-y="-110">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <slur type="start" bezier-x="12.241745" bezier-y="17.865106" number="1" />
          </notations>
        </note>
      <note default-x="334" default-y="-105">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="349.5" default-y="-100">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="11" width="289.28">
      <note default-x="10" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="38.46" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="54.61" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="70.75" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="86.89" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="103.04" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="119.18" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="135.33" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="151.47" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="167.61" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="183.76" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="199.9" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="216.05" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="232.19" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="248.33" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="264.48" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="10" default-y="-95">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-20.43773" bezier-y="7.163905" />
          <articulations>
            <tenuto default-x="0.18" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="151.47" default-y="-95">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="167.97" default-y="-90" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="19.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="248.33" default-y="-95">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="16.482458" bezier-y="6.884657" number="1" />
          </notations>
        </note>
      </measure>
    <measure number="12" width="304.14">
      <note default-x="10" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="38.46" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="54.61" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="70.75" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="86.89" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="103.04" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="119.18" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="135.33" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="151.47" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="167.61" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="183.76" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="199.9" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="216.05" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="232.19" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="248.33" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="271.59" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
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
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-80" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="10" default-y="-115">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-9.208288" bezier-y="15.306122" />
          </notations>
        </note>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="86.89" default-y="-105">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="19.542992" bezier-y="8.398201" number="1" />
          </notations>
        </note>
      <note default-x="151.47" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-13.02141" bezier-y="16.819666" />
          </notations>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="216.05" default-y="-125">
        <rest />
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="248.33" default-y="-115">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <slur type="start" bezier-x="9.697619" bezier-y="12.394544" number="1" />
          </notations>
        </note>
      <note default-x="263.84" default-y="-110">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="279.34" default-y="-105">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="13" width="514.95">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>88.51</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="80.16" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="106.12" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="132.08" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="158.04" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="184" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="209.96" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="235.92" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="261.88" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="287.84" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="313.79" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="339.75" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="371.32" default-y="-50">
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
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="397.27" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="423.23" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="449.19" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="479.91" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="80.16" default-y="-100">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-4.291793" bezier-y="7.824061" />
          <articulations>
            <tenuto default-x="0.18" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-80" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="287.84" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="397.27" default-y="-125">
        <rest />
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="449.19" default-y="-120">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <slur type="start" bezier-x="15.01034" bezier-y="18.873879" number="1" />
          </notations>
        </note>
      <note default-x="469.67" default-y="-115">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="490.15" default-y="-110">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="14" width="452.77">
      <note default-x="10" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="35.96" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="61.92" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="93.48" default-y="-50">
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
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="119.44" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="145.4" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="171.36" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="197.32" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="223.27" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="249.23" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="275.19" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="301.15" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="327.11" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="353.07" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="379.03" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="417.73" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="10" default-y="-105">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-22.687903" bezier-y="8.172678" />
          <articulations>
            <tenuto default-x="0.18" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-80" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="223.27" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="327.11" default-y="-125">
        <rest />
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="379.03" default-y="-125">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <slur type="start" bezier-x="12.314043" bezier-y="16.225224" number="1" />
          </notations>
        </note>
      <note default-x="407.49" default-y="-120">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="427.97" default-y="-115">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="15" width="517.94">
      <print new-page="yes" page-number="2">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>70</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>68.51</staff-distance>
          </staff-layout>
        </print>
      <note default-x="86.23" default-y="-50">
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
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="113.1" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="139.97" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="166.83" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="193.7" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="220.57" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="247.44" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="274.31" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="301.18" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="328.05" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="354.92" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="381.79" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <words font-family="FreeSerif" font-size="12" font-style="italic" default-y="-78.31">cresc.</words>
          </direction-type>
        <direction-type>
          <dashes type="start" number="1" default-y="-78.31" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="408.66" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="435.53" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="462.4" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="489.27" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="86.23" default-y="-113.51">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-5.925489" bezier-y="8.830911" />
          <articulations>
            <staccato default-x="4.93" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-80" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="193.7" default-y="-128.51">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="301.18" default-y="-123.51">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <ornaments>
            <trill-mark />
            <wavy-line type="start" number="1" default-y="11.95" />
            </ornaments>
          </notations>
        </note>
      </measure>
    <measure number="16" width="449.78">
      <note default-x="18.06" default-y="-50">
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
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="44.93" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="71.8" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="98.67" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="125.54" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="152.41" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="179.28" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="206.15" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="233.02" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="259.89" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="286.76" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="313.63" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="340.5" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="367.37" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="394.24" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="421.11" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="17.1" default-y="-123.51">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <ornaments>
            <wavy-line type="stop" number="1" />
            </ornaments>
          </notations>
        </note>
      <note default-x="410.45" default-y="-128.51">
        <grace />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="430.38" default-y="-123.51">
        <grace />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <voice>5</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="17" width="400.59">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>108.35</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>92.84</staff-distance>
          </staff-layout>
        </print>
      <note default-x="80.16" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="100.17" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="120.17" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="142.67" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <dashes type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-4.16" default-y="-62.51" relative-y="-40">
            <fz />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="100" />
        </direction>
      <note default-x="165.17" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="185.17" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="205.17" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="227.67" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="247.68" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="265.7" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="283.71" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="303.72" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="321.73" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="339.75" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="357.77" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="375.79" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="80.16" default-y="-142.84">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="3.44" />
            </articulations>
          </notations>
        </note>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-133.88" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="165.17" default-y="-187.84">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-64.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="165.17" default-y="-152.84">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="247.68" default-y="-152.84">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="18" width="283.61">
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-94.56" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="10" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="28.02" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="46.04" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="64.06" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="85.56" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="103.58" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="121.6" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="139.61" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="157.63" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="175.65" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="193.67" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="211.69" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-4.16" default-y="-50.98" relative-y="-40">
            <fz />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="94.44" />
        </direction>
      <note default-x="229.71" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="34.3" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="128.63" default-y="-142.84">
        <rest measure="yes" />
        <duration>48</duration>
        <voice>5</voice>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        <repeat direction="backward" />
        </barline>
      </measure>
    <measure number="19" width="283.51">
      <barline location="left">
        <bar-style>heavy-light</bar-style>
        <repeat direction="forward" />
        </barline>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.62" default-y="-31.22" relative-y="-40">
            <ff />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="106.67" />
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>D</root-step></root><kind text="7">dominant</kind><bass><bass-step>F</bass-step><bass-alter>1</bass-alter></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">D7/Fa# (le Do♮ !) : rétrotransition vers Sol</words></direction-type><staff>2</staff></direction><note default-x="34" default-y="-20" print-object="no">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="74.54" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <accent default-x="-0.72" default-y="31.44" />
            </articulations>
          </notations>
        </note>
      <note default-x="115.09" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="137.59" default-y="-10" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="160.09" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="178.11" default-y="-10" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="196.13" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="214.15" default-y="-10" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="232.17" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="258.71" default-y="-10" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="34" default-y="-30" print-object="no">
        <rest />
        <duration>12</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="74.54" default-y="-30" print-object="no">
        <rest />
        <duration>12</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="115.09" default-y="-30" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="137.59" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="160.09" default-y="10" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="178.11" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="196.13" default-y="-30" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="214.15" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="232.17" default-y="-10" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="258.71" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-133.88" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="34" default-y="-152.84">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="34" default-y="-132.84">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="34" default-y="-122.84">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental cautionary="yes" parentheses="no">natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="46" default-y="-117.84">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="74.54" default-y="-152.84" print-object="no">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="115.09" default-y="-152.84" print-object="no">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="34" default-y="-212.84">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="34" default-y="-177.84">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="74.54" default-y="-162.84" print-object="no">
        <rest />
        <duration>12</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="115.09" default-y="-162.84" print-object="no">
        <rest />
        <duration>24</duration>
        <voice>6</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="20" width="372.89">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>108.35</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>67.48</staff-distance>
          </staff-layout>
        </print>
      <note default-x="81.12" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="99.97" default-y="-10" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="118.81" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="137.65" default-y="-10" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="156.49" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="175.33" default-y="-30" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="194.18" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="214.18" default-y="-10" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="233.02" default-y="-20" print-object="no">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="81.12" default-y="-30" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="99.97" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="118.81" default-y="-20" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="137.65" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="156.49" default-y="-30" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="175.33" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="194.18" default-y="-30" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="214.18" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="233.02" default-y="-30" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="251.86" default-y="-30" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="270.7" default-y="-30" print-object="no">
        <rest />
        <duration>6</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="308.39" default-y="-30" print-object="no">
        <rest />
        <duration>12</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="81.12" default-y="-127.48" print-object="no">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="233.02" default-y="-97.48">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="251.86" default-y="-117.48" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="270.7" default-y="-107.48">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="289.54" default-y="-117.48" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      <note default-x="308.39" default-y="-117.48">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="327.23" default-y="-117.48" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="346.07" default-y="-127.48">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="364.91" default-y="-127.48" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="81.12" default-y="-137.48" print-object="no">
        <rest />
        <duration>24</duration>
        <voice>6</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="233.02" default-y="-137.48" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>6</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      <note default-x="251.86" default-y="-107.48">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>6</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="270.7" default-y="-107.48" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>6</voice>
        <type>16th</type>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="289.54" default-y="-117.48">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>6</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="308.39" default-y="-137.48" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>6</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      <note default-x="327.23" default-y="-127.48">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>6</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="346.07" default-y="-137.48" print-object="no">
        <rest />
        <duration>6</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="21" width="317.43">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="0.36" default-y="-38.3" relative-y="-40">
            <fp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89" />
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">reprise du motif, fp</words></direction-type><staff>2</staff></direction><note default-x="151.31" default-y="-10" print-object="no">
        <rest measure="yes" />
        <duration>48</duration>
        <voice>1</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-109.2" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="10" default-y="-182.48">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="28.84" default-y="-147.48">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="59.68" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="66.53" default-y="-127.48">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="85.37" default-y="-112.48">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="104.21" default-y="-147.48">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="135.05" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="141.89" default-y="-127.48">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="160.73" default-y="-112.48">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="179.58" default-y="-147.48">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="210.42" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="217.26" default-y="-127.48">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="236.1" default-y="-112.48">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="254.94" default-y="-147.48">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="285.79" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="292.63" default-y="-122.48">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="22" width="277.4">
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-68.46" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="131.3" default-y="-10" print-object="no">
        <rest measure="yes" />
        <duration>48</duration>
        <voice>1</voice>
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
      <note default-x="10" default-y="-107.48">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="28.84" default-y="-112.48">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="47.68" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="54.52" default-y="-117.48">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="76.02" default-y="-102.48">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="94.87" default-y="-112.48">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="113.71" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="120.55" default-y="-112.48">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="142.05" default-y="-97.48">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="160.89" default-y="-112.48">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="179.73" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="186.57" default-y="-107.48">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="208.07" default-y="-92.48">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="226.91" default-y="-112.48">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="245.76" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="252.6" default-y="-102.48">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      </measure>
    <measure number="23" width="321.25">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>108.35</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>82.84</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.62" default-y="-31.22" relative-y="-40">
            <ff />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="106.67" />
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step></root><kind text="7">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">ff : V7/vi…</words></direction-type><staff>2</staff></direction><note default-x="87.19" default-y="-20" print-object="no">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="125.93" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <tie type="start" />
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <accent default-x="-0.72" default-y="21.36" />
            </articulations>
          </notations>
        </note>
      <note default-x="164.67" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="181.89" default-y="-10" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="199.11" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="227.57" default-y="-10" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="244.79" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="262.01" default-y="-10" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="279.23" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="296.45" default-y="-10" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="87.19" default-y="-30" print-object="no">
        <rest />
        <duration>12</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="125.93" default-y="-30" print-object="no">
        <rest />
        <duration>12</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="164.67" default-y="-30" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="181.89" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="199.11" default-y="0" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="227.57" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="244.79" default-y="-30" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="262.01" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="279.23" default-y="-20" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="296.45" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-143.88" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="87.19" default-y="-152.84">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="87.19" default-y="-132.84">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="87.19" default-y="-122.84">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="99.19" default-y="-117.84">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="125.93" default-y="-142.84" print-object="no">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="164.67" default-y="-142.84" print-object="no">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="87.19" default-y="-212.84">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="87.19" default-y="-177.84">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>6</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="125.93" default-y="-152.84" print-object="no">
        <rest />
        <duration>12</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="164.67" default-y="-152.84" print-object="no">
        <rest />
        <duration>24</duration>
        <voice>6</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="24" width="312.1">
      <note default-x="10" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="27.22" default-y="-20" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="44.44" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="72.9" default-y="-10" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="90.12" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="110.12" default-y="-40" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="132.62" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="155.12" default-y="-10" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="172.34" default-y="-20" print-object="no">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="10" default-y="-30" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="27.22" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="44.44" default-y="-30" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="72.9" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="90.12" default-y="-30" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="110.12" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="132.62" default-y="-30" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="155.12" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="172.34" default-y="-30" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="189.56" default-y="-30" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="206.78" default-y="-30" print-object="no">
        <rest />
        <duration>6</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="252.46" default-y="-30" print-object="no">
        <rest />
        <duration>12</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="10" default-y="-142.84" print-object="no">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="172.34" default-y="-122.84">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="189.56" default-y="-132.84" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="206.78" default-y="-132.84">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="235.24" default-y="-132.84" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      <note default-x="252.46" default-y="-142.84">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="269.68" default-y="-142.84" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="286.9" default-y="-152.84">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="304.12" default-y="-142.84" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="10" default-y="-152.84" print-object="no">
        <rest />
        <duration>24</duration>
        <voice>6</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="172.34" default-y="-152.84" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>6</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      <note default-x="189.56" default-y="-132.84">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>6</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="206.78" default-y="-132.84" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>6</voice>
        <type>16th</type>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="235.24" default-y="-142.84">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>6</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="252.46" default-y="-152.84" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>6</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      <note default-x="269.68" default-y="-152.84">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>6</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="286.9" default-y="-152.84" print-object="no">
        <rest />
        <duration>6</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="25" width="334.37">
      <attributes>
        <clef number="1">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="0.36" default-y="-45.98" relative-y="-40">
            <fp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89" />
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>E</root-step></root><kind text="m">minor</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">…mi mineur (relatif) : le motif au vi</words></direction-type><staff>2</staff></direction><note default-x="159.78" default-y="-10" print-object="no">
        <rest measure="yes" />
        <duration>48</duration>
        <voice>1</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-143.88" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="10" default-y="-207.84">
        <pitch>
          <step>E</step>
          <octave>1</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="32.5" default-y="-172.84">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="61.72" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="78.94" default-y="-30">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="96.16" default-y="-137.84">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="113.38" default-y="-172.84">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="142.6" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="159.82" default-y="-30">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="177.04" default-y="-137.84">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="194.25" default-y="-172.84">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="223.47" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="240.69" default-y="-30">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="257.91" default-y="-137.84">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="275.13" default-y="-172.84">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="304.35" default-y="0">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="309.57" default-y="-147.84">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      </measure>
    <measure number="26" width="531.42">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>114.9</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>67.5</staff-distance>
          </staff-layout>
        </print>
      <note default-x="286.37" default-y="-10" print-object="no">
        <rest measure="yes" />
        <duration>48</duration>
        <voice>1</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-75" spread="12" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="81.12" default-y="-117.5">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="106.16" default-y="-122.5">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="143.19" default-y="5">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="168.22" default-y="-20">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="193.25" default-y="-112.5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="218.28" default-y="-122.5">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="255.31" default-y="10">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="280.34" default-y="-15">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="305.37" default-y="-107.5">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="330.4" default-y="-122.5">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="367.44" default-y="15">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="392.47" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="417.5" default-y="-102.5">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="442.53" default-y="-122.5">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="479.56" default-y="20">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="504.59" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="27" width="436.3">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">marche descendante sur basse Mi–Ré–Do–Si (accords de 7e diatoniques)</words></direction-type><staff>2</staff></direction><note default-x="10" default-y="-20" print-object="no">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="122.12" default-y="-20" print-object="no">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <attributes>
        <clef number="1">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="172.19" default-y="-20" print-object="no">
        <rest />
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
        </note>
      <note default-x="222.25" default-y="-20" print-object="no">
        <rest />
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-84.2" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="10" default-y="-122.5">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="35.03" default-y="-157.5">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="72.06" default-y="10">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="72.06" default-y="25">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="97.09" default-y="-10">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="122.12" default-y="-87.5">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="147.16" default-y="-122.5">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="172.19" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="172.19" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="197.22" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="222.25" default-y="-92.5">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="247.28" default-y="-127.5">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="284.31" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="284.31" default-y="0">
        <chord />
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="309.34" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="334.37" default-y="-117.5">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="359.4" default-y="-162.5">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="396.44" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="396.44" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="409.47" default-y="-117.5">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      </measure>
    <measure number="28" width="402.34">
      <print new-page="yes" page-number="3">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>70</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>87.57</staff-distance>
          </staff-layout>
        </print>
      <note default-x="221.83" default-y="-10" print-object="no">
        <rest measure="yes" />
        <duration>48</duration>
        <voice>1</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-133.98" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="81.12" default-y="-147.57">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="99.15" default-y="-182.57">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="129.19" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="129.19" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="135.21" default-y="-142.57">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="155.21" default-y="-112.57">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="173.24" default-y="-147.57">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="203.27" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="203.27" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="221.3" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="239.33" default-y="-117.57">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="257.36" default-y="-152.57">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="287.39" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="287.39" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="305.42" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="323.45" default-y="-152.57">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="341.48" default-y="-187.57">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="371.51" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="371.51" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="377.54" default-y="-142.57">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      </measure>
    <measure number="29" width="278.79">
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">fz : secousse chromatique (La#°7 sur Do) →</words></direction-type><staff>2</staff></direction><note default-x="132" default-y="-10" print-object="no">
        <rest measure="yes" />
        <duration>48</duration>
        <voice>1</voice>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="18.06" default-y="-132.57">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="18.06" default-y="-117.57">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="18.06" default-y="-107.57">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="45.11" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <tied type="start" orientation="over" placement="above" />
          <articulations>
            <accent placement="above" default-x="-0.72" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="72.15" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="90.18" default-y="-137.57" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="108.21" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="126.24" default-y="-137.57" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      <note default-x="144.27" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="162.3" default-y="-137.57" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="180.33" default-y="-127.57">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="198.36" default-y="-137.57" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      <note default-x="216.39" default-y="-142.57">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement="above">
        <direction-type>
          <dynamics default-x="-4.16" default-y="35.18" relative-y="30">
            <fz />
            </dynamics>
          </direction-type>
        <staff>2</staff>
        <sound dynamics="100" />
        </direction>
      <note default-x="243.43" default-y="-142.57">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="56.98" />
            </articulations>
          </notations>
        </note>
      <note default-x="243.43" default-y="-127.57">
        <chord />
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="243.43" default-y="-107.57">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="18.06" default-y="-187.57">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="18.06" default-y="-152.57">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="45.11" default-y="-157.57" print-object="no">
        <rest />
        <duration>6</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="72.15" default-y="-157.57" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>6</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      <note default-x="90.18" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>6</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="108.21" default-y="-157.57" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>6</voice>
        <type>16th</type>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="126.24" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>6</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="144.27" default-y="-157.57" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>6</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      <note default-x="162.3" default-y="-127.57">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>6</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="180.33" default-y="-147.57" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>6</voice>
        <type>16th</type>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="198.36" default-y="-152.57">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>6</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="216.39" default-y="-157.57" print-object="no">
        <rest />
        <duration>6</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="243.43" default-y="-187.57">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-96.98" />
            </articulations>
          </notations>
        </note>
      <note default-x="243.43" default-y="-152.57">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="30" width="286.58">
      <harmony placement="above" print-frame="no"><root><root-step>B</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">PÉDALE DE DOMINANTE de mi (Si, 9 mesures !) : oscillations i6/4 ↔ vii°</words></direction-type><staff>2</staff></direction><note default-x="18.06" default-y="-20" print-object="no">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-y="-50.54" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="71.11" />
        </direction>
      <note default-x="56.52" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="74.54" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="92.57" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="110.6" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="132.1" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="150.13" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="168.16" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="186.19" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="207.69" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="225.72" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="243.75" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="261.78" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
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
      <direction placement="above">
        <direction-type>
          <dynamics default-x="-4.16" default-y="32.68" relative-y="30">
            <fz />
            </dynamics>
          </direction-type>
        <staff>2</staff>
        <sound dynamics="100" />
        </direction>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-133.98" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="18.06" default-y="-137.57">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="7.93" default-y="51.98" />
            </articulations>
          </notations>
        </note>
      <note default-x="18.06" default-y="-122.57">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="18.06" default-y="-112.57">
        <chord />
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="45.11" default-y="-147.57" print-object="no">
        <rest />
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="56.52" default-y="-147.57" print-object="no">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="132.1" default-y="-147.57" print-object="no">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="207.69" default-y="-147.57" print-object="no">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="18.06" default-y="-192.57">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>6</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="1.93" default-y="-101.98" />
            </articulations>
          </notations>
        </note>
      <note default-x="18.06" default-y="-157.57">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="45.11" default-y="-157.57" print-object="no">
        <rest />
        <duration>6</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="56.52" default-y="-157.57" print-object="no">
        <rest />
        <duration>12</duration>
        <voice>6</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="132.1" default-y="-157.57" print-object="no">
        <rest />
        <duration>24</duration>
        <voice>6</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="31" width="367.67">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>151.48</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="81.12" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="97.56" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="114" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="130.44" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="151.94" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="168.37" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="184.81" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="201.25" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="222.75" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="239.18" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="255.62" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="272.06" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="293.56" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="309.99" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="326.43" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="342.87" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="204.5" default-y="-115" print-object="no">
        <rest measure="yes" />
        <duration>48</duration>
        <voice>5</voice>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="32" width="296.54">
      <note default-x="10" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="26.44" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="42.87" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="59.31" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="80.81" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="97.25" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="113.68" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="130.12" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="151.62" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="168.06" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="184.5" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="200.93" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="222.43" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="238.87" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="255.31" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="271.74" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="140.87" default-y="-115" print-object="no">
        <rest measure="yes" />
        <duration>48</duration>
        <voice>5</voice>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="33" width="303.51">
      <note default-x="10" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="26.44" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="42.87" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="59.31" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="80.81" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="97.25" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="113.68" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="130.12" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="158.58" default-y="-15">
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
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="175.02" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="191.46" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="207.89" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="229.39" default-y="-15">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="245.83" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="262.27" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="278.71" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="144.35" default-y="-115" print-object="no">
        <rest measure="yes" />
        <duration>48</duration>
        <voice>5</voice>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="34" width="369.53">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>94.29</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="84.09" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="100.43" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="116.78" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="133.12" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="154.62" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="170.97" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="187.31" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="203.66" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="225.16" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="241.5" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="257.84" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="274.19" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="295.69" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="312.03" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-y="-45.83" relative-y="-40">
            <other-dynamics>più</other-dynamics>
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="65.56" />
        </direction>
      <note default-x="328.38" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="344.72" default-y="-10">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="205.42" default-y="-115" print-object="no">
        <rest measure="yes" />
        <duration>48</duration>
        <voice>5</voice>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="35" width="295.44">
      <note default-x="10" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <accent placement="above" default-x="-0.72" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="26.34" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="42.69" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="59.03" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="80.53" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="96.88" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="113.22" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="129.57" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="151.07" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="167.41" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="183.76" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="200.1" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="221.6" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="237.95" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="254.29" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="270.64" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="140.32" default-y="-115" print-object="no">
        <rest measure="yes" />
        <duration>48</duration>
        <voice>5</voice>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="36" width="302.75">
      <note default-x="10" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="26.34" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="42.69" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="59.03" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="80.53" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="96.88" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="113.22" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="129.57" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="151.07" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="167.41" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="187.42" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="203.76" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="225.26" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="241.61" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="261.61" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="277.95" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="143.98" default-y="-115" print-object="no">
        <rest measure="yes" />
        <duration>48</duration>
        <voice>5</voice>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="37" width="521.75">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>94.29</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>73.84</staff-distance>
          </staff-layout>
        </print>
      <note default-x="81.12" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="108.02" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="134.93" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="161.83" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="188.73" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="215.63" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="242.53" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="269.43" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="296.33" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="323.23" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="356.99" default-y="-50">
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
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="385.45" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="412.35" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="439.25" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="466.15" default-y="-50">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="493.05" default-y="-25">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="281.54" default-y="-123.84" print-object="no">
        <rest measure="yes" />
        <duration>48</duration>
        <voice>5</voice>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="38" width="445.97">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="0.72" default-y="-61.77" relative-y="-40">
            <pp />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="54.44" />
        </direction>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">Si majeur / si mineur alternés (Ré# vs Ré♮) : la pédale hésite…</words></direction-type><staff>2</staff></direction><note default-x="10" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="36.9" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="67.56" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="94.46" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="121.36" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="148.26" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="175.16" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="202.06" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="228.96" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="255.86" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="282.77" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="309.67" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="336.57" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="363.47" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="390.37" default-y="-45">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="417.27" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="215.58" default-y="-123.84" print-object="no">
        <rest measure="yes" />
        <duration>48</duration>
        <voice>5</voice>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="39" width="519.42">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>94.29</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>85.32</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-105.81" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="81.12" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="108.41" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="135.69" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="162.97" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="190.25" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="217.53" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="244.81" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="272.09" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="299.37" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="326.65" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="353.94" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="381.22" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="408.5" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="435.78" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="463.06" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="490.34" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="280.37" default-y="-135.32" print-object="no">
        <rest measure="yes" />
        <duration>48</duration>
        <voice>5</voice>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="40" width="448.3">
      <direction placement="below">
        <direction-type>
          <dynamics default-y="-31.24" relative-y="-40">
            <f />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89" />
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>A</root-step></root><kind text="m7">minor-seventh</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">…et glisse en ii7 de Sol : résolution déceptive</words></direction-type><staff>2</staff></direction><note default-x="10" default-y="-20">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="119.12" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="146.41" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="173.69" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="200.97" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="228.25" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="255.53" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="282.81" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="310.09" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="337.37" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="29.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="364.65" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="391.94" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="419.22" default-y="40">
        <pitch>
          <step>G</step>
          <octave>6</octave>
          </pitch>
        <duration>3</duration>
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
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-117.6" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="10" default-y="-195.32">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-79.32" />
            </articulations>
          </notations>
        </note>
      <note default-x="10" default-y="-160.32">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="37.28" default-y="-140.32">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="64.56" default-y="-130.32">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="91.84" default-y="-115.32">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="119.12" default-y="-145.32" print-object="no">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="228.25" default-y="-145.32" print-object="no">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="41" width="651.69">
      <print new-page="yes" page-number="4">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>70</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>67.5</staff-distance>
          </staff-layout>
        </print>
      <harmony placement="above" print-frame="no"><root><root-step>D</root-step></root><kind text="7">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V7 — la fenêtre de retour</words></direction-type><staff>2</staff></direction><note default-x="81.12" default-y="35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>6</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="44.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="103.63" default-y="30">
        <pitch>
          <step>E</step>
          <octave>6</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="126.13" default-y="25">
        <pitch>
          <step>D</step>
          <octave>6</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="148.63" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="171.13" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="193.63" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="214.83" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="236.04" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="257.24" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="278.44" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="299.64" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="320.85" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="342.05" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="363.25" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="384.45" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="405.66" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="426.86" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="448.06" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="457.26" default-y="-102.5">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="478.47" default-y="-107.5">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="499.67" default-y="-112.5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="520.87" default-y="-117.5">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="542.07" default-y="-122.5">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="563.28" default-y="-127.5">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="584.48" default-y="-132.5">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="605.68" default-y="-137.5">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="626.88" default-y="-142.5">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <backup>
        <duration>81</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-127.7" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="81.12" default-y="-127.5">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="34.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="81.12" default-y="-107.5">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="81.12" default-y="-97.5">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="81.12" default-y="-82.5">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="171.13" default-y="-127.5" print-object="no">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <note default-x="257.24" default-y="-127.5" print-object="no">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="426.86" default-y="-127.5" print-object="no">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note default-x="584.48" default-y="-127.5" print-object="no">
        <rest />
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="626.88" default-y="-127.5" print-object="no">
        <rest />
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="42" width="316.03">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-2" default-y="-38.31" relative-y="-40">
            <fz />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="100" />
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">Sol : I (fz) — zone de réexposition</words></direction-type><staff>2</staff></direction><note default-x="10" default-y="-20">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="57.71" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <accent default-x="2.28" default-y="34" />
            </articulations>
          </notations>
        </note>
      <note default-x="227.62" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="270.03" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="10" default-y="-30" print-object="no">
        <rest />
        <duration>12</duration>
        <voice>2</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="57.71" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>2</voice>
        <type>half</type>
        <dot default-x="74.21" default-y="-35" />
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-127.7" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="10" default-y="-182.5">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="-84.3" />
            <accent default-x="-0.72" default-y="-89.42" />
            </articulations>
          </notations>
        </note>
      <note default-x="10" default-y="-147.5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="57.71" default-y="-137.5">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="78.91" default-y="-112.5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="100.11" default-y="-137.5">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="121.31" default-y="-147.5">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="142.52" default-y="-132.5">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="163.72" default-y="-107.5">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="184.92" default-y="-132.5">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="206.12" default-y="-147.5">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="227.62" default-y="-127.5">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="248.83" default-y="-102.5">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="270.03" default-y="-127.5">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="291.23" default-y="-147.5">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="43" width="367.28">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>120.94</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="81.12" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot default-x="97.63" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        </note>
      <note default-x="133.4" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        </note>
      <note default-x="150.82" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="220.52" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="290.21" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="81.12" default-y="-120">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="98.55" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="115.97" default-y="-120">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="133.4" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="150.82" default-y="-115">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="168.24" default-y="-90">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="185.67" default-y="-115">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="203.09" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="220.52" default-y="-120">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="237.94" default-y="-95">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="255.36" default-y="-120">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="272.79" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="290.21" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="307.63" default-y="-100">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="325.06" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="342.48" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      </measure>
    <measure number="44" width="296.16">
      <note default-x="10" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="149.39" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <ornaments>
            <trill-mark />
            <wavy-line type="start" number="1" default-y="10.55" />
            <wavy-line type="stop" number="1" />
            </ornaments>
          </notations>
        </note>
      <note default-x="264.66" default-y="-40">
        <grace />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="276.76" default-y="-35">
        <grace />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
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
      <note default-x="10" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="27.42" default-y="-105">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="44.85" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="62.27" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="79.7" default-y="-135">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="97.12" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="114.54" default-y="-135">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="131.97" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="149.39" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="166.81" default-y="-115">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="184.24" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="201.66" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="219.09" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="236.51" default-y="-115">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="253.93" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="271.36" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      </measure>
    <measure number="45" width="304.28">
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="7">dominant</kind><bass><bass-step>F</bass-step></bass></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">G7/Fa (V4/2/IV) : l'expansion plagale</words></direction-type><staff>2</staff></direction><note default-x="10" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="26.5" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="227.2" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="244.63" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="262.05" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="279.48" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="10" default-y="-135">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="27.42" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="44.85" default-y="-135">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="62.27" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="79.7" default-y="-135">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="97.12" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="114.54" default-y="-135">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="131.97" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="149.39" default-y="-135">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="166.81" default-y="-110">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="184.24" default-y="-135">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="201.66" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="227.2" default-y="-150">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-54.32" />
            </articulations>
          </notations>
        </note>
      <note default-x="227.2" default-y="-115">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="46" width="378.94">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>120.94</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="81.12" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="98.43" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="115.74" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="133.04" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="150.35" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="167.65" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="184.96" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="202.26" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="223.76" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="241.07" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="258.38" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="284.92" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="302.22" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="319.53" default-y="0">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="336.84" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="354.14" default-y="-35">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
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
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-102.6" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="81.12" default-y="-155">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-59.32" />
            </articulations>
          </notations>
        </note>
      <note default-x="81.12" default-y="-120">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-102.6" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="223.76" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="-64.32" />
            </articulations>
          </notations>
        </note>
      <note default-x="223.76" default-y="-125">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="47" width="294.39">
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-75.79" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>C</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">IV</words></direction-type><staff>2</staff></direction><note default-x="10" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="27.31" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="44.61" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="61.92" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="79.22" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="96.53" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="113.83" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="131.14" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="148.45" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="165.75" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="183.06" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="200.36" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="217.67" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="234.98" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="252.28" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="269.59" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
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
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-102.6" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="10" default-y="-165">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="26.5" default-y="-160" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="10" default-y="-130">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="26.5" default-y="-130" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="217.67" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="217.67" default-y="-95">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="48" width="294.39">
      <note default-x="10" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="27.31" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="44.61" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="61.92" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="79.22" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="96.53" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="113.83" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="131.14" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="148.45" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="165.75" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="183.06" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="200.36" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="217.67" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="234.98" default-y="20">
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="252.28" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="269.59" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
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
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-102.6" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="10" default-y="-135">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="10" default-y="-100">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-102.6" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="148.45" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="148.45" default-y="-105">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="49" width="370.59">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>120.94</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>72.84</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-3.62" default-y="-35.19" relative-y="-40">
            <ff />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="106.67" />
        </direction>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">ff : grande cadence — chaîne de 7es descendantes (basse Mi–Ré–Do–Si–La)</words></direction-type><staff>2</staff></direction><note default-x="81.12" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="9.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="101.13" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="118.6" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="136.08" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="153.55" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="171.03" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="188.51" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="205.98" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="223.46" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="240.93" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="258.41" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="275.89" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="293.36" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="310.84" default-y="15">
        <pitch>
          <step>B</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="328.31" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="345.79" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
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
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-80" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="81.12" default-y="-152.84">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="97.63" default-y="-147.84" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="81.12" default-y="-117.84">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="97.63" default-y="-117.84" />
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="293.36" default-y="-117.84">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="293.36" default-y="-82.84">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="50" width="300.19">
      <note default-x="10" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <accent default-x="-0.72" default-y="4.55" />
            </articulations>
          </notations>
        </note>
      <note default-x="30.72" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="48.2" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="65.67" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="83.15" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="100.63" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="118.1" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="135.58" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="153.05" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="170.53" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="188.01" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="205.48" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="222.96" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="240.43" default-y="10">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="257.91" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="275.39" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
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
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-80" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="10" default-y="-122.84">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="26.5" default-y="-117.84" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="10" default-y="-87.84">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>5</voice>
        <type>half</type>
        <dot default-x="26.5" default-y="-87.84" />
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="222.96" default-y="-157.84">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="222.96" default-y="-122.84">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="51" width="296.94">
      <note default-x="10" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="27.48" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="44.95" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="62.43" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="79.9" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="97.38" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="114.86" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="132.33" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="149.81" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="167.28" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="184.76" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="202.24" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="219.71" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="237.19" default-y="0">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="254.66" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="272.14" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="10" default-y="-162.84">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="10" default-y="-127.84">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="79.9" default-y="-127.84">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="79.9" default-y="-92.84">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="149.81" default-y="-132.84">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="149.81" default-y="-97.84">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="219.71" default-y="-167.84">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="219.71" default-y="-132.84">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="52" width="369.67">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>120.94</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="81.12" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="98.71" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="116.29" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="133.87" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="151.46" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="169.04" default-y="-5">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="186.62" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="204.2" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="221.79" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="239.37" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="256.95" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="274.54" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="292.12" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="309.7" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="327.28" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="344.87" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="81.12" default-y="-165">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="81.12" default-y="-130">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="151.46" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="151.46" default-y="-95">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="221.79" default-y="-135">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="221.79" default-y="-100">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="292.12" default-y="-170">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="292.12" default-y="-135">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="53" width="298.54">
      <note default-x="10" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="27.58" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="45.17" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="62.75" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="80.33" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="97.91" default-y="-15">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="115.5" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="133.08" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="150.66" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="168.25" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="185.83" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="203.41" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="220.99" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="238.58" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="256.16" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="273.74" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="10" default-y="-175">
        <pitch>
          <step>A</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="10" default-y="-140">
        <chord />
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="80.33" default-y="-140">
        <pitch>
          <step>A</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="80.33" default-y="-105">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="150.66" default-y="-170">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="150.66" default-y="-135">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="220.99" default-y="-165">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="220.99" default-y="-130">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="54" width="299.51">
      <direction placement="below">
        <direction-type>
          <wedge type="diminuendo" default-y="-84.59" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="10.96" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations print-object="no">
          <fermata type="upright" default-y="4" relative-y="10" />
          </notations>
        </note>
      <note default-x="28.54" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <fermata type="upright" default-y="4" relative-y="10" />
          </notations>
        </note>
      <note default-x="46.13" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <fermata type="upright" default-y="4" relative-y="10" />
          </notations>
        </note>
      <note default-x="63.71" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations print-object="no">
          <fermata type="upright" default-y="4" relative-y="10" />
          </notations>
        </note>
      <note default-x="81.29" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations print-object="no">
          <fermata type="upright" default-y="4" relative-y="10" />
          </notations>
        </note>
      <note default-x="98.87" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <fermata type="upright" default-y="4" relative-y="10" />
          </notations>
        </note>
      <note default-x="116.46" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <fermata type="upright" default-y="4" relative-y="10" />
          </notations>
        </note>
      <note default-x="134.04" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations print-object="no">
          <fermata type="upright" default-y="4" relative-y="10" />
          </notations>
        </note>
      <note default-x="151.62" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations print-object="no">
          <fermata type="upright" default-y="4" relative-y="10" />
          </notations>
        </note>
      <note default-x="169.21" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <fermata type="upright" default-y="4" relative-y="10" />
          </notations>
        </note>
      <note default-x="186.79" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <fermata type="upright" default-y="4" relative-y="10" />
          </notations>
        </note>
      <note default-x="204.37" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations print-object="no">
          <fermata type="upright" default-y="4" relative-y="10" />
          </notations>
        </note>
      <note default-x="221.96" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations print-object="no">
          <fermata type="upright" default-y="4" relative-y="10" />
          </notations>
        </note>
      <note default-x="239.54" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <fermata type="upright" default-y="4" relative-y="10" />
          </notations>
        </note>
      <note default-x="257.12" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations print-object="no">
          <fermata type="upright" default-y="4" relative-y="10" />
          </notations>
        </note>
      <note default-x="274.7" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations print-object="no">
          <fermata type="upright" default-y="4" relative-y="10" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="10" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="10" default-y="-125">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="55" width="519.42">
      <print new-page="yes" page-number="5">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>70</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <dynamics default-y="-39.38" relative-y="-40">
            <p />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="71.11" />
        </direction>
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">I</words></direction-type><staff>2</staff></direction><note default-x="81.12" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="108.41" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="135.69" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="162.97" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="190.25" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="217.53" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="244.81" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="272.09" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="299.37" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="326.65" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="353.94" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="381.22" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="408.5" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="435.78" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="463.06" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="490.34" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
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
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-122.6" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="81.12" default-y="-180">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <articulations>
            <accent default-x="-0.72" default-y="-84.32" />
            </articulations>
          </notations>
        </note>
      <note default-x="81.12" default-y="-145">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          </notations>
        </note>
      <note default-x="299.37" default-y="-180">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="299.37" default-y="-145">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          </notations>
        </note>
      <note default-x="408.5" default-y="-125">
        <rest />
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="56" width="448.3">
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <direction placement="below">
        <direction-type>
          <words default-y="-45.52" relative-y="-35" font-style="italic" font-size="11">tranquillo</words>
          </direction-type>
        <staff>1</staff>
        </direction>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">tranquillo : thème de clôture sur pédale de tonique</words></direction-type><staff>2</staff></direction><note default-x="10" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="37.28" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="64.56" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="91.84" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="119.12" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="146.41" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="173.69" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="200.97" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="228.25" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="255.53" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="282.81" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="310.09" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="337.37" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="364.65" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="391.94" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="419.22" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
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
      <direction placement="below">
        <direction-type>
          <words default-y="-40" relative-x="21.5" relative-y="-37.62" font-style="italic" font-size="11">cantabile</words>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="10" default-y="-110">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="228.25" default-y="-110">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="244.75" default-y="-110" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="4.3" />
            </articulations>
          </notations>
        </note>
      <note default-x="391.94" default-y="-110">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="10.89767" bezier-y="11.386171" number="1" />
          </notations>
        </note>
      </measure>
    <measure number="57" width="524.75">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>117.89</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="80.16" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="107.11" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="134.06" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="161.01" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="187.96" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="214.9" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="241.85" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="268.8" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="295.75" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="322.7" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="349.64" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="376.59" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="403.54" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="430.49" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="457.44" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="489.32" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="80.16" default-y="-130">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-5.240154" bezier-y="8.421797" />
          </notations>
        </note>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="187.96" default-y="-125">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="23.275522" bezier-y="14.503772" number="1" />
          </notations>
        </note>
      <note default-x="295.75" default-y="-145">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-20.210186" bezier-y="18.538007" />
          </notations>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="403.54" default-y="-125">
        <rest />
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="457.44" default-y="-130">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <slur type="start" bezier-x="14.625013" bezier-y="20.109385" number="1" />
          </notations>
        </note>
      <note default-x="478.69" default-y="-125">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="499.95" default-y="-120">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          </notations>
        </note>
      </measure>
    <measure number="58" width="442.97">
      <note default-x="10" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="36.95" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="63.9" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="90.84" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="117.79" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="144.74" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="171.69" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="198.64" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="225.58" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="252.53" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="279.48" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="306.43" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="333.38" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="360.32" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="387.27" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="414.22" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="10" default-y="-115">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-23.860106" bezier-y="6.998122" />
          <articulations>
            <tenuto default-x="0.18" default-y="4.08" />
            </articulations>
          </notations>
        </note>
      <note default-x="225.58" default-y="-115">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>18</duration>
        <voice>5</voice>
        <type>quarter</type>
        <dot default-x="242.08" default-y="-110" />
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <articulations>
            <tenuto default-x="0.18" default-y="4.08" />
            </articulations>
          </notations>
        </note>
      <note default-x="387.27" default-y="-115">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="11.319846" bezier-y="10.684909" number="1" />
          </notations>
        </note>
      </measure>
    <measure number="59" width="512.63">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>117.89</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>68.52</staff-distance>
          </staff-layout>
        </print>
      <note default-x="80.16" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="106.33" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="132.5" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="158.67" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="184.84" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="211.01" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="237.18" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="263.35" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="289.52" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="315.69" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="341.86" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="368.03" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="394.2" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="420.37" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="446.54" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="477.5" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
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
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-80" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="80.16" default-y="-138.52">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-5.986615" bezier-y="7.862788" />
          </notations>
        </note>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="184.84" default-y="-128.52">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="22.669973" bezier-y="14.261351" number="1" />
          </notations>
        </note>
      <note default-x="289.52" default-y="-148.52">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-19.559788" bezier-y="18.295586" />
          </notations>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="394.2" default-y="-128.52">
        <rest />
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="446.54" default-y="-138.52">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <slur type="start" bezier-x="18.97391" bezier-y="12.639535" number="1" />
          </notations>
        </note>
      <note default-x="467.18" default-y="-133.52">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="487.83" default-y="-128.52">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="60" width="455.09">
      <note default-x="10" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="36.17" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="62.34" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="88.51" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="114.68" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="140.85" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="167.02" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="193.19" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="219.36" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="245.53" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="271.7" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="297.87" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="324.04" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="350.21" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="376.37" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="407.34" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="10" default-y="-123.52">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-15.110257" bezier-y="17.071827" />
          <articulations>
            <tenuto default-x="0.18" default-y="-5.92" />
            </articulations>
          </notations>
        </note>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-80" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="219.36" default-y="-148.52">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="324.04" default-y="-128.52">
        <rest />
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="376.37" default-y="-143.52">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <slur type="start" bezier-x="15.454898" bezier-y="12.121774" number="1" />
          </notations>
        </note>
      <note default-x="397.02" default-y="-138.52">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="425.7" default-y="-133.52">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="61" width="378.82">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>117.89</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>73.07</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <clef number="1">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <note default-x="81.12" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="98.4" default-y="15">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="115.68" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="132.96" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="150.24" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="167.51" default-y="15">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="184.79" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="202.07" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="219.35" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="236.63" default-y="10">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="253.9" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="271.18" default-y="-15">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="288.46" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="305.74" default-y="10">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="323.01" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="346.27" default-y="-15">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="81.12" default-y="-133.07">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-5.098607" bezier-y="7.270564" />
          <articulations>
            <tenuto default-x="0.18" default-y="-5.92" />
            </articulations>
          </notations>
        </note>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-82.72" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="219.35" default-y="-153.07">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="288.46" default-y="-133.07">
        <rest />
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
        </note>
      <note default-x="323.01" default-y="-153.07">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tuplet type="start" bracket="no" />
          <slur type="start" bezier-x="17.663438" bezier-y="-11.11387" number="1" />
          </notations>
        </note>
      <note default-x="338.52" default-y="-148.07">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="354.02" default-y="-143.07">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tuplet type="stop" />
          </notations>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="62" width="293.97">
      <note default-x="10" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="27.28" default-y="10">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="44.56" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="61.83" default-y="-15">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="79.11" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="96.39" default-y="10">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="113.67" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="130.95" default-y="-15">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-72.01" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="148.22" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="165.5" default-y="10">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="182.78" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="200.06" default-y="-15">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="217.33" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="234.61" default-y="10">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="251.89" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="269.17" default-y="-15">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="10" default-y="-138.07">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-15.016037" bezier-y="-14.492542" />
          <articulations>
            <staccato default-x="4.93" default-y="-33.44" />
            </articulations>
          </notations>
        </note>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-82.72" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="79.11" default-y="-153.07">
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="148.22" default-y="-148.07">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <ornaments>
            <trill-mark />
            <wavy-line type="start" number="1" default-y="10.55" />
            </ornaments>
          </notations>
        </note>
      </measure>
    <measure number="63" width="294.93">
      <note default-x="10.96" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="28.24" default-y="5">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="45.52" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="62.79" default-y="-20">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="80.07" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="97.35" default-y="5">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="114.63" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="131.91" default-y="-20">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="149.18" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="166.46" default-y="0">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="183.74" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="201.02" default-y="-25">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="218.3" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="235.57" default-y="0">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="252.85" default-y="-10">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="270.13" default-y="-25">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
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
      <note default-x="10" default-y="-148.07">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <ornaments>
            <wavy-line type="stop" number="1" />
            </ornaments>
          </notations>
        </note>
      <note default-x="263.43" default-y="-153.07">
        <grace />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur type="start" orientation="under" placement="below" bezier-x="6.359958" bezier-y="-7.086782" number="1" />
          </notations>
        </note>
      <note default-x="275.53" default-y="-148.07">
        <grace />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="64" width="386.08">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>117.89</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>75.97</staff-distance>
          </staff-layout>
        </print>
      <direction placement="below">
        <direction-type>
          <dynamics default-y="-49.66" relative-y="-40">
            <f />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89" />
        </direction>
      <direction placement="below"><direction-type><words font-style="italic" font-size="10">coda fz : cycle V/ii – V/V – V4/2/IV, couleur #11 (m.70)</words></direction-type><staff>2</staff></direction><note default-x="81.12" default-y="-20">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="98.45" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="115.77" default-y="-20">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="133.09" default-y="-30">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-x="-4.16" default-y="-51.52" relative-y="-40">
            <fz />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="100" />
        </direction>
      <note default-x="150.41" default-y="-20">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="167.73" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="185.05" default-y="-20">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="202.37" default-y="-30">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="219.69" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="237.01" default-y="5">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="254.33" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="271.65" default-y="-20">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="crescendo" default-y="-88.64" spread="12" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="288.97" default-y="5">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="308.98" default-y="15">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="328.98" default-y="5">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="346.3" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="81.12" default-y="-145.97">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-4.291793" bezier-y="-7.824061" />
          <articulations>
            <staccato default-x="4.93" default-y="-43.44" />
            </articulations>
          </notations>
        </note>
      <attributes>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-109.2" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="150.41" default-y="-190.97">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="150.41" default-y="-155.97">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="219.69" default-y="-135.97">
        <rest />
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="65" width="265.48">
      <attributes>
        <clef number="1">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="10" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="27.32" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="44.64" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="64.64" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="81.96" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="99.28" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="116.61" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="133.93" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="155.43" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="172.75" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="190.07" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="207.39" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <direction placement="below">
        <direction-type>
          <wedge type="stop" number="1" />
          </direction-type>
        <staff>1</staff>
        </direction>
      <note default-x="224.71" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="125.34" default-y="-125.97">
        <rest measure="yes" />
        <duration>48</duration>
        <voice>5</voice>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number="66" width="316.16">
      <note default-x="35.43" default-y="-20">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <attributes>
        <clef number="1">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <direction placement="below">
        <direction-type>
          <dynamics default-y="-41.42" relative-y="-40">
            <other-dynamics>più</other-dynamics>
            <f />
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="88.89" />
        </direction>
      <note default-x="80.48" default-y="-20">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="97.8" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="115.12" default-y="-20">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="132.45" default-y="-30">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="149.77" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="167.09" default-y="5">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="184.41" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="201.73" default-y="-20">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="219.05" default-y="5">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="239.05" default-y="15">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="259.05" default-y="5">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="276.37" default-y="-5">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
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
      <note default-x="12.01" default-y="-195.97">
        <grace slash="yes" />
        <pitch>
          <step>F</step>
          <octave>1</octave>
          </pitch>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="0" bezier-y="16.992361" number="1" />
          </notations>
        </note>
      <note default-x="34.47" default-y="-160.97">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <tie type="start" />
        <voice>5</voice>
        <type>whole</type>
        <accidental>natural</accidental>
        <staff>2</staff>
        <notations>
          <tied type="start" />
          <slur type="stop" number="1" bezier-x="-22.050056" bezier-y="11.999152" />
          <ornaments>
            <trill-mark />
            <wavy-line type="start" number="1" default-y="10.55" />
            </ornaments>
          </notations>
        </note>
      </measure>
    <measure number="67" width="463.45">
      <print new-page="yes" page-number="6">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>70</top-system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>69.63</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <clef number="1">
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <note default-x="81.12" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="107.83" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="134.53" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="161.24" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="187.94" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="214.64" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="241.35" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="268.05" default-y="-45">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="294.75" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="321.46" default-y="-10">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="348.16" default-y="-20">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="374.87" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="401.57" default-y="5">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <articulations>
            <staccato default-x="4.93" default-y="14.3" />
            </articulations>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="80.16" default-y="-154.63">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <tie type="stop" />
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <tied type="stop" />
          <ornaments>
            <wavy-line type="stop" number="1" />
            </ornaments>
          </notations>
        </note>
      <note default-x="424.63" default-y="-159.63">
        <grace />
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <voice>5</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="444.05" default-y="-154.63">
        <grace />
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <voice>5</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      </measure>
    <measure number="68" width="252.13">
      <direction placement="below">
        <direction-type>
          <dynamics default-x="35.09" default-y="-47.5" relative-y="-40">
            <ff />
            <other-dynamics> pesante</other-dynamics>
            </dynamics>
          </direction-type>
        <staff>1</staff>
        <sound dynamics="106.67" />
        </direction>
      <note default-x="10" default-y="-20">
        <rest />
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x="70.08" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="70.08" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="70.08" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="130.17" default-y="-60">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="130.17" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="130.17" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="190.25" default-y="-70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="190.25" default-y="-60">
        <chord />
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="190.25" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="10" default-y="-194.63">
        <pitch>
          <step>E</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="10" default-y="-159.63">
        <chord />
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="70.08" default-y="-159.63">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="70.08" default-y="-124.63">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="130.17" default-y="-164.63">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="130.17" default-y="-129.63">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="190.25" default-y="-169.63">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="190.25" default-y="-134.63">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="69" width="252.13">
      <note default-x="10" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="10" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="10" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="70.08" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="70.08" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="70.08" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="130.17" default-y="-50">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="130.17" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="130.17" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="190.25" default-y="-70">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="190.25" default-y="-55">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="190.25" default-y="-35">
        <chord />
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="10" default-y="-174.63">
        <pitch>
          <step>B</step>
          <octave>1</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="10" default-y="-139.63">
        <chord />
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="70.08" default-y="-154.63">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="70.08" default-y="-119.63">
        <chord />
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="130.17" default-y="-159.63">
        <pitch>
          <step>E</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="130.17" default-y="-124.63">
        <chord />
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="190.25" default-y="-164.63">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="190.25" default-y="-129.63">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="70" width="378.46">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>150</system-distance>
          </system-layout>
        <staff-layout number="2">
          <staff-distance>65</staff-distance>
          </staff-layout>
        </print>
      <note default-x="81.12" default-y="-65">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="81.12" default-y="-50">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="81.12" default-y="-40">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="155.01" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations print-object="no">
          <fermata type="upright" default-y="14" relative-y="10" />
          </notations>
        </note>
      <note default-x="155.01" default-y="-25">
        <chord />
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="155.01" default-y="-5">
        <chord />
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="228.89" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations print-object="no">
          <fermata type="upright" relative-y="10" />
          </notations>
        </note>
      <note default-x="228.89" default-y="-20">
        <chord />
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="228.89" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="302.77" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations print-object="no">
          <fermata type="upright" default-y="4.28" relative-y="10" />
          </notations>
        </note>
      <note default-x="302.77" default-y="-15">
        <chord />
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x="302.77" default-y="5">
        <chord />
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="81.12" default-y="-165">
        <pitch>
          <step>C</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="81.12" default-y="-130">
        <chord />
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="155.01" default-y="-130">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="155.01" default-y="-95">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="228.89" default-y="-135">
        <pitch>
          <step>B</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="228.89" default-y="-100">
        <chord />
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="302.77" default-y="-120">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x="302.77" default-y="-85">
        <chord />
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="71" width="379.49">
      <harmony placement="above" print-frame="no"><root><root-step>D</root-step></root><kind text="7">dominant</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">V7</words></direction-type><staff>2</staff></direction><note default-x="14" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="14" default-y="-10">
        <chord />
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x="215.23" default-y="-25">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>21</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="231.73" default-y="-25" />
        <dot default-x="236.73" default-y="-25" />
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <ornaments>
            <trill-mark />
            <wavy-line type="start" number="1" default-y="17.5" />
            <wavy-line type="stop" number="1" />
            </ornaments>
          </notations>
        </note>
      <note default-x="344.53" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations print-object="no">
          <fermata type="upright" default-y="22.74" relative-y="10" />
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="10" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations print-object="no">
          <fermata type="inverted" default-y="-49" relative-y="-10" />
          </notations>
        </note>
      <note default-x="83.88" default-y="-55">
        <rest />
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <staff>1</staff>
        </note>
      <note default-x="116.72" default-y="-40">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="149.56" default-y="-35">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="182.39" default-y="-30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>2</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="215.23" default-y="-75">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="16.863872" bezier-y="-13.041551" number="1" />
          </notations>
        <notations print-object="no">
          <fermata type="inverted" default-y="-40" relative-y="-10" />
          </notations>
        </note>
      <note default-x="289.11" default-y="-80">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-16.863872" bezier-y="-13.041551" />
          </notations>
        <notations print-object="no">
          <fermata type="inverted" default-y="-40" relative-y="-10" />
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement="below">
        <direction-type>
          <pedal type="start" line="no" sign="yes" default-y="-89.2" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x="10" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="10" default-y="-125">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="195.76" default-y="-160">
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
          <slur type="start" bezier-x="6.092914" bezier-y="-9.01073" number="1" />
          <slur type="start" bezier-x="6.092914" bezier-y="-9.01073" number="2" />
          </notations>
        </note>
      <note default-x="195.76" default-y="-125">
        <grace slash="yes" />
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="221.23" default-y="-160">
        <pitch>
          <step>D</step>
          <octave>2</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-7.733497" bezier-y="-7.649175" />
          <slur type="stop" number="2" bezier-x="-7.733497" bezier-y="-7.649175" />
          </notations>
        </note>
      <note default-x="221.23" default-y="-125">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x="221.23" default-y="-95">
        <chord />
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number="72" width="209.78">
      <harmony placement="above" print-frame="no"><root><root-step>G</root-step></root><kind text="">major</kind></harmony><direction placement="below"><direction-type><words font-style="italic" font-size="10">I — conclusion</words></direction-type><staff>2</staff></direction><note default-x="31.58" default-y="-55">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        <notations>
          <fermata type="upright" relative-y="10" />
          </notations>
        </note>
      <note default-x="31.58" default-y="-45">
        <chord />
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <note default-x="31.58" default-y="-30">
        <chord />
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>48</duration>
        <voice>1</voice>
        <type>whole</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x="9.46" default-y="-180">
        <grace slash="yes" />
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <notations>
          <slur type="start" bezier-x="5.452519" bezier-y="-8.635627" number="1" />
          </notations>
        </note>
      <note default-x="31.58" default-y="-180">
        <pitch>
          <step>G</step>
          <octave>1</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        <notations>
          <slur type="stop" number="1" bezier-x="-7.168813" bezier-y="-7.274072" />
          </notations>
        </note>
      <note default-x="31.58" default-y="-145">
        <chord />
        <pitch>
          <step>G</step>
          <octave>2</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="31.58" default-y="-125">
        <chord />
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <note default-x="31.58" default-y="-110">
        <chord />
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>48</duration>
        <voice>5</voice>
        <type>whole</type>
        <staff>2</staff>
        </note>
      <direction placement="below">
        <direction-type>
          <pedal type="stop" line="no" sign="yes" />
          </direction-type>
        <staff>2</staff>
        </direction>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        </barline>
      </measure>
    </part>
  </score-partwise>`;

export const GRIEG_PRAELUDIUM_ANALYSE: MesureAnalyse[] = [
  { numero: 1,  nom: "Sol",      degre: "I (pédale de tonique, moto perpetuo)", fonction: "T" },
  { numero: 5,  nom: "Ré/Fa#",   degre: "V (modulation express vers la dominante)", fonction: "D" },
  { numero: 9,  nom: "Ré",       degre: "I de Ré (2e thème cantabile, séquences)", fonction: "T" },
  { numero: 19, nom: "Ré7/Fa#",  degre: "V7 (rétrotransition, le Do♮ rappelle Sol)", fonction: "D" },
  { numero: 21, nom: "Sol",      degre: "I (reprise du motif)", fonction: "T" },
  { numero: 23, nom: "Si7",      degre: "V7/vi (ff)", fonction: "D", dominanteSecondaire: true },
  { numero: 25, nom: "mi m",     degre: "vi (relatif mineur)", fonction: "T" },
  { numero: 29, nom: "La#°7/Do", degre: "vii°7 (secousse chromatique, fz)", fonction: "?" },
  { numero: 30, nom: "Si",       degre: "V de mi (pédale, 9 mesures, majeur/mineur alternés)", fonction: "D" },
  { numero: 40, nom: "Lam7",     degre: "ii7 (résolution déceptive)", fonction: "SD" },
  { numero: 41, nom: "Ré7",      degre: "V7 (la fenêtre de retour)", fonction: "D" },
  { numero: 42, nom: "Sol",      degre: "I (réexposition, fz)", fonction: "T" },
  { numero: 45, nom: "Sol7/Fa",  degre: "V4/2/IV (expansion plagale)", fonction: "?", dominanteSecondaire: true },
  { numero: 47, nom: "Do",       degre: "IV", fonction: "SD" },
  { numero: 55, nom: "Sol",      degre: "I (tranquillo, pédale de tonique)", fonction: "T" },
  { numero: 70, nom: "Do(#11)",  degre: "IV avec 11e augmentée (coda)", fonction: "SD" },
  { numero: 71, nom: "Ré7",      degre: "V7", fonction: "D" },
  { numero: 72, nom: "Sol",      degre: "I (conclusion)", fonction: "T" },
];

export const GRIEG_PRAELUDIUM_ANALYSE_NARRATIVE: AnalyseNarrative = {
  tonalite: "Sol majeur — avec un détour établi par le 2e thème en Ré (V) et un épisode au relatif, mi mineur, en son centre.",
  metrique: "4/4. Allegro vivace (noire = 154), f — un moto perpetuo ininterrompu du début à la fin.",
  forme: "Forme-prélude baroque en trois volets : exposition (m.1-22, deux thèmes et leur reprise), développement (m.23-41, l'épisode au relatif et sa pédale de dominante), réexposition et coda (m.42-72).",
  sections: [
    {
      label: "Mesures 1-8",
      titre: "Le prélude baroque : pédale de tonique, puis modulation express",
      chiffrage: "I (pédale) → V",
      fonctions: "T → D",
      texte: "Le moto perpetuo s'installe directement sur une pédale de tonique tenue (Sol1, confirmée sonnant sans interruption sur 4 mesures) — le principe même du prélude en arpèges de Bach, poussé à son degré de pureté maximal. Puis, sans détour, une modulation express installe la dominante, Ré.",
    },
    {
      label: "Mesures 9-22",
      titre: "Le second thème, la rétrotransition, la reprise",
      chiffrage: "I de Ré … Ré7/Fa# → I",
      fonctions: "T … D → T",
      texte: "Un second thème cantabile chante en Ré, par séquences. Puis, mesures 19-20, un Ré7 avec Fa# à la basse porte un Do naturel qui n'appartient pas au ton de Ré — la septième qui rappelle discrètement Sol, ramenant l'oreille vers le ton principal avant même que la reprise ne soit consommée. Le motif d'ouverture revient, fp.",
    },
    {
      label: "Mesures 23-41",
      titre: "L'épisode au relatif : la pédale de dominante et sa double face",
      chiffrage: "Si7 → mi … La#°7/Do → Si (pédale) → Lam7 – Ré7",
      fonctions: "D → T … ? → D → SD – D",
      texte: "Une dominante secondaire ff (Si7) installe le relatif mineur, mi. Une marche de septièmes sur basse descendante mène à la seule vraie morsure romantique de la pièce (fz) : un accord de septième diminuée complet, bâti sur La#, avec Do à la basse. S'ensuit le clou structurel — neuf mesures de pédale sur Si, dominante de mi, avec des oscillations qui alternent tonique en 6/4 et accord diminué, exactement comme un prélude de Bach. Mais Grieg y glisse SON ambiguïté : la pédale hésite explicitement entre Si majeur (Ré#, m.38) et si mineur (Ré naturel, m.39) — confirmé note pour note. Puis, au lieu de résoudre vers mi comme attendu, la musique glisse en Lam7-Ré7 : le ii-V de Sol surgi par la fenêtre, un pur réflexe romantique de résolution déceptive dans une machine par ailleurs toute baroque.",
    },
    {
      label: "Mesures 42-55",
      titre: "Réexposition : l'expansion plagale",
      chiffrage: "I … Sol7/Fa → IV … I",
      fonctions: "T … ? → SD … T",
      texte: "Le retour du ton principal (fz) s'enrichit d'une couleur que le baroque de Grieg affectionne : l'expansion plagale. Un Sol7 avec Fa à la basse (V4/2 de IV) ouvre directement la porte vers le IV, avant qu'une grande cadence ff ne redescende une chaîne de septièmes jusqu'à la tonique.",
    },
    {
      label: "Mesures 56-72",
      titre: "Tranquillo et coda : #11 et la fenêtre de retour finale",
      chiffrage: "I (pédale) … IV(#11) … V7 – I",
      fonctions: "T … SD … D – T",
      texte: "Le tranquillo chante le thème de clôture sur une nouvelle pédale de tonique. La coda empile un dernier cycle de dominantes secondaires, avec une couleur fugitive à la mesure 70 : un Fa# sur un accord de Do majeur — la onzième augmentée, une note qui n'appartient à aucune grammaire du XVIIIe siècle et trahit, l'espace d'un instant, la main d'un compositeur du XIXe. La cadence V7-I referme la pièce.",
    },
  ],
  synthese: [
    {
      titre: "Le néo-archaïsme : un prélude de Bach écrit en 1884",
      texte: "Toute la charpente (pédale de tonique en ouverture, alternance 6/4/diminué sur pédale de dominante, moto perpetuo ininterrompu) reproduit fidèlement le design du prélude baroque en arpèges. Mais chaque détour laisse une empreinte digitale du XIXe siècle : les nuances fz et ff structurelles, la pédale qui hésite entre majeur et mineur, la résolution déceptive au lieu de la résolution attendue, la onzième augmentée fugitive de la coda. Le passé qu'on imite n'est jamais complètement neutre — il se raconte toujours à travers les réflexes de celui qui l'imite.",
    },
    {
      titre: "Une chaîne datée du regard en arrière",
      texte: "1884 : Grieg écrit un prélude du XVIIIe siècle avec les moyens harmoniques du romantisme tardif — quinze ans avant la Pavane néo-Renaissance de Ravel, quarante ans avant le néoclassicisme de Stravinsky. Le « retour au passé » comme geste compositionnel n'est donc pas un phénomène isolé du début du XXe siècle : il traverse plusieurs générations, et chacune y laisse sa propre marque.",
    },
    {
      titre: "Le même procédé que la Pavane, quinze ans avant elle",
      texte: "La marche de septièmes diatoniques sur basse descendante (m.27-28) est exactement le procédé qu'utilisera Ravel dans sa Pavane pour une infante défunte (1899) — une basse qui descend par degrés conjoints sous une chaîne d'accords de septième, une des signatures harmoniques les plus reconnaissables du « style ancien » revisité par le langage moderne.",
    },
  ],
};
