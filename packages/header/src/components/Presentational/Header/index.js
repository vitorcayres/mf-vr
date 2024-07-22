import React from "react";
import IconLogo from "../Icons/Logo";
import * as S from "./styled";

const Header = ({ buttonRight }) => {
  return (
    <header>
      <S.Container className="navbar navbar-dark fixed-top shadow-sm p-3">
        <div className="container">
          <IconLogo />
          <div>{buttonRight}</div>
        </div>
      </S.Container>
    </header>
  );
};

export default Header;
