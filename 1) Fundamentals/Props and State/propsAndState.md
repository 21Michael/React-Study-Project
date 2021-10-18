# Props and State

Props vs State:

  - Components receive data from outside with props, whereas they can create and manage 
    their own data with state;
  - Props are used to pass data, whereas state is for managing data;
  - Data from props is read-only, and cannot be modified by a component that is receiving 
    it from outside;
  - State data can be modified by its own component, but is private (cannot be accessed 
    from outside);
  - Props can only be passed from parent component to child (unidirectional flow);
  - Modifying state should happen with the setState ( ) method;

**1) Props:**
  - one way data binding:
```js
const ParentComponent = () => {
  const state = {
    data: 'fajhfj faghkafhjl;a fadkgfgk gf;g df'
  };
  return (
    <ChildComponent data={data}/> // transfering props
  );
};

const ChildComponent = ({ data }) => {
  return (
    <div>{ data }</div> // getting props
  );
};
```
  - two ways data binding (hooks ex):
```js
const ParentComponent  = () => {
  const { name, setName } = useState('');
  const onClick = (evt) => {
    setName(evt.target.value);
  };

  return (
    <ChildComponent clickHandler={onClick} inputValue={name}/> // !!!!!!!!!!!!!!
  );
};

const ChildComponent = ({ clickHandler, inputValue }) => {
  return (
    <input value={inputValue} onChange={clickHandler}/> // !!!!!!!!!!!!!
  );
};

```
**2) State:**
  - Definition:
```js
  class Component extends React.Component {
    constructor(props) {
      super(props)
      this.state = { // !!!!!!!!!!!!
        posts: [],
        comments: []
      };
    }

    render() {
      return (
        <div>
          { this.state.posts }
        </div>
      );
    }
  }
```

  - reactive changing of the state 'setState()':
```js
  class Component extends React.Component {
    constructor(props) {
      super(props)
      this.handleClick = this.handleClick.bind(this);
      this.state = { // !!!!!!!!!!!!
        posts: [],
      };
    }

  removeAll() {
    this.setState({ posts: [] }); // sychronous changing of the state
  }
  
  addPost(newPost) {
    this.setState((state, props) => {
      return {
        posts: state.postst.push(newPost) // asychronous changing of the state
      };
    });
  }

    render() {
      return (
        <div>
          { this.state.posts }
        </div>
      );
    }
  }
```