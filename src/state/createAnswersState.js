import {computed, observable, runInAction, action} from 'mobx';
import {isCorrect} from "../services/competitionHelper";
import {api} from '../services/api';

class Answers {

    @observable list = [
        {id: 1, a: 5, b: 10, operator: '+', answer: 15},
        {id: 2, a: 5, b: 10, operator: '-', answer: 10},
        {id: 3, a: 5, b: 10, operator: '*', answer: 10},
    ];

    @observable loading = [];

    @observable favourites = [];

    @computed get answersList() {
        return this.list.slice();
    }

    @computed get favouritesList() {
        return this.favourites.slice();
    }

    @computed get allCount() {
        return this.list.length;
    }

    @computed get correctCount() {
        return this.list.filter(isCorrect).length
    }

    filterBy = op => this.list.filter(item => item.operator === op);

    @computed get totalAnswers() {
        return this.filterBy('+');
    }

    @computed get differenceAnswers() {
        return this.filterBy('-')
    }

    @computed get productAnswers() {
        return this.filterBy('*');
    }

    percentageOfCorrect = answers => {
        const allAnswers = answers.length;
        const correctAnswers = answers.filter(isCorrect).length;

        return allAnswers === 0 ? 0 : Math.floor(correctAnswers * 100 / allAnswers);
    };

    @computed get percentageOfAllCorrect() {
        return this.percentageOfCorrect(this.list);
    }

    @computed get percentageOfTotalCorrect() {
        return this.percentageOfCorrect(this.totalAnswers);
    }

    @computed get percentageOfDifferenceCorrect() {
        return this.percentageOfCorrect(this.differenceAnswers);
    }

    @computed get pecentageOfProductCorrect() {
        return this.percentageOfCorrect(this.productAnswers);
    }

    @computed get isLoading() {
        return this.loading.length > 0;
    }

    @action async addAnswer(answer) {
        this.loading.push(true);
        await api.addAnswer(answer)
        runInAction(() => {
            this.list.push(answer);
            this.loading.pop();
        })
    }

    @action async deleteAnswer(id) {
        this.loading.push(true);
        await api.deleteAnswer(id)
        runInAction(() => {
            const index = this.list.findIndex(item => item.id === id);
            index >= 0 && this.list.splice(index, 1);
            this.unlike(id);
            this.loading.pop();
        })
    }

    @action async like(answer) {
        this.loading.push(true);
        await api.like(answer)
        runInAction(() => {
            this.favourites.push(answer);
            this.loading.pop();
        })
    }

    @action async unlike(id) {
        this.loading.push(true);
        await api.unlike(id)
        runInAction(() => {
            const index = this.favourites.findIndex(item => item.id === id);
            index >= 0 && this.favourites.splice(index, 1);
            this.loading.pop();
        })
    }

    @action async updateAnswer(id, newAnswer) {
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

export const createAnswersState = () => new Answers();