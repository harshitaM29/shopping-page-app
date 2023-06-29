import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';


function App() {
  const isOpen = useSelector(state => state.cartShow.showCart)
  const cartItems = useSelector(state => state.cart.cartItems)
  return (
    <Layout>
     {isOpen && <Cart items={cartItems} /> }
      <Products />
    </Layout>
  );
}

export default App;
