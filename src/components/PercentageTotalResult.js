import React from 'react';
import { isCorrect } from '../services/competitionHelper';
import { useSelector } from 'react-redux';

export function PercentageTotalHistory() {
    const answers = useSelector(state => state.answers);
    const allAnswers = answers.length;
    if (allAnswers === 0) {
        return null;
    }

    const correctAnswers = answers.filter(isCorrect).length;

    const result = Math.floor(correctAnswers * 100 / allAnswers);

    return (
        <span>{result} %</span>
    );
}