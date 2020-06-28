import React from 'react';
import classes from './productDetails.module.scss'
import PageMark from '../../../../hoc/pageMark/pageMark.js'
import Gallery from './components/gallery/gallery.js'
import Inform from './components/inform/inform.js'
import Size from './components/size/size.js'
import { withRouter } from 'react-router-dom';

const ProductDetails = props => (
 	<section className={classes["section-product-details"]}>
	   	<PageMark path={props.location.pathname}>
		   	<Gallery />
		   	<Inform />
		   	<Size />
		</PageMark>	
	</section>
)

export default withRouter(ProductDetails)