import React, { useEffect, useState } from "react";
import style from "./ProductItem.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function ProductItem({ products, updatecount }) {
  const [order, setOrder] = useState({});
  var customer = "";

  class Order {
    constructor() {}
    customer;
    productId;
  }

  useEffect(() => {
    customer = JSON.parse(localStorage.getItem("dataKey"));
    setOrder({
      customer: customer,
      productId: products.id,
    });
  }, []);
  return (
    <>
      <Card style={{ width: "18rem" }} className="m-3">
        <Card.Img
          variant="top"
          src={require(`${products.imageUrl}`)}
          alt="Product Image"
          style={{ height: "200px" }}
        />
        <Card.Body>
          <Card.Title>{products.name}</Card.Title>
          <Card.Text>R: {products.price}</Card.Text>
          <Card.Text>Quantity: {products.quantity}</Card.Text>
          <Button variant="primary" onClick={() => {}}>
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
