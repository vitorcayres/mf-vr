import React from "react";
import Button from "../Button";
import * as S from "./styled";

const Card = ({ title, description, image, price, buttonTitle, onClick }) => (
  <div className="col">
    <S.Card>
      <img src={image} alt="card" />
      <S.Title>
        <h5>{title}</h5>
        <p>{description}</p>
      </S.Title>
      <S.Action>
        <p>{price}</p>
        <Button title={buttonTitle} onClick={onClick} />
      </S.Action>
    </S.Card>
  </div>
);

export default Card;
