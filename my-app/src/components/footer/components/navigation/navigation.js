import React from 'react';
import classes from './navigation.module.scss'
import Nav from './nav/nav.js'
import NavTitle from './navTitle/navTitle.js'


const Navigation = props => (
    <section className={classes['footer__section-footer-navigation']} >
        {props.navList.map((nav, key)=> <Nav nav ={nav} key={key}/>)}
        <NavTitle/>
    </section>
)

export default Navigation;