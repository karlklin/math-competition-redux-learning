import {answerState} from "../state/AnswerStateProvider";
import {reaction} from "mobx";
import {useEffect} from 'react';

function updatePageTitle() {
    return reaction(
        () => ({
            isLoading: answerState.isLoading,
            length: answerState.answers.length
        }),
        ({isLoading, length}) => {
            document.title = isLoading ? 'Loading...' : `Competitions: ${length}`;
        }, {
            fireImmediately: true
        }
    );
};

export const PageTitle = () => {
    useEffect(() => {
        return updatePageTitle()
    }, []);
    return null;
};