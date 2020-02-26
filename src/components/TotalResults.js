import React from 'react';
import {isCorrect} from '../services/competitionHelper';
import {observer} from "mobx-react";

export const TotalResults = observer(({ answers }) => {

    const correct = answers.answersList.filter(isCorrect).length;
    const total = answers.answersList.length;

    return total
        ? <div className="total-result">{correct} / {total}</div>
        : null
    ;
});