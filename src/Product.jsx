import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  CardActionArea,
  Card,
  CardContent,
  Typography,
  Hidden,
  CardMedia
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex"
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  },
  cardMediaUp: {
    width: "100%",
    height: 160,
    backgroundSize: "contain"
  }
}));

export default function Blog(props) {
  const classes = useStyles();
  const product = props.product || {};
  
  const addToCart = () => {
    props.addToCart(1, product.id);
  };
  const subToCart = () => {
    props.addToCart(-1, product.id);
  };

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea>
        <Card className={classes.card}>
          <Hidden smUp>
            <CardMedia
              className={classes.cardMediaUp}
              image="/Halloween_Sale.PNG"
              // image="https://source.unsplash.com/random"
              title="Image title"
            />
            <br/>
          </Hidden>
          </Card>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {product.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {product.price}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {product.description + " "}
                <Typography variant="subtitle2" color="primary" component="a" href={`/product/${product.id}`}>
                  More details
                </Typography>
              </Typography>
              <Typography variant="button" onClick={addToCart}>
                Add to cart
              </Typography>
              <Typography variant="button" onClick={subToCart}>
                Remove from cart
              </Typography>
              
              {/* <button onClick={addToCart}>+</button>
                <button onClick={subToCart}>-</button> */}
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image="/Halloween_Sale.PNG"
              // image="https://source.unsplash.com/random"
              title="Image title"
            />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}
