import React from 'react';
import {HistoryLogItem} from './HistoryLogItem';
import {observer} from "mobx-react";

export const HistoryLog = observer(({history, favourites, deleteAnswer, likeAnswer, unlikeAnswer}) => {
    const isLike = id => !!favourites.find(fav => fav.id === id);

    return (
        <div className="history-log">
            <h3>Log</h3>
            {history.map(item =>
                <HistoryLogItem
                    key={item.id}
                    item={item}
                    isLike={isLike(item.id)}
                    deleteAnswer={deleteAnswer}
                    likeAnswer={likeAnswer}
                    unlikeAnswer={unlikeAnswer} />)}
        </div>
    );
});