import React from 'react';

const Product = (props) => {
    const {name, img, price, id} = props.product;
    

    return (
        <div className='product'>
            <img className='w-100' src={img} alt="" />
            <h4>{name}</h4>
            <h5>Price: ${price}</h5>
            <button className='btn btn-primary'>Add To Cart</button>
        </div>
    );
};

export default Product;