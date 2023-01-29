import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/ProductsReducer";
import basketProductsReducer from "./basketProducts/basketProductsReducer";
import thunk from "redux-thunk";


export default configureStore({
    reducer: {
        productsReducer,
        basketProductsReducer,
    },
    middleware: (curryGetDefaultMiddleware) =>
        curryGetDefaultMiddleware().concat(thunk),
});