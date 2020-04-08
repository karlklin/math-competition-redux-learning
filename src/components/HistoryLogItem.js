import React, {useState, useRef} from 'react';
import {correctAnswer, isCorrect} from '../services/competitionHelper';
import {useAnswersState} from "../state/AnswersStateProvider";

export function HistoryLogItem({item, isLike}) {
    const answers = useAnswersState();

    const correct = isCorrect(item);
    const [editor, toggleEditor] = useToggle(false);
    const newValue = useRef(item.answer);

    const update = () => {
        item.answer = parseInt(newValue.current.value);
        toggleEditor();
    };

    const submit = e => {
        if (e.key === 'Enter' && e.target.value !== '') {
            update();
        }
    };

    const isToEdit = !correct && !editor;
    const isInEdit = !correct && editor;

    const onDelete = () => answers.deleteAnswer(item.id);
    const onLike = () => answers.like(item);
    const onUnlike = () => answers.unlike(item.id);

    return (
        <div className={correct ? 'history-log-item correct' : 'history-log-item wrong'}>
            <i className="fas fa-trash" onClick={onDelete}></i>
            {!isLike ? <i className="far fa-thumbs-up" onClick={onLike}></i> : null}
            {isLike ? <i className="fas fa-thumbs-up" onClick={onUnlike}></i> : null}
            {isToEdit ? <i className="fas fa-edit" onClick={toggleEditor}></i> : null}
            {correct ? <i className="fas"></i> : null}
            {isInEdit ? <i className="fas fa-check" onClick={update}></i> : null}
            <span>{item.a}</span>
            <span>{item.operator}</span>
            <span>{item.b}</span>
            <span>=</span>
            {!isInEdit ? <span className="answer">{item.answer}</span> : null}
            {!isInEdit ? <span className="correct-answer">{correctAnswer(item)}</span> : null}
            {isInEdit ? <input type="number" onKeyPress={submit} ref={newValue}/> : null}
        </div>
    );
}

const useToggle = initial => {
    const [toggled, setToggled] = useState(initial);
    const toggle = () => setToggled(!toggled);
    return [toggled, toggle];
};