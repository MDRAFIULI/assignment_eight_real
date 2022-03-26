import React from 'react';

const Shop = () => {
    const products = [
        { name: 'plus manner', id: 1, img: 'images/pic1.png', price: 12000 }
    ]
    return (
        <div>
            <img src={products.img} alt="" />
        </div>
    );
};

export default Shop;