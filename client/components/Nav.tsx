import React from 'react'

import styles from '../sass/pages/_home.module.scss'

export default function Nav() {
    return (
        <div className={styles.nav}>
            <a href="/" className={styles.nav__header}>
                <h1>
                    Alphalete
                </h1>
            </a>
            <div className={styles.nav__options}>
                <a href="/shop/women">Women</a>
                <a href="/shop/men">Men</a>
            </div>
            <div className={styles.nav__buttons}>
                <a href="/api/auth/login">
                    <img src="/profile.png" alt="Profile" className={styles.nav__imgs}/>
                </a>
                <a href="/search">
                 <img src="/search.png" alt="Search" className={styles.nav__imgs}/>
                </a>
               <a href="/cart">
                  <img src="/cart.png" alt="Cart" className={styles.nav__imgs}/>
               </a>
            </div>
        </div>
    )
}
