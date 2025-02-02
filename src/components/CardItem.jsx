import React, { useContext } from "react";
import { Card, Image, Row, Button } from "react-bootstrap";
import star from "../img/star.png";
import { useNavigate } from "react-router-dom";
import { CARD_ROUTE } from "../utils/constans";
import { CardContext } from "../App";
import Plus from "../img/cardElements/plus.svg";
import Minus from "../img/cardElements/minus.svg";
import heartActive from "../img/Navigation/heartActive.svg";

const CardItem = ({ card }) => {
  const navigate = useNavigate();

  const { cardToBasket, setCardToBasket } = useContext(CardContext);

  const { cardToLiked, setCardToLiked } = useContext(CardContext);

  const addToBasket = (product) => {
    setCardToBasket((prev) => [
      ...prev,
      {
        ...product,
        count: 1,
      },
    ]);
  };

  const addToLiked = (product) => {
    if (cardToLiked.find((item) => item.id === product.id)) {
      setCardToLiked((prev) => prev.filter((item) => item.id !== product.id));
    } else {
      setCardToLiked((prev) => [
        ...prev,
        {
          ...product,
        },
      ]);
    }
  };

  const plusOneCard = (id) => {
    setCardToBasket((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      })
    );
  };

  const minusOneCard = (id) => {
    let currentCounter = cardToBasket.find((item) => item.id === id).count;
    if (currentCounter === 1) {
      setCardToBasket((prev) => prev.filter((item) => item.id !== id));
    } else {
      setCardToBasket((prev) =>
        prev.map((item) => {
          if (item.id === id) {
            return { ...item, count: item.count - 1 };
          }
          return item;
        })
      );
    }
  };

  return (
    <li className="CardLi">
      <Row className="product-grid">
        <Card className="item" src="№">
          <Image className="pic-1" src={card.img1} />
          <Image className="pic-2" src={card.img2} />
          <Button
            className="product-like-icon"
            data-tip="Переместить в избраное"
            onClick={() => addToLiked(card)}
          >
            {cardToLiked.find((item) => item.id === card.id) ? (
              <img src={heartActive}></img>
            ) : (
              <i className="far fa-heart"> </i>
            )}
          </Button>
          {cardToBasket.find((product) => product.id === card.id) ? (
            <div>
              <ul className="product-links">
                <h4 className="cardCount">
                  {cardToBasket.find((product) => product.id === card.id).count}
                </h4>

                <li>
                  <Button
                    className="BuyBtn"
                    type="button"
                    onClick={() => minusOneCard(card.id)}
                  >
                    <img src={Minus}></img>
                  </Button>
                </li>
                <li>
                  <a
                    href=""
                    onClick={() => navigate(CARD_ROUTE + "/" + card.id)}
                  >
                    <i className="fa fa-search"></i>
                  </a>
                </li>
                <li>
                  <Button
                    className="BuyBtn"
                    type="button"
                    onClick={() => plusOneCard(card.id)}
                  >
                    <img src={Plus}></img>
                  </Button>
                </li>
              </ul>
            </div>
          ) : (
            <div>
              <ul className="product-links">
                <li>
                  <a
                    href=""
                    onClick={() => navigate(CARD_ROUTE + "/" + card.id)}
                  >
                    <i className="fa fa-search"></i>
                  </a>
                </li>
                <li>
                  <Button
                    className="BuyBtn"
                    type="button"
                    onClick={() => addToBasket(card)}
                  >
                    <i className="fas fa-shopping-cart"></i>
                  </Button>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-random"></i>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </Card>
        <div className="cardText">
          <div>{card.name}</div>
          <div className="cardRaiting">
            <div>{card.rating}</div>
            <Image width={17} height={17} src={star} />
          </div>
        </div>
        <div>{card.price} руб.</div>
      </Row>
    </li>
  );
};

export default CardItem;
