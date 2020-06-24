import React from 'react';
import classes from './title.module.scss'
import {NavLink} from 'react-router-dom'


const Title = props => (
    <section className={classes['section-title-box']}>
        <div className={classes['title-box__wrapper']} >
            <h1 className={classes['title-box__title']}>{props.data.title}</h1>
            <p className={classes['title-box__description']} >{props.data.description}</p>
            <NavLink exact className={classes['title-box__button']} to='/comingSoon'>CHECK NEW ARRIVALS</NavLink>
        </div>
    </section>
)

export default Title