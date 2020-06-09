import React from 'react';
import {CompetitionManager} from './components/CompetitionManager';

import './styles.scss';
import '@fortawesome/fontawesome-free/css/all.css'
import {AnswerStateProvider} from "./state/AnswerStateProvider";

function App() {
  return (
      <AnswerStateProvider>
        <CompetitionManager />
      </AnswerStateProvider>
  );
}

export default App;
