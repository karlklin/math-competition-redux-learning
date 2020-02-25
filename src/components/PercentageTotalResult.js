import React from 'react';
import {isCorrect} from '../services/competitionHelper';
import {observer} from "mobx-react";

export const PercentageTotalHistory = observer(({ answers }) => {
    const allAnswers = answers.length;
    if(allAnswers === 0) {
        return null;
    }

    const correctAnswers = answers.filter(isCorrect).length;

    const result = Math.floor(correctAnswers * 100 / allAnswers);

    return (
        <span>{result} %</span>
    );
});