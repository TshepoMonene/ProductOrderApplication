import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
  var customer = "";
  useEffect(() => {
    customer = JSON.parse(sessionStorage.getItem("MyCustomer"));
  }, []);

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Product Order</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/Cart">Cart</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
