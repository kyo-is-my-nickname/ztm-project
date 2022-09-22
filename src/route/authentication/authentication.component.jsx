import './authentication.styles.scss'
import SignUp from '../../component/sign-up/sign-up.component';
import SignIn from '../../component/sign-in/sign-in-component';


const Authentication = ()=> {
    
    return (<div className='auth-container'>
        <SignIn />
        <SignUp />
    </div>)
}
export default Authentication