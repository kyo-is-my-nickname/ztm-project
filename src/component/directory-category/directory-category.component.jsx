import './directory-category.styles.scss'
import CategoryItem from '../category-item/category-item.component.jsx'
const DirecCategory =({categories}) => {
    return <div className='categories-container' >
    {categories.map((category)=> {
      return <CategoryItem key={category.id} category={category}/>
    })}
    </div>
}
export default DirecCategory 