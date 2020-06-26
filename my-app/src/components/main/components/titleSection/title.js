import React from 'react';
import classes from './title.module.scss'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'

const Title = props => (
    <section className={classes['section-title']}>
        <div className={classes['wrapper']} >
            <h1 className={classes['title']}>{props.title}</h1>
            <p className={classes['description']} >{props.description}</p>
            <NavLink exact className={classes['button']} to='/comingSoon'>CHECK NEW ARRIVALS</NavLink>
        </div>
    </section>
)

function mapStateToProps(state) {
    return {
        title: state.main.home.content.title.title,
        description: state.main.home.content.title.description
    }
}

export default connect(mapStateToProps)(Title)