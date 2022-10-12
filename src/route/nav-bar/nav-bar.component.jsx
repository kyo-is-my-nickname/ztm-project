import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Fragment } from "react";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import CardIcon from '../../component/cart-icon/cart-icon.component'
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component";
import {NavigationContainer, LogoContainer, NavLinks, NavLink} from './navigation.styles.jsx'
// import UserContext from "../../contexts/user.context";
// import { CartContext } from "../../contexts/cart.context";
// import { signOutUser } from "../../utils/firebase/firebase.utils";
import { useSelector} from 'react-redux'
import { selectCurrentUser} from '../../store/user/user.selector'
import { selectIsCartOpen } from '../../store/cart/cart.selector'
import { signOutStart } from "../../store/user/user.action";
const NavBar=() => {
    const dispatch=useDispatch()
    // const { currentUser }=useContext(UserContext)
    const currentUser=useSelector(selectCurrentUser)
    const isCartOpen=useSelector(selectIsCartOpen)
    const signOutUserHandle = () =>{
console.log('not here')
return dispatch(signOutStart());
    } 
    // const signOutHandler=async ()=> {
    //     await signOutUser();
    //     setCurrentUser(null)
    // }
    // const { isCartOpen }=useContext(CartContext)

    return <Fragment>
        <NavigationContainer>
            <NavLink to='/'>
            <LogoContainer> <CrwnLogo /></LogoContainer>
            </NavLink>
            <NavLinks>
            <NavLink to='/shop'>SHOP</NavLink>
            {currentUser ? (<NavLink as='span' onClick= {signOutUserHandle}>SIGN OUT</NavLink>)
            : (<NavLink to='/auth'>SIGN IN</NavLink>)}
            <CardIcon/>
            </NavLinks>
            {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
    </Fragment>
}
export default NavBar