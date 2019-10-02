import React, { useState } from 'react';
import {Header} from './Header';
import {Competition} from './Competition';
import {PercentageHistory} from './PercentageHistory';
import {HistoryLog} from './HistoryLog';

export function CompetitionManager() {

    const [answers, addAnswer, deleteAnswer] = useAnswers([
        { id: 1, a: 5, b: 10, operator: '+', answer: 15 },
        { id: 2, a: 5, b: 10, operator: '-', answer: 10 },
        { id: 3, a: 5, b: 10, operator: '*', answer: 10 },
    ]);

    return (
        <div className="container">
            <Header answers={answers}/>
            <Competition onAnswer={addAnswer}/>
            <PercentageHistory answers={answers}/>
            <HistoryLog history={answers} onDelete={deleteAnswer}/>
        </div>
    );
}

const useAnswers = (initial = []) => {
    const [answers, setAnswers] = useState(initial)
    const addAnswer = answer => setAnswers([...answers, answer]);
    const deleteAnswer = id => setAnswers(answers.filter(item => item.id !== id));
    return [answers, addAnswer, deleteAnswer];
}