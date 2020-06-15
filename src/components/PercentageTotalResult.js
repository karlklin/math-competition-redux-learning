import React from 'react';
import {isCorrect} from '../services/competitionHelper';

export const PercentageTotalResult = ({ answers }) => {
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
}