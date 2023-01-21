import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '../assets/ecommerce.png'
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { Badge } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: "7rem",
    },
    appBar: {
        backgroundColor: "whitesmoke",
        boxShadow: "none",
    },
    grow: {
        flexGrow: 1,
    },
    button: {
        marginLeft: theme.spacing(2),
    },
    image: {
        marginRight: "10px",
        height: "2rem",
    },
}));
function Navbar() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <img src={Icon} alt='Icon' className={classes.image} />
                    </IconButton>
                    <div className={classes.grow}></div>
                    <Typography variant="h6" color='textPrimary' component="p">
                        Hello Guest
                    </Typography>
                    <div className={classes.button}>
                        <Button variant='outlined'>
                            <strong>Sign In</strong>
                        </Button>
                        <IconButton aria-label='show carts items' color='inherit'>
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart fontSize='large' color='primary'></ShoppingCart>
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar