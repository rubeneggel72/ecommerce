import React, { useState } from 'react'

const ItemCounter = ({ initial, min, max, onAdd, unit }) => {
   const [counter, setCounter] = useState(initial)
   min = parseInt(min)
   max = parseInt(max)
   initial = parseInt(initial)
   const decrement = () => {
      (counter > min) ?
         setCounter(counter - min) : setCounter(counter)
      onAdd(counter - min)
   }
   const increment = () => {
      (counter < max) ?
         setCounter(counter + min) : setCounter(counter)
      onAdd(counter + min)
   }
   return (
      <div id="ItemCounter">
         <div className="col-lg-12 mt-3 offset-2">
            <button className="minus-btn" type="button" onClick={decrement}><i className="fa fa-minus"></i></button>
            <input className="counter-btn" type="button" value={counter + "  " + unit} />
            <button className="plus-btn" type="button" onClick={increment}><i className="fa fa-plus"></i></button>
         </div>
      </div>
   )
}
export default ItemCounter
