import React from 'react';
import { HistoryLogItem } from './HistoryLogItem';
import { useSelector } from 'react-redux';

export function HistoryLog({favourites, onLike, onDislike}) {
    const history = useSelector(state => state.answers);

    const isLike = id => !!favourites.find(fav => fav.id === id);

    return (
        <div className="history-log">
            <h3>Log</h3>
            {history.map(item =>
                <HistoryLogItem
                    key={item.id}
                    item={item}
                    isLike={isLike(item.id)}
                    onLike={onLike}
                    onDislike={onDislike} />)}
        </div>
    );
}