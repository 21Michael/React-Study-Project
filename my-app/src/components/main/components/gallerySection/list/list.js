import React from 'react';
import classes from './list.module.scss'
import Item from './item/item.js'
import { connect } from 'react-redux'

const List = props => (
    <ul className={classes['list']}>
        {props.gallery.map((el, key)=> <Item el={el} key={key}/>)}
    </ul>
)

function mapStateToProps(state) {
    return {
        gallery: state.main.home.content.gallery
    }
}

export default connect(mapStateToProps)(List);