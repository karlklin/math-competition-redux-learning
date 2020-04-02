import React from 'react';
import { FavouriteItem } from "./FavouriteItem";
import {observer} from "mobx-react";

export const Favourites = observer(({answers}) => {
    return (
        <div className="favourites history-log">
            <h3>Favorites</h3>
            {answers.favourites.map(item =>
                <FavouriteItem
                    key={item.id}
                    item={item}/>)}
        </div>
    );
});