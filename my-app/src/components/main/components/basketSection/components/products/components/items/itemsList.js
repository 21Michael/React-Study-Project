import React from 'react';
import classes from './itemsList.module.scss'
import Item from './item/item.js'
import { connect } from 'react-redux'

const ItemsList = props => (
    <ul className={classes["list-items"]}>
       {props.items.map((el,i)=> <Item key={i} item={el}/>)}
    </ul>
)

function mapStateToProps(state) {
    return {
        items: state.main.basket.items
    }
}

export default connect(mapStateToProps)(ItemsList)