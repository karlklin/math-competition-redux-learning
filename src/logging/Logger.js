import {useEffect} from 'react';
import {autorun} from "mobx";
import {useAnswersState} from "../state/AnswersStateProvider";

export const Logger = () => {
    const answers = useAnswersState();

    useEffect(() =>  autorun(() => {
        console.log(JSON.stringify({
            list: answers.answersList,
            favourites: answers.favouritesList,
            allCount: answers.allCount,
            isLoading: answers.isLoading
        }, null, 2));
    }, {
        scheduler: run => {
            setTimeout(run, 1000)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }), []);

    return null;
}