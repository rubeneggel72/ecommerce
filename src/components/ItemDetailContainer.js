import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../components/ItemDetail'
import Spinner from './Spinner'
import { getFirestore } from '../firebase'
const ItemDetailContainer = () => {

    const { id } = useParams()
    const [product, setProduct] = useState();
    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("productos");
        const idItem = itemCollection.doc(id)
        idItem.get().then((response) => {
            setProduct(response.data());
        });
    }, []);
    return (
        <div id="ItemDetailContainer">
            {product ? (
                <div className="container ">
                    <ItemDetail product={product} />
                </div>
            ) : (
                    <div><br /><br /><br /><br />
                        <Spinner />
                        <br /><br /><br /><br /><br /><br />
                    </div>
                )}
        </div>
    )
}
export default ItemDetailContainer