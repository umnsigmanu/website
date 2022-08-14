import { NavBar, NavBarItem } from './NavigationBar.styled';

import logo from '../images/logo.png';

export const NavigationBar = () => {
  return (
    <NavBar>
      <NavBarItem to={'/'}><img src={logo} style={{maxHeight: '28px'}}/></NavBarItem>
      <NavBarItem to={'/about'}>About</NavBarItem>
      <NavBarItem to={'/join'}>Join Sigma Nu</NavBarItem>
      <NavBarItem to={'/alumni'}>Alumni</NavBarItem>
      <NavBarItem to={'/parents'}>Parents</NavBarItem>
      <NavBarItem to={'/contact'}>Contact Us</NavBarItem>
    </NavBar>
  );
}