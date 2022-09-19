import {Routes, Route} from 'react-router-dom'
import Home from './route/home/home.component'
import NavBar from './route/nav-bar/nav-bar.component';
import SignIn from './route/sign-in/sign-in.component';

const Shop = ()=> {
  return <h1>this is shop page</h1>
}
function App() {
  return <Routes>
  <Route path='/' element={<NavBar/>}>
  <Route index element={<Home/>} />
  <Route path='/shop' element={<Shop/>}/>
    <Route path='/sign-in' element={<SignIn/>}/>
  </Route>
    
  </Routes>
}

export default App;
