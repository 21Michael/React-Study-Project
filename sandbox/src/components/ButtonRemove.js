import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.scss'

export default function ButtonRemove({ submitHandler }) {
  const clickHandler = (event) => {
    event.preventDefault();
    submitHandler();
  }

  return (
    <div className='button1'>
      <button className='button' onClick={clickHandler}>Remove</button>
    </div>
  );
}

ButtonRemove.propTypes = {
  submitHandler: PropTypes.func
};
