// The Moon Finally Answers Back — make.fun competition entry
// u-mang-the-moon-finally-answers-back-781a7ec1
//
// One line, spoken by the Moon, written to /output/entry.txt.
// The line: 115 characters, funny on one read, wry and old and a
// little tired of being wished upon.

import { mkdirSync, writeFileSync } from "node:fs";

const MOON_LINE =
  "Four billion years of wishes, howls, and 2 a.m. promises — and not one of you has ever wished me a good night back.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MOON_LINE, "utf8");
console.log(MOON_LINE);
