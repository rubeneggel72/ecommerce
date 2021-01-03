import React from 'react';
import Item from "./Item";
import Title from "./Title";
import useCartContext from "../context/UseCartContext"

const ItemList = ({ products, filter }) => {
    const { cart } = useCartContext()
    var titleName = "Nuestros "
    var title = "Productos"
    if (filter === "Malta") { titleName = "Nuestras "; title = "Maltas" }
    if (filter === "Lupulo") { titleName = "Nuestros "; title = "Lúpulos" }
    if (filter === "Levadura") { titleName = "Nuestras "; title = "Levaduras" }
    if (filter === "Aditivo") { titleName = "Nuestros "; title = "Aditivos" }
    if (filter === "Extracto") { titleName = "Nuestros "; title = "Extractos" }
    if (filter === "Kit") { titleName = "Nuestros "; title = "Kits" }
    if (filter === "wish") { titleName = "Productos "; title = "que te gustan" }

    return (


        <div className="container">

            <Title name={titleName} title={title} />
            <div className="row" >
                <div className="">
                </div> </div>
            <div className="row" >
                {products.map((product, idx) => {
                    cart.map((cart, idxCart) => {
                        cart.id === product.id ?
                            product.inCart = true : product.inCart = product.inCart
                        return <div key={idxCart}></div>
                    })
                    if (product.id !== "0") {
                        return (
                            <div key={idx} className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 clearfix homeContainer">
                                <Item id={idx} item={product} filter={filter} />
                            </div>
                        )
                    }
                    else {
                        return (
                            <div className="container "></div>)
                    }
                })}
            </div>
        </div>
    );
}
export default ItemList



