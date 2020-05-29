import React, {useState} from 'react';

export const api = {
    addAnswer: answer => new Promise(resolve => setTimeout(() => resolve(answer), 1000)),
    deleteAnswer: id => new Promise(resolve => setTimeout(() => resolve(id), 1000)),
    like: answer => new Promise(resolve => setTimeout(() => resolve(answer), 1000)),
    unlike: answer => new Promise(resolve => setTimeout(() => resolve(answer), 1000)),
    updateAnswer: () => new Promise(resolve => setTimeout(resolve, 1000)),
};

export const useApi = () => {
    const [isLoading, setIsLoading] = useState(false);

    const runWithLoading = apiFn => async data => {
        setIsLoading(true);
        const result = await apiFn(data);
        setIsLoading(false);
        return result;
    };

    const withLoading = {
        addAnswer: runWithLoading(api.addAnswer),
        deleteAnswer: runWithLoading(api.deleteAnswer),
        like: runWithLoading(api.like),
        unlike: runWithLoading(api.unlike)
    };

    return [withLoading, isLoading];
};
