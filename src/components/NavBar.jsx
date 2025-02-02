import React, { useContext } from "react";
import { Context } from "../index";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  SHOP_ROUTE,
  BASKET_ROUTE,
} from "../utils/constans";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Home from "../img/home.svg";
import productBasket from "../img/productCard.svg";
import EmptyBasket from "../components/Basket/shopingCard/EmptyBasket";
import { CardContext } from "../App";
import LikedProductModal from "./Modals/likePage/LikedProductModal";
import SearchToProduct from "./Modals/Search/searchToProduct";
import BurgerModal from "../components/Modals/NavBarModal/burgerModal";

export default function NavBar() {
  const navigate = useNavigate();
  const { user } = useContext(Context);
  const { cardToBasket, setCardToBasket } = useContext(CardContext);

  const { cardToLiked, setCardToLiked } = useContext(CardContext);

  function logOut() {
    user.setUser({});
    user.setIsAuth(false);
  }

  return (
    <>
      <Navbar className="NavBar">
        <Container>
          <NavLink
            className="Logo"
            to={SHOP_ROUTE}
            logostyle="Яблоко раздора"
          ></NavLink>

          <BurgerModal
            navigate={navigate}
            cardToLiked={cardToLiked}
            setCardToLiked={setCardToLiked}
            cardToBasket={cardToBasket}
            setCardToBasket={setCardToBasket}
          />

          {user.isAuth ? (
            <Nav className="ml-auto">
              <Button
                variant={"light"}
                onClick={() => navigate(ADMIN_ROUTE)}
                className="NavBar-Btn"
              >
                Войти
              </Button>
              <Button
                variant={"light"}
                onClick={() => navigate(ADMIN_ROUTE)}
                className="NavBar-Btn"
              >
                Администрирование
              </Button>
              <Button
                variant={"light"}
                onClick={() => navigate(SHOP_ROUTE)}
                className="NavBar-Btn"
              >
                <img className="homeBtn" src={Home} alt="Logo" />
              </Button>
            </Nav>
          ) : (
            <Nav className="ml-auto">
              <Button
                variant={"light"}
                onClick={() => navigate(LOGIN_ROUTE)}
                className="NavBar-Btn"
              >
                Авторизация
              </Button>
              <Button
                variant={"light"}
                onClick={() => logOut()}
                className="NavBar-Btn"
              >
                Выйти
              </Button>
              <SearchToProduct />
              <Button
                className="NavBar-Btn"
                variant={"light"}
                onClick={() => navigate(SHOP_ROUTE)}
              >
                <img className="homeBtn" src={Home} alt="Home" />
              </Button>

              {cardToBasket.length === 0 ? (
                <EmptyBasket />
              ) : (
                <Button
                  data-tip="Корзина товаров"
                  className="NavBar-Btn "
                  variant={"light"}
                  onClick={() => navigate(BASKET_ROUTE)}
                >
                  <img className="homeBtn" src={productBasket} alt="Basket" />
                  {cardToBasket.length}
                </Button>
              )}
              {cardToLiked.length >= 1 ? (
                <div>
                  <LikedProductModal
                    cardToLiked={cardToLiked}
                    setCardToLiked={setCardToLiked}
                    cardToBasket={cardToBasket}
                    setCardToBasket={setCardToBasket}
                  ></LikedProductModal>
                </div>
              ) : null}
            </Nav>
          )}
        </Container>
      </Navbar>
      {/* <hr className="hr"/> */}
    </>
  );
}
