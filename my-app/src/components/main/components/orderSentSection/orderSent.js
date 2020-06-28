import React from 'react';
import classes from './orderSent.module.scss'


const OrderSent = props => (
    <section className={classes["section-order-sent"]}>
	    <h1 className={classes["order-sent__title"]}>ORDER SENT!</h1>
	    <p className={classes["order-sent__description"]}>Thank you, and happy shopping :)</p>
	</section>
)

export default OrderSent