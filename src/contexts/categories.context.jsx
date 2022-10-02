import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../shop-data";
import { addColectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
export const CategoriesContext=createContext({
    categoriesMap: [],
    // setCurrentUser: ()=> null
});

export const  CategoriesProvider=({children})=> {
    const [categoriesMap,setCategoriesMap]=useState({});
    useEffect(()=>{
        addColectionAndDocuments('categories',SHOP_DATA)
    },[])
    useEffect(()=>{
        const getCategoriesMap= async ()=>{
            const categoryMap=await getCategoriesAndDocuments()
            // console.log(categoryMap)
            setCategoriesMap(categoryMap)
        }
        getCategoriesMap()
    },[])
    const value={categoriesMap}
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}
export default CategoriesContext