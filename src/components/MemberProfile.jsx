import { ProfileContainer, ProfilePicture } from "./MemberProfile.styled";

export const MemberProfile = (props) => {
  return (
    <ProfileContainer>
      <ProfilePicture src={props.image} />
      {props.name}
      {props.position}
      {props.email}
    </ProfileContainer>
  );
}