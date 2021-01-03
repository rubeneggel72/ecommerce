import React from 'react';
import useCartContext from "../context/UseCartContext"
import { Link } from "react-router-dom";
const CartTotals = () => {
    const { totalPrice, cart, delivery, DeliveryToggle } = useCartContext()
    return (
        <div>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col auto">
                    </div>
                    <div className="col-7 col-sm-7 col-md-6 col-lg-4 col-xl-3">
                        <h5>
                            <span className="text-blue">Precio Total de <strong>{cart.length}</strong> Item{cart.length > 1 ? ("s") : ("")} : </span>
                        </h5>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-3 col-xl-2">
                        <h2 className="cart-price">  <strong>$ {totalPrice}</strong></h2>
                    </div>

                </div>
                <br />

                <div className="row">
                    <div className="col auto">
                    </div>
                    <div className="col-7 col-sm-7 col-md-6 col-lg-4 col-xl-3">
                        <h5>
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" defaultChecked={delivery.state} onClick={() => { DeliveryToggle() }} />
                            <span className="text-blue"> Envío a domicilio : </span>
                        </h5>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-3 col-xl-2">
                        <h2 className="cart-price">   <strong>$ {delivery.price}</strong></h2>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col auto">
                    </div>
                    <div className="col-7 col-sm-7 col-md-6 col-lg-4 col-xl-3">
                        <h5>

                            <span className="text-blue">Total a Pagar : </span>
                        </h5>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-3 col-xl-2 border border-dark ">
                        <h2 className="cart-price"><strong>$ {totalPrice + delivery.price}</strong></h2>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col auto">
                    </div>
                    <div className="col-10 col-sm-10 col-md-9 col-lg-7 col-xl-5">
                        <Link to='/buyconfirmation'>
                            <button className="primary-btn offset-1" type="button" >
                                Confirmar Compra
                    </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CartTotals