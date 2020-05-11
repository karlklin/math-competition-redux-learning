import React, {useState} from 'react';
import {Header} from './Header';
import {Competition} from './Competition';
import {PercentageHistory} from './PercentageHistory';
import {HistoryLog} from './HistoryLog';
import {Favourites} from "./Favourites";

const difficulties = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const CompetitionManager = () => {
  const [difficulty, setDifficulty] = useState(5);
  const updateDifficulty = num => e => {
    setDifficulty(num);
    e.preventDefault();
  }

  return (
    <div>
      <div className="difficulty">
        Difficulty:
        { difficulties.map(num =>
          <a key={num}
             href="/#"
             className={difficulty === num ? 'active' : ''}
             onClick={updateDifficulty(num)}>{num}</a>
        )}
      </div>
      <div className="container">
          <Header/>
          <Competition difficulty={difficulty}/>
          <PercentageHistory/>
          <HistoryLog/>
          <Favourites/>
      </div>
    </div>
  );
};