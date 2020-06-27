import React from 'react';
import classes from './title.module.scss'

const Title = props => (
    <div className={classes["title-wrapper"]}>
        <h2 className={classes["title-head"]}>your shopping bag</h2>
        <p className={classes["title-description"]}>Items reserved for limited time only</p>
    </div> 
)

export default Title