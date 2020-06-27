import React from 'react';
import classes from './titleList.module.scss'
import Item from './item/item.js'

const TitleList = props => (
    <ul className={classes["title-list"]}>
       <Item />
    </ul>
)

export default TitleList