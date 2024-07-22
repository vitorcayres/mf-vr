import React from "react";
import * as S from "./styled";

const Button = ({ title, onClick}) => (
    <S.Button type="button" onClick={onClick}>{title}</S.Button>
);

export default Button;
