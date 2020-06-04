import {observable} from "mobx";
import {api} from "../services/api";

export class AnswerState {
    answers = observable([
        {id: 1, a: 5, b: 10, operator: '+', answer: 15},
        {id: 2, a: 5, b: 10, operator: '-', answer: 10},
        {id: 3, a: 5, b: 10, operator: '*', answer: 10},
    ]);
    favourites = observable([]);
    loading = observable([]);

    addAnswer = async answer => {
        this.loading.push(true);
        const resultAnswer = await api.addAnswer(answer);
        this.answers.push(resultAnswer);
        this.loading.pop();
    };

    deleteAnswer = async id => {
        this.loading.push(true);
        const resultId = await api.deleteAnswer(id);
        const index = this.answerState.findIndex(item => item.id === resultId);
        this.answers.splice(index, 1);
        this.loading.pop();
    };

    addLike = async answer => {
        this.loading.push(true);
        const resultAnswer = await api.like(answer);
        this.favourites.push(resultAnswer);
        this.loading.pop();
    };

    removeLike = async id => {
        this.loading.push(true);
        const resultId = await api.unlike(id);
        const index = this.favouriteState.findIndex(item => item.id === resultId);
        this.favourites.splice(index, 1);
        this.loading.pop();
    };
}