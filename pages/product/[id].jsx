import { useDispatch } from 'react-redux';
import { addItemsinCart } from '../../store/cartSlice';
import styles from '@/styles/components/ProductDetails.module.css';
import axios from 'axios';
import Navigation from '@/components/Navigation';

const ProductDetails = ({ product }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItemsinCart(product));
  };

  return (
    <>
    <Navigation />
    <div className={styles.productDetailsContainer}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.title} height='100' width='100' className={styles.productImage} />
      </div>
      <div className={styles.detailsContainer}>
        <h1 className={styles.productName}>{product.title}</h1>
        <p className={styles.productDescription}>{product.description}</p>
        <p className={styles.productPrice}>${product.price}</p>
        <button className={styles.addToCartButton} onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const res = await axios.get('https://fakestoreapi.com/products'); 
  const data = res.data;
  const paths = data.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false }; 
};

export const getStaticProps = async ({ params }) => {
  const res = await axios.get(`https://fakestoreapi.com/products/${params.id}`); 
  const product = res.data

  return {
    props: { product }, 
};
}

export default ProductDetails;
