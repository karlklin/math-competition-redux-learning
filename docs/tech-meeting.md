# Concept

## What's MobX?
- state management library that implements functional reactive programming

## How it works?
    ![MobX Flow](https://mobx.js.org/assets/flow.png "MobX flow")

## Concepts:
- actions
- observable state
    - more about observables
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

#### passing observables down the component tree

Show even though the state is update after correcting the answer, the item in UI is not. The reason is that a component responsible to display an item is not wrapped in by `observer` function

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

### when
Run only until certain condition is met.

### strict mode

Start with a bug in the code causing not updating stats when on of the wrong results is being corrected.

Describe the problem about mutability:
- default implementation let you modify state in place (without running an action)
- it may cause unpredicted regressions (update result case)
- it's safer to use action to update it as it helps to better structure the code
- MobX can be configured so it forces using actions

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

### useAsObservable

Show the bug introduced with local store implementation -> whenever we update the difficulty level, it's not taken into consideration when a new question is generated Competition component.

Show the corrected solution with useAsObservable

```javascript
  const config = useAsObservableSource({ difficulty })
```

