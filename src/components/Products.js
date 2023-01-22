import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Product from './Product';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '80px',
        height: '800px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            paddingTop: '200px',
            height: '2800px'
        },
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    gridContainer: {
        height: '100%',
        width: '1000px',
        // backgroundColor: '#271919',
        backgroundColor: 'white',
    }

}));
const Products = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3} className={classes.gridContainer}>
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