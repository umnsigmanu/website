import { ProfileContainer, ProfilePicture } from "./MemberProfile.styled";

export const MemberProfile = (props) => {
  return (
    <ProfileContainer>
      <ProfilePicture src={props.image} />
      <h4>{props.name}</h4>
      <h5>{props.position}</h5>
      <h5>{props.email}</h5>
    </ProfileContainer>
  );
}