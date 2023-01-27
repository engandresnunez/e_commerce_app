import React, { createContext, useState } from "react";
import { productList } from "../products";

export const ShopContext = createContext(null);

const myInitialState = () => {
  const cart = {};
  for (let i = 1; i < productList.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(myInitialState());

  // Function to get total cost of items 
  const getTotalCost = () => {
    let totalAmount = 0;
    for (const i in cartItems) {
      if (cartItems[i] > 0) {
        let itemInfo = productList.find((product) => product.id === Number(i));
        totalAmount += cartItems[i] * itemInfo.price;
      }
    }

    return totalAmount;
  };

  // Add to cart function 
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  // Remove from cart function 
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // Funtion to manually update the amount of items. 
  const updateCartItems = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItems,
    getTotalCost
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
