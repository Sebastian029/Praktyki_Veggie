import styles from "./index.module.css";

function MenuItem(props) {
  return (
    <article>
      <div className={styles.mealInfoBar}>
        <span>{props.name}</span>
        <span className={styles.dotsFilling}></span>
        <span>{props.price}$</span>
      </div>
      <span className={styles.mealIngredients}>{props.ingredients}</span>
    </article>
  );
}

export default MenuItem;
