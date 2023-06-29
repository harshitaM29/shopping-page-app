import {cartShowActions} from './cartShow';
import {cartActions} from './cart'

export const fetchCartItems = () => {
    return async(dispatch) => {
        const fetchData = async() => {
            const response = await fetch('https://shopping-app-afe0b-default-rtdb.firebaseio.com/cart.json');
            if(!response.ok) {
                throw new Error('Could not fetch data')
            };
            const data = await response.json();
            return data;
        }

            try {
             const cartData = await fetchData();
             console.log(cartData)
             dispatch(cartActions.replaceCart({
                cartItems: cartData.cartItems || [],
                totalQuantity:cartData.totalQuantity
             }))
            } catch (error) {
                dispatch(cartShowActions.showLoader({
                    status:'Error',
                    title:'Error!.',
                    message:'Fetching cart data failed'
                  }))
            
        };
    };
};

export const sendCartItems = (cart) => {
    return async(dispatch) => {
            dispatch(cartShowActions.showLoader({
                status:'pending',
                title:'Sending request...',
                message:'Sending cart items'
              })
            );
        const sendRequest = async() => {
            const respone = await fetch('https://shopping-app-afe0b-default-rtdb.firebaseio.com/cart.json', {
            method:'PUT',
             body: JSON.stringify({cartItems: cart.cartItems,
            totalQuantity:cart.totalQuantity}),
  
         })
         if(!respone.ok) {
            throw new Error('Sending cart data failed');
          }
        };

        try {
            await sendRequest();
            
            dispatch(cartShowActions.showLoader({
                status:'success',
                title:'suceess.',
                message:'sent cart items'
            }))
        } catch(error) {
            dispatch(cartShowActions.showLoader({
                status:'Error',
                title:'Error!.',
                message:'sending cart data failed'
              }))
        }
        
    }
}