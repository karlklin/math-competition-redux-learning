# Observing
- 3 ways: observer HOC, Observer scomponent, useObserver
https://mobx-react.js.org/observe-how

# Managing state
## Creating state
- observable(value) or @observable classProperty = value
https://mobx.js.org/refguide/observable.html
- useLocalState (only in functional components)
- tree state: https://github.com/mobxjs/mobx-state-tree

## Destructing TODO 
https://mobx-react.js.org/state-destruct

## State of component TODO
https://mobx-react.js.org/state-local

## State outsourcing TODO
https://mobx-react.js.org/state-outsourcing

# Accessing state
- using React Context: https://mobx-react.js.org/recipes-context
- as global variable (impacts testing)

# Complex & global stores
https://mobx-react.js.org/recipes-context#complex-stores

```javascript
export const storesContext = React.createContext({
  counterStore: new CounterStore(),
  themeStore: new ThemeStore(),
})
```

- one context containing different observable and then using hooks to extract to hide structure (useFavorites())
- or by different contexts
- or tree state: https://github.com/mobxjs/mobx-state-tree

# Side effects TODO
https://mobx-react.js.org/recipes-effects
