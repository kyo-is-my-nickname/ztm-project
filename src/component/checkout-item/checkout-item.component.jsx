import './checkout-item.styles.scss'
// import { CartContext } from "../../contexts/cart.context"
// import { useContext } from "react"
import {useSelector, useDispatch} from 'react-redux'
import { removeItemfromCart, addItemtoCart, takeItemfromCart } from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector'
const CheckoutItem=({item,imageUrl,name,quantity,price})=>{
    // const {removeItemfromCart, addItemtoCart,takeItemfromCart}=useContext(CartContext)
    const dispatch=useDispatch()
    const cartItems=useSelector(selectCartItems)
    const decreaseItemHandle=()=>dispatch(takeItemfromCart(cartItems,item))
    const clearItemHandle=()=>dispatch(removeItemfromCart(cartItems,item))
    const addItemHandle=()=>dispatch(addItemtoCart(cartItems,item))
    return (<div className="checkout-item-container" >
    <div className="image-container">
     <img  src={imageUrl} alt="productIMG"/>
    </div>
    <span className="name">{name}</span>

        <div className="quantity">
            <span onClick={decreaseItemHandle} className='arrow'>&#10094;</span>
            <span className='value'>{quantity}</span>
            <span className='arrow' onClick={addItemHandle}>&#10095;</span>
        </div>
        <span className="price"> {price} </span>
        <span onClick={clearItemHandle} className="remove-button">X</span>
    </div>)
}
export default CheckoutItem