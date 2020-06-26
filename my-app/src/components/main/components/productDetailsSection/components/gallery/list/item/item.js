import React from 'react';
import classes from './item.module.scss'
import { connect } from 'react-redux'
import {onClickThumbImg} from '../../../../../../../../store/actions/main.js'

const Item = props => (
    <li className={classes["item"]}>
	    <button className={classes["link"]} href="" onClick={()=>props.onClickThumbImg(props.img)}>
	    	<img className={classes["img"]} src={require(`../../img/${props.img}`)} alt="img"/>
	    </button>
	</li>
)
function mapDispatchToProps(dispatch) {
    return {
        onClickThumbImg: (value) => dispatch(onClickThumbImg(value))
    }
}

export default connect(null, mapDispatchToProps)(Item)