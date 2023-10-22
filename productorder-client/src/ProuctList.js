import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

export default function ProuctList() {
  const [products, setProducts] = useState([]);
  async function getProducts() {
    await fetch("https://localhost:7290/Product")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.items);
        console.log(products);
      });
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <ProductItem products={product} />
      ))}
    </div>
  );
}
