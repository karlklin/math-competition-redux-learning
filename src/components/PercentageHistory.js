import React from 'react';
import {PercentageTotalHistory} from './PercentageTotalResult';
import {ComputationPercentageHistory} from './ComputationPercentageHistory';

export function PercentageHistory({answers}) {

    return (
        <div className="percentage-history">
            <div>
                <PercentageTotalHistory answers={answers}/>
            </div>
            <div>
                <ComputationPercentageHistory answers={answers}/>
            </div>
        </div>
    );
}