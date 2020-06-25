import React from 'react';
import {observer} from "mobx-react";

export const Difficulty = observer(({difficultyState}) => {
    const {difficulty, updateDifficulty, difficulties} = difficultyState;

    const onUpdate = num => event => {
        event.preventDefault();
        updateDifficulty(num);
    };

    return (
        <div className="difficulty">
            Difficulty:
            {difficulties.map(num =>
                <a key={num}
                   href="/#"
                   className={difficulty === num ? 'active' : ''}
                   onClick={onUpdate(num)}>{num}</a>
            )}
        </div>
    );
});