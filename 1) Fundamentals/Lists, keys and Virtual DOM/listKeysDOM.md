# List, keys and Virtual DOM

**1) List and keys:**  
  - render list:
```js
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={ number.toString() }>
      { number }
    </li>
  );
  return (
    <ul>{ listItems }</ul> // array of components
  );
}
```
  - keys (should be unique):  
Helps React to differ DOM elements when updating Virtual DOM.
```js
function ListItem(props) {
  return <li>{ props.value }</li>;
}

function NumberList({ data }) {
  const listItems = data.map((val) =>
    <ListItem key={ val.id } value={ val.body } /> // key
  );
  return (
    <ul>
      { listItems }
    </ul>
  );
}
```

**2) Virtual DOM:**  

Когда в UI добавляются новые элементы, создается VDOM в виде дерева. Каждый элемент является узлом этого дерева. 
При изменении состояния любого элемента, создается новое дерево. Затем это новое дерево сравнивается (diffed) со 
старым.


После этого вычисляется наиболее эффективный метод внесения изменений в RDOM. Цель данных вычислений состоит в 
минимизации количества операций, совершаемых с RDOM. Тем самым, уменьшаются накладные расходы, связанные с обновлением 
RDOM.  

![link](https://habrastorage.org/getpro/habr/post_images/a24/a2a/a11/a24a2aa1136f517abc80ae25c20f6c8a.png)

Красным цветом обозначены узлы, которые были обновлены. Эти узлы представляют элементы UI, состояние которых 
изменилось. После этого вычисляется разница между предыдущей и текущей версиями виртуального DOM-дерева. Затем 
все родительское поддерево подвергается повторному рендерингу для представления обновленного UI. Наконец, это 
обновленное дерево используется для обновления RDOM.

![link](https://habrastorage.org/r/w1560/getpro/habr/post_images/12a/500/0c2/12a5000c239d0c3eb96cd4848e7221a1.jpg)

### **1. React использует паттерн проектирования «Наблюдатель» (observer) и реагирует на изменения состояния**
В React каждая часть UI является компонентом и почти каждый компонент имеет состояние (state). При изменении состояния
компонента, React обновляет VDOM. После обновления VDOM, React сравнивает его текущую версию с предыдущей. Этот 
процесс называется «поиском различий» (diffing).

После обнаружения объектов, изменившихся в VDOM, React обновляет соответствующие объекты в RDOM. Это существенно 
повышает производительность по сравнению с прямыми манипуляциями DOM. Именно это делает React высокопроизводительной
библиотекой JavaScript.

### **2. React использует механизм пакетного (batch) обновления RDOM**
Это также положительно влияет на производительность. Названный механизм предполагает отправку обновлений в виде 
пакетов (набора, серии) вместо отправки отдельного обновления при каждом изменении состояния.

Повторная отрисовка UI — самая затратная часть, React обеспечивает точечную и групповую перерисовку RDOM.

### **3. React использует эффективный алгоритм поиска различий**
React использует эвристический O(n) (линейный) алгоритм, основываясь на двух предположениях:
  - Два элемента разных типов приводят к построению разных деревьев;
  - Разработчик может обеспечить стабильность элементов между рендерингами посредством пропа key (ключ);

На практике эти предположения являются верными почти во всех случаях.
При сравнении двух деревьев, React начинает с корневых элементов. Дальнейшие операции зависят от типов этих элементов.

### **4. Элементы разных типов**

Если корневые элементы имеют разные типы, React уничтожает старое дерево и строит новое с нуля

Вместе со старым деревом уничтожаются все старые узлы DOM. Экземпляры компонента получают componentWillUnmount().
При построении нового дерева, новые узлы DOM встраиваются в DOM. Экземпляры компонента получают сначала 
UNSAFE_componentWillMount(), затем componentDidMount(). Любое состояние, связанное со старым деревом, утрачивается.
Любые компоненты, являющиеся дочерними по отношению к корневому, размонтируются, их состояние уничтожается. Например, 
при сравнении:
```html
  <div>
   <Counter />
  </div>
  <span>
   <Counter />
  </span>
```
Старый Counter будет уничтожен и создан заново.

### **5. Элементы одинакового типа**  

При сравнении двух элементов одинакового типа, React «смотрит» на атрибуты этих элементов.
Узлы DOM сохраняются, изменяются только их атрибуты. Например:
```html
  <div className="before" title="stuff" />
  <div className="after" title="stuff" />
```
После сравнения этих элементов будет обновлен только атрибут className.

### **6. Рекурсивный перебор дочерних элементов**

По умолчанию React перебирает два списка дочерних элементов DOM-узла и генерирует мутацию при обнаружении различий.
Например, при добавлении элемента в конец списка дочерних элементов, преобразование одного дерева в другое работает 
хорошо:
```html
<ul>
  <li>первый</li>
  <li>второй</li>
</ul>
<ul>
  <li>первый</li>
  <li>второй</li>
  <li>третий</li>
</ul>
```
React "видит", что в обоих деревьях имеются ```<li>первый</li> и <li>второй</li>```, пропускает их и вставляет в 
конец ```<li>третий</li> ```.

Обычно, вставка элемента в начало списка плохо влияет на производительность. Например, преобразование 
одного дерева в другое в данном случае будет работать плохо:
```html
<ul>
 <li>первый</li>
 <li>второй</li>
</ul>
<ul>
 <li>нулевой</li>
 <li>первый</li>
 <li>второй</li>
</ul>
```
React не сможет понять, что ```<li>первый</li> и <li>второй</li>``` остались прежними и мутирует каждый элемент.

### **7. Использование ключей**

Для решения данной проблемы React предоставляет атрибут (проп) key. Когда дочерние элементы имеют ключи, 
React использует их для сравнения потомков текущего и предыдущего узлов. Например, добавление ключей к элементам 
из последнего примера сделает преобразование деревьев намного более эффективным:
```html
<ul>
  <li key="1">первый</li>
  <li key="2">второй</li>
</ul>
<ul>
  <li key="0">нулевой</li>
  <li key="1">первый</li>
  <li key="2">второй</li>
</ul>
```