import React from 'react';
import {isCorrect} from '../services/competitionHelper';
import {observer} from "mobx-react";

export const PercentageTotalResult = observer(({ answers }) => {
    const allAnswers = answers.length;
    if(allAnswers === 0) {
        return null;
    }

    const correctAnswers = answers.filter(isCorrect).length;
    const result = Math.floor(correctAnswers * 100 / allAnswers);

    return (
        <div>
            <span>{result} %</span>
        </div>
    );
});