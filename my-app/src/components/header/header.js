import React, { Component } from 'react';
import ErrorBoundary from '../../hoc/errorBoundary/error.js'
import classes from './header.module.scss';
import Basket from './components/basket/basket.js'
import Form from './components/form/form.js'
import Nav from './components/nav/nav.js'

export const NavContext = React.createContext(false);

class Header extends Component {
    state = {
        title: 'SH',
        nav: ['Woman', 'Men', 'Kids', 'Coming Soon'],
        form: {
            hidden: true
        },
        basket: {
            counter: 0
        }
    }

    searchButtonClickHandler = () => {
        let hiddenState = !this.state.form.hidden;
        this.setState({ form: { hidden: hiddenState } });
    }
    inputSearchKeyDownHandler = (evt) => {
        if (evt.keyCode === 27) {
            this.setState({ form: { hidden: true } })
        }
    }


    render() {
        return (
            <ErrorBoundary>
            <header className={classes.header}>
		     	<div className={classes.header__wrapper}>
			        <div className={classes['navigation-box__title']}>
			        	<span>{this.state.title}</span>
			        </div>
                    <NavContext.Provider value={this.state.nav}> 
			             <Nav/>
                    </NavContext.Provider> 
			        <Form hidden = {this.state.form.hidden} 
			        	searchButtonClickHandler = {this.searchButtonClickHandler}
			        	inputSearchKeyDownHandler = {this.inputSearchKeyDownHandler}
			        />
			         <Basket basket={this.state.basket}/> 
    			</div>
		    </header> 
            </ErrorBoundary>
        )
    }
}

export default Header;