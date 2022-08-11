import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Item.scss'

export default function Item({ value }) {
  return (
    <li className='item'>{ value }</li>
  );
}

Item.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])
};
