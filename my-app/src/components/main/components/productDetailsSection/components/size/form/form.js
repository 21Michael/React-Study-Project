import React from 'react';
import classes from './form.module.scss'
import Radio from './radio/radio.js'
import { connect } from 'react-redux'
import ButtonAdd from './button-add/button-add.js'
import { onSubmit } from '../../../../../../../store/actions/main.js'

const Form = props => (
    <form className={classes["form"]} onSubmit={(evt)=>{
          evt.preventDefault()
          let size =  props.sizes.filter(el => el.clicked)[0].size
          return props.onSubmit(props.section, size)
    }}>
    	<div>
      		{props.sizes.map((el)=> <Radio key={el.id} id={el.id} size={el.size} clicked={el.clicked}/>)} 
      	</div>
      	<ButtonAdd />     
    </form>
)

function mapStateToProps(state) {
    return {
        sizes: state.main.productDetails.section.sizes,
        section: state.main.productDetails.section
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSubmit: (product, size) => dispatch(onSubmit(product, size))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)