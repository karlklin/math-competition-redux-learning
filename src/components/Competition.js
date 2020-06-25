import React from 'react';
import {useStateContext} from '../state/AnswerContext';
import {observer, useLocalStore} from 'mobx-react';
import {action} from "mobx";

export const Competition = observer(({difficultyState}) => {
    const {addAnswer} = useStateContext();

    // const difficultyState = useAsObservableSource({difficulty});
    const {data, nextData} = useLocalStore(() => ({
        data: newCompetition(difficultyState.difficulty),
        nextData: action(function () {
            this.data = newCompetition(difficultyState.difficulty);
        })
    }));

    const submit = e => {
        if (e.key === 'Enter' && e.target.value !== '') {
            addAnswer({...data, answer: parseInt(e.target.value, 10)});
            nextData();
            e.target.value = '';
        }
    };

    return (
        <div className="competition">
            <span className="a">{data.a}</span>
            <span className="operator">{data.operator}</span>
            <span className="b">{data.b}</span>
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