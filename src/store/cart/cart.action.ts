import { CategoryItem } from "../categories/categories.types"
import { CART_ACTION_TYPES, CartItem } from "./cart.types"
import { withMatcher, createAction, ActionWithPayload } from "../../utils/reducer/reducer"
// import CartItem from "../../component/cart-item/cart-item.component"
const addCartItem=(cartItems: CartItem[],productToAdd: CategoryItem): CartItem[]=> {
    const existingItem=cartItems.find(item=>item.id===productToAdd.id)
        if (existingItem) {
            return cartItems.map(item=>
                item.id===productToAdd.id ? {...item,quantity: item.quantity+1} : item)}
        
             return [...cartItems, {...productToAdd, quantity: 1}]
    }
const descreaseCartItem=(cartItems: CartItem[], productToTake: CartItem):CartItem[]=>{
        const existingCartItem = cartItems.find(
            (cartItem) => cartItem.id === productToTake.id
          );
        
          // check if quantity is equal to 1, if it is remove that item from the cart
          if (existingCartItem && existingCartItem.quantity === 1) {
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
    const removeItem=(cartItems: CartItem[], productToRemove: CartItem): CartItem[]=> {
        return cartItems.filter(item=>
            item.id!==productToRemove.id)
    }
export type setIsCartOpen=ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN,boolean>
export type SetCartItem=ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>
export const setIsCartOpen=withMatcher((cartState: boolean): setIsCartOpen=>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,cartState))



export const setCartItems=withMatcher((cartItems: CartItem[]): SetCartItem=>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS,cartItems))

export const addItemtoCart=(cartItems: CartItem[], productToAdd: CategoryItem)=>{
    const newCartItems=addCartItem(cartItems,productToAdd)
    return setCartItems(newCartItems)}
export const takeItemfromCart=(cartItems: CartItem[],productToTake: CartItem)=>{
    const newCartItems=descreaseCartItem(cartItems,productToTake)
    return setCartItems(newCartItems)}
export const removeItemfromCart=(cartItems: CartItem[], productToRemove: CartItem)=>{
    const newCartItems=removeItem(cartItems,productToRemove)
    return setCartItems(newCartItems)}