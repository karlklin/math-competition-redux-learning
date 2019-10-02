import React from 'react';
import { PercentageTotalResult } from './PercentageTotalResult';
import { ComputationPercentageHistory } from './ComputationPercentageHistory';
import { useSelector } from 'react-redux';

export function PercentageHistory() {
    const answers = useSelector(state => state.answers);
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