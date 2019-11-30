import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Hidden,
  CardMedia,
  Button
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

export default function Product(props) {
  const classes = useStyles();
  const product = props.product || {};
  const showMore = product.description
    ? product.description.length > 100
    : false;
  const description = showMore? product.description.slice(0,87) : product.description;
  
  const addToCart = () => {
    props.addToCart(1, product.id);
  };
  const subToCart = () => {
    props.addToCart(-1, product.id);
  };

  return (
    <Grid item xs={12} md={6}>
      <Card className={classes.card}>
        <Hidden smUp>
          <CardMedia
            className={classes.cardMediaUp}
            image="/Halloween_Sale.PNG"
            // image="https://source.unsplash.com/random"
            title={product.title}
          />
          <br />
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
              {description + " "}
              {showMore && (
                <Typography
                  variant="subtitle2"
                  component="a"
                  href={`/product/${product.id}`}
                >
                  More details
                </Typography>
              )}
            </Typography>
            <Button color="primary" onClick={addToCart}>
              Add to cart
            </Button>
            {props.isInCart && (
              <Button color="secondary" onClick={subToCart}>
                Remove from cart
              </Button>
            )}
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
    </Grid>
  );
}
