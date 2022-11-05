import { AnyAction } from "redux";
import { CATEGORIES_ACTION_TYPES, Category } from "./categories.types";
import { fetchCategoriesStart,fetchCategoriesCuccess, fetchCategoriesFailed } from "./categories.action";
export type CategoryState={
    readonly categories: Category[];
    readonly isLoading:boolean;
    readonly error: Error | null;
    
}
const INITIAL_STATE:CategoryState={
    categories: [],
    isLoading: false,
    error: null
}
export const categoriesReducer=(state=INITIAL_STATE, 
                                action={} as AnyAction): CategoryState=>{
    if(fetchCategoriesStart.match(action)) {
        return {...state, isLoading: true}
    }
    if(fetchCategoriesCuccess.match(action)) {
        return {
            ...state,
            categories: action.payload,
            isLoading: false
            }
    }
    if(fetchCategoriesFailed.match(action)) {
        return {
            ...state, 
            error: action.payload, 
            isLoading: false
        }
    }
    return state
    
                                    // switch(action.type) {
    //     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
    //         return {...state, isLoading: true}
    //     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_CUCCESS:
    //         return {
    //             ...state,
    //             categories: action.payload,
    //             isLoading: false
    //         }
    //         case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
    //             return {...state, error: action.payload, isLoading: false}
    //         default:
    //             return state
    // }
}
