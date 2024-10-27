import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/productSlice";
import { addItemsinCart } from "../store/cartSlice";
import { useRouter } from 'next/router';
import styles from '@/styles/components/Product.module.css';

const Products = () => {
  const dispatch = useDispatch();
  const { data: products = [], status } = useSelector((state) => state.products);
  const [error, setError] = useState(null);
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await dispatch(getProducts());
      } catch (err) {
        setError("Some error occurred while fetching products.");
      }
    };

    fetchProducts();
  }, [dispatch]);

  const addToCart = (product) => {
    dispatch(addItemsinCart(product));
  };

  const goToDetails = (productId) => {
    router.push(`/product/${productId}`); // Navigate to product details page
  };

  const cards = products.map((product, index) => (
    <div className={styles.cardContainer} key={index}>
      <div className={styles.card}>
        <div className="text-center">
          <img
            src={product.image}
            alt={product.title}
            className={styles.cardImage}
          />
        </div>
        <div className={styles.cardBody}>
          <h5 className="text-center">{product.title}</h5>
          <p className="text-center">${product.price}</p>
        </div>
        <div className={styles.cardFooter}>
          <button className={styles.learnMoreButton} onClick={() => goToDetails(product.id)}>
            Learn More
          </button>
          <button className={styles.buyButton} onClick={() => addToCart(product)}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <h2>Products Page</h2>
      {error && <div className={styles.errorAlert}>{error}</div>}
      <section className={styles.productsSection}>
        {cards}
      </section>
    </>
  );
};

export default Products;
