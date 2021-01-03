import React from 'react'
import useWishContext from '../context/UseWishContext'
const ItemWish = ({ item }) => {
    const { wish, AddWish, RemoveWish } = useWishContext()
    var value = 0
    wish.map((wish) => {
        wish.id === item.id ?
            (value = value + 1) : (value = value)
        item.inWish = value
        return console.log("")
    })
    return (
        <div id="item-whish">
            {(item.inWish === 1) ? (<button className="fa fa-heart offset-10 py-3 item-whish-button" onClick={() => RemoveWish(item.id)} />) :
                (<button className="fa fa-heart-o offset-10 py-3 item-whish-button " onClick={() => AddWish(item)} />)}
        </div>
    )
}
export default ItemWish
