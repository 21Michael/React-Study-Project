import React from 'react';
import classes from './list.module.scss'
import Item from './item/item.js'
import { connect } from 'react-redux'

const List = props => (
    <ul className={classes["list"]}>
        {props.images.map((img,i)=>  <Item key={i} img={img}/>)}
    </ul>
)

function mapStateToProps(state) {
    return {
    	images: state.main.productDetails.sections.shoes.images,
    }
}

export default connect(mapStateToProps)(List)