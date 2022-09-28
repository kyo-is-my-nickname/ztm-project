import { createContext, useEffect, useState } from "react";
export const  CartContext = createContext({
isCartOpen:false,
setIsCartOpen:()=>{},
cartItems:[],
addItemtoCart:()=>{},
takeItemfromCart:()=>{},
removeItemfromCart:()=>{},
totalMoney:0,
cartCount:0
})
const addCartItem=(cartItems,productToAdd)=> {
const existingItem=cartItems.find(item=>item.id===productToAdd.id)

    if (existingItem) {
        return cartItems.map(item=>
            item.id===productToAdd.id ? {...item,quantity: item.quantity+1} : item
        )
    }
    
    else {
         return [...cartItems, {...productToAdd, quantity: 1}]
    }
    // return cartItems
}
const descreaseCartItem=(cartItems, productToTake)=>{
    if (productToTake.quantity>1) {
        return cartItems.map(item=>
            item.id===productToTake.id ? {...item,quantity: item.quantity-1} : item)
    }
    if (productToTake.quantity===1) {
        return cartItems.filter(item=>
            item.id!==productToTake.id )
    }
}
const removeItem=(cartItems, productToRemove)=> {
    return cartItems.filter(item=>
        item.id!==productToRemove.id)
}
export const CartProvider=({children})=> {
    const [isCartOpen,setIsCartOpen]=useState(false)
    const [cartItems,setCartItems]=useState([])
    const [cartCount, setCartCount]=useState(0)
    const [totalMoney, setTotalMoney]=useState(0)
    useEffect(()=>{
        const newCartCount=cartItems.reduce((total,currentValue)=>{
            return total+currentValue.quantity},0)
    setCartCount(newCartCount)}
        ,[cartItems])
    const addItemtoCart=(productToAdd)=>{
        setCartItems(addCartItem(cartItems,productToAdd))
    }
    const takeItemfromCart=(productToTake)=>{
        setCartItems(descreaseCartItem(cartItems,productToTake))
    }
    const removeItemfromCart=(productToRemove)=>{
        setCartItems(removeItem(cartItems,productToRemove))
    }
    useEffect(()=>{
        const newTotalMoney=cartItems.reduce((total,currentValue)=>{
            return total+(currentValue.quantity*currentValue.price)},0)
    setTotalMoney(newTotalMoney)}
        ,[cartItems])

    const value={isCartOpen,setIsCartOpen, cartItems, addItemtoCart, cartCount, takeItemfromCart, removeItemfromCart, totalMoney}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}