import styled from 'styled-components';

export const BannerImageContainer = styled.div`
  height: 400px;
  width: 100vw;
  /* background: url(${(props) => props.lala}); */
  background: url(${(props) => props.image});
  background-size: cover;
  /* background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  overflow: hidden; */
`;

export const BannerTitle = styled.div``;

export const BannerSubTitle = styled.div``;
