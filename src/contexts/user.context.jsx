import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, signOutUser, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
export const UserContext=createContext({
    currentUser: null,
    setCurrentUser: ()=> null
});

export const  UserProvider=({children})=> {
    const [currentUser,setCurrentUser]=useState(null);
    const value={currentUser, setCurrentUser}
    useEffect(()=> {
        const unsubcriber=onAuthStateChangedListener(user=> {
            console.log(user)
            if (user) {
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user)

        })
        return unsubcriber
    },
        [])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
export default UserContext
