import React from 'react';
import classes from './title.module.scss'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'

const Title = props => (
    <section className={classes['section-title-box']}>
        <div className={classes['title-box__wrapper']} >
            <h1 className={classes['title-box__title']}>{props.title}</h1>
            <p className={classes['title-box__description']} >{props.description}</p>
            <NavLink exact className={classes['title-box__button']} to='/comingSoon'>CHECK NEW ARRIVALS</NavLink>
        </div>
    </section>
)

function mapStateToProps(state) {
    return {
        title: state.main.homePage.content.title.title,
        description: state.main.homePage.content.title.description
    }
}

export default connect(mapStateToProps)(Title)