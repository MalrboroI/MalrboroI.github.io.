import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import FilterByRange from "../../Utilities/filterByRange";
import PriceSelect from "../../Utilities/priceSelect";

export default function OffCanvasModal({
  selectedSort,
  setSelectedSort,
  sliderValue,
  setSliderValue,
  maxPrice,
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="OffCanvasModal">
      <button className="searchBtn" onClick={handleShow}></button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Фильтр по товару</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container className="headerSelect">
            <FilterByRange
              value={selectedSort}
              onChange={setSelectedSort}
              defaultValue={`Показать все`}
              options={[
                { value: `name`, name: `По имени` },
                { value: `price`, name: `По цене` },
                { value: `rating`, name: `По рейтингу` },
              ]}
            />
            {selectedSort === "price" ? (
              <PriceSelect
                value={sliderValue}
                setValue={setSliderValue}
                maxPrice={maxPrice}
              />
            ) : (
              ""
            )}
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
