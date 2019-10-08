import * as actions from './actions';
import * as R from 'ramda';
import { createSelector } from 'reselect';
import {isCorrect} from '../services/competitionHelper';

export const _answers = R.lensProp('answers');
const answerById = id => R.compose(_answers, R.lensProp(id));
const userAnswer = id => R.compose(answerById(id), R.lensProp('answer'));

export const selectAnswers = createSelector(
    R.view(_answers),
    R.values
);

export const selectNumberOfAnswers = createSelector(
    selectAnswers,
    R.length
);

export const selectNumberOfCorrectAnswers = createSelector(
    selectAnswers,
    R.pipe(R.filter(isCorrect), R.length)
);


const initialState = {
    answers: {
        1: {id: 1, a: 5, b: 10, operator: '+', answer: 15},
        2: {id: 2, a: 5, b: 10, operator: '-', answer: 10},
        3: {id: 3, a: 5, b: 10, operator: '*', answer: 10}
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actions.ADD_ANSWER):
            return R.set(answerById(action.payload.id), action.payload)(state);
        case (actions.DELETE_ANSWER):
            return R.over(_answers, R.dissoc(action.payload))(state);
        case (actions.UPDATE_ANSWER):
            const { id, answer } = action.payload;
            return R.set(userAnswer(id), answer)(state);
        default: return state;
    }
};
export default reducer;