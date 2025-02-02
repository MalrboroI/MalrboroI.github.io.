import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserStore from "./store/UserStore";
import ProductStore from "./store/ProductStore";
import "./components/styles/Main.css";

export const Context = createContext(null);

const value = {
  user: new UserStore(), 
  dataArray: new ProductStore(),
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context.Provider value={value}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);
