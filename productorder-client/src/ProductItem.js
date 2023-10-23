import React from "react";
import style from "./ProductItem.module.css"



export default function ProductItem({ products }) {
  return (
    <>
      <div className={style.container}>
        <div>
          <img src = {require(`${products.imageUrl}`)} alt="Product Image" style={{width:"200px",height:"200px"}} />
          
        </div>
        <h4 className={style.Emargin}>{products.name}</h4>
        <h5 className={style.Emargin}>R{products.price}</h5>
        <h5 className={style.Emargin}> Qty: {products.quantity}</h5>
        <h6 className={style.Emargin}>{products.description}</h6>
        <button className={style.btnAdd}>Add to Cart</button>
      </div>
    </>
  );
}
