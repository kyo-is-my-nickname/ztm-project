import './checkout-item.styles.scss'
import { CartContext } from "../../contexts/cart.context"
import { useContext } from "react"
const CheckoutItem=({item,imageUrl,name,quantity,price})=>{
    const {removeItemfromCart, addItemtoCart,takeItemfromCart}=useContext(CartContext)
    return (<div className="checkout-item-container" >
    <div className="image-container">
     <img  src={imageUrl} alt="productIMG"/>
    </div>
    <span className="name">{name}</span>

        <div className="quantity">
            <span onClick={()=>takeItemfromCart(item)} className='arrow'>&#10094;</span>
            <span className='value'>{quantity}</span>
            <span className='arrow' onClick={()=>addItemtoCart(item)}>&#10095;</span>
        </div>
        <span className="price"> {price} </span>
        <span onClick={()=>removeItemfromCart(item)} className="remove-button">X</span>
    </div>)
}
export default CheckoutItem