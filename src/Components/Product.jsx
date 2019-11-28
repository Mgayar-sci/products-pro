import React from 'react';
import "./Product.css";
import { Link } from "react-router-dom";
class Product extends React.Component{
  
  addToCart = ()=>{
    this.props.addToCart(1,this.props.id);
  }
  subToCart = ()=>{
    this.props.addToCart(-1,this.props.id);
  }
  render(){
    const {name,id} = this.props;
  return (
    <div className = "Product">
      <span>{name}</span>
      <Link to={`/product/${id}`}>
        <img src="/Halloween_Sale.PNG" alt=""/>
      </Link>
      <br/>
      <div className = "buttons">
        <button onClick={this.addToCart}>+</button>
        <button onClick={this.subToCart}>-</button>
      </div>
  </div>
  );
  }
}

export default Product;
