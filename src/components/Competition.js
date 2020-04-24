import React, { useState } from 'react';
import {useAnswersState} from "../state/AnswersStateProvider";
import {useLocalStore, observer, useAsObservableSource} from 'mobx-react'



export const Competition = observer(({ difficulty }) => {
    const answers = useAnswersState();
    const initialValue = newCompetition(difficulty);

    const config = useAsObservableSource({ difficulty })
    const localStore = useLocalStore(() => ({
        id: initialValue.id,
        a: initialValue.a,
        b: initialValue.b,
        operator: initialValue.operator,
        next() {
            const v = newCompetition(config.difficulty)
            this.id = v.id;
            this.a = v.a;
            this.b = v.b;
            this.operator = this.operator;
        }
    }))

    const submit = e => {
        if(e.key === 'Enter' && e.target.value !== '') {
            answers.addAnswer({
                id: localStore.id,
                a: localStore.a,
                b: localStore.b,
                operator: localStore.operator,
                answer: parseInt(e.target.value, 10)
            });
            localStore.next();
            e.target.value = '';
        }
    };

    return (
        <div className="competition">
            <span className="a">{localStore.a}</span>
            <span className="operator">{localStore.operator}</span>
            <span className="b">{localStore.b}</span>
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