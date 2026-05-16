// Auto-generated: pedagogical content for Cours 1 in all 6 locales.
// Degrees + Intervals fully translated. Quiz: fr/en complete, others inherit fr.

export interface Degree {
  num: string;
  name: string;
  note: string;
  origin: string;
  attraction: string;
  color: string;
  bg: string;
}

export interface IntervalDef {
  name: string;
  semis: number;
  nature: string;
  example: string;
  exampleNotes: [string, number, string, number];
  inverse: string;
  inverseSemis: number;
  inverseNature: string;
}

export interface Question { q: string; opts: string[]; a: number; fb: string; }

export interface Cours1Locale {
  degrees: Degree[];
  intervals: IntervalDef[];
  questions: Question[];
}

// ─── French ───────────────────────────────────────────────────────────────────

const degreesFr: Degree[] = [
  { num:"I",   note:"C", color:"#0F6E56", bg:"#E1F5EE", name:"Tonique",        origin:"Du latin « tonus » — le son de référence, le centre de gravité de toute la gamme. Toutes les autres notes gravitent autour d'elle.", attraction:"Elle attire toutes les autres notes, et plus particulièrement le VIIe degré (la sensible), situé à seulement un demi-ton en dessous." },
  { num:"II",  note:"D", color:"#534AB7", bg:"#EEEDFE", name:"Sus-tonique",     origin:"Littéralement « au-dessus de la tonique » — la note immédiatement supérieure au centre tonal.", attraction:"Instable, elle tend vers le Ier degré (en descendant) ou vers le IIIe (en montant). Elle est souvent le point de départ des progressions harmoniques." },
  { num:"III", note:"E", color:"#185FA5", bg:"#E6F1FB", name:"Médiante",        origin:"Du latin « medius » — elle est à mi-chemin entre la tonique (I) et la dominante (V), à 4 demi-tons de chacune.", attraction:"Elle définit la couleur de la gamme : tierce majeure (4 demi-tons) = sonorité majeure, tierce mineure (3 demi-tons) = sonorité mineure." },
  { num:"IV",  note:"F", color:"#993C1D", bg:"#FAECE7", name:"Sous-dominante",  origin:"« Sous la dominante » — elle est une quinte en dessous de la dominante, ou une quarte au-dessus de la tonique.", attraction:"Elle prépare la tension. Dans une résolution, le IVe degré tend à descendre vers le IIIe — c'est l'un des mouvements les plus caractéristiques de l'harmonie tonale." },
  { num:"V",   note:"G", color:"#BA7517", bg:"#FAEEDA", name:"Dominante",       origin:"Du latin « dominare » — elle domine la gamme, à la quinte juste au-dessus de la tonique. C'est le second pôle structurant.", attraction:"Elle appelle fortement la résolution vers la tonique. L'accord de dominante est le plus tendu de la gamme — c'est lui qui donne son mouvement au discours musical." },
  { num:"VI",  note:"A", color:"#3B6D11", bg:"#EAF3DE", name:"Sus-dominante",   origin:"« Au-dessus de la dominante » — une seconde au-dessus du Ve degré.", attraction:"Sa stabilité relative en fait un substitut naturel de la tonique. La cadence rompue (V→VI) exploite cette parenté pour surprendre l'oreille." },
  { num:"VII", note:"B", color:"#A32D2D", bg:"#FCEBEB", name:"Sensible",        origin:"« Sensible » car elle est sensible à l'attraction de la tonique — à seulement un demi-ton en dessous du Ier degré.", attraction:"L'attraction la plus puissante de toute la gamme. La sensible monte quasi-obligatoirement vers la tonique. Son instabilité est le moteur principal de la résolution harmonique." },
];

const intervalsFr: IntervalDef[] = [
  { name:"Seconde mineure", semis:1, nature:"mineure", example:"E → F", exampleNotes:["E",3,"F",3], inverse:"Septième majeure", inverseSemis:11, inverseNature:"majeure" },
  { name:"Seconde majeure", semis:2, nature:"majeure", example:"C → D", exampleNotes:["C",3,"D",3], inverse:"Septième mineure", inverseSemis:10, inverseNature:"mineure" },
  { name:"Tierce mineure",  semis:3, nature:"mineure", example:"D → F", exampleNotes:["D",3,"F",3], inverse:"Sixte majeure",    inverseSemis:9,  inverseNature:"majeure" },
  { name:"Tierce majeure",  semis:4, nature:"majeure", example:"C → E", exampleNotes:["C",3,"E",3], inverse:"Sixte mineure",    inverseSemis:8,  inverseNature:"mineure" },
  { name:"Quarte juste",    semis:5, nature:"juste",   example:"C → F", exampleNotes:["C",3,"F",3], inverse:"Quinte juste",    inverseSemis:7,  inverseNature:"juste"   },
  { name:"Triton",          semis:6, nature:"augm. / dim.", example:"F → B", exampleNotes:["F",3,"B",3], inverse:"Triton",    inverseSemis:6,  inverseNature:"augm. / dim." },
];

const questionsFr: Question[] = [
  { q:"Quel moine a inventé les noms des notes au XIe siècle ?", opts:["Rameau","Guido d'Arezzo","Bach","Pythagore"], a:1, fb:"Guido d'Arezzo a créé la solmisation en tirant les syllabes des premiers mots de chaque vers d'un hymne à Saint Jean-Baptiste." },
  { q:"Pourquoi le VIIe degré s'appelle-t-il « sensible » ?", opts:["Car il est le plus aigu","Car il est expressif","Car il est à ½ ton de la tonique","Car il est toujours bémol"], a:2, fb:"La sensible est à ½ ton sous la tonique. Cette proximité crée une attraction vers le haut presque irrésistible." },
  { q:"Quelle est la formule T/½ d'une gamme majeure ?", opts:["T-T-T-½-T-T-½","T-½-T-T-½-T-T","T-T-½-T-T-T-½","½-T-T-T-T-½-T"], a:2, fb:"T-T-½-T-T-T-½ est la formule universelle. Les deux demi-tons se trouvent entre les degrés III–IV et VII–I." },
  { q:"Que signifie « médiante » ?", opts:["Mi-chemin entre tonique et dominante","Note la plus haute","Note sous la dominante","Note la plus instable"], a:0, fb:"La médiante (IIIe) est à mi-chemin entre I et V — à 4 demi-tons de chacune." },
  { q:"Combien de notes contient une gamme diatonique ?", opts:["5","6","7","8"], a:2, fb:"La gamme diatonique contient 7 notes distinctes, plus la répétition de la tonique à l'octave." },
  { q:"Combien de demi-tons contient une octave ?", opts:["6","10","12","14"], a:2, fb:"Une octave = 12 demi-tons. C'est la base du tempérament égal occidental." },
  { q:"Quelle consonance a permis de construire la gamme naturelle ?", opts:["La tierce","La quinte juste (3/2)","La seconde","Le triton"], a:1, fb:"La quinte juste (rapport 3/2) est la seconde consonance fondamentale après l'octave. En enchaînant 6 quintes, on obtient les 7 notes de la gamme." },
  { q:"Quel est le rapport de fréquence de l'octave ?", opts:["3/2","4/3","2/1","5/4"], a:2, fb:"L'octave = rapport 2/1. Une note à 220 Hz a son octave à 440 Hz." },
  { q:"Un ton correspond à combien de demi-tons ?", opts:["1","2","3","4"], a:1, fb:"Un ton = 2 demi-tons. Ex : C–D = 1 ton = 2 demi-tons (C → C# → D)." },
  { q:"Quel est le plus petit intervalle du système occidental ?", opts:["Le ton","Le demi-ton","La tierce mineure","La seconde majeure"], a:1, fb:"Le demi-ton est l'unité de base. Sur un piano, c'est la distance entre deux touches voisines." },
  { q:"À quelle fréquence est accordé le La standard (A4) ?", opts:["220 Hz","330 Hz","440 Hz","880 Hz"], a:2, fb:"Le A4 = 440 Hz est la référence internationale d'accordage depuis 1939." },
  { q:"Combien d'octaves couvre un piano standard à 88 touches ?", opts:["5","7","8","10"], a:1, fb:"Un piano à 88 touches couvre 7 octaves et une tierce mineure (de A0 à C8)." },
  { q:"Quel degré s'appelle la « dominante » ?", opts:["IIIe","IVe","Ve","VIe"], a:2, fb:"La dominante est le Ve degré — à la quinte juste au-dessus de la tonique." },
  { q:"Quel degré s'appelle la « sous-dominante » ?", opts:["IIe","IIIe","IVe","Ve"], a:2, fb:"La sous-dominante (IVe) est une quinte en dessous de la dominante, ou une quarte au-dessus de la tonique." },
  { q:"Quel degré s'appelle la « sus-tonique » ?", opts:["Ier","IIe","IIIe","IVe"], a:1, fb:"La sus-tonique (IIe) est la note immédiatement au-dessus de la tonique." },
  { q:"En C majeur, quelle note est la sensible ?", opts:["A","G","B","F"], a:2, fb:"B est le VIIe degré de C majeur — à ½ ton sous C." },
  { q:"En C majeur, quelle note est la médiante ?", opts:["D","E","F","G"], a:1, fb:"E est le IIIe degré de C majeur — à mi-chemin entre C (I) et G (V)." },
  { q:"En C majeur, quelle note est la dominante ?", opts:["F","G","A","B"], a:1, fb:"G est le Ve degré de C majeur." },
  { q:"En C majeur, quelle note est la sous-dominante ?", opts:["E","F","G","A"], a:1, fb:"F est le IVe degré de C majeur." },
  { q:"En G majeur, quelle note est la dominante ?", opts:["C","D","E","F#"], a:1, fb:"G(I) A(II) B(III) C(IV) D(V). La dominante de G majeur est D." },
  { q:"En G majeur, quelle note est la sensible ?", opts:["E","F","F#","G#"], a:2, fb:"G A B C D E F#(VII). La sensible de G majeur est F#." },
  { q:"En F majeur, quelle note est la sensible ?", opts:["E","G","Bb","D"], a:0, fb:"F G A Bb C D E(VII). La sensible de F majeur est E." },
  { q:"En D majeur, quelle note est la sous-dominante ?", opts:["G","A","B","C#"], a:0, fb:"D(I) E(II) F#(III) G(IV). La sous-dominante de D majeur est G." },
  { q:"En D majeur, quelle note est la sensible ?", opts:["C","C#","D#","B"], a:1, fb:"D E F# G A B C#(VII). La sensible est C#, à ½ ton sous D." },
  { q:"Quel est le VIIe degré de G majeur ?", opts:["F","F#","G#","A"], a:1, fb:"G(I) A(II) B(III) C(IV) D(V) E(VI) F#(VII). La sensible de G majeur est F#." },
  { q:"Quel est le IVe degré de G majeur ?", opts:["C","D","E","F#"], a:0, fb:"G(I) A(II) B(III) C(IV). La sous-dominante de G majeur est C." },
  { q:"Quel est le Ve degré de F majeur ?", opts:["C","Bb","D","E"], a:0, fb:"F(I) G(II) A(III) Bb(IV) C(V). La dominante de F majeur est C." },
  { q:"Quel est le IIIe degré de D majeur ?", opts:["F","F#","G","G#"], a:1, fb:"D(I) E(II) F#(III). La médiante de D majeur est F#." },
  { q:"Quelle gamme a E comme sensible ?", opts:["C majeur","F majeur","G majeur","Bb majeur"], a:1, fb:"En F majeur : F G A Bb C D E(VII). E est la sensible à ½ ton sous F." },
  { q:"Quelle gamme a B comme sensible ?", opts:["C majeur","G majeur","F majeur","D majeur"], a:0, fb:"En C majeur : C D E F G A B(VII). B est la sensible à ½ ton sous C." },
  { q:"La gamme de G majeur contient quel dièse ?", opts:["C#","F#","G#","B#"], a:1, fb:"G A B C D E F# — le F# assure le ½ ton entre le VIe et VIIe degré." },
  { q:"La gamme de F majeur contient quelle altération ?", opts:["F#","Bb","Eb","C#"], a:1, fb:"F G A Bb C D E — le Bb assure le ½ ton entre le IIIe (A) et IVe (Bb) degré." },
  { q:"La gamme de D majeur contient combien d'altérations ?", opts:["0","1","2","3"], a:2, fb:"D E F# G A B C# — deux dièses : F# et C#." },
  { q:"Quelle gamme ne contient aucune altération ?", opts:["G majeur","F majeur","C majeur","D majeur"], a:2, fb:"C majeur est la seule gamme majeure sans dièse ni bémol." },
  { q:"Combien de dièses contient A majeur ?", opts:["1","2","3","4"], a:2, fb:"A B C# D E F# G# — trois dièses : C#, F#, G#." },
  { q:"Combien de bémols contient Bb majeur ?", opts:["1","2","3","4"], a:1, fb:"Bb C D Eb F G A — deux bémols : Bb et Eb." },
  { q:"La gamme de E majeur contient combien de dièses ?", opts:["2","3","4","5"], a:2, fb:"E F# G# A B C# D# — quatre dièses." },
  { q:"Quelle gamme contient un seul bémol ?", opts:["Db majeur","Bb majeur","F majeur","Eb majeur"], a:2, fb:"F majeur contient un seul bémol : Bb." },
  { q:"Laquelle de ces notes n'appartient pas à G majeur ?", opts:["F#","C","F naturel","B"], a:2, fb:"G majeur contient F# — F naturel n'en fait pas partie." },
  { q:"Laquelle de ces notes n'appartient pas à F majeur ?", opts:["Bb","A","B naturel","C"], a:2, fb:"F majeur contient Bb — B naturel n'en fait pas partie." },
  { q:"Combien de notes C majeur et G majeur ont-ils en commun ?", opts:["4","5","6","7"], a:2, fb:"C majeur et G majeur partagent 6 notes. Seul le F (vs F#) diffère." },
  { q:"Combien de demi-tons contient une tierce majeure ?", opts:["2","3","4","5"], a:2, fb:"Tierce majeure = 4 demi-tons. Ex : C–E." },
  { q:"Combien de demi-tons contient une tierce mineure ?", opts:["2","3","4","5"], a:1, fb:"Tierce mineure = 3 demi-tons. Ex : D–F." },
  { q:"Combien de demi-tons contient une quinte juste ?", opts:["5","6","7","8"], a:2, fb:"Quinte juste = 7 demi-tons. Ex : C–G." },
  { q:"Combien de demi-tons contient une quarte juste ?", opts:["4","5","6","7"], a:1, fb:"Quarte juste = 5 demi-tons. Ex : C–F." },
  { q:"Combien de demi-tons contient une seconde majeure ?", opts:["1","2","3","4"], a:1, fb:"Seconde majeure = 2 demi-tons. Ex : C–D." },
  { q:"Combien de demi-tons contient une seconde mineure ?", opts:["1","2","3","4"], a:0, fb:"Seconde mineure = 1 demi-ton. Ex : E–F." },
  { q:"Combien de demi-tons contient une sixte majeure ?", opts:["7","8","9","10"], a:2, fb:"Sixte majeure = 9 demi-tons. Ex : C–A." },
  { q:"Combien de demi-tons contient une septième majeure ?", opts:["9","10","11","12"], a:2, fb:"Septième majeure = 11 demi-tons. Ex : C–B." },
  { q:"Combien de demi-tons contient le triton ?", opts:["5","6","7","8"], a:1, fb:"Triton = 6 demi-tons = exactement 3 tons. Ex : F–B en C majeur." },
  { q:"L'inversion d'une tierce majeure donne :", opts:["Sixte mineure","Sixte majeure","Septième mineure","Quinte juste"], a:0, fb:"3+6=9. La nature s'inverse : majeure → mineure. Tierce majeure → Sixte mineure." },
  { q:"L'inversion d'une quarte juste donne :", opts:["Quinte diminuée","Quinte juste","Sixte mineure","Tierce majeure"], a:1, fb:"4+5=9. La nature juste reste juste. Quarte juste → Quinte juste." },
  { q:"L'inversion du triton est :", opts:["Quinte juste","Quarte juste","Le triton lui-même","Sixte mineure"], a:2, fb:"Triton = 6 demi-tons. 12-6=6. Le triton est son propre renversement !" },
  { q:"L'inversion d'une tierce mineure donne :", opts:["Sixte majeure","Sixte mineure","Septième majeure","Quinte juste"], a:0, fb:"3+6=9. La nature s'inverse : mineure → majeure. Tierce mineure → Sixte majeure." },
  { q:"La somme du nom d'un intervalle et de son renversement vaut toujours :", opts:["7","8","9","12"], a:2, fb:"Toujours 9 : tierce(3)+sixte(6)=9 ; quarte(4)+quinte(5)=9 ; seconde(2)+septième(7)=9." },
  { q:"Quel intervalle sépare C et G ?", opts:["Quarte juste","Quinte juste","Sixte majeure","Tierce majeure"], a:1, fb:"C D E F G = 5 degrés → quinte. 7 demi-tons → juste." },
  { q:"Quel intervalle sépare C et F ?", opts:["Tierce majeure","Quarte juste","Quinte juste","Sixte mineure"], a:1, fb:"C D E F = 4 degrés → quarte. 5 demi-tons → juste." },
  { q:"Quel intervalle sépare C et E ?", opts:["Seconde majeure","Tierce mineure","Tierce majeure","Quarte juste"], a:2, fb:"C D E = 3 degrés → tierce. 4 demi-tons → majeure." },
  { q:"Quel intervalle sépare E et F ?", opts:["Seconde mineure","Seconde majeure","Tierce mineure","Triton"], a:0, fb:"E F = 2 degrés → seconde. 1 demi-ton → mineure. C'est l'un des deux demi-tons naturels." },
  { q:"Quel intervalle sépare F et B ?", opts:["Quinte juste","Quarte juste","Triton","Sixte mineure"], a:2, fb:"F G A B = 4 degrés → quarte. Mais 6 demi-tons → quarte augmentée = triton." },
  { q:"Quel intervalle sépare B et C ?", opts:["Seconde majeure","Seconde mineure","Tierce mineure","Triton"], a:1, fb:"B C = 2 degrés → seconde. 1 demi-ton → mineure. C'est l'autre demi-ton naturel." },
  { q:"Entre quels degrés se trouvent les ½ tons de la gamme majeure ?", opts:["I-II et V-VI","III-IV et VII-VIII","II-III et VI-VII","IV-V et VI-VII"], a:1, fb:"Les demi-tons se trouvent entre III-IV (E-F) et VII-VIII (B-C). Ce sont les seuls endroits sans touche noire entre deux touches blanches." },
  { q:"Entre E et F, il y a :", opts:["1 ton","½ ton","1 ton et ½","2 tons"], a:1, fb:"E-F est l'un des deux demi-tons naturels du piano — deux touches blanches adjacentes sans touche noire entre elles." },
  { q:"Entre B et C, il y a :", opts:["1 ton","½ ton","1 ton et ½","2 tons"], a:1, fb:"B-C est l'autre demi-ton naturel du piano." },
  { q:"Comment s'appelle C en notation française ?", opts:["La","Ré","Do","Sol"], a:2, fb:"C = Do. La correspondance complète : C=Do, D=Ré, E=Mi, F=Fa, G=Sol, A=La, B=Si." },
  { q:"Comment s'appelle A en notation française ?", opts:["Mi","Fa","Sol","La"], a:3, fb:"A = La. La fréquence standard du A est 440 Hz (A4)." },
  { q:"Comment s'appelle B en notation française ?", opts:["La","Si","Do","Ré"], a:1, fb:"B = Si. En Allemagne, 'B' désigne Sib et 'H' désigne Si naturel !" },
  { q:"Comment s'appelle G en notation française ?", opts:["Mi","Fa","Sol","La"], a:2, fb:"G = Sol. La gamme de Sol majeur se note G major en anglais." },
  { q:"Qu'est-ce qu'un dièse (#) ?", opts:["Baisse d'un ½ ton","Hausse d'un ½ ton","Hausse d'un ton","Baisse d'un ton"], a:1, fb:"Un dièse (#) élève la note d'un demi-ton. F# est un demi-ton au-dessus de F." },
  { q:"Qu'est-ce qu'un bémol (♭) ?", opts:["Baisse d'un ½ ton","Hausse d'un ½ ton","Hausse d'un ton","Baisse d'un ton"], a:0, fb:"Un bémol (♭) abaisse la note d'un demi-ton. Bb est un demi-ton en dessous de B." },
  { q:"F# et Gb désignent-ils la même touche sur un piano ?", opts:["Non, jamais","Oui, en tempérament égal","Seulement en G majeur","Seulement en F majeur"], a:1, fb:"En tempérament égal, F# = Gb : ce sont des enharmoniques — même touche, noms différents selon le contexte." },
  { q:"Comment appelle-t-on deux notes qui sonnent pareil mais s'écrivent différemment ?", opts:["Synonymes","Enharmoniques","Homophones","Chromatiques"], a:1, fb:"Les enharmoniques sonnent pareil mais ont des noms différents. Ex : F# = Gb." },
  { q:"Pourquoi la gamme à 7 degrés s'est-elle imposée ?", opts:["Elle est plus facile à jouer","Elle était associée au chiffre 'parfait' 7 et jugée harmonieuse par les Grecs","Elle est la seule possible acoustiquement","Elle correspond aux 7 planètes connues"], a:1, fb:"Les théoriciens grecs privilégiaient le chiffre 7 (nombre 'parfait'). La gamme à 7 sons, issue d'empilements de quintes, s'est imposée comme référence." },
  { q:"En C majeur, quel est le VIe degré ?", opts:["D","E","F","A"], a:3, fb:"C(I) D(II) E(III) F(IV) G(V) A(VI). Le VIe degré de C majeur est A (La) — appelé sus-dominante." },
  { q:"Quel est le nom du IIe degré ?", opts:["Tonique","Sus-tonique","Médiante","Sensible"], a:1, fb:"Le IIe degré s'appelle sus-tonique — il est juste au-dessus de la tonique (I)." },
  { q:"Quel est le nom du VIe degré ?", opts:["Sus-dominante","Médiante","Sous-dominante","Sensible"], a:0, fb:"Le VIe degré s'appelle sus-dominante — il est juste au-dessus de la dominante (V)." },
  { q:"En A majeur, quelle est la sensible ?", opts:["F#","G","G#","B"], a:2, fb:"A B C# D E F# G#(VII). La sensible de A majeur est G#, à ½ ton sous A." },
  { q:"En E majeur, quelle est la sous-dominante ?", opts:["A","B","C#","D#"], a:0, fb:"E(I) F#(II) G#(III) A(IV). La sous-dominante de E majeur est A." },
  { q:"En Bb majeur, quelle est la dominante ?", opts:["Eb","F","G","Ab"], a:1, fb:"Bb(I) C(II) D(III) Eb(IV) F(V). La dominante de Bb majeur est F." },
  { q:"Combien de demi-tons contient une sixte mineure ?", opts:["7","8","9","10"], a:1, fb:"Sixte mineure = 8 demi-tons. Ex : E–C (ascendant). C'est l'inversion de la tierce majeure (4 + 8 = 12)." },
  { q:"Combien de demi-tons contient une septième mineure ?", opts:["9","10","11","12"], a:1, fb:"Septième mineure = 10 demi-tons. Ex : C–Bb. C'est l'inversion de la seconde majeure (2 + 10 = 12)." },
  { q:"L'inversion d'une quinte juste donne :", opts:["Quarte diminuée","Quarte juste","Tierce majeure","Sixte mineure"], a:1, fb:"5 + 4 = 9. La nature juste reste juste. Quinte juste → Quarte juste." },
  { q:"En B majeur, combien de dièses y a-t-il ?", opts:["3","4","5","6"], a:2, fb:"B majeur a 5 dièses : F#, C#, G#, D#, A#. La gamme : B C# D# E F# G# A#." },
  { q:"En Ab majeur, combien de bémols y a-t-il ?", opts:["2","3","4","5"], a:2, fb:"Ab majeur a 4 bémols : Bb, Eb, Ab, Db. La gamme : Ab Bb C Db Eb F G." },
  { q:"Quel intervalle est formé entre le IVe et le VIIe degré d'une gamme majeure ?", opts:["Quinte juste","Quarte augmentée (triton)","Tierce majeure","Sixte mineure"], a:1, fb:"En C majeur : F(IV) et B(VII). F–B = 6 demi-tons = quarte augmentée = triton. C'est le triton fonctionnel qui génère la tension harmonique." },
];

// ─── English ──────────────────────────────────────────────────────────────────

const degreesEn: Degree[] = [
  { num:"I",   note:"C", color:"#0F6E56", bg:"#E1F5EE", name:"Tonic",        origin:"From Latin « tonus » — the reference pitch, the center of gravity of the entire scale. All other notes revolve around it.", attraction:"It attracts all other notes, especially the 7th degree (the leading tone), located only a semitone below." },
  { num:"II",  note:"D", color:"#534AB7", bg:"#EEEDFE", name:"Supertonic",    origin:"Literally « above the tonic » — the note immediately above the tonal center.", attraction:"Unstable, it tends toward the 1st degree (descending) or the 3rd (ascending). It is often the starting point of harmonic progressions." },
  { num:"III", note:"E", color:"#185FA5", bg:"#E6F1FB", name:"Mediant",       origin:"From Latin « medius » — it lies halfway between the tonic (I) and the dominant (V), 4 semitones from each.", attraction:"It defines the color of the scale: major third (4 semitones) = major sound, minor third (3 semitones) = minor sound." },
  { num:"IV",  note:"F", color:"#993C1D", bg:"#FAECE7", name:"Subdominant",   origin:"« Below the dominant » — it is a fifth below the dominant, or a fourth above the tonic.", attraction:"It prepares tension. In a resolution, the 4th degree tends to descend to the 3rd — one of the most characteristic movements in tonal harmony." },
  { num:"V",   note:"G", color:"#BA7517", bg:"#FAEEDA", name:"Dominant",      origin:"From Latin « dominare » — it dominates the scale, a perfect fifth above the tonic. It is the second structural pole.", attraction:"It strongly calls for resolution toward the tonic. The dominant chord is the most tense in the scale — it drives the movement of musical discourse." },
  { num:"VI",  note:"A", color:"#3B6D11", bg:"#EAF3DE", name:"Submediant",    origin:"« Above the dominant » — a second above the 5th degree.", attraction:"Its relative stability makes it a natural substitute for the tonic. The deceptive cadence (V→VI) exploits this relationship to surprise the ear." },
  { num:"VII", note:"B", color:"#A32D2D", bg:"#FCEBEB", name:"Leading tone",  origin:"« Leading tone » because it leads to the tonic — only a semitone below the 1st degree.", attraction:"The most powerful attraction in the entire scale. The leading tone almost obligatorily rises to the tonic. Its instability is the main driver of harmonic resolution." },
];

const intervalsEn: IntervalDef[] = [
  { name:"Minor second",  semis:1, nature:"minor",   example:"E → F", exampleNotes:["E",3,"F",3], inverse:"Major seventh", inverseSemis:11, inverseNature:"major"   },
  { name:"Major second",  semis:2, nature:"major",   example:"C → D", exampleNotes:["C",3,"D",3], inverse:"Minor seventh", inverseSemis:10, inverseNature:"minor"   },
  { name:"Minor third",   semis:3, nature:"minor",   example:"D → F", exampleNotes:["D",3,"F",3], inverse:"Major sixth",   inverseSemis:9,  inverseNature:"major"   },
  { name:"Major third",   semis:4, nature:"major",   example:"C → E", exampleNotes:["C",3,"E",3], inverse:"Minor sixth",   inverseSemis:8,  inverseNature:"minor"   },
  { name:"Perfect fourth",semis:5, nature:"perfect", example:"C → F", exampleNotes:["C",3,"F",3], inverse:"Perfect fifth", inverseSemis:7,  inverseNature:"perfect" },
  { name:"Tritone",       semis:6, nature:"aug. / dim.", example:"F → B", exampleNotes:["F",3,"B",3], inverse:"Tritone",   inverseSemis:6,  inverseNature:"aug. / dim." },
];

const questionsEn: Question[] = [
  { q:"Which monk invented note names in the 11th century?", opts:["Rameau","Guido d'Arezzo","Bach","Pythagoras"], a:1, fb:"Guido d'Arezzo created solmization by drawing syllables from the first words of each verse of a hymn to Saint John the Baptist." },
  { q:"Why is the 7th degree called the 'leading tone'?", opts:["Because it is the highest","Because it is expressive","Because it is a ½ tone from the tonic","Because it is always flat"], a:2, fb:"The leading tone is ½ tone below the tonic. This proximity creates an almost irresistible upward attraction." },
  { q:"What is the whole/half step formula of a major scale?", opts:["W-W-W-H-W-W-H","W-H-W-W-H-W-W","W-W-H-W-W-W-H","H-W-W-W-W-H-W"], a:2, fb:"W-W-H-W-W-W-H is the universal formula. The two half steps are between degrees III–IV and VII–I." },
  { q:"What does 'mediant' mean?", opts:["Halfway between tonic and dominant","The highest note","The note below the dominant","The most unstable note"], a:0, fb:"The mediant (3rd degree) is halfway between I and V — 4 semitones from each." },
  { q:"How many notes does a diatonic scale contain?", opts:["5","6","7","8"], a:2, fb:"A diatonic scale contains 7 distinct notes, plus the repetition of the tonic at the octave." },
  { q:"How many semitones are in an octave?", opts:["6","10","12","14"], a:2, fb:"One octave = 12 semitones. This is the basis of Western equal temperament." },
  { q:"Which consonance was used to build the natural scale?", opts:["The third","The perfect fifth (3/2)","The second","The tritone"], a:1, fb:"The perfect fifth (ratio 3/2) is the second fundamental consonance after the octave. Stacking 6 fifths yields the 7 notes of the scale." },
  { q:"What is the frequency ratio of an octave?", opts:["3/2","4/3","2/1","5/4"], a:2, fb:"Octave = ratio 2/1. A note at 220 Hz has its octave at 440 Hz." },
  { q:"How many semitones make up a whole tone?", opts:["1","2","3","4"], a:1, fb:"1 whole tone = 2 semitones. Ex: C–D = 1 tone = 2 semitones (C → C# → D)." },
  { q:"What is the smallest interval in Western music?", opts:["The whole tone","The semitone","The minor third","The major second"], a:1, fb:"The semitone is the basic unit. On a piano, it is the distance between two adjacent keys." },
  { q:"At what frequency is standard A (A4) tuned?", opts:["220 Hz","330 Hz","440 Hz","880 Hz"], a:2, fb:"A4 = 440 Hz is the international tuning reference since 1939." },
  { q:"How many octaves does a standard 88-key piano cover?", opts:["5","7","8","10"], a:1, fb:"An 88-key piano covers 7 octaves and a minor third (from A0 to C8)." },
  { q:"Which degree is called the 'dominant'?", opts:["3rd","4th","5th","6th"], a:2, fb:"The dominant is the 5th degree — a perfect fifth above the tonic." },
  { q:"Which degree is called the 'subdominant'?", opts:["2nd","3rd","4th","5th"], a:2, fb:"The subdominant (4th) is a fifth below the dominant, or a fourth above the tonic." },
  { q:"Which degree is called the 'supertonic'?", opts:["1st","2nd","3rd","4th"], a:1, fb:"The supertonic (2nd) is the note immediately above the tonic." },
  { q:"In C major, which note is the leading tone?", opts:["A","G","B","F"], a:2, fb:"B is the 7th degree of C major — ½ tone below C." },
  { q:"In C major, which note is the mediant?", opts:["D","E","F","G"], a:1, fb:"E is the 3rd degree of C major — halfway between C (I) and G (V)." },
  { q:"In C major, which note is the dominant?", opts:["F","G","A","B"], a:1, fb:"G is the 5th degree of C major." },
  { q:"In C major, which note is the subdominant?", opts:["E","F","G","A"], a:1, fb:"F is the 4th degree of C major." },
  { q:"In G major, which note is the dominant?", opts:["C","D","E","F#"], a:1, fb:"G(I) A(II) B(III) C(IV) D(V). The dominant of G major is D." },
  { q:"In G major, which note is the leading tone?", opts:["E","F","F#","G#"], a:2, fb:"G A B C D E F#(VII). The leading tone of G major is F#." },
  { q:"In F major, which note is the leading tone?", opts:["E","G","Bb","D"], a:0, fb:"F G A Bb C D E(VII). The leading tone of F major is E." },
  { q:"In D major, which note is the subdominant?", opts:["G","A","B","C#"], a:0, fb:"D(I) E(II) F#(III) G(IV). The subdominant of D major is G." },
  { q:"In D major, which note is the leading tone?", opts:["C","C#","D#","B"], a:1, fb:"D E F# G A B C#(VII). The leading tone is C#, ½ tone below D." },
  { q:"What is the 7th degree of G major?", opts:["F","F#","G#","A"], a:1, fb:"G(I) A(II) B(III) C(IV) D(V) E(VI) F#(VII). The leading tone of G major is F#." },
  { q:"What is the 4th degree of G major?", opts:["C","D","E","F#"], a:0, fb:"G(I) A(II) B(III) C(IV). The subdominant of G major is C." },
  { q:"What is the 5th degree of F major?", opts:["C","Bb","D","E"], a:0, fb:"F(I) G(II) A(III) Bb(IV) C(V). The dominant of F major is C." },
  { q:"What is the 3rd degree of D major?", opts:["F","F#","G","G#"], a:1, fb:"D(I) E(II) F#(III). The mediant of D major is F#." },
  { q:"Which scale has E as its leading tone?", opts:["C major","F major","G major","Bb major"], a:1, fb:"In F major: F G A Bb C D E(VII). E is the leading tone ½ tone below F." },
  { q:"Which scale has B as its leading tone?", opts:["C major","G major","F major","D major"], a:0, fb:"In C major: C D E F G A B(VII). B is the leading tone ½ tone below C." },
  { q:"What sharp does the G major scale contain?", opts:["C#","F#","G#","B#"], a:1, fb:"G A B C D E F# — the F# ensures the ½ tone between the 6th and 7th degrees." },
  { q:"What accidental does the F major scale contain?", opts:["F#","Bb","Eb","C#"], a:1, fb:"F G A Bb C D E — the Bb ensures the ½ tone between the 3rd (A) and 4th (Bb) degrees." },
  { q:"How many accidentals does the D major scale contain?", opts:["0","1","2","3"], a:2, fb:"D E F# G A B C# — two sharps: F# and C#." },
  { q:"Which scale contains no accidentals?", opts:["G major","F major","C major","D major"], a:2, fb:"C major is the only major scale with no sharps or flats." },
  { q:"How many sharps does A major have?", opts:["1","2","3","4"], a:2, fb:"A B C# D E F# G# — three sharps: C#, F#, G#." },
  { q:"How many flats does Bb major have?", opts:["1","2","3","4"], a:1, fb:"Bb C D Eb F G A — two flats: Bb and Eb." },
  { q:"How many sharps does E major have?", opts:["2","3","4","5"], a:2, fb:"E F# G# A B C# D# — four sharps." },
  { q:"Which scale contains only one flat?", opts:["Db major","Bb major","F major","Eb major"], a:2, fb:"F major contains only one flat: Bb." },
  { q:"Which of these notes does NOT belong to G major?", opts:["F#","C","F natural","B"], a:2, fb:"G major contains F# — F natural does not belong to it." },
  { q:"Which of these notes does NOT belong to F major?", opts:["Bb","A","B natural","C"], a:2, fb:"F major contains Bb — B natural does not belong to it." },
  { q:"How many notes do C major and G major share?", opts:["4","5","6","7"], a:2, fb:"C major and G major share 6 notes. Only F (vs F#) differs." },
  { q:"How many semitones does a major third contain?", opts:["2","3","4","5"], a:2, fb:"Major third = 4 semitones. Ex: C–E." },
  { q:"How many semitones does a minor third contain?", opts:["2","3","4","5"], a:1, fb:"Minor third = 3 semitones. Ex: D–F." },
  { q:"How many semitones does a perfect fifth contain?", opts:["5","6","7","8"], a:2, fb:"Perfect fifth = 7 semitones. Ex: C–G." },
  { q:"How many semitones does a perfect fourth contain?", opts:["4","5","6","7"], a:1, fb:"Perfect fourth = 5 semitones. Ex: C–F." },
  { q:"How many semitones does a major second contain?", opts:["1","2","3","4"], a:1, fb:"Major second = 2 semitones. Ex: C–D." },
  { q:"How many semitones does a minor second contain?", opts:["1","2","3","4"], a:0, fb:"Minor second = 1 semitone. Ex: E–F." },
  { q:"How many semitones does a major sixth contain?", opts:["7","8","9","10"], a:2, fb:"Major sixth = 9 semitones. Ex: C–A." },
  { q:"How many semitones does a major seventh contain?", opts:["9","10","11","12"], a:2, fb:"Major seventh = 11 semitones. Ex: C–B." },
  { q:"How many semitones does the tritone contain?", opts:["5","6","7","8"], a:1, fb:"Tritone = 6 semitones = exactly 3 whole tones. Ex: F–B in C major." },
  { q:"The inversion of a major third is:", opts:["Minor sixth","Major sixth","Minor seventh","Perfect fifth"], a:0, fb:"3+6=9. Quality inverts: major → minor. Major third → Minor sixth." },
  { q:"The inversion of a perfect fourth is:", opts:["Diminished fifth","Perfect fifth","Minor sixth","Major third"], a:1, fb:"4+5=9. Perfect quality stays perfect. Perfect fourth → Perfect fifth." },
  { q:"The inversion of the tritone is:", opts:["Perfect fifth","Perfect fourth","The tritone itself","Minor sixth"], a:2, fb:"Tritone = 6 semitones. 12-6=6. The tritone is its own inversion!" },
  { q:"The inversion of a minor third is:", opts:["Major sixth","Minor sixth","Major seventh","Perfect fifth"], a:0, fb:"3+6=9. Quality inverts: minor → major. Minor third → Major sixth." },
  { q:"The sum of an interval name and its inversion always equals:", opts:["7","8","9","12"], a:2, fb:"Always 9: third(3)+sixth(6)=9; fourth(4)+fifth(5)=9; second(2)+seventh(7)=9." },
  { q:"What interval separates C and G?", opts:["Perfect fourth","Perfect fifth","Major sixth","Major third"], a:1, fb:"C D E F G = 5 degrees → fifth. 7 semitones → perfect." },
  { q:"What interval separates C and F?", opts:["Major third","Perfect fourth","Perfect fifth","Minor sixth"], a:1, fb:"C D E F = 4 degrees → fourth. 5 semitones → perfect." },
  { q:"What interval separates C and E?", opts:["Major second","Minor third","Major third","Perfect fourth"], a:2, fb:"C D E = 3 degrees → third. 4 semitones → major." },
  { q:"What interval separates E and F?", opts:["Minor second","Major second","Minor third","Tritone"], a:0, fb:"E F = 2 degrees → second. 1 semitone → minor. One of the two natural semitones." },
  { q:"What interval separates F and B?", opts:["Perfect fifth","Perfect fourth","Tritone","Minor sixth"], a:2, fb:"F G A B = 4 degrees → fourth. But 6 semitones → augmented fourth = tritone." },
  { q:"What interval separates B and C?", opts:["Major second","Minor second","Minor third","Tritone"], a:1, fb:"B C = 2 degrees → second. 1 semitone → minor. The other natural semitone." },
  { q:"Between which degrees are the ½ tones in a major scale?", opts:["I-II and V-VI","III-IV and VII-VIII","II-III and VI-VII","IV-V and VI-VII"], a:1, fb:"The semitones are between III-IV (E-F) and VII-VIII (B-C). These are the only places with no black key between two white keys." },
  { q:"Between E and F there is:", opts:["1 whole tone","½ tone","1½ tones","2 whole tones"], a:1, fb:"E-F is one of the two natural semitones on the piano — two adjacent white keys with no black key between them." },
  { q:"Between B and C there is:", opts:["1 whole tone","½ tone","1½ tones","2 whole tones"], a:1, fb:"B-C is the other natural semitone on the piano." },
  { q:"What is C called in French notation?", opts:["La","Ré","Do","Sol"], a:2, fb:"C = Do. Full correspondence: C=Do, D=Ré, E=Mi, F=Fa, G=Sol, A=La, B=Si." },
  { q:"What is A called in French notation?", opts:["Mi","Fa","Sol","La"], a:3, fb:"A = La. The standard frequency for A is 440 Hz (A4)." },
  { q:"What is B called in French notation?", opts:["La","Si","Do","Ré"], a:1, fb:"B = Si. In Germany, 'B' means B-flat and 'H' means B-natural!" },
  { q:"What is G called in French notation?", opts:["Mi","Fa","Sol","La"], a:2, fb:"G = Sol. The G major scale is written G major in English." },
  { q:"What is a sharp (#)?", opts:["Lowers by ½ tone","Raises by ½ tone","Raises by 1 tone","Lowers by 1 tone"], a:1, fb:"A sharp (#) raises the note by a semitone. F# is a semitone above F." },
  { q:"What is a flat (♭)?", opts:["Lowers by ½ tone","Raises by ½ tone","Raises by 1 tone","Lowers by 1 tone"], a:0, fb:"A flat (♭) lowers the note by a semitone. Bb is a semitone below B." },
  { q:"Do F# and Gb refer to the same key on a piano?", opts:["No, never","Yes, in equal temperament","Only in G major","Only in F major"], a:1, fb:"In equal temperament, F# = Gb: they are enharmonic equivalents — same key, different names depending on context." },
  { q:"What do you call two notes that sound the same but are written differently?", opts:["Synonyms","Enharmonics","Homophones","Chromatics"], a:1, fb:"Enharmonics sound the same but have different names. Ex: F# = Gb." },
  { q:"Why did the 7-note scale prevail over others?", opts:["It is easier to play","It was associated with the 'perfect' number 7 and deemed harmonious by the Greeks","It is the only acoustically possible one","It corresponds to the 7 known planets"], a:1, fb:"Greek theorists favored the number 7 (a 'perfect' number). The 7-note scale, derived from stacked fifths, became the standard." },
  { q:"In C major, what is the 6th degree?", opts:["D","E","F","A"], a:3, fb:"C(I) D(II) E(III) F(IV) G(V) A(VI). The 6th degree of C major is A — called the submediant." },
  { q:"What is the name of the 2nd degree?", opts:["Tonic","Supertonic","Mediant","Leading tone"], a:1, fb:"The 2nd degree is called the supertonic — it is just above the tonic (I)." },
  { q:"What is the name of the 6th degree?", opts:["Submediant","Mediant","Subdominant","Leading tone"], a:0, fb:"The 6th degree is called the submediant — it is just above the dominant (V)." },
  { q:"In A major, what is the leading tone?", opts:["F#","G","G#","B"], a:2, fb:"A B C# D E F# G#(VII). The leading tone of A major is G#, ½ tone below A." },
  { q:"In E major, what is the subdominant?", opts:["A","B","C#","D#"], a:0, fb:"E(I) F#(II) G#(III) A(IV). The subdominant of E major is A." },
  { q:"In Bb major, what is the dominant?", opts:["Eb","F","G","Ab"], a:1, fb:"Bb(I) C(II) D(III) Eb(IV) F(V). The dominant of Bb major is F." },
  { q:"How many semitones does a minor sixth contain?", opts:["7","8","9","10"], a:1, fb:"Minor sixth = 8 semitones. Ex: E–C (ascending). It is the inversion of the major third (4 + 8 = 12)." },
  { q:"How many semitones does a minor seventh contain?", opts:["9","10","11","12"], a:1, fb:"Minor seventh = 10 semitones. Ex: C–Bb. It is the inversion of the major second (2 + 10 = 12)." },
  { q:"The inversion of a perfect fifth is:", opts:["Diminished fourth","Perfect fourth","Major third","Minor sixth"], a:1, fb:"5 + 4 = 9. Perfect quality stays perfect. Perfect fifth → Perfect fourth." },
  { q:"How many sharps does B major have?", opts:["3","4","5","6"], a:2, fb:"B major has 5 sharps: F#, C#, G#, D#, A#. Scale: B C# D# E F# G# A#." },
  { q:"How many flats does Ab major have?", opts:["2","3","4","5"], a:2, fb:"Ab major has 4 flats: Bb, Eb, Ab, Db. Scale: Ab Bb C Db Eb F G." },
  { q:"What interval is formed between the 4th and 7th degrees of a major scale?", opts:["Perfect fifth","Augmented fourth (tritone)","Major third","Minor sixth"], a:1, fb:"In C major: F(IV) and B(VII). F–B = 6 semitones = augmented fourth = tritone. This is the functional tritone that generates harmonic tension." },
];

// ─── Other locales (inherit fr quiz, translated degrees/intervals) ─────────────

const degreesEs: Degree[] = [
  { num:"I",   note:"C", color:"#0F6E56", bg:"#E1F5EE", name:"Tónica",        origin:"Del latín « tonus » — el sonido de referencia, el centro de gravedad de toda la escala. Todas las demás notas gravitan en torno a ella.", attraction:"Atrae a todas las demás notas, especialmente el 7.° grado (la sensible), situado a solo un semitono por debajo." },
  { num:"II",  note:"D", color:"#534AB7", bg:"#EEEDFE", name:"Supertónica",    origin:"Literalmente « sobre la tónica » — la nota inmediatamente superior al centro tonal.", attraction:"Inestable, tiende hacia el I.er grado (descendiendo) o hacia el III.° (ascendiendo). Es frecuentemente el punto de partida de las progresiones armónicas." },
  { num:"III", note:"E", color:"#185FA5", bg:"#E6F1FB", name:"Mediante",       origin:"Del latín « medius » — está a mitad de camino entre la tónica (I) y la dominante (V), a 4 semitonos de cada una.", attraction:"Define el color de la escala: tercera mayor (4 semitonos) = sonoridad mayor, tercera menor (3 semitonos) = sonoridad menor." },
  { num:"IV",  note:"F", color:"#993C1D", bg:"#FAECE7", name:"Subdominante",   origin:"« Bajo la dominante » — está una quinta por debajo de la dominante, o una cuarta por encima de la tónica.", attraction:"Prepara la tensión. En una resolución, el IV.° grado tiende a descender hacia el III.° — uno de los movimientos más característicos de la armonía tonal." },
  { num:"V",   note:"G", color:"#BA7517", bg:"#FAEEDA", name:"Dominante",      origin:"Del latín « dominare » — domina la escala, a una quinta justa por encima de la tónica. Es el segundo polo estructural.", attraction:"Llama fuertemente a la resolución hacia la tónica. El acorde de dominante es el más tenso de la escala — da movimiento al discurso musical." },
  { num:"VI",  note:"A", color:"#3B6D11", bg:"#EAF3DE", name:"Superdominante", origin:"« Sobre la dominante » — una segunda por encima del V.° grado.", attraction:"Su estabilidad relativa la convierte en un sustituto natural de la tónica. La cadencia rota (V→VI) aprovecha este parentesco para sorprender al oído." },
  { num:"VII", note:"B", color:"#A32D2D", bg:"#FCEBEB", name:"Sensible",       origin:"« Sensible » porque es sensible a la atracción de la tónica — a solo un semitono por debajo del I.er grado.", attraction:"La atracción más poderosa de toda la escala. La sensible asciende casi obligatoriamente hacia la tónica. Su inestabilidad es el motor principal de la resolución armónica." },
];

const intervalsEs: IntervalDef[] = [
  { name:"Segunda menor",  semis:1, nature:"menor",   example:"E → F", exampleNotes:["E",3,"F",3], inverse:"Séptima mayor", inverseSemis:11, inverseNature:"mayor"   },
  { name:"Segunda mayor",  semis:2, nature:"mayor",   example:"C → D", exampleNotes:["C",3,"D",3], inverse:"Séptima menor", inverseSemis:10, inverseNature:"menor"   },
  { name:"Tercera menor",  semis:3, nature:"menor",   example:"D → F", exampleNotes:["D",3,"F",3], inverse:"Sexta mayor",   inverseSemis:9,  inverseNature:"mayor"   },
  { name:"Tercera mayor",  semis:4, nature:"mayor",   example:"C → E", exampleNotes:["C",3,"E",3], inverse:"Sexta menor",   inverseSemis:8,  inverseNature:"menor"   },
  { name:"Cuarta justa",   semis:5, nature:"justa",   example:"C → F", exampleNotes:["C",3,"F",3], inverse:"Quinta justa",  inverseSemis:7,  inverseNature:"justa"   },
  { name:"Tritono",        semis:6, nature:"aum. / dis.", example:"F → B", exampleNotes:["F",3,"B",3], inverse:"Tritono",  inverseSemis:6,  inverseNature:"aum. / dis." },
];

const degreesDe: Degree[] = [
  { num:"I",   note:"C", color:"#0F6E56", bg:"#E1F5EE", name:"Tonika",       origin:"Vom Lateinischen « tonus » — der Referenzton, der Schwerpunkt der gesamten Tonleiter. Alle anderen Töne kreisen um sie herum.", attraction:"Sie zieht alle anderen Töne an, besonders den 7. Grad (den Leitton), der nur einen Halbton darunter liegt." },
  { num:"II",  note:"D", color:"#534AB7", bg:"#EEEDFE", name:"Supertonika",   origin:"Wörtlich « über der Tonika » — die unmittelbar über dem tonalen Zentrum liegende Note.", attraction:"Instabil, strebt sie zum 1. Grad (abwärts) oder zum 3. Grad (aufwärts). Sie ist oft der Ausgangspunkt harmonischer Progressionen." },
  { num:"III", note:"E", color:"#185FA5", bg:"#E6F1FB", name:"Mediante",      origin:"Vom Lateinischen « medius » — sie liegt auf halbem Weg zwischen Tonika (I) und Dominante (V), jeweils 4 Halbtöne entfernt.", attraction:"Sie bestimmt die Klangfarbe der Tonleiter: große Terz (4 Halbtöne) = Dur-Klang, kleine Terz (3 Halbtöne) = Moll-Klang." },
  { num:"IV",  note:"F", color:"#993C1D", bg:"#FAECE7", name:"Subdominante",  origin:"« Unter der Dominante » — sie liegt eine Quinte unter der Dominante oder eine Quarte über der Tonika.", attraction:"Sie bereitet die Spannung vor. Bei einer Auflösung tendiert der 4. Grad dazu, zum 3. zu sinken — eine der charakteristischsten Bewegungen der tonalen Harmonie." },
  { num:"V",   note:"G", color:"#BA7517", bg:"#FAEEDA", name:"Dominante",     origin:"Vom Lateinischen « dominare » — sie beherrscht die Tonleiter, eine reine Quinte über der Tonika. Sie ist der zweite strukturelle Pol.", attraction:"Sie verlangt stark nach Auflösung zur Tonika hin. Der Dominantakkord ist der spannungsreichste der Tonleiter — er treibt den musikalischen Diskurs voran." },
  { num:"VI",  note:"A", color:"#3B6D11", bg:"#EAF3DE", name:"Submediant",    origin:"« Über der Dominante » — eine Sekunde über dem 5. Grad.", attraction:"Seine relative Stabilität macht ihn zu einem natürlichen Substitut der Tonika. Die trügerische Kadenz (V→VI) nutzt diese Verwandtschaft, um das Ohr zu überraschen." },
  { num:"VII", note:"B", color:"#A32D2D", bg:"#FCEBEB", name:"Leitton",       origin:"« Leitton » weil er zur Tonika führt — nur einen Halbton unter dem 1. Grad.", attraction:"Die stärkste Anziehungskraft in der gesamten Tonleiter. Der Leitton steigt fast obligatorisch zur Tonika auf. Seine Instabilität ist die Hauptantriebskraft der harmonischen Auflösung." },
];

const intervalsDe: IntervalDef[] = [
  { name:"Kleine Sekunde",  semis:1, nature:"klein",  example:"E → F", exampleNotes:["E",3,"F",3], inverse:"Große Septime",  inverseSemis:11, inverseNature:"groß"  },
  { name:"Große Sekunde",   semis:2, nature:"groß",   example:"C → D", exampleNotes:["C",3,"D",3], inverse:"Kleine Septime", inverseSemis:10, inverseNature:"klein" },
  { name:"Kleine Terz",     semis:3, nature:"klein",  example:"D → F", exampleNotes:["D",3,"F",3], inverse:"Große Sexte",    inverseSemis:9,  inverseNature:"groß"  },
  { name:"Große Terz",      semis:4, nature:"groß",   example:"C → E", exampleNotes:["C",3,"E",3], inverse:"Kleine Sexte",   inverseSemis:8,  inverseNature:"klein" },
  { name:"Reine Quarte",    semis:5, nature:"rein",   example:"C → F", exampleNotes:["C",3,"F",3], inverse:"Reine Quinte",   inverseSemis:7,  inverseNature:"rein"  },
  { name:"Tritonus",        semis:6, nature:"üb. / verm.", example:"F → B", exampleNotes:["F",3,"B",3], inverse:"Tritonus", inverseSemis:6,  inverseNature:"üb. / verm." },
];

const degreesIt: Degree[] = [
  { num:"I",   note:"C", color:"#0F6E56", bg:"#E1F5EE", name:"Tonica",          origin:"Dal latino « tonus » — il suono di riferimento, il centro di gravità dell'intera scala. Tutte le altre note gravitano attorno ad essa.", attraction:"Attrae tutte le altre note, soprattutto il VII grado (la sensibile), situato a solo un semitono sotto." },
  { num:"II",  note:"D", color:"#534AB7", bg:"#EEEDFE", name:"Sopratonica",      origin:"Letteralmente « sopra la tonica » — la nota immediatamente superiore al centro tonale.", attraction:"Instabile, tende verso il I grado (scendendo) o verso il III (salendo). È spesso il punto di partenza delle progressioni armoniche." },
  { num:"III", note:"E", color:"#185FA5", bg:"#E6F1FB", name:"Mediante",         origin:"Dal latino « medius » — si trova a metà strada tra la tonica (I) e la dominante (V), a 4 semitoni da ciascuna.", attraction:"Definisce il colore della scala: terza maggiore (4 semitoni) = suono maggiore, terza minore (3 semitoni) = suono minore." },
  { num:"IV",  note:"F", color:"#993C1D", bg:"#FAECE7", name:"Sottodominante",   origin:"« Sotto la dominante » — si trova una quinta sotto la dominante, o una quarta sopra la tonica.", attraction:"Prepara la tensione. In una risoluzione, il IV grado tende a scendere verso il III — uno dei movimenti più caratteristici dell'armonia tonale." },
  { num:"V",   note:"G", color:"#BA7517", bg:"#FAEEDA", name:"Dominante",        origin:"Dal latino « dominare » — domina la scala, a una quinta giusta sopra la tonica. È il secondo polo strutturale.", attraction:"Chiama fortemente la risoluzione verso la tonica. L'accordo di dominante è il più teso della scala — è lui che dà movimento al discorso musicale." },
  { num:"VI",  note:"A", color:"#3B6D11", bg:"#EAF3DE", name:"Sopradominante",   origin:"« Sopra la dominante » — una seconda sopra il V grado.", attraction:"La sua relativa stabilità ne fa un sostituto naturale della tonica. La cadenza ingannevole (V→VI) sfrutta questa parentela per sorprendere l'orecchio." },
  { num:"VII", note:"B", color:"#A32D2D", bg:"#FCEBEB", name:"Sensibile",        origin:"« Sensibile » perché è sensibile all'attrazione della tonica — a solo un semitono sotto il I grado.", attraction:"L'attrazione più potente dell'intera scala. La sensibile sale quasi obbligatoriamente verso la tonica. La sua instabilità è il principale motore della risoluzione armonica." },
];

const intervalsIt: IntervalDef[] = [
  { name:"Seconda minore",  semis:1, nature:"minore",   example:"E → F", exampleNotes:["E",3,"F",3], inverse:"Settima maggiore", inverseSemis:11, inverseNature:"maggiore"   },
  { name:"Seconda maggiore",semis:2, nature:"maggiore", example:"C → D", exampleNotes:["C",3,"D",3], inverse:"Settima minore",   inverseSemis:10, inverseNature:"minore"     },
  { name:"Terza minore",    semis:3, nature:"minore",   example:"D → F", exampleNotes:["D",3,"F",3], inverse:"Sesta maggiore",   inverseSemis:9,  inverseNature:"maggiore"   },
  { name:"Terza maggiore",  semis:4, nature:"maggiore", example:"C → E", exampleNotes:["C",3,"E",3], inverse:"Sesta minore",     inverseSemis:8,  inverseNature:"minore"     },
  { name:"Quarta giusta",   semis:5, nature:"giusta",   example:"C → F", exampleNotes:["C",3,"F",3], inverse:"Quinta giusta",    inverseSemis:7,  inverseNature:"giusta"     },
  { name:"Tritono",         semis:6, nature:"eccedente / dim.", example:"F → B", exampleNotes:["F",3,"B",3], inverse:"Tritono", inverseSemis:6,  inverseNature:"eccedente / dim." },
];

const degreesPt: Degree[] = [
  { num:"I",   note:"C", color:"#0F6E56", bg:"#E1F5EE", name:"Tônica",          origin:"Do latim « tonus » — o som de referência, o centro de gravidade de toda a escala. Todas as outras notas gravitam ao redor dela.", attraction:"Atrai todas as outras notas, especialmente o 7.° grau (a sensível), situado a apenas um semitom abaixo." },
  { num:"II",  note:"D", color:"#534AB7", bg:"#EEEDFE", name:"Supertônica",      origin:"Literalmente « acima da tônica » — a nota imediatamente superior ao centro tonal.", attraction:"Instável, tende para o 1.° grau (descendo) ou para o 3.° (subindo). É frequentemente o ponto de partida das progressões harmônicas." },
  { num:"III", note:"E", color:"#185FA5", bg:"#E6F1FB", name:"Mediante",         origin:"Do latim « medius » — está no meio do caminho entre a tônica (I) e a dominante (V), a 4 semitons de cada uma.", attraction:"Define a cor da escala: terça maior (4 semitons) = sonoridade maior, terça menor (3 semitons) = sonoridade menor." },
  { num:"IV",  note:"F", color:"#993C1D", bg:"#FAECE7", name:"Subdominante",     origin:"« Abaixo da dominante » — está uma quinta abaixo da dominante, ou uma quarta acima da tônica.", attraction:"Prepara a tensão. Numa resolução, o 4.° grau tende a descer para o 3.° — um dos movimentos mais característicos da harmonia tonal." },
  { num:"V",   note:"G", color:"#BA7517", bg:"#FAEEDA", name:"Dominante",        origin:"Do latim « dominare » — domina a escala, a uma quinta justa acima da tônica. É o segundo polo estrutural.", attraction:"Chama fortemente a resolução para a tônica. O acorde de dominante é o mais tenso da escala — é ele que dá movimento ao discurso musical." },
  { num:"VI",  note:"A", color:"#3B6D11", bg:"#EAF3DE", name:"Superdominante",   origin:"« Acima da dominante » — uma segunda acima do 5.° grau.", attraction:"Sua estabilidade relativa a torna um substituto natural da tônica. A cadência interrompida (V→VI) explora esse parentesco para surpreender o ouvido." },
  { num:"VII", note:"B", color:"#A32D2D", bg:"#FCEBEB", name:"Sensível",         origin:"« Sensível » pois é sensível à atração da tônica — a apenas um semitom abaixo do 1.° grau.", attraction:"A atração mais poderosa de toda a escala. A sensível sobe quase obrigatoriamente para a tônica. Sua instabilidade é o principal motor da resolução harmônica." },
];

const intervalsPt: IntervalDef[] = [
  { name:"Segunda menor",  semis:1, nature:"menor",   example:"E → F", exampleNotes:["E",3,"F",3], inverse:"Sétima maior",  inverseSemis:11, inverseNature:"maior"   },
  { name:"Segunda maior",  semis:2, nature:"maior",   example:"C → D", exampleNotes:["C",3,"D",3], inverse:"Sétima menor",  inverseSemis:10, inverseNature:"menor"   },
  { name:"Terça menor",    semis:3, nature:"menor",   example:"D → F", exampleNotes:["D",3,"F",3], inverse:"Sexta maior",   inverseSemis:9,  inverseNature:"maior"   },
  { name:"Terça maior",    semis:4, nature:"maior",   example:"C → E", exampleNotes:["C",3,"E",3], inverse:"Sexta menor",   inverseSemis:8,  inverseNature:"menor"   },
  { name:"Quarta justa",   semis:5, nature:"justa",   example:"C → F", exampleNotes:["C",3,"F",3], inverse:"Quinta justa",  inverseSemis:7,  inverseNature:"justa"   },
  { name:"Trítono",        semis:6, nature:"aum. / dim.", example:"F → B", exampleNotes:["F",3,"B",3], inverse:"Trítono",  inverseSemis:6,  inverseNature:"aum. / dim." },
];

// ─── Export ───────────────────────────────────────────────────────────────────

export const cours1Content: Record<string, Cours1Locale> = {
  fr: { degrees: degreesFr, intervals: intervalsFr, questions: questionsFr },
  en: { degrees: degreesEn, intervals: intervalsEn, questions: questionsEn },
  es: { degrees: degreesEs, intervals: intervalsEs, questions: questionsFr },
  de: { degrees: degreesDe, intervals: intervalsDe, questions: questionsFr },
  it: { degrees: degreesIt, intervals: intervalsIt, questions: questionsFr },
  pt: { degrees: degreesPt, intervals: intervalsPt, questions: questionsFr },
};
