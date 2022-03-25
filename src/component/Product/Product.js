import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {name, img, price} = props.product;
    

    return (
        <div className='product'>
            <img className='w-100' src={img} alt="" />
            <h4 className='mt-3'>{name}</h4>
            <h5>Price: ${price}</h5>
            <button className='add-button btn btn-primary w-100 d-flex align-items-center'>
                <h6 className='me-2 mb-0'>Add To Cart</h6>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                
            </button>
        </div>
    );
};

export default Product;