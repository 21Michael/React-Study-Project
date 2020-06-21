import React from 'react';
import classes from './title.module.scss'


const Title = props => (
    <section className={classes['main__section-title-box']}>
        <div className={classes['title-box__wrapper']} >
            <h1 className={classes['title-box__title']}>{props.data.title}</h1>
            <p className={classes['title-box__description']} >{props.data.description}</p>
            <a className={classes['title-box__button']} >CHECK NEW ARRIVALS</a>
        </div>
    </section>
)

export default Title