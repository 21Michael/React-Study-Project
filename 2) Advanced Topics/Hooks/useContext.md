# useContext():

1) **<ins>Creating:</ins>**  

    For using current hook we must decompose initialization of context to own component:
    ```js
      import React, { Component } from "react";
      const Context  = React.createContext();
      
      function ThemeContextProvider() {
        const [theme, setTheme] = useState("Day"); // !!!!!!!!!! set default value
      
        const toggleTheme = () => {
          return setTheme(prevState => prevState === "Day" ? "Night" : "Day");
        };
        
        return (
          <Context.Provider value={{ theme, toggleTheme }}> // !!!!!!!!!!!!
            { this.props.children }
          </Context.Provider>
        );
      }
      
      export { Context, ThemeContextProvider }; // !!!!!!!!!!!!
    ```

    Provider:
    ```js
      import React from "react";
      import ReactDOM from "react-dom";
      import { ThemeContextProvider } from "./themeContext"; // !!!!!!!!!!!!
      
      import App from "./App";
      
      ReactDOM.render(
        <ThemeContextProvider> // !!!!!!!!!!!!
          <App />
        </ThemeContextProvider>,
        document.getElementById("root")
      );
    ```

2) **<ins>Getting context:</ins>**

    ```js
      import React, { useContext } from "react";
      import Button from "./Button";
      import { Context } from "./themeContext";
      
      function ThemedButton (props) {
        const [theme, toggleTheme] = useContext(Context); // !!!!!!!!!!!!!!!!!!
        
        return (
          <Button theme={ theme } onClick={ toggleTheme } />  // !!!!!!!!!! got default value "Day" && click handler
        ); 
      }
    ```
