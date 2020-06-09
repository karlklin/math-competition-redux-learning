import React, {useState} from 'react';
import {Header} from './Header';
import {Competition} from './Competition';
import {PercentageHistory} from './PercentageHistory';
import {HistoryLog} from './HistoryLog';
import {Favourites} from "./Favourites";
import {Loading} from "./Loading";
import {PageTitle} from "./PageTitle";
import {observer} from "mobx-react";
import {useAnswerState} from "../state/AnswerStateProvider";

const difficulties = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Step1 - introduce observable answersState and change History related components to observers
// Step2 - change Favourite related components to observers [WORKING STATE]
// Step3 - introduce observable favouritesState
// Step4 - introduce observable loading
// Step5 - introduce AnswerState
// Step6 - use @observable decorator in AnswerState
// Step7 - move all logic into @computed
// - note: we could not bother moving just functions e.g. isLike or isCorrect
// Step8 - enable strict mode (@action and runInAction)
// Step9 - introduce AnswerStateProvider

// Notes:
// - rethink difficulty as component and mobx oriented

export const CompetitionManager = observer(() => {
    const [difficulty, setDifficulty] = useState(5);
    const updateDifficulty = num => e => {
        setDifficulty(num);
        e.preventDefault();
    };

    const answerState = useAnswerState();
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
                <Header/>
                <Competition difficulty={difficulty}/>
                <PercentageHistory/>
                <HistoryLog/>
                <Favourites/>
            </div>
            <Loading isLoading={isLoading}/>
            <PageTitle isLoading={isLoading}/>
        </div>
    );
});
