import React from 'react';
import {observer} from "mobx-react";
import {useAnswersState} from "../state/AnswersStateProvider";

export const TotalResults = observer(() => {
    const answers = useAnswersState();

    return answers.allCount
        ? <div className="total-result">{answers.correctCount} / {answers.allCount}</div>
        : null;
});