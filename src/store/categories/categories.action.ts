import { createAction, Action, ActionWithPayload,withMatcher } from "../../utils/reducer/reducer"
import { CATEGORIES_ACTION_TYPES, CategoryItem, Category } from "./categories.types"
// import { useDispatch } from "react-redux"
// import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils"
export type FetchCategoriesStart=Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>
export type FetchCategoriesCuccess=ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_CUCCESS,Category[]>
export type FetchCategoriesFailed=ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, Error>
export type CategoryAction=FetchCategoriesStart | FetchCategoriesCuccess | FetchCategoriesFailed
   export const fetchCategoriesStart=withMatcher((): FetchCategoriesStart=>
   createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START))
   export const fetchCategoriesCuccess=withMatcher((categoriesArray: Category[]): FetchCategoriesCuccess=>
   createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_CUCCESS,categoriesArray))
   export const fetchCategoriesFailed=withMatcher((error: Error): FetchCategoriesFailed=>
   createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,error))

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
