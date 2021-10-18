# Classes approach:
**1) Syntax:**
```js
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <form>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </form>
    );
  }
}
```
**2) Methods binding:**  
  ###The problem: loosing context of the method.
```js
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange(event) {
    this.setState({value: event.target.value}); // TypeError: this is undefined !!!!!!
  }

  render() {
    return (
      <form>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </form>
    );
  }
}
```

  ###Explanation:
  **Context (this)** in JS is being assigned to the object on the level of where the method is being invoked.

```js
class NameForm {
  constructor(name){
    this.state = {value: ''};
  }

  handleChange(value){
    this.state.value = value; 
  }
  display(){
    return this.state.value;
  }
}

var form1 = new NameForm(); // form1 = { state: { value: '' }, handleChange: (){}, display: (){}};
form1.handleChange(1); // this = form1 = { state: { value: 1 }, handleChange: (){}, display: (){}};
form1.display(); // 1  this = form1 = { state: { value: 1 }, handleChange: (){}, display: (){}};

// The assignment operation below simulates loss of context 
// similar to passing the handler as a callback in the actual 

// React Component:
var onChange = form1.handleChange;
onChange(); // TypeError: this is undefined (this = undefined ("strict mode") / globalObject) !!!!!!!
```
  ###Solution:
  - bind method:
 ```js
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this); // !!!!!!!!!!!!!
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <form>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </form>
    );
  }
}
``` 

  - arrow function:
 ```js
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = (event) => { // !!!!!!!!!!!!!
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <form>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </form>
    );
  }
}
``` 

  - arrow function in callback:
 ```js
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <form>
        <input type="text" value={this.state.value} onChange={(e) => this.handleChange(e)} /> // !!!!!!!!!!!!!
      </form>
    );
  }
}
``` 

