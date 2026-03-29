"use strict";

export class question {
  #_id = 0;
  #_q = "";
  #_answers = [];
  #_correctAnswer = 0;

  constructor(id, q, answers, correctAnswer) {
    this.#_id = id;
    this.#_q = q;
    this.#_answers = answers;
    this.#_correctAnswer = answers[correctAnswer - 1];
  }
  get id() {
    return this.#_id;
  }
  get q() {
    return this.#_q;
  }
  get answers() {
    return this.#_answers;
  }
  get correctAnswer() {
    return this.#_correctAnswer;
  }

  isSelectedAnswerCorrect(currentQuestion) {
    return currentQuestion === this.#_correctAnswer;
  }
}
