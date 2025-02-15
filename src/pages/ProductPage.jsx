/* eslint-disable array-callback-return */
import React, { useContext, useState } from "react";
import { Context } from "../index";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CardItem from "../components/CardItem";
// import FilterByRange from "../components/UI/select/filterByRange";
// import PriceSelect from "../components/UI/select/priceSelect";
import OffCanvasModal from "../components/Modals/Offcanvas/Offcanvas";

export default function ProductPage() {
  const { dataArray } = useContext(Context);
  const params = useParams();
  const routeTypeParam = params.types;
  const [selectedSort, setSelectedSort] = useState([]);
  const [sliderValue, setSliderValue] = useState([0, 30000]);

  const valuePrice = dataArray.products.toSorted((a, b) => {
    return a.price > b.price ? 1 : -1;
  });

  const sortCard = dataArray.products.toSorted((a, b) => {
    if (selectedSort === "name") {
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    } else if (selectedSort === "rating") {
      return a.rating > b.rating ? -1 : 1;
    }
  });

  // фильруем весь исходный arr и и фильтруем по типу
  const filterTypes = dataArray.products.filter((item) => {
    if (item.types === routeTypeParam) {
      return item;
    }
  });

  // в отфильр-м arr нах-м макс-е зн-е price
  var maxPrice = Math.max(
    ...filterTypes.map((item) => {
      return Number(item.price);
    })
  );

  const priceFind = valuePrice.filter((value) => {
    return value.price >= sliderValue[0] && value.price <= sliderValue[1];
  });

  return (
    <>
      <Container className="ProductPage">
        <h2 className="textTypeProduct">{routeTypeParam}</h2>
        <div className="headerCanvasModal">
          <OffCanvasModal
            selectedSort={selectedSort}
            setSelectedSort={setSelectedSort}
            sliderValue={sliderValue}
            setSliderValue={setSliderValue}
            maxPrice={maxPrice}
          />
        </div>
        <div className="ProductPageContainer">
          {selectedSort === `price` ? (
            <Row className="RowProduct">
              {priceFind.map((card) => {
                if (card.types === routeTypeParam) {
                  return <CardItem key={card.id} card={card} />;
                }
              })}
            </Row>
          ) : (
            <Row className="RowProduct">
              {sortCard.map((card) => {
                if (card.types === routeTypeParam) {
                  return <CardItem key={card.id} card={card} />;
                }
              })}
            </Row>
          )}
        </div>
      </Container>
    </>
  );
}
