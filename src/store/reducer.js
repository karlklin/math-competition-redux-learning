import * as actions from './actions';

const initialState = {
    answers: [
        {id: 1, a: 5, b: 10, operator: '+', answer: 15},
        {id: 2, a: 5, b: 10, operator: '-', answer: 10},
        {id: 3, a: 5, b: 10, operator: '*', answer: 10}
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actions.ADD_ANSWER): {
            return {
                ...state,
                answers: [...state.answers, action.payload]
            };
        }
        case (actions.DELETE_ANSWER): {
            return {
                ...state,
                answers: state.answers.filter(answer => answer.id !== action.payload)
            };
        }
        case (actions.UPDATE_ANSWER): {
            const { id, answer } = action.payload;
            return {
                ...state,
                answers: state.answers.map(currentAnswer => currentAnswer.id !== id
                    ? ({...currentAnswer})
                    : ({...currentAnswer, answer })
                )
            };
        }
        default: return state;
    }
};
export default reducer;