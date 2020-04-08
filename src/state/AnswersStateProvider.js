import React, { createContext, useContext } from 'react';
import {useLocalStore} from 'mobx-react';
import {Answers} from "./Answers";

const AnswersStateContext = createContext(null);

export const AnswersStateProvider = ({children}) => {
    const answersState = useLocalStore(() => new Answers());
    return <AnswersStateContext.Provider value={answersState}>{children}</AnswersStateContext.Provider>
};

export const useAnswersState = () => {
    const state = useContext(AnswersStateContext);

    if (!state) {
        throw new Error('useAnswersState must be used withing AnswersStateProvider subtree.');
    }

    return state;
};