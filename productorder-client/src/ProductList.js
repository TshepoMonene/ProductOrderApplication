import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import style from "./ProuctList.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
import NavBar from "./NavBar";

export default observer(function ProuctList() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
    
  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
     
    try{
      var response =  await fetch('https://localhost:7290/Product', { method: "GET" })

      if(response ==200)
      {
         var results = await response.json();
         setProducts(results);
         console.log(results);
         console.log(products);
      }
      else{

      }
    }
    catch{

    }
     
     
  }
  


  async function updateCount(Order) {
    await fetch("https://localhost:7290/Oder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Order),
    }).then(setCount(count + 1));
  }

 
  return (
    <>
      <NavBar></NavBar>
      <div className={style.Icon}>
        <button onClick={() => navigate("/Cart")} className={style.btnIcon}>
          <IconContext.Provider value={{ size: "40px", color: "blue" }}>
            <div style={{ display: "inline-block" }}>
              <FaShoppingCart />
              </div>

            <div className={style.count}>
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
              key={products.Id}
            />
          ))}
        </div>
      </div>
    </>
  );
});
