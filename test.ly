\version "2.26.0"

\paper {
  indent = 0
  line-width = 180\mm
  top-margin = 8\mm
  bottom-margin = 8\mm
}

upper = \new Staff {
  \clef treble
  \key c \minor
  \time 4/4
  \tempo "Grave"
  \relative c' {
    <c es g>1 |
    <c es g>2 <f aes c>2 |
    <f aes c>2 <g b d f>2 |
    <c es g c>1 |
  }
}

lower = \new Staff {
  \clef bass
  \key c \minor
  \time 4/4
  \relative c {
    c1 |
    c2 f,2 |
    f2 g,2 |
    c1 |
  }
}

\score {
  \new PianoStaff << \upper \lower >>
}