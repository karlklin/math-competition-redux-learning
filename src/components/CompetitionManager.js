import React, { useState } from 'react';
import { Header } from './Header';
import { Competition } from './Competition';
import { PercentageHistory } from './PercentageHistory';
import { HistoryLog } from './HistoryLog';
import {Favourites} from "./Favourites";

export function CompetitionManager() {
    const [favourites, addLike, removeLike] = useFavourites();

    return (
        <div className="container">
            <Header/>
            <Competition/>
            <PercentageHistory/>
            <HistoryLog favourites={favourites}
                        onLike={addLike}
                        onDislike={removeLike}/>
            <Favourites items={favourites}/>
        </div>
    );
}

const useFavourites = (initial =[]) => {
    const [favourites, setFavourite] = useState(initial);
    const addLike = answer => setFavourite([...favourites, answer]);
    const removeLike = id => setFavourite(favourites.filter(item => item.id !== id));
    return [favourites, addLike, removeLike];
};