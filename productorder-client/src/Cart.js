import React, { useState } from "react";
import CartItems from "./CartItems";

export default function Cart() {
  return (
    <>
      <div>
        <div>
          <h1>Cart</h1>
          <CartItems></CartItems>
        </div>
      </div>
    </>
  );
}
