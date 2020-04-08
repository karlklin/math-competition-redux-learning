import React from 'react';
import {CompetitionManager} from './components/CompetitionManager';

import './styles.scss';
import '@fortawesome/fontawesome-free/css/all.css'
import {AnswersStateProvider} from "./state/AnswersStateProvider";

function App() {
  return (
      <AnswersStateProvider>
        <CompetitionManager />
      </AnswersStateProvider>
  );
}

export default App;
