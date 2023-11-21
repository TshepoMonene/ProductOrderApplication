import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaUserLock } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { observer } from "mobx-react";
import { Login } from "./Login";

export default observer(function LoginForm() {
  const navigate = useNavigate();
  var login = new Login();

  async function UserLogin(login) {
    try {
      var response = await fetch("https://localhost:7290/Login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(login),
      });

      if (response.status == 200) {
        var results = await response.json();
        sessionStorage.setItem("MyCustomer", JSON.stringify(results));
        navigate("/home");
      } else {
        console.log("errorqw");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="d-flex align-items-center justify-content-center mt-4">
      <Form className="row w-25 ">
        <IconContext.Provider value={{ size: "80px", color: "#4D4DFF" }}>
          <FaUserLock />
        </IconContext.Provider>

        <Form.Group className="mb-3 " controlId="">
          <Form.Label> Email</Form.Label>
          <Form.Control
            className=""
            type="name"
            placeholder=""
            onChange={(e) => (login.Email = e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label> Password</Form.Label>
          <Form.Control
            type="password"
            placeholder=""
            onChange={(e) => (login.Password = e.target.value)}
          />
        </Form.Group>
        <Button
          className="w-50 m-auto"
          variant="outline-primary "
          onClick={() => {
            UserLogin(login);
          }}
        >
          Sign in
        </Button>
      </Form>
    </div>
  );
});
