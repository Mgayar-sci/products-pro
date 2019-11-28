import React from "react";

class Cart extends React.Component {
  render() {
    const { count } = this.props;
    return (
      <div className="Cart">
        Cart:
        {count && count.length > 0
          ? Object.entries(count).map((pro) => ` ${pro[0]}:${pro[1]}`).join(",")
          : ` Empty`}
      </div>
    );
  }
}

export default Cart;
