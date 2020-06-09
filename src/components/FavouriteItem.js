import React from 'react';
import {correctAnswer} from "../services/competitionHelper";
import {observer} from "mobx-react";

export const FavouriteItem = observer(({item, isCorrect}) => {
    return (
        <div className={isCorrect ? 'history-log-item correct' : 'history-log-item wrong'}>
            <span>{item.a}</span>
            <span>{item.operator}</span>
            <span>{item.b}</span>
            <span>=</span>
            <span className="answer">{item.answer}</span>
            <span className="correct-answer">{correctAnswer(item)}</span>
        </div>
    );
});