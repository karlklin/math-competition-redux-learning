import React from 'react';
import { FavouriteItem } from "./FavouriteItem";
import {observer} from "mobx-react";
import {useStateContext} from '../state/AnswerContext';

export const Favourites = observer(() => {
    const { favourites } = useStateContext();
    return (
        <div className="favourites history-log">
            <h3>Favorites</h3>
            {favourites.map(item =>
                <FavouriteItem
                    key={item.id}
                    item={item}/>)}
        </div>
    );
});