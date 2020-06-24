import React from 'react';

export const Difficulty = ({difficulty, updateDifficulty, difficulties}) => {

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
}