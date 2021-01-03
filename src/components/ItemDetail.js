import React, { useState } from 'react';
import ItemCounter from './ItemCounter'
import { Link } from 'react-router-dom';
import useCartContext from '../context/UseCartContext'
import ItemWish from '../components/ItemWish'
const ItemDetail = ({ product }) => {
    const [counter, setCounter] = useState(0)
    const { AddCart, cart } = useCartContext()
    cart.map((cart) => {
        cart.id === product.id ?
            product.inCart = true : product.inCart = false
        return console.log("")
    })
    const ShowConsole = (value) => {
        setCounter(() => value)
    }
    return (
        <div className="row detailContainer">

            <div className="col-8 mx-auto col-md-3 offset-1">
                <div className="card">
                    <h3><ItemWish item={product} /></h3>
                    <img src={`https://github.com/rubeneggel72/ecommerce/blob/main/src/img/${product.img}.jpg?raw=true`} className="img-fluid" alt="product" />
                </div>
            </div>
            <div className="col-10 mx-auto col-md-8 text-capitalize">
                <h3>Producto : {product.name} </h3>

                <h5 className="text-blue">
                    <strong>
                        Pecio : <span>$</span>{product.price}
                    </strong>
                </h5>
                <h4 className="text-capitalize font-weight-bold mt-4 mb-0">
                    Descripción :</h4>
                <span className="text-capitalize font-weight mt-3 mb-0">
                    {product.description}
                </span>
                <h5 className="text-blue">
                    <strong>
                        Disponible: <span className="text-uppercase">{product.stock} {product.unit}</span>
                    </strong>
                </h5>
                <h6 className="text-left"><strong>Cant:</strong>{<ItemCounter initial={0} min={product.min} max={product.stock} unit={product.unit} onAdd={ShowConsole} />}</h6>
                <br />
                <div>
                    {/* for buttons */}
                    <Link to="/">
                        <button className="primary-btn offset-1" type="button">
                            <span >
                                Cancelar
                                    </span>
                        </button>
                    </Link>
                    {product.inCart
                        ? (<Link to='/cart'><button className="primary-btn offset-1" type="button">
                            <span className="mr-2"> <span></span>Ya fue agregado a </span><i className="fa fa-cart-plus" /> </button></Link>)
                        : (<button className="primary-btn offset-1" type="button" onClick={() => AddCart(counter, product)}><span >Agregar a <i className="fa fa-cart-plus" /> </span>
                        </button>)
                    }
                </div>
            </div>
        </div>
    );
}
export default ItemDetail
