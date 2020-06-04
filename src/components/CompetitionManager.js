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

// Step1 - introduce observable answersState and change History related components to observers
// Step2 - change Favourite related components to observers [WORKING STATE]
// Step3 - introduce observable favouritesState

// Notes:
// - change implementation for loading state (change this as well as state then to be changed to observable)

export const CompetitionManager = observer(() => {
    const [loading, setLoading] = useState([]);

    const [difficulty, setDifficulty] = useState(5);
    const updateDifficulty = num => e => {
        setDifficulty(num);
        e.preventDefault();
    };

    const [answers, addAnswer, deleteAnswer] = useAnswers(answersState, loading, setLoading);
    const [favourites, addLike, removeLike] = useFavourites(favouritesState, loading, setLoading);

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

const useAnswers = (answerState, loading, setLoading) => {
    const addAnswer = async answer => {
        setLoading([...loading, true]);
        const resultAnswer = await api.addAnswer(answer);
        answersState.push(resultAnswer);
    };
    const deleteAnswer = async id => {
        setLoading([...loading, true]);
        const resultId = await api.deleteAnswer(id);
        const index = answerState.findIndex(item => item.id === resultId);
        answersState.splice(index, 1);
        setLoading(loading.slice(0, loading.length-2));
    };
    return [answerState, addAnswer, deleteAnswer];
};

const useFavourites = (favouriteState, loading, setLoading) => {
    const addLike = async answer => {
        setLoading([...loading, true]);
        const resultAnswer = await api.like(answer);
        favouriteState.push(resultAnswer);
        setLoading(loading.slice(0, loading.length-2));
    };
    const removeLike = async id => {
        setLoading([...loading, true]);
        const resultId = await api.unlike(id);
        const index = favouriteState.findIndex(item => item.id === resultId);
        favouriteState.splice(index, 1);
        setLoading(loading.slice(0, loading.length-2));
    };

    return [favouriteState, addLike, removeLike];
};