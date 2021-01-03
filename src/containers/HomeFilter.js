import { useState, useEffect } from 'react';
import { getFirestore } from '../firebase'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import ItemList from '../components/ItemList'
import BarFilter from "../components/BarFilter"
const HomeFilter = () => {
  const { filter } = useParams()
  const [products, setProducts] = useState();
  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("productos");
    const filtrarPorStock = itemCollection.where('group', "==", filter).limit(3)
    filtrarPorStock.get().then((response) => {
      const aux = response.docs.map(element => {
        return element.data();
      });
      setProducts(aux);
    });
  }, []);
  return (
    <div>
      <BarFilter mod={"HomeFilter"} />
      {products ? (
        <div>
          {<ItemList products={products} filter={filter} />}
        </div>) : (
          <div><br /><br /><br /><br />
            <Spinner />
            <h2>....Cargando....</h2></div>
        )}
    </div>
  )
}
export default HomeFilter 