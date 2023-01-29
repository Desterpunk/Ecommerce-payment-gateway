import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBasketProducts = createAsyncThunk(
    'basketProducts/getBasketProducts',
    async () => {
        return [];
    }
);

export const addBasketProduct = createAsyncThunk(
    'basketProducts/addBasketProduct',
    async (product) => {
        return product;
    }
);