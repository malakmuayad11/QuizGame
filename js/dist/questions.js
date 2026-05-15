"use strict";
import { Question } from "./question.js";
const q1 = new Question(
  1,
  "What is the capital of France?",
  ["Berlin", "Madrid", "Paris", "Rome"],
  3,
);
const q2 = new Question(
  2,
  "Which language runs in the browser?",
  ["C#", "Java", "Python", "JavaScript"],
  4,
);
const q3 = new Question(
  3,
  "What does CSS stand for?",
  [
    "Computer Style Sheets",
    "Cascading Style Sheets",
    "Creative Style Sheets",
    "Colorful Style Sheets",
  ],
  2,
);
const q4 = new Question(4, "What is 5 + 7?", ["10", "11", "12", "13"], 3);
const q5 = new Question(
  5,
  "Which HTML tag is used for the largest heading?",
  ["<h6>", "<heading>", "<h1>", "<head>"],
  3,
);
export const questions = [q1, q2, q3, q4, q5];
//# sourceMappingURL=questions.js.map
