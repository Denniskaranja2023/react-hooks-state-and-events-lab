import React, {useState} from "react";

function Item({ name, category }) {
   const [isAdded, setIsAdded] = useState(false);
  function handleAddToCart() {
    setIsAdded(!isAdded);}
     const cartClass= isAdded ? "in-cart" : "";
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>{isAdded?"Remove From Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
