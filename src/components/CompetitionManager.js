import React, {useState} from 'react';
import {Header} from './Header';
import {Competition} from './Competition';
import {PercentageHistory} from './PercentageHistory';
import {HistoryLog} from './HistoryLog';
import {Favourites} from './Favourites';
import {Loading} from './Loading';
import {PageTitle} from './PageTitle';
import {Difficulty} from './Difficulty';
import {useStateContext} from '../state/AnswerContext';

export const CompetitionManager = () => {
    const [difficulty, updateDifficulty, difficulties] = useDifficulties(5);

    return (
        <div>
            <Difficulty difficulty={difficulty}
                        updateDifficulty={updateDifficulty}
                        difficulties={difficulties}/>
            <div className="container">
                <Header />
                <Competition difficulty={difficulty} />
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
    const difficulties = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [difficulty, setDifficulty] = useState(initial);
    const updateDifficulty = num => e => {
        setDifficulty(num);
        e.preventDefault();
    };

    return [difficulty, updateDifficulty, difficulties]
}