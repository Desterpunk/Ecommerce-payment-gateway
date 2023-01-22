import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Product from './Product';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

}));
const Products = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4} lg={3} className={classes.center}>
                    <Product />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className={classes.center}>
                    <Product />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className={classes.center}>
                    <Product />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className={classes.center}>
                    <Product />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className={classes.center}>
                    <Product />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className={classes.center}>
                    <Product />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className={classes.center}> 
                    <Product />
                </Grid>
            </Grid>
        </div>
    )
}

export default Products