export const ADD_ANSWER = 'add-answer';
export const DELETE_ANSWER = 'delete-answer';
export const UPDATE_ANSWER = 'update-answer';

export const addAnswer = answer => ({
    type: ADD_ANSWER,
    payload: answer
});

export const deleteAnswer = id => ({
    type: DELETE_ANSWER,
    payload: id
});

export const updateAnswer = (id, answer) => ({
    type: UPDATE_ANSWER,
    payload: { id, answer }
});