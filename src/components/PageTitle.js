import {useEffect} from 'react';
import {useAnswerState} from "../state/AnswerStateProvider";

export const PageTitle = ({isLoading}) => {
    const answerState = useAnswerState();
    useEffect(() => {
        document.title = isLoading ? 'Loading...' : `Competitions: ${answerState.answers.length}`;
    }, [isLoading, answerState.answers.length]);
    return null;
};