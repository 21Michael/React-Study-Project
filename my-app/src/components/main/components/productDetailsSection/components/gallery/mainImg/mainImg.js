import React from 'react';
import classes from './mainImg.module.scss'
import { connect } from 'react-redux'

const MainImg = props => (
    <div className={classes["wrapper"]}> 
    	<img className={classes["img"]} src={props.mainImg} alt="img"/>  	
   	</div>
)

function mapStateToProps(state) {
    return {
    	mainImg: state.main.productDetails.section.mainImg,
    }
}

export default connect(mapStateToProps)(MainImg)