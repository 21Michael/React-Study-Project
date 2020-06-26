import React from 'react';
import classes from './size.module.scss'
import List from './list/list.js'
import ButtonAdd from './button-add/button-add.js'

const Size = props => (
	<React.Fragment>
	    <div className={classes["size"]}>
	    	<span className={classes["title"]}>size</span>
	        <List />
	    </div>
	   <ButtonAdd />
   </React.Fragment>
)

export default Size