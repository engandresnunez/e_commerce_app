import React, { useContext } from "react";
import "./cart.css";
import { productList } from "../../products";
import { ShopContext } from "../../context/shop_context";
import { CartItem } from "./cart_Item";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCost } = useContext(ShopContext);
  const totalAmount = getTotalCost();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your cart items</h1>
      </div>
      <div className="cartItems">
        {productList.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {/* Conditional to verify if cart is empty */}
      {totalAmount > 0 ? 
      <div className="checkout">
        <p>Subtotal: ${totalAmount}</p>
        <button onClick={() => navigate("/")}>Continue Shoping</button>
        <button>Checkout</button>
      </div>
      : <h1>No items in cart</h1> }
    </div>
  );
};
