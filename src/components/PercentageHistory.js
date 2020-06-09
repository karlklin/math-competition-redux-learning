import React from 'react';
import {PercentageTotalResult} from './PercentageTotalResult';
import {ComputationPercentageHistory} from './ComputationPercentageHistory';
import {observer} from "mobx-react";
import {useAnswerState} from "../state/AnswerStateProvider";

export const PercentageHistory = observer(() => {
    const answerState = useAnswerState();
    return (
        <div className="percentage-history">
            <div className="percentage-total">
                <PercentageTotalResult result={answerState.percentageOfAllCorrect}/>
            </div>
            <div className="percentage-partial">
                <ComputationPercentageHistory/>
            </div>
        </div>
    );
});