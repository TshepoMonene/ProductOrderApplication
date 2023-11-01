import React, { useState, useEffect } from "react";
import style from "./CartItems.module.css";

export default function CartItems() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [order, setOrder] = useState({});
  var customers = {};
  useEffect(() => {
    customers = JSON.parse(localStorage.getItem("dataKey"));

    getCart();
    calculateTotal();
  }, []);

  function calculateTotal() {
    var sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum = sum + cart[i].price;
    }
    console.log(sum);
    setTotal(sum);
  }

  async function getCart() {
    await fetch("https://localhost:7290/Oder/" + customers.FirstName, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setCart(data);
        calculateTotal();
      });
  }

  async function deleteItem(productId) {
    setOrder({
      customer: JSON.parse(localStorage.getItem("dataKey")),
      productId: productId,
    });
    console.log(order);
    await fetch("https://localhost:7290/Oder", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    });
  }
  return (
    <>
      <div className={style.parentBox}>
        {cart.map((cart) => (
          <div key={cart.id} className={style.container}>
            <div className={style.imgstyle}>
              <img
                src={require(`${cart.imageUrl}`)}
                style={{ width: "100px", height: "100px" }}
              />
            </div>
            <h3 className={style.text}>{cart.name}</h3>
            <h3 className={style.text}>R {cart.price}</h3>
            <button
              className={style.btnAdd}
              onClick={() => {
                deleteItem(cart.id);
              }}
            >
              Remove
            </button>
          </div>
        ))}

        <h1>Total:R {total}</h1>
        <button className={style.btnChck}>CheckOut</button>
      </div>
    </>
  );
}
