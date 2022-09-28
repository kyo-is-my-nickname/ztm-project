import './cart-dropdown.styles.scss'
import { CartContext } from '../../contexts/cart.context'
import { useContext } from 'react'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { Link } from 'react-router-dom'
const CartDropdown=()=> {
    const {cartItems}=useContext(CartContext)
    return <div className='cart-dropdown-container '>
    {cartItems.map((item) =>{return <CartItem  key={item.id} cartItem={item}/>})}
    <Link to='/checkout'>{<Button buttonType='inverted'>Go to checkout</Button>}</Link>
    </div>
}
export default CartDropdown