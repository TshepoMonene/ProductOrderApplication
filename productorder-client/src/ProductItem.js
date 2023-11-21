import React, { useEffect, useState } from "react";
import style from "./ProductItem.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Order } from "./Order";

export default function ProductItem({products}) {


  
  useEffect(() => {
   
  }, []);

   async function AddtoCart(){
    var order = new Order();
    var customer = sessionStorage.getItem("MyCustomer");
     
     order.customerId = customer.customerId;
     order.Orderdetails.productId = products.id;

    var results =  await fetch("https://localhost:7290/Oder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    })

    if(results.status == 200){
     console.log("OK");
    }
    else{
      console.log("error");
    }
  }

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
          <Button variant="primary" onClick={() => {AddtoCart()}}>
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
