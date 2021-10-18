# Composition:

Некоторые компоненты не знают своих потомков заранее или являются wrapper/HOC. Для таких компонентов
мы рекомендуем использовать специальный проп children (like slots in Vue), который передаст дочерние элементы сразу на 
вывод:

**1) Syntax:**   

  - one slot:
```js
function Wrapper(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      { props.children } // !!!!!!!!!!!!!
    </div>
  );
}
```
Usage:
```js
function WelcomeDialog() {
  return (
    <Wrapper color="blue"> // !!!!!!!!!!!!!!! 
      <h1 className="Dialog-title">
        Добро пожаловать
      </h1>
      <p className="Dialog-message">
        Спасибо, что посетили наш космический корабль!
      </p>
    </Wrapper>
  );
}
```

  - couple slots:
```js
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left} // !!!!!!!!!!!!!!!!!
      </div>
      <div className="SplitPane-right">
        {props.right} // !!!!!!!!!!!!!!!!!
      </div>
    </div>
  );
}
```
Usage:
```js
function App() {
  return (
    <SplitPane
      left={
        <Contacts /> // !!!!!!!!!!!!!!!!!
      }
      right={
        <Chat /> // !!!!!!!!!!!!!!!!!
      } />
  );
}
```