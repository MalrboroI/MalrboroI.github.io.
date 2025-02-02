import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Search from "../../../img/Navigation/search.svg";
import CardItem from "../../CardItem";
import { Container, Row } from "react-bootstrap";
import { Context } from "../../..";
import SearchToastsBtn from "./searchToastsBtn";

export default function SearchToProduct() {
  const { dataArray } = useContext(Context);
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(``);
  const [searchCard, setSearchCard] = useState([]);
  const [sliderValue, setSliderValue] = useState([0, 30000]);

  // изменяем plaseholder
  const [placeholder, setPlaceholder] = useState("Хочу купить...");
  const handleFocus = () =>
    setPlaceholder("Тип, название или состав");
  const handleBlur = () => setPlaceholder("Хочу купить...");

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const valuePrice = dataArray.products.toSorted((a, b) => {
    return a.price > b.price ? 1 : -1;
  });

  const getCard = () => {
    setSearchCard(valuePrice);
  };

  // задержка при получении вводимого польз. зн-я
  const timeOut = (e) => {
    setTimeout(() => {
      setValue(e.target.value);
    }, 1500);
  };

  const searchToCard = searchCard.filter((card) => {
    return card.tags.toLowerCase().includes(value.toLowerCase());
  });

  const priceFind = searchToCard.filter((value) => {
    return value.price >= sliderValue[0] && value.price <= sliderValue[1];
  });

  useEffect(() => {
    getCard();
  }, []);

  return (
    <>
      <Button
        className="NavBar-Btn"
        variant={"light"}
        onClick={() => handleShow(true)}
      >
        <img className="homeBtn" src={Search} alt="Search" />
      </Button>

      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title className="modalText">Поиск по продукту</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="inputSearch">
            <SearchToastsBtn
              sliderValue={sliderValue}
              setSliderValue={setSliderValue}
              searchToCard={searchToCard}
            />
            <input
              className="inputSearchValue"
              type="search"
              placeholder={placeholder}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={(e) => timeOut(e)}
            />
          </div>
          <Container className="searchProductPage">
            <Row className="searchRowContainer ">
              {priceFind.map((card) => {
                return <CardItem key={card.id} card={card} />;
              })}
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}
