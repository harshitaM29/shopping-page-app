import {createSlice} from '@reduxjs/toolkit';

const initialCartState = {cartItems:[]}

const cartSlice = createSlice({
    name:'cart',
    initialState:initialCartState,
    reducers: {
        addToCart(state,action) {
            const index = state.cartItems.findIndex(item => item.id === action.payload.id)
            if(index === -1) {
                state.cartItems.push({...action.payload, quantity:1, price:action.payload.price})
            }
            else {
                state.cartItems[index].quantity += 1;
            }

        },
        removeFromCart(state,action) {
            const index =  state.cartItems.findIndex(item => item.id === action.payload)
            if(state.cartItems[index].quantity === 1) {
                state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
            } else {
                state.cartItems[index].quantity--;
            }
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;