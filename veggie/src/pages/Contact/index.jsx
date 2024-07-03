import styles from './index.module.css';
import background from '../../assets/background3.png';
import decoration from '../../assets/decoration.png';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import React, { useState, useEffect } from 'react';

function index() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
    };

    const backgroundImageStyle = screenWidth <= 320 ? { backgroundImage: 'none' } : { backgroundImage: `url(${background})` };
    
    return (
        <div 
            className={styles.main}
            style={ backgroundImageStyle}
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
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                    <h2 className={styles.header2}>CONTACT FORM</h2>
                    <div className={styles.inputs}>
                        <input 
                            className={styles.input} 
                            type='text' 
                            placeholder='Name'
                            name='name'
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        <input 
                            className={styles.input} 
                            type='email' 
                            name='email'
                            placeholder='Email'
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <input 
                            className={styles.message} 
                            type='text' 
                            name='message'
                            placeholder='Message'
                            value={formData.message}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button className={styles.button} type='submit'>Send</button>
                </form>
            </div>
            <div className={styles.socials}>
                <img className={styles.icon} src={facebook} alt="" />
                <img className={styles.icon} src={instagram} alt="" />
            </div>
        </div>
    )
}

export default index
