import React, { useState } from "react";
import Basket from "../../../img/productCard.svg";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import productCard from "../../../img/productCard.svg";

export default function EmptyBasket({ }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button  data-tip="Корзина товаров" className="NavBar-Btn" variant={"light"} onClick={handleShow}>
      <img className="homeBtn" src={productCard} alt="Basket" />
      </Button>

      <Modal
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Корзина пуста</Modal.Title>
          <img src={Basket} alt="BasketImg" />
        </Modal.Header>
        <Modal.Footer>
          <Button className="btnClose"  onClick={handleClose}>
            Продолжить покупки
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
