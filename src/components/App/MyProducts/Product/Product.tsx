import React from 'react';
import classes from './Product.module.css'

export type ProductCardType = {
    id: number
    src: string
    title: string
    description: string
    price: number
}

export const ProductCard = (props: ProductCardType) => {


    return (
        <div className={classes.products} id="shop">
            <button className={classes.del}>delete</button>
            <img
                 src={'https://hk-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/p/r/probook_440_g8_2_.png'}/>
            <p className={classes.productName}>{props.title}</p>
            <p className={classes.productDescription}>{props.description}</p>
            <div>
                <div>
                    <button className={classes.inc}>-</button>
                    <input type="text"/>
                    <button className={classes.dec}>+</button>
                </div>
            </div>
            <p className={classes.productPrice}>{props.price}</p>
            <button className={classes.addtoCart} id='test'>ADD TO CART</button>
        </div>
    )
}