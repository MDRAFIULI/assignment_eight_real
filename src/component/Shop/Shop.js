import React, { useState } from 'react';
import img from '../../images/pic1.PNG'
import img2 from '../../images/pic2.jpg'
import img3 from '../../images/pic3.jpg'
import img4 from '../../images/pic4.jpg'
import img5 from '../../images/pic5.jpg'
import img6 from '../../images/pic6.jpg'
import img7 from '../../images/pic7.jpg'
import img8 from '../../images/pic8.jpg'
import img9 from '../../images/pic9.jpg'
import Product from '../Product/Product';
import './Shop.css'


/* <div>
            <div>
                
            </div>
            <img src="../../images/pic2.jpg" alt="" />
        </div> */
const Shop = () => {
    const products = [
        { name: 'deer cycle', id: 1, img: img, price: 12000 },
        { name: 'brix bray', id: 2, img: img2, price: 12000 },
        { name: 'super co', id: 3, img: img3, price: 12000 },
        { name: 'lemon brive', id: 4, img: img4, price: 12000 },
        { name: 'dx 5', id: 5, img: img5, price: 12000 },
        { name: 'sea hand', id: 6, img: img6, price: 12000 },
        { name: 'winner pro', id: 7, img: img7, price: 12000 },
        { name: 'jhet plus', id: 8, img: img8, price: 12000 },
        { name: 'new ever', id: 9, img: img9, price: 12000 }
    ]
    const [cart, setCart] = useState('')
    const handaleAddToCart = product => {
        console.log('aaaaaaaaaaaaaa')
        const newCart = cart + ',     ' + product.name;
        setCart(newCart);

    }
    return (

        <div className='cart-container'>
            <div className='product-container'>

                {products.map(product => <Product key={product.id} product={product} handaleAddToCart={handaleAddToCart}></Product>)}
            </div>
            <div>
                <div className='cart'>
                    {/* <Cart cart={cart}></Cart> */}
                    <h1>selected item</h1>
                    <p>add item: {cart}</p>
                </div>
            </div>
        </div>
    );
};

export default Shop;