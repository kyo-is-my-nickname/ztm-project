import {BackgroundImg,BodyContainer, DirecItemContainer} from './directory-item.styles.jsx'
import { useNavigate } from 'react-router-dom';

const DirectoryItem =({category}) => {
    const {title, imageUrl, route}=category;
    const navigate=useNavigate();
const onNavigateChange=()=>{
    navigate(route)
}
    return <DirecItemContainer onClick={onNavigateChange}>
    <BackgroundImg
    imageUrl={imageUrl}
    /> 
   <BodyContainer>
    <div >
   <h2>{title}</h2>
   <p>Shop now</p>
    </div>
   </BodyContainer>
   </DirecItemContainer>
}
export default DirectoryItem