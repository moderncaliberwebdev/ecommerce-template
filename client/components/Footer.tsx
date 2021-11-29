import React from 'react'

import styles from '../sass/pages/_home.module.scss'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__row1}>
                <div className={styles.footer__row1__col1}>
                    <div className={styles.footer__row1__col1__col1}>
                        <p className={styles.footer__row1__col1__col1__head}>SUPPORT</p>
                        <p className={styles.footer__row1__col1__col1__rows}>HELP CENTER</p>
                        <p className={styles.footer__row1__col1__col1__rows}>CONTACT US</p>
                        <p className={styles.footer__row1__col1__col1__rows}>SHIPPING INFO</p>
                        <p className={styles.footer__row1__col1__col1__rows}>ORDER STATUS</p>
                        <p className={styles.footer__row1__col1__col1__rows}>RETURNS & EXCHANGES</p>
                    </div>
                    <div className={styles.footer__row1__col1__col2}>
                    <p className={styles.footer__row1__col1__col1__head}>INFO</p>
                        <p className={styles.footer__row1__col1__col2__rows}>ABOUT US</p>
                        <p className={styles.footer__row1__col1__col2__rows}>CAREERS</p>
                        <p className={styles.footer__row1__col1__col2__rows}>PROJECT ALPHALAND</p>
                        <p className={styles.footer__row1__col1__col2__rows}>SUMMER SHREDDING 2021</p>
                    </div>
                </div>
                <div className={styles.footer__row1__col2}>
                    <h1 className={styles.footer__row1__col2__h1}>SIGN UP FOR ALPHALETE NEWSLETTER</h1>
                    <div className={styles.footer__row1__col2__input}>
                        <input type="text" className={styles.footer__row1__col2__input__text}/>
                        <button className={styles.footer__row1__col2__input__button}>SIGN UP</button>
                    </div>
                    <div className={styles.footer__row1__col2__social}>
                        <img src="/instagram.png" alt="" className={`${styles.footer__row1__col2__social__icon} ${styles.instagram}`}/>
                        <img src="/tiktok.png" alt="" className={`${styles.footer__row1__col2__social__icon} ${styles.tiktok}`}/>
                        <img src="/twitter.png" alt="" className={`${styles.footer__row1__col2__social__icon} ${styles.twitter}`}/>
                        <img src="/facebook.png" alt="" className={`${styles.footer__row1__col2__social__icon} ${styles.facebook}`}/>
                        <img src="/youtube.png" alt="" className={`${styles.footer__row1__col2__social__icon} ${styles.youtube}`}/>
                    </div>
                </div>
            </div>
            <div className={styles.footer__row2}>
                <p className={styles.footer__row2__text}>
                © 2021 | Alphalete Athletics LLC | All Rights Reserved
                </p>
                <p className={styles.footer__row2__heavy}>           
                    LEARN MORE | DREAM MORE | BE MORE
                </p>
                <p className={styles.footer__row2__light}>
                PRIVACY POLICY | TERMS OF SERVICE | CCPA
                </p>
            </div>
        </footer>
    )
}

export default Footer
