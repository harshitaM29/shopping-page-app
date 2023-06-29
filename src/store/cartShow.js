import {createSlice} from '@reduxjs/toolkit';

const cartShowSlice = createSlice({
    name:'cartshow',
    initialState: {
        showCart:false,
        notification:null
    },
    reducers: {
        openCart(state) {
            state.showCart = !state.showCart
        },
        showLoader(state, action) {
            state.notification = {status:action.payload.status,
            title:action.payload.title,
            message:action.payload.message
        };
        },
        
    }
});

export const cartShowActions = cartShowSlice.actions;

export default cartShowSlice.reducer;