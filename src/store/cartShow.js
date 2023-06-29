import {createSlice} from '@reduxjs/toolkit';

const cartShowSlice = createSlice({
    name:'cartshow',
    initialState: {
        showCart:false
    },
    reducers: {
        openCart(state) {
            state.showCart = !state.showCart
        }
    }
});

export const cartShowActions = cartShowSlice.actions;

export default cartShowSlice.reducer;