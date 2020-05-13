import React from 'react';
import {PercentageTotalResult} from './PercentageTotalResult';

export function ComputationPercentageHistory({ answers }) {

    const filterBy = op => answers.filter(item => item.operator === op);

    const total = filterBy('+');
    const difference = filterBy('-');
    const product = filterBy('*');

    return (
        <>
            <div className="adding">Adding: <PercentageTotalResult answers={total}/></div>
            <div className="substracting">Substracting: <PercentageTotalResult answers={difference}/></div>
            <div className="multiplication">Multiplication: <PercentageTotalResult answers={product}/></div>
        </>
    );
}