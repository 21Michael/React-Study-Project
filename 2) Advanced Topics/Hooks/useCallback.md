# useCallback():

**1) Syntax:**  

Передайте встроенный колбэк и массив зависимостей. Хук useCallback вернёт мемоизированную версию колбэка,
который изменяется только, если изменяются значения одной из зависимостей.

```js
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```

!!!! useCallback(fn, deps) — это эквивалент useMemo(() => fn, deps), только **useCallback возвращает 
меммоизированную функцию, а useMemo значение.**

**2) Usage:**

```js
const ParentComponent = (props) => {
  const [num, setNum] = useState(1);
  const [isGreen, setIsGreen] = useState(true);
  const sum = useCallback(() => {
    n => {
      return n + n
    };
  }, [num]); // !!!!!!!!!!!!!!!!!!!!!!! memoized sum function
  
  return (
    <> 
      <h1 onClick={() => setIsGreen(!isGreen)}
           style={{ color: isGreen ? "green" : "red" }}
      >
        Example
      </h1>
      <ChildComponent sum={sum}/>
      <button onClick={() => setNum(num + 1)}>➕</button>
    </>
  );
};

const ChildComponent = ({ sum }) => {
  const result = sum(num); // call only if num changed !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  return (
    <div>
      <h2>
        Sum {result}
      </h2>
    </div>
  );
};
export default MemoComponent;
```