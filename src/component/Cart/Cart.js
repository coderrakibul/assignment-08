import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {name, img} = props;
    return (
        <div className='d-flex cart'>
           <img className='cart-image me-2 mb-2' src={img}alt="" />
           <h6>Name: {name}</h6>
        </div>
    );
};

export default Cart;