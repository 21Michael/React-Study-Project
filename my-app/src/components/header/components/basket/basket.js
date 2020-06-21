import React from 'react';
import classes from './basket.module.scss'

const Basket = (props) => (
    <div className = { classes['header__basket'] } >
    	<a href="">Basket ({props.basket.counter})</a> 
    </div>
)

export default Basket;