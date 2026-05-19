export interface Classe {
  id: string;
  profId: string;
  nom: string;
  description?: string;
  codeAcces: string;
  elevesCount: number;
  createdAt: string;
}

export interface Eleve {
  userId: string;
  email: string;
  nom: string;
  progression: {
    coursCompletés: number;
    exercicesReussis: number;
    scoreMoyen: number;
    derniereActivite: string;
  };
}

export interface Devoir {
  id: string;
  classeId: string;
  titre: string;
  type: "cours" | "exercice" | "composition";
  referenceId?: string;
  dateLimite?: string;
  soumissionsCount: number;
  corrigésCount: number;
}

export interface Soumission {
  id: string;
  devoirId: string;
  eleveId: string;
  contenu: unknown;
  note?: number;
  commentaire?: string;
  submittedAt: string;
  correctedAt?: string;
}
