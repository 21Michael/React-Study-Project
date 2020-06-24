import {CHANGE_GALLERY_TRANSFORM} from '../actions/actionTypes.js'

export function transformGallery(value) {
    return { type: CHANGE_GALLERY_TRANSFORM, value: value}
}