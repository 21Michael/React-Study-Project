import React, { Component } from 'react'
import classes from './pageMark.module.scss'

class PageMark extends Component {
    render() {
        return (
            <React.Fragment>
             	<div className={classes["page-mark"]}>
	    			<span className={classes["path"]}>HOME{this.props.path.replace(/\//g, ' / ')}</span>
				</div>
            	{this.props.children}
			</React.Fragment>
        )
    }
}

export default PageMark;