import React from 'react';
import classes from './list.module.scss'
import Item from './item/item.js'
import { connect } from 'react-redux'


const List = (props) => (	
    <ul className={classes['list']}>
    	{props.nav.map((el, i)=> <Item navItem={el} key={i}/>)}
	</ul>
)

function mapStateToProps(state) {
    return {
        nav: state.header.nav
    }
}

export default connect(mapStateToProps)(List);