import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {props.items.map((item) => 
        <CartItem id={item.id} title={item.title} quantity={item.quantity} price={item.price}/>
        )}
      </ul>
    </Card>
  );
};

export default Cart;
