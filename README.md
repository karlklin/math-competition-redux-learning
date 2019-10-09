# Live coding: without redux [00-10] @MJ
- `lifting up state and passing data via props` 
    - putting the data in the nearest ancestor of the two components and passing the data down as props
- `coupling components`
    - makes it harder to move components around because there is a coupling
- `impact on performance`
    - could cause performance issue since every update to the data would cause all the children to re-render

# Three principle & live coding [10-20] @Karol
https://redux.js.org/introduction/three-principles
https://i.stack.imgur.com/LNQwH.png

- `Single source of truth`
    - the state of your whole application is stored in an object tree within a single store
    - easier to create universal apps, as the state from your server can be serialized and hydrated into the client with no extra coding effort
    - easier to debug or inspect an application
    - it also enables you to persist your app's state in development, for a faster development cycle. 
    - some functionality which has been traditionally difficult to implement - Undo/Redo, for example - can suddenly become trivial to implement

- `State is read-only`
    - the only way to change the state is to emit an action, an object describing what happened
    - neither the views nor the network callbacks will ever write directly to the state. Instead, they express an intent to transform the state. 
    - all changes are centralized and happen one by one in a strict order, there are no subtle race conditions to watch out for
    - as actions are just plain objects, they can be logged, serialized, stored, and later replayed for debugging or testing purposes
    
`Changes are made with pure functions`
    - to specify how the state tree is transformed by actions, you write pure reducers
    - reducers are just pure functions that take the previous state and an action, and return the next state
    - remember to return new state objects, instead of mutating the previous state

# Live code: with redux: part1 [20-35] @MJ
Pre-requisite: Store setup (?): empty store in dev tools
Note: HistoryLog update bug :()
1. Initial state + actions
2. CompetitionManager: internal state => store
3. Component by component (caution: ComputationPercentageHistory needs to pass data)
Note: HistoryLog update bug is resolved :)

# Live code: with redux: part2 [35-50] @Karol
4. Flat state
5. Lens
6. Reselect

## What we achieved [50-55] @MJ
- each component of an application can have `direct access to the state` of the application 
- no need for sending props down to child components or using `callback functions` to send data back up to a parent.
- removes `coupling` between components
- improves `performance` as the data no longer has to be passed down through multiple levels of components and cause re-rendering

# Summary [55-60] @Karol
- React vs boilerplate: Redux offers a trade-off. It asks you to:
    - Describe application state as plain objects and arrays.
    - Describe changes in the system as plain objects.
    - Describe the logic for handling changes as pure function
- Use redux for medium and bigger projects. 
    - in a `small application` there are few `parent-child` relationships 
    - and sharing of the `same data` is not widely used among different components
    - so using `local state` in those cases is equally fine
- Do not keep all all application data in Redux.  
    - consider keeping all User Interface (UI) related data and data not needed in more than one component in local state.
- Support & great community
- Cross platforms
    - Selfridges: CogJs + Redux + Reselect + Thunk
    - Angular (ngrx)
- Extensions via middlewares
- Side effects (thunk? saga? rxjs?)
- Splitting Reducers
    - you can start with a single reducer, and as your app grows, split it off into smaller reducers that manage specific parts of the state tree
    
## What can be achieved thanks to Redux
- see: https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367