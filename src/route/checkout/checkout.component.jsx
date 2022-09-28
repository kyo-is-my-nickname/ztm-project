
import { CartContext } from "../../contexts/cart.context"
import { useContext } from "react"
import './checkout.styles.scss'
import CheckoutItem from "../../component/checkout-item/checkout-item.component"
const Checkout=()=>{
    const {cartItems, totalMoney}=useContext(CartContext)
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
         <span>Qantity</span>
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
    </div>
    </div>)}
export default Checkout