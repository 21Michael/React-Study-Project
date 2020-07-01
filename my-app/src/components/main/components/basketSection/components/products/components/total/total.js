import React from 'react';
import classes from './total.module.scss'
import { connect } from 'react-redux'

const Total = props => {
    let amount = props.items.reduce((curr, next) =>
        next.amount ? curr += next.amount : curr += next.price, 0)

    return <div className={classes["total"]}>
		        <div className={classes["total__text"]}>Subtotal:</div>
		        <div className={classes["total__num"]}>{amount}$</div>
		    </div>
}

function mapStateToProps(state) {
    return {
        items: state.main.basket.items
    }
}
export default connect(mapStateToProps)(Total)