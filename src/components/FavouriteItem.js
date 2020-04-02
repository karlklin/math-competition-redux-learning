import React from 'react';
import { correctAnswer, isCorrect } from "../services/competitionHelper";
import {observer} from "mobx-react";


// Here is interesting. Item is not observable and we could observe it and we get notification about modification.
// Note that it is working for objects and doesn't work for primitive values (e.g. PercentageTotalResult)
export const FavouriteItem = observer(({item}) => {
    const correct = isCorrect(item);

    return (
        <div className={correct ? 'history-log-item correct' : 'history-log-item wrong'}>
            <span>{item.a}</span>
            <span>{item.operator}</span>
            <span>{item.b}</span>
            <span>=</span>
            <span className="answer">{item.answer}</span>
            <span className="correct-answer">{correctAnswer(item)}</span>
        </div>
    );
});