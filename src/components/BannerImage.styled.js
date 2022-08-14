import styled from 'styled-components';

export const BannerImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 400px;
  width: 100vw;
  background: url(${(props) => props.image});
  background-size: cover;
  /* background-size: contain; */
  background-attachment: fixed;
`;

export const BannerTitle = styled.h1`
  margin: 10px 0px 10px 0px;
  color: white;
  background-color: #aa9b70;
  padding: 12px;
  font-size: 48px;
`;

export const BannerSubTitle = styled.h3`
  margin: 10px 0px 10px 0px;
  color: white;
  background-color: #aa9b70;
  padding: 6px;
  font-size: 24px;
`;
