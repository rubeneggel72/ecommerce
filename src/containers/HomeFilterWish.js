import React from 'react';

import ItemList from '../components/ItemList'

import BarFilter from "../components/BarFilter"

import useWishContext from '../context/UseWishContext'

const HomeFilter = () => {

  const { wish} = useWishContext()
  const newWish = wish
    
  return (

    <div> 
      <BarFilter mod={"HomeFilter"} />
      
        <div>
          {<ItemList products={newWish} filter={"wish"} />}
        </div>
    </div>
  )
}
export default HomeFilter 