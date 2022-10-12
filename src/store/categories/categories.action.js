import { createAction } from "../../utils/reducer/reducer"
import { CATEGORIES_ACTION_TYPES } from "./categories.types"
// import { useDispatch } from "react-redux"
// import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils"

   export const fetchCategoriesStart=()=>
   createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)
   export const fetchCategoriesCuccess=(categoriesArray)=>
   createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_CUCCESS,categoriesArray)
   export const fetchCategoriesFailed=(error)=>
   createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,error)
   // export const fetchCategoriesAsync=()=>async(dispatch)=>{
   //    dispatch(fetchCategoriesStart());
   //    try {
   //       const categoriesArray=await getCategoriesAndDocuments('categories')
   //       dispatch(fetchCategoriesCuccess(categoriesArray))
   //    }
   //    catch(error) {
   //       dispatch(fetchCategoriesFailed(error))
   //    }

   // }
