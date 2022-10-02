import { Link } from 'react-router-dom'
import { useContext, Fragment } from 'react'
import CategoriesContext from '../../contexts/categories.context'
import ProductCard from '../../component/product-card/product-card.component'
import './categories-preview.styles.scss'
// import './shop.styles.scss'
const CategoriesPreview=()=> {
const {categoriesMap}=useContext(CategoriesContext)
    return (
        <Fragment>
            {Object.keys(categoriesMap).map((title) => (
                <Fragment key={title}>
                <Link className='title' to={title}><h2>{title}</h2></Link>
                    
                    <div className='product-container'>
                      {categoriesMap[title].map((product)=> {
                       return <div key={product.id}>
                              <ProductCard product={product}/>
                            </div>}
            )}
    </div>
                </Fragment>))}
        </Fragment>

    )
}
export default CategoriesPreview