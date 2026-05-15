"use strict";
import { questions } from "../src/questions.js";

const UI = {
  startQuizDiv: document.getElementById("startQuizDiv") as HTMLDivElement,
  startQuizBtn: document.getElementById("startQuizBtn") as HTMLButtonElement,
  questionDiv: document.getElementById("questionDiv") as HTMLDivElement,
  nextBtn: document.getElementById("nextBtn") as HTMLButtonElement,
  restartBtn: document.getElementById("restartBtn") as HTMLButtonElement,
};

let currentQuestion: number = 1;
let score: number = 0;
let answered: boolean = false;

function startQuiz(): void {
  UI.startQuizDiv.style.display = "none";
  UI.questionDiv.style.display = "grid";
  UI.questionDiv.innerHTML = loadQuestion(1);
  UI.nextBtn.style.display = "block";
}

function loadQuestion(questionID: number): string {
  currentQuestion = questionID;

  if (currentQuestion > questions.length) return showResults();

  return `<h2>${questions[questionID - 1]!.q}</h2>
  <p class="muted">Question ${questionID} of ${questions.length}</p>
  <p class="muted" style="justify-self: end">Score ${score}</p>
  ${loadAnswers(questionID)}`;
}

function loadAnswers(questionID: number): string {
  answered = false;
  let result: string = "";
  const answers = questions[questionID - 1]!.answers;
  for (let a of answers) {
    result += `<p class="answer">${escapeHTML(a)}</p>`;
  }
  return result;
}

function escapeHTML(str: string): string {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function showResults(): string {
  UI.nextBtn.style.display = "none";
  UI.restartBtn.style.display = "block";
  return `<h2>Quiz Result</h2>
  <p class="result">You scored ${score} of 100</p>
  <p class ="result">${getStatus()}</p>`;
}

enum Status {
  Intelligent = "Intelligent",
  Average = "Average",
  BelowAverage = "Below Average",
  NeedsImprovement = "Needs Improvement",
}

function getStatus(): Status {
  if (score >= 80) return Status.Intelligent;
  if (score >= 60) return Status.Average;
  if (score >= 40) return Status.BelowAverage;
  return Status.NeedsImprovement;
}

function showAnswerStatus(): void {
  const selectedAnswer = document.querySelector(".selected");
  if (!selectedAnswer) return;

  if (
    questions[currentQuestion - 1]!.isSelectedAnswerCorrect(
      selectedAnswer.textContent,
    )
  )
    selectedAnswer.classList.add("correctAnswer");
  else selectedAnswer.classList.add("wrongAnswer");
}

function displayNextQuestion(): void {
  if (document.querySelectorAll(".selected").length === 0) {
    alert("Please choose an answer to move to next question!");
    return;
  }
  UI.nextBtn.disabled = true;
  showAnswerStatus();
  setTimeout(() => {
    UI.questionDiv.innerHTML = loadQuestion(currentQuestion + 1);
    UI.nextBtn.disabled = false;
  }, 1500);
}

function restart(): void {
  UI.restartBtn.style.display = "none";
  currentQuestion = 0;
  score = 0;
  startQuiz();
}

UI.startQuizBtn.addEventListener("click", startQuiz);
UI.nextBtn.addEventListener("click", displayNextQuestion);

UI.questionDiv.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;

  if (target.matches("p") && !answered) {
    document.querySelectorAll(".selected").forEach((s) => {
      s.classList.remove("selected");
    });
    target.classList.add("selected");

    if (
      questions[currentQuestion - 1]!.isSelectedAnswerCorrect(
        target.textContent,
      )
    )
      score += 20;
    answered = true;
  }
});

UI.restartBtn.addEventListener("click", restart);
