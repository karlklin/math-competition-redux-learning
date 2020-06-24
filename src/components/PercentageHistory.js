import React from 'react';
import {PercentageTotalResult} from './PercentageTotalResult';
import {ComputationPercentageHistory} from './ComputationPercentageHistory';
import {useStateContext} from '../state/AnswerContext';

export const PercentageHistory = () => {
    const {answers} = useStateContext()
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
};