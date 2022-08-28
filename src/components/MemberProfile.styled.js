import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* #aa9b70; */
  background-color: rgba(170,155,112,.5);
  height: 300px;
  width: 300px;
  margin: 10px 0px 10px 0px;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(0,0,0,.25);
  /* transition-timing-function: ease-in-out; */

  /* &:hover {
    background-color: rgba(170,155,112,.6);
  } */

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