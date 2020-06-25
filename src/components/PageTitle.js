import {useEffect} from 'react';
import {useStateContext} from '../state/AnswerContext';
import {reaction} from "mobx";

export const PageTitle = () => {
    const state = useStateContext();
    useEffect(() => {
      reaction(
        () => ({
          isLoading: state.isLoading,
          length: state.answers.length
        }),
        ({isLoading, length}) => {
          document.title = isLoading ? 'Loading...' : `Competitions: ${length}`;
        }, {
          fireImmediately: true
        }
      );
    }, [state]);
    return null;
};