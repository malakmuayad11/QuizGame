"use strict";
import { questions } from "./questions.js";

const UI = {
  startQuizDiv: document.getElementById("startQuizDiv"),
  startQuizBtn: document.getElementById("startQuizBtn"),
  questionDiv: document.getElementById("questionDiv"),
  nextBtn: document.getElementById("nextBtn"),
  restartBtn: document.getElementById("restartBtn"),
};

let currentQuestion = 1;
let score = 0;
let answered = false;

function startQuiz() {
  UI.startQuizDiv.style.display = "none";
  UI.questionDiv.style.display = "grid";
  UI.questionDiv.innerHTML = loadQuestion(1);
  UI.nextBtn.style.display = "block";
}

function loadQuestion(questionID) {
  currentQuestion = questionID;

  if (currentQuestion > questions.length) return showResults();

  return `<h2>${questions[questionID - 1].q}</h2>
  <p class="muted">Question ${questionID} of ${questions.length}</p>
  <p class="muted" style="justify-self: end">Score ${score}</p>
  ${loadAnswers(questionID)}`;
}

function loadAnswers(questionID) {
  answered = false;
  let result = "";
  const answers = questions[questionID - 1].answers;
  for (let a of answers) {
    result += `<p class="answer">${escapeHTML(a)}</p>`;
  }
  return result;
}

function escapeHTML(str) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function showResults() {
  UI.nextBtn.style.display = "none";
  UI.restartBtn.style.display = "block";
  return `<h2>Quiz Result</h2>
  <p class="result">You scored ${score} of 100</p>
  <p class ="result">${getStatus()}</p>`;
}

function getStatus() {
  if (score >= 80) return "Intelligent";
  if (score >= 60) return "Average";
  if (score >= 40) return "Below Average";
  return "Needs Improvement";
}

function showAnswerStatus() {
  const selectedAnswer = document.querySelector(".selected");

  if (
    questions[currentQuestion - 1].isSelectedAnswerCorrect(
      selectedAnswer.textContent,
    )
  )
    selectedAnswer.classList.add("correctAnswer");
  else selectedAnswer.classList.add("wrongAnswer");
}

function displayNextQuestion() {
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

function restart() {
  UI.restartBtn.style.display = "none";
  currentQuestion = 0;
  score = 0;
  startQuiz();
}

UI.startQuizBtn.addEventListener("click", startQuiz);
UI.nextBtn.addEventListener("click", displayNextQuestion);

UI.questionDiv.addEventListener("click", (e) => {
  if (e.target.matches("p") && !answered) {
    document.querySelectorAll(".selected").forEach((s) => {
      s.classList.remove("selected");
    });
    e.target.classList.add("selected");

    if (
      questions[currentQuestion - 1].isSelectedAnswerCorrect(
        e.target.textContent,
      )
    )
      score += 20;
    answered = true;
  }
});

UI.restartBtn.addEventListener("click", restart);
