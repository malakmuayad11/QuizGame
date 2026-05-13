export declare class Question {
    private _id;
    private _q;
    private _answers;
    private _correctAnswer;
    get correntAnswer(): number;
    set correntAnswer(value: number);
    get answers(): string[];
    set answers(value: string[]);
    get q(): string;
    set q(value: string);
    get id(): number;
    set id(value: number);
    constructor(_id: number, _q: string, _answers: string[], _correctAnswer: number);
    isSelectedAnswerCorrect(currentQuestion: number): boolean;
}
//# sourceMappingURL=question.d.ts.map