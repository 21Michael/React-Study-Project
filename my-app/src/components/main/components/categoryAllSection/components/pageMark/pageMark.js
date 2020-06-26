import React from 'react';
import classes from './pageMark.module.scss'

const PageMark = (props) => {
   return <div className={classes["page-mark"]}>
	    <span className={classes["path"]}>HOME{props.path.replace(/\//g, ' / ')}</span>
	</div>
}

export default PageMark;