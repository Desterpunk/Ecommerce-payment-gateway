import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CheckoutCard from './CheackoutCard';
import productsData from '../product-data';
import Total from './Total';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: '2rem',
        paddingTop: '80px',
        [theme.breakpoints.down('xs')]: {
            paddingTop: '160px',
            height: 'auto'
        },
    },
}));

const CheackoutPage = () => {
    const classes = useStyles();

    function FormRow() {
        return (
            <React.Fragment>
                {productsData.map((item) => (
                    <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
                        <CheckoutCard key={item.id} product={item}/>
                    </Grid>
                ))}
            </React.Fragment>
        );
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography align='center' gutterBottom variant='h4'>
                        ShoppingCart
                    </Typography>
                </Grid>
                <Grid item xs={8} sm={8} md={9} container spacing={2}>
                    <FormRow/>
                </Grid>
                <Grid item xs={4} sm={4} md={3}>
                    <Typography align='center' gutterBottom variant='h4'>
                        <Total/>
                    </Typography>
                </Grid>

            </Grid>
        </div>
    )
}

export default CheackoutPage