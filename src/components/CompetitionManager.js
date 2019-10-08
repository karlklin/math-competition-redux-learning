import React, { useState } from 'react';
import {Header} from './Header';
import {Competition} from './Competition';
import {PercentageHistory} from './PercentageHistory';
import {HistoryLog} from './HistoryLog';
import {Favourites} from "./Favourites";

export function CompetitionManager() {

    const [answers, addAnswer, deleteAnswer] = useAnswers([
        { id: 1, a: 5, b: 10, operator: '+', answer: 15 },
        { id: 2, a: 5, b: 10, operator: '-', answer: 10 },
        { id: 3, a: 5, b: 10, operator: '*', answer: 10 },
    ]);

    const [favourites, addLike, removeLike] = useFavourites();

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
}

const useAnswers = (initial = []) => {
    const [answers, setAnswers] = useState(initial);
    const addAnswer = answer => setAnswers([...answers, answer]);
    const deleteAnswer = id => setAnswers(answers.filter(item => item.id !== id));
    return [answers, addAnswer, deleteAnswer];
};

const useFavourites = (initial =[]) => {
    const [favourites, setFavourite] = useState(initial);
    const addLike = answer => setFavourite([...favourites, answer]);
    const removeLike = id => setFavourite(favourites.filter(item => item.id !== id));
    return [favourites, addLike, removeLike];
};