import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import style from "./ProuctList.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { useNavigate } from "react-router-dom";



export default function ProuctList() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  

  

  async function getProducts() {
  await fetch("http://localhost:5286/Product", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(products);
      });
  }
  useEffect(() => {
    getProducts();
  }, []);

  function updateCount() {
    fetch("https://localhost:7290/Oder",{})
    setCount(count + 1);
  }
  return (
    <>
      <div className={style.Icon}>
        <button  onClick={()=>navigate("/Cart")}>
          <IconContext.Provider value={{ size: "40px" }}>
            <div style={{ display: "inline-block" }}>
              <FaShoppingCart />
            </div>

            <div
              style={{
                display: "inline-block",
                backgroundColor: "green",
                color: "white",
                width: "25px",
                textAlign: "center",
                borderRadius: "50px",
              }}
            >
              <i>{count}</i>
            </div>
          </IconContext.Provider>
        </button>
      </div>
      <div style={{ textAlign: "center" }}>
        <h2>Products</h2>
        <div className={style.container}>
          {products.map((product) => (
            <ProductItem
              products={product}
              updatecount={updateCount}
              key={products.Id}
            />
          ))}
        </div>
      </div>

     
    </>

    
  );
}
