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
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: "5rem",
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    appBar: {
        backgroundColor: "whitesmoke",
        boxShadow: "none",
    },
    grow: {
        flexGrow: 1,
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
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <Grid container>
                        <Grid item xs={12} sm={3} md={3} className={classes.center}>
                            <IconButton edge="start" color="inherit" aria-label="menu" >
                                <img src={Icon} alt='Icon' className={classes.image} />
                            </IconButton>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <div></div>
                        </Grid>
                        <Grid item xs={12} sm={2} md={2} className={classes.center}>
                            <Typography variant="h6" color='textPrimary' component="p">
                                Hello Guest
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sm={2} md={2} className={classes.center}>
                            <Button variant='outlined'>
                                <strong>Sign In</strong>
                            </Button>
                        </Grid>
                        <Grid item xs={6} sm={1} md={1} className={classes.center}>
                            <IconButton aria-label='show carts items' color='inherit'>
                                <Badge badgeContent={2} color="secondary">
                                    <ShoppingCart fontSize='large' color='primary'></ShoppingCart>
                                </Badge>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>

        </div>
    )
}

export default Navbar