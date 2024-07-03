import styles from './index.module.css';
import decoration from "../../assets/decoration.png";
import signature from "../../assets/signature.png";
import aboutImage from "../../assets/background2_1-1.png";


function index() {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.aboutText}>
                <div className={styles.aboutHeader}>
                    About us
                </div>
                <img src={decoration} className={styles.decorationImg}/>
                <div className={styles.aboutDescription}>
                    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                </div>
                <img src={signature} className={styles.signature}/>
            </div>
            <img src={aboutImage} className={styles.aboutImage}/>
        </div>
    )
}

export default index
