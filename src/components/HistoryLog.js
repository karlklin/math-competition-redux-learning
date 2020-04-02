import React from 'react';
import {HistoryLogItem} from './HistoryLogItem';
import {observer} from "mobx-react";

export const HistoryLog = observer(({answers}) => {

    return (
        <div className="history-log">
            <h3>Log</h3>
            {answers.answersList.map(item =>
                <HistoryLogItem
                    key={item.id}
                    item={item}
                    isLike={answers.isLike(item.id)}
                    answers={answers}/>)}
        </div>
    );
});