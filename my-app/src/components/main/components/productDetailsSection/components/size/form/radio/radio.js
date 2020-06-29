import React from 'react';
import classes from './radio.module.scss'
import { connect } from 'react-redux'
import { onClickSize } from '../../../../../../../../store/actions/main.js'

const Radio = props => {
    let itemClasses = props.clicked ? classes['item'] + ' ' + classes['clicked'] : classes['item']

    return <label 
                className = {itemClasses} 
                id={props.id}
                onClick ={()=>props.onClickSize(props.id)}
            >
                <input className = { classes['item__input'] } name='size' type="radio" required/>
                <span className = { classes['item__mark'] }>{props.size}</span>
            </label>
}

function mapDispatchToProps(dispatch) {
    return {
        onClickSize: (id) => dispatch(onClickSize(id))
    }
}
export default connect(null, mapDispatchToProps)(Radio)