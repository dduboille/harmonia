// Auto-generated: quiz content for Cours2 — translations can be added per-locale.
// Structural data arrays (DEGREES, MODES, etc.) remain in the component for now.

export interface Question { q: string; opts: string[]; a: number; fb: string; }
export interface Cours2Locale { questions: Question[]; }

const questionsFr: Question[] = [
  // Structure des triades
  { q:"Structure d'une triade majeure ?", opts:["3ce min + 3ce maj","3ce maj + 3ce min","3ce min + 3ce min","3ce maj + 3ce maj"], a:1, fb:"Triade majeure = tierce majeure (4 dt) + tierce mineure (3 dt). Ex : C–E–G." },
  { q:"Structure d'une triade mineure ?", opts:["3ce min + 3ce maj","3ce maj + 3ce min","3ce min + 3ce min","3ce maj + 3ce maj"], a:0, fb:"Triade mineure = tierce mineure (3 dt) + tierce majeure (4 dt). Ex : C–Eb–G." },
  { q:"Structure d'une triade diminuée ?", opts:["3ce min + 3ce maj","3ce maj + 3ce min","3ce min + 3ce min","3ce maj + 3ce maj"], a:2, fb:"Triade diminuée = tierce mineure + tierce mineure. Ex : C–Eb–Gb." },
  { q:"Structure d'une triade augmentée ?", opts:["3ce min + 3ce maj","3ce maj + 3ce min","3ce min + 3ce min","3ce maj + 3ce maj"], a:3, fb:"Triade augmentée = tierce majeure + tierce majeure. Ex : C–E–G#." },
  { q:"Combien de demi-tons contient une tierce majeure ?", opts:["2","3","4","5"], a:2, fb:"Tierce majeure = 4 demi-tons. Ex : C–E." },
  { q:"Combien de demi-tons contient une tierce mineure ?", opts:["2","3","4","5"], a:1, fb:"Tierce mineure = 3 demi-tons. Ex : D–F." },
  { q:"Quelle triade a une quinte diminuée ?", opts:["Majeure","Mineure","Diminuée","Augmentée"], a:2, fb:"La triade diminuée a une quinte diminuée (6 demi-tons)." },
  { q:"Quelle triade a une quinte augmentée ?", opts:["Majeure","Mineure","Diminuée","Augmentée"], a:3, fb:"La triade augmentée a une quinte augmentée (8 demi-tons)." },
  { q:"Quelles triades sont stables (quinte juste) ?", opts:["Majeure et augmentée","Mineure et diminuée","Majeure et mineure","Diminuée et augmentée"], a:2, fb:"Majeure et mineure ont toutes deux une quinte juste (7 demi-tons) → stables." },
  { q:"Combien de notes dans une triade ?", opts:["2","3","4","5"], a:1, fb:"Une triade = 3 notes : fondamentale, tierce, quinte." },
  { q:"Comment construit-on un accord ?", opts:["Superposition de secondes","Superposition de tierces","Superposition de quartes","Superposition de quintes"], a:1, fb:"Un accord est construit par superposition de tierces." },
  // Notes des accords
  { q:"Quelles notes composent C major (Do majeur) ?", opts:["C–Eb–G","C–E–G","C–E–G#","C–Eb–Gb"], a:1, fb:"C major = C–E–G. Tierce majeure (4 dt) + tierce mineure (3 dt)." },
  { q:"Quelles notes composent Cm (Do mineur) ?", opts:["C–Eb–G","C–E–G","C–E–G#","C–Eb–Gb"], a:0, fb:"Cm = C–Eb–G. Tierce mineure (3 dt) + tierce majeure (4 dt)." },
  { q:"Quelles notes composent Cdim (Do diminué) ?", opts:["C–Eb–G","C–E–G","C–Eb–Gb","C–E–G#"], a:2, fb:"Cdim = C–Eb–Gb. Deux tierces mineures." },
  { q:"Quelles notes composent G major ?", opts:["G–Bb–D","G–B–D","G–A–D","G–B–E"], a:1, fb:"G major = G–B–D." },
  { q:"Quelles notes composent Dm ?", opts:["D–F#–A","D–F–A","D–F–G","D–E–A"], a:1, fb:"Dm = D–F–A. Tierce mineure (D→F) + tierce majeure (F→A)." },
  { q:"Quelles notes composent A major ?", opts:["A–C–E","A–C#–Eb","A–C#–E","A–B–E"], a:2, fb:"A major = A–C#–E." },
  { q:"Quelles notes composent Em ?", opts:["E–G#–B","E–G–B","E–G–A#","E–F#–B"], a:1, fb:"Em = E–G–B." },
  { q:"Quelles notes composent Bdim ?", opts:["B–D–F","B–D–F#","B–D#–F#","B–D–G"], a:0, fb:"Bdim = B–D–F. Les notes du triton de C majeur !" },
  { q:"Quel accord est formé par E–G–B ?", opts:["E major","Em","G major","C major"], a:1, fb:"E–G = 3 dt (3ce min) + G–B = 4 dt (3ce maj) → Em." },
  { q:"Quel accord est formé par F–A–C ?", opts:["Fm","F major","A minor","C major"], a:1, fb:"F–A = 4 dt (3ce maj) + A–C = 3 dt (3ce min) → F major." },
  { q:"Quel accord est formé par B–D–F ?", opts:["Bm","B major","Bdim","Dm"], a:2, fb:"B–D = 3 dt + D–F = 3 dt → deux tierces mineures → Bdim." },
  // Gamme majeure — triades
  { q:"Quel type produit le Ier degré de C majeur ?", opts:["Majeur","Mineur","Diminué","Augmenté"], a:0, fb:"Le Ier degré donne toujours un accord majeur en gamme majeure." },
  { q:"Quel type produit le IIe degré de C majeur ?", opts:["Majeur","Mineur","Diminué","Augmenté"], a:1, fb:"Le IIe degré donne un accord mineur : D–F–A." },
  { q:"Quel type produit le Ve degré de C majeur ?", opts:["Majeur","Mineur","Diminué","Augmenté"], a:0, fb:"Le Ve degré donne un accord majeur : G–B–D." },
  { q:"Quel type produit le VIIe degré de C majeur ?", opts:["Majeur","Mineur","Diminué","Augmenté"], a:2, fb:"Le VIIe degré donne la seule triade diminuée : B–D–F." },
  { q:"Combien de triades mineures en gamme majeure ?", opts:["1","2","3","4"], a:2, fb:"3 triades mineures : IIe (Dm), IIIe (Em), VIe (Am)." },
  { q:"Combien de triades majeures en gamme majeure ?", opts:["1","2","3","4"], a:2, fb:"3 triades majeures : Ier (C), IVe (F), Ve (G)." },
  { q:"Quel accord correspond au VIe degré de C majeur ?", opts:["F major","Am","G major","Bdim"], a:1, fb:"A–C–E = Am." },
  { q:"Quel est l'accord de dominante en C majeur ?", opts:["F major","Am","G major","Dm"], a:2, fb:"G–B–D = G major. Ve degré = dominante." },
  { q:"La séquence des types en gamme majeure est :", opts:["Maj min Maj min Maj min dim","Maj min min Maj Maj min dim","min Maj min Maj min Maj dim","Maj Maj min min Maj min dim"], a:1, fb:"I=Maj II=min III=min IV=Maj V=Maj VI=min VII=dim. Séquence fixe dans toute gamme majeure." },
  // Tétrades
  { q:"Qu'est-ce qu'une tétrade ?", opts:["Une triade renversée","Une triade + une septième","Un accord de 5 notes","Un accord sans quinte"], a:1, fb:"Tétrade = triade + tierce supplémentaire au-dessus de la quinte (la septième)." },
  { q:"Structure d'un accord Maj7 ?", opts:["Triade maj + 7e min","Triade min + 7e maj","Triade maj + 7e maj","Triade min + 7e min"], a:2, fb:"Maj7 = triade majeure + septième majeure. Ex : CMaj7 = C–E–G–B." },
  { q:"Structure d'un accord dominant 7 (X7) ?", opts:["Triade maj + 7e min","Triade min + 7e maj","Triade maj + 7e maj","Triade min + 7e min"], a:0, fb:"X7 = triade majeure + septième mineure. Ex : G7 = G–B–D–F." },
  { q:"Structure d'un accord m7 ?", opts:["Triade maj + 7e min","Triade min + 7e maj","Triade maj + 7e maj","Triade min + 7e min"], a:3, fb:"m7 = triade mineure + septième mineure. Ex : Dm7 = D–F–A–C." },
  { q:"Structure d'un accord m7♭5 ?", opts:["Triade dim + 7e maj","Triade dim + 7e min","Triade aug + 7e min","Triade min + 7e dim"], a:1, fb:"m7♭5 = triade diminuée + septième mineure. Ex : Bm7♭5 = B–D–F–A." },
  { q:"Différence entre CMaj7 et C7 ?", opts:["La quinte","La tierce","La septième","La fondamentale"], a:2, fb:"CMaj7 = 7e majeure (B). C7 = 7e mineure (Bb). Tout le reste est identique." },
  // Notes des tétrades
  { q:"Quelles notes composent G7 ?", opts:["G–B–D–F#","G–B–D–F","G–Bb–D–F","G–A–D–F"], a:1, fb:"G7 = G–B–D–F. Triade G major + 7e mineure (F)." },
  { q:"Quelles notes composent CMaj7 ?", opts:["C–E–G–Bb","C–Eb–G–B","C–E–G–B","C–E–G#–B"], a:2, fb:"CMaj7 = C–E–G–B. Triade C major + 7e majeure (B)." },
  { q:"Quelles notes composent Dm7 ?", opts:["D–F#–A–C","D–F–A–C","D–F–A–C#","D–F–G–C"], a:1, fb:"Dm7 = D–F–A–C. Triade Dm + 7e mineure (C)." },
  { q:"Quelles notes composent Bm7♭5 ?", opts:["B–D–F#–A","B–D–F–A","B–Db–F–A","B–D–F–Ab"], a:1, fb:"Bm7♭5 = B–D–F–A. Triade Bdim + 7e mineure (A)." },
  { q:"Quel degré de C majeur produit un accord Maj7 ?", opts:["IIe et Ve","Ier et IVe","IIIe et VIe","Ve et VIIe"], a:1, fb:"CMaj7 (Ier) et FMaj7 (IVe). Ce sont les deux seuls Maj7 de la gamme." },
  { q:"Combien d'accords m7 en gamme de C majeur ?", opts:["1","2","3","4"], a:2, fb:"3 accords m7 : Dm7 (II), Em7 (III), Am7 (VI)." },
  { q:"Quel est l'accord du VIIe degré en tétrade ?", opts:["CMaj7","G7","Bm7♭5","Bdim7"], a:2, fb:"B–D–F–A = Bm7♭5 (demi-diminué)." },
  { q:"Quel accord contient le triton complet F–B ?", opts:["CMaj7","FMaj7","G7","Am7"], a:2, fb:"G7 = G–B–D–F. Il contient B (la sensible) et F (la sous-dominante)." },
  // Renversements
  { q:"Qu'est-ce qu'un renversement ?", opts:["Un accord joué plus vite","Un changement de la note à la basse","Un accord avec des notes manquantes","Une transposition"], a:1, fb:"Un renversement change la note à la basse. L'accord garde ses notes, seul l'ordre change." },
  { q:"Combien de renversements possède une triade ?", opts:["2","3","4","5"], a:1, fb:"Une triade a 3 positions : état fondamental, 1er (tierce à la basse), 2e (quinte)." },
  { q:"Combien de renversements possède une tétrade ?", opts:["2","3","4","5"], a:2, fb:"Une tétrade a 4 positions : fondamental, 1er, 2e, 3e (septième à la basse)." },
  { q:"Que signifie C/E ?", opts:["C avec E ajouté","C major avec E à la basse","C mineur en E","Accord de E avec C"], a:1, fb:"X/Y = accord X avec Y à la basse. C/E = C major, 1er renversement." },
  { q:"Quelle note est à la basse dans G/B ?", opts:["G","A","B","C"], a:2, fb:"G/B = G major avec B à la basse = 1er renversement." },
  { q:"Quelle est la basse du 2e renversement ?", opts:["Fondamentale","Tierce","Quinte","Septième"], a:2, fb:"Le 2e renversement a la quinte à la basse. Ex : C/G = C major avec G." },
  { q:"Quelle est la basse du 3e renversement (tétrade) ?", opts:["Fondamentale","Tierce","Quinte","Septième"], a:3, fb:"Le 3e renversement (uniquement tétrades) a la septième à la basse." },
  { q:"Comment note-t-on le 1er renversement de C major ?", opts:["C","C/E","C/G","Cm"], a:1, fb:"C/E = C major avec E (la tierce) à la basse." },
  { q:"Pourquoi utilise-t-on des renversements ?", opts:["Pour changer la couleur","Pour fluidifier la basse","Pour varier la texture","Toutes ces raisons"], a:3, fb:"Les renversements servent à fluidifier la ligne de basse, varier la couleur et l'équilibre." },
  { q:"Quel est le 1er renversement de Am ?", opts:["Am/E","Am/C","Am/A","Am/G"], a:1, fb:"Am = A–C–E. 1er renversement = tierce à la basse = C. Notation : Am/C." },
  // Reconnaissance
  { q:"Quel accord produit le IVe degré de G majeur ?", opts:["C major","Dm","Em","Bdim"], a:0, fb:"G(I) A(II) B(III) C(IV). Le IVe degré de G majeur est C major." },
  { q:"Quel accord produit le Ve degré de G majeur ?", opts:["C major","D major","Em","Am"], a:1, fb:"G(I) A(II) B(III) C(IV) D(V). La dominante de G majeur est D major." },
  { q:"Quel accord produit le IIe degré de D majeur ?", opts:["Em","E major","Gm","A major"], a:0, fb:"D(I) E(II). Le IIe degré de D majeur est Em." },
  { q:"Quelles notes composent Em7 ?", opts:["E–G#–B–D","E–G–B–D","E–G–Bb–D","E–G–A#–D"], a:1, fb:"Em7 = E–G–B–D. Triade Em + 7e mineure (D)." },
  { q:"Quelles notes composent Am7 ?", opts:["A–C#–E–G","A–C–E–G","A–C–Eb–G","A–C–E–G#"], a:1, fb:"Am7 = A–C–E–G. Triade Am + 7e mineure (G)." },
  { q:"Quelles notes composent FMaj7 ?", opts:["F–A–C–Eb","F–Ab–C–E","F–A–C–E","F–A–C#–E"], a:2, fb:"FMaj7 = F–A–C–E. Triade F major + 7e majeure (E)." },
  { q:"Quel accord a les notes G–B–D–F ?", opts:["GMaj7","G7","Gm7","Gdim7"], a:1, fb:"G–B–D–F = G7. Triade G major + 7e mineure (F)." },
  { q:"Quel accord a les notes D–F–A–C ?", opts:["DMaj7","D7","Dm7","Ddim7"], a:2, fb:"D–F–A–C = Dm7. Triade Dm + 7e mineure (C)." },
  // Vocabulaire
  { q:"Comment appelle-t-on la note de référence d'un accord ?", opts:["La tonique","La fondamentale","La basse","La racine"], a:1, fb:"La fondamentale est la note de départ, celle qui donne son nom à l'accord." },
  { q:"La septième d'un accord C7 est :", opts:["C","E","G","Bb"], a:3, fb:"C7 = C–E–G–Bb. La septième mineure de C est Bb (10 demi-tons au-dessus)." },
  { q:"Que signifie 'demi-diminué' ?", opts:["Accord diminué sans quinte","Accord m7♭5","Accord dim7 renversé","Accord entre mineur et diminué"], a:1, fb:"Le demi-diminué = m7♭5 : triade diminuée + 7e mineure." },
  { q:"Quel est le seul accord dominant 7 (X7) en C majeur ?", opts:["CMaj7","FMaj7","G7","Am7"], a:2, fb:"G7 est le seul accord de dominante 7 de la gamme. Il contient le triton B–F." },

  // ── Questions supplémentaires ──
  { q:"Quelles notes composent Dm7♭5 (Bm7♭5 version D) ?", opts:["D–F–A–C","D–F–Ab–C","D–F#–A–C","D–F–Ab–Cb"], a:1, fb:"Dm7♭5 = D–F–Ab–C. Triade Ddim (D–F–Ab) + 7e mineure (C)." },
  { q:"Quel accord produit le IIIe degré de C majeur ?", opts:["C major","Dm","Em","F major"], a:2, fb:"C(I) D(II) E(III). Le IIIe degré de C majeur est Em (Mi–Sol–Si)." },
  { q:"Quel accord produit le VIe degré de G majeur ?", opts:["Am","Em","Bm","C major"], a:1, fb:"G(I) A(II) B(III) C(IV) D(V) E(VI). Le VIe degré de G majeur est Em." },
  { q:"Quelle est la différence entre Bdim et Bm7♭5 ?", opts:["La quinte","La fondamentale","La septième : dim7 a une 7e diminuée, m7♭5 a une 7e mineure","La tierce"], a:2, fb:"Bdim = B–D–F (triade). Bm7♭5 = B–D–F–A (tétrade, 7e mineure). La différence est la septième ajoutée." },
  { q:"Combien de demi-tons contient une septième diminuée ?", opts:["8","9","10","11"], a:1, fb:"Septième diminuée = 9 demi-tons. Ex : B–Ab (la7e dim de Bdim7). C'est enharmonique à une sixte majeure." },
  { q:"Dans la gamme de D majeur, quel accord est produit par le Ve degré ?", opts:["D major","Em","A major","G major"], a:2, fb:"D(I) E(II) F#(III) G(IV) A(V). La dominante de D majeur est A major." },
  { q:"Quelles notes composent A7 (La dominant 7) ?", opts:["A–C#–E–G","A–C–E–G","A–C#–E–G#","A–C–E–G#"], a:0, fb:"A7 = A–C#–E–G. Triade A major (A–C#–E) + 7e mineure (G)." },
  { q:"Quel accord a les notes B–D–F–A ?", opts:["Bdim","Bm","Bm7♭5","BMaj7"], a:2, fb:"B–D (tierce min) + D–F (tierce min) = Bdim. + A (7e min) → Bm7♭5 (demi-diminué)." },
  { q:"La triade augmentée est symétrique car :", opts:["Ses trois notes sont identiques","Elle contient deux tierces majeures identiques — on peut la renverser sans changer sa structure","Elle n'a pas de renversement","Elle appartient à plusieurs gammes simultanément"], a:1, fb:"C–E–G# = E–G#–C = G#–C–E (chacune = deux tierces majeures). La triade augmentée est symétrique : ses trois renversements ont la même structure." },
  { q:"Pourquoi la triade diminuée est-elle instable ?", opts:["Car elle est mineure","Car sa quinte diminuée crée une dissonance — deux tierces mineures empilées génèrent une 5te à 6 dt au lieu de 7","Car elle n'a que 3 notes","Car elle est toujours renversée"], a:1, fb:"La quinte diminuée (6 demi-tons) est instable — ce n'est pas la quinte juste (7 dt) à laquelle l'oreille s'attend. Cette instabilité fait de Bdim l'accord de tension par excellence." },
  { q:"Dans G7, quelle note est la septième de dominante ?", opts:["G","B","D","F"], a:3, fb:"G7 = G–B–D–F. F est la septième (mineure) de G7. C'est la note du triton (avec B) qui doit descendre vers E lors de la résolution." },
  { q:"Quel accord de C majeur a la même fondamentale que la tonique mais avec une 7e majeure ?", opts:["C7","CMaj7","Cm7","Cdim7"], a:1, fb:"CMaj7 = C–E–G–B. Fondamentale C + 7e majeure B. À ne pas confondre avec C7 (= C–E–G–Bb, 7e mineure)." },
  { q:"Quel renversement d'accord est le plus instable ?", opts:["L'état fondamental","Le 1er renversement","Le 2e renversement","Le 3e renversement"], a:2, fb:"Le 2e renversement (quinte à la basse) est le plus instable — c'est le 6/4 de cadence. Le 3e renversement (septième à la basse) est très tendu et pousse fortement vers la résolution." },
  { q:"Quel accord correspond à Am/C ?", opts:["C major","Am en 1er renversement — C à la basse","Am en 2e renversement — E à la basse","Cm"], a:1, fb:"Am/C = accord de La mineur (A–C–E) avec C à la basse. C est la tierce de Am → 1er renversement." },
  { q:"Comment note-t-on le 2e renversement de G major ?", opts:["G","G/B","G/D","Gm"], a:2, fb:"G/D = G major avec D (la quinte) à la basse = 2e renversement." },
  { q:"Quel accord est formé par A–C–E ?", opts:["A major","Am","C major","F major"], a:1, fb:"A–C = 3 demi-tons (tierce min) + C–E = 4 demi-tons (tierce maj) → Am." },
  { q:"Quel accord est formé par D–F#–A–C ?", opts:["DMaj7","D7","Dm7","Ddim7"], a:1, fb:"D–F# = 4 dt (3ce maj) + F#–A = 3 dt + A–C = 3 dt → triade D major + 7e min = D7." },
  { q:"En E majeur, quel accord produit le IIe degré ?", opts:["Em","F# mineur","F# major","G# mineur"], a:1, fb:"E(I) F#(II). Le IIe degré de E majeur est F# mineur (F#–A–C#)." },
  { q:"Pourquoi utilise-t-on le 1er renversement plutôt que l'état fondamental ?", opts:["Pour rendre l'accord plus dissonant","Pour fluidifier la ligne de basse par mouvement conjoint","Pour ajouter une note","Pour changer la tonalité"], a:1, fb:"Le 1er renversement place la tierce à la basse. Cela permet des lignes de basse conjointes plus mélodiques — ex : C–C/E–F au lieu de C–C–F." },
  { q:"Quelles notes composent E7 ?", opts:["E–G–B–D","E–G#–B–D","E–G–B–D#","E–G#–B–D#"], a:1, fb:"E7 = E–G#–B–D. Triade E major (E–G#–B) + 7e mineure (D)." },
  { q:"Quel accord contient uniquement les notes du triton de C majeur (F et B) ?", opts:["Bdim uniquement","G7 et Bdim — les deux contiennent F et B","FMaj7","Am7"], a:1, fb:"G7 = G–B–D–F (contient F et B). Bdim = B–D–F (contient F et B). Les deux accords contiennent le triton fonctionnel de C majeur." },
  { q:"Qu'est-ce qu'un accord de sixte ajoutée (add6) ?", opts:["Un accord avec une 7e majeure","Un accord de triade avec une 6te ajoutée sans septième","Un accord en premier renversement","Un accord avec une 6te et une 7e"], a:1, fb:"Un accord add6 (ex : Cadd6 = C–E–G–A) ajoute une sixte sans septième. À distinguer de CMaj7 (qui a B, pas A) et de Am7 (qui est un autre accord)." },
  { q:"En F majeur, quel accord produit le VIIe degré ?", opts:["Bdim","Edim","Am","Gm"], a:1, fb:"F(I) G(II) A(III) Bb(IV) C(V) D(VI) E(VII). Le VIIe de F majeur est E. E–G–Bb = Edim." },
  { q:"Quelles notes composent Cdim7 ?", opts:["C–Eb–Gb–Bb","C–Eb–Gb–A","C–E–Gb–A","C–Eb–G–Bb"], a:1, fb:"Cdim7 = C–Eb–Gb–A (ou Bbb). Triade Cdim (C–Eb–Gb) + 7e diminuée (A = Bbb enharmonique). 4 notes symétriques espacées de 3 dt." },
  { q:"Comment la tierce d'un accord détermine-t-elle son mode ?", opts:["Elle ne le détermine pas","Une tierce majeure (4 dt) → accord majeur ; une tierce mineure (3 dt) → accord mineur","La tierce détermine la quinte","La tierce détermine la septième"], a:1, fb:"La tierce est la note qui 'colore' l'accord. Tierce majeure = couleur majeure. Tierce mineure = couleur mineure. C'est la première note qu'on modifie pour changer le mode d'un accord." },
];

// English translations — add when available; until then falls back to fr
const questionsEn: Question[] = questionsFr;

export const cours2Content: Record<string, Cours2Locale> = {
  fr: { questions: questionsFr },
  en: { questions: questionsEn },
  es: { questions: questionsFr },
  de: { questions: questionsFr },
  it: { questions: questionsFr },
  pt: { questions: questionsFr },
};
