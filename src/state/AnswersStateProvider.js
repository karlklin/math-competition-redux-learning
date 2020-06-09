import React, {createContext, useContext} from 'react';
import {AnswersState} from "./AnswersState";
import {configure} from 'mobx';

const AnswersStateContext = createContext(null);

configure({
    enforceActions: 'observed'
});

export const AnswersStateProvider = ({children}) => {
    const answersState = new AnswersState();
    return <AnswersStateContext.Provider value={answersState}>{children}</AnswersStateContext.Provider>
};

export const useAnswersState = () => {
    const state = useContext(AnswersStateContext);

    if (!state) {
        throw new Error('useAnswersState must be used withing AnswersStateProvider subtree.');
    }

    return state;
};