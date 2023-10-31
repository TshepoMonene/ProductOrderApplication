import React, { useState,useEffect } from "react";

export default function CartItems() {

    const [cart,setCart] = useState({});

    useEffect(() => {
        var customer = JSON.parse(localStorage.getItem("dataKey"));
         
      
      }, []);
  return (
    <>
      <div>
          <div>
            <img src=""/>
            <h2>Name</h2>
            <h3>{}</h3>
            
          </div>
      </div>
    </>
  );
}