import { BannerImageContainer, BannerTitle, BannerSubTitle } from "./BannerImage.styled"

export const BannerImage = (props) => {
  return (
    <BannerImageContainer image={props.image}>
      <BannerTitle>{props.title}</BannerTitle>
      {props.subTitle && <BannerSubTitle>{props.subTitle}</BannerSubTitle>}
    </BannerImageContainer>
  )
}