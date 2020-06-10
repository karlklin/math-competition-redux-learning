import React from 'react';
import {Header} from './Header';
import {Competition} from './Competition';
import {PercentageHistory} from './PercentageHistory';
import {HistoryLog} from './HistoryLog';
import {Favourites} from "./Favourites";
import {observer, useLocalStore} from "mobx-react";
import {Difficulty} from "./Difficulty";
import {runInAction} from "mobx";

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
// Step10 - autorun & reactions: Logger & PageTitle
// Step11 - useLocalStore & useAsObservableSource
// Step12 - refactor Difficulty & difficultyState as useLocalStore

export const CompetitionManager = observer(() => {
    const difficultyState = useLocalStore(() => ({
        difficulty: 5,
        difficulties: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        updateDifficulty(num)  {
            runInAction(() => {
                this.difficulty = num;
            });
        }
    }));
    return (
        <div>
            <Difficulty difficultyState={difficultyState}/>
            <div className="container">
                <Header/>
                <Competition difficultyState={difficultyState}/>
                <PercentageHistory/>
                <HistoryLog/>
                <Favourites/>
            </div>
        </div>
    );
});
