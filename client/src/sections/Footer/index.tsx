import { Copyright } from "./components";
import { FooterStyled, FooterContainer } from "./styles";

export const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Copyright />
      </FooterContainer>
    </FooterStyled>
  );
};
