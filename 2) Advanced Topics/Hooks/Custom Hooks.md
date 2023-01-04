# Custom Hooks:

Когда одинаковую логику состояния нужно повторно использовать в нескольких компонентах, в 
React традиционно применялись рендер-пропсы и компоненты высшего порядка. Хуки решают многие из 
тех же задач, не добавляя лишних компонентов в ваше дерево.

**<ins>Пользовательский хук</ins>** — это JavaScript-функция, имя которой начинается с «use», и которая может
вызывать другие хуки. В теле функции описывается логика функции, при этом хук обязательно должен 
возвращать результаты выполнения в виде значений или функций. 

1) **Examples:**  
    - **<ins>useInput:</ins>**
      ```js
        import { useState } from "react";
        
        const useInput = (initial, required) => {
          const [value, setValue] = useState(initial);
          const [error, setError] = useState(null);
        
          return {
            value,
            onBlur: e => {
              if (!e.target.value && required) setError("Required field");
              else setError(null);
            },
            onChange: e => setValue(e.target.value),
            error
          }; // decompose input attributes logic in the custom hook !!!!!!!!!!
        };
        
        export default useInput
      ```

    - **<ins>useFetch:</ins>**
      ```js
        import { useState, useEffect } from "react";
        
        const useFetch = (url, options) => {
        
          const [status, setStatus] = useState({
            loading: false,
            data: undefined,
            error: undefined
          });
        
          function fetchNow(url, options) {
            setStatus({ loading: true });
            fetch(url, options)
              .then((res) => res.json())
              .then((res) => {
                setStatus({ loading: false, data: res.data });
              })
              .catch((error) => {
                setStatus({ loading: false, error });
              });
          }
        
          useEffect(() => {
            if (url) {
              fetchNow(url, options);
            }
          }, []);
        
          return { ...status, fetchNow }; // decompose data featching logic in the custom hook !!!!!!!!!!!!!
        }
        
        export default useFetch
      ```

    - **<ins>useThem:</ins>**
      ```js
        const useTheme = () => {
            const [theme, setTheme] = useState("light");
            const toggleTheme = () => {
                if (theme !== "dark") {
                    localStorage.setItem("theme", "dark");
                    setTheme("dark");
                } else {
                    localStorage.setItem("theme", "light");
                    setTheme("light");
                }
            };
        
            useEffect(() => {
                const localTheme = localStorage.getItem("theme");
                if (localTheme) {
                    setTheme(localTheme);
                }
            }, []);
        
            return {
                theme,
                toggleTheme
            };  // decompose logic for managing theme in the custom hook !!!!!!!!!!!!!
        };
        
        export default useTheme
      ```

2) **Usage:**  
    ```js
      import useInput from './hooks/useInput'
      import useFetch from './hooks/useFetch'
      import useTheme from './hooks/useTheme'
      import './App.css'
      
      function App() {
      
        const nameInput = useInput('hello wordl', true); // get managing input attributes
      
        const { data, loading, error } = useFetch('https://www.reddit.com/r/news.json'); // get data and loading statuses
      
        const { theme, toggleTheme } = useTheme(); // get current theme and managing logic
      
        if(loading) return 'Loading ...'
      
        if(error) {
          console.log("error", error);
          return null;
        }
      
        return (
          <div className={`App ${theme}`}>
            <button type="button" onClick={toggleTheme}>
                Switch theme
            </button>
            <form>
            <input {...nameInput}/>
              {nameInput.error && <span style={{ color: 'red'}}>{nameInput.error}</span>}
            </form>
            {JSON.stringify(data && data.dist)}
          </div>
        );
      }
      
      export default App;
    ```

3) **Conclusion:**
    - name agreement: hook should start from 'use' prefix;  
    - each custom hook is being isolated;
