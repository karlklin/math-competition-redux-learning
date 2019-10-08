import React from 'react';
import { PercentageTotalResult } from './PercentageTotalResult';
import { ComputationPercentageHistory } from './ComputationPercentageHistory';
import { useSelector } from 'react-redux';
import * as R from 'ramda';
import {_answers} from '../store/reducer';

export function PercentageHistory() {
    const answersMap = useSelector(R.view(_answers));
    const answers = Object.values(answersMap);
    return (
        <div className="percentage-history">
            <div className="percentage-total">
                <PercentageTotalResult answers={answers}/>
            </div>
            <div className="percentage-partial">
                <ComputationPercentageHistory answers={answers}/>
            </div>
        </div>
    );
}