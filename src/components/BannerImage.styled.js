import styled from 'styled-components';

export const BannerImageContainer = styled.div`
  height: 400px;
  width: 100vw;
  background: url(${(props) => props.image});
  background-size: cover;
  background-attachment: fixed;
`;

export const BannerTitle = styled.div``;

export const BannerSubTitle = styled.div``;
