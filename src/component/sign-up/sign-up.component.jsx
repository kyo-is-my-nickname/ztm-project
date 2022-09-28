import { useState } from "react";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import FormInput from "../form-input/form-input.component";
import './sign-up.styles.scss'
import Button from "../button/button.component";
// import UserContext from "../../contexts/user.context";
const defaultsignField={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}

const SignUp = ()=> {
    const [signField,setSignField]=useState(defaultsignField);
    const {displayName, email, password, confirmPassword}=signField;
    const resetSignField=()=> {
    setSignField(defaultsignField)
}
    // const { currentUser,setCurrentUser }=useContext(UserContext)
    const handleSubmit=async(event)=> {
    event.preventDefault();
    if(password ==!confirmPassword) {
        alert('password is not match');
        return}

    try{
     const {user} = await createAuthUserWithEmailAndPassword(email, password)
     await createUserDocumentFromAuth(user, {displayName})
    //  setCurrentUser(user);
    //  console.log(currentUser)
     resetSignField();
}
    catch(error) {
     if (error.code==='auth/email-already-in-use') {
        alert('cannot create user, email already in use')
     }
     else {
     console.log("user creation have an error", error) }
}    }

    const handleChange=(event)=> {
     const  {name, value}=event.target;
     setSignField({...signField,[name]:value})
}
    return <div className="sign-up-container">
    <h2>Don't have an account?</h2>
    <span>Sign up with email and password</span>
    <form onSubmit={handleSubmit}>
     <FormInput label='Name'
               type='text' 
               required 
               name="displayName" 
               value={displayName} 
               onChange={handleChange} />
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
     <FormInput label='Confirm Password'
               type='password' 
               required 
               name="confirmPassword" 
               value={confirmPassword} 
               onChange={handleChange} />
     <Button buttonType='inverted' type="submit" >Sign Up </Button>
    </form>
    </div>
    
}
export default SignUp