import React from 'react';
import {observer} from "mobx-react";
import {useAnswersState} from "../state/AnswersStateProvider";

export const Loading = observer(() => {
    const answers = useAnswersState();
    return answers.isLoading ? <div className="loading">Loading...</div> : null;
});