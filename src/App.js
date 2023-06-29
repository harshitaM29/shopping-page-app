import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, Fragment } from 'react';
import {cartShowActions} from './store/cartShow'
import Notification from './components/UI/Notification';

let isInital =  true;
function App() {
  const isOpen = useSelector(state => state.cartShow.showCart)
  const cart = useSelector(state=> state.cart)
  const notification = useSelector(state => state.cartShow.notification)
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  useEffect(() => {
    const sendCartItems = async() => {
      dispatch(cartShowActions.showLoader({
        status:'pending',
        title:'Sending request...',
        message:'Sending cart items'
      }))
      const respone = await fetch('https://shopping-app-afe0b-default-rtdb.firebaseio.com/cart.json', {
        method:'PUT',
        body: JSON.stringify(cart),
  
      })
      if(!respone.ok) {
        throw new Error('Sending cart data failed');
      }
      dispatch(cartShowActions.showLoader({
        status:'success',
        title:'suceess.',
        message:'sent cart items'
      }))
      
    }
    if(isInital) {
      isInital = false
      return;
    }
   sendCartItems().catch(error => {
    dispatch(cartShowActions.showLoader({
      status:'Error',
      title:'Error!.',
      message:'sending cart data failed'
    }))
   });
  },[cart,dispatch])
  return (
    <Fragment>
    {notification &&   <Notification status={notification.status}
      title={notification.title}
      message={notification.message}
    /> }
    <Layout>
     {isOpen && <Cart items={cartItems} /> }
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
