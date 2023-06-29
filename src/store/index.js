import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart';
import cartShowReducer from './cartShow';

const store = configureStore({
    reducer: {cartShow:cartShowReducer,cart:cartReducer}
});

export default store;