import {action, computed, configure, observable, runInAction} from 'mobx';
import {api} from '../services/api';

configure({
  enforceActions: 'observed'
});

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
    runInAction('pushAnswer', () => {
      this.answers.push(resultAnswer);
    });
    this.popLoading();
  };

  @action deleteAnswer = async id => {
    this.loading.push(true);
    const resultId = await api.deleteAnswer(id);
    runInAction('deleteAnswerFromAnswers', () => {
      this.answers.splice(this.answers.findIndex(item => item.id === resultId), 1);
    });
    this.popLoading();
  };

  @action addLike = async answer => {
    this.loading.push(true);
    const resultAnswer = await api.like(answer);
    runInAction('addFavourite', () => {
      this.favourites.push(resultAnswer);
    })
    this.popLoading();
  };

  @action popLoading = () => {
    this.loading.pop();
  };

  @action removeLike = async id => {
    this.loading.push(true);
    const resultId = await api.unlike(id);
    runInAction('removeFavourite', () => {
      this.favourites.splice(this.favourites.findIndex(item => item.id === resultId), 1);
    });
    this.popLoading();
  };
}