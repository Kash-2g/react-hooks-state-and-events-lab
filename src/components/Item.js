import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  function handleAddToCartClick() {
    setIsInCart((isInCart) =>!isInCart);
  }

  return (
    <li className="">
      <li className={isInCart? "in-cart" : ""}>
        <span>{name}</span>
        <span className="category">{category}</span>
        <span>{name}</span>
        <span className="category">{category}</span>
        <button className="add" onClick={handleAddToCartClick}>Add to Cart</button>
      </li>
    </li>
  );
}

export default Item;