import React from 'react';
import classes from './typeClothes.module.scss'
import List from './list/list.js'

const TypeClothes = (props) => (
    <article className={classes["clothes__type"]}>
        <h2 className={classes["clothes__type-title"]}>{props.clothType.type}</h2>
        <List clothes={props.clothType.clothes}/>
    </article>
	    
)

export default TypeClothes;