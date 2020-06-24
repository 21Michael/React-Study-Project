import React from 'react';
import propTypes from 'prop-types'
import classes from './list.module.scss'
import Item from './item/item.js'
import { GalleryContext } from '../../../footer.js'
import { connect } from 'react-redux'

const List = (props) => (
    <div className={classes['gallery-scroll__list']} >
        <ul className={classes['gallery-scroll__list-wrapper']} style={{transform: `translateX(${props.transform}px)`}}>
          {props.images.map((url, key)=> <Item url={url} key={key}/>)} 
        </ul>
    </div>
);

function mapStateToProps(state) {
    return {
        images: state.footer.gallery.images,
        transform: state.footer.gallery.transform
    }
}

export default connect(mapStateToProps)(List);