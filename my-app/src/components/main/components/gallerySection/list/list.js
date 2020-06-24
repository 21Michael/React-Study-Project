import React from 'react';
import classes from './list.module.scss'
import Item from './item/item.js'
import {GalleryContext} from '../../../main.js'


const List = props => (
	<GalleryContext.Consumer>
	{(context)=>
	     <ul className={classes['gallery__list']}>
	          {context.map((el, key)=> <Item el={el} key={key}/>)}
	    </ul>
	 }
    </GalleryContext.Consumer>
)

export default List;