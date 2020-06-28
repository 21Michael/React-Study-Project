import React from 'react';
import classes from './basket.module.scss'
import PageMark from '../../../../hoc/pageMark/pageMark.js'
import Title from './components/title/title.js'
import Products from './components/products/products.js'
import Button from './components/button/button.js'
import { withRouter } from 'react-router-dom';

const Basket = props => (
    <section className={classes["section-basket"]}>
    	<PageMark path={props.location.pathname}>
	   		<Title />
	   		<Products />
	   		<Button />
	   	</PageMark>
	</section>
)

export default withRouter(Basket)