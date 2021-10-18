# Render Props:

**Render props** - are simply props of a component where you can pass functions. These functions need to 
return elements, which will be used in rendering the components.

**1) JS example:**  

Callback fn передаваемый в sum и есть прямой аналог render prop в React.
```js
const sum = (a, b, fn) => {
  const result = a + b;
  fn(result);
}

//Usage

sum(1, 2, (result) => {
  console.log(result);
}) // 1

const alertFn = (result) => {
  alert(result);
}

sum(3, 6, alertFn) // 2
```

**2) Usage:**  

Component for fetching product data:
```js
import React, { Component } from "react";

class ProductData extends Component {
  state = {
    products: [] // !!!!!!!!!!!!!!!!!!! state
  };

  componentDidMount() {
    getProducts().then(products => { // !!!!!!!!!!!!!!!!!!! fetch data
      this.setState({
        products
      });
    });
  }

  render() {
    return this.props.render({ // !!!!!!!!!!!!!!!!!!! provide fetced data to render props
      products: this.state.products
    });
  }
}

export { ProductData };
```

Re-usage of the "Component for fetching product data" for fetching data for different components:

```js
<ProductData
  render={({ products }) => <ProductList products={products} />}
/> // fetch products data to <ProductList />


<ProductData
  render={({ products }) => <ProductTable products={products} />}
/> // fetch products data to <ProductTable />


<ProductData render={({ products }) => (
  <h1>
    Number of Products:
    <strong>{products.length}</strong>
  </h1>
)} /> // fetch products data to <h1/>
```

Usage in other APIs: 
 - React Router: https://reactrouter.com/web/api/Route/render-func
 - Downshift: https://github.com/downshift-js/downshift
 - Formik: https://github.com/formium/formik  
...