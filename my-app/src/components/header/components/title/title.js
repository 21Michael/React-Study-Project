import React from 'react';
import classes from './title.module.scss'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const Title = (props) => (
     <div className={classes['wrapper']}>
        <NavLink exact to={props.title.to} className={classes['link']}>{props.title.label}</NavLink>
    </div>
)

function mapStateToProps(state) {
    return {
        title: state.header.title
    }
}

export default connect(mapStateToProps)(Title);