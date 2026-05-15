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
  private _correctAnswer: string | undefined;

  public get answers(): string[] {
    return this._answers;
  }
  public set answers(value: string[]) {
    this._answers = value;
  }
  public get q(): string {
    return this._q;
  }
  public set q(value: string) {
    this._q = value;
  }
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
  constructor(
    private _id: number,
    private _q: string,
    private _answers: string[],
    private correctAnswer: number,
  ) {
    this._correctAnswer = this._answers[correctAnswer - 1];
  }

  public isSelectedAnswerCorrect(currentQuestion: string): boolean {
    return currentQuestion === this._correctAnswer;
  }
}
