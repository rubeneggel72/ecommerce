import React from 'react';
import ItemList from '../components/ItemList'
import BarFilter from "../components/BarFilter"
import useWishContext from '../context/UseWishContext'
const HomeFilter = () => {
  const { wish} = useWishContext()
  const newWish = wish
    if (wish.length > 1) {
        return (
          <div> 
          <BarFilter mod={"HomeFilter"} />
            <div>
              {<ItemList products={newWish} filter={"wish"} />}
            </div>
        </div>
        )
    }
    else {
        return (
            <div>
                <br /><br /><br /><br /><br />
                <h1>No tiene productos marcados con <i className="fa fa-heart "></i> </h1>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        )
    }
}




export default HomeFilter 