import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'
const NavBar=() => {
    return <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
            <div> <CrwnLogo /></div>
            </Link>
            <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>SHOP</Link>
            <Link to='/auth'>SIGN IN</Link>

            </div>
        </div>
        <Outlet />
    </Fragment>
}
export default NavBar