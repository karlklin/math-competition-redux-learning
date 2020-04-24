import React, { useEffect } from 'react';
import {observer} from "mobx-react";
import {autorun} from 'mobx';
import {useAnswersState} from "../state/AnswersStateProvider";

export const PageTitle = observer(() => {
    const answers = useAnswersState();
    useEffect(() => autorun(() => {
        document.title = answers.isLoading ? 'Loading...' : `Competitions: ${answers.allCount}`;
    }), []);
    return null;
});