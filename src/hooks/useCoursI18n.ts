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
  | "cours4"
  | "cours5"
  | "cours6"
  | "cours7"
  | "cours8"
  | "cours9";

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