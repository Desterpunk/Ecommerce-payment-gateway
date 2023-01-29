import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import accounting from 'accounting';
import { Button } from '@material-ui/core'
import { connect } from 'react-redux';
import { setBasketProductTotal } from '../thunkAction/basketProductsThunk';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: "20vh"
    },
    button: {
        marginTop: "2rem",
        maxWidth: "",
    }
}));
const Total = ({products, total, dispatch}) => {

    const classes = useStyles();

    useEffect(() => {
        dispatch(setBasketProductTotal());
    }, [products,dispatch]);

    return (
        <div className={classes.root}>
            <h5>Total items: {products.length}</h5>
            <h5>{accounting.formatMoney(total, "$")}</h5>
            <Button className={classes.button} variant="contained" color="secondary">Check out</Button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    products: state.basketProductsReducer.products,
    total: state.basketProductsReducer.total,
    loading: state.basketProductsReducer.loading,
    hasErrors: state.basketProductsReducer.hasErrors,
    redirect: state.basketProductsReducer.redirect,
});

export default connect(mapStateToProps)(Total);