import {state} from "../state/AnswerContext";
import {autorun} from "mobx";

export function logAnswerState() {
    autorun(() => {
        console.log(JSON.stringify({
            answers: state.answers,
            favourites: state.favourites,
            isLoading: state.loading
        }, null, 2))
    }, {
        scheduler: run => setTimeout(run, 3000)
    });
}