import {ReactComponent as Icon } from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import './cart-icon.styles.scss'
const CardIcon =()=> {
    const {isCartOpen, cartCount, setIsCartOpen}=useContext(CartContext)
    const toggleIsCartOpen=()=>setIsCartOpen(!isCartOpen)
    // const totalProduct=()=>{
    //     const totalPro=cartItems.reduce((total,currentValue)=>{
    //         return total+currentValue.quantity
    //     },0)
    //     return totalPro
    // }
    return <div className='cart-icon-container' onClick={toggleIsCartOpen}>
<Icon className='shopping-icon'/>
<span className='item-count'>{cartCount}</span>
    </div>

}
export default CardIcon