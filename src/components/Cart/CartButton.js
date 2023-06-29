import classes from './CartButton.module.css';
import { cartShowActions } from '../../store/cartShow'
import {useDispatch, useSelector} from 'react-redux'

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  
  const openCartHandler = () => {
    dispatch(cartShowActions.openCart())

  }
  return (
    <button className={classes.button} onClick={openCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
