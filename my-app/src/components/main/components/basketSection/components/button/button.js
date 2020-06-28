import React from 'react';
import classes from './button.module.scss'
import {NavLink} from 'react-router-dom'

const Button = props => (
    <div className={classes["button__wrapper"]}>
        <div className={classes["button__continue"]}>
        	<NavLink exact to='/'>Continue Shopping</NavLink>
        </div>
        <div className={classes["button__order"]}>
        	<NavLink exact to='/orderSent'>order now</NavLink>
        </div>
    </div>
)

export default Button