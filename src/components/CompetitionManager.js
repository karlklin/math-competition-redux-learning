import React from 'react';
import {Header} from './Header';
import {Competition} from './Competition';
import {PercentageHistory} from './PercentageHistory';
import {HistoryLog} from './HistoryLog';
import {Favourites} from "./Favourites";
import {AnswersState} from "../state/AnswersState";

// TODO This is something to figure out.
// I don't like passing this through the components tree. Maybe something like Provider similar to Redux support.
// Or just to use Context API but to figure out how to make observering works.
const answers = new AnswersState();

export const CompetitionManager = () => {
    return (
        <div className="container">
            <Header answers={answers}/>
            <Competition answers={answers}/>
            <PercentageHistory answers={answers}/>
            <HistoryLog answers={answers}/>
            <Favourites answers={answers}/>
        </div>
    );
};