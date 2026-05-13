"use strict";
// export class Question {
//   #_id = 0;
//   #_q = "";
//   #_answers = [];
//   #_correctAnswer = 0;
//   constructor(id, q, answers, correctAnswer) {
//     this.#_id = id;
//     this.#_q = q;
//     this.#_answers = answers;
//     this.#_correctAnswer = answers[correctAnswer - 1];
//   }
//   get id() {
//     return this.#_id;
//   }
//   get q() {
//     return this.#_q;
//   }
//   get answers() {
//     return this.#_answers;
//   }
//   get correctAnswer() {
//     return this.#_correctAnswer;
//   }
//   isSelectedAnswerCorrect(currentQuestion) {
//     return currentQuestion === this.#_correctAnswer;
//   }
// }
export class Question {
    get correntAnswer() {
        return this._correctAnswer;
    }
    set correntAnswer(value) {
        this._correctAnswer = value;
    }
    get answers() {
        return this._answers;
    }
    set answers(value) {
        this._answers = value;
    }
    get q() {
        return this._q;
    }
    set q(value) {
        this._q = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    constructor(_id, _q, _answers, _correctAnswer) {
        this._id = _id;
        this._q = _q;
        this._answers = _answers;
        this._correctAnswer = _correctAnswer;
    }
    isSelectedAnswerCorrect(currentQuestion) {
        return currentQuestion === this._correctAnswer;
    }
}
//# sourceMappingURL=question.js.map