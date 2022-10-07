import { CATEGORIES_ACTION_TYPES } from "./categories.types";
const INITIAL_STATE={
    categories: [],
    isLoading: false,
    error: null
}
export const categoriesReducer=(state=INITIAL_STATE, action={})=>{
        // console.log(state)
    const {type, payload}=action;
    switch(type) {
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
            return {...state, isLoading: true}
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_CUCCESS:
            return {
                ...state,
                categories: payload,
                isLoading: false
            }
            case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
                return {...state, error: payload, isLoading: false}
            default:
                return state
    }
}