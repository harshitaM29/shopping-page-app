import classes from './CartItem.module.css';
import { cartActions } from '../../store/cart';
import {useDispatch} from 'react-redux'

const CartItem = (props) => {
 const dispatch = useDispatch();
 const addToCartHandler = () => {
  dispatch(cartActions.addToCart(props))
 }

 const removeFromCartHandler = () => {
  dispatch(cartActions.removeFromCart(props.id));
 }


  return (
    <li className={classes.item}>
      <header>
        <h3>{props.title}</h3>
        <div className={classes.price}>
          ${props.totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>
            (${props.price.toFixed(2)}/item)
          price
            </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{props.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeFromCartHandler}>-</button>
          <button onClick={addToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
