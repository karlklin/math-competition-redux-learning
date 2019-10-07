import * as actions from './actions';

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
            return {
                ...state,
                answers: {
                    ...state.answers,
                    [action.payload.id]: action.payload
                }
            };
        case (actions.DELETE_ANSWER):
            const withoutProperty = (prop, obj) => {
                const newObject = {...obj};
                delete newObject[prop];
                return newObject;
            };
            return {
                ...state,
                answers: withoutProperty(action.payload, state.answers)
            };
        case (actions.UPDATE_ANSWER):
            const { id, answer } = action.payload;
            return {
                ...state,
                answers: {
                    ...state.answers,
                    [id]: {
                        ...state.answers[id],
                        answer
                    }
                }
            };
        default: return state;
    }
};
export default reducer;