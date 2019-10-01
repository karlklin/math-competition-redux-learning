import React from 'react';
import {HistoryLogItem} from './HistoryLogItem';

export function HistoryLog({history}) {

    return (
        <div className="history-log">
            <h3>Log</h3>
            {history.map(item => <HistoryLogItem key={item.id} item={item}/>)}
        </div>
    );
}