import React from 'react';
import './Product.css'

const Product = ({ product, handaleAddToCart }) => {
    const { name, img, price } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='info'>
                <h4>name: {name}</h4>
                <p>price: ${price}</p>
            </div>
            <button onClick={() => handaleAddToCart(product)} className='btn-cart'>
                <p>Add to cart</p>
            </button>
        </div>
    );
};

export default Product;