import React, { useState } from 'react';
import {useAnswersState} from "../state/AnswersStateProvider";
import {useLocalStore, observer, useAsObservableSource} from 'mobx-react'
import {runInAction} from 'mobx';



export const Competition = observer(({ difficulty }) => {
    const answers = useAnswersState();
    const initialValue = newCompetition(difficulty);

    const config = useAsObservableSource({ difficulty })
    const newAnswer = useLocalStore(() => ({
        id: initialValue.id,
        a: initialValue.a,
        b: initialValue.b,
        operator: initialValue.operator,
        next() {
            runInAction(() => {
                const v = newCompetition(config.difficulty);
                this.id = v.id;
                this.a = v.a;
                this.b = v.b;
                this.operator = v.operator;
            });
        }
    }));

    const submit = e => {
        if(e.key === 'Enter' && e.target.value !== '') {
            answers.addAnswer({
                id: newAnswer.id,
                a: newAnswer.a,
                b: newAnswer.b,
                operator: newAnswer.operator,
                answer: parseInt(e.target.value, 10)
            });
            newAnswer.next();
            e.target.value = '';
        }
    };

    return (
        <div className="competition">
            <span className="a">{newAnswer.a}</span>
            <span className="operator">{newAnswer.operator}</span>
            <span className="b">{newAnswer.b}</span>
            <span className="equal">=</span>
            <input type="number" onKeyPress={submit} />
        </div>
    );
})

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