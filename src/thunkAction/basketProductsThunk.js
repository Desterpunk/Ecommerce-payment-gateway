import { loading, failure, success } from "../state/products/productsAction";

export const getBasketProductsThunk = () => {
    return async (dispatch) => {
      dispatch(loading());
      try {
        dispatch(success({ products:[] , redirect: null }));
      } catch (error) {
        dispatch(failure());
      }
    };
  };