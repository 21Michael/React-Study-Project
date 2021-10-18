# useState:
Link: https://webtricks-master.ru/react-hooks/learn-usestate-on-examples/

**1) Syntax:**

```js
  const [state, setState] = useState(initialState);
```

Во время первоначального рендеринга возвращаемое состояние **(state)** совпадает со значением, переданным в качестве 
первого аргумента **(initialState)**.

Функция **setState** используется для обновления состояния. Она принимает новое значение состояния и ставит в очередь 
повторный рендер компонента:

  - set the new state:
```js
  setState(newState);
```
  - re-usage of the old state:
```js
  setState(initialState + value);
```
or 
 ```js
  setState(initialState => initialState + value); // primitives
  setState(initialState => ({ ...initialState, oldVal: value })); // object destructuring
  setState(initialState => (Object.assign({}, initialState, { oldVal: value }))); // object Object.assign()
```
Если вы **"обновите состояние хука тем же значением, что и текущее состояние"**, React досрочно выйдет из хука без 
повторного рендера дочерних элементов и запуска эффектов. (React использует алгоритм сравнения Object.is.)

**2) Lazy initial state:**  
Если начальное состояние является результатом дорогостоящих вычислений, вы можете вместо этого предоставить 
функцию, которая будет выполняться только при начальном рендеринге:
```js
  const [state, setState] = useState(() => {
    const initialState = someExpensiveComputation(props);
    return initialState;
  });
```