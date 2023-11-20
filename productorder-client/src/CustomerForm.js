import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaUserLock } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { store } from "./Store";
import { observer } from "mobx-react";
import { Customer } from "./Customer";
import { useId } from "react";

export default observer(function CustomerForm() {
  var customer = new Customer();
  const navigate = useNavigate();
  customer.Id = useId();
  async function Signup(customer) {
    fetch("https://localhost:7290/Customer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(customer),
    }).then(() => {
      console.log(customer);
      store.addCustomer(customer);
      navigate("/home");
    });
  }
  return (
    <div className="d-flex align-items-center justify-content-center mt-4">
      <Form className="row w-25 ">
        <IconContext.Provider value={{ size: "80px", color: "#4D4DFF" }}>
          <FaUserLock />
        </IconContext.Provider>

        <Form.Group className="mb-3 col mt-4" controlId="">
          <Form.Label> FirstName</Form.Label>
          <Form.Control
            className=""
            type="name"
            placeholder=""
            onChange={(e) => (customer.FirstName = e.target.value)}
          />
        </Form.Group>

        <Form.Group
          className="mb-3 col mt-4"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>LastName</Form.Label>
          <Form.Control
            className=""
            placeholder=""
            onChange={(e) => (customer.LastName = e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="email"
            placeholder=""
            onChange={(e) => (customer.City = e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Surburb</Form.Label>
          <Form.Control
            type="email"
            placeholder=""
            onChange={(e) => (customer.Surburb = e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
          <Form.Label>AddressType</Form.Label>
          <Form.Control
            type="email"
            placeholder=""
            onChange={(e) => (customer.AddressType = e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 col" controlId="">
          <Form.Label> StreetName</Form.Label>
          <Form.Control
            type="email"
            placeholder=""
            onChange={(e) => (customer.StreetName = e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label> PostalCode</Form.Label>
          <Form.Control
            type="email"
            placeholder=""
            onChange={(e) => (customer.PostalCode = e.target.value)}
          />
        </Form.Group>
        <Button
          className="w-50 m-auto"
          variant="outline-primary "
          onClick={() => Signup(customer)}
        >
          Sign up
        </Button>
      </Form>
    </div>
  );
});
