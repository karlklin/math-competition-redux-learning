import {useEffect} from 'react';
import {useStateContext} from '../state/AnswerContext';
import {observer} from 'mobx-react';

export const PageTitle = observer(() => {
    const {answers, isLoading} = useStateContext();
    useEffect(() => {
        document.title = isLoading ? 'Loading...' : `Competitions: ${answers.length}`;
    }, [isLoading, answers.length]);
    return null;
});