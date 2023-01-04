# useReducer():

Данный хук является альтернативой хуку useState и применяется в случаях, когда первоначальный 
стейт является более сложным и многосоставным или в моменты, когда новое состояние зависит от 
предыдущего. 

1) **Syntax:**  
    ```js
      // Третим параметром является функция для «ленивой» инициализации первоначального состояния.
      // Данная функция позволяет убрать логику из редьюсера для расчета начального состояния и в 
      // основном используется в качестве динамических изменений в начальных состояниях или для 
      // быстрого доступа к «сбросу» до этого состояния.
      function init(initialState) {
        return { count: initialState }
      }
      
      // Второй параметр, передаваемый useReducer являет начальное состояние, которое и попадает
      // в первый аргумент нашего редьюсера.
      const initialState = {count: 0};
    
      // Первым параметром является функция редьюсер, идея работы которой взята из Redux. 
      // Она получает текущее состояние и экшен с типом для его изменения.
      function reducer(state, action) {
        switch (action.type) {
          case 'increment':
            return {count: state.count + 1};
          case 'decrement':
            return {count: state.count - 1};
          case 'reset':
            return init(action.payload);
          default:
            throw new Error();
        }
      }
      
      function Counter() {
        // Хук useReducer принимает три параметра. 
        const [state, dispatch] = useReducer(reducer, initialState, init);
        
        return (
          <>
            Count: {state.count}
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            <button
              onClick={() => dispatch({type: 'reset', payload: initialCount})}>
              Reset
            </button>
          </>
        );
      }
    ```
