
import { useContext } from 'react'
import ProductContext from '../../contexts/product.context'
import ProductCard from '../../component/product-card/product-card.component'
import './shop.styles.scss'
const Shop=()=> {
const {products}=useContext(ProductContext)
    return <div className='product-container'>
        {products.map((product)=> {
        return <div key={product.id}>
            <ProductCard product={product}/>
               </div>
        })}
    </div>
}
export default Shop