import React from 'react';
import {PercentageTotalHistory} from './PercentageTotalResult';
import {ComputationPercentageHistory} from './ComputationPercentageHistory';

export function PercentageHistory({answers}) {

    return (
        <div className="percentage-history">
            <div className="percentage-total">
                <PercentageTotalHistory answers={answers}/>
            </div>
            <div className="percentage-partial">
                <ComputationPercentageHistory answers={answers}/>
            </div>
        </div>
    );
}