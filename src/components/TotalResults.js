import React from 'react';
import {isCorrect} from '../services/competitionHelper';

export const TotalResults = ({ answers }) => {

    const correct = answers.filter(isCorrect).length;
    const total = answers.length;

    return total
        ? <div className="total-result">{correct} / {total}</div>
        : null
    ;
};