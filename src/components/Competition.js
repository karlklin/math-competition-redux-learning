import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../store/actions';

const generator = competitionGenerator();

export function Competition() {

    const dispatch = useDispatch();
    const [data, setData] = useState(generator.next().value);

    const submit = e => {
        if (e.key === 'Enter' && e.target.value !== '') {
            dispatch(actions.addAnswer({...data, answer: parseInt(e.target.value, 10)}));
            setData(generator.next().value);
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
}

function* competitionGenerator() {
    const operators = ['+', '-', '*'];
    const rand = max => ~~(Math.random() * max);
    while (true) {
        yield {
            id: Date.now(),
            a: rand(10),
            b: rand(10),
            operator: operators[rand(3)]
        }
    }
}