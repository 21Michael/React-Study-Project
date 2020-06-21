import React from 'react';
import propTypes from 'prop-types'
import classes from './list.module.scss'
import Item from './item/item.js'
import {GalleryContext} from '../../../footer.js'

const List = () => (
	  <GalleryContext.Consumer>
	  {(context) => 
	    <div className={classes['gallery-scroll__list']} >
	        <ul className={classes['gallery-scroll__list-wrapper']} style={{transform: `translateX(${context.transform}px)`}}>
	          {context.images.map((url, key)=> <Item url={url} key={key}/>)} 
	        </ul>
	    </div>
	    }
    </GalleryContext.Consumer>
);



export default List;