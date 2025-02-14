import { useState } from "react";
import { Button, Nav } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  LOGIN_ROUTE,
  SHOP_ROUTE,
  BASKET_ROUTE,
} from "../../../utils/constans";
import SearchToProduct from "../Search/searchToProduct";
import LikedProductModal from "../../Modals/likePage/LikedProductModal";
import productBasket from "../../../img/productCard.svg"
import BurgerModalImg from "../../../img/Navigation/burgerModal.svg";

export default function BurgerModal({
  navigate,
  cardToLiked,
  setCardToLiked,
  cardToBasket,
  setCardToBasket,
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="burgerModal">
      <button onClick={handleShow} className="burgerModalBtn">
        <img className="burgerModalImg" src={BurgerModalImg} alt="BurgerModal" />
      </button>
      <Offcanvas
        className="offcanvas-top burgerModal"
        show={show}
        onHide={handleClose}
        placement="top"
      >
        <Offcanvas.Header>
          <Offcanvas.Title>Навигация</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="burgerModalNav">
            <Button
              variant={"light"}
              onClick={() => navigate(LOGIN_ROUTE)}
              className="NavBar-Btn"
            >
              Авторизация
            </Button>
            {/* <Button
              variant={"light"}
              onClick={() => logOut()}
              className="NavBar-Btn"
            >
              Выйти
            </Button> */}
            <SearchToProduct />
            <Button
              className="NavBar-Btn"
              variant={"light"}
              onClick={() => navigate(SHOP_ROUTE)}
            >
              Домой
            </Button>
            <Button
              data-tip="Корзина товаров"
              className="NavBar-Btn "
              variant={"light"}
              onClick={() => navigate(BASKET_ROUTE)}
            >
              Корзина товаров
              <img className="homeBtn" src={productBasket} alt="Basket" />
                  {cardToBasket.length}
            </Button>
            <LikedProductModal
              cardToLiked={cardToLiked}
              setCardToLiked={setCardToLiked}
              cardToBasket={cardToBasket}
              setCardToBasket={setCardToBasket}
            ></LikedProductModal>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
