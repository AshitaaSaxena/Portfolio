import React from 'react'

import styles from "./Hero.module.css"
import { getImageUrl } from '../../utils'

export const Hero = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Hi, I'm Ashita</h1>
            <p className={styles.description}>
                I'm a Front-end Developer skilled in React and Javascript. 
                Reach out if you'd like to learn more! 
            </p>
            <a href="mailto:ashitadevendra@gmail.com" className={styles.contactBtn}>Contact me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt='Hero image of me'className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
    )
}
