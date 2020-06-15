import React, {useState} from 'react';
import {Header} from './Header';
import {Competition} from './Competition';
import {PercentageHistory} from './PercentageHistory';
import {HistoryLog} from './HistoryLog';
import {Favourites} from "./Favourites";
import {Loading} from "./Loading";
import {PageTitle} from "./PageTitle";
import {api} from '../services/api';

const difficulties = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const CompetitionManager = () => {
    const [loading, setLoading] = useState([]);

    const [difficulty, setDifficulty] = useState(5);
    const updateDifficulty = num => e => {
        setDifficulty(num);
        e.preventDefault();
    };

    const [answers, addAnswer, deleteAnswer] = useAnswers([
        {id: 1, a: 5, b: 10, operator: '+', answer: 15},
        {id: 2, a: 5, b: 10, operator: '-', answer: 10},
        {id: 3, a: 5, b: 10, operator: '*', answer: 10},
    ], loading, setLoading);

    const [favourites, addLike, removeLike] = useFavourites([], loading, setLoading);

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
                             addAnswer={addAnswer}/>
                <PercentageHistory answers={answers}/>
                <HistoryLog history={answers}
                            deleteAnswer={deleteAnswer}
                            favourites={favourites}
                            addLike={addLike}
                            removeLike={removeLike}/>
                <Favourites items={favourites}/>
            </div>
            <Loading isLoading={loading.length > 0}/>
            <PageTitle answers={answers}/>
        </div>
    );
};

const useAnswers = (initial, loading, setLoading) => {
    const [answers, setAnswers] = useState(initial);
    const addAnswer = async answer => {
        setLoading([...loading, true]);
        const resultAnswer = await api.addAnswer(answer);
        setAnswers([...answers, resultAnswer]);
        setLoading(loading.slice(0, loading.length-2));
    };
    const deleteAnswer = async id => {
        setLoading([...loading, true]);
        const resultId = await api.deleteAnswer(id);
        setAnswers(answers.filter(item => item.id !== resultId));
        setLoading(loading.slice(0, loading.length-2));
    };
    return [answers, addAnswer, deleteAnswer];
};

const useFavourites = (initial, loading, setLoading) => {
    const [favourites, setFavourite] = useState(initial);
    const addLike = async answer => {
        setLoading([...loading, true]);
        const resultAnswer = await api.like(answer);
        setFavourite([...favourites, resultAnswer]);
        setLoading(loading.slice(0, loading.length-2));
    };
    const removeLike = async id => {
        setLoading([...loading, true]);
        const resultId = await api.unlike(id);
        setFavourite(favourites.filter(item => item.id !== resultId));
        setLoading(loading.slice(0, loading.length-2));
    };

    return [favourites, addLike, removeLike];
};