import { NavBar, NavLink } from './NavigationBar.styled';

export const NavigationBar = () => {
  return (
    <NavBar>
      <NavLink to={''}>Home</NavLink>
      <NavLink to={'/about'}>About</NavLink>
      <NavLink></NavLink>
      <NavLink></NavLink>
    </NavBar>
  );
}