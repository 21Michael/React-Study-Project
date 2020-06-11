import React from 'react';
import ReactDOM from 'react-dom';

function Item({ data, index, onClick }) {
    const className = index === 0 ? "navigation_item navigation_focus" : "navigation_item";
    const InnerItem = function({ el }) {
        return <li className="navigation_item-fall">{el}</li>
    };

    return (
        <li tabIndex ="0" className={className} onClick = {(evt)=> onClick(evt)}>
            <a href="#main">{data.title} </a>
            {data.list ? <ul className="navigation_list-fall"> {data.list.map((el ,i) => <InnerItem el = {el} key ={i} />)} </ul> : false}      
        </li>
    );
};

function handlerItem(evt) {
    document.querySelector(".navigation_list").firstElementChild = evt.target.closest("li");
};

function onClick(evt) {
    document.querySelector('.navigation_focus').classList.remove('navigation_focus')
    evt.currentTarget.classList.add('navigation_focus');
};


function List({ data }) {
    return <ul className = "navigation_list"> { data.map((el, i) => <Item data = {el} key = {i} index = {i} onClick={onClick} />) } </ul>;
};

export default List;