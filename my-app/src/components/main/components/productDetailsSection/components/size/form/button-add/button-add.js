import React from 'react';
import classes from './button-add.module.scss'
import { connect } from 'react-redux'

const ButtonAdd = props => {
    const buttonClasses = props.added ?
        classes["button"] + ' ' + classes["clicked"] :
        classes["button"]
    const buttonText = props.added ? 'product added' : 'add to cart'

    return  <button type='submit' className={buttonClasses}>
                {buttonText}
            </button>
}

function mapStateToProps(state) {
    return {
        added: state.main.productDetails.section.added
    }
}

export default connect(mapStateToProps)(ButtonAdd)