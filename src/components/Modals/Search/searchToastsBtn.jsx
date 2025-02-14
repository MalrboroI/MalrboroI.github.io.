import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import PriceSelect from "../../Utilities/priceSelect";

export default function SearchToastsBtn({
  sliderValue,
  setSliderValue,
  searchToCard,
}) {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);

  var maxPrice = Math.max(
    ...searchToCard.map((item) => {
      return Number(item.price);
    })
  );

  return (
    <Row className="searchToastsBtn">
      <Col md={6}>
        <button
          type="button"
          onClick={toggleShow}
          className="searchBtn"
        ></button>
        <Toast className="Toast" show={show} onClose={toggleShow}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Выберете цену</strong>
          </Toast.Header>
          <Toast.Body>
            <PriceSelect
              value={sliderValue}
              setValue={setSliderValue}
              maxPrice={maxPrice}
            />
          </Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}
