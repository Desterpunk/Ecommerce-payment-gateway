import { createSlice } from "@reduxjs/toolkit";
import { addBasketProduct, getBasketProducts } from "../../thunkAction/basketProductsThunk";

export const initialState = {
    products: [],
}

export const basketProductsReducer = createSlice({
    name: 'basketProducts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBasketProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.basketProducts = action.payload;
        })
        builder.addCase(getBasketProducts.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getBasketProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
        builder.addCase(addBasketProduct.fulfilled, (state, action) => {
            state.loading = false;
            if (action.payload?.error) {
                state.error = action.payload.error;
                return;
            }
            state.error = null;
            state.products = [...state.products, action.payload];
        })
    }
})

export default basketProductsReducer.reducer;