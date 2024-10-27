import { useSelector, useDispatch } from "react-redux";
import { updateCustomerInfo ,setCartItems} from "../store/checkoutSlice"; 
import styles from "@/styles/components/Checkout.module.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Checkout = () => {
  const productsInCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const router = useRouter();
  const totalPrice = productsInCart.reduce((sum, product) => sum + product.price, 0);

  useEffect(() => {
      dispatch(setCartItems(productsInCart));
  }, [productsInCart, dispatch]);

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    const customerInfo = {
      name: e.target.name.value,
      email: e.target.email.value,
      address: e.target.address.value,
    };

    dispatch(updateCustomerInfo(customerInfo));
    router.push("/orderdetails");
  };

  return (
    <div className={styles.checkoutContainer}>
      <div className={styles.formContainer}>
        <h2>Customer Information</h2>
        <form className={styles.checkoutForm} onSubmit={handlePlaceOrder}>
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
