import { mkdirSync, writeFileSync } from "node:fs";

// One line of awkward small talk, one robot to another in an elevator.
// The line is fixed: no randomness, no clock, no network, so every run
// writes byte-identical output.
const LINE =
  "So\u2026 do you also pretend to check your notifications when the doors close, or is that just my social firmware?";

// No trailing newline: the file holds exactly the line, so the judge
// reads the small talk and nothing else.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
