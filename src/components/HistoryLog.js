import React from 'react';
import { HistoryLogItem } from './HistoryLogItem';
import { useSelector } from 'react-redux';

export function HistoryLog() {
    const history = useSelector(state => state.answers);
    const favourites = useSelector(state => state.favourites);

    const isLike = id => !!favourites.find(fav => fav.id === id);

    return (
        <div className="history-log">
            <h3>Log</h3>
            {history.map(item =>
                <HistoryLogItem
                    key={item.id}
                    item={item}
                    isLike={isLike(item.id)}/>)}
        </div>
    );
}