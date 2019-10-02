import React from 'react';
import {PercentageTotalHistory} from './PercentageTotalResult';
import {ComputationPercentageHistory} from './ComputationPercentageHistory';

export function PercentageHistory() {

    return (
        <div className="percentage-history">
            <div className="percentage-total">
                <PercentageTotalHistory/>
            </div>
            <div className="percentage-partial">
                <ComputationPercentageHistory/>
            </div>
        </div>
    );
}