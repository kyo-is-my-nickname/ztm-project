import { useParams } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
// import CategoriesContext from "../../contexts/categories.context"
import ProductCard from "../../component/product-card/product-card.component"
import { Fragment } from "react"
import {useSelector} from 'react-redux'
import { selectCategoriesMap } from "../../store/categories/categories.selector"
import './category.styles.scss'
import Spinner from "../../component/spinner/spinner.component"
import { selectCategoriesIsLoading } from "../../store/categories/categories.selector"
type CategoryRouteParams = {
    category: string;
}
const Category=()=>{
    const {category}=useParams<keyof CategoryRouteParams>() as CategoryRouteParams
    const categoriesMap=useSelector(selectCategoriesMap)
    const isLoading=useSelector(selectCategoriesIsLoading)
    // const {categoriesMap}=useContext(CategoriesContext)
    const [products, setProducts]=useState(categoriesMap[category])
    useEffect(()=>{
        setProducts(categoriesMap[category])
    },[categoriesMap, category])
    return <Fragment>
<h2 className="category-title">{category}</h2>
{isLoading ? <Spinner/> : 
<div className="category-container">
    {products && products.map((product)=>{
        return <ProductCard key={product.id} product={product} />
    })}
    </div>
}
    </Fragment> 
}
export default Category
