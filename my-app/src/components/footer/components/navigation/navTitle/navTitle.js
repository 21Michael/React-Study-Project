import React from 'react';
import classes from './navTitle.module.scss'
import { NavigationTitleContext } from '../../../footer.js'

const Navigation = () => (
    <NavigationTitleContext.Consumer>
      {(context) => 
        <nav className={classes['footer-navigation__nav'] +' '+ classes['footer-navigation__nav--social']}>
            <h4 className={classes['footer-navigation__title']} >{context.title}</h4>
            <p className={classes['footer-navigation__copyright']} >{context.copyright}</p>
            <div className={classes['footer-navigation__icons-wrapper']} >
                <a className={classes['footer-navigation__icon']}   href="https://twitter.com/home?lang=ru"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="-15 0 105 75">
                        <path d="M67.812 16.141a26.246 26.246 0 0 1-7.519 2.06 13.134 13.134 0 0 0 5.756-7.244 26.127
                        26.127 0 0 1-8.313 3.176A13.075 13.075 0 0 0 48.182 10c-7.229 0-13.092 5.861-13.092 13.093 0 1.026.118
                        2.021.338 2.981-10.885-.548-20.528-5.757-26.987-13.679a13.048 13.048 0 0 0-1.771 6.581c0 4.542 2.312 8.551 5.824 
                        10.898a13.048 13.048 0 0 1-5.93-1.638c-.002.055-.002.11-.002.162 0 6.345 4.513 11.638 10.504 12.84a13.177 13.177 0 0 
                        1-3.449.457c-.846 0-1.667-.078-2.465-.231 1.667 5.2 6.499 8.986 12.23 9.09a26.276 26.276 0 0 1-16.26 5.606A26.21 26.21 0 0
                        1 4 55.976a37.036 37.036 0 0 0 20.067 5.882c24.083 0 37.251-19.949 37.251-37.249 0-.566-.014-1.134-.039-1.694a26.597 26.597
                        0 0 0 6.533-6.774z"></path>
                    </svg>
                </a>
                <a className={classes['footer-navigation__icon']}  href="https://uk-ua.facebook.com/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -10 25 45">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192
                        1.583-5.192 4.615v3.385z"></path>
                    </svg>
                </a>
                <a className={classes['footer-navigation__icon']}  href="https://www.instagram.com/?hl=ru"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -13 24 50">
                        <path d="M21.231 0h-18.462c-1.529 0-2.769 1.24-2.769 2.769v18.46c0 1.531 1.24 2.771 2.769 2.771h18.463c1.529 
                        0 2.768-1.24 2.768-2.771v-18.46c0-1.529-1.239-2.769-2.769-2.769zm-9.231 7.385c2.549 0 4.616 2.065 4.616 4.615 
                        0 2.549-2.067 4.616-4.616 4.616s-4.615-2.068-4.615-4.616c0-2.55 2.066-4.615 4.615-4.615zm9 12.693c0 
                        .509-.413.922-.924.922h-16.152c-.511 0-.924-.413-.924-.922v-10.078h1.897c-.088.315-.153.64-.2.971-.05.337-.081.679-.081
                        1.029 0 4.079 3.306 7.385 7.384 7.385s7.384-3.306 7.384-7.385c0-.35-.031-.692-.081-1.028-.047-.331-.112-.656-.2-.971h1
                        .897v10.077zm0-13.98c0 .509-.413.923-.924.923h-2.174c-.511 0-.923-.414-.923-.923v-2.175c0-.51.412-.923.923-.923h2.174c.511
                        0 .924.413.924.923v2.175z" fillRule="evenodd" clipRule="evenodd"></path>
                    </svg>
                </a>
            </div>
        </nav>
        }
    </NavigationTitleContext.Consumer>

)

export default Navigation;