import React from 'react';
import {isCorrect} from '../services/competitionHelper';
import {observer} from "mobx-react";
import {useStateContext} from '../state/AnswerContext';

export const TotalResults = observer(() => {
    const { answers } = useStateContext();
    const correct = answers.filter(isCorrect).length;
    const total = answers.length;

    return total
        ? <div className="total-result">{correct} / {total}</div>
        : null
    ;
});