import { useSelector } from "react-redux";
import styles from "@/styles/components/OrderDetails.module.css";

const OrderDetails = () => {
  const customerInfo = useSelector((state) => state.checkout.customerInfo);
  const orderItems = useSelector((state) => state.checkout.cartItems);
  const total = orderItems.reduce((sum, item) => sum + item.price , 0);
  console.log("i am cust",customerInfo)
console.log("i am orderitems", orderItems)
  return (
    <div className={styles.orderDetailsContainer}>
      <h2>Order Details</h2>

      <div className={styles.section}>
        <h3>Shipping Information</h3>
        <p>{customerInfo.name}</p>
        <p>{customerInfo.address}</p>
        <p>{customerInfo.email}</p>
      </div>

      <div className={styles.section}>
        <h3>Billing Information</h3>
        <p>{customerInfo.name}</p>
        <p>{customerInfo.address}</p>
        <p>{customerInfo.email}</p>
      </div>

      <div className={styles.section}>
        <h3>Order Items</h3>
        <table className={styles.orderTable}>
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {orderItems.map((item, index) => (
              <tr key={index}>
                <td>{item.title}</td>
                <td>1</td>
                <td>£{item.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.total}>
          <strong>Total: £{total.toFixed(2)}</strong>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
