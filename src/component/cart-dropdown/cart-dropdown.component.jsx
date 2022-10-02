import {CartDropContainer, EmtyMess, CartItems} from './cart-dropdown.styles.jsx'
import { CartContext } from '../../contexts/cart.context'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { Link } from 'react-router-dom'
const CartDropdown=()=> {
    const {cartItems}=useContext(CartContext)
    const navigate=useNavigate()
    const goToCheckout=()=>{
        navigate('/checkout')
    }
    return <CartDropContainer>
    <CartItems>
    {cartItems.length ? (cartItems.map((item) =>{return <CartItem key={item.id} cartItem={item}/>
  })): <EmtyMess>Your cart is empty</EmtyMess>}
  </CartItems>
    {<Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={goToCheckout}>Go to checkout</Button>}
   
    </CartDropContainer>
}
export default CartDropdown