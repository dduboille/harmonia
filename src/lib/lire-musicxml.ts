/**
 * lib/lire-musicxml.ts
 * Harmonia — Extraire le texte MusicXML d'un fichier déposé, côté NAVIGATEUR
 * (OSMD grave à partir de ce texte). Même logique que la route serveur, mais ici
 * on ne fait que dézipper et lire — pas d'analyse.
 */

import { unzipSync, strFromU8 } from "fflate";

/** Chemin du MusicXML déclaré dans META-INF/container.xml, ou null. */
export function cheminRootfile(containerXml: string): string | null {
  const m = /full-path="([^"]+)"/.exec(containerXml);
  return m ? m[1] : null;
}

/**
 * Texte MusicXML d'un fichier `.mxl` (archive) ou `.xml`/`.musicxml` (texte).
 * Pour un `.mxl` : on suit le rootfile déclaré, avec repli sur le premier `.xml`
 * hors META-INF.
 */
export async function extraireMusicXML(file: File): Promise<string> {
  const nom = file.name.toLowerCase();
  if (!nom.endsWith(".mxl")) return file.text();

  const buffer = await file.arrayBuffer();
  const archive = unzipSync(new Uint8Array(buffer));

  let chemin: string | null = null;
  const container = archive["META-INF/container.xml"];
  if (container) chemin = cheminRootfile(strFromU8(container));
  if (!chemin || !archive[chemin]) {
    chemin =
      Object.keys(archive).find(
        (k) => !k.startsWith("META-INF") && (k.endsWith(".xml") || k.endsWith(".musicxml")),
      ) ?? null;
  }
  if (!chemin || !archive[chemin]) {
    throw new Error("Archive .mxl invalide : aucun MusicXML trouvé.");
  }
  return strFromU8(archive[chemin]);
}
