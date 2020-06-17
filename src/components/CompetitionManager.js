import React, {useState} from 'react';
import {Header} from './Header';
import {Competition} from './Competition';
import {PercentageHistory} from './PercentageHistory';
import {HistoryLog} from './HistoryLog';
import {Favourites} from "./Favourites";
import {Loading} from "./Loading";
import {PageTitle} from "./PageTitle";
import {api} from '../services/api';
import {Difficulty} from "./Difficulty";
import {observable} from "mobx";

const answersState = observable([
    {id: 1, a: 5, b: 10, operator: '+', answer: 15},
    {id: 2, a: 5, b: 10, operator: '-', answer: 10},
    {id: 3, a: 5, b: 10, operator: '*', answer: 10},
]);

const loadingState = observable([]);

const favouritesState = observable([]);

export const CompetitionManager = () => {
    const [difficulty, updateDifficulty, difficulties] = useDifficulties(5);
    const [answers, addAnswer, deleteAnswer] = useAnswers(answersState, loadingState);
    const [favourites, addLike, removeLike] = useFavourites(favouritesState, loadingState);

    return (
        <div>
            <Difficulty difficulty={difficulty}
                        updateDifficulty={updateDifficulty}
                        difficulties={difficulties}/>
            <div className="container">
                <Header answers={answers}/>
                <Competition difficulty={difficulty}
                             addAnswer={addAnswer}/>
                <PercentageHistory answers={answers}/>
                <HistoryLog history={answers}
                            deleteAnswer={deleteAnswer}
                            favourites={favourites}
                            addLike={addLike}
                            removeLike={removeLike}/>
                <Favourites items={favourites}/>
            </div>
            <Loading loading={loadingState}/>
            <PageTitle answers={answers}/>
        </div>
    );
};

const useAnswers = (answers, loading) => {
    const addAnswer = async answer => {
        loading.push(true);
        const resultAnswer = await api.addAnswer(answer);
        answers.push(resultAnswer);
        loading.pop();
    };
    const deleteAnswer = async id => {
        loading.push(true);
        const resultId = await api.deleteAnswer(id);
        answers.splice(answers.findIndex(item => item.id === resultId), 0);
        loading.pop();
    };
    return [answers, addAnswer, deleteAnswer];
};

const useFavourites = (favourites, loading) => {
    const addLike = async answer => {
        loading.push(true);
        const resultAnswer = await api.like(answer);
        favourites.push(resultAnswer);
        loading.pop();
    };
    const removeLike = async id => {
        loading.push(true);
        const resultId = await api.unlike(id);
        favourites.splice(favourites.findIndex(item => item.id === resultId), 0);
        loading.pop();
    };

    return [favourites, addLike, removeLike];
};

const useDifficulties = initial => {
    const difficulties = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [difficulty, setDifficulty] = useState(initial);
    const updateDifficulty = num => e => {
        setDifficulty(num);
        e.preventDefault();
    };

    return [difficulty, updateDifficulty, difficulties]
}