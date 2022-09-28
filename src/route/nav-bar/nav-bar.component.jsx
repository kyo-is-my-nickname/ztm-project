import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import CardIcon from '../../component/cart-icon/cart-icon.component'
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component";
import './navigation.styles.scss'
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
        <div className="navigation">
            <Link className="logo-container" to='/'>
            <div> <CrwnLogo /></div>
            </Link>
            <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>SHOP</Link>
            {currentUser ? (<span onClick= {signOutUser} className="nav-link" >SIGN OUT</span>)
            : (<Link to='/auth'>SIGN IN</Link>)}
            <CardIcon/>
            </div>
            {isCartOpen && <CartDropdown />}
        </div>
        <Outlet />
    </Fragment>
}
export default NavBar