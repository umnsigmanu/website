import { NavBar, NavBarItem } from './NavigationBar.styled';

export const NavigationBar = () => {
  return (
    <NavBar>
      <NavBarItem to={''}>Home</NavBarItem>
      <NavBarItem to={'/about'}>About</NavBarItem>
      <NavBarItem to={'/join'}>Join Sigma Nu</NavBarItem>
      <NavBarItem to={'/alumni'}>Alumni</NavBarItem>
      <NavBarItem to={'/parents'}>Parents</NavBarItem>
      <NavBarItem to={'/contact'}>Contact Us</NavBarItem>
    </NavBar>
  );
}