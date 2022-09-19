// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    SignInWithRedirect,
    SignInWithPopup,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPMwNMFMHxWVEbaA0UCfX00f61mkNOEM8",
  authDomain: "ztm-project-2cf7a.firebaseapp.com",
  projectId: "ztm-project-2cf7a",
  storageBucket: "ztm-project-2cf7a.appspot.com",
  messagingSenderId: "417221740021",
  appId: "1:417221740021:web:af81936f2fc659a79e4cbc"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});
export const auth=getAuth();
export const signInWithGooglePopup = ()=> signInWithPopup(auth, provider)
export const db=getFirestore();
export const createUserDocumentFromAuth=async (userAuth)=> {
    const userDocRef =doc(db,'users', userAuth.uid)
    const userSnapshot= await getDoc(userDocRef)
    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt=new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        }
        catch(error) {
            console.log('error creating the user', error.mess)
        }
    }
    return userDocRef
}