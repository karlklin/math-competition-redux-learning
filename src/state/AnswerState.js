import {action, computed, observable, runInAction} from 'mobx';
import {api} from '../services/api';

export class AnswerState {
  @observable answers = [
    {id: 1, a: 5, b: 10, operator: '+', answer: 15},
    {id: 2, a: 5, b: 10, operator: '-', answer: 10},
    {id: 3, a: 5, b: 10, operator: '*', answer: 10},
  ];

  @observable loading = [];

  @observable favourites = [];

  @computed get isLoading() {
    return this.loading.length > 0;
  }

  @computed get diffAnswers() {
    return this.answers.filter(item => item.operator === '-');
  }

  @computed get sumAnswers() {
    return this.answers.filter(item => item.operator === '+');
  }

  @computed get productAnswers() {
    return this.answers.filter(item => item.operator === '*');
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
    runInAction(() => {
      this.answers.splice(this.answers.findIndex(item => item.id === resultId), 1);
      this.loading.pop();
    });
  };

  @action addLike = async answer => {
    this.loading.push(true);
    const resultAnswer = await api.like(answer);
    this.addFavourites(resultAnswer);
    this.popLoading();
  };

  @action addFavourites = resultAnswer => {
    this.favourites.push(resultAnswer);
  };

  @action popLoading = () => {
    this.loading.pop();
  };

  @action removeLike = async id => {
    this.loading.push(true);
    const resultId = await api.unlike(id);
    runInAction(() => {
      this.favourites.splice(this.favourites.findIndex(item => item.id === resultId), 1);
      this.loading.pop();
    });
  };
}