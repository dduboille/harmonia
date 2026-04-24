"use client";
import PianoPlayer from "@/components/PianoPlayer";

export default function TestPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <PianoPlayer
        highlightNotes={["Do", "Mi", "Sol"]}
        rootNote="Do"
        octaves={2}
        startOctave={3}
      />
    </div>
  );
}