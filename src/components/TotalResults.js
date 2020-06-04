import React from 'react';
import {isCorrect} from '../services/competitionHelper';
import {observer} from "mobx-react";

export const TotalResults = observer(({ answerState }) => {
    const correct = answerState.answers.filter(isCorrect).length;
    const total = answerState.answers.length;

    return total
        ? <div className="total-result">{correct} / {total}</div>
        : null
    ;
});