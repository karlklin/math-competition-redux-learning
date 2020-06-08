import {action, computed, observable, runInAction} from "mobx";
import {api} from "../services/api";
import {isCorrect} from "../services/competitionHelper";
import {configure} from 'mobx'

configure({
    enforceActions: 'observed'
});

export class AnswerState {
    @observable answers = [
        {id: 1, a: 5, b: 10, operator: '+', answer: 15},
        {id: 2, a: 5, b: 10, operator: '-', answer: 10},
        {id: 3, a: 5, b: 10, operator: '*', answer: 10},
    ];
    @observable favourites = [];
    @observable loading = [];

    @computed get correctCount() {
        return this.answers.filter(isCorrect).length;
    }

    @computed get totalCount() {
        return this.answers.length;
    }

    filterBy(op) {
        return this.answers.filter(item => item.operator === op);
    }

    percentageOfCorrect(answers) {
        const allAnswers = answers.length;
        if (allAnswers === 0) {
            return 0;
        }

        const correctAnswers = answers.filter(isCorrect).length;
        return Math.floor(correctAnswers * 100 / allAnswers);
    }

    @computed get percentageOfAllCorrect() {
        return this.percentageOfCorrect(this.answers);
    }

    @computed get percentageOfTotalCorrect() {
        return this.percentageOfCorrect(this.filterBy("+"));
    }

    @computed get percentageOfDifferenctCorrect() {
        return this.percentageOfCorrect(this.filterBy("-"));
    }

    @computed get percentageOfProductCorrect() {
        return this.percentageOfCorrect(this.filterBy("*"))
    }

    isLike(id) {
        return !!this.favourites.find(fav => fav.id === id);
    }

    isCorrect(item) {
        return isCorrect(item);
    }

    @action addAnswer = async answer => {
        this.loading.push(true);
        const resultAnswer = await api.addAnswer(answer);
        runInAction(() => {
            this.answers.push(resultAnswer);
            this.loading.pop();
        });
    };

    @action deleteAnswer = async id => {
        this.loading.push(true);
        const resultId = await api.deleteAnswer(id);
        const index = this.answers.findIndex(item => item.id === resultId);
        runInAction(() => {
            this.answers.splice(index, 1);
            this.loading.pop();
        });
    };

    @action updateAnswer = async (answer, result) => {
        this.loading.push(true);
        const updatedAnswer = await api.updateAnswer(answer);
        runInAction(() => {
            updatedAnswer.answer = result;
            this.loading.pop();
        });
    };

    @action addLike = async answer => {
        this.loading.push(true);
        const resultAnswer = await api.like(answer);
        runInAction(() => {
            this.favourites.push(resultAnswer);
            this.loading.pop();
        });
    };

    @action removeLike = async id => {
        this.loading.push(true);
        const resultId = await api.unlike(id);
        const index = this.favourites.findIndex(item => item.id === resultId);
        runInAction(() => {
            this.favourites.splice(index, 1);
            this.loading.pop();
        });
    };
}