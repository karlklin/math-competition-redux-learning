import React, {useState} from 'react';
import {Header} from './Header';
import {Competition} from './Competition';
import {PercentageHistory} from './PercentageHistory';
import {HistoryLog} from './HistoryLog';
import {Favourites} from "./Favourites";
import {Loading} from "./Loading";
import {PageTitle} from "./PageTitle";
import {useApi} from '../services/api';
import {observable} from "mobx";
import {observer} from "mobx-react";

const difficulties = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const answersState = observable([
    {id: 1, a: 5, b: 10, operator: '+', answer: 15},
    {id: 2, a: 5, b: 10, operator: '-', answer: 10},
    {id: 3, a: 5, b: 10, operator: '*', answer: 10},
]);

// Step1 - introduce observable answersState

// Notes:
// - switch from function to array function for Components
// - rething removing AnswerState from start2 version

export const CompetitionManager = observer(() => {
    const [api, isLoading] = useApi();

    const [difficulty, setDifficulty] = useState(5);
    const updateDifficulty = num => e => {
        setDifficulty(num);
        e.preventDefault();
    };

    const [answers, addAnswer, deleteAnswer] = useAnswers(answersState, api);
    const [favourites, addLike, removeLike] = useFavourites(api);

    return (
        <div>
            <div className="difficulty">
                Difficulty:
                {difficulties.map(num =>
                    <a key={num}
                       href="/#"
                       className={difficulty === num ? 'active' : ''}
                       onClick={updateDifficulty(num)}>{num}</a>
                )}
            </div>
            <div className="container">
                <Header answers={answers}/>
                <Competition difficulty={difficulty}
                             onAnswer={addAnswer}/>
                <PercentageHistory answers={answers}/>
                <HistoryLog history={answers}
                            deleteAnswer={deleteAnswer}
                            favourites={favourites}
                            likeAnswer={addLike}
                            unlikeAnswer={removeLike}/>
                <Favourites items={favourites}/>
            </div>
            <Loading isLoading={isLoading}/>
            <PageTitle answers={answers}/>
        </div>
    );
});

const useAnswers = (answerState, api) => {
    const addAnswer = async answer => {
        const resultAnswer = await api.addAnswer(answer);
        answersState.push(resultAnswer);
    };
    const deleteAnswer = async id => {
        const resultId = await api.deleteAnswer(id);
        const index = answerState.findIndex(item => item.id !== resultId);
        answersState.splice(index, 1);
    };
    return [answerState, addAnswer, deleteAnswer];
};

const useFavourites = (api, initial = []) => {
    const [favourites, setFavourite] = useState(initial);
    const addLike = async answer => {
        const resultAnswer = await api.like(answer);
        setFavourite([...favourites, resultAnswer]);
    };
    const removeLike = async id => {
        const resultId = await api.unlike(id);
        setFavourite(favourites.filter(item => item.id !== resultId));
    };

    return [favourites, addLike, removeLike];
};