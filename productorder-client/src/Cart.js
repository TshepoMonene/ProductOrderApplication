import React, { useState } from "react";
import { FaShoppingCart} from  "react-icons/fa"
export default function Cart(itemcount) {
    const [count,setCount] = useState(4);
 
  return (
    <>
    <div>
       
        <FaShoppingCart/>
        <i>{count}</i>
    </div>
    </>
  );
}
