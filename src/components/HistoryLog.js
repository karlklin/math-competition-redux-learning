import React from 'react';
import {HistoryLogItem} from './HistoryLogItem';
import {observer} from "mobx-react";
import {useStateContext} from '../state/AnswerContext';

export const HistoryLog = observer(() => {
    const {answers: history, favourites, deleteAnswer, addLike, removeLike} = useStateContext()
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
});