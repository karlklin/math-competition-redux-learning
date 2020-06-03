import React from 'react';
import {isCorrect} from '../services/competitionHelper';
import {observer} from "mobx-react";

export const TotalResults = observer(({ answers }) => {
    const correct = answers.filter(isCorrect).length;
    const total = answers.length;

    return total
        ? <div className="total-result">{correct} / {total}</div>
        : null
    ;
});