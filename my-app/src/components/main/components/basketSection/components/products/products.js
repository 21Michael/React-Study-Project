import React from 'react';
import classes from './products.module.scss'
import TitleList from './components/title/titleList.js'
import ItemsList from './components/items/itemsList.js'
import Total from './components/total/total.js'

const Products = props => (
    <div className={classes["products"]}>
        <TitleList />
        <ItemsList />
        <Total />
    </div>
)

export default Products