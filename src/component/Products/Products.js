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

    const removeItem = () => {
        const removeCart = [];
        setCart(removeCart);
    }

    const chooseOne = () => {
        const item = cart[Math.floor(Math.random()*cart.length)];
        console.log(item)
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
                        img={product.img}

                    ></Cart>)
                }
                <button onClick={chooseOne} className='btn mt-3 btn-success fw-bold d-block'>Choose 1 For Me</button>
                <button onClick={removeItem} className='btn mt-3 btn-warning fw-bold d-block'>Reset</button>
            </div>

        </div>
    );
};

export default Products;