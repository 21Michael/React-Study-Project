# useEffect:
Link: https://webtricks-master.ru/react-hooks/uchim-useeffect-na-primerah/  

**1) Usage:**  

  - componentDidMount:

Вторым параметром useEffect является массив с зависимостями, главная цель которого следить за обновлениями в состоянии
и только при их изменении будет выполняться код лежащей в теле useEffect. Если оставить массив пустым, то useEffect 
будет вызываться один раз после успешного добавления компонента (данная логика повторяет работу componentDidMount).
```js
  useEffect(() => {
    console.log('mounted')
  }, []);
```

  - componentDidUpdate:  

В этой функции можно написать код, который будет выполнятся после рендера функционального компонента.
```js
  useEffect(() => {
    console.log('render')
  });
```
Вторым параметром useEffect является массив с зависимостями, главная цель которого следить за обновлениями в состоянии 
и только при их изменении будет выполняться код лежащей в теле useEffect (```console.log('render if value was changed')```).
```js
  useEffect(() => {
    console.log('render if value was changed')
  }, [value]);
```

  - componentWillUnmount:  

Для того, чтобы воспроизвести в useEffect работу componentWillUnmount, требуется вернуть функцию из функции, где мы 
описываем логику событий, происходящих после удаления компонента.
```js
 useEffect(() => {
    return () => {
      console.log('will unmount');
    }
  }, []);
```

![link](https://ncoughlin.com/static/3248ccbf2b5940e7b7048f6686e481a9/62803/1.png)
