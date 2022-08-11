import Item from './Item';
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Listing.scss'

export default function Listing({ data }) {
  return (
    <ul className="listing">
      { data.length ? data.map((val, i) => <Item value={val} key={i}/>) : 'Empty' }
    </ul>
  );
}

Listing.propTypes = {
  data: PropTypes.object
};
