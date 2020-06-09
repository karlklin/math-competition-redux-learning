import React from 'react';
import {observer} from "mobx-react";
import {useAnswerState} from "../state/AnswerStateProvider";

export const TotalResults = observer(() => {
    const answerState = useAnswerState();
    const correct = answerState.correctCount;
    const total = answerState.totalCount;

    return total
        ? <div className="total-result">{correct} / {total}</div>
        : null;
});