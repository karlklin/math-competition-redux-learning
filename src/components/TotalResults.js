import React from 'react';
import { isCorrect } from '../services/competitionHelper';
import { useSelector } from 'react-redux';
import {_answers} from '../store/reducer';
import * as R from 'ramda';

export function TotalResults() {

    const answers = useSelector(R.view(_answers));
    const correct = Object.values(answers).filter(isCorrect).length;
    const total = Object.values(answers).length;

    return total
        ? <div className="total-result">{correct} / {total}</div>
        : null
    ;
}