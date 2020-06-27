import React from 'react';
import classes from './item.module.scss'

const Item = props => (
	<React.Fragment>
	    <li className={classes["title-item__product"]}>product</li>
	    <li className={classes["title-item__description"]}>description</li>
	    <li className={classes["title-item__color"]}>color</li>
	    <li className={classes["title-item__size"]}>size</li>
	    <li className={classes["title-item__qty"]}>qty</li>
	    <li className={classes["title-item__amount"]}>amount</li>
	    <li className={classes["title-item__delete"]}>delete</li>
    </React.Fragment>
)

export default Item