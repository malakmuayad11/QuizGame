export declare class Question {
    private _id;
    private _q;
    private _answers;
    private correctAnswer;
    private _correctAnswer;
    get answers(): string[];
    set answers(value: string[]);
    get q(): string;
    set q(value: string);
    get id(): number;
    set id(value: number);
    constructor(_id: number, _q: string, _answers: string[], correctAnswer: number);
    isSelectedAnswerCorrect(currentQuestion: string): boolean;
}
//# sourceMappingURL=question.d.ts.map