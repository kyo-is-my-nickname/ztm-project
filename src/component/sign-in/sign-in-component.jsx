import { useCallback, useState } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCurrentUser } from "../../store/user/user.selector";
import { googleSignInStart, emailSignInStart } from '../../store/user/user.action';
// import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import FormInput from "../form-input/form-input.component";
import './sign-in.styles.scss'
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';

import { signUpStart } from "../../store/user/user.action";
// import UserContext from "../../contexts/user.context";
const defaultsignField={
    email:'',
    password:'',
}

const SignIn = ()=> {
    console.log('hi there')
    const dispatch=useDispatch()
    const currentUser=useSelector(selectCurrentUser)
    const [signField,setSignField]=useState(defaultsignField);
    const { email, password}=signField;
    const navigate=useNavigate()
     const goToHome=()=>{
        navigate('/')
    }
    const resetSignField=()=> {
    setSignField(defaultsignField)
}
    // const { currentUser,setCurrentUser }=useContext(UserContext)
    const handleSubmit=async(event)=> {
    event.preventDefault();
 
    try{
        dispatch(emailSignInStart(email,password))
        
     resetSignField();
     if (currentUser!==null) {
        goToHome()
     }
}
    catch(error) {
        switch ((error).code) {
            case 'auth/wrong-password':
                alert('incorect password')
            
                break;
            case 'auth/user-not-found':
                alert('email not found, please sign up')
                break;
            default: console.log(error)
                break;
        }
       
        console.log("user sign in  have an error", error)  }
   }
   const signInWithGoogle=async() => {
    dispatch(googleSignInStart())
    
    
        // const {user } = await signInWithGooglePopup();
        // setCurrentUser(user)    
    }
    const handleChange=(event)=> {
     const  {name, value}=event.target;
     console.log(event.target)
     setSignField({...signField,[name]:value})

}
    return <div className="sign-ip-container">
    <h2>Don't have an account?</h2>
    <span>Sign up with email and password</span>
    <form onSubmit={handleSubmit}>
 
     <FormInput label='Email'
               type='text' 
               required 
               name="email" 
               value={email} 
               onChange={handleChange} />
     <FormInput label='Password'
               type='password' 
               required 
               name="password" 
               value={password} 
               onChange={handleChange} />
    
    <div className='button-container' >
                <Button  type="submit" >Sign In</Button>
                <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google sign in</Button>
            </div>
    </form>
    </div>
}
export default SignIn