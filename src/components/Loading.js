import React from 'react';
import {observer} from "mobx-react";
import {useStateContext} from '../state/AnswerContext';

export const Loading = observer(() => {
    const {isLoading} = useStateContext();
    return isLoading ? <div className="loading">Loading...</div> : null;
});