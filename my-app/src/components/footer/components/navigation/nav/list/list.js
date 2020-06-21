import React from 'react';
import classes from './list.module.scss'
import Item from './item/item.js'


const List = props => (
      <ul className={classes['footer-navigation__list']} >
          {props.list.map((el, key)=> <Item item={el} key={key}/>)}   
      </ul>       
)

export default List;