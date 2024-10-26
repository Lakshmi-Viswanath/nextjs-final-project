import { useSelector } from "react-redux";
import Link from "next/link";
import styles from '@/styles/components/Navigation.module.css'; 

const Navigation = () => {
  const productsInCart = useSelector((state) => state.cart);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/dashboard" className={styles.brand}>
          <h3>eCommerce Store</h3>
        </Link>
        <div className={styles.cartContainer}>
          <Link href="/cart" className={styles.cartLink}>
            My Cart {productsInCart.length}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
