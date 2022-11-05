import {createSelector} from 'reselect'
import { RootReducer } from '../store';
import { CartState } from './cart.reducer';
const selectCartReducer=(state: RootReducer): CartState=>state.cart;
export const selectCartItems=createSelector(
    [selectCartReducer],
    (cart)=>cart.cartItems)
export const selectIsCartOpen=createSelector(
    [selectCartReducer], 
    (cart)=>cart.isCartOpen
)
export const selectCartCount=createSelector(
    [selectCartItems],(cartItems)=>cartItems.reduce((total,currentValue)=>{
        return total+currentValue.quantity},0)
)
export const selectCartTotal=createSelector(
    [selectCartItems],(cartItems)=>cartItems.reduce((total,currentValue)=>{
        return total+(currentValue.quantity*currentValue.price)},0)
)
   