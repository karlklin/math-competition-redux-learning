import {computed, observable, runInAction, action} from 'mobx';
import {isCorrect} from "../services/competitionHelper";
import {api} from '../services/api';

export class AnswersState {

    list = [
        {id: 1, a: 5, b: 10, operator: '+', answer: 15},
        {id: 2, a: 5, b: 10, operator: '-', answer: 10},
        {id: 3, a: 5, b: 10, operator: '*', answer: 10},
    ];
    loading = [];
    favourites = [];

    get answersList() {
        return this.list.slice();
    }

    get favouritesList() {
        return this.favourites.slice();
    }

    get allCount() {
        return this.list.length;
    }

    get correctCount() {
        return this.list.filter(isCorrect).length
    }

    filterBy = op => this.list.filter(item => item.operator === op);

    get totalAnswers() {
        return this.filterBy('+');
    }

    get differenceAnswers() {
        return this.filterBy('-')
    }

    get productAnswers() {
        return this.filterBy('*');
    }

    percentageOfCorrect = answers => {
        const allAnswers = answers.length;
        const correctAnswers = answers.filter(isCorrect).length;

        return allAnswers === 0 ? 0 : Math.floor(correctAnswers * 100 / allAnswers);
    };

    get percentageOfAllCorrect() {
        return this.percentageOfCorrect(this.list);
    }

    get percentageOfTotalCorrect() {
        return this.percentageOfCorrect(this.totalAnswers);
    }

    get percentageOfDifferenceCorrect() {
        return this.percentageOfCorrect(this.differenceAnswers);
    }

    get percentageOfProductCorrect() {
        return this.percentageOfCorrect(this.productAnswers);
    }

    get isLoading() {
        return this.loading.length > 0;
    }

    async addAnswer(answer) {
        this.loading.push(true);
        await api.addAnswer(answer)
        runInAction(() => {
            this.list.push(answer);
            this.loading.pop();
        })
    }

    async deleteAnswer(id) {
        this.loading.push(true);
        await api.deleteAnswer(id)
        runInAction(() => {
            const index = this.list.findIndex(item => item.id === id);
            index >= 0 && this.list.splice(index, 1);
            this.unlike(id);
            this.loading.pop();
        })
    }

    async like(answer) {
        this.loading.push(true);
        await api.like(answer)
        runInAction(() => {
            this.favourites.push(answer);
            this.loading.pop();
        })
    }

    async unlike(id) {
        this.loading.push(true);
        await api.unlike(id)
        runInAction(() => {
            const index = this.favourites.findIndex(item => item.id === id);
            index >= 0 && this.favourites.splice(index, 1);
            this.loading.pop();
        })
    }

    async updateAnswer(id, newAnswer) {
        this.loading.push(true);
        await api.updateAnswer(id, newAnswer);
        runInAction(() => {
            const answer = this.findById(id);
            if(answer) {
                answer.answer = newAnswer;
            }
            this.loading.pop();
        })
    }

    isLike(id) {
        return !!this.favourites.find(fav => fav.id === id)
    }

    findById(id) {
        return this.list.find(answer => answer.id === id);
    }
}