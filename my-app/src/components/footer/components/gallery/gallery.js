import React, { useRef } from 'react';
import classes from './gallery.module.scss'
import List from './list/list.js'
import { connect } from 'react-redux'
import { transformGallery } from '../../../../store/actions/footer.js'

const Gallery = props => {
    const galleryRef = useRef(null);

    const handlerGalleryButtons = (listWrapper, direction) => {
        //console.log(listWrapper.offsetWidth)
        const list_width = props.gallery.images.length * 200;
        const listWrapper_width = listWrapper.offsetWidth;

        let transform = props.gallery.transform;
        let widthToEnd, widthToStart;
        switch (direction) {
            case 'right':
                widthToEnd = list_width + transform - listWrapper_width;
                if (widthToEnd < 200) {
                    props.transformGallery(transform - widthToEnd);
                } else {
                    props.transformGallery(transform - 200);
                }
                break;
            case 'left':
                widthToStart = transform;
                if (widthToStart < 0) {
                    if (widthToStart > -200) {
                        props.transformGallery(transform - widthToStart);
                    } else {
                        props.transformGallery(transform + 200);
                    }
                }
                break;
            default:
                break;
        }
    }

    return <section className={classes['gallery-scroll']} ref={galleryRef} >
            	<List />
	            <button 
	            	className={classes['gallery-scroll__button'] +' '+classes['gallery-scroll__button--left']} 
	                onClick={()=> handlerGalleryButtons(galleryRef.current, 'left') } >
	            </button>
	            <button  
	            	className={classes['gallery-scroll__button'] +' '+classes['gallery-scroll__button--right']} 
	                onClick={()=> handlerGalleryButtons(galleryRef.current, 'right') }>
	            </button>
          	</section>
}
function mapStateToProps(state) {
    return {
        gallery: state.footer.gallery
    }
}

function mapDispatchToProps(dispatch) {
    return {
        transformGallery: (value) => dispatch(transformGallery(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);