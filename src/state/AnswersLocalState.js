import {useLocalStore} from 'mobx-react';
import {isCorrect} from "../services/competitionHelper";

export const useLocalAnswersState = () => {
    const answersState = useLocalStore(() => ({
        list: [
            {id: 1, a: 5, b: 10, operator: '+', answer: 15},
            {id: 2, a: 5, b: 10, operator: '-', answer: 10},
            {id: 3, a: 5, b: 10, operator: '*', answer: 10},
        ],

        favourites: [],

        get answersList() {
            return answersState.list.slice();
        },

        get favouritesList() {
            return answersState.favourites.slice();
        },

        get allCount() {
            return answersState.list.length;
        },

        get correctCount() {
            return answersState.list.filter(isCorrect).length
        },

        filterBy: op => answersState.list.filter(item => item.operator === op),

        get totalAnswers() {
            return answersState.filterBy('+');
        },

        get differenceAnswers() {
            return answersState.filterBy('-')
        },

        get productAnswers() {
            return answersState.filterBy('*');
        },

        percentageOfCorrect: answers => {
            const allAnswers = answers.length;
            const correctAnswers = answers.filter(isCorrect).length;

            return allAnswers === 0 ? 0 : Math.floor(correctAnswers * 100 / allAnswers);
        },

        get percentageOfAllCorrect() {
            return answersState.percentageOfCorrect(answersState.list);
        },

        get percentageOfTotalCorrect() {
            return answersState.percentageOfCorrect(answersState.totalAnswers);
        },

        get percentageOfDifferenceCorrect() {
            return answersState.percentageOfCorrect(answersState.differenceAnswers);
        },

        get pecentageOfProductCorrect() {
            return answersState.percentageOfCorrect(answersState.productAnswers);
        },

        addAnswer(answer) {
            answersState.list.push(answer);
        },

        deleteAnswer(id) {
            const index = answersState.list.findIndex(item => item.id === id);
            index >= 0 && answersState.list.splice(index, 1);

            answersState.unlike(id);
        },

        like(answer) {
            answersState.favourites.push(answer);
        },

        unlike(id) {
            const index = answersState.favourites.findIndex(item => item.id === id);
            index >= 0 && answersState.favourites.splice(index, 1);
        },

        isLike(id) {
            return !!answersState.favourites.find(fav => fav.id === id)
        },
    }));
    return answersState;
};