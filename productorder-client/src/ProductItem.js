import React from "react";

export default function ProductItem({ products }) {
  return (
    <>
      <div>
        <div>
          <img src={products.imageUrl} />
        </div>
        <h4>{products.Name}</h4>
        <h5>{products.Price}</h5>
        <h6>{products.Description}</h6>
      </div>
    </>
  );
}
