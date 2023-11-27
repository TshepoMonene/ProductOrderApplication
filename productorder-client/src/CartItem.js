import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import NavBar from "./NavBar";
import style from "./CartItem.module.css";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import Modal from "react-bootstrap/Modal";

export default function CartItem({ orders, getOrders }) {
  const [reload, setReload] = useState(0);
  const [Total, setTotal] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  async function deleteOrder(order) {
    try {
      var response = await fetch("https://localhost:7290/Oder/" + order.id, {
        method: "Delete",
      });

      if (response.status == 200) {
        console.log("ok");
        getOrders();
      }
    } catch {}
  }

  async function AddQuantity(order) {
    var operation = "Add";
    try {
      var response = await fetch(
        "https://localhost:7290/Oder/?id=" +
          order.orderDetails.id +
          "&operation=1",
        {
          method: "PUT",
        }
      );

      if (response.status == 200) {
        console.log("ok");
        getOrders();
      }
    } catch {}
  }
  async function reduceQuantity(order) {
    try {
      var response = await fetch(
        "https://localhost:7290/Oder/?id=" +
          order.orderDetails.id +
          "&operation=2",
        {
          method: "PUT",
        }
      );

      if (response.status == 200) {
        console.log("ok");
        getOrders();
        setReload(reload + 1);
      }
    } catch {}
  }

  function calculateTotal(orders) {
    var sum = 0;
    orders.forEach((element) => {
      sum += element.orderDetails.total;
    });

    setTotal(sum);
  }
  async function Checkout() {
    var customer = JSON.parse(sessionStorage.getItem("MyCustomer"));

    try {
      var response = await fetch(
        "https://localhost:7290/Checkout/" + customer.id,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status == 200) {
        handleShow();
        getOrders();
      }
    } catch (error) {}
  }
  useEffect(() => {
    calculateTotal(orders);
  });
  return (
    <>
      {orders.map((order) => (
        <div>
          <div className={style.container}>
            <img
              src={require(`${order.orderDetails.product.imageUrl}`)}
              alt="image"
              className={style.pic}
            ></img>
            <h3 className={style.text}>{order.orderDetails.product.name}</h3>
            <h3 className={style.text}> R{order.orderDetails.total}</h3>
            <div className={style.quantity}>
              <Button
                className={style.btnQuantity}
                onClick={() => {
                  reduceQuantity(order);
                }}
              >
                <FaMinus />
              </Button>
              <div className={style.qty}>
                <h3 className={style.text}>{order.orderDetails.quantity}</h3>
              </div>

              <Button
                className={style.btnQuantity}
                onClick={() => {
                  AddQuantity(order);
                }}
              >
                <FaPlus />
              </Button>
            </div>
            <button
              className={style.btnTrash}
              onClick={() => {
                deleteOrder(order);
              }}
            >
              <IconContext.Provider value={{ size: "40px", color: "red" }}>
                <FaTrash />
              </IconContext.Provider>
            </button>
          </div>
        </div>
      ))}

      <div className={style.info}>
        <h1>Total:R {Total.toFixed(2)}</h1>
        <Button
          onClick={() => {
            Checkout();
          }}
        >
          CheckOut
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>CheckOut</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thank you for your Purchase!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
