import classes from './CartButton.module.css';
import { cartShowActions } from '../../store/cartShow'
import {useDispatch, useSelector} from 'react-redux'

const CartButton = (props) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.cartItems);
  let quantity = 0;
  items.map(item => (
    quantity = quantity + item.quantity
  ))
  const openCartHandler = () => {
    dispatch(cartShowActions.openCart())

  }
  return (
    <button className={classes.button} onClick={openCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
