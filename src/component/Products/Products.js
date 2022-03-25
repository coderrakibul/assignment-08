import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Summary from '../Summary/Summary';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch("products.json")
        .then(response => response.json())
        .then(data => setProducts(data))
    }, []);

    return (
        <div className='main-container'>
           <div className='products-container'>
           {
                products.map(product => <Product
                product={product}
                key={product.id}
                ></Product>)
            }
           </div>

            <div className='summary-container'>
                <Summary></Summary>
            </div>
           
        </div>
    );
};

export default Products;