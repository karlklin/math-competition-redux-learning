import React from 'react';
import {useAnswerState} from "../state/AnswerStateProvider";
import {observer, useAsObservableSource, useLocalStore} from 'mobx-react';
import {runInAction} from "mobx";

export const Competition = observer(({difficulty}) => {
    const answerState = useAnswerState();
    const difficultyState = useAsObservableSource({difficulty});
    const competitionState = useLocalStore(() => ({
        competition: newCompetition(difficultyState.difficulty),
        next() {
            runInAction(() => {
                this.competition = newCompetition(difficultyState.difficulty);
            });
        }
    }));

    const submit = e => {
        if (e.key === 'Enter' && e.target.value !== '') {
            answerState.addAnswer({...competitionState.competition, answer: parseInt(e.target.value, 10)});
            competitionState.next();
            e.target.value = '';
        }
    };

    return (
        <div className="competition">
            <span className="a">{competitionState.competition.a}</span>
            <span className="operator">{competitionState.competition.operator}</span>
            <span className="b">{competitionState.competition.b}</span>
            <span className="equal">=</span>
            <input type="number" onKeyPress={submit}/>
        </div>
    );
});

const newCompetition = (difficulty = 10) => {
    const operators = ['+', '-', '*'];
    const rand = max => ~~(Math.random() * max);
    return {
        id: Date.now(),
        a: rand(difficulty),
        b: rand(difficulty),
        operator: operators[rand(operators.length)]
    }
}