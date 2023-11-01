import React, { useState,useEffect } from "react";
import style from './CartItems.module.css'

export default function CartItems() {

    const [cart,setCart] = useState([]);
    var [total,setTotal] = useState(0);
    var customer = {};
    useEffect(() => {
        customer = JSON.parse(localStorage.getItem("dataKey"));   
        console.log(customer);
        getCart() 
       
      }, []);

      async function getCart(){
        await fetch("https://localhost:7290/Oder/"+ customer.FirstName, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setCart(data);  
      });
      }
  return (
    <>
      <div className={style.parentBox}>
        {cart.map((cart)=>(
            <div key={cart.id} className={style.container}>
            <div className={style.imgstyle}>
            <img   src={require(`${cart.imageUrl}`) }  style={{ width: "100px", height: "100px" }}/>
            </div>
            <h3 className={style.text}>{cart.name}</h3>
            <h3 className={style.text}>R {cart.price}</h3>    
            <button className={style.btnAdd}>Remove</button>    
          </div>
          
        ))}
        

   
        <h1>Total:R {total}</h1>
      </div>
    </>
  );
}