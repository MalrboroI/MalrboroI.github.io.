import React from "react";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../index";
import { Row } from "react-bootstrap";
import CardItem from "./CardItem";

const CardList = observer(() => {
  const { dataArray } = useContext(Context);
  return (
    <Row className="RowContainer">
      {dataArray.products.map((card) => (
        <CardItem key={card.id} card={card} />
      ))}
    </Row>
  );
});

export default CardList;
