import { describe, it, expect } from "vitest";
import { cheminRootfile } from "./lire-musicxml";

describe("cheminRootfile — le MusicXML dans un .mxl", () => {
  it("lit le chemin déclaré par META-INF/container.xml", () => {
    const container = `<?xml version="1.0"?>
      <container><rootfiles>
        <rootfile full-path="score.xml" media-type="application/vnd.recordare.musicxml+xml"/>
      </rootfiles></container>`;
    expect(cheminRootfile(container)).toBe("score.xml");
  });

  it("gère un chemin en sous-dossier", () => {
    const container = `<rootfile full-path="MuseScore/partition.musicxml"/>`;
    expect(cheminRootfile(container)).toBe("MuseScore/partition.musicxml");
  });

  it("rend null si aucun rootfile", () => {
    expect(cheminRootfile("<container></container>")).toBeNull();
  });
});
