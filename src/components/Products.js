import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Product from './Product';
import productsData from '../product-data';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '80px',
        padding: theme.spacing(3),
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            paddingTop: '160px',
            height: 'auto'
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
    }

}));
const Products = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3} className={classes.gridContainer}>
                {
                    productsData.map(product => (
                        <Grid item xs={6} sm={6} md={4} lg={3} className={classes.center}>
                            <Product key={product.id} product={product}/>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default Products