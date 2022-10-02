import { createContext, useEffect, useState, useReducer } from "react";
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
// export const CART_ACTION_TYPE={
//     'SET_CURRENT_CART'
// }
const CartReducer=(state,action)=>{
    const {type, payload}=action
    switch(type) {
        case 'SET_CURRENT_CART':
            return {
                ...state,
                ...payload
            }
        case 'ADD_CART_ITEM':
            return {
                ...state,
                isCartOpen: payload
            }
            default:
                console.log(`${type}`)
    }
}
const INITIAL_STATE={
    isCartOpen: false,
    cartItems:[],
    totalMoney:0,
    cartCount:0}
export const CartProvider=({children})=> {

    const [{cartItems, isCartOpen, totalMoney, cartCount}, dispatch]=useReducer(CartReducer,INITIAL_STATE)
    // const [isCartOpen,setIsCartOpen]=useState(false)
    // const [cartItems,setCartItems]=useState([])
    // const [cartCount, setCartCount]=useState(0)
    // const [totalMoney, setTotalMoney]=useState(0)
    const updateCartItemReducer=(newCartItem)=>{
        const newCartCount=newCartItem.reduce((total,currentValue)=>{
            return total+currentValue.quantity},0)
  
        const newTotalMoney=newCartItem.reduce((total,currentValue)=>{
            return total+(currentValue.quantity*currentValue.price)},0)
        dispatch({type: 'SET_CURRENT_CART', 
        payload: {
            cartItems: newCartItem,
            cartCount: newCartCount,
            totalMoney: newTotalMoney
        }})
    }
    const setIsCartOpen=(cartState)=>{
        dispatch({type:'ADD_CART_ITEM', payload:cartState })
    }
    const addItemtoCart=(productToAdd)=>{
        const newCartItem=addCartItem(cartItems,productToAdd)
        updateCartItemReducer(newCartItem)
    }
    const takeItemfromCart=(productToTake)=>{
        const newCartItem=descreaseCartItem(cartItems,productToTake)
        updateCartItemReducer(newCartItem)
    }
    const removeItemfromCart=(productToRemove)=>{
        const newCartItem=removeItem(cartItems,productToRemove)
        updateCartItemReducer(newCartItem)
    }
        // useEffect(()=>{
    //     const newCartCount=cartItems.reduce((total,currentValue)=>{
    //         return total+currentValue.quantity},0)
    // setCartCount(newCartCount)}
    //     ,[cartItems])
    // useEffect(()=>{
    //     const newTotalMoney=newCartItem.reduce((total,currentValue)=>{
    //         return total+(currentValue.quantity*currentValue.price)},0)
    // setTotalMoney(newTotalMoney)}
    //     ,[cartItems])
    const value={isCartOpen,setIsCartOpen, cartItems, addItemtoCart, cartCount, takeItemfromCart, removeItemfromCart, totalMoney}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}