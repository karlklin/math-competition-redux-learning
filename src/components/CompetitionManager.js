import React, { useState } from 'react';
import { Header } from './Header';
import { Competition } from './Competition';
import { PercentageHistory } from './PercentageHistory';
import { HistoryLog } from './HistoryLog';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../store/actions';

export function CompetitionManager() {

    const [answers, addAnswer, deleteAnswer] = useAnswers();

    console.log(answers);

    return (
        <div className="container">
            <Header answers={answers}/>
            <Competition onAnswer={addAnswer}/>
            <PercentageHistory answers={answers}/>
            <HistoryLog history={answers} onDelete={deleteAnswer}/>
        </div>
    );
}

const useAnswers = () => {
    const answers = useSelector(state => state.answers);
    const dispatch = useDispatch();
    const addAnswer = answer => dispatch(actions.addAnswer(answer));
    const deleteAnswer = id => dispatch(actions.deleteAnswer(id));
    return [answers, addAnswer, deleteAnswer];
}