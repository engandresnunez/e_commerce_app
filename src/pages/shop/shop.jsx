import React from "react";
import "./shop.css";
import { productList } from "../../products";
import { Product } from "./product";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>NotAmazon Clone</h1>
      </div>
      <div className="products">
        {productList.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
