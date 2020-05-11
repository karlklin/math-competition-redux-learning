import React, { useEffect } from 'react';
import {observer} from "mobx-react";
import {autorun, when, reaction} from 'mobx';
import {useAnswersState} from "../state/AnswersStateProvider";

export const PageTitle = observer(() => {
    const answers = useAnswersState();
    // useEffect(() => autorun(() => {
    //     document.title = answers.isLoading ? 'Loading...' : `Competitions: ${answers.allCount}`;
    // }), []);

    useEffect(() => reaction(
      () => ({
          count: answers.allCount,
          isLoading: answers.isLoading
      }),
      ({ isLoading, count }) => {
          document.title = isLoading ? 'Loading...' : `Competitions: ${count}`;
      }, {
          fireImmediately: true
      }
    ), []);
    return null;
});