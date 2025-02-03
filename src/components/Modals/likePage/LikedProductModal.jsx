import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import heart from "../../../img/Navigation/heart.svg";
import LikedCard from "./components/LikedCard";
import CartHeader from "./components/CartHeader";

export default function LikedProductModal({
  cardToLiked,
  setCardToLiked,
  cardToBasket,
  setCardToBasket,
}) {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  useEffect(() => {
    localStorage.setItem(`Liked`, JSON.stringify(cardToLiked));
  }, [cardToLiked]);

  return (
    <>
      <Button
        data-tip="Избранное"
        className="NavBar-Btn burgerLikedBtn"
        variant={"light"}
        onClick={() => handleShow(true)}
      >
        <img className="homeBtn" src={heart} alt="Basket" />
        {cardToLiked.length}
      </Button>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title className="modalText">Избранное</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section className="cart">
            <CartHeader />
            {cardToLiked.map((item) => (
              <LikedCard
                key={item.id}
                item={item}
                setCardToLiked={setCardToLiked}
                cardToBasket={cardToBasket}
                setCardToBasket={setCardToBasket}
              />
            ))}
          </section>
        </Modal.Body>
      </Modal>
    </>
  );
}
