import React from 'react';
import {ProductCard} from "./Product/Product";
import classes from "./MyProducts.module.css";
import {ProductCardType} from "../../../redux/state/state";

type ProductsType = {
    products: Array<ProductCardType>
}

const MyProducts: React.FC<ProductsType> = ({products}: ProductsType) => {

    const mappedProductCards: JSX.Element[] = products.map(el =>
        <ProductCard key={el.id}
                     src={el.src}
                     title={el.title}
                     id={el.id}
                     description={el.description}
                     price={el.price}/>
    )

    return <div className={classes.myProducts}>
        {mappedProductCards}
    </div>
};

export default MyProducts;