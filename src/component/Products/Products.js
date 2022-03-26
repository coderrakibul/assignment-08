import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("products.json")
            .then(response => response.json())
            .then(data => setProducts(data))
    }, []);


    const handleAddButton = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
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

            <div className='cart-container'>
                <h4 className='text-center mt-3 mb-3'>Selected Cars</h4>

                {
                    cart.map(product => <Cart
                        key={product.id}
                        name={product.name}

                    ></Cart>)
                }
            </div>

        </div>
    );
};

export default Products;