# Observing
- 3 ways: observer HOC, Observer scomponent, useObserver
https://mobx-react.js.org/observe-how

# Managing state
## Creating state
- observable(value) or @observable classProperty = value
https://mobx.js.org/refguide/observable.html

- useLocalState (only in functional components)
https://mobx-react.js.org/state-local

- tree state: https://github.com/mobxjs/mobx-state-tree

## Don't destructure
https://mobx-react.js.org/state-destruct
https://mobx.js.org/refguide/boxed.html

## State outsourcing TODO
https://mobx-react.js.org/state-outsourcing

# Accessing state
- using React Context: https://mobx-react.js.org/recipes-context
- as global variable (impacts testing)

# Complex & global stores
https://mobx-react.js.org/recipes-context#complex-stores

```javascript
const StoresContext = React.createContext({
  counterStore: new CounterStore(),
  themeStore: new ThemeStore(),
})
```

- one context containing different observable and then using hooks to extract to hide structure
```javascript
const useCounterStore = () => {
    const { counterStore } = useContext(StoresContext);
    return counterStore;
}
```

- or by different contexts
- or tree state: https://github.com/mobxjs/mobx-state-tree

# Side effects
- this one is tricky (to be discussed with @MJ). Basically they are saying to use only mobx reactivity in side effects 
https://mobx-react.js.org/recipes-effects

# Follow-up topics
- tree state: might be interesting
https://github.com/mobxjs/mobx-state-tree
