import React, { useState } from "react";
import clsx from "clsx";
import accounting from "accounting";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddShopingCart from "@material-ui/icons/AddShoppingCart";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  action: {
    marginTop: "1rem",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", //16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

function Product() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <Typography
            className={classes.action}
            variant="h5"
            color="textSecondary"
          >
            {accounting.formatMoney(50, "$")}
          </Typography>
        }
        title="Shoes"
        subheader="in stock"
      ></CardHeader>
      <CardMedia
        className={classes.media}
        image="https://s2.r29static.com/bin/entry/ebd/0,675,2000,1050/x,80/1929471/image.jpg"
        title="Nike shoes"
      ></CardMedia>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Running Shoes
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to shoping cart">
          <AddShopingCart></AddShopingCart>
        </IconButton>
        {Array(4)
          .fill()
          .map((_, i) => (
            <p>🌟</p>)
          )}
        <IconButton
          aria-label="show more"
          aria-expanded={expanded}
          onClick={handleExpandClick}
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
        >
          <ExpandMoreIcon></ExpandMoreIcon>
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Zapatillas de deporte para correr</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Product;
