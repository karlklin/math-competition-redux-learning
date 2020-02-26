import React from 'react';
import * as mobx from 'mobx';
import {Header} from './Header';
import {Competition} from './Competition';
import {PercentageHistory} from './PercentageHistory';
import {HistoryLog} from './HistoryLog';
import {Favourites} from "./Favourites";
import {observable} from "mobx";

class Answers {
    @observable list = [
        {id: 1, a: 5, b: 10, operator: '+', answer: 15},
        {id: 2, a: 5, b: 10, operator: '-', answer: 10},
        {id: 3, a: 5, b: 10, operator: '*', answer: 10},
    ];

    get answersList() {
        return this.list;
    }

    addAnswer(answer) {
        this.list.push(answer);
    }

    deleteAnswer(id) {
        const index = this.list.findIndex(item => item.id !== id);
        this.list.splice(index, 1);
    }
}

const answers = new Answers();

const favourites = mobx.observable([]);
const addLike = answer => favourites.push(answer);
const removeLike = id => {
    const index = favourites.findIndex(item => item.id !== id);
    favourites.splice(index, 1);
};

export const CompetitionManager = () => {

    console.log('the answers=', answers.list.length);
    return (
        <div className="container">
            <Header answers={answers}/>
            <Competition answers={answers}/>
            <PercentageHistory answers={answers}/>
            <HistoryLog history={answers}
                        favourites={favourites}
                        onLike={addLike}
                        onDislike={removeLike}/>
            <Favourites items={favourites}/>
        </div>
    );
};