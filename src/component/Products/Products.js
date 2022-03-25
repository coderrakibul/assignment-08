import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Summary from '../Summary/Summary';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    const [summary, setSummary] = useState([]);

    useEffect(() => {
        fetch("products.json")
            .then(response => response.json())
            .then(data => setProducts(data))
    }, []);


    const handleAddButton = (product) => {
        console.log(product);
        const newSummary = [...summary, product];
        setSummary(newSummary);
        console.log(summary);

    }

    return (
        <div className='main-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        handleAddButton={handleAddButton}
                    ></Product>)
                }
            </div>

            <div className='summary-container'>
                <h4 className='text-center'>Selected Clothes</h4>

            {
                summary.map(product => <p key={product.id}>{product.name}</p>)
            }
            </div>

        </div>
    );
};

export default Products;