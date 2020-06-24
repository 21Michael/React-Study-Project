import React, { Component } from 'react';
import classes from './title.module.scss'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const Title = (props) => (
     <div className={classes['navigation-box__title']}>
        <NavLink exact to={props.title.to}>{props.title.label}</NavLink>
    </div>
)

function mapStateToProps(state) {
    return {
        title: state.header.title
    }
}

export default connect(mapStateToProps)(Title);