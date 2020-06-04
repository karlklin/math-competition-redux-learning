import {useEffect} from 'react';

export const PageTitle = ({answerState, isLoading}) => {
    useEffect(() => {
        document.title = isLoading ? 'Loading...' : `Competitions: ${answerState.answers.length}`;
    }, [isLoading, answerState.answers.length]);
    return null;
};