import {ReactComponent as Icon } from '../../assets/shopping-bag.svg'
// import { useContext } from 'react'
// import { CartContext } from '../../contexts/cart.context'
import {useSelector, useDispatch} from 'react-redux'
import { selectCartCount, selectCartTotal, selectIsCartOpen } from '../../store/cart/cart.selector'
import { setIsCartOpen } from '../../store/cart/cart.action'
import './cart-icon.styles.scss'
const CardIcon =()=> {
    const isCartOpen=useSelector(selectIsCartOpen)
    const cartCount=useSelector(selectCartCount)
    // const {isCartOpen, cartCount, setIsCartOpen}=useContext(CartContext)
    const dispatch=useDispatch()
    const toggleIsCartOpen=()=>dispatch(setIsCartOpen(!isCartOpen))

    return <div className='cart-icon-container' onClick={toggleIsCartOpen}>
<Icon className='shopping-icon'/>
<span className='item-count'>{cartCount}</span>
    </div>

}
export default CardIcon