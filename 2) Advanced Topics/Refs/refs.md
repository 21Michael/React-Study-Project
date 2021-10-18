# Refs:

**1) Creating:**  

```js
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.myRef = React.createRef(); // define ref 
    }
    render() {
      return <div ref={this.myRef} />; // assign ref to DOM node
    }
  }
```

**2) Access ro ref:**
```js
  const node = this.myRef.current;
```

  - **DOM node (html element):** свойство current созданного рефа в конструкторе с помощью React.createRef()
получает соответствующий DOM-элемент;
```js
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // создадим реф в поле `textInput` для хранения DOM-элемента
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // Установим фокус на текстовое поле с помощью чистого DOM API
    // Примечание: обращаемся к "current", чтобы получить DOM-узел
    this.textInput.current.focus();
  }

  render() {
    // описываем, что мы хотим связать реф <input>
    // с `textInput` созданным в конструкторе
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} />
        <input
          type="button"
          value="Фокус на текстовом поле"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}
```

  - **class components:** свойство current объекта-рефа получает экземпляр смонтированного компонента;
```js
class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef(); // get CustomTextInput instance
  }

  componentDidMount() {
    this.textInput.current.focusTextInput(); // call CustomTextInput (child) focusTextInput method
  }

  render() {
    return (
      <CustomTextInput ref={this.textInput} />
    );
  }
}

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
    this.handleChange = this.handleChange.bind(this); // !!!!!!!!!!!!!!!!!!!!
  }

  focusTextInput(event) {
    this.textInput.current.focus(); // !!!!!!!!!!!!!!!!!!!!
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <form>
        <input 
          type="text" 
          ref={this.textInput}  // !!!!!!!!!!!!!!!!!!!!
          value={this.state.value} 
          onChange={this.handleChange} 
        />
      </form>
    );
  }
}

```
  - **it can't be used with function components** because there is no instance of it;

Если вам нужен реф на функциональный компонент, можете воспользоваться **forwardRef** (возможно вместе 
с useImperativeHandle), либо превратить его в классовый компонент.

**3) Transfer refs to the parent components:**  
!!!! That approach isn't recommended because it breaks component's Encapsulation;

  - `>=` 16.3 version (forwardRef):  

Перенаправление рефов позволяет автоматически передавать реф компонента одному из его дочерних 
элементов.
```js
  const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton"> // define ref = button
      {props.children}
    </button>
  ));
  
  // Теперь реф будет указывать непосредственно на DOM-узел button, без forwardRef 
  // реф бы = екземпляром FancyButton 
  const ref = React.createRef(); // parent ref = child's button node
  <FancyButton ref={ref}>Click me!</FancyButton>;
```

  - `<=` 16.2 version (ref like a prop):
```js
  function CustomTextInput(props) {
    return (
      <div>
        <input ref={props.inputRef} /> // set ref !!!!!!!!!!!!!!!!!!
      </div>
    );
  }
  
  function Parent(props) {
    return (
      <div>
        My input: <CustomTextInput inputRef={props.inputRef} /> // pass trought the ref as a prop !!!!!!!!!!!!!!!!!!
      </div>
    );
  }
  
  class Grandparent extends React.Component {
    constructor(props) {
      super(props);
      this.inputElement = React.createRef(); // define a ref !!!!!!!!!!!!!!!!!!
    }
    render() {
      return (
        <Parent inputRef={this.inputElement} /> // pass the ref as a prop !!!!!!!!!!!!!!!!!!
      );
    }
  }
```

**4) Callback refs:**  

Кроме того, React поддерживает другой способ определения рефов, который называется «колбэк-рефы» и предоставляет 
более полный контроль над их присвоением и сбросом.

Вместо того, чтобы передавать атрибут ref созданный с помощью createRef(), вы можете передать функцию. Данная 
функция получит экземпляр React-компонента или HTML DOM-элемент в качестве аргумента, которые потом могут быть
сохранены или доступны в любом другом месте.

Представленный ниже пример реализует общий паттерн: использование колбэка в ref для хранения ссылки на DOM-узел 
в свойстве экземпляра.

```js
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = null;

    this.setTextInputRef = element => {
      this.textInput = element;
    };

    this.focusTextInput = () => {
      // Устанавливаем фокус на текстовом поле ввода с помощью чистого DOM API
      if (this.textInput) this.textInput.focus();
    };
  }

  componentDidMount() {
    // устанавливаем фокус на input при монтировании
    this.focusTextInput();
  }

  render() {
    // Используем колбэк в `ref`, чтобы сохранить ссылку на DOM-элемент
    // поля текстового ввода в поле экземпляра (например, this.textInput).
    return (
      <div>
        <input
          type="text"
          ref={this.setTextInputRef}
        />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}
```