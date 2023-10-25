import React, { useState } from "react";

export default function CustomerForm() {
  class Customer {
    constructor() {  }

     FirstName='';
     LastName='';
     AddressType='';
     City='';
     Surburb='';
     StreetName='';
     PostalCode=0;
  }

  let customer = new Customer();

  async function Signup(Customer){
    fetch("https://localhost:7290/Customer", {method: "POST",  headers: {"Content-Type": "application/json",}, body: JSON.stringify(Customer),} )


  }
  return (
    <>
      <div>
        <div>
          <h1>Sign Up</h1>
          <label>FirstName</label><br/>
          <input onChange={(e)=>customer.FirstName = e.target.value}/><br/>

          <label>LastName</label><br/>
          <input onChange={(e)=>customer.LastName = e.target.value}/><br/>

          <label>AddressType</label><br/>
          <input onChange={(e)=>customer.AddressType = e.target.value}/><br/>

          <label>City</label><br/>
          <input onChange={(e)=>customer.City = e.target.value} /><br/>

          <label>Surburb</label><br/>
          <input onChange={(e)=>customer.FirstName = e.target.value}/><br/>

          <label>StreetName</label><br/>
          <input onChange={(e)=>customer.StreetName = e.target.value}/><br/>

          <label>Postal Code</label><br/>
          <input onChange={(e)=>customer.PostalCode = e.target.value}/><br/>

          <button onClick={()=>Signup(customer)}>Sign up</button>
        </div>
        
      </div>
    </>
  );
}
