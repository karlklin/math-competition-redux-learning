import React from 'react';
import {Header} from './Header';
import {Competition} from './Competition';
import {PercentageHistory} from './PercentageHistory';
import {HistoryLog} from './HistoryLog';
import {Favourites} from './Favourites';
import {Loading} from './Loading';
import {PageTitle} from './PageTitle';
import {Difficulty} from './Difficulty';
import {logAnswerState} from '../logger/Logger';
import {action} from "mobx";
import {useLocalStore} from "mobx-react";

logAnswerState();

export const CompetitionManager = () => {
    const difficultyState = useDifficulties(5);

    return (
        <div>
            <Difficulty difficultyState={difficultyState}/>
            <div className="container">
                <Header />
                <Competition difficultyState={difficultyState}/>
                <PercentageHistory />
                <HistoryLog />
                <Favourites />
            </div>
            <Loading />
            <PageTitle />
        </div>
    );
};

const useDifficulties = initial => {
    const difficultyState = useLocalStore(() => ({
        difficulties: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        difficulty: initial,
        updateDifficulty: action(function (num)  {
            // more logic here
            this.difficulty = num;
        })
    }));

    return difficultyState;
}