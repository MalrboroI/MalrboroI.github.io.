/* eslint-disable eqeqeq */
import React, { useContext } from "react";
import TabMain from "../components/TabsMain";
import { Context } from "../index";
import {
  Container,
  Col,
  Image,
  Row,
  Card,
  Button,
  ListGroup,
} from "react-bootstrap";
import formatPrice from "../components/Utilities/priceFormatter";
import { useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Counter from "../components/Utilities/Сounter";
import { CardContext } from "../App";

const ProductCard = () => {
  const { dataArray } = useContext(Context);
  const params = useParams();
  const id = params.id;
  const product = dataArray.products.find((item) => item.id == id);
  const { cardToBasket, setCardToBasket } = useContext(CardContext);

  const addToBasket = (card) => {
    setCardToBasket((prev) => [
      ...prev,
      {
        ...card,
        count: 1,
      },
    ]);
  };

  return (
    <Container className="mt-5">
      <Row className="productCardRow">
        {/* Чтобы колонки не переходили на новую строку, оберачиваем все в Row */}
        <Col md-4 className="productCardImg">
          <Image className="imgPage" src={product.img1} />
        </Col>
        <Card className="cardProductPage">
          <h3>
            {" "}
            <span className="textName">{product.name}</span>
          </h3>
          <h4>От: {formatPrice(product.price)} руб. </h4>
          <div>
            <ListGroup className="textGroup">
              <p>Артикул: {product.info.Article}</p>
              <p>Наличие: {product.info.Availability}</p>
              <p>
                Статус:{" "}
                <span className="textStatus"> {product.info.Status}</span>
              </p>
            </ListGroup>
            <DropdownButton
              id="dropdown-basic-button"
              title="Выбрать объем"
              className="DropdownBtn"
            >
              <Dropdown.Item className="actionDpropdownBtn" href="#/size-1">
                {product.size.One} мл.
              </Dropdown.Item>
              <Dropdown.Item className="actionDpropdownBtn" href="#/size-2">
                {product.size.Two} мл.
              </Dropdown.Item>
              <Dropdown.Item className="actionDpropdownBtn" href="#/size-3">
                {product.size.Three} мл.
              </Dropdown.Item>
            </DropdownButton>
            <hr />
            <div className="CounterNum">
              Колличество
              <Counter product={product}
              cardToBasket={cardToBasket}
              setCardToBasket={setCardToBasket}
              dataArray={dataArray}
              />
            </div>
          </div>
          {cardToBasket.find((card) => card.id === product.id) ? (
            <div>
              <Button className="buyBtn" variant={"outline-dark"} disabled>
                Купить
              </Button>
            </div>
          ) : (
            <div>
              <Button
                className="buyBtn"
                variant={"outline-dark"}
                onClick={() => addToBasket(product)}
              >
                Купить
              </Button>
            </div>
          )}
        </Card>
      </Row>
      <Row className="d-flex flex-column m-3">
        <div>
          <TabMain id={product.id} productToShow={product} />
        </div>
      </Row>
    </Container>
  );
};

export default ProductCard;
