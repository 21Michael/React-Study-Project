import React from 'react';
import classes from './list.module.scss'
import Item from './item/item.js'
import { connect } from 'react-redux'

const List = props => (
    <ul className={classes["list"]}>
      {props.sizes.map((el)=> <Item key={el.id} id={el.id} size={el.size} clicked={el.clicked}/>)}      
    </ul>
)

function mapStateToProps(state) {
    return {
      sizes: state.main.productDetails.section.sizes 
    }
}

export default connect(mapStateToProps)(List)