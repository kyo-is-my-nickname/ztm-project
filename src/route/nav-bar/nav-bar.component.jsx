import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import CardIcon from '../../component/cart-icon/cart-icon.component'
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component";
import {NavigationContainer, LogoContainer, NavLinks, NavLink} from './navigation.styles.jsx'
import UserContext from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
const NavBar=() => {
    const { currentUser }=useContext(UserContext)
    // const signOutHandler=async ()=> {
    //     await signOutUser();
    //     setCurrentUser(null)
    // }
    const { isCartOpen }=useContext(CartContext)

    return <Fragment>
        <NavigationContainer>
            <NavLink to='/'>
            <LogoContainer> <CrwnLogo /></LogoContainer>
            </NavLink>
            <NavLinks>
            <NavLink to='/shop'>SHOP</NavLink>
            {currentUser ? (<NavLink as='span' onClick= {signOutUser}>SIGN OUT</NavLink>)
            : (<NavLink to='/auth'>SIGN IN</NavLink>)}
            <CardIcon/>
            </NavLinks>
            {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
    </Fragment>
}
export default NavBar