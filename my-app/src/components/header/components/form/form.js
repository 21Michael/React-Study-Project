import React from 'react';
import classes from './form.module.scss'

const Form = props => {
    const buttonClasses = (!props.hidden) ?
        classes['tools-box__button-search'] + ' ' + classes['clicked'] :
        classes['tools-box__button-search'];
    const inputClasses = (props.hidden) ? classes['hidden'] :
        classes['tools-box__input-search'];

    return <form className={classes['tools-box__form-search']}>
		<input className={inputClasses} onKeyDown = {props.inputSearchKeyDownHandler} 
			   type="text" name="search" placeholder="Search something..." required="required"/> 
		<button className={buttonClasses} type="submit" onClick ={props.searchButtonClickHandler}> 
			<svg width="17px" height="17px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
				x="0px" y="0px" viewBox="0 0 512.001 512.001" style={{enablebackground: 'new 0 0 512.001 512.001'}} xmlSpace="preserve">
				<path d="M274.13,46.971c-62.627-62.628-164.53-62.627-227.159,0c-62.628,62.627-62.628,164.531,0,227.159
				c62.63,62.63,164.535,62.626,227.159,0C336.758,211.502,336.758,109.599,274.13,46.971z M239.646,239.646
			    c-43.613,43.613-114.577,43.613-158.19,0c-43.613-43.613-43.613-114.577,0-158.19c43.615-43.613,114.577-43.612,158.19,0
			    C283.259,125.069,283.259,196.033,239.646,239.646z">
			    </path>
			    <path d="M504.858,470.373L316.17,281.686c-10.037,12.875-21.635,24.474-34.471,34.498l188.674,188.674
			    c9.522,9.522,24.961,9.523,34.485,0C514.381,495.336,514.381,479.897,504.858,470.373z">
			    </path>
			</svg>                                  	           	
		</button>
	</form>
}

export default Form;
