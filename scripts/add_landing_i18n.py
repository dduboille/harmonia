"""Add landing page translations to all message files."""
import json, os

base = os.path.join(os.path.dirname(__file__), "..", "messages")

LANDING = {
  "fr": {
    "nav_scales": "Tonalités",
    "landing": {
      "topbar": "Cours 23 disponible — Composer dans le style des maîtres",
      "topbarCta": "Découvrir →",
      "badge": "Niveaux 1 & 2 · 23 cours · 700+ exercices",
      "h1": "Maîtrisez l'harmonie tonale.",
      "h1em": "Vraiment.",
      "sub": "De la gamme aux techniques des grands compositeurs — 23 cours interactifs, 700+ exercices avec feedback harmonique en temps réel, dans les 24 tonalités.",
      "cta1": "Commencer gratuitement",
      "cta2": "Explorer les tonalités",
      "footer": "Gratuit pour commencer · Aucune carte requise · 6 langues",
      "navCourses": "Cours",
      "navAtelier": "Atelier",
      "navScales": "Tonalités",
      "methodLabel": "Méthode",
      "methodH2": "L'apprentissage par la pratique",
      "featuresLabel": "Fonctionnalités",
      "featuresH2": "Tout ce qu'il faut pour progresser",
      "pricingLabel": "Tarifs",
      "pricingH2": "Choisissez votre rythme",
      "pricingSub": "Commencez gratuitement. Passez Pro quand vous êtes prêt.",
      "ctaH2": "Commencez à comprendre",
      "ctaEm": "la musique",
      "ctaSub": "3 cours gratuits. Aucune carte de crédit. Commencez maintenant.",
      "ctaBtn": "Commencer gratuitement →"
    }
  },
  "en": {
    "nav_scales": "Keys",
    "landing": {
      "topbar": "Course 23 available — Composing in the style of the masters",
      "topbarCta": "Discover →",
      "badge": "Levels 1 & 2 · 23 courses · 700+ exercises",
      "h1": "Master tonal harmony.",
      "h1em": "Really.",
      "sub": "From scales to the techniques of the great composers — 23 interactive courses, 700+ exercises with real-time harmonic feedback, in 24 keys.",
      "cta1": "Start for free",
      "cta2": "Explore the keys",
      "footer": "Free to start · No card required · 6 languages",
      "navCourses": "Courses",
      "navAtelier": "Workshop",
      "navScales": "Keys",
      "methodLabel": "Method",
      "methodH2": "Learning through practice",
      "featuresLabel": "Features",
      "featuresH2": "Everything you need to progress",
      "pricingLabel": "Pricing",
      "pricingH2": "Choose your pace",
      "pricingSub": "Start for free. Go Pro when you're ready.",
      "ctaH2": "Start understanding",
      "ctaEm": "music",
      "ctaSub": "3 free courses. No credit card. Start now.",
      "ctaBtn": "Start for free →"
    }
  },
  "it": {
    "nav_scales": "Tonalità",
    "landing": {
      "topbar": "Lezione 23 disponibile — Comporre nello stile dei maestri",
      "topbarCta": "Scopri →",
      "badge": "Livelli 1 & 2 · 23 lezioni · 700+ esercizi",
      "h1": "Padroneggia l'armonia tonale.",
      "h1em": "Davvero.",
      "sub": "Dalle scale alle tecniche dei grandi compositori — 23 lezioni interattive, 700+ esercizi con feedback armonico in tempo reale, in 24 tonalità.",
      "cta1": "Inizia gratuitamente",
      "cta2": "Esplora le tonalità",
      "footer": "Gratuito per iniziare · Nessuna carta richiesta · 6 lingue",
      "navCourses": "Lezioni",
      "navAtelier": "Laboratorio",
      "navScales": "Tonalità",
      "methodLabel": "Metodo",
      "methodH2": "Imparare attraverso la pratica",
      "featuresLabel": "Funzionalità",
      "featuresH2": "Tutto il necessario per progredire",
      "pricingLabel": "Prezzi",
      "pricingH2": "Scegli il tuo ritmo",
      "pricingSub": "Inizia gratis. Passa al Pro quando sei pronto.",
      "ctaH2": "Inizia a capire",
      "ctaEm": "la musica",
      "ctaSub": "3 lezioni gratuite. Nessuna carta di credito. Inizia ora.",
      "ctaBtn": "Inizia gratuitamente →"
    }
  },
  "es": {
    "nav_scales": "Tonalidades",
    "landing": {
      "topbar": "Curso 23 disponible — Componer al estilo de los maestros",
      "topbarCta": "Descubrir →",
      "badge": "Niveles 1 & 2 · 23 cursos · 700+ ejercicios",
      "h1": "Domina la armonía tonal.",
      "h1em": "De verdad.",
      "sub": "De las escalas a las técnicas de los grandes compositores — 23 cursos interactivos, 700+ ejercicios con retroalimentación armónica en tiempo real, en 24 tonalidades.",
      "cta1": "Comenzar gratis",
      "cta2": "Explorar las tonalidades",
      "footer": "Gratis para empezar · Sin tarjeta requerida · 6 idiomas",
      "navCourses": "Cursos",
      "navAtelier": "Taller",
      "navScales": "Tonalidades",
      "methodLabel": "Método",
      "methodH2": "Aprender a través de la práctica",
      "featuresLabel": "Características",
      "featuresH2": "Todo lo que necesitas para progresar",
      "pricingLabel": "Precios",
      "pricingH2": "Elige tu ritmo",
      "pricingSub": "Empieza gratis. Pasa al Pro cuando estés listo.",
      "ctaH2": "Empieza a comprender",
      "ctaEm": "la música",
      "ctaSub": "3 cursos gratuitos. Sin tarjeta. Empieza ahora.",
      "ctaBtn": "Comenzar gratis →"
    }
  },
  "de": {
    "nav_scales": "Tonarten",
    "landing": {
      "topbar": "Kurs 23 verfügbar — Im Stil der Meister komponieren",
      "topbarCta": "Entdecken →",
      "badge": "Stufen 1 & 2 · 23 Kurse · 700+ Übungen",
      "h1": "Beherrsche die tonale Harmonielehre.",
      "h1em": "Wirklich.",
      "sub": "Von der Tonleiter bis zu den Techniken der großen Komponisten — 23 interaktive Kurse, 700+ Übungen mit Echtzeit-Feedback in 24 Tonarten.",
      "cta1": "Kostenlos starten",
      "cta2": "Tonarten erkunden",
      "footer": "Kostenlos starten · Keine Karte erforderlich · 6 Sprachen",
      "navCourses": "Kurse",
      "navAtelier": "Werkstatt",
      "navScales": "Tonarten",
      "methodLabel": "Methode",
      "methodH2": "Lernen durch Üben",
      "featuresLabel": "Funktionen",
      "featuresH2": "Alles was du brauchst, um voranzukommen",
      "pricingLabel": "Preise",
      "pricingH2": "Wähle dein Tempo",
      "pricingSub": "Starte kostenlos. Wechsle zu Pro, wenn du bereit bist.",
      "ctaH2": "Beginne zu verstehen",
      "ctaEm": "die Musik",
      "ctaSub": "3 kostenlose Kurse. Keine Kreditkarte. Starte jetzt.",
      "ctaBtn": "Kostenlos starten →"
    }
  },
  "pt": {
    "nav_scales": "Tonalidades",
    "landing": {
      "topbar": "Curso 23 disponível — Compor no estilo dos mestres",
      "topbarCta": "Descobrir →",
      "badge": "Níveis 1 & 2 · 23 cursos · 700+ exercícios",
      "h1": "Domine a harmonia tonal.",
      "h1em": "De verdade.",
      "sub": "Das escalas às técnicas dos grandes compositores — 23 cursos interativos, 700+ exercícios com feedback harmônico em tempo real, em 24 tonalidades.",
      "cta1": "Começar grátis",
      "cta2": "Explorar as tonalidades",
      "footer": "Grátis para começar · Sem cartão necessário · 6 idiomas",
      "navCourses": "Cursos",
      "navAtelier": "Oficina",
      "navScales": "Tonalidades",
      "methodLabel": "Método",
      "methodH2": "Aprender através da prática",
      "featuresLabel": "Funcionalidades",
      "featuresH2": "Tudo o que precisa para progredir",
      "pricingLabel": "Preços",
      "pricingH2": "Escolha o seu ritmo",
      "pricingSub": "Comece grátis. Vá para o Pro quando estiver pronto.",
      "ctaH2": "Comece a compreender",
      "ctaEm": "a música",
      "ctaSub": "3 cursos gratuitos. Sem cartão. Comece agora.",
      "ctaBtn": "Começar grátis →"
    }
  }
}

for lang, data in LANDING.items():
    path = os.path.join(base, f"{lang}.json")
    with open(path, "r", encoding="utf-8") as f:
        msg = json.load(f)
    msg["nav"]["scales"] = data["nav_scales"]
    msg["landing"] = data["landing"]
    with open(path, "w", encoding="utf-8") as f:
        json.dump(msg, f, ensure_ascii=False, indent=2)
    print(f"Updated {lang}.json OK")
