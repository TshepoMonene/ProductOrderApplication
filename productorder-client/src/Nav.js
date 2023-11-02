import React, { useEffect, useState } from "react";
import style from "./Nav.module.css"

export default function Nav() {
    var customers={};
    useEffect(() => {
        customers = JSON.parse(localStorage.getItem("dataKey"));  
      }, []);
  return (
    <>
      <div>
          <div className={style.container}>
            <h3>{customers.FirstName}</h3>    
            
          </div>
      </div>
    </>
  );
}