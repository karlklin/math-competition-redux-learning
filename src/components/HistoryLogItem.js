import React from 'react';
import { correctAnswer, isCorrect } from '../services/competitionHelper';
import { useDispatch } from 'react-redux';
import * as actions from '../store/actions';

export function HistoryLogItem({item}) {
    const dispatch = useDispatch();
    const correct = isCorrect(item);

    return (
        <div className={correct ? 'history-log-item correct' : 'history-log-item wrong'}>
            <i className="fas fa-trash" onClick={() => dispatch(actions.deleteAnswer(item.id))}></i>
            <span>{item.a}</span>
            <span>{item.operator}</span>
            <span>{item.b}</span>
            <span>=</span>
            <span className="answer">{item.answer}</span>
            <span className="correct-answer">{correctAnswer(item)}</span>
        </div>
    );
}