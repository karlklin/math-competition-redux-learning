export const api = {
    addAnswer: answer => new Promise(resolve => setTimeout(() => resolve(answer), 1000)),
    deleteAnswer: id => new Promise(resolve => setTimeout(() => resolve(id), 1000)),
    like: answer => new Promise(resolve => setTimeout(() => resolve(answer), 1000)),
    unlike: answer => new Promise(resolve => setTimeout(() => resolve(answer), 1000)),
    updateAnswer: answer => new Promise(resolve => setTimeout(() => resolve(answer), 1000)),
};
