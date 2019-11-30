import React from "react";
import Cart from "./Components/Cart";
import Product from "./Components/Product";
import {BrowserRouter} from "react-router-dom";
import Product1 from "./Product";
import { Grid } from "@material-ui/core";

class App extends React.Component {
  state = {
    proCount: []
  };
  products = [
    {
      id: 0,
      title: "Product 0",
      price: 100,
      description: "abc def"
    },
    {
      id: 1,
      title: "Product 1",
      price: 100,
      description: "abc def"
    },
    {
      id: 2,
      title: "Product 2",
      price: 100,
      description: "abc def"
    },
    {
      id: 3,
      title: "Product 3",
      price: 100,
      description: "abc def"
    }
  ];

  manageCart = (count, id = 0) => {
    // alert(count);
    let { proCount } = this.state;
    if (!proCount[id]) {
      proCount[id] = 0;
    }
    proCount[id] += count;
    if (proCount[id] < 0) proCount[id] = 0;
    this.setState({ proCount });
  };

  render() {
    return (
      <BrowserRouter>
      <div className="app">
        <Cart count={this.state.proCount} />
        <Grid container spacing={5}>
          {this.products &&
            this.products.map(p => (
              <Product1 addToCart={this.manageCart} product={p} key={p.id} />
            ))}
        </Grid>
        {/* <Product1  addToCart={this.manageCart} {...p} key={p.id} /> */}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
