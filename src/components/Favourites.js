import React from 'react';
import { useSelector } from 'react-redux';
import { FavouriteItem } from "./FavouriteItem";

export const Favourites = () => {
    const items = useSelector(state => state.favourites);

    return (
        <div className="favourites history-log">
            <h3>Favorites</h3>
            {items.map(item =>
                <FavouriteItem
                    key={item.id}
                    item={item}/>)}
        </div>
    );
};