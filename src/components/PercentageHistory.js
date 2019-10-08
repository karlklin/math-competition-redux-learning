import React from 'react';
import {PercentageTotalResult} from './PercentageTotalResult';
import {ComputationPercentageHistory} from './ComputationPercentageHistory';
import {useSelector} from 'react-redux';
import {selectAnswers} from '../store/reducer';

export function PercentageHistory() {
    const answers = useSelector(selectAnswers);
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