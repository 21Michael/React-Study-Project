import React from 'react';
import classes from './categoryAll.module.scss'
import TypeClothes from './components/typeClothes/typeClothes.js'
//import PageMark from './components/pageMark/pageMark.js'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import PageMark from '../../../../hoc/pageMark/pageMark.js'

const CategoryAll = (props) => {
    let images;
    for (let key in props.sections) {
        if (props.sections[key].path === props.location.pathname) {
            images = props.sections[key].images
        }
    }
    return <section className={classes["section-clothes"]}>
			    <PageMark path={props.location.pathname}>
    			    <div className={classes["type-wrapper"]}>
    			        {images.map((el, i)=> <TypeClothes key={i} clothType={el}/>)}
    			    </div>
    			    <div className={classes["lookbook-link"]}>
    			    	<NavLink exact to={props.lookbook.to}>Check our lookbook</NavLink>
    			    </div>
                </PageMark>
			</section>
}

function mapStateToProps(state) {
    return {
        sections: state.main.categoryAll.sections,
        lookbook: state.main.categoryAll.lookbook
    }
}

export default withRouter(connect(mapStateToProps)(CategoryAll));