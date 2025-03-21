import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <div className={styles.error}>
      <div className={styles.header}>
        <h1>Oh no, this route doesn't exist!</h1>
        <hr />
      </div>
      <Link to="/">
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  );
};

export default ErrorPage;
