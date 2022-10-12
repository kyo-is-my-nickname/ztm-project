import FormInput from '../../component/form-input/form-input.component';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import UserContext from '../../contexts/user.context';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
// import { signInWithGooglePopup, 
//     createUserDocumentFromAuth,
//     signInAuthUserWithEmailAndPassword }from '../../utils/firebase/firebase.utils'
import { googleSignInStart, emailSignInStart } from '../../store/user/user.action';
import './sign-in.styles.scss'
const SignIn=() => {
    const dispatch=useDispatch()
    const defaultsignField={
        email:'',
        password:''
    }
    const [signField,setSignField]=useState(defaultsignField);
    const  {email, password}=signField;
    const resetSignField=()=> {
    setSignField(defaultsignField)
    }
    // const { setCurrentUser} =useContext(UserContext)
    const handleChange=(event)=> {
        const  {name, value}=event.target;
        setSignField({...signField,[name]:value})}
    const signInWithGoogle=async() => {
        dispatch(googleSignInStart())
            // const {user } = await signInWithGooglePopup();
            // setCurrentUser(user)    
        }
        
    const handleSubmit=async(event)=> {
        event.preventDefault();   
        try{
            dispatch(emailSignInStart(email, password))
            // const {user} = await signInAuthUserWithEmailAndPassword(email,password)
            // setCurrentUser(user)
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
                <Button onClick={handleSubmit} type="submit" >Sign In</Button>
                <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google sign in</Button>
            </div>
                   
        </div>
            
}

export default SignIn