import React from 'react';
import { FavouriteItem } from "./FavouriteItem";

export const Favourites = ({items}) => {
    return (
        <div className="favourites history-log">
            <h3>Favorites</h3>
            {items.map(item =>
                <FavouriteItem
                    id={item.id}
                    item={item}/>)}
        </div>
    );
};