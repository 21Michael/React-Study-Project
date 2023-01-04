# HOC:

**1) JS realization:**  

**HOF** -  is a function that does at least one of the following:  
  - takes one or more functions as arguments (i.e. procedural parameters);
  - returns a function as its result;  

Examples:
    
  - partial usage:
    ```js
      function mul(x) {
          return (y) => {
              return x * y
          }
      }
      const mulTwo = mul(2)
      mulTwo(2) // 4
      mulTwo(3) // 6
      mulTwo(4) // 8
      mulTwo(5) // 10
    ```

  - callbacks:
    ```js
      const fn = (par, callback) => {
        if (!par) {
          callback(new Error('Parameter needed'));
          return;
        }
        callback(null, `Data ${par}`);
        return 'Value';
      };
      
      const res = fn('example', (err, data) => {
        if (err) throw err;
        console.dir({ data });
      });
    ```

**2) React syntax:**  
  
  HOC — это особая техника в React, при которой функция принимает аргумент Component и возвращает 
  новый компонент.
  ```js
    function HOComponent(Component) { // get a component
      return class extends React.Component {  // return new component
        render() {
          return <Component /> 
        }
      }
    }
  ```

**3) Usage examples:**

  - add wrapper:
    ```js
        function withHover(Component) { // get a component !!!!!!!!!!!!!!!!!!!!!
          return class WithHover extends React.Component { // return new component
            state = { hovering: false }
            mouseOver = () => this.setState({ hovering: true })
            mouseOut = () => this.setState({ hovering: false })
            
            render() {
              return (
                <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}> // wrapper !!!!!!!!!!!!!!!!!!!
                  <Component hovering={this.state.hovering} {...this.props} /> // add the new prop (hovering), pass old props and return component !!!!!!!!!!!!
                </div>
              );
            }
          }
        }
    ```

  - fetch data:
    ```js
        function withFetch(WrappedComponent, requestUrl) {  // get a component !!!!!!!!!!!!!!!!!!!!!
          class WithFetch extends React.Component {
            constructor(props) {
              super(props);
              this.state = {
                data: []
              };
            }
            
            componentDidMount() {
              if (requestUrl) {
                this.fetchData(requestUrl);  // fetch data !!!!!!!!!!!!!!!!!!!!!
              }
            }
            
            fetchData = async (requestUrl) => {
              this.setState({
                data: []
              });
              
              try {
                const response = await fetch(requestUrl);
                
                if (response.ok) {
                  const data = await response.json();
                  this.setState({
                    data
                  });  
                } else {
                  throw new Error('Fetch request error');
                }
                
              } catch (err) {
                // handle an error
              }
            };
            
            render() {
              return (
                <WrappedComponent data={this.state.data} {...this.props} /> // pass fetched data prop and pass old props and return component !!!!!!!!!!!!
              )
            }
          }
          
          return WithFetch; 
        }
    ```

**4) Convention:**   

  - **Pass Unrelated Props Through to the Wrapped Component:**  

    They shouldn’t drastically alter its contract. It’s expected that the component returned from a HOC 
    has a similar interface to the wrapped component. HOCs should pass through props that are unrelated 
    to its specific concern.
    ```js
        render() {
          // Filter out extra props that are specific to this HOC and shouldn't be passed through !!!!!!!!
          const { extraProp, ...passThroughProps } = this.props;
        
          // Inject props into the wrapped component. These are usually state values or instance methods. !!!!!!!!!!
          const injectedProp = someStateOrInstanceMethod;
        
          // Pass props to wrapped component
          return (
            <WrappedComponent
              injectedProp={injectedProp} // !!!!!!!!!! new prop
              {...passThroughProps} // !!!!!!!!!! old pass trought props
            />
          );
        }
    ```

  - **Maximizing Composability:**  
    
    HOC examples:
    ```js
        const NavbarWithRouter = withRouter(Navbar); // withRouter HOC !!!!!!!!!!!!!
        // -------------------------------------------------------- //
        const CommentWithRelay = Relay.createContainer(Comment, config); // Relay.createContainer HOC !!!!!!!!!!!
        // -------------------------------------------------------- //
        const ConnectedComment = connect(mapStateToProps, mapDispatchToProps)(CommentList); // Redux connect() HOC !!!!!!!!!!!!!!!!!!!
    ```

    How works **connect()**: it's a HOF that returns HOC (partial usage function that returns HOC):
    ```js
        const connect = (
          mapStateToProps = () => ({}),
          mapDispatchToProps = () => ({})
        ) => Component => {
          class Connected extends React.Component {
            onStoreOrPropsChange(props) {
              const {store} = this.context;
              const state = store.getState();
              const stateProps = mapStateToProps(state, props);
              const dispatchProps = mapDispatchToProps(store.dispatch, props);
              this.setState({
                ...stateProps,
                ...dispatchProps
              });
            }
            componentWillMount() {
              const {store} = this.context;
              this.onStoreOrPropsChange(this.props);
              this.unsubscribe = store.subscribe(() => this.onStoreOrPropsChange(this.props));
            }
            componentWillReceiveProps(nextProps) {
              this.onStoreOrPropsChange(nextProps);
            }
            componentWillUnmount() {
              this.unsubscribe();
            }
            render() {
              return <Component {...this.props} {...this.state}/>;
            }
          }
        
          Connected.contextTypes = {
            store: PropTypes.object
          };
        
          return Connected;
        }
    ```

    **The problem:** very often we have to wrap our component inside many HOCs that makes your code dirty: 
    ```js
      const EnhancedComponent = withRouter(connect(mapStateToProps, mapDispatchToProps)(WrappedComponent));
    ```

    **Solution:** because of all HOCs accept and return same argument (Component => EnchansedComponent) we 
    can compose them (composition pattern) in one function.
    ```js
      function compose(...fns) { // [withRouter, connect(mapStateToProps, mapDispatchToProps), ...]
        const [first, ...restOffuncs] = fns; // const first = withRouter; const restOffuncs = [connect(mapStateToProps, mapDispatchToProps), ...]
    
        return (Component) => restOffuncs.reduce((res, fn) => fn(res), first(Component));
        // 1.  withRouter(Component) return EnchansedComponent (res = EnchansedComponent);
        // 2.  Connected(res) return EnchansedComponent;
        // 3.  ... 
      }
      
      // Usage:
      const enhance = compose(
        withRouter,
        connect(mapStateToProps, mapDispatchToProps)
      )
      const EnhancedComponent = enhance(WrappedComponent)
    ```
    !!!!!!!!! Methods of compose in libs: **lodash (под названием lodash.flowRight), Redux, и Ramda.**

  - **Wrap the Display Name for Easy Debugging:**
    
    Созданные HOC компоненты-контейнеры отображаются в консоли инструментов разработки React наряду с 
    другими компонентами. Для более лёгкой отладки вы можете задать имя, которое подскажет, что определённый
    компонент был создан с помощью HOC.
    
    Самый распространённый способ — это обернуть имя оборачиваемого компонента. Например, если вы назвали 
    компонент высшего порядка withSubscription, а имя оборачиваемого компонента было CommentList, то 
    отображаемое имя будет WithSubscription(CommentList):
    ```js
      function withSubscription(WrappedComponent) {
        class WithSubscription extends React.Component {/* ... */}
        WithSubscription.displayName = `WithSubscription(${getDisplayName(WrappedComponent)})`;
        return WithSubscription;
      }
      
      function getDisplayName(WrappedComponent) {
        return WrappedComponent.displayName || WrappedComponent.name || 'Component';
      }
    ```

**5) Caveats:**   
  - **<ins>Don’t Use HOCs Inside the render Method:</ins>**

    Алгоритм сравнения React (reconciliation) использует тождественность 
    компонентов чтобы определить нужно ли обновить существующее поддерево, или убрать и монтировать вместо
    него новое. Если компонент, полученный из render, идентичен (===) компоненту из предыдущего рендера, 
    то React рекурсивно продолжит сравнивать поддерево. Если компоненты не равны, React полностью удалит и
    заменит старое поддерево.
    ```js
      render() {
        // Мы создаём новую версию EnhancedComponent при каждом рендере
        // EnhancedComponent1 !== EnhancedComponent2
        const EnhancedComponent = enhance(MyComponent);
        // Мы каждый раз размонтируем и монтируем целиком всё поддерево!
        return <EnhancedComponent />;
      }
    ```

    Проблема не только в производительности. Повторное монтирование компонента обнуляет его состояние, 
    а также состояние его дочерних компонентов.

  - **<ins>Static Methods Must Be Copied Over:</ins>**

    Когда мы применяем HOC, то заворачиваем оригинальный компонент в контейнер. Поэтому у нового 
    компонента не будет статических методов оригинального компонента.
    ```js
      class Component1 extends React.Component {
        constructor(props) {
          super(props);
          this.state = {value: ''};
          this.handleChange = this.handleChange.bind(this);
        }
        
        static calculateData()  {} // static method !!!!!!!!!!!!!!!!!
      
        handleChange(event) {
          this.setState(this.calculateData({value: event.target.value}));
        }
      
        render() {
          return (
            <form>
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </form>
          );
        }
      }
      // HOC:
      function HOComponent(Component) { 
        return class extends React.Component {  
          render() {
            return <Component /> 
          }
        }
      }
    
      // Apply a HOC:
      const EnchansedComponent = HOComponent(Component1);
      
      // The enhanced component has no static method:
      typeof EnchansedComponent.calculateData === 'undefined' // true !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    ```

    **Solutions:** 
    
      1. copying:
          ```js
            // Apply a HOC:
            const EnchansedComponent = HOComponent(Component1);
            
            // The enhanced component has no static method:
            EnchansedComponent.calculateData === Component1.calculateData; // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          ```
       2. hoist-non-react-statics API: 
          ```js
            // HOC:
            function HOComponent(Component) {
              return class Enhance extends React.Component {
                hoistNonReactStatic(Enhance, Component);
                render() {
                  return <Component />
                }
              }
            }
            
            // Apply a HOC:
            const EnchansedComponent = HOComponent(Component1);
            
            // The enhanced component has no static method:
            typeof EnchansedComponent.calculateData === 'undefined' // false !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          ```

  - **<ins>Refs Aren’t Passed Through:</ins>**  
    По соглашению компоненты высшего порядка передают оборачиваемому компоненту все пропсы, кроме рефов. 
    ref на самом деле не проп, как, например, key, и поэтому иначе обрабатывается React. Реф элемента, 
    созданного компонентом из HOC, будет указывать на экземпляр ближайшего в иерархии контейнера, а не 
    на оборачиваемый компонент.  
    --  
    **Вы можете решить эту проблему с помощью:**  
    - React.forwardRef();
    - Ref like a props;
    - Callback refs;
      
    **Пример (React.forwardRef):**  
      1. **Create HOC with forwardRef():**  
          ```js
              export function withRef(WrappedComponent) {
                 class WithRef extends React.Component {
                    render() {
                       const {forwardedRef, ...props} = this.props;
                      
                      return(
                        <WrappedComponent 
                          ref={forwardedRef} 
                          {...props} 
                        />);
                    }
                 }
                 return React.forwardRef((props, ref) => { // wrapp HOC in React.forwardRef
                    return <WithRef {...props} forwardedRef={ref} />;
                 });
              }
          ```
    
      2. **Wrap component (MyInput) in HOC:**
          ```js
              const MyInput = (props) => (
                <input
                  name={props.name}
                  type="text"
                />
              );
              
              export const MyInputWithRef = withRef(MyInput);
          ```
    
      3. **Set ref to component (MyInput) wrapped in HOC (WithRef):**
          ```js
              import { MyInputWithRef } from './MyInput';
              const MyComponent = () => {
                 let ref = React.createRef(); // initialize ref
                 
                return (
                     <MyInputWithRef
                       name="email" 
                       forwardedRef={ref} // transfer ref to component wrapped in HOC
                     />
                );
              }
          ```
