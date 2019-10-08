import React from 'react';
import {HistoryLogItem} from './HistoryLogItem';
import {useSelector} from 'react-redux';
import {selectAnswers} from '../store/reducer';

export function HistoryLog() {
    const history = useSelector(selectAnswers);

    return (
        <div className="history-log">
            <h3>Log</h3>
            {history.map(item => <HistoryLogItem key={item.id} item={item}/>)}
        </div>
    );
}