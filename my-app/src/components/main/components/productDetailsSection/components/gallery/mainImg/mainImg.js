import React from 'react';
import classes from './mainImg.module.scss'
import { connect } from 'react-redux'

const MainImg = props => (
    <div className={classes["wrapper"]}> 
    	<img className={classes["img"]} src={require(`../img/${props.mainImg}`)} alt="img"/>  	
   	</div>
)

function mapStateToProps(state) {
    return {
    	mainImg: state.main.productDetails.sections.shoes.mainImg,
    }
}

export default connect(mapStateToProps)(MainImg)