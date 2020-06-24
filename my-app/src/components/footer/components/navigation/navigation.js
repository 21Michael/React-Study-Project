import React from 'react';
import classes from './navigation.module.scss'
import Nav from './nav/nav.js'
import NavTitle from './navTitle/navTitle.js'
import { connect } from 'react-redux'

const Navigation = props => (
    <section className={classes['navigation']} >
        {props.navList.map((nav, key)=> <Nav nav ={nav} key={key}/>)}
        <NavTitle/>
    </section>
)

function mapStateToProps(state) {
    return {
        navList: state.footer.navigation.navList
    }
}

export default connect(mapStateToProps)(Navigation);