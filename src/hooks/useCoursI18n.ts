/**
 * useCoursI18n.ts
 * Harmonia — hook partagé pour la traduction des cours
 *
 * Centralise les clés communes (nav, boutons, quiz UI)
 * utilisées dans tous les composants CoursX.tsx
 *
 * Usage :
 *   const { t, tc, tQuiz, sections } = useCoursI18n("cours7");
 *   tc("title")          → titre du cours dans la langue active
 *   tc("sections.voisins") → label de section
 *   t("common.listen")   → "Écouter" / "Listen" / ...
 *   tQuiz("perfect")     → message de score parfait
 */

import { useTranslations } from "next-intl";

export type CoursKey =
  | "cours1"
  | "cours2"
  | "cours3"
  | "cours4"
  | "cours5"
  | "cours6"
  | "cours7"
  | "cours8"
  | "cours9"
  | "cours10"
  | "cours11"
  | "cours12"
  | "cours13"
  | "cours14"
  | "cours15"
  | "cours16"
  | "cours17"
  | "cours18"
  | "cours19"
  | "cours20"
  | "cours21"
  | "cours22"
  | "cours23"
  | "cours24"
  | "cours25"
  | "cours26"
  | "cours27"
  | "cours28"
  | "cours29"
  | "cours30"
  | "cours31"
  | "cours32"
  | "cours33"
  | "cours34"
  | "cours35"
  | "cours36"
  | "cours37"
  | "cours38"
  | "cours39"
  | "cours40"
  | "cours41"
  | "cours42";

export function useCoursI18n(coursKey: CoursKey) {
  const t  = useTranslations("common");
  const tc = useTranslations(coursKey);

  /**
   * Helper quiz messages
   * score: nombre de bonnes réponses
   * total: QUIZ_COUNT
   */
  function quizMessage(score: number, total: number): string {
    if (score === total)        return tc("quiz.perfect");
    if (score >= total * 0.7)   return tc("quiz.veryGood");
    return tc("quiz.keepGoing");
  }

  /**
   * Helper section label depuis l'id
   */
  function sectionLabel(id: string): string {
    // next-intl useTranslations n'accepte pas de clé dynamique directement
    // on passe par tc avec un cast
    return tc(`sections.${id}` as any);
  }

  return {
    t,   // common namespace
    tc,  // cours-specific namespace
    quizMessage,
    sectionLabel,
    // Raccourcis fréquents
    badge:     tc("badge"),
    title:     tc("title"),
    subtitle:  tc("subtitle"),
    training:  t("training"),
    listen:    t("listen"),
    listenProg:t("listenProg"),
    newQ:      t("newQuestions"),
    nextQ:     t("nextQuestion"),
    seeScore:  t("seeScore"),
    questionLbl: t("question"),
    poolLbl:   t("questionsPool"),
  };
}