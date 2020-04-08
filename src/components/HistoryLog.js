import React from 'react';
import {HistoryLogItem} from './HistoryLogItem';
import {observer} from "mobx-react";
import {useAnswersState} from "../state/AnswersStateProvider";

export const HistoryLog = observer(() => {
    const answers = useAnswersState();

    return (
        <div className="history-log">
            <h3>Log</h3>
            {answers.answersList.map(item =>
                <HistoryLogItem
                    key={item.id}
                    item={item}
                    isLike={answers.isLike(item.id)}/>)}
        </div>
    );
});