/**
 * @description Utilitaire de logging pour la validation harmonique SATB
 * Basé sur HARMONIE_RULES_V2
 */
export const logHarmonyCheck = (message: string, isError: boolean = false) => {
    const prefix = isError ? "❌ [Harmony Audit Fallure]" : "✅ [Harmony Audit Passed]";
    console.log(`${prefix}: ${message}`);
};