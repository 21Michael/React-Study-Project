import React from 'react';
import classes from './gallery.module.scss'
import MainImg from './mainImg/mainImg.js'
import List from './list/list.js'

const Gallery = props => (
    <div className={classes["gallery"]}>
        <MainImg />
        <List/>
    </div>
)

export default Gallery