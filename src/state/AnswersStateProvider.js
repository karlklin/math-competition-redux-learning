import React, {createContext, useContext} from 'react';
import {createAnswersState} from "./createAnswersState";
import {configure} from 'mobx';

const AnswersStateContext = createContext(null);

configure({
    enforceActions: 'observed'
});

export const AnswersStateProvider = ({children}) => {
    // another option is to use component local store
    // const answersState = useLocalAnswersState();
    const answersState = createAnswersState();
    return <AnswersStateContext.Provider value={answersState}>{children}</AnswersStateContext.Provider>
};

export const useAnswersState = () => {
    const state = useContext(AnswersStateContext);

    if (!state) {
        throw new Error('useAnswersState must be used withing AnswersStateProvider subtree.');
    }

    return state;
};