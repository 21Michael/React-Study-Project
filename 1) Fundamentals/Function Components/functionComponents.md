# Function approach:
**1) Syntax:**
```js
import React, { useState } from 'react';

function NameForm() {
  const { value, setValue } = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  
  return (
    <form>
      <input type="text" value={ value } onChange={ handleChange } />
    </form>
  );
}
```