import React from 'react';
import classes from './size.module.scss'
import Form from './form/form.js'

const Size = props => (
	<React.Fragment>
		<div className={classes["size"]}>
 			<span className={classes["title"]}>size</span>
     		<Form />
 		</div>
   </React.Fragment>
)

export default Size

