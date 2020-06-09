import React from 'react';
import {CompetitionManager} from './components/CompetitionManager';

import './styles.scss';
import '@fortawesome/fontawesome-free/css/all.css'
import {AnswerStateProvider} from "./state/AnswerStateProvider";
import {Loading} from "./components/Loading";
import {PageTitle} from "./components/PageTitle";
import {Logger} from "./logging/Logger";

function App() {
  return (
      <AnswerStateProvider>
        <CompetitionManager />
          <Loading/>
          <PageTitle/>
          <Logger/>
      </AnswerStateProvider>
  );
}

export default App;
