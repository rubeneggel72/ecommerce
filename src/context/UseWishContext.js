import React, { createContext, useContext, useState } from 'react'

const WishContext = createContext()
const useWishContext = () => useContext(WishContext)
export const WishProvider = ({ children }) => {
    const [producto] = useState({})
    const [wish, setWish] = useState([{ "id": "0" }])
    const AddWish = (item) => {
        const newWish = wish
        var value = 0
        wish.map((wish) => {
            if (wish.id === item.id) {
                value = value + 1
            }
            return console.log("")
        })
        if (value === 0) {
            newWish.push(item)
            setWish([...newWish])
        }
    }
    const RemoveWish = (id) => {
        const newWish = wish
        var value = 0
        wish.map((wish, idx) => {
            if (wish.id === id) {
                value = idx + 1
            }
            return console.log("")
        })
        newWish.splice(value - 1, 1)
        setWish([...newWish])
    }
    return (
        <WishContext.Provider value={{ producto, AddWish, RemoveWish, wish }}>
            {children}
        </WishContext.Provider>)
}
export default useWishContext