import React from 'react';
import {HistoryLogItem} from './HistoryLogItem';

export const HistoryLog = ({history, favourites, deleteAnswer, addLike, removeLike}) => {
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
                    addLike={addLike}
                    removeLike={removeLike} />)}
        </div>
    );
};