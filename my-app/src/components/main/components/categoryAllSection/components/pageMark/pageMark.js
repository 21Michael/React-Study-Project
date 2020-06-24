import React from 'react';
import classes from './pageMark.module.scss'

const PageMark = (props) => (
    <div className={classes["page-mark"]}>
	    <span className={classes["page-mark__path"]}>HOME{props.path.replace('/', ' / ')}</span>
	</div>
)

export default PageMark;