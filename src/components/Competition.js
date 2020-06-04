import React, { useState } from 'react';

export const Competition = ({ addAnswer, difficulty }) => {
    const [data, setData] = useState(newCompetition(difficulty));

    const submit = e => {
        if(e.key === 'Enter' && e.target.value !== '') {
            addAnswer({...data, answer: parseInt(e.target.value, 10)});
            setData(newCompetition(difficulty));
            e.target.value = '';
        }
    };

    return (
        <div className="competition">
            <span className="a">{data.a}</span>
            <span className="operator">{data.operator}</span>
            <span className="b">{data.b}</span>
            <span className="equal">=</span>
            <input type="number" onKeyPress={submit} />
        </div>
    );
};

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