import { useParams } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import CategoriesContext from "../../contexts/categories.context"
import ProductCard from "../../component/product-card/product-card.component"
import { Fragment } from "react"
import './category.styles.scss'
const Category=()=>{
    const {category}=useParams()
    const {categoriesMap}=useContext(CategoriesContext)
    const [products, setProducts]=useState(categoriesMap[category])
    useEffect(()=>{
        setProducts(categoriesMap[category])
    },[categoriesMap, category])
    return <Fragment>
<h2 className="category-title">{category}</h2>
<div className="category-container">
    {products && products.map((product)=>{
        return <ProductCard key={product.id} product={product} />

    })}

    </div>
    </Fragment> 
    
}
export default Category
