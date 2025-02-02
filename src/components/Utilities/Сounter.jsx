import React, { useState } from "react";

const Counter = ({ product, cardToBasket, setCardToBasket }) => {
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
    let currentCounter = cardToBasket.find((item) => item.id === id)?.count;
    if (currentCounter === 1) {
      setCardToBasket((prev) => prev.filter((item) => item.id !== id));
    } 
    else {
      setCardToBasket((prev) =>
        prev.map((item) => {
          if (item.id === id) {
            return { ...item, count: item.count - 1 };
          }
          return item;
        })
      );
    };
  };

  const productCount = (id) => {
    if (cardToBasket !== undefined) {
      let count = 0;
      cardToBasket.find((item) => {
        if (item.id === id) {
          count = +item.count;
        }
        return 0;
      });
      return count;
    }
  };

  return (
    <div className="CounterBtn">
      <button className="btnCount" onClick={() => plusOneCard(product.id)}>
        +
      </button>
      <div className="count">{productCount(product.id)}</div>
      <button
        className="btnCount"
        onClick={() => {
          minusOneCard(product.id);
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
