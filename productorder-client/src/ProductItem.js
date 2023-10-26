import React, { useEffect } from "react";
import style from "./ProductItem.module.css";

export default function ProductItem({ products, updatecount }) {
  var customer = "";
  
  class Order {
    constructor() {}

    customer;
    productId;
  }
  var order = {};
  useEffect(() => {
    customer = JSON.parse(localStorage.getItem("dataKey"));
    order ={
     "customer": customer,
      "productId": products.id
      
    }
    console.log(order);
    console.log(customer);
  }, []);
  return (
    <>
      <div className={style.container}>
        <div>
          <img
            src={products.imageUrl}
            alt="Product Image"
            style={{ width: "200px", height: "200px" }}
          />
        </div>
        <h4 className={style.Emargin}>{products.name}</h4>
        <h5 className={style.Emargin}>R{products.price}</h5>
        <h5 className={style.Emargin}> Qty: {products.quantity}</h5>
        <h6 className={style.Emargin}>{products.description}</h6>
        <button className={style.btnAdd} onClick={() => updatecount(order)}>
          Add to Cart
        </button>
      </div>
    </>
  );
}
