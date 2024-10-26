import { useSelector } from "react-redux";
import styles from "@/styles/components/Checkout.module.css";

const Checkout = () => {
  const productsInCart = useSelector((state) => state.cart);
  const totalPrice = productsInCart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className={styles.checkoutContainer}>
   
      <div className={styles.formContainer}>
        <h2>Customer Information</h2>
        <form className={styles.checkoutForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="address">Shipping Address</label>
            <textarea id="address" name="address" rows="4" required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Place Order</button>
        </form>
      </div>

      
      <div className={styles.summaryContainer}>
        <h2>Order Summary</h2>
        <div className={styles.productList}>
          {productsInCart.map((product, index) => (
            <div key={index} className={styles.productItem}>
              <img src={product.image} alt={product.title} className={styles.productImage} />
              <div className={styles.productDetails}>
                <p>{product.title}</p>
                <p>${product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.totalContainer}>
          <p>Total Price: <strong>${totalPrice.toFixed(2)}</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
