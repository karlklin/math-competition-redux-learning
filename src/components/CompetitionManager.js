import React from 'react';
import { Header } from './Header';
import { Competition } from './Competition';
import { PercentageHistory } from './PercentageHistory';
import { HistoryLog } from './HistoryLog';
import {Favourites} from "./Favourites";

export function CompetitionManager() {
    return (
        <div className="container">
            <Header/>
            <Competition/>
            <PercentageHistory/>
            <HistoryLog/>
            <Favourites/>
        </div>
    );
}