import React, { createContext, useContext, useState } from 'react'
const CartContext = createContext()
const useCartContext = () => useContext(CartContext)
export const CartProvider = ({ children }) => {
    const [cant] = useState("")
    const [producto] = useState({ id: 0, name: "", price: 0 })
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [delivery, setDelivery] = useState({ state: false, price: 0 })
    const total = () => {
        var value = 0
        cart.map((cart) => {
            value = value + cart.priceItem
            return console.log("")
        })
        setTotalPrice(value)
    }
    const AddCart = (counter, product) => {
        const newCart = cart
        var value = 0
        cart.map((cart) => {
            if (cart.id === product.id) {
                value = value + 1
                cart.qty = cart.qty + counter
            }
            return console.log("")
        })
        if (value === 0 && counter > 0) {
            product.qty = counter
            product.priceItem = product.price * product.qty
            newCart.push(product)
            setCart([...newCart])
        }
        total()
    }
    const RemoveCart = (idx) => {
        const newCart = cart
        newCart.splice(idx, 1)
        setCart([...newCart])
        total()
    }
    const CleanCart = () => {
        const newCart = cart
        setTotalPrice(0)
        newCart.splice(0, newCart.length)
        setCart([...newCart])
        total()
    }
    const DeliveryToggle = () => {
        if (delivery.state === true) {
            setDelivery({ state: false, price: 0 })
        }
        else {
            var value = totalPrice * .2 + 100
            setDelivery({ state: true, price: value })
        }
        total()
    }

    return (
        <CartContext.Provider value={{ cant, producto, AddCart, cart, totalPrice, RemoveCart, CleanCart, DeliveryToggle, delivery }}>
            {children}
        </CartContext.Provider>)
}
export default useCartContext