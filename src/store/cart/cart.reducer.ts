import { setIsCartOpen, setCartItems } from "./cart.action"
import { AnyAction } from "redux"
import { CartItem } from "./cart.types"
import { CART_ACTION_TYPES } from "./cart.types"
export type CartState={
    readonly isCartOpen: boolean,
    readonly cartItems: CartItem[]
} 
const INITIAL_STATE: CartState={
    isCartOpen: false,
    cartItems:[],
    // totalMoney:0,
    // cartCount:0
}
export const cartReducer=(state=INITIAL_STATE,action: AnyAction)=>{
   
    if (setIsCartOpen.match(action)) {
        return {
                ...state,
                isCartOpen: action.payload
            }
    }
    if (setCartItems.match(action)) {
                return {
                ...state,
                cartItems: action.payload
            }
    }
    return state

    // switch(type) {
    //     case CART_ACTION_TYPES.SET_CART_ITEMS:
    //         return {
    //             ...state,
    //             cartItems: payload
    //         }
    //     case CART_ACTION_TYPES.SET_IS_CART_OPEN:
    //         return {
    //             ...state,
    //             isCartOpen: payload
    //         }
    //     default:
    //         return state
    // }
}
