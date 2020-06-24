import React, {useContext} from 'react';
import {AnswerState} from './AnswerState';

const state = new AnswerState();

const StateContext = React.createContext(null);

export const StateContextProvide = ({ children }) => {
  return <StateContext.Provider value={state}>{children}</StateContext.Provider>
}

export const useStateContext = () => useContext(StateContext);