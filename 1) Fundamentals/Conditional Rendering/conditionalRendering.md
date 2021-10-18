# Conditional Rendering

**1) Element Variables:**  
Логика на уровне присваивания компонента в переменную.
```js
import Button1 from './...';
import Button2 from './...';

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleClick() {}

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const button = isLoggedIn ? Button1 : Button2; // !!!!!!!!!!!!!!!

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}
```

**2) If trough Logical && Operator:**  
Выражение: 
  - if(condition) {res} === (condition) && res.
  - if(condition) {res1} else {res2} === (condition) && res1 || res2.
```js
import Button1 from './...';
import Button2 from './...';

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleClick() {}

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        { isLoggedIn && Button1 || Button2 } // !!!!!!!!!!!!!!!!
      </div>
    );
  }
}
```

**3) Inline If-Else :**  
Внутри метода render() {} можно использовать inline If-Else ((condition) ? res1 : res2;).
```js
import Button1 from './...';
import Button2 from './...';

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleClick() {}

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        { isLoggedIn ? Button1 : Button2 } // !!!!!!!!!!!!!!!
      </div>
    );
  }
}
```

**4) Prevent rendering inside of child component:**  
Вернуть null по значению пропса из компонента.
```js
function Button1 ({ isLoggedIn }) {
  if (!isLoggedIn) {
    return null; // !!!!!!!!!!!!!!!!
  }

  return (
    <button className="home">
      Home
    </button>
  );
};

//  -----------------------------------------------------------  //

import Button1 from './...';

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleClick() {}

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        <Button1 isLoggedIn={isLoggedIn} />
      </div>
    );
  }
}
```