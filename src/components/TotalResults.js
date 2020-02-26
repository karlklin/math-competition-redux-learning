import React from 'react';
import {observer} from "mobx-react";

export const TotalResults = observer(({answers}) => {

    return answers.allCount
        ? <div className="total-result">{answers.correctCount} / {answers.allCount}</div>
        : null;
});