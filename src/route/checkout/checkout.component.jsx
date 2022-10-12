
// import { CartContext } from "../../contexts/cart.context"
// import { useContext } from "react"
import {useSelector} from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector'
import './checkout.styles.scss'
import CheckoutItem from "../../component/checkout-item/checkout-item.component"
import PaymentForm from '../../component/payment-form/payment-form.component'
const Checkout=()=>{
    // const {cartItems, totalMoney}=useContext(CartContext)
    const cartItems=useSelector(selectCartItems)
    const totalMoney=useSelector(selectCartTotal)
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
        return <div key={item.id}>
        <CheckoutItem imageUrl={item.imageUrl} name={item.name} quantity={item.quantity} price={item.price} 
        item={item} />
              </div>})}
        <span className="total">total: {totalMoney} $</span>
        <PaymentForm />
    </div>
    </div>)}
export default Checkout