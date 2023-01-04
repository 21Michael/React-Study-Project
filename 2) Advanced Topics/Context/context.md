# Context:  

The problem (props drilling):  

![link](https://tproger.ru/s3/uploads/2019/11/ey25z0hvmy31xiiqqwgq.jpg)

Solution (context):

![link](https://tproger.ru/s3/uploads/2019/11/ckfpokb2cz3ffmn8238i.jpg)

### 1) Usage:

  - <ins>**Set state on provider component level (simple props):**</ins>  

    Компонент Provider используется для передачи нужных данных (value) вниз по дереву. Любой компонент может использовать
    этот контекст и не важно, как глубоко он находится.  
    
    1) **Create context:**  
       ```js
            const ThemeContext = React.createContext({
                theme: '',
                changeTheme: () => {}
            }); // 1) Create context !!!!!!!!!!!!
       
            export { ThemeContext };
       ```
    2) **Set Provider:**
        ```js
            import React from "react";
            import ReactDOM from "react-dom";
            import themes from './themes';
            const ThemeContext = React.createContext({
                theme: '',
                changeTheme: () => {}
            }); // 1) Create context !!!!!!!!!!!!
            
            class App extends React.Component {
                constructor(props) {
                    super(props);
                    this.state = {
                        theme: themes.light, // 2) Set initial state !!!!!!!!!!!!
                    };
            
                    this.toggleTheme = () => {
                        this.setState(state => ({ // 2) Set initial state !!!!!!!!!!!!
                            theme:
                                state.theme === themes.dark
                                    ? themes.light
                                    : themes.dark,
                        }));
                    };
                }
            
                render() {
                    return (
                        <Page>
                            <ThemeContext.Provider value={{  // 3) Wrapp <App/> by provider component !!!!!!!!!!!!
                                theme: this.state.theme, 
                                toggleTheme: this.toggleTheme 
                            }}>                                
                                <Section />
                            </ThemeContext.Provider>
                        </Page>
                    );
                }
            }
            
            const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(<App />);
        ```
    
    3) **Get passing props by Consumer:**
        ```js
            import React from "react";
            import Button from "./Button";
            import { ThemeContext } from './theme-context';
            
            class ThemedButton extends React.Component {
              static contextType = ThemeContext; // 4) set passed context !!!!!!!!!!!!
              
              render() {
                const theme = this.context.theme; // got props theme !!!!!!!!!!
                const onClickhandler = (event) => {
                  event.preventDefault();
                  this.context.toggleTheme(); // got props toggleTheme !!!!!!!!!!
                }
       
                return <Button theme={ theme } />;
              }
            }
        ```

  - <ins>**Decompose context to HOC:**</ins>
      1) **Create context:**
          ```js
            import React, { Component } from "react";
            import themes from './themes';
            const ThemeContext = React.createContext({
              theme: '',
              changeTheme: () => {}
            }); // 1) Create context !!!!!!!!!!!!
            
            class ThemeContextProvider extends Component {
              state = {
                theme: themes.light // 2) Set initial state !!!!!!!!!!!!
              };
              
              toggleTheme = () => { // 2) Set initial state !!!!!!!!!!!!
                this.setState(prevState => {
                  return {
                    theme: prevState.theme === "Day" ? "Night" : "Day"
                  };
                });
              };
              
              render() {
                return 
                  <Provider value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}> // 3) Set provider HOC !!!!!!!!!!!!
                    { this.props.children }
                  </Provider>;  
              }
            }
            
            export { ThemeContextProvider, Consumer as ThemeContextConsumer }; // !!!!!!!!!!!!
          ```
      2)  **Set Provider:**
          ```js
            import React from "react";
            import ReactDOM from "react-dom";
            import { Provider } from "./themeContext"; // !!!!!!!!!!!!
            
            import App from "./App";
            
            ReactDOM.render(
              <Provider> // !!!!!!!!!!!!
                <App />
              </Provider>,
              document.getElementById("root")
            );
          ```
      3) **Get passing props by Consumer:**
           ```js
              import React from "react";
              import Button from "./Button";
              import { ThemeContext } from './theme-context';
    
              class ThemedButton extends React.Component {
              static contextType = ThemeContext; // 4) set passed context !!!!!!!!!!!!
      
                  render() {
                    const theme = this.context.theme; // got props theme !!!!!!!!!!
                    const onClickhandler = (event) => {
                      event.preventDefault();
                      this.context.toggleTheme(); // got props toggleTheme !!!!!!!!!!
                    }
      
                    return <Button theme={ theme } />;
                  }
              }
          ```

**2) Getting context:**  
  - **by contextType** (inside of class components), get context from: "create context in provider component 
    (simple props)":  
    
    Определяем contextType, чтобы получить значение контекста. React найдёт (выше по дереву) ближайший 
    Provider-компонент, предоставляющий этот контекст, и использует его значение.
    ```js
      import React from "react";
      import Button from "./Button";
      
      class ThemedButton extends React.Component {
        static contextType = ThemeContext; // get context from provider !!!!!!!!!!!!!
        
        render() {
          const theme = this.context;
          return <Button theme={ theme } />;
        }
      }
    ```

  - **by Context.Consumer** (inside of function components), get context from: "decompose complex logic to own 
    context component":  
    
    Для использования данных внутри функциональных компонентов необходимо использовать <ThemeContext.Consumer>. 
    Внутри него нужно предоставить функцию, возвращающую элементы. В данном случае будет использоваться паттерн 
    «render props», который позволяет передать компоненту в качестве children любую функцию, которая возвращает 
    JSX код.
    ```js
    import React from "react";
    import Button from "./Button";
    import { ThemeContextConsumer } from "./themeContext";
    
    function ThemedButton (props) {
      return ( 
        <ThemeContextConsumer> 
          {context => ( // get context from provider !!!!!!!!!!!!!
            <Button theme={ context.theme } onClick={ context.toggleTheme } /> 
          )}
        </ThemeContextConsumer>);
    }
    ```

**3) Alternatives:**  
  - useContext() hook see (Advanced Topics/Hooks/useContext.md);
  - composition (Fundamentals/composition.md):  

  Вместо избыточной передачи пропсов к нужному компоненту или использования контекста мы можем использовать
  композицию компонентов. Объявить компонент которому необходимо передать данные на уровне родительского 
  компонента провайдера и передать в виде пропса в нужные компоненты.
  
  ![link](https://drive.google.com/uc?id=1DhOeasCpa-eRALh8ZWjnREytK5YUT1os)
  
  Provider: 
  ```js
    import React from "react";
    import Child1 from "../";
    import Button from "./Button";
    
    class Parent extends React.Component {
        state = {
          theme: "Day" // 1) Set initial state !!!!!!!!!!!!
        };
    
        toggleTheme = () => {
          this.setState(prevState => {
            return {
              theme: prevState.theme === "Day" ? "Night" : "Day"
            };
          });
        }; // 1) Set initial state !!!!!!!!!!!!
        
        render() {
          // ----------- composition ----------- //
          const ThemedButton = (<Button theme={ this.state.theme } onClick={ this.toggleTheme } />); // 2) Pass props directly to the component !!!!!!!!!!
          
          return <Child1 themedButton={ ThemedButton } />; // 3) Pass component as a props !!!!!!!!!!!!!
        }
    }
  ```
  
  Usage:
  ```js
  import React from "react";
  
  function Child5 ({ themedButton }) {
    return ( 
      <div> 
        <h2>Title</h2>
        { themedButton } 
      </div>);
  }
  ```

**4) Recommendations:**  

  - Не используйте Context, если он заменяет пробрасывание всего на один-два уровня. Этот 
    инструмент — отличный способ, если нужно распространить состояние на множество компонентов, 
    находящихся в «дереве» далеко друг от друга. Но если вам нужно просто опуститься или подняться
    на пару уровней, то пробрасывание будет легче и быстрее.
    
  - Постарайтесь не использовать Context для сохранения локального состояния. Например, если вам 
    нужно сохранить введённые в форму данные, то лучше использовать локальное свойство.
    
  - Всегда оборачивайте родителя в Provider’а на как можно более низком уровне — не стоит 
    использовать самую верхушку «дерева».
    
  - Наконец, если вы решили пересылать свойства таким способом, важно помнить про наблюдение 
    за производительностью и рефакторингом. Но это скорее всего не понадобится, если просадки в
    производительности не будут сильно заметны.
