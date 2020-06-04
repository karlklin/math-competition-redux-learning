import React, {useState} from 'react';
import {Header} from './Header';
import {Competition} from './Competition';
import {PercentageHistory} from './PercentageHistory';
import {HistoryLog} from './HistoryLog';
import {Favourites} from "./Favourites";
import {Loading} from "./Loading";
import {PageTitle} from "./PageTitle";
import {observable} from "mobx";
import {observer} from "mobx-react";
import {api} from "../services/api";

const difficulties = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const answersState = observable([
    {id: 1, a: 5, b: 10, operator: '+', answer: 15},
    {id: 2, a: 5, b: 10, operator: '-', answer: 10},
    {id: 3, a: 5, b: 10, operator: '*', answer: 10},
]);

const favouritesState = observable([]);

const loading = observable([]);

// Step1 - introduce observable answersState and change History related components to observers
// Step2 - change Favourite related components to observers [WORKING STATE]
// Step3 - introduce observable favouritesState
// Step4 - introduce observable loading

// Notes:

export const CompetitionManager = observer(() => {
    const [difficulty, setDifficulty] = useState(5);
    const updateDifficulty = num => e => {
        setDifficulty(num);
        e.preventDefault();
    };

    const [answers, addAnswer, deleteAnswer] = useAnswers(answersState, loading);
    const [favourites, addLike, removeLike] = useFavourites(favouritesState, loading);

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
            <Loading isLoading={loading.length > 0}/>
            <PageTitle answers={answers}/>
        </div>
    );
});

const useAnswers = (answerState, loading) => {
    const addAnswer = async answer => {
        loading.push(true);
        const resultAnswer = await api.addAnswer(answer);
        answersState.push(resultAnswer);
        loading.pop();
    };
    const deleteAnswer = async id => {
        loading.push(true);
        const resultId = await api.deleteAnswer(id);
        const index = answerState.findIndex(item => item.id === resultId);
        answersState.splice(index, 1);
        loading.pop();
    };
    return [answerState, addAnswer, deleteAnswer];
};

const useFavourites = (favouriteState, loading) => {
    const addLike = async answer => {
        loading.push(true);
        const resultAnswer = await api.like(answer);
        favouriteState.push(resultAnswer);
        loading.pop();
    };
    const removeLike = async id => {
        loading.push(true);
        const resultId = await api.unlike(id);
        const index = favouriteState.findIndex(item => item.id === resultId);
        favouriteState.splice(index, 1);
        loading.pop();
    };

    return [favouriteState, addLike, removeLike];
};