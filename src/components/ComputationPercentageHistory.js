import React from 'react';
import {PercentageTotalResult} from './PercentageTotalResult';
import {observer} from "mobx-react";

export const ComputationPercentageHistory = observer(({ answerState }) => {
    return (
        <>
            <div className="adding">Adding: <PercentageTotalResult result={answerState.percentageOfTotalCorrect}/></div>
            <div className="substracting">Substracting: <PercentageTotalResult result={answerState.percentageOfDifferenctCorrect}/></div>
            <div className="multiplication">Multiplication: <PercentageTotalResult result={answerState.percentageOfProductCorrect}/></div>
        </>
    );
});