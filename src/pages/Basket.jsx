import React, { useContext, useEffect, useState } from "react";
import CartFooter from "../components/Basket/shopingCard/components/CartFooter";
import CartHeader from "../components/Basket/shopingCard/components/CartHeader";
import Product from "../components/Basket/shopingCard/components/Product";
import { CardContext } from "../App";

export default function Basket() {
  const { cardToBasket, setCardToBasket } = useContext(CardContext);

  const [total, setTotal] = useState({
    price: cardToBasket.reduce((prev, curr) => prev + curr.priceTotal, 0),
    count: cardToBasket.reduce((prev, curr) => prev + curr.count, 0),
  });

  useEffect(() => {
    setTotal({
      price: cardToBasket.reduce((prev, curr) => prev + curr.priceTotal, 0),
      count: cardToBasket.reduce((prev, curr) => prev + curr.count, 0),
    });
  }, [cardToBasket]);

  const deleteProduct = (id) => {
    setCardToBasket((cart) => cart.filter((product) => id !== product.id));
  };

  const increase = (id) => {
    setCardToBasket((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: product.count + 1,
            priceTotal: (product.count + 1) * product.price,
          };
        }
        return product;
      });
    });
  };

  const decrease = (id) => {
    setCardToBasket((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          const newCount = product.count - 1 > 0 ? product.count - 1 : 0;
          return {
            ...product,
            count: newCount,
            priceTotal: newCount * product.price,
          };
        }
        return product;
      });
    });
  };

  const changeValue = (id, value) => {
    setCardToBasket((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: value,
            priceTotal: value * product.price,
          };
        }
        return product;
      });
    });
  };

  
  useEffect(() => {
    localStorage.setItem(`Basket`, JSON.stringify(cardToBasket));
  }, [cardToBasket]);

  return (
    <section className="cart">
      <CartHeader />
      {cardToBasket.map((item) => (
        <Product
          key={item.id}
          item={item}
          deleteProduct={deleteProduct}
          increase={increase}
          decrease={decrease}
          changeValue={changeValue}
        />
      ))}
      <CartFooter total={total} />
    </section>
  );
}
