import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './IntroHomePage.module.css';
import photoBackground from '../../assets/photo_portfolio_emerick_fouchard.svg'

function IntroHomePage() {
    const h1Line1 = 'Emerick';
    const h1Line2 = 'Fouchard.';

    const sentence = {
        initial: {  },
        show: {
            transition: {
                delayChildren: 1,
                staggerChildren: 0.05,
                durationChildren: .1
            }
        }
    };

    const letter = {
        initial: { opacity: 0, y: 115 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <React.StrictMode>
            <motion.h1
                className={styles.H1MyName}
                variants={sentence}
                initial='initial'
                animate='show'
            >
                {h1Line1.split('').map((char, index) => {
                    return (
                        <motion.span key={char + '-' + index} variants={letter}>
                            {char}
                        </motion.span>
                    )
                })}
                <br/>
                {h1Line2.split('').map((char, index) => {
                    return (
                        <motion.span key={char + '-' + index} variants={letter}>
                            {char}
                        </motion.span>
                    )
                })}
            </motion.h1>
            <img src={photoBackground} className={styles.PhotoBackground}/>
        </React.StrictMode>
    );
}

export default IntroHomePage;