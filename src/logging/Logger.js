import {useEffect} from 'react';

import {answerState} from "../state/AnswerStateProvider";
import {autorun} from "mobx";

function logAnswerState() {
     return autorun(() => {
        console.log(JSON.stringify({
            answers: answerState.answers,
            favourites: answerState.favourites,
            isLoading: answerState.loading
        }, null, 2))
    }, {
        scheduler: run => setTimeout(run, 3000)
    });
}

export const Logger = () => {
    useEffect(() => logAnswerState(), []);
    return null;
};