import React from 'react';
import Title from '../components/Title';

import CartItem from '../components/CartItem';
import CartTotals from '../components/CartTotals';
import useCartContext from "../context/UseCartContext"

const Cart = () => {
    const { totalPrice } = useCartContext()
    if (totalPrice > 0) {
        return (
            <div>
                <Title name="Su Carrito" title=" de compras" />
                <CartItem />
                <CartTotals />
            </div>
        )
    }
    else {
        return (
            <div>
                <br /><br /><br /><br /><br />
                <h1>No tiene productos en su <i className="fa fa-shopping-cart "></i> </h1>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        )
    }
}

export default Cart


