import React from 'react';
import {isCorrect} from '../services/competitionHelper';
import {PercentageTotalHistory} from './PercentageTotalResult';



export function ComputationPercentageHistory({ answers }) {

    const filterBy = op => answers.filter(item => item.operator === op);

    const total = filterBy('+');
    const difference = filterBy('-');
    const product = filterBy('*');

    return (
        <div>
            <div>Adding: <PercentageTotalHistory answers={total}/></div>
            <div>Substracting: <PercentageTotalHistory answers={difference}/></div>
            <div>Multiplication: <PercentageTotalHistory answers={product}/></div>
        </div>
    );
}