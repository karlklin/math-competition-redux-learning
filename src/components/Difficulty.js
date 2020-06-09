import React from 'react';
import {observer} from "mobx-react";

export const Difficulty = observer(({difficultyState}) => {

    const updateOnClick = num => e => {
        e.preventDefault();
        difficultyState.updateDifficulty(num);
    };

    return (
        <div className="difficulty">
            Difficulty:
            {difficultyState.difficulties.map(num =>
                <a key={num}
                   href="/#"
                   className={difficultyState.difficulty === num ? 'active' : ''}
                   onClick={updateOnClick(num)}>{num}</a>
            )}
        </div>
    )
});