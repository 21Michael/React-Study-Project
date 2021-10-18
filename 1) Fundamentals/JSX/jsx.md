# JSX
```js
<MyButton color="blue" shadowSize={2}>
  Нажми меня
</MyButton>

// Compile to =>

React.createElement(
  MyButton,
  {color: 'blue', shadowSize: 2},
  'Нажми меня'
)
```

**1) Avoiding XSS attack:** because before rendering users data from an input react transform it to a string;  
**2) Syntax:** 
  - HTML attributes being transformed in camelCase;
```js
<div class="">...</div> // HTML
<div className="">...</div>  // REACT
```
  - Define other React components from Uppercase;
```js
<div>...</div> // HTML
<User/>  // OTHER REACT COMPONENT
```

**3) Combine components in objects:**  
Usage object syntax (obj.prop, obj["prop"]) that allow to create Facades/Factory/Wrapper/APIs/Combine complex logic... that exports many react components:
```js
import React from 'react';
import Button1 from '...';
import Button2 from '...';
import Input1 from '...';
import Input2 from '...';

const UserComponents = {
  Button: Button1,
  Input: Input2,
}; // User API

const AdminComponents = {
  Button: Button2,
  Input: Input1,
} // Admin API

// or

const Persone = {
  Button: userType === 'admin' ? Button2 : Button1,
  Input: userType === 'admin' ? Input1 : Input2,
} // wrapper

// or

const ButtonFactory = {
  admin: Button1,
  user: Button2,
} // wrapper2

const InputFactory = {
  admin: Input1,
  user: Input2,
} // wrapper2

const Button = ButtonFactory['admin']; // !!!!!!!!!!!
const Input = InputFactory['admin']; // !!!!!!!!!!!

// ...................

function BlueDatePicker({ userType }) {
  return 
  <>
    { userType === 'admin' ? <AdminComponents.Button/> : <UserComponents.Button/> } // !!!!!!!!!!!
    { userType === 'admin' ? <AdminComponents.Input/> : <UserComponents.Input/> } // !!!!!!!!!!!
       or 
    <Persone.Button/> // !!!!!!!!!!!
    <Persone.Input/> // !!!!!!!!!!!
       or
    <Button/>
    <Input/>
  </>
}
```

**4) Props in JSX:**  
  - Js expressions (if, for can't be used);
```js
<MyComponent foo={1 + 2 + 3 + 4} />
```

  - strings;
```js
<MyComponent message="привет, мир" />
<MyComponent message={'привет, мир'} />
```

  - default true props;
```js
<MyTextBox autocomplete /> // default === true
<MyTextBox autocomplete={true} />
```

  - transfer props trough destructuring '...';
```js
function App1() {
  return <Greeting firstName="Иван" lastName="Иванов" />;
}

function App2() {
  const props = {firstName: 'Иван', lastName: 'Иванов'};
  return <Greeting {...props} />; // !!!!!!!!!!
}
```

**5) Child components:**  
  - strings:
```js
  <MyComponent>Привет, мир!</MyComponent>
```
  - other components:
```js
  <MyComponent>
    <Child/>
  </MyComponent> // one component

  <MyComponent>[
    <li>1</li>,
    <li>2</li>,
    <li>3</li>,
    <li>4</li>,
    <li>5</li>
  ]</MyComponent> // array of components
```
  - js expressions + look at Conditional Rendering;
```js
<MyComponent>{ [1,2,3,4,5] }</MyComponent> // array
<MyComponent>{ todos.map((message) => <Item key={message} message={message} />) }</MyComponent> // array

```
- js arrow function in props.children;
```js
function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i)); // props.children(i) calls the function (index) => <div key={index}>Это элемент списка с ключом {index}</div>
  }
  return <div>{items}</div>;
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>Это элемент списка с ключом {index}</div>} // !!!!!!!!!!!!!!
    </Repeat>
  );
}
```