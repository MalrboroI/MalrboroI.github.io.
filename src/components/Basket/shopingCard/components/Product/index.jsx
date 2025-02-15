/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonDelete from "../ButtonDelete";
import Count from "../Count";
import formatPrice from "../../../../Utilities/priceFormatter";
import { CARD_ROUTE } from "../../../../../utils/constans";



const Product = ({ item, deleteProduct, increase, changeValue, decrease }) => {
  const navigate = useNavigate();

  return (
    <section className="product">
      <a href="" onClick={() => navigate(CARD_ROUTE + "/" + item.id)}>
        <img className="imgShopingCard" src={item.img1} alt="imgCard"></img>
      </a>
      <div className="product__title">{item.name}</div>
      <div className="product__count">
        <Count
          count={item.count}
          increase={increase}
          decrease={decrease}
          changeValue={changeValue}
          id={item.id}
        />
      </div>
      <div className="product__price">{formatPrice(item.price)} руб.</div>
      <div className="product__controls">
        <ButtonDelete deleteProduct={deleteProduct} id={item.id} />
      </div>
    </section>
  );
};

export default Product;
