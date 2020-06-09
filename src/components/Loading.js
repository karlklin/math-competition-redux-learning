import React from 'react';
import {useAnswerState} from "../state/AnswerStateProvider";
import {observer} from "mobx-react";

export const Loading = observer(() => {
    const answerState = useAnswerState();
    return answerState.isLoading ? <div className="loading">Loading...</div> : null;
});