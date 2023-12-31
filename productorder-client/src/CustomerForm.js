import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaUserLock } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { store } from "./Store";
import { observer } from "mobx-react";
import { Customer } from "./Customer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export default observer(function CustomerForm() {
  var customer = new Customer();
  const navigate = useNavigate();

  const notify = () =>
    toast.error("Error,something bad happend !", {
      position: toast.POSITION.TOP_CENTER,
    });

  async function Signup(customer) {
    var response = await fetch("https://localhost:7290/Customer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(customer),
    });

    if (response.status == 200) {
      navigate("/Login");
    } else {
      notify();
    }
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
        <Form.Group>
          <Form.Label className="mb-3">Email</Form.Label>
          <Form.Control
            className=""
            placeholder=""
            onChange={(e) => (customer.Email = e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            className=""
            placeholder=""
            onChange={(e) => (customer.Password = e.target.value)}
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
          className="w-100 m-auto"
          variant="outline-primary "
          onClick={() => Signup(customer)}
        >
          Sign up
        </Button>
        <h4>or</h4>
        <h3
          className="text-decoration-underline m-6"
          onClick={() => {
            navigate("/Login");
          }}
        >
          Sign In
        </h3>
      </Form>
      <ToastContainer />
    </div>
  );
});
