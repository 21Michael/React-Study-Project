import React from 'react';
import ReactDOM from 'react-dom';
import './Header.css';
import Buttons from './Buttons.js';
import List from './List.js';



const data = [{
    title: 'MAIN',
    focused: true
}, {
    title: 'WATER MANAGEMENT',
    focused: false,
    list: ['Goverment', 'Politics', 'Laws']
}, {
    title: 'ECOLOGY',
    focused: false
}, {
    title: 'NEWS',
    focused: false,
    list: ['Goverment', 'Politics', 'Laws']
}, {
    title: 'DATA DIAGRAM',
    focused: false,
    list: ['Goverment', 'Politics', 'Laws']
}, {
    title: 'LINKS',
    focused: false,
    list: ['Goverment', 'Politics', 'Laws']
}];

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <header className="header"> 
                <nav className="navigation">
                    <List data = {data}/>
                    <Buttons/>
                </nav>
            </header>
        );
    }
};

export default Header;