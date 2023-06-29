import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Dummy_Items = [
  {
    id: 'p1',
    title:'Guitar',
    description:'Black',
    price:500
  },
  {
    id: 'p2',
    title:'Book',
    description:'Fictional Book',
    price:50
  },
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
       {Dummy_Items.map((item) => (
        <ProductItem
        id={item.id}
        title={item.title}
        price={item.price}
        description={item.description}
      />
       ))} 
      </ul>
    </section>
  );
};

export default Products;
