import FormInput from '../../component/form-input/form-input.component';
import { useState } from 'react';
import Button from '../button/button.component';
import { signInWithGooglePopup, 
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword }from '../../utils/firebase/firebase.utils'
import './sign-in.styles.scss'
const SignIn=() => {
    const defaultsignField={
        email:'',
        password:''
    }
    const [signField,setSignField]=useState(defaultsignField);
    const  {email, password}=signField;
    const resetSignField=()=> {
    setSignField(defaultsignField)
    }
    const handleChange=(event)=> {
        const  {name, value}=event.target;
        setSignField({...signField,[name]:value})}
        const signInWithGoogle=async() => {
            const {user } = await signInWithGooglePopup();
            await createUserDocumentFromAuth(user)
        }
        
    const handleSubmit=async(event)=> {
        event.preventDefault();
            
        try{
            const response = await signInAuthUserWithEmailAndPassword(email,password)
        resetSignField();
        }
        catch(error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorect password')
                
                    break;
                case 'auth/user-not-found':
                    alert('email not found, please sign up')
                    break;
                default: console.log(error)
                    break;
            }
           
            console.log("user sign in  have an error", error) }
    }  
        return <div className='sign-in-container'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
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
            <div className='button-container'>
                <Button onClick={handleSubmit} type="submit" buttonType='inverted'>Sign In</Button>
                <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google sign in</Button>
            </div>
                   
        </div>
            
}

export default SignIn