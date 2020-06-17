# Core concepts
- "Hence many state management solutions try to restrict the ways in which you can modify state, for example by making state immutable. 
But this introduces new problems: 
1) data needs to be normalized
2) referential integrity can no longer be guaranteed 
3) and it becomes next to impossible to use powerful concepts like prototypes."

- "MobX makes state management simple again by addressing the root issue: it makes it impossible to produce an inconsistent state. 
The strategy to achieve that is simple: Make sure that everything that can be derived from the application state, will be derived. Automatically."
https://mobx.js.org/getting-started

## Observables
- Tip: "By default, making a data structure observable is infective; 
that means that observable is applied automatically to any value that is contained by the data structure, 
or will be contained by the data structure in the future. This behavior can be changed by using modifiers."

## Actions
- "The action wrapper is only needed when using MobX in strict mode (by default off). 
It is recommended to use action though as it will help you to better structure applications 
and expresses the intention of a function to modify state."

## Computed
- default is to use @Computed for getters
- computed property won't re-run if none of the data used in the previous computation changed.
- automatic suspension: If a computed value is no longer observed, for example the UI in which it was used no longer exists, MobX can automatically garbage collect it.

## Side effects
- this one is tricky. Basically they are saying to use only mobx reactivity in side effects 
https://mobx-react.js.org/recipes-effects

### autorun & reactions
- when to use `autorun` & `reaction` comparing to `useEffect`? 
    - `useEffect` is much more cleaner 
https://github.com/mobxjs/mobx-react/issues/772 

## Asynchronous actions
https://mobx.js.org/best/actions.html

- async actions
    - if action strict mode is on you cannot modify the state in the callback (either using `then()` or `async/await`)
    - you can work around this by having `@action` for callbacks or to wrap callback with `action()` or `runInAction`
    - but the simpler way is to just to use `@action` to modify the state
- nicer approach using `flows` 

## Modifiers
- observable.deep vs observable.shallow
    - @MJ example with fetching data from web that we don't really what to observer deeply
- computed vs computed.struct
https://mobx.js.org/refguide/modifiers.html

## Intercept & Observe TBD 
https://mobx.js.org/refguide/observe.html

# Mobx-React

## Observing
- 3 ways: observer HOC, Observer component, useObserver
https://mobx-react.js.org/observe-how

## Managing state
### Creating state
- observable(value) or @observable classProperty = value
https://mobx.js.org/refguide/observable.html

- useLocalState (only in functional components)
"Note that using a local store might conflict with future React features like concurrent rendering."
https://mobx-react.js.org/state-local

- tree state: https://github.com/mobxjs/mobx-state-tree

## Accessing complex & global stores
https://mobx-react.js.org/recipes-context#complex-stores

- one context containing different observable and then using hooks to extract to hide structure
- or by different contexts
- or tree state: https://github.com/mobxjs/mobx-state-tree

# Other topics
- strict mode will restrict that state cannot be modified outside of actions
https://mobx.js.org/refguide/api##-enforceactions-
- if you cannot use decorators see decorate API
https://mobx.js.org/refguide/modifiers.html

# Follow-up topics
- tree state: might be interesting
https://github.com/mobxjs/mobx-state-tree
- server-side rendering TBD

# References
- Compare and battle the paradigm
https://www.youtube.com/watch?v=76FRrbY18Bs

- Redux is "susceptible to oversubscribing"
"Coarse grained subscriptions like Flux-style store subscriptions are very susceptible to oversubscribing. 
When using React, you can simply tell whether your components are oversubscribing by printing wasted renderings. MobX will reduce this number to zero.
https://medium.com/@tylerwclark/the-why-behind-mobx-3e8555b1d60b

# Our notes
- Mobx has more features than Redux 
- Redux is lighter than Mobx
- Redux is used wider but Mobx is battle field tested actually:
https://github.com/mobxjs/mobx/issues/681

