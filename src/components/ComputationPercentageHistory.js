import React from 'react';
import {PercentageTotalResult} from './PercentageTotalResult';
import {observer} from "mobx-react";

export const ComputationPercentageHistory = observer(({ answers }) => {

    const filterBy = op => answers.answersList.filter(item => item.operator === op);

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
});