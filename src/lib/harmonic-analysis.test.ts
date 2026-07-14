import { describe, it, expect } from "vitest";
import { identifyChord } from "./harmonic-analysis";

describe("identifyChord", () => {
  it("reconnaît un accord parfait majeur", () => {
    // Do-Mi-Sol
    expect(identifyChord([0, 4, 7])?.quality).toBe("");
  });
});
