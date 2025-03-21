import { useCart } from "../cart/cartContext";
import { useProducts } from "./productContext";
import { Link } from "react-router-dom";
import styles from "./product.module.css";
import cartImage from "./cart.svg";

function Product() {
  const { product, loading, error } = useProducts();
  const { cart, addToCart } = useCart();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Network request failed</p>;

  return (
    <div>
      <div className={styles.container}>
        <header className={styles.header}>
          <nav className={styles.headerNav}>
            <h1 className={styles.h1}>ShopEase</h1>
            <div className={`${styles.nav}`}>
              <img
                src={cartImage}
                alt="cart"
                className={`${styles.icon} ${styles.cartImages} ${styles.color}`}
              />
              <Link to="/cart" className={styles.link}>
                {cart.length}
              </Link>
            </div>
          </nav>
          <div className={styles.shopEase}>
            <p className={styles.p}>
              <b>ShopEase</b> is your ultimate online shopping companion,
              designed to make your experience smooth, fast, and hassle-free.
              With an intuitive shopping cart system, you can easily browse,
              add, and manage your favorite items before making a secure
              purchase. Whether you're shopping for fashion, electronics, or
              everyday essentials, ShopEase ensures a seamless checkout process
              and a delightful shopping journey. Enjoy convenience at your
              fingertips—shop smart, shop easy!
            </p>
          </div>
        </header>
      </div>

      <div className={styles.cards}>
        {product &&
          product.map((item) => {
            return (
              <div key={item.id} className={styles.item}>
                <img
                  src={item.images}
                  alt={item.title}
                  className={styles.img}
                />
                <div className={styles.description}>
                  <h3>{item.title}</h3>
                  <p className={styles.price}>${item.price}</p>
                  <div className={styles.iconDIv}>
                    <img
                      src={cartImage}
                      alt="cart"
                      className={`${styles.icon} ${styles.cartImages}`}
                    />
                    <button
                      onClick={() => addToCart(item)}
                      className={styles.addCart}
                    >
                      {" "}
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Product;
