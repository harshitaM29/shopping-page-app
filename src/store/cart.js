import {createSlice} from '@reduxjs/toolkit';

const initialCartState = {cartItems:[], totalQuantity:0}

const cartSlice = createSlice({
    name:'cart',
    initialState:initialCartState,
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.cartItems = action.payload.items;
        },
        addToCart(state,action) {
            const index = state.cartItems.findIndex(item => item.id === action.payload.id)
            state.totalQuantity++;
            if(index === -1) {
                state.cartItems.push({...action.payload, quantity:1,  totalPrice: action.payload.price,})
            }
            else {
                state.cartItems[index].quantity += 1;
                state.cartItems[index].totalPrice += action.payload.price
            }

        },
        removeFromCart(state,action) {
            const index =  state.cartItems.findIndex(item => item.id === action.payload)
            state.totalQuantity--;
            if(state.cartItems[index].quantity === 1) {
                state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
            } else {
                state.cartItems[index].quantity--;
                state.cartItems[index].totalPrice -= state.cartItems[index].price
            }
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;