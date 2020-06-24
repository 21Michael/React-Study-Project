import React from 'react';
import classes from './gallery.module.scss'
import List from './list/list.js'


const Gallery = () => (
    <section className={classes['section-gallery']}  >
       <List/>
    </section>
)

export default Gallery;