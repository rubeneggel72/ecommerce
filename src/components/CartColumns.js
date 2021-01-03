import React from 'react';
import useCartContext from "../context/UseCartContext"
const CartColumns = () => {
    const {  CleanCart } = useCartContext()
    return (


        <div className="container-fluid text-center d-none d-lg-block">
                   
            <div className="row">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                    <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={() => CleanCart()}>
                    Limpiar Carro de compras
                    </button>
</div></div>
            <div className="row">
            <div className="col-10 mx-auto col-lg-1 border border-dark">
                    <p className="text-uppercase">Item</p>
                </div>
                <div className="col-10 mx-auto col-lg-2 border border-dark">
                    <p className="text-uppercase">Imagen</p>
                </div>
                <div className="col-10 mx-auto col-lg-2 border border-dark">
                    <p className="text-uppercase">Producto</p>
                </div>
                <div className="col-10 mx-auto col-lg-2 border border-dark">
                    <p className="text-uppercase">Precio Unit.</p>
                </div>
                <div className="col-10 mx-auto col-lg-2 border border-dark">
                    <p className="text-uppercase">Cantidad</p>
                </div>
                <div className="col-10 mx-auto col-lg-1 border border-dark">
                    <p className="text-uppercase">Eliminar</p>
                </div>
                <div className="col-10 mx-auto col-lg-2 border border-dark">
                    <p className="text-uppercase">Precio Item</p>
                </div>
            </div>
        </div>
    )
}
export default CartColumns