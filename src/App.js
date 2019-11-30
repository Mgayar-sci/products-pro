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
      name: "Product 0"
    },
    {
      id: 1,
      name: "Product 1"
    },
    {
      id: 2,
      name: "Product 2"
    },
    {
      id: 3,
      name: "Product 3"
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
        <Grid container spacing={40}>
          {this.products &&
            this.products.map(p => (
              <Product1 addToCart={this.manageCart} {...p} key={p.id} />
            ))}
        </Grid>
        {/* <Product1  addToCart={this.manageCart} {...p} key={p.id} /> */}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
