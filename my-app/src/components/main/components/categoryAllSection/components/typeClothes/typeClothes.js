import React from 'react';
import classes from './typeClothes.module.scss'
import List from './list/list.js'

const TypeClothes = (props) => (
    <article className={classes["type"]}>
        <h2 className={classes["type-title"]}>{props.clothType.type}</h2>
        <List clothes={props.clothType.clothes}/>
    </article>
	    
)

export default TypeClothes;