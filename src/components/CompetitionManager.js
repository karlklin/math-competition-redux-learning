import React, {useState} from 'react';
import {Header} from './Header';
import {Competition} from './Competition';
import {PercentageHistory} from './PercentageHistory';
import {HistoryLog} from './HistoryLog';
import {Favourites} from "./Favourites";
import {Loading} from "./Loading";
import {PageTitle} from "./PageTitle";
import {observer} from "mobx-react";
import {AnswerState} from "../state/AnswerState";

const difficulties = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const answerState = new AnswerState();

// Step1 - introduce observable answersState and change History related components to observers
// Step2 - change Favourite related components to observers [WORKING STATE]
// Step3 - introduce observable favouritesState
// Step4 - introduce observable loading
// Step5 - introduce AnswerState
// Step6 - use @observable in AnswerState
// Step7 - move all logic into @computed
// - note: we could not bother moving just functions e.g. isLike or isCorrect

// Notes:
// - rethink difficulty as component and mobx oriented

export const CompetitionManager = observer(() => {
    const [difficulty, setDifficulty] = useState(5);
    const updateDifficulty = num => e => {
        setDifficulty(num);
        e.preventDefault();
    };

    const isLoading = answerState.loading.length > 0;

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
                <Header answerState={answerState}/>
                <Competition difficulty={difficulty}
                             answerState={answerState}/>
                <PercentageHistory answerState={answerState}/>
                <HistoryLog answerState={answerState}/>
                <Favourites answerState={answerState}/>
            </div>
            <Loading isLoading={isLoading}/>
            <PageTitle answerState={answerState}
                       isLoading={isLoading}/>
        </div>
    );
});
