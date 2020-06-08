import React from 'react';
import { FavouriteItem } from "./FavouriteItem";
import {observer} from "mobx-react";

export const Favourites = observer(({answerState}) => {
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