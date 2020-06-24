import React from 'react';
import {CompetitionManager} from './components/CompetitionManager';

import './styles.scss';
import '@fortawesome/fontawesome-free/css/all.css'
import {StateContextProvider} from './state/AnswerContext';

function App() {
  return (
      <StateContextProvider>
        <CompetitionManager />
      </StateContextProvider>
  );
}

export default App;
