import React from "react";
import CartContext from "./cart-context";

const CartProvider = ({ children }) => {
  const addItemToCarthandler = (item) => {};
  const removeItemFromCartHandler = (id) => {};
  const cartContext = {
    item: [],
    totalAmount: 0,
    addItem: addItemToCarthandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
