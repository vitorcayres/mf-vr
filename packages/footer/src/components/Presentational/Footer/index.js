import React from "react";
import IconLogo from "../Icons/Logo";
import * as S from "./styled";

const Footer = () => (
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <S.Container className="col-md-12 d-flex align-items-center">
      <IconLogo />

      <span className="mb-md-0 text-body-secondary">
        © 2024 VR Benefícios - Todos os direitos reservados
      </span>
    </S.Container>
  </footer>
);

export default Footer;
