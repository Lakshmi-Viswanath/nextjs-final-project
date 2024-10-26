import { useDispatch, useSelector } from "react-redux";
import { removeItemsInCart } from "../store/cartSlice";
import styles from "@/styles/components/Cart.module.css";
import {useRouter} from 'next/router';

const Cart = () => {
  const router = useRouter();
  const productsInCart = useSelector((state) => state.cart);
  const dispatchForRemovingItemFromCart = useDispatch();

  const removeItem = (id) => {
    dispatchForRemovingItemFromCart(removeItemsInCart(id));
  };

  const goToCheckout = () => {
    router.push('/checkout'); 
  };

  const cards = productsInCart.map((product, index) => (
    <div className={styles.cardContainer} key={index}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img
            src={product.image}
            alt={product.title}
            className={styles.cardImage}
          />
        </div>
        <div className={styles.cardBody}>
          <h5 className={styles.cardTitle}>{product.title}</h5>
          <p className={styles.cardText}>${product.price}</p>
        </div>
        <div className={styles.cardFooter}>
          <button
            className={styles.removeButton}
            onClick={() => removeItem(product.id)}
          >
            Remove
          </button>
        </div>
      </div>
      
    </div>
  ));

  return (
    <>
     <>
      <h2>Cart Page</h2>
      <div className={styles.cardsContainer}>{cards}</div>
      <div className={styles.checkoutContainer}>
        <button className={styles.checkoutButton} onClick={() => goToCheckout()}>Checkout</button>
      </div>
    </>
    </>
  );
};

export default Cart;


