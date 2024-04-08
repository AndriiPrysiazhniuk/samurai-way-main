import React from 'react';
import classes from './Product.module.css'
import {ProductCardType} from "../../../../redux/state/store";


export const ProductCard = ({id, price, src, description, title}: ProductCardType) => {


    return (
        <div className={classes.products} id="shop">
            <button className={classes.del}>delete</button>
            <img
                src={'https://hk-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/p/r/probook_440_g8_2_.png'}
                alt={''}/>
            <p className={classes.productName}>{title}</p>
            <p className={classes.productDescription}>{description}</p>
            <div>
                <div>
                    <button className={classes.inc}>-</button>
                    <input type="text"/>
                    <button className={classes.dec}>+</button>
                </div>
            </div>
            <p className={classes.productPrice}>{price}</p>
            <button className={classes.addtoCart} id='test'>ADD TO CART</button>
        </div>
    )
}