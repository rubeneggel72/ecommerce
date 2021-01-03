import React from 'react'
import useCartContext from "../context/UseCartContext"
import { Link } from 'react-router-dom'

const CardIcon = () => {
    const { cart, totalPrice } = useCartContext()
    if (cart.length === 0) {
        return (
            <Link to='/cart' >
                <div className="col-4 col-sm-3 col-md-3 col-lg-1 col-xl-2  clearfix header-ctn">
                    <div>
                        <i className="fa fa-shopping-cart "></i>
                        <span>Mis Compras</span>
                    </div>
                </div>
            </Link>
        )
    }
    else {
        return (
            <Link to='/cart' >
                <div className="col-4 col-sm-3 col-md-3 col-lg-1 col-xl-2  clearfix header-ctn">
                    <div>
                        <i className="fa fa-shopping-cart "></i>
                        <span>Mis Compras</span>
                        <div className="qty">{cart.length}</div>
                    </div>
                </div>
                <div className="col-4 col-sm-3 col-md-4 col-lg-3 col-xl-3  clearfix header-ctn ">
                    <h5 className="price">
                        $ {totalPrice}
                    </h5>
                </div>
            </Link>
        )
    }
}
export default CardIcon

