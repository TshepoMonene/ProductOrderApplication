import React, { useState, useEffect } from "react";
import style from "./CartItems.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CartItems() {
  const [cart, setCart] = useState([]);
  const [reload,setReload] = useState(0);
  var order ={};
  var customers = {};
  useEffect(() => {
    customers = JSON.parse(localStorage.getItem("dataKey"));

    getCart();
  
  }, [reload]);

  function calculateTotal() {
    var sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum = sum + cart[i].price;
    }
    return sum;
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
     order = {
      customer: JSON.parse(localStorage.getItem("dataKey")),
      productId: productId,
    };
    console.log(order);
    await fetch("https://localhost:7290/Oder/", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    }).finally(()=>{ 
      notifyDelete();
      setReload(reload+1);});
   
  }

  async function clearCart(){

    order = {
      customer: JSON.parse(localStorage.getItem("dataKey")),
      
    };
    console.log(order);
    await fetch("https://localhost:7290/Checkout", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  }).finally(()=>{
    notify();
     setReload(reload+1);});

  }
  const notify = () => toast.success("Checked Out Successfully !", {
    position: toast.POSITION.TOP_CENTER
  });
  const notifyDelete = () => toast.error("Removed !", {
    position: toast.POSITION.TOP_LEFT
  });


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

        <h1>Total:R {(calculateTotal())}</h1>
        <button className={style.btnChck} onClick={()=>{clearCart()}}>CheckOut</button>
        <ToastContainer />
      </div>
    </>
  );
}
