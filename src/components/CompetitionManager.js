import React, { useState } from 'react';
import {Header} from './Header';
import {Competition} from './Competition';
import {PercentageHistory} from './PercentageHistory';
import {HistoryLog} from './HistoryLog';

export function CompetitionManager() {

    const [answers, addAnswer] = useAnswers([
        { a: 5, b: 10, operator: '+', answer: 15 },
        { a: 5, b: 10, operator: '-', answer: 10 },
        { a: 5, b: 10, operator: '*', answer: 10 },
    ]);

    console.log(answers);

    return (
        <div className="container">
            <Header answers={answers}/>
            <Competition onAnswer={addAnswer}/>
            <PercentageHistory answers={answers}/>
            <HistoryLog history={answers}/>
        </div>
    );
}

const useAnswers = (initial = []) => {
    const [answers, setAnswers] = useState(initial)
    const addAnswer = answer => setAnswers([...answers, answer]);
    return [answers, addAnswer];
}