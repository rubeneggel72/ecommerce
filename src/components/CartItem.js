import React from 'react';
import useCartContext from "../context/UseCartContext"
const CartItem = () => {
    const { cart, RemoveCart, CleanCart } = useCartContext()
    return (
        <div className="container ">
            <div className="row ">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                    <button className="primary-btn offset-1" type="button" onClick={() => CleanCart()}>
                        Limpiar Carro de compras
                    </button>
                </div></div><br />
            {cart.map((cart, idx) => {

                return (<div key={idx}>
                    <div className="row my-8 text-capitalize text-center border border-dark  ">
                        <div className="col-2 col-sm-2 col-md-1 col-lg-1 col-xl-1 my-4">
                            {idx + 1}
                        </div>
                        <div className="col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2 ">
                            <img src={`https://raw.githubusercontent.com/rubeneggel72/ecommerce/master/src/img/${cart.img}.jpg`} style={{ width: '5rem', height: '5rem' }} className="img-fluid" alt="product" />
                        </div>
                        <div className="col-6 col-sm-6 col-md-1 col-lg-2 col-xl-2 my-4">
                            {cart.name}
                        </div>
                        <div className="col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2 my-4 ">
                            ${cart.price}x{cart.unit}
                        </div>
                        <div className="col-3 col-sm-3 col-md-2 col-lg-2 col-xl-2 my-4 ">
                            {cart.qty}  {cart.unit}
                        </div>
                        <div className="col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2 my-4 ">
                            <h2 ><strong>  $ {cart.price * cart.qty} </strong></h2>
                        </div>
                        <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 my-4 ">
                            <div className="cart-icon" >
                                <i className="fa fa-trash" onClick={() => RemoveCart(idx)}></i>
                            </div>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
    )
}
export default CartItem