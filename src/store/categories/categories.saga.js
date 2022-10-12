import { takeLatest, all, call, put } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { fetchCategoriesCuccess, fetchCategoriesFailed } from "./categories.action";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export function* fetchCategoriesAsync() {
    try {
        const categoriesArray=yield call(getCategoriesAndDocuments,'categories')
        yield put(fetchCategoriesCuccess(categoriesArray))
     }
     catch(error) {
        yield put(fetchCategoriesFailed(error))
     }
}

export function* onFetchCategories() {
    yield takeLatest(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
        fetchCategoriesAsync
    )
}
export function* categoriesSaga() {
    yield all([call(onFetchCategories)])
}
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