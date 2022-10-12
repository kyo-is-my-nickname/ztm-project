import { Link } from 'react-router-dom'
import { useContext, Fragment } from 'react'
import {useSelector} from 'react-redux'
import { selectCategoriesMap } from '../../store/categories/categories.selector' 
// import CategoriesContext from '../../contexts/categories.context'
import ProductCard from '../../component/product-card/product-card.component'
import './categories-preview.styles.scss'
import { selectCategoriesIsLoading } from '../../store/categories/categories.selector'
import Spinner from '../../component/spinner/spinner.component'
// import './shop.styles.scss'
const CategoriesPreview=()=> {
// const {categoriesMap}=useContext(CategoriesContext)
const categoriesMap=useSelector(selectCategoriesMap)
const isLoading=useSelector(selectCategoriesIsLoading)
    return (
        <Fragment>
        {isLoading ? <Spinner/> : 
        Object.keys(categoriesMap).map((title) => (
                <Fragment key={title}>
                <Link className='title' to={title}><h2>{title}</h2></Link>  
                    <div className='product-container'>
                      {categoriesMap[title].map((product)=> {
                       return <div key={product.id}>
                              <ProductCard product={product}/>
                            </div>}
            )}
    </div>
                </Fragment>))
        }
            
        </Fragment>

    )
}
export default CategoriesPreview