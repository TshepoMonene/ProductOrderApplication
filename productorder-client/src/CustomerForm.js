import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaUserLock } from "react-icons/fa";
import { IconContext } from "react-icons/lib";


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
  <div className="d-flex align-items-center justify-content-center mt-4" >
   
  <Form className="row w-25 ">

  <IconContext.Provider value={{ size: "80px" ,color:'#4D4DFF'}} >
    <FaUserLock />
    </IconContext.Provider>

    <Form.Group className="mb-3 col mt-4" controlId="">
      <Form.Label> FirstName</Form.Label>
      <Form.Control className="" type="name" placeholder="" />
    </Form.Group>

    <Form.Group className="mb-3 col mt-4" controlId="exampleForm.ControlInput1">
      <Form.Label>LastName</Form.Label>
      <Form.Control  className="" type="email" placeholder="" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>City</Form.Label>
      <Form.Control type="email" placeholder="" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Surburb</Form.Label>
      <Form.Control type="email" placeholder="" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="">
      <Form.Label>AddressType</Form.Label>
      <Form.Control type="email" placeholder="" />
    </Form.Group>

    <Form.Group className="mb-3 col" controlId="">
      <Form.Label> StreetName</Form.Label>
      <Form.Control type="email" placeholder="" />
    </Form.Group>

    <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
      <Form.Label> PostalCode</Form.Label>
      <Form.Control type="email" placeholder="" />
    </Form.Group>
    <Button className="w-50 m-auto" variant="outline-primary">Sign up</Button>
    
  
  </Form>
  </div>
    
    
   
            
  );
}
