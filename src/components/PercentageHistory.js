import React from 'react';
import {PercentageTotalResult} from './PercentageTotalResult';
import {ComputationPercentageHistory} from './ComputationPercentageHistory';
import {observer} from "mobx-react";

export const PercentageHistory = observer(({answerState}) => {
    return (
        <div className="percentage-history">
            <div className="percentage-total">
                <PercentageTotalResult result={answerState.percentageOfAllCorrect}/>
            </div>
            <div className="percentage-partial">
                <ComputationPercentageHistory answerState={answerState}/>
            </div>
        </div>
    );
});