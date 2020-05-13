import {useEffect} from 'react';

export const PageTitle = ({answers, isLoading}) => {
    useEffect(() => {
        document.title = isLoading ? 'Loading...' : `Competitions: ${answers.length}`;
    }, [isLoading, answers.length]);
    return null;
};