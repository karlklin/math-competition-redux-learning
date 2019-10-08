import React from 'react';
import {useSelector} from 'react-redux';
import {selectNumberOfAnswers, selectNumberOfCorrectAnswers} from '../store/reducer';

export function TotalResults() {
    const correct = useSelector(selectNumberOfCorrectAnswers);
    const total = useSelector(selectNumberOfAnswers);

    return total
        ? <div className="total-result">{correct} / {total}</div>
        : null
    ;
}
