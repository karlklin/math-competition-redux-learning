import React from 'react';
import {HistoryLogItem} from './HistoryLogItem';
import {observer} from "mobx-react";

export const HistoryLog = observer(({history, favourites, onDelete, onLike, onDislike}) => {

    const isLike = id => !!favourites.find(fav => fav.id === id);

    return (
        <div className="history-log">
            <h3>Log</h3>
            {history.answersList.map(item =>
                <HistoryLogItem
                    key={item.id}
                    item={item}
                    isLike={isLike(item.id)}
                    answers={history}
                    onLike={onLike}
                    onDislike={onDislike} />)}
        </div>
    );
});