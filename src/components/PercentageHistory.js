import React from 'react';
import {PercentageTotalResult} from './PercentageTotalResult';
import {ComputationPercentageHistory} from './ComputationPercentageHistory';
import {observer} from "mobx-react";
import {useAnswersState} from "../state/AnswersStateProvider";

export const PercentageHistory = observer(() => {
    const answers = useAnswersState();

    return (
        <div className="percentage-history">
            <div className="percentage-total">
                <PercentageTotalResult result={answers.percentageOfAllCorrect}/>
            </div>
            <div className="percentage-partial">
                <ComputationPercentageHistory/>
            </div>
        </div>
    );
});