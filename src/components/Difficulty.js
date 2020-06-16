import React from 'react';

export const Difficulty = ({difficulty, updateDifficulty, difficulties}) =>
    <div className="difficulty">
        Difficulty:
        {difficulties.map(num =>
            <a key={num}
               href="/#"
               className={difficulty === num ? 'active' : ''}
               onClick={updateDifficulty(num)}>{num}</a>
        )}
    </div>;