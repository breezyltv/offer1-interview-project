import { Link } from "react-router-dom";
import { MenuDiv, Nav, Logo, NavTitle } from "./styles";

export const Header = () => {
  return (
    <MenuDiv>
      <Nav>
        <Logo>
          <Link to="/">
            <NavTitle>Offer1</NavTitle>
          </Link>
        </Logo>
      </Nav>
    </MenuDiv>
  );
};
