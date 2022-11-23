
// import { CartContext } from "../../contexts/cart.context"
// import { useContext } from "react"
import {useSelector} from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector'
import './checkout.styles.scss'
import { useDispatch } from 'react-redux'
import { Fragment } from 'react'
import CheckoutItem from "../../component/checkout-item/checkout-item.component"
import PaymentForm from '../../component/payment-form/payment-form.component'
import { setIsCartOpen } from '../../store/cart/cart.action'
const Checkout=()=>{

    // const {cartItems, totalMoney}=useContext(CartContext)
    const cartItems=useSelector(selectCartItems)
    const totalMoney=useSelector(selectCartTotal)
    const dispatch=useDispatch()
    dispatch(setIsCartOpen(false))
    return (<div>
    <div className="checkout-container">
    <div className="checkout-header">
    <div className="checkout-block">
         <span>Product</span>
        </div>
        <div className="checkout-block">
         <span>Description</span>
        </div>
        <div className="checkout-block">
         <span>Quantity</span>
        </div>
        <div className="checkout-block">
         <span>Price</span>
        </div>
        <div className="checkout-block">
         <span>Remove</span>
        </div>
    </div> 
    {cartItems.map((item)=> {
        return <Fragment key={item.id}>
        <CheckoutItem imageUrl={item.imageUrl} name={item.name} quantity={item.quantity} price={item.price} 
        item={item} />
              </Fragment>})}
        <span className="total">total: {totalMoney} $</span>
        <PaymentForm />
    </div>
    </div>)}
export default Checkout