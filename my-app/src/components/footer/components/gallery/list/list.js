import React from 'react';
import classes from './list.module.scss'
import Item from './item/item.js'
import { connect } from 'react-redux'

const List = (props) => (
    <div className={classes['list']} >
        <ul className={classes['list-wrapper']} style={{transform: `translateX(${props.transform}px)`}}>
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