import React from 'react';
import {PercentageTotalResult} from './PercentageTotalResult';
import {ComputationPercentageHistory} from './ComputationPercentageHistory';

export const PercentageHistory = ({answerState}) => {

    return (
        <div className="percentage-history">
            <div className="percentage-total">
                <PercentageTotalResult answers={answerState.answers}/>
            </div>
            <div className="percentage-partial">
                <ComputationPercentageHistory answerState={answerState}/>
            </div>
        </div>
    );
}