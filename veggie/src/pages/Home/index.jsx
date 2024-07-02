import styles from "./index.module.css";

function index() {
  return (
    <nav>
      <ul className={styles.navigationBar}>
        <li>Home</li>
        <li>Specials</li>
        <li>About</li>
        <li>Menu</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default index;
