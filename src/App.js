import React from "react";
import Cart from "./Components/Cart";
import { BrowserRouter } from "react-router-dom";
import Product1 from "./Product";
import { Grid, Container } from "@material-ui/core";
import AppBar from "./Components/AppBar";

class App extends React.Component {
  state = {
    proCount: []
  };
  products = [
    {
      id: 0,
      title: "Product 0",
      price: 100,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id augue vel enim venenatis rutrum. Vestibulum varius rutrum leo in pretium. Praesent ac pretium tortor, sit amet vestibulum eros. Donec sit amet finibus turpis. Aenean tempus dolor arcu, egestas condimentum metus interdum at. Vivamus ut nunc vitae sapien sagittis blandit nec eget erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quam orci, ultricies convallis vulputate at, gravida at nulla. Maecenas et vehicula tellus, sit amet faucibus elit. Nunc id feugiat ipsum. Nulla et mi mi. Maecenas condimentum malesuada lacinia. Quisque nec sollicitudin quam."
    },
    {
      id: 1,
      title: "Product 1",
      price: 100,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae vehicula metus. Praesent metus."
    },
    {
      id: 2,
      title: "Product 2",
      price: 100,
      description: "Mauris pretium fringilla arcu in volutpat. Nunc ultrices venenatis mattis. Curabitur pharetra amet."
    },
    {
      id: 3,
      title: "Product 3",
      price: 100,
      description: "Aenean fermentum at arcu eget imperdiet. Nullam quis dui ligula. Vivamus iaculis ex eu quam nullam."
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
    const { proCount } = this.state;
    const cartCount = proCount.filter(p=>p!==0).length;
    const inCart = this.products.map(p=>Boolean(proCount[p.id] && proCount[p.id] > 0));
    
    return (
      <BrowserRouter>
        <AppBar cartCount={cartCount}/>
          <Cart count={proCount} />
          <Container>
          <Grid container spacing={5}>
            {this.products &&
              this.products.map(p => (
                <Product1
                  addToCart={this.manageCart}
                  product={p}
                  key={p.id}
                  isInCart={inCart[p.id]}
                />
              ))}
          </Grid>
          </Container>
      </BrowserRouter>
    );
  }
}

export default App;
