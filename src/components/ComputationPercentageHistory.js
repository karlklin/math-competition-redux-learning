import React from 'react';
import {PercentageTotalResult} from './PercentageTotalResult';
import {observer} from "mobx-react";
import {useAnswersState} from "../state/AnswersStateProvider";

export const ComputationPercentageHistory = observer(() => {
    const answers = useAnswersState();

    return (
        <>
            <div className="adding">
                Adding: <PercentageTotalResult result={answers.percentageOfTotalCorrect}/>
            </div>
            <div className="substracting">
                Substracting: <PercentageTotalResult result={answers.percentageOfDifferenceCorrect}/>
            </div>
            <div className="multiplication">
                Multiplication: <PercentageTotalResult result={answers.pecentageOfProductCorrect}/>
            </div>
        </>
    );
});