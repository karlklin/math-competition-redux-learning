import {useEffect} from 'react';
import {useStateContext} from '../state/AnswerContext';
import {reaction} from "mobx";

function updatePageTitle(state) {
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
};

export const PageTitle = () => {
    const state = useStateContext();
    useEffect(() => {
        updatePageTitle(state);
    }, [state]);
    return null;
};