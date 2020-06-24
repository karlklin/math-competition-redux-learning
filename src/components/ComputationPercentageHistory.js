import React from 'react';
import {PercentageTotalResult} from './PercentageTotalResult';
import {observer} from "mobx-react";
import {useStateContext} from '../state/AnswerContext';

export const ComputationPercentageHistory = observer(({ answers }) => {
    const { diffAnswers, sumAnswers, productAnswers } = useStateContext();

    return (
        <>
            <div className="adding">Adding: <PercentageTotalResult answers={sumAnswers}/></div>
            <div className="substracting">Substracting: <PercentageTotalResult answers={diffAnswers}/></div>
            <div className="multiplication">Multiplication: <PercentageTotalResult answers={productAnswers}/></div>
        </>
    );
});