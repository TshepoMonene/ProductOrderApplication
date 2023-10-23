import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import style from "./ProuctList.module.css"
import Cart from "./Cart";
export default function ProuctList() {
  const [products, setProducts] = useState([]);
  async function getProducts() {
    await fetch("http://localhost:5286/Product",{  method:"GET"})
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(products);
    
      });
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div style={{textAlign:"center"}}>
      <Cart/>
      <h2>Products</h2>
      <div className={style.container}>  {products.map((product) => (
        <ProductItem products={product}  key={products.Id} />
      ))}</div>
     
    </div>
  );
}
