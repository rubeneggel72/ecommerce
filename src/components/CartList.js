import React from 'react';
import CartItem from './CartItem';
const { CleanCart } = useCartContext()
export default function CartList({ value }) {
    const { cart } = value;
    return (
        <div className="container-fluid">
            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={() => CleanCart()}>
                Limpiar Carro de compras
                    </button>
            <div>
                {cart.map(item => {
                    return (<CartItem key={item.id} item={item} value={value} />);
                })}
            </div>
        </div>
    );
}