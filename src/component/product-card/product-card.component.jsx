import './product-card.styles.scss'
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
const ProductCard=({product})=> {
    const {name, price, imageUrl}=product;
    const {addItemtoCart}=useContext(CartContext)
    const addProductToCart=()=>addItemtoCart(product)

    return <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`}/>
        <Button onClick={addProductToCart} buttonType={BUTTON_TYPE_CLASSES.inverted}>Add to cart</Button>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
            

        </div>
    </div>
}
export default ProductCard