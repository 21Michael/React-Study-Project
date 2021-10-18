# Error Boundary:

**1) Creating:**  
Классовый компонент является предохранителем, если он включает хотя бы один из следующих методов 
жизненного цикла: static getDerivedStateFromError() или componentDidCatch(). Используйте static 
getDerivedStateFromError() при рендеринге запасного UI в случае отлова ошибки. Используйте 
componentDidCatch() при написании кода для журналирования информации об отловленной ошибке.

```js
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Можно отрендерить запасной UI произвольного вида
      return <h1>Что-то пошло не так.</h1>;
    }

    return this.props.children; 
  }
}
```

**2) Usage:**

```js
<ErrorBoundary>
  <MyWidget />
</ErrorBoundary>
```