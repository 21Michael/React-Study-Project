import React from 'react';
import classes from './item.module.scss'

const Item = props => (
    <li className={classes["item"]}>
        <div className={classes["item__img-wrapper"]}>
            <a className={classes["item__link"]} href="">
                <img src={props.item.img} alt="img"/>
            </a>
        </div>
        <div className={classes["item__description-qty-wrapper"]}>
            <div className={classes["item__description"]}>
                <h4>{props.item.description.title}</h4>
                <span>Ref. {props.item.description.ref}</span>
            </div>
            <div className={classes["item__color"]}>{props.item.color}</div>
            <div className={classes["item__size"]}>{props.item.size}</div>
            <form className={classes["item__qty"]}>
                <input type="number" name="amount" min="0" value={props.item.qty}/>
            </form>
        </div>
        <div className={classes["item__amount-delete-wrapper"]}>
            <div className={classes["item__amount"]}>€{props.item.amount}</div>
            <div className={classes["item__delete"]}>
                <button className={classes["item__delete-button"]}>✖</button>
            </div>
        </div>
    </li>
)

export default Item