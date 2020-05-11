import { useEffect } from 'react';
import {observer} from "mobx-react";
import {reaction} from 'mobx';
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    ), []);
    return null;
});