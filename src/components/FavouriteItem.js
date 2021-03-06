import React from 'react';
import { correctAnswer, isCorrect } from "../services/competitionHelper";

export function FavouriteItem({item}) {
    const correct = isCorrect(item);

    return (
        <div className={correct ? 'history-log-item correct' : 'history-log-item wrong'}>
            <span>{item.a}</span>
            <span>{item.operator}</span>
            <span>{item.b}</span>
            <span>=</span>
            <span className="answer">{item.answer}</span>
            <span className="correct-answer">{correctAnswer(item)}</span>
        </div>
    );
};