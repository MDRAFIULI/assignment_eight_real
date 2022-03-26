import React from 'react';
import img from '../../images/pic1.PNG'

const Shop = () => {
    const products = [
        { name: 'deer cycle', id: 1, img: img, price: 12000 },
        { name: 'brix bray', id: 2, img: img, price: 12000 },
        { name: 'super co', id: 3, img: img, price: 12000 },
        { name: 'lemon brive', id: 4, img: img, price: 12000 },
        { name: 'dx 5', id: 5, img: img, price: 12000 },
        { name: 'sea hand', id: 6, img: img, price: 12000 },
        { name: 'winner pro', id: 7, img: img, price: 12000 },
        { name: 'jhet plus', id: 8, img: img, price: 12000 },
        { name: 'new ever', id: 9, img: img, price: 12000 }
    ]
    return (
        <div>
            <h1>hello</h1>
            <img src={products.img} alt="" />
            <img src={img} alt="" />
            <img src="../../images/pic2.jpg" alt="" />
        </div>
    );
};

export default Shop;