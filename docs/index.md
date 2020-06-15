
## Concepts

### State

* drives application
* domain specific state
* view state

### Derivations

#### Computed values

* use to produce values from current state with pure function

#### Reactions

* handle side effects (e.g. api calls, trigger analytics, set document title)

### Actions

* used to modify state
* optional or required (in strict mode)

## Watching the state

### Observables

What can be an observable?
* js primitives: `observable.box(primitive)` 
* arrays: `observable.array([...])` or just `observable([...])`
* maps: `observable.map({...})`
* plain objects: `observable({...})`
* non-plain objects: constructor responsibility to initialize and manage observables

---

* @observable
* observable(value)

### Observers

* subscribes to any observable and reacts to changes

---

* observer
* @observer

### Computed values

* @computed
* decorate(...)
* computed(() => {...})
* computedFn

#### Error handlings



