import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;

  height: 200px;
  background-color: #111111;
  margin-top: 75px;
  padding-top: 48px;
`;

export const FooterLink = styled(Link)`
  display: flex;

  width: 200px;
  padding: 8px 12px 8px 12px;
  margin: 0px 12px 12px 12px;
  color: #f5f5f5;
  text-decoration: none;
  border-radius: 2px;

  &:hover {
    color: #111111;
    background-color: #fafafa;
  }
`;
