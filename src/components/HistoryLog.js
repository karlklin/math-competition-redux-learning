import React from 'react';
import {HistoryLogItem} from './HistoryLogItem';

export function HistoryLog({history, favourites, deleteAnswer, likeAnswer, unlikeAnswer}) {

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
}