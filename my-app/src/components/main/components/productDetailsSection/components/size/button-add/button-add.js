import React from 'react';
import classes from './button-add.module.scss'
import { connect } from 'react-redux'
import { onClickAddButton } from '../../../../../../../store/actions/main.js'

const ButtonAdd = props => {
    const buttonClasses = props.added ?
        classes["button"] + ' ' + classes["clicked"] :
        classes["button"]
    const buttonText = props.added ? 'product added' : 'add to cart'

    return <div className={classes["button-add"]}>
				<button 
					className={buttonClasses}
					onClick={()=>props.onClickAddButton(props.section)}
				>{buttonText}</button>
			</div>
}

function mapStateToProps(state) {
    return {
        added: state.main.productDetails.section.added,
        section: state.main.productDetails.section
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onClickAddButton: (value) => dispatch(onClickAddButton(value))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ButtonAdd)