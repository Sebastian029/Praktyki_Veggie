import styles from './index.module.css';
import GridComponent from './Components/GridComponent';
import decoration from "../../assets/decoration.png";

function index() {
  return (
    <div className={styles.specialsContainer}>
      <div className={styles.header}>
        This month specials
      </div>
      <img src={decoration} className={styles.img}/>
      <GridComponent/>
    </div>
  )
}

export default index

