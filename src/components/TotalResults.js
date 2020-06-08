import React from 'react';
import {observer} from "mobx-react";

export const TotalResults = observer(({answerState}) => {
    const correct = answerState.correctCount;
    const total = answerState.totalCount;

    return total
        ? <div className="total-result">{correct} / {total}</div>
        : null;
});