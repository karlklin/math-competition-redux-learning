import React from 'react';
import {HistoryLogItem} from './HistoryLogItem';
import {observer} from "mobx-react";

export const HistoryLog = observer(({answerState}) => {
    return (
        <div className="history-log">
            <h3>Log</h3>
            {answerState.answers.map(item =>
                <HistoryLogItem
                    key={item.id}
                    item={item}
                    isLike={answerState.isLike(item.id)}
                    answerState={answerState}/>)}
        </div>
    );
});