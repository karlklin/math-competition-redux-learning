import React from 'react';
import {PercentageTotalResult} from './PercentageTotalResult';
import {ComputationPercentageHistory} from './ComputationPercentageHistory';

export function PercentageHistory({answers}) {

    return (
        <div className="percentage-history">
            <div className="percentage-total">
                <PercentageTotalResult answers={answers.answersList}/>
            </div>
            <div className="percentage-partial">
                <ComputationPercentageHistory answers={answers}/>
            </div>
        </div>
    );
}