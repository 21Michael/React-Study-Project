# Portals:

1) **Use cases:**  
      - Модальные диалоговые окна.
      - Всплывающие подсказки.
      - Всплывающие визитки.
      - Загрузчики.
    
2) **Syntax:**  
    Портал создаётся с помощью **ReactDOM.createPortal(child, container)**. Здесь **child** - это элемент, 
    фрагмент или строка React, а **container** - это местоположение или узел DOM, в который должен добавляться портал.
    ```js
      const Modal = ({ message, isOpen, onClose, children }) => {
        if (!isOpen) return null
        return ReactDOM.createPortal(    
          <div className="modal">
            <span className="message">{message}</span>
            <button onClick={onClose}>Close</button>
          </div>,
          domNode)
      }
    ```

3) **Example:**
    - <ins>**Modal without portal:**</ins>  
        При использовании modal внутри конкретного элемента (sidebar) высота и ширина этого modal будут 
        унаследованы от компонента, в котором находится modal. Поэтому есть вероятность того, что modal будет «обрезан»,
        вследствие чего он будет неправильно отображаться в приложении.

      1. **Real DOM structure:**  
        ![link](https://drive.google.com/uc?id=1g1RGLol5vnK-6D2HO--gQscPUSNYrer5)
        
      2. **React tree structure:**  
        ![link](https://drive.google.com/uc?id=1g1RGLol5vnK-6D2HO--gQscPUSNYrer5)
    
      3. **Displaying:**  
        ![link](https://drive.google.com/uc?id=1VAposiF-BGamWBy9AnT1WLejSNQYr2AB)
    
    - <ins>**Modal in portal:**</ins>  
        ```js
          const Modal =({ message, isOpen, onClose, children })=> {
            if (!isOpen) return null;
            return ReactDOM.createPortal(
               <div className="modal">
                <span>{message}</span>
                <button onClick={onClose}>Close</button>
               </div>
            ,document.body);
          }
    
          function Sidebar() {
            const [open, setOpen] = useState(false)
            return (
              <div className="component">
                <button onClick={() => setOpen(true)}>Open Modal</button>
                <Modal 
                 message="Hello World!" 
                 isOpen={open} 
                 onClose={() => setOpen(false)}
                />
              </div>
            )
          }
        ```
    
      1. **Real DOM structure:**  
         ![link](https://drive.google.com/uc?id=11qrNrFznsPm2yBEDihE5M9oyD0dlhD3n)
    
      2. **React tree structure:**  
          - Всплывающее событие будет работать, как обычно, распространяя события на предков в дереве React, независимо 
            от местоположения узла портала в DOM.
          - React контролирует узлы портала и его жизненный цикл при отображении дочерних элементов с помощью этих 
            порталов.
          - Порталы влияют только на структуру real DOM для HTML и не затрагивают дерево компонентов React.
          - Предварительно определяется точка монтирования HTML: при использовании порталов необходимо определить 
            HTML-элемент DOM в качестве точки монтирования компонента портала.
        
            ![link](https://drive.google.com/uc?id=1g1RGLol5vnK-6D2HO--gQscPUSNYrer5)  
    
      3. **Displaying:**  
         ![link](https://drive.google.com/uc?id=1SckEmZz9ET8r1f8LDPDierR8rIYwDKoP)
