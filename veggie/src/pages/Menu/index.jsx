import styles from "./index.module.css";

import decoration from "../../assets/decoration.png";

function index() {
  return (
    <div className={styles.main}>
      <header>Menu</header>
      <img src={decoration} alt="" />
      <section>
        <ul>
          <li>Starters</li>
          <li>Main dishes</li>
          <li>Desserts</li>
          <li>Drinks</li>
        </ul>
      </section>
    </div>
  );
}

export default index;
