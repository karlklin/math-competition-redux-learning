import React from 'react';
import {PercentageTotalHistory} from './PercentageTotalResult';



export function ComputationPercentageHistory({ answers }) {

    const filterBy = op => answers.filter(item => item.operator === op);

    const total = filterBy('+');
    const difference = filterBy('-');
    const product = filterBy('*');

    return (
        <>
            <div className="adding">Adding: <PercentageTotalHistory answers={total}/></div>
            <div className="substracting">Substracting: <PercentageTotalHistory answers={difference}/></div>
            <div className="multiplication">Multiplication: <PercentageTotalHistory answers={product}/></div>
        </>
    );
}