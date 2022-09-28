import { createContext, useState, useEffect } from "react";
import SHOP_DATA from '../shop-data.json'
// import { onAuthStateChangedListener, signOutUser, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
export const ProductContext=createContext({
    products: [],
    // setCurrentUser: ()=> null
});

export const  ProductProvider=({children})=> {
    const [products,setProducts]=useState(SHOP_DATA);
    const value={products, setProducts}
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}
export default ProductContext