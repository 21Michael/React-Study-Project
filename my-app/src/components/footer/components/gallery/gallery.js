import React, { useRef } from 'react';
import classes from './gallery.module.scss'
import List from './list/list.js'

const Gallery = props => {
    const galleryRef = useRef(null);

    return <section className={classes['gallery-scroll']} ref={galleryRef} >
            <List />
             <button className={classes['gallery-scroll__button'] +' '+classes['gallery-scroll__button--left']} 
                 onClick={()=> props.handlerGalleryButtons(galleryRef.current, 'left') } ></button>
             <button  className={classes['gallery-scroll__button'] +' '+classes['gallery-scroll__button--right']} 
                onClick={()=> props.handlerGalleryButtons(galleryRef.current, 'right') }></button>
          </section>
}


export default Gallery;