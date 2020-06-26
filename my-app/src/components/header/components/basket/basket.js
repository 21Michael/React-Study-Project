import React from 'react';
import classes from './basket.module.scss'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'

const Basket = (props) => {
   return <div className = { classes['basket'] } >
    	<NavLink exact to={props.basket.to}>Basket ({props.basket.counter})</NavLink> 
    </div>
}

function mapStateToProps(state) {
    return {
        basket: state.header.basket
    }
}

export default connect(mapStateToProps)(Basket);