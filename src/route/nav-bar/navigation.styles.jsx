import { Link } from 'react-router-dom'
import styled from 'styled-components'
export const NavigationContainer=styled.div`
 height: 70px;
  width: 95%;
  position:fixed;
  font-size: 20px;
  top:0;
  display: flex;
  background-color: white;
  z-index:1;
  padding: 20px 20px 0px 20px;
  justify-content: space-between;
  margin-bottom: 25px;
`
export const LogoContainer=styled.div`
  height: 100%;
  width: 70px;

`
export const NavLinks=styled.div`
width: 50%;
height: 100%;
display:flex;
align-items: center;
justify-content:flex-end;
right: 30px;
`
export const NavLink=styled(Link)`
padding: 10px 15px;
cursor: pointer;
text-decoration: none;
color: black;
`
