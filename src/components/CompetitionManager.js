import React, {useState} from 'react';
import {Header} from './Header';
import {Competition} from './Competition';
import {PercentageHistory} from './PercentageHistory';
import {HistoryLog} from './HistoryLog';
import {Favourites} from "./Favourites";
import {Loading} from "./Loading";
import {PageTitle} from "./PageTitle";

const difficulties = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function CompetitionManager() {

    const [difficulty, setDifficulty] = useState(5);
    const updateDifficulty = num => e => {
        setDifficulty(num);
        e.preventDefault();
    }

    const [answers, addAnswer, deleteAnswer] = useAnswers([
        {id: 1, a: 5, b: 10, operator: '+', answer: 15},
        {id: 2, a: 5, b: 10, operator: '-', answer: 10},
        {id: 3, a: 5, b: 10, operator: '*', answer: 10},
    ]);

    const [favourites, addLike, removeLike] = useFavourites();

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
            <Loading/>
            <PageTitle answers={answers}/>
        </div>
    );
}

const useAnswers = (initial = []) => {
    const [answers, setAnswers] = useState(initial);
    const addAnswer = answer => setAnswers([...answers, answer]);
    const deleteAnswer = id => setAnswers(answers.filter(item => item.id !== id));
    return [answers, addAnswer, deleteAnswer];
};

const useFavourites = (initial = []) => {
    const [favourites, setFavourite] = useState(initial);
    const addLike = answer => setFavourite([...favourites, answer]);
    const removeLike = id => setFavourite(favourites.filter(item => item.id !== id));
    return [favourites, addLike, removeLike];
};