# useRef:

**useRef()** – этот хук сохраняет свое состояние между визуализациями компонентов. Магия заключается в 
его возможности мутировать, не вызывая повторного обновления вашего компонента (он не реактивный), поскольку 
значение useRef существует вне цикла визуализации. Умирает только после unmounted компонента.

![link](https://drive.google.com/uc?id=1v6DuNm877IEcpTWXYlbUtDtIcncF7oKI)

**1) Use cases:**
  - для доступа к узлам DOM или элементам React (то, что визуализируется) и для хранения значений между 
  визуализациями:
```js
  function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
      // `current` указывает на смонтированный элемент `input`
      inputEl.current.focus();
    };
    return (
      <>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Установить фокус на поле ввода</button>
      </>
    );
  }
```

  - сохранения любого мутируемого значения между визуализациями компонентов (update):

The problem:
```js
const { useState } = React;

const MyComponent = () => {
  const [favPokemon, setFavPokemon] = useState('Pikachu');
  const previousSelected = { current: null }; // 1) define local variable (redefine after each update) !!!!!!!!!
  
  React.useEffect(() => {
     previousSelected.current = favPokemon; // 3) updating previousSelected value !!!!!!!!
  }); 
  
  const changeSelection = e => {
    // Here I'm storing my favPokemon value before it changes
    setFavPokemon(e.target.value); // 2) setting new value !!!!!!!!!!!!!!!!!!!!!!
  }
    
  return (
    <section className="box">
      <span>My favorite Pokemon:</span>
      <div className="options">
        <input type="radio"
                 value="Pikachu"
                 checked={favPokemon === "Pikachu"}
                 onChange={changeSelection} />Pikachu

          <input type="radio"
                 value="Jigglypuff"
                 checked={favPokemon === "Jigglypuff"}
                 onChange={changeSelection}/>Jigglypuff

          <input type="radio"
                   value="Snorlax"
                   checked={favPokemon === "Snorlax"}
                   onChange={changeSelection}/>Snorlax
        </div>
      <span>My favorite Pokemon used to be: </span>
      // 4) always previousSelected.current = null because it's being redefined after each update !!!!!!!!!!!!!!!!!!!!
      <span className="prevSelection">{previousSelected.current}</span> 
    </section>
  )
}

ReactDOM.render(<MyComponent />, document.getElementById('root'))
```

Solution: persist value by useRef():
```js
const { useState, useRef } = React;

const MyComponent = () => {
  const [favPokemon, setFavPokemon] = useState('Pikachu');
  const previousSelected = { current: null }; // 1) define ref (doesn't redefine after each update) !!!!!!!!!!1
  
  React.useEffect(() => {
     previousSelected.current = favPokemon; // 3) updating previousSelected value !!!!!!!!
  }); 
  
  const changeSelection = e => {
    // Here I'm storing my favPokemon value before it changes
    setFavPokemon(e.target.value); // 2) setting new value !!!!!!!!!!!!!!!!!!!!!!
  }
    
  return (
    <section className="box">
      <span>My favorite Pokemon:</span>
      <div className="options">
        <input type="radio"
                 value="Pikachu"
                 checked={favPokemon === "Pikachu"}
                 onChange={changeSelection} />Pikachu

          <input type="radio"
                 value="Jigglypuff"
                 checked={favPokemon === "Jigglypuff"}
                 onChange={changeSelection}/>Jigglypuff

          <input type="radio"
                   value="Snorlax"
                   checked={favPokemon === "Snorlax"}
                   onChange={changeSelection}/>Snorlax
        </div>
      <span>My favorite Pokemon used to be: </span>
      // 4) previousSelected.current = previous value in state because useRef() keeps value ({ current: value }) out of update ciclus !!!!!!!!!!!!!!!!!!!!
      <span className="prevSelection">{previousSelected.current}</span>  
    </section>
  )
}

ReactDOM.render(<MyComponent />, document.getElementById('root'))
```

  - useEffect() + useRef():

**The problem:** can't put new data in storage (redux, send to API, localstorage...) in 
componentWillUnmount method; Поскольку useEffect срабатывает в данном случае один раз, то 
соответственно он берет значение перемеенной name только один раз и никак не отслеживает ее
изменения.
```js
function UserForm() {
      const [name, setName] = React.useState("Tom");
       
      React.useEffect(() => {
         const userName = localStorage.getItem("userName");
         if(userName !== null) {
            setName(userName);
        } 
         // componentDidMount !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        return () => {
            localStorage.setItem("userName", name); //  name = "Tom" !!!!!!!!!!!!!!!!!!!!!!
        } // componentWillUnmount !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      },
      []); // эффект срабатывает только один раз - при самом первом рендеринге
        
      const changeName = (event) => setName(event.target.value);
      const unmount = () => ReactDOM.unmountComponentAtNode(document.getElementById("app"));
       
      return (
        <div>
          <h3>Имя: {name}</h3>
            
          <div>
            <p>Имя: <input type="text" value={name} onChange={changeName} /></p>
            <button onClick={unmount}>Unmount</button>
          </div>
        </div>
      );
    }
             
    ReactDOM.render(
      <UserForm />,
      document.getElementById("app")
    )
```

![link](https://ncoughlin.com/static/3248ccbf2b5940e7b7048f6686e481a9/62803/1.png)

Solution: Здесь вместе с состоянием компонента определяем ссылку nameRef. Ее начальное значение
- это значение переменной name. И при каждом изменении переменной name соответственно меняем и 
  значение в ссылке nameRef. Для этого определяем эффект с помощью хука useEffect. Основной хук
  useEffect, который сохраняет данные в LocalStorage, по прежнему запускается один раз - при 
  первом рендеринге. Однако теперь мы сохраняем не значение переменной name, а значение в 
  ссылке nameRef;
```js
 function UserForm() {
      const [name, setName] = React.useState("Tom");
      const nameRef = React.useRef(name);
       
      React.useEffect(() => { 
       
        nameRef.current = name;
      }, [name]);
       
      React.useEffect(() => {
         const userName = localStorage.getItem("userName");
         if(userName !== null) {
            setName(userName);
         }
         // componentDidMount !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        return () => {
            localStorage.setItem("userName", nameRef.current); // name = "newValue" !!!!!!!!!!!!!!!!!!!!!!
        } // componentWillUnmount !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      },
      []); // эффект срабатывает только один раз - при самом первом рендеринге
        
      const changeName = (event) => setName(event.target.value);
      const unmount =() => ReactDOM.unmountComponentAtNode(document.getElementById("app"));
       
      return (
        <div>
          <h3>Имя: {name}</h3>
            
          <div>
            <p>Имя: <input type="text" value={name} onChange={changeName} /></p>
            <button onClick={unmount}>Unmount</button>
          </div>
        </div>
      );
    }
             
    ReactDOM.render(
        <UserForm />,
        document.getElementById("app")
    )
```

**2) Conclusion:**

useRef() помогает создавать изменяемые переменные внутри функционального компонента, которые не 
будут обновляться при каждом рендеринге.

  - refs полезны для доступа к узлам DOM или элементам React (то, что визуализируется) и для 
    хранения значений между визуализациями;
  - useRef() не следует использовать для замены состояния, потому что она нереактивная и не вызовет
    повторную визуализацию;
  - refs должны обновляться внутри эффектов и обработчиков событий, чтобы избежать странного 
    поведения.