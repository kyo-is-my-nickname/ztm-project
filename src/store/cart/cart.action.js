import { createAction } from "../../utils/reducer/reducer"
import { CART_ACTION_TYPES } from "./cart.types"
const addCartItem=(cartItems,productToAdd)=> {
    const existingItem=cartItems.find(item=>item.id===productToAdd.id)
        if (existingItem) {
            return cartItems.map(item=>
                item.id===productToAdd.id ? {...item,quantity: item.quantity+1} : item)}
        else {
             return [...cartItems, {...productToAdd, quantity: 1}]}
    }
    const descreaseCartItem=(cartItems, productToTake)=>{
        const existingCartItem = cartItems.find(
            (cartItem) => cartItem.id === productToTake.id
          );
        
          // check if quantity is equal to 1, if it is remove that item from the cart
          if (existingCartItem.quantity === 1) {
            return cartItems.filter((cartItem) => cartItem.id !== productToTake.id);
          }
        
          // return back cartitems with matching cart item with reduced quantity
          return cartItems.map((cartItem) =>
            cartItem.id === productToTake.id
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          );
        // if (productToTake.quantity>1) {
        //     return cartItems.map(item=>
        //         item.id===productToTake.id ? {...item,quantity: item.quantity-1} : item)}
        // if (productToTake.quantity===1) {
        //     return cartItems.filter(item=>
        //         item.id!==productToTake.id )}
    }
    const removeItem=(cartItems, productToRemove)=> {
        return cartItems.filter(item=>
            item.id!==productToRemove.id)
    }
export const setIsCartOpen=(cartState)=>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,cartState)
export const addItemtoCart=(cartItems, productToAdd)=>{
    const newCartItem=addCartItem(cartItems,productToAdd)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItem)}
export const takeItemfromCart=(cartItems,productToTake)=>{
    const newCartItem=descreaseCartItem(cartItems,productToTake)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItem)}
export const removeItemfromCart=(cartItems, productToRemove)=>{
    const newCartItem=removeItem(cartItems,productToRemove)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItem)}