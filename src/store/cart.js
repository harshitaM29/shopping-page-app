import {createSlice} from '@reduxjs/toolkit';

const initialCartState = {showCart:false}

const cartSlice = createSlice({
    name:'cart',
    initialState:initialCartState,
    reducers: {
        openCart(state) {
            state.showCart = !state.showCart
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;