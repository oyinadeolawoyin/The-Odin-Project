import { Link } from "react-router-dom";
import { useCart } from "./cartContext";
import styles from "./cart.module.css";

export default function Cart() {
  const { cart, removeFromCart, totalPrice, setCart } = useCart();

  function handleChange(event, product) {
    setCart(
      cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              totalprice: item.price * Math.max(1, Number(event.target.value)),
            }
          : item,
      ),
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.h2}>Cart</h2>
      </header>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <table className={styles.tbody}>
          <thead>
            <tr>
              <th className={styles.thead}>Item</th>
              <th className={styles.thead}>Price</th>
              <th className={styles.thead}>Quantity</th>
              <th className={styles.thead}>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td className={`${styles.item} ${styles.imageDiv}`}>
                  <div>
                    <img
                      src={item.images}
                      alt={item.title}
                      className={styles.img}
                    />
                    <div className={styles.description}>
                      <h3>{item.title}</h3>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className={styles.remove}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </td>
                <td className={`${styles.item}`}>${item.price}</td>
                <td className={`${styles.item} ${styles.input}`}>
                  <input
                    type="number"
                    value={item.quantity}
                    min={1}
                    onChange={(event) => handleChange(event, item)}
                  />
                </td>
                <td className={`${styles.item}`}>${item.totalprice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <hr />
      <div className={styles.home}>
        <p>
          <b>Total Price:</b> ${totalPrice}
        </p>
        <Link to="/">Go Back to Home</Link>
      </div>
    </div>
  );
}
