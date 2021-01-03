import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../components/ItemDetail'
import Spinner from '../components/Spinner'
import { getFirestore } from '../firebase'
const ItemDetailContainer = () => {
    const { id } = useParams()
    const [product, setProduct] = useState();
    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("productos");
        const idItem = itemCollection.doc(id)
        idItem.get().then((response) => {
            if (response.data() === undefined) {
                setProduct({ name: "empty" })
            }
            else {
                setProduct(response.data());
            }
        });
    }, []);

    return (
        <div>
            <br /><br /><br /><br />
            {product ? (
                <div>
                    {product.name === "empty" ? (
                        <div id="ItemDetailContainer item-detail">
                            <br /><br />
                            <h1> Producto no encontrado</h1>
                            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        </div>
                    ) : (
                            <div id="ItemDetailContainer item-detail">
                                <ItemDetail product={product} />
                            </div>
                        )}
                </div>
            ) : (
                    <div><br /><br /><br /><br />
                        <Spinner />
                        <h2>Cargando....</h2></div>
                )}
        </div>
    )
}

export default ItemDetailContainer