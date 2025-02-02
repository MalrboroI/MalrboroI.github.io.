import React, { useState, createContext, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import APPROUTER from "./components/APPROUTER";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export const CardContext = createContext();

export default function App() {
  const [cardToBasket, setCardToBasket] = useState([]);

  const [cardToLiked, setCardToLiked] = useState([]);

  useEffect(() => {
    if (localStorage.getItem(`Basket`) !== null) {
      setCardToBasket(JSON.parse(localStorage.getItem(`Basket`)));
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem(`Liked`) !== null) {
      setCardToLiked(JSON.parse(localStorage.getItem(`Liked`)));
    }
  }, []);

  const value = {
    cardToBasket,
    setCardToBasket,
    cardToLiked,
    setCardToLiked,
  };

  return (
    <CardContext.Provider value={value}>
      <BrowserRouter>
        <NavBar />
        <APPROUTER />
        <Footer />
      </BrowserRouter>
    </CardContext.Provider>
  );
}
