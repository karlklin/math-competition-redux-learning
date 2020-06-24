import React from 'react';
import {CompetitionManager} from './components/CompetitionManager';

import './styles.scss';
import '@fortawesome/fontawesome-free/css/all.css'
import {StateContextProvide} from './state/AnswerContext';

function App() {
  return (
      <StateContextProvide>
        <CompetitionManager />
      </StateContextProvide>
  );
}

export default App;
