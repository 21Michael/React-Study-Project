# useMemo():
Link: https://webtricks-master.ru/react-hooks/uchim-usememo-na-primerah/  

**1) Usage:**  
Имеется компонент c двумя состояниями. Первое состояние по клику на текст будет менять его цвет, а второе это функция,
которая по клику на кнопку, будет увеличивать счетчик на +1 и вызывать функцию sum(), в которой производится сложение
входящего параметра с самим собой и как результат получится сумма этого вычисления.

```js
  const sum = n => {
    return n + n
  };
  
  const MemoComponent = () => {
    const [num, setNum] = useState(1);
    const [isGreen, setIsGreen] = useState(true);
    const result = sum(num); // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  
    return (
      <div>
        <h1 onClick={() => setIsGreen(!isGreen)}
            style={{ color: isGreen ? "green" : "red" }}
        >
          Example
        </h1>
        <h2>
          Sum {result}
        </h2>
        <button onClick={() => setNum(num + 1)}>➕</button>
      </div>
    );
  };
  export default Component;
```

В приведенном выше примере есть небольшая проблема. Каждый раз, когда мы кликаем по тексту, происходит вызов 
setIsGreen, что приводит к **!!! перерендериванию компонента и, как следствие, повторный вызов функции sum(), !!!** хотя 
данный функционал не задействован и должен вызываться только по клику на кнопку +. Данное вычисление сейчас 
происходит при каждом рендере компонента, что с точки зрения оптимизации не эффективно.

**!!! Для того, чтобы оптимизировать (мемоизавать) такие промежуточные вычисления требуется хук useMemo. 
Оборачиваем функцию sum() в useMemo и передаем вторым параметром в массиве num как зависимость, при изменении значения 
которой происходит повторный вызов функции sum(). !!!**

```js
const sum = n => {
  return n + n
};

const MemoComponent = () => {
  const [num, setNum] = useState(1);
  const [isGreen, setIsGreen] = useState(true);
  const result = useMemo(() => sum(num), [num]); // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  return (
    <div>
      <h1 onClick={() => setIsGreen(!isGreen)}
          style={{ color: isGreen ? "green" : "red" }}
      >
        Example
      </h1>
      <h2>
        Sum {result}
      </h2>
      <button onClick={() => setNum(num + 1)}>➕</button>
    </div>
  );
};
export default MemoComponent;
```