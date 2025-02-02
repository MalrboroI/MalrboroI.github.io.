import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ButtonDelete from "../../../Basket/shopingCard/components/ButtonDelete/index";
import formatPrice from "../../../Utilities/priceFormatter";
import { CARD_ROUTE } from "../../../../utils/constans";
import productCard from "../../../../img/productCard.svg";

const LikedCard = ({ item, setCardToLiked, cardToBasket, setCardToBasket }) => {
  const navigate = useNavigate();

  const deleteProduct = (id) => {
    setCardToLiked((cart) => cart.filter((product) => id !== product.id));
  };

  const addToBasket = (product) => {
    setCardToBasket((prev) => [
      ...prev,
      {
        ...product,
        count: 1,
      },
    ]);
  };

  return (
    <section className="product">
      <a href="" onClick={() => navigate(CARD_ROUTE + "/" + item.id)}>
        <img className="imgShopingCard" src={item.img1}></img>
      </a>
      <div className="product__title">{item.name}</div>
      {cardToBasket.find((card) => card.id === item.id) ? (
        <Button className="BtnInLiked" disabled>
          <img src={productCard} alt="Basket"></img>
        </Button>
      ) : (
        <Button
          id="inLiked"
          className="BtnInLiked"
          onClick={() => addToBasket(item)}
        >
          <img src={productCard} alt="Basket"></img>
        </Button>
      )}
      <div className="product__price">{formatPrice(item.price)} руб.</div>
      <div className="product__controls">
        <ButtonDelete deleteProduct={deleteProduct} id={item.id} />
      </div>
    </section>
  );
};

export default LikedCard;
