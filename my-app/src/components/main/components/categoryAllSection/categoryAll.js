import React from 'react';
import classes from './categoryAll.module.scss'
import TypeClothes from './components/typeClothes/typeClothes.js'
import PageMark from './components/pageMark/pageMark.js'

const CategoryAll = (props) => (
    <section className={classes["section-clothes"]}>
	    <PageMark path={props.data.path}/>
	    <div className={classes["clothes__type-wrapper"]}>
	        {props.data.images.map((el, i)=> <TypeClothes key={i} clothType={el}/>)}
	    </div>
	    <div className={classes["clothes__lookbook-link"]}>
	    	<a>Check our lookbook</a>
	    </div>
	</section>
)

export default CategoryAll;