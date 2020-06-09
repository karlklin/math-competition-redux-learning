import {answerState} from "../state/AnswerStateProvider";
import {reaction} from "mobx";
import {useEffect} from 'react';

function updatePageTitle() {
    reaction(
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
        updatePageTitle()
    }, []);
    return null;
};