# Lazy loading:

## Web-app loading flow:

![link](https://drive.google.com/uc?id=1kwuqC52zVdJW2mGyrP5opG65mnj5Tqtz)

## The problem:
**When the app became too big responsively the bundle.js file became bigger that increase time
of loading. Your App consists from different pages, some of them are bigger than others and 
can have heavy dependencies. But sometimes these heavy pages visited not often by user, that
makes them burdens for loading every time:**

![link](https://drive.google.com/uc?id=1M9PZOzao39VNZRm1VSqhHlm9UHr5SZfY)

## Solution: 
###Lazy loading:

![link](https://drive.google.com/uc?id=14pOSiAtTL9YXCYCsT6BlmBhj6dxvv6sx)

*works faster with HTTP/2.0 because of streams!!!

###Syntax:
 - **Lazy import:**
```js
const OtherComponent = React.lazy(() => import('./OtherComponent')); // !!!!!!!!!!!!!!!!
```
  - **Suspense** (компонент для отслеживания асинхронной загрузки, позволяющий отображать индикаторы загрузки пока компонент подгружается):
```js
import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Загрузка...</div>}> // !!!!!!!!!!!!!!!!
        <OtherComponent />
      </Suspense>
    </div>
  );
}
```