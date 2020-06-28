import React from 'react';
import classes from './item.module.scss'
import { connect } from 'react-redux'
import {onClickDelButton, onChangeQTY} from '../../../../../../../../../store/actions/main.js'

const Item = props => (
    <li className={classes["item"]} id={props.item.id}>
        <div className={classes["item__img-wrapper"]}>
            <img className={classes["item__img"]} src={props.item.img} alt="img"/>     
        </div>
        <div className={classes["item__description-qty-wrapper"]}>
            <div className={classes["item__description"]}>
                <h4>{props.item.description.title}</h4>
                <span>Ref. {props.item.description.ref}</span>
            </div>
            <div className={classes["item__color"]}>{props.item.color}</div>
            <div className={classes["item__size"]}>{props.item.size}</div>
            <form className={classes["item__qty"]}>
                <input type="number" name="amount" min="1" 
                value={props.qty} 
                onChange={(evt)=> props.onChangeQTY(evt.target.value - props.qty, props.item.id)}
                />
            </form>
        </div>
        <div className={classes["item__amount-delete-wrapper"]}>
            <div className={classes["item__amount"]}>{props.item.amount}$</div>
            <div className={classes["item__delete"]}>
                <button className={classes["item__delete-button"]} onClick={()=> props.onClickDelButton(props.item)}>✖</button>
            </div>
        </div>
    </li>
)

function mapDispatchToProps(dispatch) {
    return {
        onClickDelButton: (value)=> dispatch(onClickDelButton(value)),
        onChangeQTY: (value, id) => dispatch(onChangeQTY(value, id))
    }
}

export default connect(null, mapDispatchToProps)(Item)