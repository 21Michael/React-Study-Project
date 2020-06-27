import React from 'react';
import classes from './button.module.scss'

const Button = props => (
    <div className={classes["button__wrapper"]}>
        <div className={classes["button__continue"]}>
        	<a href="">Continue Shopping</a>
        </div>
        <div className={classes["button__order"]}>
        	<button>order now</button>
        </div>
    </div>
)

export default Button