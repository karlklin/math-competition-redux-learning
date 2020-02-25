import React from 'react';
import * as mobx from 'mobx';
import {Header} from './Header';
import {Competition} from './Competition';
import {PercentageHistory} from './PercentageHistory';
import {HistoryLog} from './HistoryLog';
import {Favourites} from "./Favourites";
import {observer} from "mobx-react";

const answers = mobx.observable([
    {id: 1, a: 5, b: 10, operator: '+', answer: 15},
    {id: 2, a: 5, b: 10, operator: '-', answer: 10},
    {id: 3, a: 5, b: 10, operator: '*', answer: 10},
]);

const addAnswer = answer => {
    answers.push(answer);
};
const deleteAnswer = id => {
    const index = answers.findIndex(item => item.id !== id);
    answers.splice(index, 1);
};

const favourites = mobx.observable([]);
const addLike = answer => favourites.push(answer);
const removeLike = id => {
    const index = favourites.findIndex(item => item.id !== id);
    favourites.splice(index, 1);
};

export const CompetitionManager = () => {
    return (
        <div className="container">
            <Header answers={answers}/>
            <Competition onAnswer={addAnswer}/>
            <PercentageHistory answers={answers}/>
            <HistoryLog history={answers}
                        onDelete={deleteAnswer}
                        favourites={favourites}
                        onLike={addLike}
                        onDislike={removeLike}/>
            <Favourites items={favourites}/>
        </div>
    );
};