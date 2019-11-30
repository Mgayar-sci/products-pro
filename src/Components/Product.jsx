import React from "react";
import { Link } from "react-router-dom";


import "./Product.css";

function Product(props) {
  const addToCart = () => {
    props.addToCart(1, props.id);
  };
  const subToCart = () => {
    props.addToCart(-1, props.id);
  };

  const { name, id } = props;
  return (
    <div className="Product">
      <span>{name}</span>
      <Link to={`/product/${id}`}>
        <img src="/Halloween_Sale.PNG" alt="" />
      </Link>
      <br />
      <div className="buttons">
        <button onClick={addToCart}>+</button>
        <button onClick={subToCart}>-</button>
      </div>

    </div>
  );
}

export default Product;
