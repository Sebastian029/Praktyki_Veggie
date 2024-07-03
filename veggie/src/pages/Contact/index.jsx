import styles from './index.module.css';
import background from '../../assets/background3.png';
import decoration from '../../assets/decoration.png';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';

function index() {
    return (
        <div 
            className={styles.main}
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className={styles.contact}>
                <h1 className={styles.header}>
                    Contact
                </h1>
                <img src={decoration} className={styles.decorationImg}/>
                <div className={styles.contactInfo}>
                    <div className={styles.adress}>
                        <h2 className={styles.header2}>VEGGIE</h2>
                        <p className={styles.text}>3428 Magnolia Avenue</p>
                        <p className={styles.text}>Hackettstown, NJ 07840</p>

                    </div>
                    <div className={styles.reservations}>
                        <h2 className={styles.header2}>RESERVATIONS</h2>
                        <p className={styles.text}>reservations@vegggie.com</p>
                        <p className={styles.text}>+48 202-555-0114</p>
                    </div>
                </div>
                <div className={styles.contactForm}>
                    <h2 className={styles.header2}>CONTACT FORM</h2>
                    <div className={styles.inputs}>
                        <input className={styles.input} type='text' placeholder='Name'/>
                        <input className={styles.input} type='email' placeholder='Email'/>
                        <input className={styles.message} type='text' placeholder='Mesage'/>
                    </div>
                    <button className={styles.button}>Send</button>
                </div>
            </div>
            <div className={styles.socials}>
                <img className={styles.icon} src={facebook} alt="" />
                <img className={styles.icon} src={instagram} alt="" />
            </div>
        </div>
    )
}

export default index
