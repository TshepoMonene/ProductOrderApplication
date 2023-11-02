import React, { useState } from "react";
import CartItems from "./CartItems";
import Nav from "./Nav";

export default function Cart() {
  return (
    <>
      <div>
          <div>
          <Nav></Nav>
            <h1>Cart</h1>          
          <CartItems></CartItems>
            
          </div>
      </div>
    </>
  );
}
