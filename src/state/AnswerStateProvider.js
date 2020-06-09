import React, {createContext, useContext} from 'react';
import {AnswerState} from "./AnswerState";

export const answerState = new AnswerState();
const AnswerStateContext = createContext(null);

export const AnswerStateProvider = ({children}) =>
    <AnswerStateContext.Provider value={answerState}>{children}</AnswerStateContext.Provider>;

export const useAnswerState = () => {
  const state = useContext(AnswerStateContext);

  if (!state) {
      throw new Error('useAnswerState must be used within subtree of AnswerStateProvider');
  }

  return state;
};

