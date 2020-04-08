import React, { createContext, useContext } from 'react';
import {useLocalStore} from 'mobx-react';
import {createAnswers} from "./createAnswers";

const AnswersStateContext = createContext(null);

export const AnswersStateProvider = ({children}) => {
    const answersState = useLocalStore(createAnswers);
    return <AnswersStateContext.Provider value={answersState}>{children}</AnswersStateContext.Provider>
};

export const useAnswersState = () => {
    const state = useContext(AnswersStateContext);

    if (!state) {
        throw new Error('useAnswersState must be used withing AnswersStateProvider subtree.');
    }

    return state;
};