import React from 'react';
import { HistoryLogItem } from './HistoryLogItem';
import { useSelector } from 'react-redux';
import {_answers} from '../store/reducer';
import * as R from 'ramda';

export function HistoryLog() {
    const historyMap = useSelector(R.view(_answers));
    const history = Object.values(historyMap);

    return (
        <div className="history-log">
            <h3>Log</h3>
            {history.map(item => <HistoryLogItem key={item.id} item={item}/>)}
        </div>
    );
}