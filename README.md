# Introduction
- Redux is a `state management tool` for JavaScript applications.
- `main concept`: the entire state of an application is stored in one central location
- `Actions & Reducer & State` concept

# Live coding
- `React + Redux`

## Without redux

### Challenges: 
- React docs encourage you to `lift state up`, which means putting the data in the nearest ancestor of the two components.
- the `nearest ancestor` component might be at the top level of the component tree and would have to pass the data down as `props`
- makes it harder to move components around because there is a `coupling`
- could be a `performance` issue since every update to the data would cause all the children to re-render

## With redux

### React design
Redux offers a trade-off. It asks you to:
- Describe application state as plain objects and arrays.
- Describe changes in the system as plain objects.
- Describe the logic for handling changes as pure function

3 React patterns:
https://redux.js.org/introduction/three-principles

### Live code
1. Store setup (?): empty store in dev tools
2. Initial state + actions
3. CompetitionManager: internal state => store
4. Component by component (caution: ComputationPercentageHistory needs to pass data)
5. Fix HistoryLog update bug
6. Reducer: use lens
7. Optional: flat state

### What we achieved
- each component of an application can have `direct access to the state` of the application 
- no need for sending props down to child components or using `callback functions` to send data back up to a parent.
- removes `coupling` between components
- improves `performance` as the data no longer has to be passed down through multiple levels of components and cause re-rendering
- `redictable state updates` make it easier to understand how the data flow works in the application
- `pure reducer functions` makes logic easier to test, and enables useful features like `time-travel debugging`
- `centralizing the state` makes it easier to implement things like logging changes to the data, or persisting data between page refreshes

## What can be achieved thanks to Redux
- see: https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367

## So do you not need it or not?
In a `small application` you can find that
- there are few `parent-child` relationships, and
- sharing of the `same data` is not widely used among different components
So using `local state` in those cases is equally fine.

But in a `large application` keeping the similar structure would bring the following disadvantages —
- When two components would require a common data you have to move that data to closest ancestor.
- if you just make an ancestor component for the sole purpose of passing the data, there would be no proper relationship in the application structure.
- whenever you will face a bug, you will be having a hard time debugging it

## So should I keep all application data in Redux?
- no! consider keeping all User Interface (UI) related data and data not needed in more than one component in local state.

# Others
- good for plain `JavaScript`(Selfridges: CogJs, Redux + Reselect + Thunk)