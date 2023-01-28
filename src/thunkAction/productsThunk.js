import productsData from "../product-data";
import { loading, failure, success } from "../state/products/productsAction";

export const getProductsThunk = () => {
    return async (dispatch) => {
      dispatch(loading());
      try {
        dispatch(success({ products:productsData , redirect: null }));
      } catch (error) {
        dispatch(failure());
      }
    };
  };