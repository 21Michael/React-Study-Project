import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Button.scss'

export default function Button({ submitHandler, formRef }) {
  const clickHandler = (event) => {
    event.preventDefault();
    submitHandler();
    formRef.current.className += ' active'
  }

  return (
      <button type='submit' className='button' onClick={clickHandler}>Add</button>
  );
}

Button.propTypes = {
  submitHandler: PropTypes.func,
  formRef: PropTypes.object
};
