import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #aa9b70;
  height: 300px;
  width: 300px;
  margin: 10px 0px 10px 0px;

  h4 {
    margin-top: 10px;
    margin-bottom: 0px;
  }

  h5 {
    margin: 0px;
  }
`;

export const ProfilePicture = styled.img`
  height: 200px;
  width: 200px;
`;