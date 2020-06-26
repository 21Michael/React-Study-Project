import React from 'react';
import classes from './item.module.scss'
import { connect } from 'react-redux'
import {onClickSize} from '../../../../../../../../store/actions/main.js'

const Item = props => (
    <li className={classes['item']}>
    	<a 
    		className={props.clicked ? classes['clicked']: null}
    		id={props.id}
    		onClick ={()=>props.onClickSize(props.id)}
    	>
    		{props.size}
    	</a>
    </li>
)
function mapDispatchToProps(dispatch) {
    return {
        onClickSize: (id) => dispatch(onClickSize(id))
    }
}
export default connect(null, mapDispatchToProps)(Item)