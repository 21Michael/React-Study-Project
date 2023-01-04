import React, { useState } from 'react';
import PropTypes from 'prop-types';

import '../styles/Form.scss'
import ButtonAdd from './ButtonAdd';
import ButtonRemove from './ButtonRemove';

export default function Form({ dataHandler, removeDataHandler }) {
  const [ inputData, setInputData ] = useState('');

  const inputRef = React.createRef();
  const formRef = React.createRef();

  const changeHandler = ({ target }) => { setInputData(target.value) }
  const submitHandler = () => {
    if(!inputData) {
      inputRef.current.focus();
      inputRef.current.placeholder = 'Fill the input!'
      return;
    }

    dataHandler({ value: inputData })
    setInputData('')
  }

  return (
    <form className='form-add' ref={formRef}>
      <div>
        <label>Input:</label>
        <input type='text' name='item' onChange={changeHandler} ref={inputRef} value={inputData}/>
      </div>
      <ButtonAdd submitHandler={submitHandler} formRef={formRef}/>
      <ButtonRemove submitHandler={removeDataHandler} />
    </form>
  );
}

Form.propTypes = {
  dataHandler: PropTypes.func,
  removeDataHandler: PropTypes.func
};
