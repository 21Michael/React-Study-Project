import React from 'react';
import classes from './inform.module.scss'
import { connect } from 'react-redux'

const Inform = props => (
    <div className={classes["inform"]}>
        <h3 className={classes["title"]}>{props.title}</h3>
        <span className={classes["article-num"]}>Article number: {props.articleNum}</span>
        <span className={classes["price"]}>€{props.price}</span>
        <p className={classes["description"]}>{props.description}</p>
    </div>
)

function mapStateToProps(state) {
    return {
        title: state.main.productDetails.sections.shoes.title,
        articleNum: state.main.productDetails.sections.shoes.articleNum,
        price: state.main.productDetails.sections.shoes.price,
        description: state.main.productDetails.sections.shoes.description 
    }
}

export default connect(mapStateToProps)(Inform)