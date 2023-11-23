import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import style from "./Cart.module.css";
import NavBar from "./NavBar";

export default function Cart() {
  const [orders, setOrder] = useState([]);

  async function getOrders() {
    try {
      var customer = JSON.parse(sessionStorage.getItem("MyCustomer"));
      var response = await fetch("https://localhost:7290/Oder/" + customer.id, {
        method: "GET",
      });
      if (response.status == 200) {
        var results = await response.json();
        setOrder(results);
      } else {
        console.log("error");
      }
    } catch (error) {}
  }

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div>
      <NavBar></NavBar>
      <div className={style.title}>
        <h1>My Cart</h1>
      </div>
      <CartItem orders={orders} getOrders={getOrders}></CartItem>
    </div>
  );
}
