import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 75px 175px 75px 175px;
`;

export const Button = styled(Link)`
  padding: 12px 16px 10px 16px;
  font-size: 18px;
  font-size: 1rem;
  line-height: 1.25;
  background-color: #fff;
  border-radius: 0.25rem;
  text-decoration: none;
  font-weight: 700;
  color: #aa9b70;
  text-align: center;
  box-shadow: inset 0 0 0 2px #aa9b70;
  transition: all 0.15s ease;

  &:hover {
    color: #363636;
  }
`;