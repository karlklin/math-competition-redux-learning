import React from 'react';
import {observer} from "mobx-react";

export const PercentageTotalResult = observer(({result}) => {
    return (
        <span>{result} %</span>
    );
});