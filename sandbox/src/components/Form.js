import React, { useState } from 'react';
import PropTypes from 'prop-types';

import '../styles/Form.scss'

export default function Form({ dataHandler }) {
  const [ inputData, setInputData ] = useState('');

  const changeHandler = ({ target }) => { setInputData(target.value) }
  const submitHandler = (event) => {
    event.preventDefault();
    dataHandler({ value: inputData })
  }

  return (
    <form className='form-add'>
      <div>
        <label>Input:</label>
        <input type='text' name='item' onChange={changeHandler} value={inputData}/>
      </div>
      <button type='submit' className='button-add' onClick={submitHandler}>Add</button>
    </form>
  );
}

Form.propTypes = {
  dataHandler: PropTypes.func
};
