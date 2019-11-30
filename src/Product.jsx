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
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto"
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  },
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(https://source.unsplash.com/user/erondu)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)"
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  },
  mainGrid: {
    marginTop: theme.spacing(3)
  },
  card: {
    display: "flex"
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0)
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200]
  },
  sidebarSection: {
    marginTop: theme.spacing(3)
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0)
  }
}));

export default function Blog(props) {
  const addToCart = () => {
    props.addToCart(1, props.id);
  };
  const subToCart = () => {
    props.addToCart(-1, props.id);
  };

  const classes = useStyles();
  const product = props.product || {};

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea>
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
                {product.description}
              </Typography>
              <Typography variant="button">
                <button onClick={addToCart}>+</button>
                <button onClick={subToCart}>-</button>
              </Typography>
              <Typography variant="subtitle1" color="primary" component="a" href={`/product/${product.id}`}>
                More details
              </Typography>
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