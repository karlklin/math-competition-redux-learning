import React from 'react';
import { isCorrect } from '../services/competitionHelper';
import { useSelector } from 'react-redux';

export function TotalResults() {

    const answers = useSelector(state => Object.values(state.answers));
    const correct = answers.filter(isCorrect).length;
    const total = answers.length;

    return total
        ? <div className="total-result">{correct} / {total}</div>
        : null
        ;
}