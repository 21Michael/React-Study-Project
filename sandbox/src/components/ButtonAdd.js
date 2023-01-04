import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../styles/Button.scss'

export default function ButtonAdd({ submitHandler, formRef }) {
  return (
    <div className='button1'>
      <Button type='submit' className='button-add' submitHandler={submitHandler} formRef={formRef}>Add</Button>
    </div>
  );
}

ButtonAdd.propTypes = {
  submitHandler: PropTypes.func,
  formRef: PropTypes.object
};
