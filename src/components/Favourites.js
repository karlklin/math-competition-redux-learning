import React from 'react';
import { FavouriteItem } from "./FavouriteItem";
import {observer} from "mobx-react";
import {useAnswerState} from "../state/AnswerStateProvider";

export const Favourites = observer(() => {
    const answerState = useAnswerState();
    return (
        <div className="favourites history-log">
            <h3>Favorites</h3>
            {answerState.favourites.map(item =>
                <FavouriteItem
                    key={item.id}
                    item={item}
                    isCorrect={answerState.isCorrect(item)}/>)}
        </div>
    );
});