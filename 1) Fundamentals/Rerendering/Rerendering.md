# Re-rendering

### Reasons of re-rendering of a component:
  - Changing the state trough the setState() or useState();
  - When its props change;
  - forceUpdate method (class components);
```js
this.forceUpdate();
```
  - forceUpdate emulation though the useState() (function components);
```js
const [state, updateState] = React.useState();
const forceUpdate = React.useCallback(() => updateState({}), []);
```

### Cons: when the state of a component changes, all children will re-render!!!

### Children re-render optimization:
  - React.memo (functional components):
  - React.PureComponent witch compare props by embedded shouldComponentUpdate() method;
  - Lifecycle method shouldComponentUpdate();
  - key attribute for repeating components;
