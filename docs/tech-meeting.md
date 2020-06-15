# What's MobX?
- state management library that implements reactive programming
- simple, scalable and battle tested
https://github.com/mobxjs/mobx/issues/681 (Netflix, Amazon Web Services, Cypress.io)
- mentioned on state of js
https://2019.stateofjs.com/data-layer/

## How it works?
    ![MobX Flow](https://mobx.js.org/assets/flow.png "MobX flow")

## Concepts:
- actions
- observable state
    - more about observables
    - by default making a data structure observable is infective (applied automatically to any value that is contained by the data structure). 
        Can be changed by using modifiers feature (observable.shallow)
    - primitives, plain objects, maps, arrays, class instances
- computed values
    - pure functions that transforms observable values
    - produce observable values
    - optimized
- reactions
    - react to changes, but don't return new values
    - used to run side effects (API calls, UI updates, analytics, etc...)
        
# Live coding

## Introduction

- app description (reminder)
- new features

## Code

### state (createAnswerState.js) -> observables & computed values

### state passed via context API 

### observer -> HOC, component, function
- note: Redux is "susceptible to oversubscribing". 
    When using React, you can simply tell whether your components are oversubscribing by printing wasted renderings. MobX will reduce this number to zero.

#### passing observables down the component tree

Show even though the state is update after correcting the answer, the item in UI is not. The reason is that a component responsible to display an item is not wrapped in by `observer` function

### side effects
- Mobx can be used without React so bear this in mind while we implement side effects using Mobx

### autorun

Logger.js 

PageTitle.js (delay? scheduler?)

```javascript
    useEffect(() => autorun(() => {
        document.title = answers.isLoading ? 'Loading...' : `Competitions: ${answers.allCount}`;
    }), []);
```

### reaction

replace autorun implementation in PageTitle.js with:

```javascript
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
```

Options:
- fireImmediately
- delay
- scheduler

Mention about `when` (runs only until certain condition is met)

### strict mode

Start with a bug in the code causing not updating stats when on of the wrong results is being corrected.

Describe the problem about mutability:
- default implementation let you modify state in place (without running an action)
- it may cause unpredicted regressions (update result case)
- it's safer to use action to update it as it helps to better structure the code
- MobX can be configured so it forces using actions
- for async actions you cannot modify state in the callback. For async/await use `runInAction()`

```javascript
    configure({
        enforceActions: 'never'
    })
```

vs

```javascript
    configure({
        enforceActions: 'observed'
    })
```

### local store

Competition.js -> start with base implementation (without local store) and replace it with MobX store.
- note: might conflict with future React features like concurrent rendering

### useAsObservable

Show the bug introduced with local store implementation -> whenever we update the difficulty level, it's not taken into consideration when a new question is generated Competition component.

Show the corrected solution with useAsObservable

```javascript
  const config = useAsObservableSource({ difficulty })
```

