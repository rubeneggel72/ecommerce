import { useState, useEffect } from 'react';
import { getFirestore } from '../firebase'
import Spinner from '../components/Spinner'
import ItemList from '../components/ItemList'
import BarFilter from "../components/BarFilter"
const Home = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("productos");
    const filtrarPorStock = itemCollection.where("stock", ">", 1)
    filtrarPorStock.get().then((response) => {
      const aux = response.docs.map((element, idx) => {
        return element.data();
      });
      setProducts(aux);
    });
  }, []);
  return (
    <div >
      <BarFilter mod={"home"} />
      {products ? (
        <div >
          {<ItemList products={products} />}
        </div>) : (
          <div className="container homeContainer" ><br /><br /><br /><br />
            <Spinner />
          </div>
        )}
    </div>
  )
}
export default Home 