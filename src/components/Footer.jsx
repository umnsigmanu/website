import { FooterContainer, FooterLink } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterLink to='/'>Home</FooterLink>
      <FooterLink to='/about'>About</FooterLink>
      <FooterLink to='/join'>Join Sigma Nu</FooterLink>
      <FooterLink to='/alumni'>Alumni</FooterLink>
      <FooterLink to='/parents'>Parents</FooterLink>
      <FooterLink to='/contact'>Contact Us</FooterLink>
    </FooterContainer>
  );
}