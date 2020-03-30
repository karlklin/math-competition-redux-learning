import React from 'react';
import {PercentageTotalResult} from './PercentageTotalResult';
import {ComputationPercentageHistory} from './ComputationPercentageHistory';
import {observer} from "mobx-react";

export const PercentageHistory = observer(({answers}) => {
    return (
        <div className="percentage-history">
            <div className="percentage-total">
                <PercentageTotalResult result={answers.percentageOfAllCorrect}/>
            </div>
            <div className="percentage-partial">
                <ComputationPercentageHistory answers={answers}/>
            </div>
        </div>
    );
});