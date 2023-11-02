import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./CustomerForm.module.css"

export default function CustomerForm() {
  const navigate = useNavigate();
  class Customer {
    constructor() {}

    FirstName = "";
    LastName = "";
    AddressType = "";
    City = "";
    Surburb = "";
    StreetName = "";
    PostalCode = 0;
  }

  let customer = new Customer();

  async function Signup(Customer) {
    fetch("https://localhost:7290/Customer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Customer),
    }).then(() => {
      localStorage.setItem("dataKey", JSON.stringify(customer));
      navigate("/home");
    });
  }
  return (
    <>
      <div className={style.parentC}>
        <div className={style.container}>
          <h1>Sign Up</h1>
          <label>FirstName</label>
          <br />
          <input onChange={(e) => (customer.FirstName = e.target.value)} />
          <br />

          <label>LastName</label>
          <br />
          <input onChange={(e) => (customer.LastName = e.target.value)} />
          <br />

          <label>AddressType</label>
          <br />
          <input onChange={(e) => (customer.AddressType = e.target.value)} />
          <br />

          <label>City</label>
          <br />
          <input onChange={(e) => (customer.City = e.target.value)} />
          <br />

          <label>Surburb</label>
          <br />
          <input onChange={(e) => (customer.Surburb = e.target.value)} />
          <br />

          <label>StreetName</label>
          <br />
          <input onChange={(e) => (customer.StreetName = e.target.value)} />
          <br />

          <label>Postal Code</label>
          <br />
          <input onChange={(e) => (customer.PostalCode = e.target.value)} />
          <br />

          <button onClick={() => Signup(customer)} className={style.btn}>Sign up</button>
        </div>
      </div>
    </>
  );
}
