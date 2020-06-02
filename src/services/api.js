import {useState} from 'react';

export const api = {
    addAnswer: answer => new Promise(resolve => setTimeout(() => resolve(answer), 1000)),
    deleteAnswer: id => new Promise(resolve => setTimeout(() => resolve(id), 1000)),
    like: answer => new Promise(resolve => setTimeout(() => resolve(answer), 1000)),
    unlike: answer => new Promise(resolve => setTimeout(() => resolve(answer), 1000)),
    updateAnswer: () => new Promise(resolve => setTimeout(resolve, 1000)),
};

export const useApi = () => {
    const [isLoading, setIsLoading] = useState(false);

    const callApi = apiFn => async data => {
        setIsLoading(true);
        const result = await apiFn(data);
        setIsLoading(false);
        return result;
    };

    const withLoading = {
        addAnswer: callApi(api.addAnswer),
        deleteAnswer: callApi(api.deleteAnswer),
        like: callApi(api.like),
        unlike: callApi(api.unlike)
    };

    return [withLoading, isLoading];
};
