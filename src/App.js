import {Routes, Route} from 'react-router-dom'

import {  lazy, Suspense, useEffect } from "react";
// import { onAuthStateChangedListener, createUserDocumentFromAuth, getCurrentUser } from "./utils/firebase/firebase.utils";
// import { setCurrentUser } from './store/user/user.action';
import {useDispatch} from 'react-redux'
import { checkUserSession } from './store/user/user.action';
import './App.css'
import Spinner from './component/spinner/spinner.component';
const  Home=lazy(()=> import('./route/home/home.component'))
const  NavBar=lazy(()=> import('./route/nav-bar/nav-bar.component'));
const  Authentication=lazy(()=> import('./route/authentication/authentication.component'));
const  Shop =lazy(()=>import('./route/shop/shop.component'));
const Checkout =lazy(()=>import('./route/checkout/checkout.component')); 
function App() {
  const dispatch=useDispatch()
    useEffect(()=> {
        // const unsubcriber=onAuthStateChangedListener(user=> {
        //     console.log(user)
        //     if (user) {
        //         createUserDocumentFromAuth(user)
        //     }
        //     dispatch(setCurrentUser(user))

        // })
        // return unsubcriber
        // getCurrentUser().then((user)=>console.log(user))
        dispatch(checkUserSession())
    },
        [dispatch])
  return (
    <Suspense fallback={<Spinner/>}>
  <Routes>
  <Route path='/' element={<NavBar/>}>
    <Route index element={<Home/>} />
    <Route path='/shop/*' element={<Shop/>}/>
    <Route path='/auth' element={<Authentication/>}/>
    <Route path='checkout' element={<Checkout />} />
  </Route>
  </Routes>
  </Suspense>)
}
export default App;
