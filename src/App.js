import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, Fragment } from 'react';
import { sendCartItems, fetchCartItems } from './store/cart-actions';
import Notification from './components/UI/Notification';

let isInital =  true;
function App() {
  const isOpen = useSelector(state => state.cartShow.showCart)
  const cart = useSelector(state=> state.cart)
  const notification = useSelector(state => state.cartShow.notification)
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  useEffect(() => {
    dispatch(fetchCartItems())
  }, [dispatch])

  useEffect(() => {    
    if(isInital) {
      isInital = false;
      return;
    }
    if(cart.changed) {
    dispatch(sendCartItems(cart));
    }
    
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
