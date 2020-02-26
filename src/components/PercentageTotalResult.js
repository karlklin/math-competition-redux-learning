import React from 'react';
import {isCorrect} from '../services/competitionHelper';
import {observer} from "mobx-react";

export const PercentageTotalResult = observer(({result}) => {
    return (
        <span>{result} %</span>
    );
});