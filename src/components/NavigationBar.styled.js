import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBar = styled.nav`
  display: flex;

  min-height: 52px;
  padding-left: 52px;
  background-color: #ffffff;
`;

export const NavBarItem = styled(Link)`
  display: flex;
  align-items: center;

  padding: 8px 12px 8px 12px;
  color: #4a4a4a;
  text-decoration: none;

  &:hover {
    color: #3273dc;
  }
`;
