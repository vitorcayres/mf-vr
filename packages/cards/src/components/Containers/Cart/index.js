import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import Button from "../../Presentational/Button";
import IconCart from "../../Presentational/Icons/Cart";
import "react-modern-drawer/dist/index.css";
import { useCart } from "../../../contexts/Cart";
import * as S from "./styled";

const Cart = () => {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      <IconCart onClick={toggleDrawer} />{" "}
      {cart.length > 0 && <S.Label>{cart.length}</S.Label>}
      <Drawer open={isOpen} onClose={toggleDrawer} direction="right" size={400}>
        <S.DrawerContainer>
          <S.Header>
            <h5>Compras</h5>
            <S.CloseContent>
              {cart.length > 0 && cart.length}
              <S.IconClose onClick={() => setIsOpen(false)}>x</S.IconClose>
            </S.CloseContent>
          </S.Header>
          {cart.length > 0 ? (
            <S.ListItem>
              {cart.map((item, key) => (
                <S.Item key={key}>
                  <div>
                    <img src={item.thumbnail} alt="" width={50} height={50} />
                    <p>{item.title}</p>
                  </div>
                  <p>{item.price}</p>
                </S.Item>
              ))}
            </S.ListItem>
          ) : (
            <S.EmptyData>
              <p>Nenhum item no carrinho</p>
            </S.EmptyData>
          )}
          <S.Action>
            <Button title={"Concluir compras"} />
            <p onClick={() => setIsOpen(false)}>Cancelar</p>
          </S.Action>
        </S.DrawerContainer>
      </Drawer>
    </React.Fragment>
  );
};

export default Cart;
