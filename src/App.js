import React from 'react';
import {CompetitionManager} from './components/CompetitionManager';

import './styles.scss';
import '@fortawesome/fontawesome-free/css/all.css'
import {AnswersStateProvider} from "./state/AnswersStateProvider";
import {Loading} from './components/Loading';
import {PageTitle} from './components/PageTitle';
import {Logger} from "./logging/Logger";

function App() {
    return (
        <AnswersStateProvider>
            <Logger/>
            <CompetitionManager/>
            <Loading/>
            <PageTitle/>
        </AnswersStateProvider>
    );
}

export default App;
